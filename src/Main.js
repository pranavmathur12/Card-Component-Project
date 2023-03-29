import React, { useState } from 'react'
//import CardComponent from './CardComponent';
import { useDispatch , useSelector} from 'react-redux';
import {fetchTodos} from './redux/slice/todo'
import { useEffect } from 'react';
import TestCard from './TestCard';
import Pagination from './Pagination';


function Main() {
  const dispatch = useDispatch();
  const [showPerPage , setShowPerPage] = useState(4)
  const [pagination,setPagination] = useState({
    start : 0,
    end : showPerPage,
  })
  const state = useSelector((state) =>state);
  useEffect(()=>{

    dispatch(fetchTodos());

  },[dispatch])

  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end });
  };
  
  if (state.todo.isLoading  ) {
    return <h1>Loading.... Please Wait</h1>;
  }
  if (!state.todo.data) { 
    return <h1>Loading...</h1>; 
  }
  return (
    <div className="app">
        <h1>First Task</h1>
      <div>
    <div className='container'>
    {state.todo.data && state.todo.data.slice(pagination.start, pagination.end).map((e) => 
    <TestCard Id = {e.id} Info = {e.Info} Body = {e.body}/>
    )}
     </div> 
    </div>
    <Pagination 
          showPerPage={showPerPage}
          onPaginationChange={onPaginationChange}
          total = {state.todo.data.length}
        />
    </div>
  )
}

export default Main