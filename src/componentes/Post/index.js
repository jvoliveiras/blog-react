import { Link } from 'react-router-dom'
import './Post.css'
import BotaoPrincipal from '../BotaoPrincipal'

const Post = ({post}) => {
    return (
        <Link to={`/posts/${post.id}`}>
            <div className='post'>
                <img
                    className='capa'
                    src={`/assets/posts/${post.id}/capa.png`} 
                    alt="Capa do post"
                />

                <h2 className='titulo'>{post.titulo}</h2>

                <BotaoPrincipal>Ler</BotaoPrincipal>
            </div>
        </Link>
       
    )
}

export default Post