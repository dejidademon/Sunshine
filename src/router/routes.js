const routes = [{
    path: '/',
    component: () => import('layouts/Layout.vue'),
    children: [
      {
      path: '/',
      component: () => import('pages/PageAlarms.vue'),
    },
    {
      path: '/assignments',
      component: () => import('pages/PageAssignments.vue'),
    },
    {
      path: '/timer',
      component: () => import('pages/PageTimer.vue')
    },
    {
      path: '/weather',
      component: () => import('pages/PageWeather.vue')
    },
    {
      path: '/settings',
      component: () => import('pages/PageSettings.vue'),
    }
  ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
