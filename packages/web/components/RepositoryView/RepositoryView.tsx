import React from "react";
import styled from "styled-components";
import { Typography, Card, CardContent, CardHeader } from "javascript-af-ui";
import { Sparklines, SparklinesCurve } from "react-sparklines";
import GitHubIcon from "../../icons/GithubIcon";
import HouseIcon from "../../icons/HouseIcon";
import "github-markdown-css";
import { RepositoryController } from "@jsaf/controller";

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
  value: JSX.Element | number | string;
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
  render() {
    return (
      <RepositoryController owner={this.props.user} slug={this.props.repo}>
        {data => {
          return (
            <Card elevation={1}>
              <CardHeader title="MDX" />
              <CardContentWithGrid>
                <MdContent>
                  <div
                    className="markdown-body"
                    dangerouslySetInnerHTML={{ __html: data.readmeData }}
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
                          data.gitData &&
                          data.gitData.license &&
                          data.gitData.license.spdx_id
                        }
                      />
                      <StatsSectionKeyValuePair
                        name="Stars"
                        value={data.gitData && data.gitData.stargazers_count}
                      />
                      <StatsSectionKeyValuePair
                        name="Forks"
                        value={data.gitData && data.gitData.forks_count}
                      />
                      <StatsSectionKeyValuePair
                        name="Issues"
                        value={data.gitData && data.gitData.open_issues}
                      />

                      <StatsSectionKeyValuePair
                        name="Language"
                        value={data.gitData && data.gitData.language}
                      />
                    </StatsSection>
                    <StatsSection>
                      <Typography type="h4" margin={6}>
                        Activity
                      </Typography>
                      {data.commitData && (
                        <Sparklines data={data.commitData.all} height={90}>
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
                        value={data.gitData && data.gitData.full_name}
                      />
                      <StatsSectionKeyValuePair
                        noHalfDisection={true}
                        name={<HouseIcon style={{ height: "32px" }} />}
                        value={data.gitData && data.gitData.homepage && "Visit"}
                      />
                    </StatsSection>
                  </StatsSticky>
                </StatsContainer>
              </CardContentWithGrid>
            </Card>
          );
        }}
      </RepositoryController>
    );
  }
}

export default RepositoryView;
