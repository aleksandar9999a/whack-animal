import ExF, { Component, CustomElement, State } from 'exf-ts-beta';
import { Animal } from './components/Animal';

function getRandomArbitrary(min: number, max: number) {
	return Math.floor(Math.random() * (max - min) + min)
}

@CustomElement({
	selector: 'exf-app'
})
export class App extends Component {
	@State('state') animals = Array(6).fill({ speed: 'slow' });
	@State('state') scores: number = 0;
	@State('state') isStarted: boolean = false;

	startAnimation() {
		const animals = (this as any)._html.getElementsByClassName('animal');
		this.run(animals)

		setTimeout(() => {
			this.isStarted = false;
		}, 5000)
	}

	run(animals: Animal[], lastIndex: number = -1) {
		if (!this.isStarted) {
			return;
		}

		let randomIndex = getRandomArbitrary(0, animals.length - 1);

		while (randomIndex === lastIndex) {
			randomIndex = getRandomArbitrary(0, animals.length - 1);
		}

		animals[randomIndex].show();

		setTimeout(() => {
			this.run(animals, randomIndex)
		}, 1000)
	}

	handleStart = () => {
		this.isStarted = true;
		this.scores = 0;
		this.startAnimation();
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