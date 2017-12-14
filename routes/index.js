const routes = [{
    path: '/',
    getComponents(nextState, callback) {
        require.ensure([], function (require) {
            callback(null, require('src/pages/main/index').default)
        })
    }
},{
    path: '/cinema',
    getComponents(nextState, callback) {
        require.ensure([], function (require) {
            callback(null, require('src/pages/cinema/index').default)
        })
    }
}];

export default routes;