
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
    'index.csr.html': {size: 1592, hash: '2f91487d42b1f4ff7efc2bc73baf7044e997d7068718cc3532a3e03883fa0a46', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1023, hash: '3181e396613797a231ff38800fbbd24349632944499e6825700b8ef2abbfb0c6', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 5453, hash: 'd78bd67a43b8ca15cdbef3761a463868b75d5d5fa6e6d9b4f9d924d09b58bd96', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 6066, hash: '2d33131689a299bdf9c17c2709d5345130166e54a928b7074a6b1cd8f90cfd63', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 6868, hash: '83fb452cb77749921aca43eefd6a7dad759774d8f44d7a26f15f3917720b18e5', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'reserve/index.html': {size: 4832, hash: '0931bd4de72bc30e017f667661a40a6d95f77f422e8ef8f2696843116c7cde7d', text: () => import('./assets-chunks/reserve_index_html.mjs').then(m => m.default)},
    'facilities/index.html': {size: 5850, hash: 'ec54f10f530d40494c4e40cecee26ace941afe2fb90de4f5f039ee46581fcc51', text: () => import('./assets-chunks/facilities_index_html.mjs').then(m => m.default)},
    'my-reservations/index.html': {size: 5854, hash: 'ed30ce500e6cba73ae038f60d6c6f7055c9bbea7f9cbf40e1e7900fa4ac1d140', text: () => import('./assets-chunks/my-reservations_index_html.mjs').then(m => m.default)},
    'profile/index.html': {size: 6722, hash: 'c9543f662ce8343bbd23d3538eb2c40727f4b34b98abf7edce56e0a189c4e00e', text: () => import('./assets-chunks/profile_index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 7742, hash: '237b18777cde06e0b662de29e5b8337f19fde47134200855e9859ccb5584142f', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'styles-JGX4B2HB.css': {size: 73701, hash: 'Gx2aouZVGDY', text: () => import('./assets-chunks/styles-JGX4B2HB_css.mjs').then(m => m.default)}
  },
};
