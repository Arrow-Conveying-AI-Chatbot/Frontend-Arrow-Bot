import { useRef, useState } from "react";
import "./ChatbotWidget.css";
import Logo from "../../assets/arro.png";
import Attach from "../../assets/paperclip.png";

const ChatbotWidget = () => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [attachment, setAttachment] = useState<File | null>(null);
  const [showQuickReplies, setShowQuickReplies] = useState(true);

  // NEW STATES
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleSendMessage = (text?: string) => {
    const outgoingMessage = text ?? message;

    if (!outgoingMessage.trim() && !attachment) return;

    console.log("Message:", outgoingMessage);
    console.log("Attachment:", attachment);

    setMessage("");
    setAttachment(null);
    setShowQuickReplies(false);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setAttachment(file);
    }
  };

  return (
    <>
      {/* COLLAPSED ICON */}
      {isCollapsed && (
        <button
          className="chatbot-collapsed-icon"
          onClick={() => setIsCollapsed(false)}
        >
          <img src={Logo} alt="Chatbot" width={40} height={40} />
        </button>
      )}

      {/* CHATBOT WIDGET */}
      {!isCollapsed && (
        <div className={`chatbot-container ${isFullscreen ? "fullscreen" : ""}`}>
          {/* Header */}
          <div className="chatbot-header">
            <div className="chatbot-header-left">
              <div className="chatbot-avatar">
                <img src={Logo} alt="Company logo" width={50} height={50} />
              </div>
              <span className="chatbot-title">Arrow Support Bot</span>
            </div>

            {/* FULLSCREEN TOGGLE */}
            <button
              className="chatbot-icon-btn"
              onClick={() => setIsFullscreen(!isFullscreen)}
            >
              ⛶
            </button>

            {/* COLLAPSE BUTTON */}
            <button
              className="chatbot-icon-btn"
              onClick={() => setIsCollapsed(true)}
            >
              ⤵
            </button>
          </div>

          {/* Messages Area */}
          <div className="chatbot-messages">
            <div className="chatbot-message bot">
              <div className="chatbot-bubble">
                Hello How can I help you today?
              </div>
            </div>

            {showQuickReplies && !loading && (
              <div className="chatbot-quick-replies">
                <button onClick={() => handleSendMessage("Book Ticket")}>
                  Sell property
                </button>
                <button onClick={() => handleSendMessage("View Events")}>
                  Buy Property
                </button>
                <button onClick={() => handleSendMessage("Contact Support")}>
                  Get a Quote
                </button>
              </div>
            )}

            {/* Typing indicator */}
            {loading && (
              <div className="chatbot-message bot">
                <div className="chatbot-typing">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
          </div>

          {/* Attachment preview */}
          {attachment && (
            <div className="chatbot-attachment-preview">
              {attachment.type.startsWith("image/") ? (
                <img
                  src={URL.createObjectURL(attachment)}
                  alt="preview"
                  className="chatbot-attachment-image"
                />
              ) : (
                <span className="chatbot-attachment-file">
                  {attachment.name}
                </span>
              )}
            </div>
          )}

          {/* Input Area */}
          <div className="chatbot-input">
            <button
              className="chatbot-attach-btn"
              onClick={() => fileInputRef.current?.click()}
            >
              <img src={Attach} alt="attachment file" width={"20px"} />
            </button>

            <input
              type="file"
              ref={fileInputRef}
              hidden
              accept="image/*,.pdf,.doc,.docx"
              onChange={handleFileChange}
            />

            <input
              type="text"
              className="chatbot-text-input"
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              disabled={loading}
            />

            <button
              className="chatbot-send-btn"
              onClick={() => handleSendMessage()}
              disabled={loading || (!message.trim() && !attachment)}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatbotWidget;
