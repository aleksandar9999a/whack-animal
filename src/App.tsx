import ExF, { Component, CustomElement } from 'exf-ts-beta';


@CustomElement({
	selector: 'exf-app'
})
export class App extends Component {
	stylize() {
		return (
			<styles>

			</styles>
		)
	}

	render() {
		return (
			<div>
				<exf-animal />
			</div>
		)
	}
}