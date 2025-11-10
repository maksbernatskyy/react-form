import { useState } from "react"

import list from "../assets/list"

export default function Main() {

    <list />

    {/* Array corrente */}
    const [titleGame, setTitleGame] = useState('')

    {/* Array clonato */}
    const [newTitleGame, setNewTitleGame] = useState('')

    function addTitle(e) {
        e.preventDefault()
        setTitleGame([...titleGame, newTitleGame])
    }
    

    return (
        <>
        <main>
            <div className="container text-center">
                <div className="my-5">
                    <form onSubmit={addTitle}>
                        <input 
                          type="text"
                          value={titleGame}
                          onChange={e => setTitleGame(e.target.value)} 
                        />
                        <button type="submit" className="ms-3">Invia</button>
                    </form>
                </div>
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