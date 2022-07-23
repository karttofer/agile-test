// Dependencies
import { useState } from 'react';

// Components
import LogoComponent from './LogoComponent';
import LinkComponent from './LinkComponent';
import IconComponent from './IconComponent';
import MobileMenuComponent from './MobileMenuComponent';

// Assets
import Logo from '../assets/img/logo.svg';
import ShopBag from '../assets/img/shop-bag.svg';
import Search from '../assets/img/search.svg';
import Menu from '../assets/img/menu.svg';
import SelectComponent from './SelectComponent';

const links = [
  { title: 'New', type: 'link' },
  { title: 'clinique iD™', type: 'link' },
  { title: 'Best Sellers', type: 'link' },
  {
    title: 'Shop All',
    type: 'select',
    items: ['Shop all', 'ITEM 01', 'ITEM 02'],
  },
];

const icons = [
  { icon: ShopBag, isMobile: false },
  { icon: Search, isMobile: false },
  { icon: Menu, isMobile: true },
];

const NavbarComponent = () => {
  const [showMenu, setShowMenu] = useState(false);

  const closeMenu = (_) => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      {showMenu ? (
        <MobileMenuComponent clickEvent={closeMenu} links={links} />
      ) : null}

      <nav className="shop__navbar">
        <div className="shop__navbar-logo">
          <LogoComponent src={Logo} />
        </div>
        <div className="shop__navbar-links">
          {links.map((t) =>
            t.type === 'link' ? (
              <LinkComponent key={t.title} text={t.title} />
            ) : (
              <SelectComponent key={t.type} options={t.items} />
            )
          )}
          {icons.map((i) => (
            <IconComponent
              key={i.icon}
              src={i.icon}
              clickEvent={() => closeMenu()}
              isMobile={i.isMobile}
            />
          ))}
        </div>
      </nav>
    </>
  );
};

export default NavbarComponent;
