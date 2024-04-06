import Link from "next/link";
import Image from "next/image";

const EventsPage = (props)=>{
    return(
        <div>
            <h1>Event page</h1>
            <div>
                {props.data.map(event => (
                    <Link key={event.id} href={`/events/${event.id}`}>
                            <Image width={300} height={300} src={event.image} alt={event.title} />
                            <h2>{event.title}</h2>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default EventsPage;

export async function getStaticProps(){
    const {events_categories} = await import ('../../data/data.json')
    return{
        props:{
            data:events_categories,
        }
    }
  }
