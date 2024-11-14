import { useRouteError } from "react-router-dom";

export default function BlaBla() {
    const error = useRouteError();
    return <h2>{error.statusText ?? error.message}</h2>
}