const EventPage = ()=>{
    return(
        <h1>Our Single Event</h1>
    );
}

export default EventPage;

export async function getServerSideProps(){
    const {events_categories} = await import ('../data/data.json')
    /*const res = await fetch('URL')
    const data = await res.json()
    "Rayen maybe you will need it
    else delete this comment!!!!"*/
    return{
        props:{
            data:events_categories,
        }
    }
  }