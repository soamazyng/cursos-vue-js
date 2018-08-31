<template>
	<div>
		<div v-for="day in days">{{day}}</div>
	</div>
</template>

<script>
export default {  
  data () {
    return {
    	month: 2,
    	year: 2017
    }
  },
  computed: {
  	days(){

  		//Generating all days in current month
  		let days = [];
  		let currentDay = this.$moment(`${this.year}-${this.month}-1`, 'YYYY-M-D');
  		do{
  			days.push(currentDay);
  			currentDay = this.$moment(currentDay).add(1, 'days');
  		}while(currentDay.month() + 1 === this.month);

  		return days;
  	}
  }  
}
</script>

<style lang="css" scoped>
</style>