import './Banner.css'
import circuloColorido from '../../assets/circulo_colorido.png'
import minhaFoto from '../../assets/minha_foto.jpg'

const Banner = () => {
    return (
        <div className='banner'>
            <div className='apresentacao'>
                <h1> Olá, Caro Leitor!</h1>

                <p className='paragrafo'>
                    Meu nome é João Victor, sou estudante de análise e desenvolvimento de sistema e fiz esse projeto com intuito
                    de estudo da biblioteca react e componentes do React-Router-Dom.
                </p>

            </div>

            <div className='imagens'>
                <img className='circuloColorido' src={circuloColorido} alt='foto capa' />

                <img className='minhaFoto' src={minhaFoto} alt='Foto de Perfil' />
            </div>
        </div>

    )
}

export default Banner