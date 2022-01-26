import React, { useEffect, useState } from 'react';

function GiphySearch () {
    const [obj,setObj]=useState([]);
    const [search,setSearch]=useState('');
  
    // useEffect(()=>{  
    //   const fetchData = () =>{
    //     fetch("http://api.giphy.com/v1/gifs/search?q=hilarious&api_key=dc6zaTOxFJmzC").then(res=>res.json()).then(res=>{
    //       setObj(res.data);
    //     })
    //   }
    //   fetchData();
    // },[])
  
    //console.log(obj);
  
    const handleSearchChange = (e) =>{
      setSearch(e.target.value);
    }
  
    const handleSubmit = (e) => {
      e.preventDefault();
      let url = `http://api.giphy.com/v1/gifs/search?q=${search}&api_key=dc6zaTOxFJmzC`
      fetch(url).then(res=>res.json()).then(res=>{
          setObj(res.data);
      })
    }
  
    const handleClick =()=>{
      return <div></div>
    }
    
    return(
      <div className='container'>
        <h1>Task 1 - Giphy Search</h1>
        <h1 className='text-center'>GIPHY PARTY!</h1>
        <form className='d-flex form-inline mt-3 justify-content-center'>
          <input onChange={handleSearchChange} value={search} type="text" placeholder='Enter a Seach Term' className='form-control ms-3' style = {{width:'300px'}} />
          <button type='submit' onClick={handleSubmit} className='btn btn-primary ms-2 me-2'>Search Giphy</button>
          <button className='btn btn-danger' onClick={handleClick}>Remove Images!</button>
        </form>
  
        <div className='mt-2'>
          {
            obj.map(itm=>(
              <div key={itm.id} className="card mt-2 ms-2 p-3" style={{width: "250px", float:'left', height:'350px'}}>
              <img src={itm.images.downsized.url} className="card-img-top" style={{width:'200px',height:'250px'}} />
              <h6>{itm.title}</h6>
            </div>
            ))
          }
  
        </div>
      
      </div>
    );
}
export default GiphySearch;