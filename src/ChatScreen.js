import React, {useState} from 'react';
import Avatar from "@material-ui/core/Avatar";
import "./ChatScreen.css";

function ChatScreen() {
    const [input, setInput] = useState('');
    const [message, setMessage] = useState([
        {
            name: 'Elon',
            image: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg',
            message: "I think you would be a great fit for my company."
        },
        {
            name: 'Elon',
            image: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg',
            message: "Name your price!"
        },
        {
            message: "I'll have to think about it"
        },
        {
            name: 'Elon',
            image: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg',
            message: "I'm begging here"
        },
    ]);

    const handleSend = e => {
        e.preventDefault();

        setMessage([...message, { message: input }]);
        setInput("");
    }

    return (
        <div className='chatScreen'>
           <p className='chatScreen__timestamp'>YOU MATCHED WITH ELON ON 01/04/2021</p>
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

