import { useState, useEffect } from "react";

export function useFetchPosts(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true);
                setError(null);

                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error(`Server error: ${response.status} ${response.statusText}`);
                }

                const result = await response.json();
                const formattedData = result.map(p => ({
                    id: p.id,
                    title: p.title,
                    description: p.shortDescription,
                    authorName: p.creator.Login,
                    dateOfCreation: p.createDateTime,
                    imageLink: p.imageLink
                }));

                setData(formattedData);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [url]);

    return { data, loading, error };
}

export function useFetchPost(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true);
                setError(null);

                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error(`Server error: ${response.status} ${response.statusText}`);
                }

                const result = await response.json();
                const formattedData = {
                    id: result.id,
                    title: result.title,
                    description: result.shortDescription,
                    authorName: result.creator.Login,
                    dateOfCreation: result.createDateTime,
                    imageLink: result.imageLink
                };

                setData(formattedData);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [url]);

    return { data, loading, error };
}