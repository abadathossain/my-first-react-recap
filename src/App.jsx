
import Person from './Person';
import './App.css'
import BookStore from './BookStore';
// import Todo from './Todo'

function App() {

  const singers=['A','B','C'];
  const books = [
    {
        id: 1,
        name: 'To Kill a Mockingbird',
        price: 15.99
    },
    {
        id: 2,
        name: '1984',
        price: 12.49
    },
    {
        id: 3,
        name: 'The Great Gatsby',
        price: 10.99
    },
    {
        id: 4,
        name: 'Moby Dick',
        price: 18.50
    },
    {
        id: 5,
        name: 'Pride and Prejudice',
        price: 14.75
    }
];



  return (
    <>
  
      <h1>Vite + React</h1>
      {/* <Todo task='learnig React' isDone={true}></Todo>
      <Todo task='React' isDone={false}></Todo>
  <Todo task='learnig Vue' isDone={true}></Todo> */}
  {
    singers.map(singer=><Person name={singer}></Person>)
  }

  <BookStore books={books}></BookStore>

    </>
  )
}

export default App
