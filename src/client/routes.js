import React from 'react';

import Home from './components/Home'
import Projects from './components/Projects'
import Project from './components/Project'
import Contact from './components/Contact'


const routes = [
  {
    path: '/',
    exact: true,
    auth: true,
    component: Home,
  },
  {
    path: '/home',
    exact: true,
    auth: true,
    component: Home,
  },
  {
    path: '/projects',
    component: Projects,
    exact: true,
    auth: true,
  },
  {
    path: '/projects/:categorie/:name/:id',
    component: Project,
    exact: true,
    auth: true,
  },
  {
    path: '/projects/show/:id',
    component: Project,
    exact: true,
    auth: true,
  },
  {
    path: '/contact',
    component: Contact,
    exact: true,
    auth: true,
  },
];

export const defaultRoute = () => routes.filter(r => r.default)[0];
export default routes;