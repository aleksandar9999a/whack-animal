import 'core-js';
import { ExFModule } from 'exf-ts-beta';
import { App } from './App';
import { Actions } from './components/Actions';
import { Animal } from './components/Animal';
import { Panel } from './components/Panel';

ExFModule({
	components: [
		App,
		Animal,
		Panel,
		Actions
	],
	bootstraps: [
		App
	],
	root: 'root'
})

