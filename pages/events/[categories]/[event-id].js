import Image from 'next/image';
import Event from '../../../src/components/events/Event';

const EventPage = (props) => {
    return (
        <Event data={props.data} />
    );
}

export default EventPage;

export async function getStaticPaths() {
    const data = await import('/data/data.json');
    const allEvents = data.allEvents;
  
    const allPaths = allEvents.map((path) => {
      return {
        params: {
          categories: path.city,
          'event-id': path.id,
        },
      };
    });
  
    return {
      paths: allPaths,
      fallback: false,
    };
  }

export async function getStaticProps(context) {
    console.log(context.params);
    const id = context.params['event-id'];
    const { allEvents } = await import('../../../data/data.json')
    const eventData = allEvents.filter((event) => event.id == id);
    return {
        props: {
            data: eventData,
        },
    };
}