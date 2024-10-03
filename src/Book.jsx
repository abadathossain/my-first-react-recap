

export default function Book({book}) {
    const {name,price}=book;
  return (
    <>
    {/* <div>Book</div>
    <h1>Name:{book.name}</h1>
    <h3>Price:{book.price}</h3> */}
    <h1>Name:{name}</h1>
    <h3>Price:{price}</h3>
    </>
  )
}
