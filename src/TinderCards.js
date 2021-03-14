import React, { useState, useEffect } from 'react';
import TinderCard from "react-tinder-card";
import database from "./firebase"
import "./TinderCards.css"

function TinderCards() {
    const [people, setPeople] = useState([]); //declaring a variable in React
    // same as const people = [] 
     /*   {
            name: 'Billy Eilish',
            url: 'https://media.vanityfair.com/photos/5f05db06f519da95a3b4164f/master/w_1024%2Cc_limit/billie-eilish.jpg'
        },
        {
            name: 'Billy Bob Thorton',
            url: 'https://upload.wikimedia.org/wikipedia/commons/0/00/Billy_Bob_Thornton_2017_%28cropped%29.jpg'
        }
    ]);*/

    // piece of code which runs based on a condition
    useEffect(() => {
        //this is where the code runs
        const unsubscribe = database
        .collection('people')
        .onSnapshot(snapshot => 
            setPeople(snapshot.docs.map(doc => doc.data()))
        )

        return () => {
            //this is the cleanup...
            unsubscribe()
        }
        //this will run once when the componnent loads and never again
    }, []);

    return (
        <div>
        <div className="tinderCards__cardContainer">
            {people.map((person) => (
                <TinderCard
                    className="swipe"
                    key={person.name}
                    preventSwipe={["up","down"]}>
                    
                    <div 
                    style={{ backgroundImage: `url(${person.url})`}}
                    className="card">
                    <h3>{person.name}</h3>
                    </div>

                </TinderCard>
            ))} 
        </div>
        </div>
    );
}

export default TinderCards
