/**
 * Created by sbardian on 5/17/17.
 */

import React from 'react'
import {render, mount, shallow} from 'enzyme'
import {expect} from 'chai'

import Choices from '../app/components/Choices';

describe('Testing Choices...', () => {
  it('Should render a ul element', (done) => {
    const wrapper = shallow(<Choices />);
    expect(wrapper.find('ul')).to.have.length(1);
    done();
  });
});