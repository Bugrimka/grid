import "./post.css"

export const Post = (props) => {
    console.log(props)
    return <div className="post">
        <div className="postCover">
            <img src={process.env.PUBLIC_URL + "/img/" + props.cover.src} alt=""/>
        </div>
        <div className="postContent">
            <div className="postWrapper">
                <div className="postHeader">
                    <span className="category">{props.category}</span>
                    <span className="palochka">|</span>
                    <span className="date">{props.date}</span>
                </div>
                <div className="title">{props.title}</div>
                <div className="description">{props.description}</div>
                <div className="actions">
                    <button>continue reading</button>
                </div>
            </div>
            <div className="postFooter">
                <div className="socialMedia"/>
                <span className="comment">{props.commentsCount} Comment</span>
            </div>
        </div>
    </div>

}