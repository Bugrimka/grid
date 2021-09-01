import {getCurrentUser} from "../common";

export const PostText = (props) => {
    const user = getCurrentUser(props.userId)

    return <div className="post-text post">
        <div className="postContent">
            <div className="description">{props.description}</div>
            <div className="userBlock">
                <div className="userInfo">
                    <div className="userName">{user.firstName} {user.secondName}</div>
                    <div className="userProfession">{user.profession}</div>
                </div>
                <div className="userAvatar">
                    <img src={process.env.PUBLIC_URL + "/img/" + user.avatar} alt=""/>
                </div>
            </div>
        </div>
    </div>
}