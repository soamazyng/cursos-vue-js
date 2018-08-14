import Vue from 'vue'
import {Time} from './time';
import _ from 'lodash';
import './filters'; //não precisa do from pois não estou importando um objeto

require('!style-loader!css-loader!bootstrap/dist/css/bootstrap.min.css');
require('bootstrap');

//vue.extend passa um objeto e retorna uma instancia personalizada do vue
let appComponent = Vue.extend({
	template: `<div class="container"><div class="row">
      <h3>Campeonato Brasileiro - Série A - 2016</h3>
      <a href="#" class="btn btn-primary" @click.prevent="createNovoJogo()">novo jogo</a>
      <br /><br />      
      <div v-if="view== 'table'">         
          <input type="text" name="" v-model="filter" class="form-control">             
        <table class="table table-striped">
        <thead>
          <tr>
            <th v-for="item in colunas">
          <a href="" @click.prevent="sortBy(item)"> {{item | ucwords}}</a>
          </th>            
          </tr>
        </thead>              
        <tbody>
          <tr v-for="item in timesFiltered">
            <th>
              <img :src="item.escudo" style="height: 30px; width: 30px;">
              {{item.nome}}
            </th>
            <th>{{item.pontos}}</th>
            <th>{{item.gm}}</th>
            <th>{{item.gs}}</th>
            <th>{{item | saldo}}</th>
          </tr>
        </tbody>
        </table>
      </div>
      <div class="row" v-if="view== 'novojogo'">
        <form class="form-inline">
          <div class="form-group">
            <input type="text" class="form-control" v-model="novoJogo.casa.gols">
            <label class="control-label">      
              {{novoJogo.casa.time.nome}}
              <img :src="novoJogo.casa.time.escudo" style="height: 30px; width: 30px;">
            </label>
          </div>
          <span>X</span>
          <div class="form-group">
            <label class="control-label">
              {{novoJogo.fora.time.nome}}
              <img :src="novoJogo.fora.time.escudo" style="height: 30px; width: 30px;">              
            </label>
            <input type="text" class="form-control" v-model="novoJogo.fora.gols">
          </div>
          <button type="button" class="btn btn-primary" @click="fimJogo">Fim de jogo</button>
        </form>
      </div>
    </div></div>  `,
	data(){ 
		return {
			colunas:[
			"nome", "pontos", "gm", "gs", "saldo"
			],
			order: {
				keys: ["pontos", "gm", "gs"],
				sort: ['desc', 'desc', 'asc']
			},
			times: [
			new Time('Palmeiras', require('./assets/palmeiras_60x60.png')),
			new Time('Flamengo', require('./assets/flamengo_60x60.png')),
			new Time('Atlético-MG', require('./assets/atletico_mg_60x60.png')),
			new Time('Santos', require('./assets/santos_60x60.png')),
			new Time('Botafogo', require('./assets/botafogo_60x60.png')),
			new Time('Atlético-PR', require('./assets/atletico-pr_60x60.png')),
			new Time('Corinthians', require('./assets/corinthians_60x60.png')),
			new Time('Grêmio', require('./assets/gremio_60x60.png')),
			new Time('Fluminense', require('./assets/fluminense_60x60.png')),
			new Time('Ponte Preta', require('./assets/ponte_preta_60x60.png')),
			new Time('Chapecoense', require('./assets/chapecoense_60x60.png')),
			new Time('São Paulo', require('./assets/sao_paulo_60x60.png')),
			new Time('Cruzeiro', require('./assets/cruzeiro_60x60.png')),
			new Time('Sport', require('./assets/sport_60x60.png')),
			new Time('Coritiba', require('./assets/coritiba_60x60.png')),
			new Time('Internacional', require('./assets/internacional_60x60.png')),
			new Time('Vitória', require('./assets/vitoria_60x60.png')),
			new Time('Figueirense', require('./assets/figueirense_60x60.png')),
			new Time('Santa Cruz', require('./assets/santa_cruz_60x60.png')),
			new Time('América-MG', require('./assets/america_mg_60x60.png')),
			],
			novoJogo : {
				casa: {
					time: null,
					gols: 0
				},
				fora: {
					time: null,
					gols: 0
				}			
			},
			view: 'table',
			filter: ''
		};
	},
	created(){ //depois que os observadores foram iniciados - preprocessador
		
	},
	methods:{
		fimJogo(){
			let timeAdv = this.novoJogo.fora.time;
			let gols = +this.novoJogo.casa.gols; //+ converte para inteiro
			let golsAdv = +this.novoJogo.fora.gols; //+ converte para inteiro
			this.novoJogo.casa.time.fimJogo(timeAdv, gols, golsAdv);
			this.showView('table');
		},
		showView(v){
			this.view = v;
		},
		createNovoJogo(e){			

			let indexCasa = Math.floor(Math.random() * 20),
			indexFora = Math.floor(Math.random() * 20);

			this.novoJogo.casa.time = this.times[indexCasa];
			this.novoJogo.fora.time = this.times[indexFora];

			this.novoJogo.casa.gols = 0;
			this.novoJogo.fora.gols = 0;

			this.showView('novojogo');
		},
		sortBy(c){
			this.order.keys = c;
			this.order.sort = this.order.sort == 'desc' ? 'asc' : 'desc';
		}
	},
	computed:{
		timesFiltered(){ //não é possível passar parametros
			let colecao = _.orderBy(this.times, this.order.keys, this.order.sort);
			return _.filter(colecao, item => { 
											return item.nome.indexOf(this.filter) >= 0;
										});
		}	
	}	
});

new Vue({
	el: '#app',	
	components:{
		'app' : appComponent
	}
})
