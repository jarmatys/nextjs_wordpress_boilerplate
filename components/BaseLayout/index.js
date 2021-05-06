import Link from 'next/link';
import { useState } from 'react';
import classNames from 'classnames';
import DesktopMenu from 'components/BaseLayout/DesktopMenu';
import MobileMenu from 'components/BaseLayout/MobileMenu';

const Navigation = () => {
  const [isNavOpen, setNavOpen] = useState(false);

  return (
    <section className="container mx-auto">
      <nav className="relative px-6 py-6 flex justify-between items-center bg-white">
        <Link href="/">
          <a className="text-3xl font-bold leading-none">Nazwa firmy</a>
        </Link>
        <div className="lg:hidden">
          <button
            onClick={() => setNavOpen(true)}
            className="navbar-burger flex items-center text-blue-600 p-3">
            <svg
              className="block h-4 w-4 fill-current"
              viewbox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <DesktopMenu />
        <Link href="/contact" as="/kontakt">
          <a className="hidden lg:inline-block py-2 px-6 bg-blue-600 hover:bg-blue-700 text-sm text-white font-bold rounded-l-xl rounded-t-xl transition duration-200">
            Kontakt
          </a>
        </Link>
      </nav>
      <div className={classNames(['navbar-menu', 'relative', 'z-50'], { hidden: !isNavOpen })}>
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
          <div className="flex items-center mb-8">
            <a className="mr-auto text-3xl font-bold leading-none" href="/">
              Nazwa firmy
            </a>
            <button onClick={() => setNavOpen(false)} className="navbar-close">
              <svg
                className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewbox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div>
            <MobileMenu />
          </div>
          <div className="mt-auto">
            <div className="pt-6">
              <Link href="/contact" as="/kontakt">
                <a className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700 rounded-l-xl rounded-t-xl">
                  Kontakt
                </a>
              </Link>
            </div>
            <p className="my-4 text-xs text-center text-gray-400">
              <span>&copy; 2020 All rights reserved.</span>
            </p>
          </div>
        </nav>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <section>
      <div class="skew skew-top mr-for-radius">
        <svg class="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewbox="0 0 10 10" preserveaspectratio="none">
          <polygon fill="currentColor" points="0 0 10 10 0 10"></polygon>
        </svg>
      </div>
      <div class="skew skew-top ml-for-radius">
        <svg class="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewbox="0 0 10 10" preserveaspectratio="none">
          <polygon fill="currentColor" points="0 10 10 0 10 10"></polygon>
        </svg>
      </div>
      <div class="py-20 bg-gray-50 radius-for-skewed">
        <div class="container mx-auto px-4">
          <div class="pb-12 flex flex-wrap items-center justify-between border-b border-gray-100">
            <div class="w-full lg:w-1/5 mb-12 lg:mb-4">
              <Link href="/">
                <a className="text-3xl font-bold leading-none">Nazwa firmy</a>
              </Link>
            </div>
            <div class="w-full lg:w-auto">
              <ul class="flex flex-wrap lg:space-x-5 items-center">
                <li class="w-full md:w-auto mb-2 md:mb-0"><a class="lg:text-sm text-gray-400 hover:text-gray-500" href="#">Start</a></li>
                <li class="hidden md:block">
                  <svg class="mx-4 w-4 h-4 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
                  </svg>
                </li>
                <li class="w-full md:w-auto mb-2 md:mb-0"><a class="lg:text-sm text-gray-400 hover:text-gray-500" href="#">About Us</a></li>
                <li class="hidden md:block">
                  <svg class="mx-4 w-4 h-4 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
                  </svg>
                </li>
                <li class="w-full md:w-auto mb-2 md:mb-0"><a class="lg:text-sm text-gray-400 hover:text-gray-500" href="#">Services</a></li>
                <li class="hidden md:block">
                  <svg class="mx-4 w-4 h-4 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
                  </svg>
                </li>
                <li class="w-full md:w-auto mb-2 md:mb-0"><a class="lg:text-sm text-gray-400 hover:text-gray-500" href="#">Platform</a></li>
                <li class="hidden md:block">
                  <svg class="mx-4 w-4 h-4 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
                  </svg>
                </li>
                <li><a class="lg:text-sm text-gray-400 hover:text-gray-500" href="#">Testimonials</a></li>
              </ul>
            </div>
          </div>
          <div class="mt-8 flex flex-wrap justify-between items-center">
            <p class="order-last text-sm text-gray-400">&copy; 2021. All rights reserved.</p>
            <div class="mb-4 lg:mb-0 order-first lg:order-last">
              <a class="inline-block mr-2 p-2 bg-gray-50 hover:bg-gray-100 rounded" href="#">
                <img src="/facebook.svg" />
              </a>
              <a class="inline-block mr-2 p-2 bg-gray-50 hover:bg-gray-100 rounded" href="#">
                <img src="/twitter.svg" />
              </a>
              <a class="inline-block mr-2 p-2 bg-gray-50 hover:bg-gray-100 rounded" href="#">
                <img src="/instagram.svg" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="skew skew-bottom mr-for-radius">
        <svg class="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewbox="0 0 10 10" preserveaspectratio="none">
          <polygon fill="currentColor" points="0 0 10 0 0 10"></polygon>
        </svg>
      </div>
      <div class="skew skew-bottom ml-for-radius">
        <svg class="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewbox="0 0 10 10" preserveaspectratio="none">
          <polygon fill="currentColor" points="0 0 10 0 10 10"></polygon>
        </svg>
      </div>
    </section>
  );
};

export default function Home({ children }) {
  return (
    <div className="">
      <Navigation />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
