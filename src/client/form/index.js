import R from 'ramda';

const epurStr = R.compose(R.replace(/\s{2,}/g, ' '), R.trim);

const fields = {
  name: {
    key: 'name',
    label: 'Mr/Mrs',
    rules: [
      { required: true, message: 'Please input your name!' },
    ],
    validateTrigger: 'onBlur',
  },

  email: {
    key: 'email',
    label: 'E-mail',
    rules: [
      { type: 'email', message: 'The input is not valid E-mail!' },
      { required: true, message: 'Please input your E-mail!' },
    ],
    validateTrigger: 'onBlur',
  },

  phone: {
    key: 'phone',
    label: 'Phone',
    rules: [
    ],
    validateTrigger: 'onBlur',
  },

  tags: {
    key: 'tags',
    label: 'Tags',
    rules: [
    ],
    validateTrigger: 'onBlur',
  },

  content: {
    key: 'content',
    label: 'Subject',
    rules: [
      { required: true },
    ],
    validateTrigger: 'onBlur',
  },
};

export default fields;

