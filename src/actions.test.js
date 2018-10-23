import { GENERATE_AURAL_UPDATE, RESTART_GAME, MAKE_GUESS, generateAuralUpdate, makeGuess, restartGame } from './actions';

describe('generateAuralUpdate', () => {
    it('Should return generateAuralUpdate action', () => {
        const action = generateAuralUpdate();
        expect(action.type).toEqual(GENERATE_AURAL_UPDATE);
    });
});

describe('restartGame', () => {
    it('Should return restartGame action', () => {
        //const action = restartGame();
        const correctAnswer = 66;
        const action = restartGame(correctAnswer);
        expect(action.type).toEqual(RESTART_GAME);
        expect(action.correctAnswer).toEqual(correctAnswer);
    });
});


describe('makeGuess', () => {
    it('Should return makeGuess action', () => {
        //const action = MAKE_GUESS();
        const guess = 50;
        const action = makeGuess(guess);
        expect(action.type).toEqual(MAKE_GUESS);
        expect(action.guess).toEqual(guess);
    });
});
