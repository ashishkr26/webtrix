import React, { useEffect, useState } from "react";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";

import CloseIcon from "@mui/icons-material/Close";

const ChatBot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen((prev) => !prev);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsChatOpen(true);
    }, 5000);
  }, []);
  return (
    <div className="fixed bottom-4 right-4 z-10">
      {/* Chat Toggle Button */}
      <div
        className="flex items-center space-x-3 cursor-pointer"
        onClick={toggleChat}
      >
        <div className="px-3 py-2 rounded-full shadow-md bg-gray-800">
          <span className="text-sm font-semibold text-white ">
            Hi. 👋 how may i help you.?
          </span>
        </div>
        <div className="bg-gray-800 rounded-full p-2 shadow-lg">
          <SupportAgentOutlinedIcon
            className="text-white"
            sx={{ fontSize: { lg: 44, md: 32, sm: 32, xs: 32 } }}
          />
        </div>
      </div>

      {/* Chat Window */}
      {isChatOpen && (
        <div className="absolute bottom-20 right-0 w-72 h-96 bg-white rounded-lg shadow-lg flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-yellow-400 text-white text-center font-bold py-2 flex justify-between px-2 ">
            <span>Chat with Us</span>{" "}
            <span
              className="cursor-pointer"
              onClick={() => setIsChatOpen(false)}
            >
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
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <button className="ml-2 px-4 py-2 bg-yellow-400 text-white rounded-md shadow-md hover:bg-blue-600">
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
