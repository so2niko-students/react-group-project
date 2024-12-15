import axios  from "axios";

export async function getItems(url) {
    let data = null;
    let error = null;
    try {
        const response = await axios.get(url);

        const formattedData = response.data.map(p => ({
            id: p.id,
            title: p.title,
            description: p.shortDescription,
            authorName: p.creator.Login,
            dateOfCreation: p.createDateTime,
            imageLink: p.imageLink
        }));

        data = formattedData;
    } catch (err) {
        return { data: null, error: err.message };
    }
    
    return { data, error };
}

export async function getItem(url) {
    let data = null;
    let error = null;
    try {
        const response = await axios.get(url);
        const result = response.data;
        
        const formattedData = {
            id: result.id,
            title: result.title,
            description: result.shortDescription,
            authorName: result.creator.Login,
            dateOfCreation: result.createDateTime,
            imageLink: result.imageLink
        };

        data = formattedData;
    } catch (err) {
        return { data: null, error: err.message };
    }

    return { data, error };
}
