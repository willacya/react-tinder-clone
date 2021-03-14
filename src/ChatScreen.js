import React, {useState} from 'react';
import Avatar from "@material-ui/core/Avatar";
import "./ChatScreen.css";

function ChatScreen() {
    const [input, setInput] = useState('');
    const [message, setMessage] = useState([
        {
            name: 'Sarah',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Rachel_Weisz_Montclair_Film_Festival_3_%28cropped%29.jpg/220px-Rachel_Weisz_Montclair_Film_Festival_3_%28cropped%29.jpg',
            message: "what's up"
        },
        {
            name: 'Sarah',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Rachel_Weisz_Montclair_Film_Festival_3_%28cropped%29.jpg/220px-Rachel_Weisz_Montclair_Film_Festival_3_%28cropped%29.jpg',
            message: "Looking good"
        },
        {
            message: "errm, I'm married..."
        },
    ]);

    const handleSend = e => {
        e.preventDefault();

        setMessage([...message, { message: input }]);
        setInput("");
    }

    return (
        <div className='chatScreen'>
           <p className='chatScreen__timestamp'>YOU MATCHED WITH SARAH ON 12/08/21</p>
           {message.map((message) => (
               message.name ? (
                <div className='chatScreen__message'>
                    <Avatar
                        className="chatScreen__image"
                        alt={message.name}
                        src={message.image}
                        />
                    <p className='chatScreen__text'>{message.message}</p>
                </div>
                ) : (
                <div className='chatScreen__message'>
                    <p className='chatScreen__textUser'>{message.message}</p>        
                </div>
                )
                
           ))}
        
            <form className="chatScreen__input">
                <input
                value={input}
                onChange={e => setInput(e.target.value)}
                className="chatScreen__inputField"
                placeholder="Type a message..."
                type="text" />
                <button onClick={handleSend} type="submit" className='chatScreen__inputButton'>SEND</button>
            </form>
        </div>
        
    )
}

export default ChatScreen

