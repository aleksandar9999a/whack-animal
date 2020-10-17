import ExF, { Component, CustomElement, State } from 'exf-ts-beta';
import { Animal } from './components/Animal';
import { getRandomNumber } from './helpers/helpers';


@CustomElement({
	selector: 'exf-app'
})
export class App extends Component {
	@State('state') animals = Array(6).fill({ speed: 'slow' });
	@State('state') scores: number = 0;
	@State('state') isStarted: boolean = false;

	animalElements: Animal[] = []

	gameDuration: number = 5000;
	showDuration: number = 1000;

	onCreate() {
		this.animalElements = (this as any)._html.getElementsByClassName('animal');
	}

	run(lastIndex: number = -1) {
		if (!this.isStarted) {
			return;
		}

		let randomIndex = getRandomNumber(0, this.animalElements.length);
		let counter = 1;

		while (randomIndex === lastIndex || counter > this.animalElements.length) {
			randomIndex = getRandomNumber(0, this.animalElements.length);
			counter++;
		}

		if (counter <= this.animalElements.length) {
			this.animalElements[randomIndex].show();
		}

		setTimeout(() => {
			this.run(randomIndex)
		}, this.showDuration)
	}

	handleStart = () => {
		this.isStarted = true;
		this.scores = 0;
		this.run()

		setTimeout(() => {
			this.isStarted = false;
		}, this.gameDuration)
	}

	handleScoreIncrease = () => {
		this.scores = this.scores + 1;
	}

	stylize() {
		return (
			<styles>
				<style>
					.app {
						{
							'width': '100vw',
							'height': '100vh'
						}
					}

					.game {
						{
							'margin': 'auto',
							'display': 'flex',
							'flex-wrap': 'wrap',
							'max-width': '760px',
							'text-align': 'center',
							'padding-bottom': '80px',

							'.hole': {
								'flex': '0 0 33.333%',
								'margin-top': '42px',
								'display': 'flex',
								'justify-content': 'center'
							}
						}
					}
				</style>
			</styles>
		)
	}

	render() {
		return (
			<div className="app">
				<exf-panel scores={this.scores} />

				<div className="game">
					{this.animals.map(({ speed }) => {
						return (
							<div className="hole">
								<exf-animal
									className="animal"
									speed={speed}
									onClick={this.handleScoreIncrease}
								/>
							</div>
						)
					})}
				</div>

				<exf-actions isStarted={this.isStarted} onStart={this.handleStart} />
			</div>
		)
	}
}