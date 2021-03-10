import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('NotificationItem', () => {
  test('renders without crashing', () => {
    const wrapper = shallow(<NotificationItem />);
    expect(wrapper.exists());
  });
  test('renders with correct type and value', () => {
    const wrapper = shallow(<NotificationItem type='default' value='test' />);
    const li = wrapper.find('li');

    expect(li.props()).to.have.property('data-notification-type', 'default');
    expect(li.text()).to.equal('test');
  });

  test('renders with correct inner html', () => {
    const wrapper = shallow(<NotificationItem html={{ __html: '<u>test</u>' }} />);
    
    expect(wrapper.html()).equal('<li data-notification-type="default"><u>test</u></li>');
  });

  test('when calling the function markAsRead on an instance of the component, the spy is being called with the right message', () => {
    const id = 27;
    const wrapper = shallow(<NotificationItem type="default" value="test" id={id} />);
    const instance = wrapper;
    instance.markAsRead = jest.fn();
    const listItem = wrapper.find("li").first();
    listItem.simulate("click");
    instance.markAsRead(id);
    jest.restoreAllMocks();
  });
});
