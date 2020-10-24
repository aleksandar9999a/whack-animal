import ExF, { Component, CustomElement, State } from 'exf-ts-beta';
import { Controller } from '../services/controller';


@CustomElement({
	selector: 'exf-actions',
	dependencyInjection: true
})
export class Actions extends Component {
    @State('style') isStarted: boolean = false;
	
	constructor(private controller: Controller) {
		super()
	}

	onCreate() {
		this.controller.isStarted.subscribe(isStarted => {
			this.isStarted = isStarted;
		})
	}

	handleClick = () => {
		this.controller.start();
	}

	stylize() {
		return (
			<styles>
				<style>
					.actions {
						{
							'display': 'flex',
							'justify-content': 'center',

							'button': {
								'display': 'inline-block',
								'padding': '10px 30px',
								'border': '1px solid #FFFFFF',
								'border-radius': '6px',
								'box-sizing': 'border-box',
								'text-decoration': 'none',
								'color': '#FFFFFF',
								'background': 'black',
								'text-align': 'center',
								'cursor': 'pointer',
								'transition': 'color .2s, background-color .2s'
							},

							'button:hover': {
								'color': '#000000',
								'background-color': '#FFFFFF'
							}
						}
					}
				</style>

				<style>
					.actions button {
						{ 'display': this.isStarted ? 'none' : 'inline-block' }
					}
				</style>
			</styles>
		)
	}

	render() {
		return (
			<div className="actions">
                <button onClick={this.handleClick}>Start</button>
            </div>
		)
	}
}