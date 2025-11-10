import { useState } from "react"

import list from "../assets/list"

export default function Main() {

    <list />

    {/* Array corrente */}
    const [titleGame, setTitleGame] = useState(list)

    {/* Array clonato */}
    const [newTitleGame, setNewTitleGame] = useState('')

    {/* Contatore ID */}
    const [id, setId] = useState(list.length + 1)

    function addTitle(e) {
        e.preventDefault()
        
        const newTitle = {
            id: id,
            title: newTitleGame
        }

        setTitleGame([...titleGame, newTitle])
        setId(id + 1)

    }
    

    return (
        <>
        <main>
            <div className="container text-center">

                {/* Form */}
                <div className="my-5">
                    <form onSubmit={addTitle}>
                        {/* Input per il titolo */}
                        <input 
                          type="text"
                          value={newTitleGame}
                          onChange={e => setNewTitleGame(e.target.value)} 
                        />
                        <button type="submit" className="ms-3">Invia</button>
                    </form>
                </div>

                {/* Lista */}
                <div className="card text-start">
                    <ul>
                        {
                            titleGame.map((thisItem) => (
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