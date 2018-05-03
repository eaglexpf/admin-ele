export const mutations = {
    changeLeftCollapse(state){
        state.left_collapse = !state.left_collapse;
    },
    changeBodyHeight(state,body_height){
        state.body_height = body_height;
    }
}
