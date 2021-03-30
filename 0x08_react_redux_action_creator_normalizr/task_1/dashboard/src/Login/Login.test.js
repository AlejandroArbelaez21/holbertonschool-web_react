import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Login from './Login';
import { StyleSheetTestUtils } from 'aphrodite';

describe('Login', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
  
  test('renders without crashing', () => {
    const wrapper = shallow(<Login />);

    expect(wrapper.exists());
  });

  test('renders two input tags', () => {
    const wrapper = shallow(<Login />);

    const inputs = wrapper.find('input');
    const labels = wrapper.find('label');

    expect(inputs).to.have.lengthOf(3);
    expect(labels).to.have.lengthOf(2);;
  });

  test('submit is disabled by default', () => {
    const wrapper = shallow(<Login />);
    const submit = wrapper.find('[data-testid="submit"]');
  });

  test('submit is enabled when inputs are not empty', () => {
    const wrapper = shallow(<Login />);
    const email = wrapper.find('input#email');
    const password = wrapper.find('input#password');
    let submit = wrapper.find('[data-testid="submit"]');

    expect(email.length).to.equal(1);
    expect(password.length).to.equal(1);
    expect(submit.length).to.equal(1);

    email.simulate('change', { target: { value: 'email@email.com' } });
    submit = wrapper.find('[data-testid="submit"]');

    password.simulate('change', { target: { value: 'pass123' } });
    submit = wrapper.find('[data-testid="submit"]');
  });
});
