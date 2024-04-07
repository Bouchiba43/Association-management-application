import NewsList from "../../src/components/news/NewsList";

const NewsPage = (props) => {
    return <NewsList newsData={props.data} />;
    };

export default NewsPage;

export async function getStaticProps() {
    const { news } = await import('../../data/news.json')
    return {
        props: {
            data: news,
        }
    }
}