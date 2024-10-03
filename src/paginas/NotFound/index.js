import './NotFound.css'
import erro404 from '../../assets/erro_404.png'
import BotaoPrincipal from '../../componentes/BotaoPrincipal'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navegar = useNavigate();

    return (
        <>
            <div className='conteudoContainer'>
                <span className='texto404'>404</span>

                <h1 className='titulo'>
                    Ops! Página não encontrada! :(
                </h1>

                <p className='paragrafo'>
                    Tem certeza de que era isso que voce estava procurando?
                </p>

                <p className='paragrafo'>
                    Aguarde e recarregue a página!
                </p>

                <div onClick={() => navegar(-1)} className='botaoContainer'>
                    <BotaoPrincipal tamanho="lg">Voltar</BotaoPrincipal>
                </div>

                <img className='imagemCachorro' src={erro404} alt="foto cachorro" />
            </div>

            <div className='espacoEmBranco'>
            </div>
        </>
    )
}

export default NotFound