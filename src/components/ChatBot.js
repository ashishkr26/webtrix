import React, { useState } from "react";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";

import CloseIcon from "@mui/icons-material/Close";

const ChatBot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen((prev) => !prev);
  };

  return (
    <div className="fixed bottom-4 right-4 z-10">
      {/* Chat Toggle Button */}
      <div
        className="flex items-center space-x-3 cursor-pointer"
        onClick={toggleChat}
      >
        <div className="px-4 py-2 rounded-full bg-gray-100 shadow-md">
          <span className="text-sm font-bold text-gray-800">
            We Are Here 👋
          </span>
        </div>
        <div className="bg-blue-500 rounded-full p-2 shadow-lg">
          <SupportAgentOutlinedIcon
            className="text-white"
            style={{ fontSize: "48px" }}
          />
        </div>
      </div>

      {/* Chat Window */}
      {isChatOpen && (
        <div className="absolute bottom-20 right-0 w-72 h-96 bg-white rounded-lg shadow-lg flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-blue-500 text-white text-center font-bold py-2 flex justify-between px-2 ">
            <span>Chat with Us</span>{" "}
            <span className="cursor-pointer" onClick={() => setIsChatOpen(false)}>
              <CloseIcon />
            </span>
          </div>
          {/* Messages */}
          <div className="flex-1 p-4 bg-gray-50 overflow-y-auto">
            <p className="text-gray-600 text-sm">
              Welcome! How can we assist you today?
            </p>
          </div>
          {/* Input */}
          <div className="flex items-center border-t border-gray-200 p-2">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600">
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
