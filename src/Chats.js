import React from 'react';
import './Chats.css';
import Chat from "./Chat";

function Chats() {
    return <div className="chats">
            <Chat
                name="Elon Musk"
                message="I'm begging here"
                profilePic="https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg"
                timestamp='Today'
            />
            <Chat
                name="Sundar Pichai"
                message="We need you"
                profilePic="https://upload.wikimedia.org/wikipedia/commons/6/6b/Sundar_Pichai_WEF_2020.png"
                timestamp='Yesturday'
            />
            <Chat
                name="Jeff Bezos"
                message="Please respond"
                profilePic="https://upload.wikimedia.org/wikipedia/commons/6/6c/Jeff_Bezos_at_Amazon_Spheres_Grand_Opening_in_Seattle_-_2018_%2839074799225%29_%28cropped%29.jpg"
                timestamp='1 day ago'
            />
        </div>
    
}

export default Chats
