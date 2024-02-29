import Link from 'next/link';

export default function Footer () {
  return (
    <footer className="text-xs text-white bg-neutral-900 py-8">
      <div className="w-11/12 md:w-2/3 mx-auto flex justify-between">
        <p>&copy; 2021-2024 Justin St-Amant - All rights reserved</p>
        <Link href="/" className="hover:underline">Home</Link>
      </div>
    </footer>
  )
}
