import Link from 'next/link';
import { useState } from 'react';
import classNames from 'classnames';
import DesktopMenu from 'components/BaseLayout/Parts/DesktopMenu';
import MobileMenu from 'components/BaseLayout/Parts/MobileMenu';
import FooterMenu from 'components/BaseLayout/Parts/FooterMenu';
import Hamburger from 'components/BaseLayout/Parts/Hamburger';
import SocialMedia from 'components/BaseLayout/Parts/SocialMedia';

const Navigation = () => {
  const [isNavOpen, setNavOpen] = useState(false);

  const mainMenuItems = [
    { id: 1, slug: "/blog", label: "Blog" },
    { id: 2, slug: "/uslugi", label: "Usługi" },
    { id: 3, slug: "/test", label: "Test" },
    { id: 4, slug: "/blog", label: "Blog" },
    { id: 5, slug: "/blog", label: "Blog" }
  ]

  return (
    <section className="sticky top-0 z-50 border-b-2 border-gray-200 bg-white">
      <section className="container mx-auto">
        <nav className="px-6 py-6 flex justify-between items-center ">
          <Link href="/">
            <a className="text-3xl font-bold leading-none">Nazwa strony</a>
          </Link>
          <div className="lg:hidden">
            <Hamburger onClick={() => setNavOpen(true)} />
          </div>
          <DesktopMenu items={mainMenuItems} />
          <Link href="/contact" as="/kontakt">
            <a className="hidden lg:inline-block py-2 px-6 bg-blue-600 hover:bg-blue-700 text-sm text-white font-bold rounded-l-xl rounded-t-xl transition duration-200">
              Kontakt
            </a>
          </Link>
        </nav>
      </section>
      <div className={classNames(['navbar-menu', 'relative', 'z-50'], { hidden: !isNavOpen })}>
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
          <div className="flex items-center mb-8">
            <a className="mr-auto text-3xl font-bold leading-none" href="/">
              Nazwa firmy
            </a>
            <Hamburger onClick={() => setNavOpen(false)} />
          </div>
          <div>
            <MobileMenu items={mainMenuItems} />
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
              <span>&copy; 2021 All rights reserved.</span>
            </p>
          </div>
        </nav>
      </div>
    </section>
  );
};

const Footer = () => {

  const footerMenuItems = [
    { id: 1, slug: "/blog", label: "Blog" },
    { id: 2, slug: "/uslugi", label: "Usługi" },
    { id: 3, slug: "/blog", label: "Blog" },
    { id: 4, slug: "/kontakt", label: "Kontakt" },
    { id: 5, slug: "/polityka-prywatnosci/", label: "Polityka prywatności" }
  ]

  return (
    <section>
      <div className="py-20 bg-gray-100 radius-for-skewed">
        <div className="container mx-auto px-4">
          <div className="pb-12 flex flex-wrap items-center justify-between border-b border-gray-100">
            <div className="w-full lg:w-1/5 mb-12 lg:mb-4">
              <Link href="/">
                <a className="text-3xl font-bold leading-none">Nazwa strony</a>
              </Link>
            </div>
            <div className="w-full lg:w-auto">
              <FooterMenu items={footerMenuItems} />
            </div>
          </div>
          <div className="mt-8 flex flex-wrap justify-between items-center">
            <p className="order-last text-sm text-gray-400">&copy; 2021. All rights reserved.</p>
            <SocialMedia />
          </div>
        </div>
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
