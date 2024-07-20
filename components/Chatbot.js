import React, { useState } from 'react';
import axios from 'axios';

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState('');

    const handleSend = async () => {
        if (!userInput.trim()) return;

        const userMessage = {
            id: Date.now(),
            text: userInput,
            sender: 'user'
        };

        setMessages([...messages, userMessage]);
        setUserInput(''); // Clear input after sending

        // Placeholder for API call - implement as shown in previous examples
        const botResponse = {
            id: Date.now(),
            text: `Echo: ${userInput}`,
            sender: 'bot'
        };
        setMessages(msgs => [...msgs, botResponse]);
    };

    const handleInputChange = (event) => {
        setUserInput(event.target.value);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            handleSend();
        }
    };

    return (
        <div className="chatbot-container">
            <div className="messages-container">
                {messages.map((message) => (
                    <div key={message.id} className={`message ${message.sender}`}>
                        {message.text}
                    </div>
                ))}
            </div>
            <textarea
                className="input-area"
                value={userInput}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                placeholder="Type your message here..."
            ></textarea>
            <button onClick={handleSend}>Send</button>
        </div>
    );
};

export default Chatbot;
