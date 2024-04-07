import Link from "next/link";
import Image from "next/image";
import AllEvents from '../../src/components/events/AllEvents';

const EventsPage = ({ data }) => {
    return <AllEvents data={data} />;
  };

export default EventsPage;

export async function getStaticProps() {
    const { events_categories } = await import('../../data/data.json')
    return {
        props: {
            data: events_categories,
        }
    }
}
