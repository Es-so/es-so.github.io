import React from 'react';
import R from 'ramda';
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button } from 'antd';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

import fields from '../../form/';
import { loadTags } from  '../../actions/contact';

const FormItem = Form.Item;
const Option = Select.Option;

const FormStyle = styled(Form)`
  display: flex;
  flex-flow: column;
  justify-content: center;
  width: 70%;
  min-width: 250px;
  max-width: 500px;
`

// ______________________ Test ___________________________________

function sendMail() {
  var link = "mailto:khatir.sofiane@gmail.com"
           + "?cc=skhatir@student.42.fr"
           + "&subject=" + escape("This is my subject")
           + "&body=" + escape("test")
  ;
  window.location.href = link;
}

//________________________________________________________________


class Contact extends React.Component {
  componentWillMount() {
    const { loadTags } = this.props;
    loadTags();
  }
  state = {
    confirmDirty: false,
  };
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        sendMail();
      }
    });
  }

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }

  checkConfirm = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }

  render() {
    const { form: { getFieldDecorator }, tags } = this.props;
    if (!tags) return null;
    return(
      <FormStyle onSubmit={this.handleSubmit}>
        
        <FormItem label={fields.name.label} hasFeedback>
          {getFieldDecorator(fields.name.key, fields.name)(<Input placeholder="Name" />)}
        </FormItem>


        <FormItem label={fields.email.label} hasFeedback>
          {getFieldDecorator(fields.email.key, fields.email)(<Input />)}
        </FormItem>


        <FormItem label={fields.phone.label} hasFeedback>
          {getFieldDecorator(fields.phone.key, fields.phone)(<Input />)}
        </FormItem>


        <FormItem label={fields.tags.label} >
          {getFieldDecorator(fields.tags.key, fields.tags)(
              <Select
                multiple
              >
               { R.map(tag => <Option key={tag} value={tag}>{tag}</Option>, tags) }
              </Select>
          )}
        </FormItem>


        <FormItem label={fields.content.label}>
          { getFieldDecorator(fields.content.key, fields.content)(
          <Input
            style={{ minHeight: '150px' }}
            autoComplete="off"
            type="textarea"
            rows={4}
          />
          )}
        </FormItem>

        <Button htmlType="submit" style={{margin: '3px', backgroudColor: 'red'}} type="primary">
           Submit<Icon type="check" />
        </Button>

      </FormStyle>
    );
  }
}


const actions = { loadTags };

const mapStateToProps = state => ({
  tags: state.contact.tags,
});



const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default R.compose(
  Form.create(),
  withRouter,
  connect(mapStateToProps, mapDispatchToProps))(Contact);

