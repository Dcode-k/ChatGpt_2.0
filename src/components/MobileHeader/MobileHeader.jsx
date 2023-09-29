import styles from './MobileHeader.module.css'
import {RxHamburgerMenu} from 'react-icons/rx'

const MobileHeader=()=>{
    return (
        <div className={styles.header_container}>
           <div className={styles.hamburger}>
               <RxHamburgerMenu/>
           </div>
           <h4>New chat</h4>
           <div className={styles.plusicon}>
                +
           </div>
        </div>
    )
}

export default MobileHeader;