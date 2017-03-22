import React from 'react';
import styled from 'styled-components';
import { Layout, Menu } from 'antd';
import { withRouter } from 'react-router-dom';

const { Header } = Layout;

class Navigation extends React.Component {

  // handleRedirect = (location = '/Projects') => window.location.replace(location);
  handleRedirect = (key) => this.props.onClick(key);

  render() {
    return (
    <Header>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['Home']}
        style={{ lineHeight: '64px' }}
        onClick={({ key }) => this.handleRedirect(key)}
      >
        <Menu.Item key="home">Home</Menu.Item>
        <Menu.Item key="projects">Projects</Menu.Item>
        <Menu.Item key="contact">Contact</Menu.Item>
      </Menu>
    </Header>
    );
  }
}

export default withRouter(Navigation);
