import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import moment from 'moment-timezone';
moment.tz.setDefault('UTC');

export default new Vuex.Store({
	state:{
		currentYear : 2018,
		currentMonth: 9,
		eventFormPosX:0,
		eventFormPosY:0,
		eventFormActive: false,
		events:[
			{description: 'r1', date: moment('2018-09-01')},
			{description: 'r1', date: moment('2018-09-02')},
			{description: 'r1', date: moment('2018-09-03')},
			{description: 'r1', date: moment('2018-08-01')}
		]

	},
	mutations:{
		setCurrentMonth(state, payload){
			state.currentMonth = payload;
		},
		setCurrentYear(state, payload){
			state.currentYear = payload;
		},
		eventFormPos(state, payload){
			state.eventFormPosX = payload.x;
			state.eventFormPosY = payload.y;
		},
		eventFormActive(state, payload){
			state.eventFormActive = payload;
		}
	}
});