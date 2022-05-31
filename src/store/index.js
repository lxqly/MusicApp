import Vue from 'vue'
import Vuex, { mapMutations } from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        audio:{
            ele: null,
            status: null,
            data: {},
            duration: 0,
            currentTime: 0
        },
        play: false,
    },
    mutations: {
        SET_AUDIO_ELE(state, val) {
            state.audio.ele = val;
        },
        SET_AUDIO_STATUS(state, val) {
            state.audio.status = val;
        },
        SET_AUDIO_DATA(state, val) {
            state.audio.data = val;
        },
        SET_AUDIO_DURATION(state, val) {
            state.audio.duration = val;
        },
        SET_AUDIO_CURRENT_TIME(state, val) {
            state.audio.currentTime = val;
        },
        SET_AUDIO_PLAY(state,val) {
            state.play = val;
        }
    },
    getters: {
        audio_progress: state=>{
            return new Number((state.audio.currentTime / state.audio.duration * 100).toFixed(2))
        }
    }
})