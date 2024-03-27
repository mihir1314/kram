import { useEffect, useRef, useState } from "react";
import Chatbot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import "../CSS/module.ChatBot.css";
import { TbMessageChatbot } from "react-icons/tb";

const ChatBot = () => {
  const theme = {
    background: "#1f1b2d ",
    headerBgColor: "#d24539",
    headerFontSize: "20px",
    botBubbleColor: "#9245b1",
    headerFontColor: "white",
    botFontColor: "white",
    userBubbleColor: "#d24539",
    userFontColor: "white",
  };
  const [chatOpen, setChatOpen] = useState(false);
  const chatRef = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleChat = () => {
    setChatOpen(!chatOpen);
  };

  const handleClickOutside = (event) => {
    if (chatRef.current && !chatRef.current.contains(event.target)) {
      setChatOpen(false);
    }
  };

  const steps = [
    {
      id: "0",
      message: "Hey Geek!",
      trigger: "1",
    },
    {
      id: "1",
      message: "Please write your username",
      trigger: "2",
    },
    {
      id: "2",
      user: true,
      trigger: "3",
    },
    {
      id: "3",
      message: " hi {previousValue}, how can I help you?",
      trigger: "4",
    },
    {
      id: "4",
      options: [
        { value: 1, label: "View Courses" },
        { value: 2, label: "Read Articles" },
      ],
      end: true,
    },
  ];

  const chatbotStyle = {
    // Adjust the position properties to set the chatbot position
    position: "fixed",
    bottom: "10px",
    right: "10px",
  };

  const headerComponent = (
    <div style={{ background: theme.headerBgColor, padding: "10px" }}>
      Chatbot Header
    </div>
  );

  const config = {
    botAvatar: "img.png",
    floating: true,
  };
  return (
    <>
    <ThemeProvider theme={theme}>
      <div
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          height: "100%",
          zIndex: 4,
        }}
      >
        {chatOpen && (
          <div ref={chatRef}>
            <Chatbot
              steps={steps}
              opened={chatOpen}
              toggleFloating={toggleChat}
              recognitionEnable={true}
              {...config}
              customDelay={500}
              headerComponent={
                <div style={{ background: theme.headerBgColor, padding: "10px" }}>
                  Chatbot Header
                </div>
              }
            />
          </div>
        )}
        <button
          style={{
            position: "fixed",
            left: "10px",
            bottom: "10px",
            zIndex: 3,
            padding: "10px",
            background: "#d24539",
            color: "white",
            border: "none",
            cursor: "pointer",
            borderRadius:'50%',
          }}
          onClick={toggleChat}
        >
          <TbMessageChatbot style={{margin:`0`}}/>
        </button>
      </div>
    </ThemeProvider>
    </>
  );
};

export default ChatBot;
