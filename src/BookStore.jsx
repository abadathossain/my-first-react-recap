import Book from "./Book"

export default function BookStore({books}) {
    console.log(books.length)
  return (
    <>
    <div>BookStore</div>
    {
        books.map(book=><Book book={book}></Book>)
    }
    </>
   
  )
}
