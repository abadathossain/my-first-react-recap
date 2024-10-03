
export default function Todo({task, isDone}) {
  return (
    <>

    {/* <li>{task}{isDone && '=Done'}</li> */}

    {/* Ternary operaor */}
<li>{isDone?task:'Do it'}</li>

    </>
  )
}
