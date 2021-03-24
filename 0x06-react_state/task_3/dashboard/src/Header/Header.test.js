import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import Header from './Header';
import { StyleSheetTestUtils } from 'aphrodite';
import AppContext from '../App/AppContext';

describe('Header', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
  
  test('renders without crashing', () => {
    const wrapper = shallow(<Header />);

    expect(wrapper.exists());
  });

  test('renders an image and h1', () => {
    const wrapper = shallow(<Header />);

    const image = wrapper.find('img');
    const h1 = wrapper.find('h1');

    expect(image.exists());
    expect(h1.exists());
  });

  test('logoutSection NOT created if isLoggedIn is false', () => {
    const wrapper = mount(<Header />, {
      context: {
        user: {
          email: '',
          password: '',
          isLoggedIn: false
        },
        logOut: () => {}
      }
    });

    const logout = wrapper.find('#logoutSection');

    expect(logout).to.have.lengthOf(0);
  });

  test('logoutSection created if isLoggedIn is true', () => {
    const wrapper = mount(<AppContext.Provider
    value={{
        user: {
          email: 'email@email.com',
          password: 'pass123',
          isLoggedIn: true
        },
        logOut: () => {}
      }}
    >
      <Header />
      </AppContext.Provider>
    );

    const logout = wrapper.find('#logoutSection');

    expect(logout).to.have.lengthOf(1);
  });


  test('clicking logout link calls logOut', () => {
    const logOut = jest.fn();
    const wrapper = mount(
      <AppContext.Provider
        value={{
          user: {
            email: 'email@email.com',
            password: 'pass123',
            isLoggedIn: true
          },
          logOut
        }}
      >
        <Header />
      </AppContext.Provider>
    );

    const logout = wrapper.find('em');
    expect(logout).to.have.lengthOf(1);

    logout.simulate('click');
  });
});

