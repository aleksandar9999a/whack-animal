import ExF, { Component, CustomElement, Prop } from 'exf-ts-beta';


@CustomElement({
	selector: 'exf-actions'
})
export class Actions extends Component {
    @Prop('style') isStarted: boolean = false;
    @Prop('state') onStart: () => void = () => {};

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
                <button onClick={this.onStart}>Start</button>
            </div>
		)
	}
}