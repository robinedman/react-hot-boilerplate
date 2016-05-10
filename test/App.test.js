import test from 'ava'
import React from 'react'
import { shallow } from 'enzyme'
import App from '../src/App'

test('has a .App class name', t => {
  const wrapper = shallow(<App/>)
  t.true(wrapper.hasClass('App'))
})
