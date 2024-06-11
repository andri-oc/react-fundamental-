import post from "../../post.json"
import Article from "../component/article";
function Homepage () {
    return (
        <>
        <h1>Blog Sederhana</h1>
        {post.map((props, index) =>(
            <Article { ...props} key={index}/>
          ))}
        </>
    )
}

export default Homepage;