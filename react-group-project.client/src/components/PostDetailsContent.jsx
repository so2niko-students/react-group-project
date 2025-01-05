import { Card } from "react-bootstrap";
import "./PostDetailsContent.css"
import getFullImageLink from "../helpers/LinkHelper.jsx";
import { Link } from "react-router-dom";

export default function PostDetailsContent({ post }) {
    const imageLink = getFullImageLink(post.imageLink);
    return (
        <Card className="mb-3 postDetails-card">
            {post.imageLink && (
                <Card.Img variant="top" src={imageLink} alt={post.title} className="postDetails-cardImage" />
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
                    <h6 className="text-primary"><Link to={`/editPost/${post.id}`}>Edit</Link></h6>
                </div>
            </Card.Body>
        </Card>
    );
}