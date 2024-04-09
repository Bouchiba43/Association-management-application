import { useState, useRef } from "react";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const Event = (props) => {

    const emailRef = useRef();
    const router = useRouter();
    const [message, setMessage] = useState('');


    const onSubmit = async (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const eventId = router?.query['event-id'];

        const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (!email.match(validRegex)) {
            setMessage('Please enter a valid email!');
            return;
        }

        try {
            const response = await fetch('/api/eventSub', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, eventId }),
            });

            if (!response.ok) {
                throw new Error('Failed to subscribe to event');
            }
            const data = await response.json();
            setMessage(data.message);
            emailRef.current.value = '';
        }
        catch (error) {
            console.error('Failed to subscribe to event', error);
        }
    }
    return (
        <div className="ContainerForEventNews">
            <Image width={1000} height={500} src={props.data[0].image} alt={props.data[0].title} className="imageEventNews" />
            <h2 className="titleEventNews">{props.data[0].title}</h2>
            <p className="descriptionEventNews">{props.data[0].description}</p>
            <form className="formGroup" onSubmit={onSubmit}>
                <label className="label">Subscribe to our Event</label>
                <input  id="email" ref={emailRef} className="inputField" placeholder="Enter your email" />
                <button className="button" type="submit">Submit</button>
            </form>
            <p>{message}</p>
        </div>
    );
}

export default Event;