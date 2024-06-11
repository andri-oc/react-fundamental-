function Article (props){
    return (
    <>
        <h3>{props.title}</h3>
        <h4>{props.author}</h4>
        <p>{props.description}</p>       
    </>
    )
}

export default Article;