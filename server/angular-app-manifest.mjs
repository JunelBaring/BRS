
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
    'index.csr.html': {size: 1592, hash: 'e1c056eb97737b22c3119084d6cfa6d7c8e661387e6a0a74aa7a49b0f1cfdd86', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1023, hash: '0cebbdce7a76123b518fae288dfb5ee016806199c3f578c7c543bd1a022990f1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 5453, hash: 'd13143411198cb0cedc4dd21518cf22d0caba195f2dc9c65f9c952393f9f358c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 6201, hash: '3b5fe8cc7e2431defa7f02f0478d343ec3f3b592646c23f03310219555c4ce65', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 6905, hash: '1e2bb635a98c21620eacdcb264c487b5e818c2d37b136e1c301f407e8697ee2b', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'facilities/index.html': {size: 10522, hash: '60ee6e5677049c13aeef0f716383ec5046dceafd5d28c611c66678182b8a5515', text: () => import('./assets-chunks/facilities_index_html.mjs').then(m => m.default)},
    'reserve/index.html': {size: 9305, hash: 'fd3c1bce41765ee97810a4ad174d027dd893db53342a36ec4f2791879ebe5844', text: () => import('./assets-chunks/reserve_index_html.mjs').then(m => m.default)},
    'my-reservations/index.html': {size: 8508, hash: '159703ff3ab81f9cf7b6146952c7ded216716981aa19a405c5767a8f2bcb863e', text: () => import('./assets-chunks/my-reservations_index_html.mjs').then(m => m.default)},
    'profile/index.html': {size: 9693, hash: '2cb380e791272cfe7f7e9b81f675f8cb1b29296593ab4db21210bec2de9137b0', text: () => import('./assets-chunks/profile_index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 8080, hash: '1b3259d944f1bf23367dff1d9b703ca086a2fa6d48a83f399f580d7c211bdfd0', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'styles-JGX4B2HB.css': {size: 73701, hash: 'Gx2aouZVGDY', text: () => import('./assets-chunks/styles-JGX4B2HB_css.mjs').then(m => m.default)}
  },
};
