import moment from "moment"
import "./post.css"
import {SocialMediaButton} from "./SocialMediaButton";

export const PostCard = (props) => {
    const getDate = date => moment(date).format('MMMM D, YYYY');


    return <div className="post-multimedia post">
        <div className="postCover">
            <img src={process.env.PUBLIC_URL + "/img/" + props.cover.src} alt=""/>
        </div>
        <div className="postContent">
            <div className="postWrapper">
                <div className="postHeader">
                    <span className="category">{props.category}</span>
                    <span className="palochka">|</span>
                    <span className="date">{getDate(props.date).toString()}</span>
                </div>
                <div className="title">{props.title}</div>
                <div className="description">{props.description}</div>
                <div className="actions">
                    <button>continue reading</button>
                </div>
            </div>
            <div className="postFooter">
                <SocialMediaButton/>
                <span className="comment">{props.commentsCount} Comment</span>
            </div>
        </div>
    </div>

}