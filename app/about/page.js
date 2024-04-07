import processMarkdownFile from '../../utils/markdown';

const Page = async () => {
  const page = await processMarkdownFile(`${process.cwd()}/app/about/about.md`);
  return (
    <>
      <h1 className="text-4xl font-bold">{page.title}</h1>
      {page.content}
    </>
  )
}

export default Page;
