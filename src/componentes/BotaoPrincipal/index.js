import './BotaoPrincipal.css'

const BotaoPrincipal = ({children, tamanho}) => {
    return (
        <button className={`botaoPrincipal ${tamanho}`}>
            {children}
        </button>
    )
}

export default BotaoPrincipal