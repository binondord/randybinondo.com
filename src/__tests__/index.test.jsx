import { render, screen } from '@testing-library/react'
import Home from '@/pages/index'
import '@testing-library/jest-dom'

jest.mock("next-auth/react", () => {
  const originalModule = jest.requireActual('next-auth/react');
  const mockSession = {
    expires: new Date(Date.now() + 2 * 86400).toISOString(),
    user: { username: "admin" }
  };
  return {
    __esModule: true,
    ...originalModule,
    useSession: jest.fn(() => {
      return {data: mockSession, status: 'authenticated'}  // return type is [] in v3 but changed to {} in v4
    }),
  };
});

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /Randy D. Binondo/i,
    })

    expect(heading).toBeInTheDocument()
  })
})