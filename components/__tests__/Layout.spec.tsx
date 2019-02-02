import React from 'react'
import { cleanup, render, getByText } from 'react-testing-library'

import 'jest-dom/extend-expect'

import Layout from '../Layout'

afterEach(cleanup)

it('should render', async () => {
  const { container } = render(<Layout title="A sample title" />)

  expect(getByText(container, /I'm here to stay/i)).toBeInTheDocument()
})
