import Image from 'next/image';

const EventPage = (props) => {
    return (
        <div>
            <Image width={1000} height={500} src={props.data[0].image} alt={props.data[0].title} />
            <h2>{props.data[0].title}</h2>
            <p>{props.data[0].description}</p>
        </div>
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