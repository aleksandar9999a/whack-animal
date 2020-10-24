import ExF, { Component, CustomElement, State } from 'exf-ts-beta';
import { Controller } from '../services/controller';


@CustomElement({
	selector: 'exf-game',
	dependencyInjection: true
})
export class Game extends Component {
	@State('state') animals: { speed: string }[] = [];

	constructor(private controller: Controller) {
        super();
	}

	onCreate() {
        this.controller.setAnimals((this as any)._html.getElementsByClassName('animal'));
        this.controller.animals.subscribe(animals => {
            this.animals = animals;
        })
	}

	stylize() {
		return (
			<style>
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
		)
	}

	render() {
		return (
			<div className="game">
                {this.animals.map(({ speed }) => {
                    return (
                        <div className="hole">
                            <exf-animal
                                className="animal"
                                speed={speed}
                            />
                        </div>
                    )
                })}
            </div>
		)
	}
}