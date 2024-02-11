import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiceD20 } from '@fortawesome/free-solid-svg-icons'

export default function Header () {
  return (
    <header className="bg-neutral-200 h-16 px-8 flex items-center justify-between font-semibold">
      <Link href="/" className="text-2xl"><FontAwesomeIcon icon={faDiceD20} className="mr-2" />Tabletop.Engineering</Link>
      <nav className="text-base flex">
        <Link className="p-4" href="/">Home</Link>
        <Link className="p-4" href="/posts">Posts</Link>
        <Link className="p-4" href="/about">About</Link>
        <Link className="p-4" href="/contact">Contact</Link>
      </nav>
    </header>
  )
}
