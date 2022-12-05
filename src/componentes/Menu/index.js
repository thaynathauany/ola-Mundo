import { Link, useLocation } from 'react-router-dom';
import MenuLink from '../MenuLink';
import styles from './Menu.module.css';

export default function  Menu(){

    return (
        <header>
            <nav className={styles.navegacao}>
                <MenuLink conteudo="/">
                    Início
                </MenuLink>
                <MenuLink conteudo="/sobremim">
                    Sobre Mim
                </MenuLink>
            </nav>
        </header>
    )
}

// Link componente React Dom que substitui o <a> que tem como comportamento recarregar a página quando um link é criado
// useLocation() - é como o LocalStorage no JavaScrip, te devolve o pathname da URL
// ${localizacao.pathname === '/' ? styles.linkDestacado : ""} - Nessa linha há uma condicional. Só aplica o sublinhado se clicarmos em Inicio