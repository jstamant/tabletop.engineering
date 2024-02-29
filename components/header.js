import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faDiceD20, faXmark } from '@fortawesome/free-solid-svg-icons';

export default function Header () {
  const menu = {cls: "p-4"};
  const mobile = {cls: "flex items-center justify-center w-32 h-16"}
  const link = {
    home: "/",
    posts: "/posts",
    about: "/about",
    contact: "/contact"
  };

  return (
    <header className="bg-neutral-200 h-16 pl-6 md:px-8 flex items-center justify-between font-semibold">
      <Link href="/" className="text-2xl"><FontAwesomeIcon icon={faDiceD20} className="mr-2" />Tabletop.Engineering</Link>
      <nav className="text-base hidden md:flex">
        <Link className={menu.cls} href={link.home}>Home</Link>
        <Link className={menu.cls} href={link.posts}>Posts</Link>
        <Link className={menu.cls} href={link.about}>About</Link>
        <Link className={menu.cls} href={link.contact}>Contact</Link>
      </nav>
      <div className="h-full md:hidden flex items-center">
        <input type="checkbox" className="peer group w-16 h-16 z-10 opacity-0 absolute" />
        <div className="w-16 text-center peer-checked:hidden"><FontAwesomeIcon icon={faBars} className="text-2xl" /></div>
        <div className="w-16 text-center hidden peer-checked:block"><FontAwesomeIcon icon={faXmark} className="text-2xl" /></div>
        <nav className="hidden border text-base z-0 bg-white peer-checked:block absolute right-0 top-16 flex flex-col items-center divide-y">
          <Link className={mobile.cls} href={link.home}>Home</Link>
          <Link className={mobile.cls} href={link.posts}>Posts</Link>
          <Link className={mobile.cls} href={link.about}>About</Link>
          <Link className={mobile.cls} href={link.contact}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}
