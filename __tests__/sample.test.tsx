import * as React from 'react'
import { shallow } from 'enzyme'

test('should contain header hello world', () => {
  const wrapper = shallow(
    <div>
      <h1>Hello World</h1>
      <p>Placeholder text</p>
    </div>,
  )

  expect(wrapper.contains(<h1>Hello World</h1>)).toBe(true)
})
