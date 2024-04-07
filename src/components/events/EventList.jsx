import Link from 'next/link';
import Image from 'next/image';


const EventList = ({ props }) => {
    return (
        <div className='pageTitle'>
            <h1>Events in {props.pageName}</h1>
            <div className='news-list'>
                {props.data.map(event => (
                    <Link key={event.id}  href={`/events/${event.city}/${event.id}`} className='card' >
                        <Image width={600} height={400} src={event.image} alt={event.title} />
                        <h5 className='card-title'>{event.title}</h5>
                        <p className='card-text'>{event.description}</p>
                        <p className="card-date">{event.date}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default EventList;