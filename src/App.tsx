import ExF, { Component, CustomElement } from 'exf-ts-beta';


@CustomElement({
	selector: 'exf-app',
	dependencyInjection: true
})
export class App extends Component {
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
				</style>
			</styles>
		)
	}

	render() {
		return (
			<div className="app">
				<exf-panel />

				<exf-game />

				<exf-actions />
			</div>
		)
	}
}