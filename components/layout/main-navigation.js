import Link from "next/link";
import Logo from "./logo";
import { useRouter } from "next/router";

import classes from "./main-navigation.module.css";

const MainNavigation = () => {
  const router = useRouter();

  return (
    <header className={classes.header}>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>

      <nav>
        <ul>
          <li>
            <Link href="/"> Home </Link>
          </li>
          <li>
            <Link href="/posts"> Posts </Link>
          </li>
          <li>
            <Link href="/contact"> Contact </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
