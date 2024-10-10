import React from 'react';

import ImageIcon from '@mui/icons-material/Image';

const Statehandle = () => {
    function message() {
        
        open('https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/London-Eye-2009.JPG/1200px-London-Eye-2009.JPG')
    }
  return (
    <div>
        <span onMouseOver={message}>
            <ImageIcon />
        </span>
            
        
    </div>
  )
}

export default Statehandle;