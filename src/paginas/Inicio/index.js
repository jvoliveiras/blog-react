import './Inicio.css'
import Post from "../../componentes/Post"
import posts from '../../json/posts.json'

const Inicio = () => {      
    return (
        <ul className="posts">
            {posts.map((post) => 
                <li key={post.id}>
                    <Post post={post} />
                </li>
            )}
        </ul>
    )
}

export default Inicio