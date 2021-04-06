import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Notifications from './Notifications'
import NotificationItem from './NotificationItem';
import { StyleSheetTestUtils } from 'aphrodite';

describe('Notifications', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  test('renders without crashing', () => {
    const wrapper = shallow(<Notifications />);

    expect(wrapper.exists());
  });

  describe('displayDrawer is true', () => {
    test('has a close button', () => {
      const wrapper = shallow(<Notifications displayDrawer={true} />);
  
      expect(wrapper.find('img')).to.have.lengthOf(1);
    });
    test('menu item is displayed', () => {
      const wrapper = shallow(<Notifications displayDrawer={true} />);
      const menuItem = wrapper.find('[data-testid="menu-item"]');

      expect(menuItem).to.have.lengthOf(1);
    });

    test('notifications div is displayed', () => {
      const wrapper = shallow(<Notifications displayDrawer={true} />);
      const notifs = wrapper.find('[data-testid="notifs"]');

      expect(notifs).to.have.lengthOf(1);
    });
  });

  describe('displayDrawer is false', () => {
    test('menu item is displayed', () => {
      const wrapper = shallow(<Notifications />);
      const menuItem = wrapper.find('[data-testid="menu-item"]');

      expect(menuItem).to.have.lengthOf(1);
    });

    test('notifications div is not displayed', () => {
      const wrapper = shallow(<Notifications />);
      const notifs = wrapper.find('div.Notifications');

      expect(notifs).to.have.lengthOf(0);
    });
  });

  describe('listNotifications is empty', () => {
    test('renders correctly if empty array is passed', () => {
      const wrapper = shallow(<Notifications />);
      const notifs = wrapper.find(NotificationItem);

      expect(notifs).to.have.lengthOf(0);
    });

    test('renders correctly if listNotifications prop not specified', () => {
      const wrapper = shallow(<Notifications />);
      const notifs = wrapper.find(NotificationItem);

      expect(notifs).to.have.lengthOf(0);
    });
  });

  describe('listNotifications is not empty', () => {
    test('renders a list with two items when passed two items', () => {
      const nots = [
        {id: 1, type: "default", value: "x"},
        {id: 2, type: "default", value: "y"}
      ];
      const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={nots} />);
      expect(wrapper.find("ul")).to.have.lengthOf(1);
      expect(wrapper.find(NotificationItem)).to.have.lengthOf(2);
    });
  });

  describe('message displays properly', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    const noNewNotifs = wrapper.find('[data-testid="notifs"] p');

    expect(noNewNotifs).to.have.lengthOf(1);
    expect(noNewNotifs.text()).to.equal('No new notifications for now');
  });

  describe('mockup the "console.log" function and Check that when calling the function "markAsRead" on an instance of the component', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    console.log = jest.fn();
    wrapper.instance().markAsRead(1);
  });
  test('clicking menu item calls handleDisplayDrawer', () => {
    const handleDisplayDrawer = jest.fn();

    const wrapper = shallow(
      <Notifications handleDisplayDrawer={handleDisplayDrawer} />
    );

    const menuItem = wrapper.find('[data-testid="menu-item"]');
    expect(menuItem).to.have.lengthOf(1);

    menuItem.simulate('click');
  });
  test('clicking close button calls hideDisplayDrawer', () => {
    const handleHideDrawer = jest.fn();

    const wrapper = shallow(
      <Notifications displayDrawer={true} handleHideDrawer={handleHideDrawer} />
    );

    const close = wrapper.find('[data-testid="close-notifs"]');
    expect(close).to.have.lengthOf(1);

    close.simulate('click');
  });
});
