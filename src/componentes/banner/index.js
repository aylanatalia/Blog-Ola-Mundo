import styles from './Banner.module.css'
import ciruloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/foto-perfil.jpg'

export default function Banner(){
    return(
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, pessoas!
                </h1>
                <p className={styles.paragrafo}>
                    Seja bem vindo ao meu espaço pessoal! Eu sou Ayla Natalia, estudante de Front-end na Alura, no projeto Oracle One, e também sou estudante de Economia pela unicesumar. Aqui compartilho um pouco dos meus conhecimentos com vocês
                </p>
            </div>
            <div className={styles.imagens}>
                <img className={styles.ciruloColorido} src={ciruloColorido} aria-hidden={true} />
                <img className={styles.minhaFoto} src={minhaFoto} alt='Foto de Ayla Natali de Oculos' />
            </div>
        </div>
    )
}