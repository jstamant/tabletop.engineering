import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiceD20 } from '@fortawesome/free-solid-svg-icons'

export default function Header () {
  return (
    <header className="bg-neutral-200 h-16 px-8 flex items-center justify-between">
      <Link href="/" className="text-2xl font-bold"><FontAwesomeIcon icon={faDiceD20} className="mr-2" />Tabletop.Engineering</Link>
      <nav className="text-lg">
        <Link href="/">Home</Link>
        <Link href="/posts">Posts</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  )
}
