const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/TaskInformation',
    name: 'TaskInformation',
    component: () => import('../views/TaskInformation.vue')
  },
  {
    path: '/TaskHall',
    name: 'TaskHall',
    component: () => import('../views/TaskHall.vue')
  },
  {
    path: '/Project',
    name: 'Project',
    component: () => import('../views/Project.vue'),
    children: [
      {
        path: '/',
        name: 'Project',
        component: () => import('../views/ProjectHome.vue')
      },
      {
        path: 'Details',
        name: 'Details',
        component: () => import('../views/ProjectDetails.vue')
      }
    ]
  },
  {
    path: '/Need',
    name: 'Need',
    component: () => import('../views/Need.vue')
  },
  {
    path: '/Bug',
    name: 'Bug',
    component: () => import('../views/Bug.vue')
  },
  {
    path: '/WorkJournal',
    name: 'WorkJournal',
    component: () => import('../views/WorkJournal.vue')
  },
  {
    path: '/Organization',
    name: 'Organization',
    component: () => import('../views/Organization.vue')
  },
  {
    path: '/NumberRecord',
    name: 'NumberRecord',
    component: () => import('../views/NumberRecord.vue')
  },
  {
    path: '/New',
    name: 'New',
    component: () => import('../views/New.vue')
  },
  {
    path: '/Admin',
    name: 'Admin',
    component: () => import('../views/Admin.vue')
  }
]
export default routes
