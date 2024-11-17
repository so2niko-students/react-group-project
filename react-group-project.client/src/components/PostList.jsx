import PostItem from "./PostItem"

export default function PostList({ items = [] }) {
    return (
        items.map((item, i) => (<PostItem key={item.title + i} item={item} />))
    )
}