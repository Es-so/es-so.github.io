import {
  TAGS_LOADED,
} from '../actions/contact';

const contact = (state = {}, action) => {
  const {
    tags,
    type,
  } = action;

  switch (type) {
  	case TAGS_LOADED:{
  	  	  return { ...state, tags };}
    default:
      return state;
  }
};

export default contact;
