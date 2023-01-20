import Logo from "./Logo";
import styles from "../Componment/Modules/Header.module.css";
import { useState } from "react";
import Side from "../Componment/Side";

const Header = () => {

    const [modalOpen, setModalOpen] = useState(false);
    const showModal = () => {
        setModalOpen(true);
    };
    

    return ( <div>
        <div className={styles.header}> 
        <div className={styles.Logo}><Logo /></div>

      
        <div onClick={showModal}   className={styles.sidemenu}  > ☰ </div> 
        {modalOpen && <Side setModalOpen={setModalOpen} />} </div>
       
    </div> );
}
 
export default Header;