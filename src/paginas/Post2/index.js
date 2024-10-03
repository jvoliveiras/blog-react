import { useParams } from 'react-router-dom'
import './Post2.css'
import posts from "../../json/posts.json"
import PostModelo from '../../componentes/PostModelo';
import ReactMarkdown from "react-markdown"
import NotFound from '../NotFound';
import Default from '../../componentes/Default';

const Post2 = () => {
    const parametros = useParams();

    const post = posts.find((post) => {
        return post.id === Number(parametros.id);
    })

    if (!post) {
        return <NotFound />
    }
    return (
        <Default>
            <div className='post-markdown-container'>
                <PostModelo fotoCapa={`/assets/posts/${post.id}/capa.png`} titulo={post.titulo}>
                    <ReactMarkdown>{post.texto}</ReactMarkdown>
                </PostModelo>
            </div>
        </Default>
    )
}

export default Post2