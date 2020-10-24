import ExF, { Component, CustomElement, State } from 'exf-ts-beta';
import { Controller } from '../services/controller';


@CustomElement({
	selector: 'exf-panel',
	dependencyInjection: true
})
export class Panel extends Component {
	@State('state') scores: number = 0;

	constructor(private controller: Controller) {
		super()
	}

	onCreate() {
		this.controller.scores.subscribe(scores => {
			this.scores = scores;
		})
	}

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