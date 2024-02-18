import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

export default function Advisory () {
  return (
    <aside className="my-4 p-4 bg-neutral-100 border border-neutral-200">I'm currently looking for a group to play in. I may also be willing to run a game for a small group of players, but we'll see. See the <Link href="/contact" className="font-bold hover:underline">contact page<FontAwesomeIcon icon={faArrowUpRightFromSquare} className="ml-1 text-base" /></Link> more info.</aside>
  );
}
