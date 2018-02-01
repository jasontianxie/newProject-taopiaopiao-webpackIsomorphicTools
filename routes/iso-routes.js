const Main = require('../src/pages/main/index.tsx');
const Cinema = require('../src/pages/cinema/index.tsx');
const Wrap = require('../src/pages/wrap.tsx');
const routes = {
    path: '/',
    component: Wrap,
    indexRoute: { component: Main },
    childRoutes:[
        {
            path: 'main',
            component: Main,
        },{
            path: 'cinema',
            component: Cinema,
        }
    ]
}




export default routes;