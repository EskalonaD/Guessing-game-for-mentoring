// class Gamer {
//     constructor(interlocutor) {
//         this.interlocutor = interlocutor
//     };


//     sendMessage(message) {
//         this.interlocutor.listen(message)
//     }
// }

class Guesser {
    constructor(interlocutor) {
        this.interlocutor = interlocutor;
    }

    listen(message) {
        message = message.toLowerCase();

        if(message.slice(0, 3) === 'нет') {
            if(message.includes('больше')) {
                this.guessMore();
            } else { this.guessLess() };
        } 
        if(message.slice(0, 2) === 'да') { this.guessed() };
    }
    
    guessed() {};
    guessMore() {};
    guessLess() {};
}

class Puzzler {
    // super();

    constructor(interlocutor) {
        this.interlocutor = interlocutor;
        this.savedNumber;
        

    };

    startGame(element) {
        const savedNumberBox = document.createElement('section');

        const boxTitle = document.createElement('p');
        const boxInput = document.createElement('input');
        const boxConfirmation = document.createElement('button');

        boxTitle.textContent = 'Какое бы число загадать?';
        boxInput.setAttribute('type', 'number');
        boxConfirmation.textContent = 'Ok';

        [boxTitle, boxInput, boxConfirmation].forEach(el  => savedNumberBox.appendChild(el));
        boxConfirmation.addEventListener('click', () => {
            this.savedNumber = boxInput.value ? boxInput.value : 0;
            savedNumberBox.style = { display: 'none' };
            this.interlocutor.guessMore();
        });

        element.appendChild(savedNumberBox);
    }

    listen(message) {
        const guessedNumber = message.match(/d*?/) ? Number(message.match(/d*?/)[0]) : null;

        if(guessedNumber === null) return;
        if(guessedNumber === this.savedNumber) { this.guessed() };
        if(guessedNumber > this.savedNumber) { this.guessLess() };
        if(guessedNumber < this.savedNumber) { this.guessMore() };
    };

    guessed() {};
    guessMore() {};
    guessLess() {};
}

class GuesserGame {
    constructor(guesser, puzzler) {
        this.guesser = new guesser(puzzler);
        this.puzzler = new puzzler(guesser);

        if(!document.getElementById('guesser-game')) {
            const gameBox = document.createElement('section');
            gameBox.setAttribute('id', 'guesser-game');
            const startButton = document.createElement('button');
            startButton.textContent = 'Начать игру';
            startButton.addEventListener('click', () => {
                this.puzzler.startGame(gameBox);
                gameBox.display.style = { display: 'none' }
            });
            gameBox.appendChild(startButton);

            document.body.appendChild(gameBox);
        } else {
            document.getElementById('guesser-game').innerHTML = '';

            const gameBox = document.createElement('section');
            gameBox.setAttribute('id', 'guesser-game');
            const startButton = document.createElement('button');
            startButton.textContent = 'Начать игру';
            startButton.addEventListener('click', () => {
                this.puzzler.startGame(gameBox);
                startButton.textContent = 'Закончить игру';
                // startButton.style.display = 'none';
                document['guesser-game'].style.display = 'none';
            });
            gameBox.appendChild(startButton);

            document.body.appendChild(gameBox);
        }
    }
}

// document.onload(() => new GuesserGame(Guesser, Puzzler))
window.onload = () => new GuesserGame(Guesser, Puzzler);