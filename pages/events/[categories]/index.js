import Image from 'next/image';
import Link from 'next/link';

const EventsCategoryPage = (props) => {
    return (
        <div>
            <h1>Events in {props.pageName}</h1>
            <div>
                {props.data.map(event => (
                    <Link key={event.id}  href={`/events/${event.city}/${event.id}`} >
                        <Image width={300} height={300} src={event.image} alt={event.title} />
                        <h2>{event.title}</h2>
                        <p>{event.description}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
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