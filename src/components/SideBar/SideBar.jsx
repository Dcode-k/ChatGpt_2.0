import styles from './SideBar.module.css'
import {TbLayoutSidebarLeftCollapse} from 'react-icons/tb'

const SideBar=()=>{
   return (
        <div className={styles.sidebar_container}>
          <div className={styles.newchatbtn_container}>
             <div className={styles.newchatbtn}>
               <span>+</span><span>NewChat</span>
             </div>
             <div className={styles.closesidebarbtn}>
               <TbLayoutSidebarLeftCollapse/>
             </div>
          </div>
          <div>

          </div>
        </div>
    )
}

export default SideBar;