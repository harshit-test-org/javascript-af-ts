import React from "react";
import styled from "styled-components";
import { Typography, Appbar, Drawer } from "javascript-af-ui";
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
  transition: 0.2s all ease;
  width: calc(100% - 94px);
  &.jsui-content-expanded {
    width: calc(100% - 248px);
  }
`;

const DrawerWithExpansion = styled(Drawer)`
  transition: all 0.4s ease-in-out;
  padding: 0;
  width: 248px;
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
  position: absolute;
  top: 0;
  @media all and (max-width: 480px) {
    margin-left: 0;
    width: 100%;
  }
  & > button {
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
          <button onClick={this.handleExpansionToggle}>
            {this.state.collapsed ? <DrawerOpenIcon /> : <DrawerCloseIcon />}
          </button>
          <Typography type="h4" margin={0}>
            Home
          </Typography>
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
