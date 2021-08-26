import { expect } from 'chai';

import { getBorderStyleForDate } from '../TodoListItem';

describe('Get Border Style For Date', () => {
    it('return none when the date is less than five days ago', () => {
        const today = Date.now();
        const recentDate = new Date(Date.now() - 8640000 * 3);
        const expected = 'none';
        const actual = getBorderStyleForDate(recentDate, today);
        expect(actual).to.equal(expected);
    });
    it('return a border when the date is more than five days ago', () => {
        const today = Date.now();
        const recentDate = new Date(Date.now() - 8640000 * 7);
        const expected = '2px solid red';
        const actual = getBorderStyleForDate(recentDate, today);
        expect(actual).to.equal(expected);
    });
});