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

    {/* Function for add the title */}
    function addTitle(e) {
        {/* Don't delete the value when submit */}
        e.preventDefault()
        
        {/* Create new object when submit */}
        const newTitle = {
            id: id,
            title: newTitleGame
        }

        {/* Update the array whith new object */}
        setTitleGame([...titleGame, newTitle])

        {/* To increment the id */}
        setId(id + 1)
    }

    {/* Function for remove a title */}
    function removeTitle(id) {
        {/* Filtro titleGame assegnando a updateList tutta la lista tranne l'elemento con l'id uguale a quello cliccato */}
        const updateList = titleGame.filter((thisTitle) => thisTitle.id !== id)
        setTitleGame(updateList)
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
                                <li key={thisItem.id} className="d-flex justify-content-between my-2">
                                    <span>
                                        {thisItem.title}
                                    </span>
                                    <button className="btn btn-danger" type="button" onClick={() => removeTitle(thisItem.id)}><i className="bi bi-trash"></i></button>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </main>
        </>
    )
}