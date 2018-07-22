import React from "react";
import styled from "styled-components";
import { Typography, Appbar, Drawer, Button } from "javascript-af-ui";
import { DrawerMenuItem } from "javascript-af-ui/Drawer";
import classNames from "classnames";
import HomeIcon from "../../icons/HomeIcon";
import HeadPhonesIcon from "../../icons/HeadPhonesIcon";
import TrendingIcon from "../../icons/TrendingIcon";
import NewsIcon from "../../icons/NewsIcon";
import DrawerOpenIcon from "../../icons/DrawerOpenIcon";
import DrawerCloseIcon from "../../icons/DrawerCloseIcon";

const LayoutContainer = styled.div`
  display: flex;
  @media all and (max-width: 480px) {
    display: block;
  }
`;

const ContentContainer = styled.div`
  margin-top: 56px;
  margin-left: 94px;
  transition: 0.2s all ease;
  width: calc(100% - 94px);
  &.jsui-content-expanded {
    margin-left: 248px;
    width: calc(100% - 248px);
  }
`;

const DrawerWithExpansion = styled(Drawer)`
  transition: all 0.4s ease-in-out;
  padding: 0;
  width: 248px;
  position: fixed;
  left: 0;
  .logo {
    padding-left: 1.275rem;
    padding-top: 0.7rem;
    @media all and (max-width: 480px) {
      display: none;
    }
  }
  &.jsui-drawer-collapsed {
    width: 94px;
    @media all and (max-width: 480px) {
      width: 100%;
      position: absolute;
      bottom: 0;
      height: 65px;
      min-height: auto;
      display: flex;
    }
  }
`;

const DrawerMenuItemWithExpansion = styled(DrawerMenuItem)`
  padding: 0.6rem;
  padding-left: 1.275rem;
  cursor: pointer;
  transition: 0.2s all ease;
  &.jsui-draweritem-collapsed {
    & .jsui-drawermenu-text {
      display: none;
    }
    @media all and (max-width: 480px) {
      padding: 0;
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 218px;
      margin: 0;
    }
  }
  &:hover .jsui-drawermenu-text > h4 {
    color: ${props => props.theme.primaryColor} !important;
  }
  &:hover svg {
    fill: ${props => props.theme.primaryColor};
    @media all and (max-width: 480px) {
      fill: #ffffff;
    }
  }
  & svg {
    transition: all 0.2s ease;
  }
  &:hover {
    background: #fff;
    @media all and (max-width: 480px) {
      background: ${props => props.theme.primaryGradient};
      height: 65px;
      width: 65px;
    }
  }
`;

const AppbarWithExapansion = styled(Appbar)`
  transition: all 0.4s ease-in-out;
  width: calc(100% - 94px);
  margin-left: 94px;
  position: fixed;
  top: 0;
  background: #ffffff;
  z-index: 1000;
  @media all and (max-width: 480px) {
    margin-left: 0;
    width: 100%;
  }
  & > button.jsui-expansion-button {
    padding: 0;
    padding-top: 2px;
    margin: 0 1rem;
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
  }
  &.jsui-appbar-expanded {
    width: calc(100% - 248px);
    margin-left: 248px;
    @media all and (max-width: 480px) {
      width: 100%;
      margin-left: 0;
    }
  }
  & .right {
    justify-content: flex-end;
    display: flex;
    flex: 1;
    padding-right: 1.7rem;
  }
`;

class Layout extends React.Component<{}, { collapsed: boolean }> {
  state = {
    collapsed: true
  };
  handleExpansionToggle = () => {
    this.setState(s => ({
      collapsed: !s.collapsed
    }));
  };
  render() {
    return (
      <LayoutContainer>
        <DrawerWithExpansion
          className={classNames({
            "jsui-drawer-collapsed": this.state.collapsed
          })}
          logo={"https://beta.javascript.af/static/logo.png"}
        >
          <DrawerMenuItemWithExpansion
            className={classNames({
              "jsui-draweritem-collapsed": this.state.collapsed
            })}
            icon={<HomeIcon />}
          >
            Repositories
          </DrawerMenuItemWithExpansion>
          <DrawerMenuItemWithExpansion
            className={classNames({
              "jsui-draweritem-collapsed": this.state.collapsed
            })}
            icon={<HeadPhonesIcon />}
          >
            Talks
          </DrawerMenuItemWithExpansion>
          <DrawerMenuItemWithExpansion
            className={classNames({
              "jsui-draweritem-collapsed": this.state.collapsed
            })}
            icon={<TrendingIcon />}
          >
            Featured
          </DrawerMenuItemWithExpansion>
          <DrawerMenuItemWithExpansion
            className={classNames({
              "jsui-draweritem-collapsed": this.state.collapsed
            })}
            icon={<NewsIcon />}
          >
            News
          </DrawerMenuItemWithExpansion>
        </DrawerWithExpansion>
        <AppbarWithExapansion
          className={classNames({
            "jsui-appbar-expanded": !this.state.collapsed
          })}
        >
          <button
            className="jsui-expansion-button"
            onClick={this.handleExpansionToggle}
          >
            {this.state.collapsed ? <DrawerOpenIcon /> : <DrawerCloseIcon />}
          </button>
          <Typography type="h4" margin={0}>
            Home
          </Typography>
          <div className="right">
            {/* TODO replace this with a link */}
            <Button
              onClick={() =>
                window.location.replace("http://localhost:8080/auth/github")
              }
            >
              Login
            </Button>
          </div>
        </AppbarWithExapansion>
        <ContentContainer
          className={classNames({
            "jsui-content-expanded": !this.state.collapsed
          })}
        >
          {this.props.children}
        </ContentContainer>
      </LayoutContainer>
    );
  }
}

export default Layout;
