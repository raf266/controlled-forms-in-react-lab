import { useState } from "react";

function Bookshelf() {
    // const [title, setTitle] = useState("")
    // const [author, setAuthor] = useState("")
    const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
    ]);

    const [newBooks, setNewBooks] = useState({
        title: '',
        author: ''
    })

    function handleInputChange(event){
        setNewBooks({...newBooks, [event.target.name]: event.target.value})
  }

    function handleSubmit(event){
        event.preventDefault()

        setBooks([...books, newBooks])

        setNewBooks({
            title: "",
            author: ""
        })
    }

    return (
    <>
        <div className="bookshelfDiv">
            <div className="formDiv">
                <h3>Add a Book</h3>
                <form onSubmit={handleSubmit}>

                    <label htmlFor="title">Title:</label>
                    <input onChange={handleInputChange} type="text" value={newBooks.title} id="title" name="title" />

                    <label htmlFor="author">Author:</label>
                    <input onChange={handleInputChange} type="text" value={newBooks.author} id="author" name="author"/>

                    <button type="submit">Add Book</button>
                </form>
            </div>


            <div className="bookCardsDiv">
                {books.map((book, index) => (
                    <div className="bookCard" key={index}>
                        <h3>{book.title}</h3>
                        <p>{book.author}</p>
                    </div>
                ))}
            </div>
        </div>
    </>  
    )
}

export default Bookshelf

