<template>
	<div id="event-form" :class="{active:active}" :style="{top: top, left: left}">
		<h4>Add an event</h4>
		<div class="text">
			<input type="text" v-model="description">
		</div>
		<button id='close-button' @click="close">&#10005</button>
	</div>
</template>

<script>
export default {  

  data () {
    return {
    	description: ''
    }
  },
  computed:{
  	top(){
  		return `${this.$store.state.eventFormPosY}px`;
  	},
  	left(){
		return `${this.$store.state.eventFormPosX}px`;
  	},
  	active(){
  		return this.$store.state.eventFormActive;
  	}
  },
  methods:{
  	close(){
  		this.$store.commit('eventFormActive', false);
  	}
  }
}
</script>
