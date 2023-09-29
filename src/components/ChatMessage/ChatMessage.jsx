import styles from './ChatMessage.module.css'
import logo from '../../assets/chatgpt_logo.png'

const ChatMessage=({messageLog})=>{
    return (
       <>
       <div className={messageLog.user==="me"?styles.usermessage_container:styles.chatgptmessage_container}>
            <div className={messageLog.user==="me"?styles.user_avatar:styles.chatgpt_avatar}>
              <img src={logo} alt="chatgpt_logo" />
            </div>
            <div className={messageLog.user==="me"?styles.user_message:styles.chatgpt_message}>
              {messageLog.message}
            </div>
          </div>
       </>
          
    )
}

export default ChatMessage;