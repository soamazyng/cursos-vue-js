<template>
	<div id="detail" v-if="movie">
		<movie-item 					
					:movie="movie.movie"
					:sessions = "[]"
					>
						
						<div slot="description">ifajiofjdsiofjsaiofjdsiojfsdaio</div>

					</movie-item>	
	</div>
</template>

<script>

import MovieItem from './MovieItem.vue';

export default {
	props: ['movies'],
	computed: {
		movie(){
			let movie = this.movies.find(movie => movie.id === this.$route.params.id);
			return movie ? movie : null;
		}
	},
	components : {
			MovieItem
	}
}
</script>

<style lang="css" scoped>
</style>