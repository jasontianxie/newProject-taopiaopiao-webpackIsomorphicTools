export const routes = [{
    path: '/main',
    getComponents(nextState, callback) {
        require.ensure([], function (require) {
            callback(null, require('src/pages/main/index'))
        })
    }
}, {
    path: '/cinema',
    getComponents(nextState, callback) {
        require.ensure([], function (require) {
            callback(null, require('src/pages/cinema/index'))
        })
    }
}]