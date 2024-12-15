
import { Card } from "react-bootstrap";

export default function PostDetailsContent({ post }) {
    return (
        <Card className="mb-3" style={{ maxWidth: "400px", margin: "0 auto" }}>
            {post.imageLink && (
                <Card.Img variant="top" src={post.imageLink} alt={post.title} />
            )}
            <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.fullText || "No description provided"}</Card.Text>
                <div>
                    <small className="text-muted">Author: {post.author || "Unknown"}</small>
                    <br />
                    <small className="text-muted">
                        Date: {new Date(post.createDateTime).toLocaleDateString()} Time: {new Date(post.createDateTime).toLocaleTimeString()}
                    </small>
                </div>
            </Card.Body>
        </Card>
    );
}