export default function Item( {title, id} ) {
    return (
        <>
            <li className="d-flex justify-content-between my-2">
                <span>
                    {title}
                </span>
                <button className="btn btn-danger" type="button" onClick={() => removeTitle({id})}><i className="bi bi-trash"></i></button>
            </li>
        </>
    )
}