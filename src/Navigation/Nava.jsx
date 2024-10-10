import React from 'react'
import './Nava.css'
import{Link} from 'react-router-dom'

const Nava = () => {
  return (
    <div>
        <div className='nava'>
        <nav>
            <ul>
                <Link to="/"><li>Home</li></Link>
                
                <Link to="/work"><li>Work</li></Link>
                
                <Link to="/contact"><li>Content</li></Link>
                <Link to ="/Todolist"><li>Todolist</li></Link>
               
            </ul>
        </nav>

        </div>
        
    </div>
  )
}

export default Nava