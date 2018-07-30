import React from "react";
import styled from "styled-components";
import { Typography, Card, CardContent, CardHeader } from "javascript-af-ui";
import { Sparklines, SparklinesCurve } from "react-sparklines";
import GitHubIcon from "../../icons/GithubIcon";
import HouseIcon from "../../icons/HouseIcon";
import "github-markdown-css";

const CardContentWithGrid = styled(CardContent)`
  display: grid;
  grid-template-columns: 75% 1fr;
  grid-gap: 6px;
  grid-template-areas: "md_content stats";
  @media all and (max-width: 880px) {
    display: flex;
    flex-direction: column;
  }
`;

const MdContent = styled.div`
  grid-area: md_content;
`;

const StatsSection = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  h4 {
    margin: 6px 0;
    font-family: "Fira Sans Extra Condensed", sans-serif;
    text-transform: uppercase;
    width: max-content;
    border-bottom: 1px solid #6200ee;
  }
  padding: 1rem 0.5rem;
  ::after {
    content: "";
    display: block;
    position: absolute;
    width: 75%;
    left: 7.5%;
    bottom: 0;
    border-bottom: 3px solid #6200ee;
    opacity: 0.5;
  }
`;

interface StatsSectionKeyValuePairStyledProps {
  noHalfDisection?: boolean;
}

const StatsSectionKeyValuePairStyled = styled.div`
  padding: 0.5rem 0.25rem;
  display: flex;
  align-items: center;
  transition: 0.2s ease all;
  :hover {
    background: #eee;
  }
  .jsui-stats-section-name {
    flex: ${(props: StatsSectionKeyValuePairStyledProps) =>
      props.noHalfDisection ? "unset" : 1};
    font-weight: 300;
    opacity: 0.75;
  }
  .jsui-stats-section-value {
    flex: 1;
    margin-left: ${(props: StatsSectionKeyValuePairStyledProps) =>
      props.noHalfDisection ? "1rem" : "unset"};
    font-weight: 300;
    font-family: "Fira Sans Extra Condensed", sans-serif;
  }
`;
const StatsSectionKeyValuePair: React.SFC<{
  name: JSX.Element | string;
  value: JSX.Element | string;
  noHalfDisection?: boolean;
}> = ({ name, value, ...props }) => {
  if (!value) {
    return null;
  }
  return (
    <StatsSectionKeyValuePairStyled {...props}>
      <Typography className="jsui-stats-section-name" type="h5" margin={0}>
        {name}
      </Typography>
      <Typography className="jsui-stats-section-value" type="h5" margin={0}>
        {value}
      </Typography>
    </StatsSectionKeyValuePairStyled>
  );
};

const StatsContainer = styled.div`
  grid-area: stats;
`;

const StatsSticky = styled.div`
  @media all and (min-height: 690px) {
    position: sticky;
    top: 46px;
    display: flex;
    flex-direction: column;
  }
  @media all and (max-width: 880px) {
    position: unset;
    top: unset;
  }
`;

class RepositoryView extends React.Component<{ user: string; repo: string }> {
  state = {
    gitData: null,
    readmeData: "",
    commitData: []
  };
  componentDidMount() {
    const { user, repo } = this.props;
    fetch(`https://api.github.com/repos/${user}/${repo}`)
      .then(response => response.json())
      .then(res => this.setState({ gitData: res }));
    fetch(`https://api.github.com/repos/${user}/${repo}/readme`, {
      headers: {
        Accept: "application/vnd.github.VERSION.html"
      }
    })
      .then(res => res.text())
      .then(res => this.setState({ readmeData: res }));
    fetch(`https://api.github.com/repos/${user}/${repo}/stats/participation`)
      .then(r => r.json())
      .then(r => this.setState({ commitData: r.all }));
  }

  render() {
    const { user, repo } = this.props;
    const regexp = /(href)="(\.)/gim;
    const regexp2 = /(src)="(\.)/gim;
    const parsed1 = this.state.readmeData.replace(
      regexp,
      `$1="https://github.com/${user}/${repo}/tree/master`
    );
    const parsed = parsed1.replace(
      regexp2,
      `$1="https://raw.githubusercontent.com/${user}/${repo}/master`
    );
    return (
      <Card elevation={1}>
        <CardHeader title="MDX" />
        <CardContentWithGrid>
          <MdContent>
            <div
              className="markdown-body"
              dangerouslySetInnerHTML={{ __html: parsed }}
            />
          </MdContent>
          <StatsContainer>
            <StatsSticky>
              <StatsSection>
                <Typography type="h4" margin={6}>
                  Meta
                </Typography>
                <StatsSectionKeyValuePair
                  name="License"
                  value={
                    this.state.gitData && this.state.gitData.license.spdx_id
                  }
                />
                <StatsSectionKeyValuePair
                  name="Stars"
                  value={
                    this.state.gitData && this.state.gitData.stargazers_count
                  }
                />
                <StatsSectionKeyValuePair
                  name="Forks"
                  value={this.state.gitData && this.state.gitData.forks_count}
                />
                <StatsSectionKeyValuePair
                  name="Issues"
                  value={this.state.gitData && this.state.gitData.open_issues}
                />

                <StatsSectionKeyValuePair
                  name="Language"
                  value={this.state.gitData && this.state.gitData.language}
                />
              </StatsSection>
              <StatsSection>
                <Typography type="h4" margin={6}>
                  Activity
                </Typography>
                {this.state.commitData && (
                  <Sparklines data={this.state.commitData} height={90}>
                    <SparklinesCurve color="#000" />
                  </Sparklines>
                )}
              </StatsSection>
              <StatsSection>
                <Typography type="h4" margin={6}>
                  Links
                </Typography>
                <StatsSectionKeyValuePair
                  noHalfDisection={true}
                  name={<GitHubIcon style={{ height: "30px" }} />}
                  value={this.state.gitData && this.state.gitData.full_name}
                />
                <StatsSectionKeyValuePair
                  noHalfDisection={true}
                  name={<HouseIcon style={{ height: "32px" }} />}
                  value={
                    this.state.gitData && this.state.gitData.homepage && "Visit"
                  }
                />
              </StatsSection>
            </StatsSticky>
          </StatsContainer>
        </CardContentWithGrid>
      </Card>
    );
  }
}

export default RepositoryView;
