import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png"
import styles from "./SobreMim.module.css"
import fotoSobreMim from "assets/sobre_mim_foto.png"

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou a Thayná :)
            </h3>

            <img
                src={fotoSobreMim}
                alt="Minha foto no Niagara Falls"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
            Oi, tudo bem? Eu sou estagiária na Agile .inc e estudante de Desenvolvimento de Sistemas e estou feliz em te ver por aqui :)
            </p>   

            <p className={styles.paragrafo}>
            Minha história com programação começou meio do nada... Eu estava no cursinho para prestar Engenharia de Petróleo e Gás ou Engenharia de Produção, quando tive meu primeiro contato, por insistência do meu, agora esposo, que é programador... E pronto, me encantei! Troquei o alvo e pensei: É isso que quero fazer! Eu aprendi lógica de programação e o básico de algumas linguagens, como JavaScript, Python, HTML e CSS, mas sem aprofundar muito em cada uma delas. Eu gostava muito de estudar programação, mas na época não fazia ideia de que trabalharia com isso hoje.
            </p> 
            <p className={styles.paragrafo}>
            No ensino superior, escolhi cursar Análise e Desenvolvimento de Sistemas, já havia me formado em Finanças então queria um curso mais rápido e a distância para poder gerenciar meu tempo melhor. Hoje estou no 4º semestre, e pra falar a verdade, é inacreditável pensar que consegui kkk...
            </p>
            <p className={styles.paragrafo}>
             Trabalhei por seis anos em uma grande rede hospitalar. Entrei em 2017 como Jovem Aprendiz e me tornei Analista de Contas, era uma rotina muito frenética, trabalhava quase que diariamente 14 horas por dia, então me virava como dava com a faculdade. Então, consegui um estágio na Agile .Inc e fui muito abençoada por isso ^^, além de ser próximo de casa, eles investem no meu conhecimento e isso é muito importante!
            </p>
            <p className={styles.paragrafo}>
            Desde então, tem sido apenas aprendizados atrás de aprendizados. Quero aproveitar essa oportunidade ao máximo e continuar aprendendo e evoluindo!
            </p>

        </PostModelo>
    )
}