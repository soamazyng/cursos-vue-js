//sempre precisa de um componente pai
import ResultComponent from './result.component';
import NumbersComponent from './numbers.component';
import CommandsComponent from './commands.component';

export default{
	template: require('html-loader!../templates/app.component.html'),
	components: {
		'result-component' : ResultComponent,
		'numbers-component' : NumbersComponent,
		'commands-component' : CommandsComponent
	}
}