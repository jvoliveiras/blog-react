import PostModelo from "../../componentes/PostModelo"
import fotoCapa from "../../assets/sobre_mim_capa.png"
import './SobreMim.css'
import fotoSobreMim from "../../assets/sobre_mim_foto.jpg"

const SobreMim = () => {
    return (
        <PostModelo fotoCapa={fotoCapa} titulo="Sobre Mim">
            <h3 className="subtitulo">
                João Victor Santana de Oliveira
            </h3> 

            <img src={fotoSobreMim} alt="Minha foto" className="fotoSobreMim" />

            <p className='paragrafo'>
                Meu nome é João Victor, sou estudante de análise e desenvolvimento de sistema e fiz esse projeto com intuito de estudo da biblioteca react e componentes do React-Router-Dom.
            </p>

            <p className='paragrafo'>
                Tenho 22 anos e atualmente estou trabalhando também na área da tecnologia, como desenvolvedor de software junior. 
            </p>

            <p className='paragrafo'>
                Tenho experiência com algumas tecnologias como PHP/Laravel, JavaScript/Jquery, HTML, CSS e outros, além de banco de dados MySql.
            </p>

        </PostModelo>
    )
}

export default SobreMim