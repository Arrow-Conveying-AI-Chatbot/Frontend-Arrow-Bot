import { useState } from "react";
import "./ChatbotWidget.css";
import Logo from "../../assets/arro.png";

const ChatbotWidget = () => {
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    if (!message.trim()) return;

    console.log("Message sent:", message);
    setMessage(""); 
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="chatbot-container">
      {/* Header */}
      <div className="chatbot-header">
        <div className="chatbot-header-left">
          <div className="chatbot-avatar">
            <img src={Logo} alt="Company logo" width={50} height={50} />
          </div>
          <span className="chatbot-title">Arrow Support Bot</span>
        </div>

        <button className="chatbot-close-btn">—</button>
      </div>

      {/* Messages Area */}
      <div className="chatbot-messages">
        <div className="chatbot-timestamp">09:00 AM</div>

        <div className="chatbot-message bot">
          <div className="chatbot-bubble">
            Hello How can I help you today?
          </div>
        </div>

        <div className="chatbot-message user">
          <div className="chatbot-bubble">
            I need help with booking an appointment.
          </div>
        </div>
      </div>

      {/* Input Area */}
      <div className="chatbot-input">
        <input
          type="text"
          className="chatbot-text-input"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        <button
          className="chatbot-send-btn"
          onClick={handleSendMessage}
          disabled={!message.trim()}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatbotWidget;
