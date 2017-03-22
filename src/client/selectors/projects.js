import R from 'ramda';
import { createSelector } from 'reselect';


const getArraysOfProjects = R.compose(R.map(R.values), R.values);
const getArrayOfProjects = R.reduce((accu, value) => ([ ...accu, ...value ]), []);
const regexp = filter => new RegExp(filter, 'i');
const match = (filter, target) => R.match(regexp(filter), target);
const matchTags = (tags = [''], project) => R.find(tag => R.find(projectTags => (tag ===  projectTags) , project.tags))(tags);
const filterTags = (tags, projects) => tags.length ? R.filter(p => matchTags(tags, p), projects) : projects;
const filterProjects = (filter, option, projects) => R.filter(project => match(filter, project[option]).length, projects)
const filterCategorie = (type, allProjects) => type !== 'all' ? R.filter(({ categorie }) => (categorie === R.toLower(type)), allProjects) : allProjects;
const diff = (a, b, sort) => sort === 'title' ? a[sort].localeCompare(b[sort]) : b[sort] - a[sort];
const sorting = (sort, projects) => R.sort((a, b) => diff(a, b, sort))(projects);

const getVisibleProject = (type = 'all', projects, filter = '', option = 'title', tags = [], sort = 'title') => {
  const allProjects = R.compose(getArrayOfProjects, getArraysOfProjects)(projects);
  return sorting(sort ,(option === 'tags' ? filterTags(tags ,filterCategorie(type, allProjects)) : filterProjects(filter, option, filterCategorie(type, allProjects))));
};

// _______________________________________________________________ \\

const getType = state => state.projects.typeProject;
const getProjects = state => state.projects.data;
const getFilter = state => state.projects.filter;
const getFilterOption = state => state.projects.option;
const getSort = state => state.projects.sort;
const getTags = state => state.projects.tags;

export const getWichProjects = createSelector( // eslint-disable-line
  [getProjects, getType, getFilter, getFilterOption, getTags, getSort],
    (projects, type, filter, option, tags, sort) =>
      getVisibleProject(type, projects, filter, option, tags, sort)
)
