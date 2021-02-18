import { getFullYear } from './utils';
import { getFooterCopy } from './utils'
import getLatestNotification from './utils';

it('check year', () => {
    expect(getFullYear()).toBe(2021);
});

it('check footer', () => {
    expect(getFooterCopy(true)).toBe('Holberton School');
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
});

it('check lastest Notification', () => {
    expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
});
