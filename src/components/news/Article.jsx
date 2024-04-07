import Image from 'next/image';

const Article = ({ data }) => {
    return (
        <div className='ContainerForEventNews'>
            <Image src={data.image} alt={data.title} width={1000} height={500} className='imageEventNews' />
            <h1 className='titleEventNews'>{data.title}</h1>
            <p className='descriptionEventNews'>{data.article}</p>
        </div>
    );
}

export default Article;