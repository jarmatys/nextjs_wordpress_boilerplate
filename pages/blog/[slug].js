import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/Link';

import { getAllPostsWithSlug, getPost } from 'utils/api';

const formatDate = date => {
    const newDate = new Date(date);
    return `${newDate.getDate()}/${newDate.getMonth() + 1}/${newDate.getFullYear()}`;
}

export async function getStaticPaths() {
    const allPost = await getAllPostsWithSlug();

    return {
        paths: allPost.edges.map(({ node }) => `/blog/${node.slug}`) || [],
        fallback: true
    }
};

export async function getStaticProps({ params }) {
    const data = await getPost(params.slug);

    return {
        props: {
            postData: data.post
        }
    };
};

export default function Slug({ postData }) {
    const router = useRouter();

    if (!router.isFallback && !postData?.slug) {
        return <p>Hmm .. error</p>;
    }

    return (
        router.isFallback ? (
            <h2>Loading</h2>
        ) : (
            <div>
                <Head>
                    <title>Article page</title>
                    <link rel='icon' href='/favicon.ico' />
                </Head>

                <main>
                    <h1>{postData.title}</h1>
                    <p>{formatDate(postData.date)}</p>
                    <div dangerouslySetInnerHTML={{ __html: postData.content }} />
                </main>
            </div>
        )
    );
};