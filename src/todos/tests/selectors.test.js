import { expect } from 'chai';

import { getCompletedTodos } from '../selectors';

describe('The getCompletedTodos selector', () => {
    it('Returns only completed todos', () => {
        const fakeTodos = [
            {
                text: 'say Hello',
                isCompleted: true
            }, {
                text: 'say Hi',
                isCompleted: false
            }, {
                text: 'say Good Morning',
                isCompleted: true
            }, {
                text: 'say Good Evening',
                isCompleted: false
            }
        ];
        const expected = [
            {
                text: 'say Hello',
                isCompleted: true
            }, {
                text: 'say Good Morning',
                isCompleted: true
            }
        ];

        const actual = getCompletedTodos.resultFunc(fakeTodos);

        expect(actual).to.deep.equal(expected);
    });
});