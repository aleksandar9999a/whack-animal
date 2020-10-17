import ExF, { Component, CustomElement, State, Prop } from 'exf-ts-beta';


@CustomElement({
	selector: 'exf-panel'
})
export class Panel extends Component {
	@Prop('state') scores: number = 0;

	stylize() {
		return (
			<style>
                .panel {
                    { 'text-align': 'center' }
                }
            </style>
		)
	}

	render() {
		return (
			<div className="panel">
                <h3>Scores: <span>{this.scores}</span></h3>
            </div>
		)
	}
}