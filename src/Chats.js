import React from 'react';
import './Chats.css';
import Chat from "./Chat";

function Chats() {
    return <div className="chats">
            <Chat
                name="Sarah"
                message="Hey boogaloo"
                profilePic='https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Rachel_Weisz_Montclair_Film_Festival_3_%28cropped%29.jpg/220px-Rachel_Weisz_Montclair_Film_Festival_3_%28cropped%29.jpg'
                timestamp='Today'
            />
        </div>
    
}

export default Chats
