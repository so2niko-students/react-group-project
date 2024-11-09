import { useRouteError } from "react-router-dom";

export default function Error(){
    const error = useRouteError();
    return <h2>{error.statusText ?? error.message}</h2>
}