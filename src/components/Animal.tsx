import ExF, { Component, CustomElement, Prop, State } from 'exf-ts-beta';
import mole from './../assets/mole.svg'
import hole from './../assets/dirt.svg'
import { Controller } from '../services/controller';


@CustomElement({
    selector: 'exf-animal',
	dependencyInjection: true
})
export class Animal extends Component {
    @State('style') top: number = 85;

    @Prop('style') speed: 'slow' | 'normal' | 'fast' = 'normal';

    width = 150;
    height = 100;
    animalWidth = 80;
    steps = {
        slow: 2,
        normal: 4,
        fast: 6
    }

    constructor(private controller: Controller) {
        super();
    }

    show() {
        if (this.top <= 0) {
            this.hide()
            return;
        }

        this.top = this.top - this.steps[this.speed];

        requestAnimationFrame(this.show.bind(this))
    }

    hide() {
        if (this.top >= 85) {
            return;
        }

        this.top = this.top + this.steps[this.speed];

        requestAnimationFrame(this.hide.bind(this))
    }

    handleClick = () => {
        this.controller.increaseScores();
    }

    stylize() {
        return (
            <styles>
                <style>
                    .animal {
                        {
                            'position': 'relative',
                            'height': `${this.height}px`,
                            'width': `${this.width}px`,

                            '.animal__wrapper': {
                                'position': 'relative',
                                'overflow': 'hidden',
                                'height': `${this.height}px`,
                                'width': `${this.width}px`,
                            },

                            '.mole': {
                                'position': 'absolute',
                                'left': '0',
                                'right': '0',
                                'display': 'flex',

                                'img': {
                                    'margin': 'auto',
                                    'width': `${this.animalWidth}px`
                                }
                            },

                            '.hole': {
                                'position': 'absolute',
                                'bottom': '-30px',
                                'left': '0',
                                'right': '0',

                                'img': {
                                    'width': `${this.width}px`
                                }
                            },

                            'img': {
                                'height': 'auto',
                                'object-fit': 'cover'
                            }
                        }
                    }
                </style>

                <style>
                    .animal {
                        {
                            '.mole': {
                                'top': `${this.top}px`,
                            }
                        }
                    }
                </style>
            </styles>
        )
    }

    render() {
        return (
            <div className="animal">
                <div className="animal__wrapper">
                    <div className="mole" onClick={this.handleClick}>
                        <img src={mole}></img>
                    </div>
                </div>

                <div className="hole">
                    <img src={hole}></img>
                </div>
            </div>
        )
    }
}