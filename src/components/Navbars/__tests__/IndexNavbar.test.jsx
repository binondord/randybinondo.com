import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import IndexNavbar from '@/components/Navbars/IndexNavbar'

describe('IndexNavbar', () => {
  it('renders a IndexNavbar text', () => {
      const {asFragment, getByText} = render(<IndexNavbar />)
      const firstRender = asFragment()
      expect(firstRender).toMatchInlineSnapshot(`
<DocumentFragment>
  <nav
    class="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow"
  >
    <div
      class="container px-4 mx-auto flex flex-wrap items-center justify-between"
    >
      <div
        class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"
      >
        <a
          class="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 whitespace-nowrap flex flex-row items-center"
          href="/#home"
        >
          <div
            class="relative group w-12 h-12 rounded-full overflow-hidden sm:h-32 sm:w-32"
          >
            Next image stub
          </div>
          <div
            class="text-black px-2 text-normal"
          >
            <span
              class="test text-2xl"
            >
              Randy D. Binondo
            </span>
            <br />
            <sub
              class="text-sm text-blueGray-700"
            >
              coder. father. handyman.
            </sub>
          </div>
        </a>
        <button
          class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
          type="button"
        >
          <i
            class="fas fa-bars"
          />
        </button>
      </div>
      <div
        class="lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none hidden"
        id="example-navbar-warning"
      >
        <ul
          class="flex flex-col lg:flex-row list-none lg:ml-auto"
        >
          <li
            class="flex items-center"
          >
            <a
              class="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
              href="https://www.linkedin.com/in/randy-binondo/"
            >
              <i
                class="text-blueGray-400 fab fa-linkedin text-lg leading-lg "
              />
              <span
                class="lg:hidden inline-block ml-2"
              >
                Link
              </span>
            </a>
          </li>
          <li
            class="flex items-center"
          >
            <a
              class="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
              href="https://www.facebook.com/randybinondo.page"
            >
              <i
                class="text-blueGray-400 fab fa-facebook text-lg leading-lg "
              />
              <span
                class="lg:hidden inline-block ml-2"
              >
                Follow
              </span>
            </a>
          </li>
          <li
            class="flex items-center"
          >
            <a
              class="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
              href="https://twitter.com/randybinondo"
            >
              <i
                class="text-blueGray-400 fab fa-twitter text-lg leading-lg "
              />
              <span
                class="lg:hidden inline-block ml-2"
              >
                Tweet
              </span>
            </a>
          </li>
          <li
            class="flex items-center"
          >
            <a
              class="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
              href="https://github.com/binondord"
            >
              <i
                class="text-blueGray-400 fab fa-github text-lg leading-lg "
              />
              <span
                class="lg:hidden inline-block ml-2"
              >
                Star
              </span>
            </a>
          </li>
          <li
            class="flex items-center"
          >
            <a
              class="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
              href="https://www.youtube.com/vhyeinouondz"
            >
              <i
                class="text-blueGray-400 fab fa-youtube text-lg leading-lg "
              />
              <span
                class="lg:hidden inline-block ml-2"
              >
                Subscribe
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</DocumentFragment>
`);
  })
})