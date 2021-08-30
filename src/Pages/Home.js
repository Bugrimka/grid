import {Post} from "../Component/Post";
import {PostListMock} from "../Mocks/PostListMock";

export const Home = () => (
    <div className="content">
        <div className="wrapper">
            <div className="postList">
                {PostListMock.map((post, index) => <Post
                    category={post.category}
                    date={post.date}
                    title={post.title}
                    description={post.description}
                    commentsCount={post.commentsCount}
                    cover={post.cover}
                    userId={post.userId}
                    key={index}
                />)}
            </div>
        </div>
    </div>
)