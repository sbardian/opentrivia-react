/**
 * Created by sbardian on 5/25/17.
 */

import React from 'react'
import {render, mount, shallow} from 'enzyme'
import {expect} from 'chai'

import QuestionWrapper from '../app/components/QuestionWrapper';

describe('Testing QuestionsWrapper...', () => {
  it('Should render a div element', (done) => {
    const wrapper = shallow(<QuestionWrapper />);
    expect(wrapper.find('div')).to.have.length(3);
    done();
  });
});