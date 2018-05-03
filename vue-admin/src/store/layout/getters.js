export const getters = {
    getBodyHeight:function (state,mutations) {
        if (state.body_height===0){
            var height = document.documentElement.clientHeight || document.body.clientHeight;
            state.body_height = height;
        }
        return state.body_height;
    },
    getLeftCollapse:function (state) {
        return state.left_collapse;
    }
}
