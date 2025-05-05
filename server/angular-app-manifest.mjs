
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/BRS/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/BRS"
  },
  {
    "renderMode": 2,
    "route": "/BRS/login"
  },
  {
    "renderMode": 2,
    "route": "/BRS/dashboard"
  },
  {
    "renderMode": 2,
    "route": "/BRS/register"
  },
  {
    "renderMode": 2,
    "route": "/BRS/reserve"
  },
  {
    "renderMode": 2,
    "route": "/BRS/facilities"
  },
  {
    "renderMode": 2,
    "route": "/BRS/my-reservations"
  },
  {
    "renderMode": 2,
    "route": "/BRS/profile"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1592, hash: 'd7cb4c0fea84fe9810d270c52e34fdeed90810d5da8f689eb50a1b6717103f28', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1023, hash: 'e782ccf5628373488683bb0bf634e75fe1391f7b657e2f46c13a233f6c55c6a3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 5453, hash: 'c9995fa3a9411d08d7f7c67913a918aed105eb9f789e5955f0162893b79351b7', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 6066, hash: '7bb22607a99a2ee97c5491eb3d74cd3fb80c15465b83c7bb188b6075f2cabfaa', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 7588, hash: 'bc0ceab9cec2244a6affda3ebb1e0f6d58bcd20c540d81a1eb6062ecd0cd66e7', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'reserve/index.html': {size: 4832, hash: 'a63e8747cdde950095d73012a7e62f49067d517c521c3ed10078f1c59d54655e', text: () => import('./assets-chunks/reserve_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 6868, hash: '69653e0405f465617e5c2cc993eb70dba946d92add6a7faab7c4a10749a4c16a', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'facilities/index.html': {size: 5850, hash: '38ea194811f230fd52fb0e90a98b5900c2af8601df0e75e0fe5ee0aa2a0c7b12', text: () => import('./assets-chunks/facilities_index_html.mjs').then(m => m.default)},
    'my-reservations/index.html': {size: 5859, hash: '42c79338610ce51c85f63e48a453f71ca449797fcedb2552728b31cd8ed893cb', text: () => import('./assets-chunks/my-reservations_index_html.mjs').then(m => m.default)},
    'profile/index.html': {size: 6722, hash: 'd317e9581d3d74c86fe6b459bd677fe95d91abd06d9d01605d66336226d59b88', text: () => import('./assets-chunks/profile_index_html.mjs').then(m => m.default)},
    'styles-JGX4B2HB.css': {size: 73701, hash: 'Gx2aouZVGDY', text: () => import('./assets-chunks/styles-JGX4B2HB_css.mjs').then(m => m.default)}
  },
};
