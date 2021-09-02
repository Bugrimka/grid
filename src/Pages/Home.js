import {PostCard} from "../Component/PostCard";
import {PostListMock} from "../Mocks/PostListMock";
import {PostType} from "../Enum/PostType";
import {PostText} from "../Component/PostText";

export const Home = () => (
    <div className="content">
        <div className="wrapper">
            <div className="postList">
                {PostListMock.map((post, index) => {
                    if (post.type === PostType.text) {
                        return <PostText
                            description={post.description}
                            userId={post.userId}
                            key={index}
                        />
                    } else {
                        return <PostCard
                            category={post.category}
                            date={post.date}
                            title={post.title}
                            description={post.description}
                            commentsCount={post.commentsCount}
                            cover={post.cover}
                            userId={post.userId}
                            key={index}
                        />
                    }
                })}
            </div>
        </div>
    </div>
)