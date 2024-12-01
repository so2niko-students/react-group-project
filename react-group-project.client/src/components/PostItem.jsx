import './PostItem.css';
import { Link} from "react-router-dom";

export default function PostItem({ item = {} }) {
    return (
        <div className="card card-body row" style={{ margin: "10px" }}>
                <div className="card-body row">
                <div className="col-8">
                    <h5 className="card-title"><Link to={`/post/${item.id}`}>{item.title}</Link></h5>
                        <h6 className="card-subtitle mb-2 text-muted">{item.description}</h6>
                        <div className="card-text">{item.authorName}</div>
                        <div>{item.dateOfCreation}</div>
                    </div>
                    <div className="col-4 d-flex justify-content-center align-items-center">
                        <img src={item.imageLink} />
                    </div>
                </div>
            </div>
    )
}