import "./ChatbotWidget.css";
import Logo from "../../assets/arro.png"
const ChatbotWidget = () => {
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
        {/* Timestamp */}
        <div className="chatbot-timestamp">09:00 AM</div>

        {/* Bot message */}
        <div className="chatbot-message bot">
          <div className="chatbot-bubble">
            Hello How can I help you today?
          </div>
        </div>

        {/* User message */}
        <div className="chatbot-message user">
          <div className="chatbot-bubble">
            I need help with booking an appointment.
          </div>
        </div>

        {/* Timestamp */}
        <div className="chatbot-timestamp">09:07 AM</div>

        {/* Bot message */}
        <div className="chatbot-message bot">
          <div className="chatbot-bubble">
            Sure! I can help you with that.
          </div>
        </div>
      </div>

      {/* Input Area */}
      <div className="chatbot-input"></div>
    </div>
  );
};

export default ChatbotWidget;
