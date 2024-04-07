import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AllEvents = ({data}) => {
    return (
    <div className='pageTitle'>
        <h1>Events in Tunisia</h1>
        <div className='events_page'>
                {data.map(event => (
                    <Link key={event.id} href={`/events/${event.id}`} className='card'>
                        <Image width={600} height={400} src={event.image} alt={event.title} />
                        <h2>{event.title}</h2>
                    </Link>
                ))}
        </div>
        </div>
    );
};

export default AllEvents;