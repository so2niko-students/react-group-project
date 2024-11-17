import PostList from "./components/PostList"
import { items } from "./data"

export default function Home() {
    return (
        <div className="container d-flex justify-content-center">
        <div>
                <PostList items={items} />
            </div>
        </div>
    )
}