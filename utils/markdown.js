import * as prod from 'react/jsx-runtime';
import rehypeReact from 'rehype-react';
import rehypeSanitize from 'rehype-sanitize';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import remarkStringify from 'remark-stringify';
import { unified } from 'unified';

import fs from 'fs';
import matter from 'gray-matter';

/**
 * Takes a file path, and returns all the associated post's
 * frontmatter (metadata), and content
 * @path - string
 * @return - { frontmatter indexes, content(react components) }
 */
const processMarkdownFile = async (path) => {
  const file = fs.readFileSync(path, "utf8");
  const { data: frontmatter, content } = matter(file);

  const production = {Fragment: prod.Fragment, jsx: prod.jsx, jsxs: prod.jsxs };
  const components = {
    a: (props) => <a className='underline' href={props.href}>{ props.children }</a>,
    blockquote: (props) => <blockquote className='pl-8 italic border-l-2 border-neutral-900'>{ props.children }</blockquote>,
    em: (props) => <em className='italic'>{ props.children }</em>,
    h1: (props) => <h1 className='my-8 text-3xl font-bold'>{ props.children }</h1>,
    h2: (props) => <h2 className='my-8 text-2xl'>{ props.children }</h2>,
    h3: (props) => <h3 className='my-8 text-2xl'>{ props.children }</h3>,
    h4: (props) => <h4 className='my-8 text-2xl'>{ props.children }</h4>,
    h5: (props) => <h5 className='my-8 text-2xl'>{ props.children }</h5>,
    h6: (props) => <h6 className='my-8 text-2xl'>{ props.children }</h6>,
    li: (props) => <li className='ml-8'>{ props.children }</li>,
    p: (props) => <p className='my-6'>{ props.children }</p>,
    strong: (props) => <strong className='font-bold'>{ props.children }</strong>,
    ul: (props) => <ul className='my-6 list-disc'>{ props.children }</ul>,
  };

  const react = await unified()
    .use(remarkParse)
    .use(remarkStringify)
    .use(remarkRehype)
    .use(rehypeSanitize)
    .use(rehypeStringify)
    .use(rehypeReact, { ...production, components })
    .process(content);

  return { ...frontmatter, content: react.result };
}

export default processMarkdownFile;
