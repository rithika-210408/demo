import React, {useState} from 'react';

const State = () => {
    const[like,setLike]=useState(0)
    function increment()
    {
        setLike(like+1)
    }
    function decrement(){
        if (like > 0)
        setLike(like-1)
    }

  return (
    <div>
        <img src="" alt=""/>
        <p>
            {like}
        </p>
        <button onClick={increment}>Like</button>
        <button onClick={decrement}>Dislike</button>
            


        
    </div>
  )
}

export default State;