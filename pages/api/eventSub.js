import path from 'path';
import fs from 'fs';

function buildPath() {
    return path.join(process.cwd(), 'data', 'data.json');
}


function extractEventsFromFile(filePath) {
    const jsonData = fs.readFileSync(filePath);
    return JSON.parse(jsonData); 
}

export default function handler(req, res) {
    const { method } = req;

    const filePath = buildPath();
    const {events_categories, allEvents} = extractEventsFromFile(filePath);

    if (!allEvents){
        res.status(404).json({message: 'No events found'});
    }


    if (method === 'POST') {
        const { email, eventId } = req.body;

        if (!email || !email.includes('@')) {
            res.status(422).json({message: 'Invalid email address!'})
        }


        const newAllEvents = allEvents.map(event => {
            if (event.id === eventId) {
                if(event.emails_registered.includes(email)){
                    res.status(409).json({message: 'You have already registered for this event!'})
                    return event;
                }
                return {
                    ...event,
                    emails_registered: [...event.emails_registered, email]
                }
            }
            return event;
        })
        
        fs.writeFileSync(filePath, JSON.stringify({events_categories, allEvents: newAllEvents}))



        res.status(201).json({ message: 'You have successfully subscribed to our event! with the email: ' + email })
    }


}