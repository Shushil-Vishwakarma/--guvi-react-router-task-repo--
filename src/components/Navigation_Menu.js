import { Link } from 'react-router-dom';
import style from './Navigation_Menu.module.css'

export function Navigation_Menu() {
     return (
          <nav className={style.navigation_menu}>
               <ul>
                    <li><Link to="/">All</Link></li>
                    <li><Link to="/fullstack">Full Stack Development</Link></li>
                    <li><Link to="/datascience">Data Science</Link></li>
                    <li><Link to="/cybersecurity">Cyber Security</Link></li>
                    <li><Link to="/career">Career</Link></li>
               </ul>
          </nav>
     );
}
