import styles from './Inicio.module.css';
import posts from 'json/posts.json';
import PostCard from 'componentes/PostCard';

export default function Inicio(){
    return (
        <ul className={styles.posts}>
            {posts.map((post) => (
                <li key={post.id}>
                    <PostCard post={post}/>
                </li>
            ))}
        </ul>
    )
}

//Parametro post RECEBE CADA UM dos posts
// é interessante que cada li tenha um atributo key para o React fazer a renderização correta
// Pega o post.id que é aquele atributo que vimos no json.
// PROP chamada post que é o post do map 