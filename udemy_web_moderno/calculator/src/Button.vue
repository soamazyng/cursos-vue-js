<template>
	<button class="btn">
		{{label}}
	</button>
</template>

<script>
	export default{
		props:{
			label: {},
			operation: {type: Boolean},
			double: {type: Boolean},
			triple: {type:Boolean}
		}
	}
</script>

<style>
	:root{
		--bg-button: #f0f0f0;
		--border-button: solid 1px #888;
	}

	.button{
		font-size: 1.4em;
		background-color: var(--bg-button);
		border: none;
		border-right: var(--border-button);
		border-bottom: var(--border-button);
		outline: none;
	}

	.button::active{
		background-color: red;
	}

</style>
