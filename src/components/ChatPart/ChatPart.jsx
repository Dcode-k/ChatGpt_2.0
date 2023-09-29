import { useState } from "react";
import styles from "./ChatPart.module.css";
import { RiSendPlane2Fill } from "react-icons/ri";
import ChatMessage from "../ChatMessage/ChatMessage";
import {useSelector} from 'react-redux'

const ChatPart = () => {
  const [searchPrompt, setSearchPrompt] = useState("");
  const [chatLog, setChatLog] = useState([]);
  const currentModel=useSelector((store)=>store.model.currentModel);

// function clearAllChats(){
//   setChatLog([]);
// }

  async function handleSearchSubmit(e) {
    e.preventDefault();
    const userChatLog = [
      ...chatLog,
      { user: "me", message: `${searchPrompt}` },
    ];
    setSearchPrompt("");
    setChatLog(userChatLog);
    
    const response = await fetch("http://localhost:3001", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        message: searchPrompt,
        model:currentModel,
      }),
    });
    const data = await response.json();
    data &&
      setChatLog([...userChatLog, { user: "gpt", message: `${data.message}` }]);
  }
  return (
    <div className={styles.chatpart_container}>
      <div className={styles.main_container}>
        {chatLog.map((log, index) => (
          <ChatMessage key={index} messageLog={log} />
        ))}
      </div>
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
  );
};

export default ChatPart;
