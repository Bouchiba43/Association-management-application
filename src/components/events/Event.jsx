import Image from "next/image";

const Event = (props) => {
    return (
        <div className="ContainerForEventNews">
                <Image width={1000} height={500} src={props.data[0].image} alt={props.data[0].title} className="imageEventNews" />
                <h2 className="titleEventNews">{props.data[0].title}</h2>
                <p className="descriptionEventNews">{props.data[0].description}</p>
        </div>
    );
}  

export default Event;