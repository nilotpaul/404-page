import { Link } from 'react-router-dom'
import "./App.css"

function App() {

  return (
     <div className='container'>
      <img src="https://static.vecteezy.com/system/resources/previews/022/241/796/original/concept-404-error-page-flat-cartoon-style-illustration-vector.jpg" alt="404-image" />
      <h1>OPPS! Something Went wrong</h1>
      <p>The page that you're looking for doesn't exists</p>
       <button><i className='back' /></button>
     </div>
  )
}

export default App
