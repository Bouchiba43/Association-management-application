import Image from 'next/image';
import Link from 'next/link';
import EventList from '../../../src/components/events/EventList';

const EventsCategoryPage = (props) => {
    return <EventList props={props} />;
}

export default EventsCategoryPage;

export async function getStaticPaths() {
    const { events_categories } = await import('../../../data/data.json')
    const allPaths = events_categories.map((event) => {
        return {
            params: {
                categories: event.id.toString(),
            },
        };
    });
    return {
        paths: allPaths,
        fallback: false,
    };
}

export async function getStaticProps(context) {
    const id = context?.params.categories;
    const { allEvents } = await import('../../../data/data.json')
    const data = allEvents.filter((event) => event.city === id);
    return {
        props: { data , pageName: id},
    };
}