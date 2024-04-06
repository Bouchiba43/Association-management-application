import Image from "next/image";
import Link from "next/link";


export const HomePage = ({ data }) => (
    <div className="home_body">
      {data?.map((event) => (
        <Link key={event.id} href={`/events/${event.id}`} passHref>
            <div className="image">
              <Image width={600} height={400} alt={event.title} src={event.image} />
            </div>
            <div className="content">
              <h2> {event.title} </h2>
              <p> {event.description} </p>
            </div>
        </Link>
      ))}
    </div>
  );