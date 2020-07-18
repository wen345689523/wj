const routes = [
  {
    path: '/map',
    name: 'map',
    component: () => import(/* webpackChunkName: 'map' */ '../views/Map.vue')
  },
  {
    path: '/',
    name: 'Login',
    component: () => import(/* webpackChunkName: 'map' */ '../views/Login.vue')
  },
  {
    path: '/TaskInformation',
    name: 'TaskInformation',
    component: () =>
      import(
        /* webpackChunkName: 'TaskInformation' */
        '../views/TaskInformation.vue'
      )
  },
  {
    path: '/TaskHall',
    name: 'TaskHall',
    component: () =>
      import(/* webpackChunkName: 'TaskHall' */ '../views/TaskHall.vue')
    // children: [
    //   {
    //     path: '',
    //     name: 'subAbort',
    //     component: () => import(/* webpackChunkName: 'subAbort' */ '../views/SubAbout.vue')
    //   }
    // ]
  },
  {
    path: '/Project',
    name: 'Project',
    component: () =>
      import(/* webpackChunkName: 'Project' */ '../views/Project.vue'),
    children: [
      {
        path: '',
        component: () => import(/* webpackChunkName: 'ProjectHome' */ '../views/ProjectHome.vue')
      },
      {
        path: 'Details',
        component: () => import(/* webpackChunkName: 'ProjectDetails' */ '../views/ProjectDetails.vue')
      }
    ]
  },
  {
    path: '/Need',
    name: 'Need',
    component: () => import(/* webpackChunkName: 'Need' */ '../views/Need.vue')
  },
  {
    path: '/Bug',
    name: 'Bug',
    component: () => import(/* webpackChunkName: 'Bug' */ '../views/Bug.vue')
  },
  {
    path: '/WorkJournal',
    name: 'WorkJournal',
    component: () =>
      import(/* webpackChunkName: 'WorkJournal' */ '../views/WorkJournal.vue')
  },
  {
    path: '/Organization',
    name: 'Organization',
    component: () =>
      import(
        /* webpackChunkName: 'Organization' */
        '../views/Organization.vue'
      )
  },
  {
    path: '/NumberRecord',
    name: 'NumberRecord',
    component: () =>
      import(
        /* webpackChunkName: 'NumberRecord' */
        '../views/NumberRecord.vue'
      )
  },
  {
    path: '/New',
    name: 'New',
    component: () =>
      import(
        /* webpackChunkName: 'New' */
        '../views/New.vue'
      )
  },
  // {
  //   path: '/ProjectDetails',
  //   name: 'ProjectDetails',
  //   component: () =>
  //     import(
  //       /* webpackChunkName: 'ProjectDetails' */
  //       '../views/ProjectDetails.vue'
  //     )
  // }
]
export default routes
