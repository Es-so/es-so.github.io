import React from 'react';
import ReactMarkdown from 'react-markdown';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

import Header from './Header'
import { loadProject } from '../../actions/projects';

const Wrapper = styled.div`
  width: 90%;
  min-width: 450px;
  display: flex;
  flex-flow: column;
  align-items: center;
  margin-top: 20px;
`;

class Project extends React.Component {
  componentWillMount() {
    const {
      loadProject,
      match: {
        params: { categorie, id },
      }
    } = this.props;
    loadProject(id, categorie);
  }
  render () { 
  const { project } = this.props;
  if (!project) return null;
  console.log(this.props)
  return(
    <Wrapper>
      <Header project={project} />
      on progress
    </Wrapper>)
  }
};

const actions = { loadProject };

const mapStateToProps = state => ({
  project: state.projects.project,
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Project));
