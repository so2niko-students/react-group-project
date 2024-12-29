import { Card } from "react-bootstrap";
import "./PostDetailsContent.css"

export default function PostDetailsContent({ post }) {
    return (
        <Card className="mb-3 postDetails-card">
            {post.imageLink && (
                <Card.Img variant="top" src={post.imageLink} alt={post.title} className="postDetails-cardImage" />
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