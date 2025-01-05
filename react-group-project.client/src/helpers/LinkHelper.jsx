export default function getFullImageLink(relativeLink) {
    if (!relativeLink)
        return null;

    const fullLink = `https://localhost:7281/${relativeLink}`;
    return fullLink;
}
