import styles from "../Componment/Modules/Side.module.css";

const Side = (props) => {

    const { setModalOpen } = props;

    const closeModal = () => {
        setModalOpen(false);
    };

    return ( <div>
        
    
        <div className={styles.side}>
        <button onClick={closeModal} className={styles.sidex}> X </button> 
        <br />
             사이드바입니다. <br/>
             사이드바입니다.  <br/>
             사이드바입니다. <br/>
        </div>
    </div>  );
}
 
export default Side;