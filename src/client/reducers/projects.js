import {
  PROJECTS_LOADED,
  PROJECT_LOADED,
  GET_TYPE_LIST,
  GET_FILTERING,
  GET_TAGS,
  GET_SORT,
} from '../actions/projects';

const projects = (state = { data: {} }, action) => {
  const {
    type = '',
    typeProject,
    filter,
    option = 'Title',
    tags = [],
    sort = 'name',
    payload,
    project,
  } = action;

  switch (type) {
  	case PROJECTS_LOADED:
  	  return { ...state, data: payload };
    case PROJECT_LOADED:
      return { ...state, project }
  	case GET_TYPE_LIST:
  	  	return { ...state, typeProject };
    case GET_FILTERING:
      return { ...state, filter, option };
    case GET_TAGS:
      return { ...state, tags };
    case GET_SORT:
      return { ...state, sort }
    default:
      return state;
  }
};

export default projects;
