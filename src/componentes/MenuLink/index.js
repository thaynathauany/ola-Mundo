import { Link, useLocation} from 'react-router-dom';
import styles from './MenuLink.module.css';

export default function MenuLink({ children, conteudo }) {
    const localizacao = useLocation();
    
    return (
        <Link className={`
            ${styles.link}
            ${localizacao.pathname === conteudo ? styles.linkDestacado : ""}
        `} to={conteudo}>
            {children}
        </Link>
    )
}