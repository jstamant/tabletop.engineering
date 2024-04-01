import processMarkdownFile from '../../utils/markdown';

const Page = async () => {
  const page = await processMarkdownFile(`${process.cwd()}/app/contact/contact.md`);
  console.log(page);
  return (
    <main className="my-16 text-lg">
      <header>
        <h1 className="text-4xl font-bold">{page.title}</h1>
      </header>
      {page.content}
    </main>
  )
}

export default Page;
