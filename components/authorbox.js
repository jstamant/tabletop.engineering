import Link from 'next/link';

const AuthorBox = ({ author }) => {
  const link = "https://github.com/jstamant/";
  return (
    <footer className="flex items-center">
      <Link href={link} target="_blank" className="w-16 mr-4">
        <img src="/img/author.jpg" className="rounded-full" />
      </Link>
      <div>
        <Link href={link} target="_blank" className="text-base font-bold hover:underline">{author}</Link>
        <p className="text-sm">Hey, guys. I'm Justin, the author of this blog. I love running RPGs and playing RPGs with others. I'm an Engineering Technologist in my day-job, but other than that, I hustle on this blog and on other projects of interest to me.</p>
      </div>
    </footer>
  )
}

export default AuthorBox;
