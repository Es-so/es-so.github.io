import React from 'react';
import styled from 'styled-components';
import { Icon, Button } from 'antd';

import { titleStyle } from '../../utils/projects';

const HeaderStyle = styled.div`
  background: whitesmoke;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  align-items:center;
  font-size: 1.5em;
  padding: 5px;
`;

const Title = styled.h2`
  margin-right: auto;
  margin-left: auto;
`;

const Header = ({ project }) =>
  <HeaderStyle style={{ color: `${titleStyle[project.categorie].color}` }} >
    <Icon style={{ fontSize: '1.5em' }} type={ titleStyle[project.categorie].icon } />
    
    <Title > { project.title } </Title>
    
    <Button type="primary" ghost>
      Go back <Icon type="left" />
    </Button>
  </HeaderStyle>
;

export default Header;