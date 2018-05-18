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
    },
    getRandStr:function () {
        var CHARS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
        var chars = CHARS, uuid = new Array(36), rnd=0, r;
        for (var i = 0; i < 36; i++) {
            if (i==8 || i==13 ||  i==18 || i==23) {
                uuid[i] = '-';
            } else if (i==14) {
                uuid[i] = '4';
            } else {
                if (rnd <= 0x02) rnd = 0x2000000 + (Math.random()*0x1000000)|0;
                r = rnd & 0xf;
                rnd = rnd >> 4;
                uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
            }
        }
        return uuid.join('');
    },
    getUUID:function (state, getters, rootState, rootGetters) {
        if (!state.uuid){
            var uuid = localStorage.getItem("9527");
            if (!uuid){
                state.uuid = getters.getRandStr;
                localStorage.setItem("9527",state.uuid);
            }else {
                state.uuid = uuid;
            }
        }
        return state.uuid;
    }
}
