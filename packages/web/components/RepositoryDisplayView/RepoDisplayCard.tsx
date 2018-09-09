import * as React from 'react';
import styled from 'styled-components';

const SRepoDisplayCard = styled.div`
  background: ${(props: { bg?: string }) => props.bg || 'rebeccapurple'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
  padding: 1rem;
  font-family: 'Fira Sans', sans-serif;
  .tags {
    margin: 4px 0;
    font-size: 16px;
    font-family: 'Fira Mono';
    font-weight: 400;
  }
  .header {
    margin: 5px 0;
  }
  .desc {
    font-size: 17px;
    margin: 5px 0;
    font-weight: 600;
    font-family: 'Fira Mono';
  }
`;

interface Props {
  tags?: string[];
  title: string;
  description: string;
  bg?: string;
}

export class RepoDisplayCard extends React.Component<Props> {
  render() {
    const { tags, title, description, ...others } = this.props;
    return (
      <SRepoDisplayCard {...others}>
        <h5 className="tags">{tags.map(tag => `#${tag.toUpperCase()} `)}</h5>
        <h1 className="header">{title}</h1>
        <p className="desc">{description}</p>
        {/* <div className="stats">Stars: 5.3K, 100 people found this useful</div> */}
      </SRepoDisplayCard>
    );
  }
}
