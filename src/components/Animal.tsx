import ExF, { Component, CustomElement, Prop, State } from 'exf-ts-beta';
import mole from './../assets/mole.svg'
import hole from './../assets/dirt.svg'


@CustomElement({
    selector: 'exf-animal'
})
export class Animal extends Component {
    @State('style') top: number = 200;
    steps = {
        slow: 2,
        normal: 4,
        fast: 6
    }

    @Prop('style') dir: 'up' | 'down' = 'up';
    @Prop('style') speed: 'slow' | 'normal' | 'fast' = 'normal';

    run: boolean = false;

    start() {
        this.run = true;

        this.show()
    }

    stop() {
        this.run = false;
    }

    getPosition() {
        return this.top
    }

    show() {
        if (!this.run) {
            return;
        }

        if (this.top <= 0) {
            this.hide()
            return;
        }

        this.top = this.top - this.steps[this.speed];

        requestAnimationFrame(this.show.bind(this))
    }

    hide() {
        if (!this.run) {
            return;
        }

        if (this.top >= 200) {
            this.show();
            return;
        }

        this.top = this.top + this.steps[this.speed];

        requestAnimationFrame(this.hide.bind(this))
    }

    stylize() {
        return (
            <styles>
                <style>
                    .animal {
                        {
                            'position': 'relative',
                            'height': '230px',
                            'width': '250px',

                            '.animal__wrapper': {
                                'position': 'relative',
                                'overflow': 'hidden',
                                'height': '230px',
                                'width': '250px',
                            },

                            '.mole': {
                                'position': 'absolute',
                                'left': '0',
                                'right': '0',
                                'display': 'flex',

                                'img': {
                                    'margin': 'auto',
                                    'width': '150px'
                                }
                            },

                            '.hole': {
                                'position': 'absolute',
                                'bottom': '-30px',
                                'left': '0',
                                'right': '0',

                                'img': {
                                    'width': '230px'
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
                    <div className="mole">
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