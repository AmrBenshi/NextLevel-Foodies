import Link from 'next/link';
import Image from 'next/image';

import HeaderBg from './HeaderBg';
import logoImg from '@/assets/logo.png';
import classes from './header.module.css';
import NavLink from './NavLink';

export default function Header() {
  return (
    <>
      <HeaderBg />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImg} alt="A plate with food on it" priority />
          NextLevel Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}