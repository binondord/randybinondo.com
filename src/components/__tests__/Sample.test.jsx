import { render, screen } from '@testing-library/react'
import Sample from '@/components/Sample'
import '@testing-library/jest-dom'

describe('Sample', () => {
  it('renders a Sample text', () => {
      const {asFragment, getByText} = render(<Sample />)
      expect(getByText('Sample')).toBeInTheDocument()
      expect(asFragment()).toMatchInlineSnapshot(`
          <DocumentFragment>
            Sample
          </DocumentFragment>
      `)
  })
})