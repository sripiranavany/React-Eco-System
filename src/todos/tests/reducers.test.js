import { expect } from 'chai';

import { todos } from '../reducers';

describe('The todos reducer', () => {
    it('Adds a new todo when CREATE_TODO action is received', () => {
        const fakeTodo = {
            success: 'true',
            message: 'tod added successfully',
            todo: { text: 'Fake Todo', isCompletd: false }
        };
        const fakeAction = { type: 'CREATE_TODO', payload: { todo: fakeTodo } };

        const originalState = { isLoading: false, data: [] };

        const expected = {
            isLoading: false,
            data: [fakeTodo.todo]
        };

        const actual = todos(originalState, fakeAction);

        expect(actual).to.deep.equal(expected);
    });
});