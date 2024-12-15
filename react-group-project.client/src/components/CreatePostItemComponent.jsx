import React, { useState } from "react";
import { TextField, Button, Box, Typography, IconButton } from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";

function CreatePostItemComponent({ onCreate }) {
    const [title, setTitle] = useState("");
    const [shortDescription, setShortDescription] = useState("");
    const [fullText, setFullText] = useState("");
    const [imageFile, setImageFile] = useState(null);
    const [error, setError] = useState("");
    const [imagePreview, setImagePreview] = useState("");

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

        const formData = new FormData();
        formData.append("title", title);
        formData.append("shortDescription", shortDescription);
        formData.append("fullText", fullText);
        if (imageFile) {
            formData.append("image", imageFile);
        }

        onCreate({ title, shortDescription, fullText, imageFile });

        setTitle("");
        setShortDescription("");
        setFullText("");
        setImageFile(null);
        setImagePreview("");
        setError("");
    };

    return (
        <Box sx={{ maxWidth: 600, margin: "0 auto", padding: 2 }}>
            <Typography variant="h4" gutterBottom>
                Create Post
            </Typography>

            {error && <Typography color="error">{error}</Typography>}

            <form onSubmit={handleSubmit}>
                <TextField
                    label="Title"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <TextField
                    label="Short Description"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={shortDescription}
                    onChange={(e) => setShortDescription(e.target.value)}
                />
                <TextField
                    label="Full Text"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={fullText}
                    onChange={(e) => setFullText(e.target.value)}
                    required
                    multiline
                    rows={4}
                />

                {/* Загрузка изображения */}
                <div>
                    <input
                        accept="image/*"
                        style={{ display: "none" }}
                        id="file-upload"
                        type="file"
                        onChange={handleImageChange}
                    />
                    <label htmlFor="file-upload">
                        <IconButton color="primary" component="span">
                            <PhotoCamera />
                        </IconButton>
                    </label>
                    {imagePreview && (
                        <div>
                            <img
                                src={imagePreview}
                                alt="Preview"
                                style={{ width: "100%", maxHeight: "300px", objectFit: "cover" }}
                            />
                        </div>
                    )}
                </div>

                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={{ marginTop: 2 }}
                >
                    Create Post
                </Button>
            </form>
        </Box>
    );
}

export default CreatePostItemComponent;
