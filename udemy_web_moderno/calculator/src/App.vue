<template>
	<div id="app">
		<h1>Calculadora</h1>
		<calculator></calculator>
	</div>
</template>
<script>
import Calculator from "./main/Calculator"

	export default {
		components:{Calculator}
	}
</script>
<style>

	@font-face{
		font-family: "RobotoMono";
		src: url("./fonts/RobotoMono-Thin.ttf");		
	}

	* {
		font-family: "Robotomono";
	}

	body{
		margin: 0
	}

	#app{
		display: flex;
		flex-direction: column;
		height: 100vh;
		justify-content: center;
		align-items: center;
		text-align: center;
		color: #fff;
		background: grey;
	}
	

</style>