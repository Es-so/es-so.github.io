import R from 'ramda';
import { projects } from '../utils/projects';

export const LOAD_PROJECTS = 'projects/loadProjects';
export const PROJECTS_LOADED = 'projects/projectsLoaded';

export const LOAD_PROJECT = 'projects/loadProject';
export const PROJECT_LOADED = 'projects/projectLoaded';

export const FILTER_PROJECT_LIST = 'projects/filterProjectList';
export const SORT_PROJECT_LIST = 'projects/sortProjectList';
export const GET_TYPE_LIST = 'projects/getTypeList';
export const GET_FILTERING = 'projects/getFiltering';
export const GET_TAGS = 'projects/getTags';
export const GET_SORT = 'projects/getSort';

// _______________________________________  Filter


export const getTypeList = typeProject => ({
  type: GET_TYPE_LIST,
  typeProject,
});

export const getSort = sort => ({
  type: GET_SORT,
  sort,
});

export const getTags = tags => ({
  type: GET_TAGS,
  tags,
});

export const getFiltering = (filter, option) => ({
  type: GET_FILTERING,
  filter,
  option,
});

// _______________________________________  Load

export const projectLoaded = project => ({
  type: PROJECT_LOADED,
  project,
});

export const loadProject = (id, type) => (dispatch) => {
  const project = R.find(p => p.id === Number(id))(R.values(projects[type]));
  dispatch(projectLoaded(project));
}



export const projectsLoaded = projects => ({
  type: PROJECTS_LOADED,
  payload: projects,
});


export const loadProjects = () => (dispatch) => {
  const allProjects = projects;
  dispatch(projectsLoaded(projects));
}
