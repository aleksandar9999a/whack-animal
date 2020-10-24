import { Injectable } from "exf-ts-beta";
import { BehaviorSubject } from "rxjs";
import { Animal } from "../components/Animal";
import { getRandomNumber } from "../helpers/helpers";

const a = Array(6).fill({ speed: 'slow' });

@Injectable()
export class Controller {
    animals = new BehaviorSubject<{ speed: string }[]>(a);
    scores = new BehaviorSubject<number>(0);
    isStarted = new BehaviorSubject<boolean>(false);
    
    animalElements: Animal[] = [];
    gameDuration: number = 5000;
    showDuration: number = 1000;
    
    setAnimals(animals: Animal[]) {
        this.animalElements = animals;
        return this.animalElements;
    }

    increaseScores() {
        this.scores.next(this.scores.value + 1);
    }

    resetScores() {
        this.scores.next(0);
    }

    run(lastIndex: number = -1) {
		if (!this.isStarted.value) {
			return;
		}

		let randomIndex = getRandomNumber(0, this.animalElements.length);
		let counter = 1;

		while (randomIndex === lastIndex || counter > this.animalElements.length) {
			randomIndex = getRandomNumber(0, this.animalElements.length);
			counter++;
		}

		if (counter <= this.animalElements.length) {
			this.animalElements[randomIndex].show();
		}

		setTimeout(() => {
			this.run(randomIndex)
		}, this.showDuration)
    }

    start() {
		this.isStarted.next(true);
		this.resetScores();
        this.run()
        

		setTimeout(() => {
			this.isStarted.next(false);
		}, this.gameDuration)
    }
}
