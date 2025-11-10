import list from "../assets/list"

export default function Main() {

    <list />
    

    return (
        <>
        <main>
            <div className="container text-center">
                <div className="card text-start">
                    <ul>
                        {
                            list.map((thisItem) => (
                                <li key={thisItem.id}>{thisItem.title}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </main>
        </>
    )
}