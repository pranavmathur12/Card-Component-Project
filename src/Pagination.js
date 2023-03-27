import React ,{useEffect, useState} from 'react'
import Button from '@mui/material/Button';

function Pagination({showPerPage , onPaginationChange , total}) {

    const [counter,setCounter] = useState(1);
    useEffect(()=>{
        const value = showPerPage * counter ; 
        onPaginationChange(value-showPerPage,value);
    },[counter,onPaginationChange,showPerPage])
    
    const onButtonClick = (type) => {
        if (type === "prev") {
          if (counter === 1) {
            setCounter(1);
          } else {
            setCounter(counter - 1);
          }
        } else if (type === "next") {
            if (Math.ceil(total / showPerPage) === counter) {
                setCounter(counter);
              } else {
                setCounter(counter + 1);
              }
        }
      };

  return (
    <div className='d-flex justify-content-between'>
        <Button variant="contained" onClick={() => onButtonClick("prev")}>Previous</Button>
        <Button variant="contained" onClick={() => onButtonClick("next")}>Next</Button>
    </div>
  )
}

export default Pagination