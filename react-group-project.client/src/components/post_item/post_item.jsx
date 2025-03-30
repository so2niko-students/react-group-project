import './post_item.css';
import { Link } from "react-router-dom";
import { SERVER_URL } from '../../constants' 

export default function PostItem({ item = {} }) {
    return (
        <div className="card m-2">
            <div className="card-body row">
                <div className="col-8">
                    <h5 className="card-title"><Link to={`/post/${item.id}`}>{item.title}</Link></h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                        <span>{item.description}</span>
                        <Link to={`/post/${item.id}`}>... see more</Link>
                    </h6>
                    <div className="card-text">{item.authorName} {item.authorLastName}</div>
                    <div>{item.dateOfCreation}</div>
                </div>
                <div className="col-4 d-flex justify-content-center align-items-center">
                    <img src={`${SERVER_URL}${item.imgPath}`} alt="" className="file-preview" />
                </div>
            </div>
        </div>
    )
}