import Overview from '../components/Overview.vue';
import Detail from '../components/Detail.vue';
import PageNotFound from '../components/PageNotFound.vue';

export default [
	{path: '/', component : Overview, name: 'home'},
	{path: '/movie/:id', component : Detail, name : 'movie'},
	//{path: '*', redirect:  { name : 'home'} }
	{path: '*', component : PageNotFound}
];