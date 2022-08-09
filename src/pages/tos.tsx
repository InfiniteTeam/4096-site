import { NextPage } from 'next';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import Layout from '../components/Layout';
import content from '../docs/tos.md';

const Tos: NextPage = () => {
  return (
    <>
      <Layout>
        <div className="px-6 sm:px-8 md:px-12 lg:px-24 pb-12">
          <ReactMarkdown className="markdown" rehypePlugins={[rehypeRaw]}>
            {content}
          </ReactMarkdown>
        </div>
      </Layout>
    </>
  );
};

export default Tos;
