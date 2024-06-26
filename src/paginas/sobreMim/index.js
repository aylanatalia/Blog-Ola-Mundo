import styles from './SobreMim.module.css'
import PostModelo from "componentes/postModelo";
import fotoCapa from 'assets/sobre_mim_capa.png'
import fotoSobreMim from 'assets/foto-sobremim.jpg'

export default function SobreMim(){
    return(
        <PostModelo fotoCapa={fotoCapa} titulo="Sobre mim:">
            <h3 className={styles.subtitulo}>
                Olá, eu sou a Ayla Natalia!
            </h3>

            <img src={fotoSobreMim} alt='Foto de Ayla Natalia' className={styles.fotoSobreMim} />

            <p className={styles.paragrafo}>
                Olá, tudo bem? Eu sou estudante de front- end e estou participando da T6 do Oracle One da Alura.
            </p>
            <p className={styles.paragrafo}>
                No ano de 2017 comecei a minha primeira graduação em licenciatura em Matemática pela Universidade Estadual do Norte do Paraná, e acabei escolhendo este curso porque sempre fui apaixonado em lidar com números e calculos durante meus anos escolares. No último ano acabamos passando pela pandemia do covid, no ano de 2020, o que acabou atrasando um pouco a minha formação e nesse período tivemos algumas mudanças na rotina, onde trocamos o presencial pelo remoto e ai finalmente em maio de 2021 consegui concluir meu curso e me formar. Em 2022 resolvi iniciar uma nova graduação, no curso de Ciências econômicas da Unicesumar, para me aprofundar em outra area a qual tenho muito interesse. 
            </p>
            <p className={styles.paragrafo}>
                No ano inicio do ano de 2024, resolvi me inscrever no programa da Oracle com a Alura para poder ter uma oportunidade de começar a estudar programação visando conseguir uma vaga de emprego em um mercado altamente abrangente. Nisso comecei pegar gosto pela coisa e me aprofundar mais.
            </p>
            <p className={styles.paragrafo}>
                Na particpação do projeto acabei escolhendo me aprofundar em front- end, porque acabou sendo uma area que me atraiu bastante por todo o trabalho visual e gama de possibilidades que se poderia faz com armas poderosas. Neste período acabei estudando linguagens como CSS, HTML, JavaScript, e também participei de um bootcamp da DIO sobre  a lingugagem Java.
            </p>
        </PostModelo>
        
    )
}