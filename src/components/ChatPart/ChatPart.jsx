import { useState } from "react";
import styles from "./ChatPart.module.css";
import { RiSendPlane2Fill } from "react-icons/ri";
import ChatMessage from "../ChatMessage/ChatMessage";

const ChatPart = () => {
  const [searchPrompt, setSearchPrompt] = useState("");
  const [chatLog, setChatLog] = useState([]);



//handelsearchSubmit function
  async function handleSearchSubmit(e) {
    e.preventDefault();
    const userChatLog = [
      ...chatLog,
      { user: "me", message: `${searchPrompt}` },
    ];
    setSearchPrompt("");
    setChatLog(userChatLog);
     console.log(searchPrompt)
    const response = await fetch("https://chatgpt-server-428w.onrender.com", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        message: searchPrompt,
      }),
    });
    const data = await response.json();
    console.log(data);
    data && setChatLog([...userChatLog, { user: "gpt", message: `${data.message}` }]);
  }


  return (
    <div className={styles.chatpart_container}>
      <div className={styles.main_container}>
        {chatLog.map((log, index) => (
          <ChatMessage key={index} messageLog={log} />
        ))}
      </div>
      <div className={styles.subpart}>
      <div className={styles.search_container}>
        <form onSubmit={(e) => handleSearchSubmit(e)}>
          <input
            className={styles.search_input}
            type="text"
            placeholder="send a message"
            value={searchPrompt}
            onChange={(e) => setSearchPrompt(e.target.value)}
          />
        </form>
        <span className={styles.sendbtn}>
          <RiSendPlane2Fill />
        </span>
      </div>
      </div>
       </div>
  );
};

export default ChatPart;
