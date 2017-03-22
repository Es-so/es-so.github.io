import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Input, Radio, Menu, Dropdown, Icon, Button, Select } from 'antd';
import styled from 'styled-components';
import { getTypeList, getFiltering, getTags, getSort } from '../../actions/projects';
import { tagColors } from '../../utils/projects';
import R from 'ramda';

const InputGroup = Input.Group;
const Option = Select.Option;

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  justify-content: space-around;
  margin-bottom: 20px;
`;

const InputGroupStyle = styled(InputGroup)`
  width: auto;
  min-width: 350px;
  display: flex;
  align-items: flex-start;
`;

class Search extends React.Component {
  state = {
    searchOption: 'title',
    filter: '',
  }

  handleSelectFilter = (e) => {
    const { getFiltering } = this.props;
    this.setState({ searchOption: e },
      () => getFiltering(this.state.filter, this.state.searchOption));
  }

  handleTagSelected = (tags) => {
    const { getTags } = this.props;
    getTags(tags);
  }

  handleInputFilling = ({ target: { value } }) => {
    const { getFiltering } = this.props;
    const { searchOption } = this.state;
    this.setState({ filter: value }, () => getFiltering(this.state.filter, searchOption));
  }

  render() {
    const {
      state : { searchOption },
      handleSelectFilter,
      handleInputFilling,
      handleTagSelected,
    } = this;
    return(
      <InputGroupStyle compact >
        <Select
          defaultValue="title"
          size="large"
          style={{ width: '35%' }}
          onChange={handleSelectFilter}
        >
          <Option value="tags">Tags</Option>
          <Option value="title">Title</Option>
          <Option value="content">Content</Option>
        </Select>
          { searchOption === 'tags' &&
            <Select
              size="large"
              multiple
              style={{ width: '100%'}}
              placeholder="Select tag(s)"
              onChange={handleTagSelected}
            >
              { R.map(tag => <Option key={tag} value={tag}>{tag}</Option>, R.keys(tagColors)) }
            </Select>
              ||
            <Input
              size="large"
              placeholder="Enter your filter"
              onChange={handleInputFilling}
            />
          }
      
      </InputGroupStyle>
    )
  }
}

export const Header = ({ getTypeList, getFiltering, getTags, getSort }) => {
  const menu =
    <Menu onClick={({ key }) => getSort(key)}>
      <Menu.Item key="title">Alpha (default)</Menu.Item>
      <Menu.Divider />
      <Menu.Item key="dateOf">Most recent</Menu.Item>
      <Menu.Divider />
      <Menu.Item key="size">Project size</Menu.Item>
    </Menu>
  ;
  return(
    <Wrapper>
      <Radio.Group
        size="large"
        defaultValue="all"
        onChange={(e) => getTypeList(e.target.value)}
      >
        <Radio.Button key="all" value="all">All</Radio.Button>
        <Radio.Button key="C" value="C">C</Radio.Button>
        <Radio.Button key="Web" value="Web">Web</Radio.Button>
        <Radio.Button key="Python" value="Python">Python</Radio.Button>
        <Radio.Button key="Security" value="security">Security</Radio.Button>
      </Radio.Group>
      <Dropdown overlay={menu} trigger={['click']} >
        <Button size="large" href="#">
          Sort by <Icon type="down" />
        </Button>
      </Dropdown>
      <Search getFiltering={getFiltering} getTags={getTags} />
    </Wrapper>
  )
};

const actions = { getTypeList, getFiltering, getTags, getSort };

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
