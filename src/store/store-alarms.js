import Vue from 'vue'
import { uid } from 'quasar'
import { firebaseDb } from "boot/firebase"

const state = {

alarms: {
    'ID1': {
        title: "Lick a tree",
        time: "09:55 PM",
        on: true,
        sound: "op3",
        days: {
            sday: true,
            mday: true,
            tday: true,
            wday: false,
            thday: false,
            fday: false,
            stday: false
        }
    },
    'ID2': {
        title: "Lick a house",
        time: "09:57 PM",
        on: true,
        sound: "op2",
        days: {
            sday: true,
            mday: true,
            tday: true,
            wday: false,
            thday: false,
            fday: false,
            stday: false
        }
    },
    'ID3': {
        title: "a tree",
        time: "09:56 PM",
        on: true,
        sound: "op1",
        days: {
            sday: true,
            mday: true,
            tday: true,
            wday: false,
            thday: false,
            fday: false,
            stday: false
        }
    },

},

}


const mutations = {
    updateAlarm(state, payload) {
        Object.assign(state.alarms[payload.id], payload.updates)
    },
    addAlarm(state, payload) {
        Vue.set(state.alarms, payload.id, payload.alarm)
    },
    deleteAlarm(state, key) {
        Vue.delete(state.alarms, key)
    }
}

const actions = {
    updateAlarm({ commit }, payload) {
        commit('updateAlarm', payload)
    },
    addAlarm({ commit }, alarm){
        let alarmId = uid()
        let payload = {
            id: alarmId,
            alarm: alarm
        }
        commit('addAlarm', payload)
    },
    deleteAlarm({ commit }, key) {
        commit('deleteAlarm', key)
    }
}

const getters = {
    alarms: (state) => {
        return state.alarms
    },


    
}
export default {
    namespaced:true,
    state,
    mutations,
    actions, 
    getters
}