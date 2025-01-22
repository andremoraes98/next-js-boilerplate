import { render, screen } from '@testing-library/react'

import Main from '.'

describe('Main', () => {
  it('should render the heading', () => {
    render(<Main />)

    const heading = screen.getByRole('heading', { name: /hello world/i })

    expect(heading).toBeInTheDocument()
  })
})
