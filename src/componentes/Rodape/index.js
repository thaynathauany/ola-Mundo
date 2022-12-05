
import styles from './Rodape.module.css';
import { ReactComponent as MarcaRegistrada } from 'assets/instagram.svg';

export default function Rodape() {
  return (
    <footer className={styles.rodape} >
        <a target="_blank" href='https://www.instagram.com/thayna.thauanny/'> Instagram</a>
        <div></div>
        <div>/</div>
        <div></div>
        <a target="_blank" href="https://www.linkedin.com/in/thayn%C3%A1-thauany/" >LinkedIn</a>
        <div>/</div>
        <a target="_blank" href="https://github.com/thaynathauany/" >GitHub</a>
    </footer>
  )
}