
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
    'index.csr.html': {size: 1592, hash: 'a54e9fc05c043622ef3d0cf2ddf44907a3653f88301d24d073b61e329a3c50f1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1023, hash: 'c7baee862af9d0c87880b16b4e1ea14f34a110290cb171fb697636ed1fc4da74', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'login/index.html': {size: 6201, hash: '8c4d9eb7213eedfef1f37ab70ffec5d7b8030b5252734a9db7248a32d7da081d', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'index.html': {size: 5453, hash: '6627930243a5a5db6834fb3ce37d92c7d24fbf987b2e8d3ed336fc65bd5c2313', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 6902, hash: 'c07e7e3a5b5f877e3adf213715a80c27411bebf5d3f7f79e952b92eb5bb2ef5b', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'reserve/index.html': {size: 4832, hash: '9ad7fdbc6036f5fa9f09dabc2b757a6a8e013463064ca6f5ef12f1a7007c2583', text: () => import('./assets-chunks/reserve_index_html.mjs').then(m => m.default)},
    'my-reservations/index.html': {size: 5854, hash: '11bfc75856705bfe6df77cdfd827a7a9c13682b24f79358de0232c41ae9fa56f', text: () => import('./assets-chunks/my-reservations_index_html.mjs').then(m => m.default)},
    'facilities/index.html': {size: 5850, hash: 'dded1501a0c9e9fdc0c958aa5eec3d7b09da56efc1a7914ff320a761879f8a51', text: () => import('./assets-chunks/facilities_index_html.mjs').then(m => m.default)},
    'profile/index.html': {size: 6722, hash: 'cb915e3a30242ecad0c6c1a04e187a02a19044a9a44e1ec8b07bb8dd2fd3581e', text: () => import('./assets-chunks/profile_index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 7742, hash: 'df77361e22591bfbd0d9883d362327d4911edd44519ec0a25008107786b8e437', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'styles-JGX4B2HB.css': {size: 73701, hash: 'Gx2aouZVGDY', text: () => import('./assets-chunks/styles-JGX4B2HB_css.mjs').then(m => m.default)}
  },
};
