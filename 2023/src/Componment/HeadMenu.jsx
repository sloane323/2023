import { Link } from "react-router-dom";
import styles from "../Componment/Modules/HeaderMenu.module.css";

const HeadMenu = () => {
    return ( 
        <div className={styles.headermenu}>
           <button> <Link to ='/'> Home </Link></button>
           <button> <Link to ='/pages'> 페이지1 </Link>  </button> 
           <button> <Link to ='/page2'> 페이지2 </Link>  </button>  
           <button><Link to ='/pages'> 페이지1 </Link>  </button> 
           <button><Link to ='/page2'> 페이지2 </Link>   </button> 
           <button> <Link to ='/pages'> 페이지1 </Link>  </button> 
           <button> <Link to ='/page2'> 페이지2 </Link>   </button> 
             <button><Link to ='/page2'> 페이지2 </Link>   </button> 
             <button> <Link to ='/pages'> 페이지1 </Link>  </button> 
             <button> <Link to ='/page2'> 페이지2 </Link>   </button> 
        </div>
     );
}
 
export default HeadMenu;