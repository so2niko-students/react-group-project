import PostList from "../../components/post_list/post_list"
import { items } from "../../data"

export default function Home() {
    return (
        <div className="container d-flex justify-content-center flex-column">
            <PostList items={items} />
        </div>
    )
}