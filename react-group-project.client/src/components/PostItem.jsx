import './PostItem.css';

export default function PostItem({ item = {} }) {
    return (
        <>
            <div className="card" style={{ margin: "10px" }}>
                <div className="card-body row">
                    <div className="col-8">
                        <h5 className="card-title">{item.title}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{item.description}</h6>
                        <div className="card-text">{item.authorName}</div>
                        <span>{item.dateOfCreation}</span>
                    </div>
                    <div className="col-4 d-flex justify-content-center align-items-center">
                        <img src={item.img} />
                    </div>
                </div>
            </div>
        </>
    )
}