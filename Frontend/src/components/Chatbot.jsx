import axios from "axios";
import React, { useState } from "react";

export default function Chatbot() {
  const [chatMessages, setChatMessages] = useState([]);
  const [userInput, setUserInput] = useState("");

  const handleChatSubmit = async (e) => {
    e.preventDefault();
    if (!userInput.trim()) return; // Prevent submitting empty messages

    const newMessages = [...chatMessages, { sender: "user", text: userInput }];
    setChatMessages(newMessages);

    try {
      const response = await axios.post("http://localhost:9000/chat", { message: userInput });
      setChatMessages([
        ...newMessages,
        { sender: "bot", text: response.data.response },
      ]);
      setUserInput(" ");
    } catch (error) {
      console.error("ERROR", error);
    }
  };

  const handleChatChange = (event) => {
    setUserInput(event.target.value);
  };

  return (
    <div className="col-md-8 p-2">
      <div className="border bg-dark text-dark p-2" style={{ height: "75vh" }}>
        <div className="border p-3" style={{ height: "62vh", overflowY: "scroll" }}>
          <div className="chatArea col-md-12">
            {chatMessages.map((message, index) => (
              <div key={index} className={`chat-message ${message.sender}`}>
                <div className="chat-text">
                  <p><strong>{message.sender}:</strong> {message.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <form onSubmit={handleChatSubmit}>
          <div className="d-flex justify-content-between">
            <div className="col-md-8 mx-3 mt-3">
              <input
                className="form-control bg-dark text-white"
                type="text"
                name="askAi"
                placeholder="Ask anything"
                value={userInput}
                onChange={handleChatChange}
              />
            </div>
            <div className="col-md-2 mt-3">
              <button className="btn w-100 btn-success">Send</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
