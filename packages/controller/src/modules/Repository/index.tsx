import * as React from 'react';
import { graphql, DataValue } from 'react-apollo';
import { QmeQuery } from '../User';
import gql from 'graphql-tag';
import {
  RepositoryQuery,
  RepositoryQueryVariables,
  meQuery
} from '../../types';
import { GithubApi } from './githubApiInterface';

const RepositoryQuery = gql`
  query RepositoryQuery($slug: String!, $ownerUsername: String!) {
    getRepositoryBySlug(slug: $slug, ownerUsername: $ownerUsername) {
      id
      slug
      githubUrl
      githubName
      githubOwner
      ownerUsername
      isFeatured
      description
      createdAt
    }
  }
`;

interface Props {
  slug: string;
  owner: string;
  children: (s: State) => any;
}
interface State {
  gitData: GithubApi;
  readmeData: string;
  commitData: {
    all: number[];
    owner: number[];
  };
}

class R extends React.Component<
  {
    RepoQuery: DataValue<RepositoryQuery>;
    MeQuery: DataValue<meQuery>;
    slug: string;
    owner: string;
    children: (s: State) => any;
  },
  State
> {
  state: State = {
    gitData: null,
    readmeData: '',
    commitData: {
      all: [],
      owner: []
    }
  };
  componentDidMount() {
    if (this.props.RepoQuery.loading || this.props.MeQuery.loading) {
      return;
    }

    const {
      RepoQuery: {
        getRepositoryBySlug: { githubName: repo, githubOwner: user }
      },
      MeQuery
    } = this.props;
    let token = '';
    if (MeQuery.getUserInfo) {
      token = `?access_token=${MeQuery.getUserInfo.githubToken}`;
    }
    fetch(`https://api.github.com/repos/${user}/${repo}${token}`)
      .then(response => response.json())
      .then(res => this.setState({ gitData: res }));
    fetch(`https://api.github.com/repos/${user}/${repo}/readme${token}`, {
      headers: {
        Accept: 'application/vnd.github.VERSION.html'
      }
    })
      .then(res => res.text())
      .then(res => {
        const regexp = /(href)="(\.)/gim;
        const regexp2 = /(src)="(\.)/gim;
        const parsed1 = res.replace(
          regexp,
          `$1="https://github.com/${user}/${repo}/tree/master`
        );
        const parsed = parsed1.replace(
          regexp2,
          `$1="https://raw.githubusercontent.com/${user}/${repo}/master`
        );
        this.setState({ readmeData: parsed });
      });
    fetch(
      `https://api.github.com/repos/${user}/${repo}/stats/participation${token}`
    )
      .then(r => r.json())
      .then(r => this.setState({ commitData: r }));
  }
  render() {
    return this.props.children(this.state);
  }
}

const RepositoryController = graphql<
  Props,
  RepositoryQuery,
  RepositoryQueryVariables
>(RepositoryQuery, {
  name: 'RepoQuery',
  options: (props: Props) => ({
    variables: {
      slug: props.slug,
      ownerUsername: props.owner
    }
  })
})(graphql<Props, meQuery>(QmeQuery, { name: 'MeQuery' })(R));

export { RepositoryController };
