import 'core-js';
import { ExFModule } from 'exf-ts-beta';
import { App } from './App';
import { Animal } from './components/Animal';

ExFModule({
	components: [
		App,
		Animal
	],
	bootstraps: [
		App
	],
	root: 'root'
})

