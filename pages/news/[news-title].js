import Image from 'next/image';
import React from 'react';
import Article from '../../src/components/news/Article';

const News = ({ data }) => {
    return (
        <Article data={data} />
    );
};

export default News;

export async function getStaticPaths() {
    const { news } = await import('../../data/news.json');
    const paths = news.map((newsItem) => ({
        params: { 'news-title': newsItem.title },
    }));
    return { paths, fallback: false };
}

export async function getStaticProps(context) {
    const title = context.params['news-title'];
    const data = await import('../../data/news.json');
    const news = data.news.find((newsItem) => newsItem.title === title);
    return {
        props: {
            data: news,
        },
    };
}

