import React, { useState, useEffect } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import getFullImageLink from "../helpers/LinkHelper.jsx";

function EditPostItemComponent({ post, onEdit }) {
    const [title, setTitle] = useState("");
    const [shortDescription, setShortDescription] = useState("");
    const [fullText, setFullText] = useState("");
    const [imageFile, setImageFile] = useState(null);
    const [error, setError] = useState("");
    const [imagePreview, setImagePreview] = useState("");

    useEffect(() => {
        if (post) {
            setTitle(post.title || "");
            setShortDescription(post.shortDescription || "");
            setFullText(post.fullText || "");
            if (post.image) {
                setImageFile(file);
                setImagePreview(post.image);
            }
            else if (post.imageLink) {
                setImagePreview(getFullImageLink(post.imageLink));
            }
        }
    }, [post]);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImageFile(file);
            setImagePreview(URL.createObjectURL(file));
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!title || !fullText) {
            setError("Title and Full Text are required");
            return;
        }

        onEdit({ title, shortDescription, fullText, imageFile });
    };

    return (
        <Container className="mt-4" style={{ maxWidth: "600px" }}>
            <h4 className="mb-3">Edit Post</h4>

            {error ? <Alert variant="danger">{error}</Alert> : null}

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Short Description</Form.Label>
                    <Form.Control
                        type="text"
                        value={shortDescription}
                        onChange={(e) => setShortDescription(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Full Text</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={4}
                        value={fullText}
                        onChange={(e) => setFullText(e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Upload New Image (optional)</Form.Label>
                    <Form.Control
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                    {imagePreview ? (
                        <div className="mt-3">
                            <img
                                src={imagePreview}
                                alt="Preview"
                                className="w-100"
                                style={{ maxHeight: "400px", objectFit: "cover" }}
                            />
                        </div>
                    ) : null}
                </Form.Group>

                <Button
                    type="submit"
                    variant="primary"
                    className="mt-3"
                >
                    Save Changes
                </Button>
            </Form>
        </Container>
    );
}

export default EditPostItemComponent;
