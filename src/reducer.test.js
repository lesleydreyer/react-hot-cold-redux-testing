import reducer from './reducer';
import { restartGame, makeGuess, generateAuralUpdate } from './actions';

describe('reducer', () => {
    it('should set initial state', () => {
        /*
        let state = {
            guesses: [], feedback: 'Make your guess!',
            auralStatus: '', correctAnswer: Math.round(Math.random() * 100) + 1
        }
        expect(state).toEqual({
            guesses: [], feedback: 'Make your guess!',
            auralStatus: '',correctAnswer: Math.round(Math.random() * 100) + 1
        })*/
        const state = reducer(undefined, { type: '__UNKNOWN' });

        expect(state.guesses).toEqual([]);
        expect(state.feedback).toEqual('Make your guess!');
        expect(state.correctAnswer).toBeGreaterThanOrEqual(0);
        expect(state.correctAnswer).toBeLessThanOrEqual(100);
        expect(state.auralStatus).toEqual('');
    });

    it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = reducer(currentState, { type: '__UNKNOWN' });
        expect(state).toBe(currentState);
    });

    describe('restartGame', () => {
        it('should restart game', () => {
            let state = {
                guesses: [6, 2, 50], feedback: 'So hot!',
                auralStatus: 'aural test', correctAnswer: 15
            }
            //console.log(state);
            //state = reducer(state, restartGame());//state = restartGame(state);
            //console.log(state);
            const correctAnswer = 10;
            state = reducer(state, restartGame(correctAnswer));
            expect(state.guesses).toEqual([]);
            expect(state.feedback).toEqual('Make your guess!');
            expect(state.correctAnswer).toEqual(correctAnswer);
            expect(state.auralStatus).toEqual('');
        });
    });


    /*it('should make guess', () => {
        let state = {
            guesses: [6, 2, 50], feedback: 'So hot!',
            auralStatus: 'aural test', correctAnswer: 15
        };
        state = reducer(state, makeGuess);
        expect(state.feedback).to.toEqual('So hot!');
        expect(state.guesses).to.toEqual([6, 2, 50]);

    })*/

    describe('makeGuess', () => {
        it('Should make a guess', () => {
            // Fix the correct answer so we know what we're aiming for
            let state = {
                guesses: [],
                feedback: '',
                correctAnswer: 100 // Negative so different to new game
            };

            state = reducer(state, makeGuess(25));
            expect(state.guesses).toEqual([25]);
            expect(state.feedback).toEqual("You're Ice Cold...");

            state = reducer(state, makeGuess(60));
            expect(state.guesses).toEqual([25, 60]);
            expect(state.feedback).toEqual("You're Cold...");

            state = reducer(state, makeGuess(80));
            expect(state.guesses).toEqual([25, 60, 80]);
            expect(state.feedback).toEqual("You're Warm.");

            state = reducer(state, makeGuess(95));
            expect(state.guesses).toEqual([25, 60, 80, 95]);
            expect(state.feedback).toEqual("You're Hot!");

            state = reducer(state, makeGuess(100));
            expect(state.guesses).toEqual([25, 60, 80, 95, 100]);
            expect(state.feedback).toEqual('You got it!');
        });
    });

    it('should generate aural update', () => {
        let state = {
            guesses: [6, 2, 50], feedback: 'So hot!',
            auralStatus: 'aural test', correctAnswer: 15
        };

        state = reducer(state, generateAuralUpdate());
        expect(state.auralStatus).toEqual(
            "Here's the status of the game right now: So hot! You've made 3 guesses. In order of most- to least-recent, they are: 50, 2, 6"
        );
    });
});
