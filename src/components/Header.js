import { Link } from 'gatsby';
import React, { useState } from 'react';
import clsx from 'clsx';
import { MdClose, MdMenu } from 'react-icons/md';
import { menu } from '../constants/menu';
import HeaderStyles from '../styles/HeaderStyles';
import { ActionButton } from './buttons/ActionButton';
import { Logo } from './Logo';

export const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <HeaderStyles>
      <div className="container">
        <div className="header__container">
          <div className="logo">
            <Logo />
          </div>
          <div className={clsx('nav__wrapper', isNavOpen && 'open')}>
            <div className="mobileIcon">
              <ActionButton
                className="mobileMenuBtn"
                onClick={() => setIsNavOpen(true)}
                onKeyDown={() => setIsNavOpen(true)}
              >
                <MdMenu />
              </ActionButton>
            </div>
            <nav>
              <ActionButton
                className="mobileMenuCloseBtn"
                onClick={() => setIsNavOpen(false)}
              >
                <MdClose />
              </ActionButton>
              <ul>
                {menu.map((item) => (
                  <li key={item.path}>
                    <Link to={item.path}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </HeaderStyles>
  );
};
