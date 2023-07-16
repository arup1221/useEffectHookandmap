import React from 'react'
import { useState,useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

const UserDetails = () => {
  const {userId} = useParams();
  
  const [data,setData] = useState({}); 
  const [SearchParams,setSearchParams] = useSearchParams();
  console.log(SearchParams.get('name'));
  console.log(SearchParams.getAll('name'));
  
  const Reset =() =>{
    setSearchParams({name:'harry'});
  }
  useEffect(() => {
    async function getData() {
    const get = await fetch(`https://hub.dummyapis.com/employee?noofRecords=1&idStarts=${userId}`);
    const res = await get.json();
    setData(res[0]);
    console.log(res);

    }
    getData();
 
    },[])
  return (
    <div>
      {/* <h1>UserDetails</h1> */}
      <h4>{data.id}</h4>
      <img src={data.imageUrl}/>
      <h4>{data.firstName}</h4>
      <h4>{data.lastName}</h4>
      <h4>{data.email}</h4>
      <h4>{data.contactNumber}</h4>
      <h4>{data.age}</h4>
      <h4>{data.dob}</h4>
      <h4>{data.salary}</h4>
      <h4>{data.address}</h4>
      <button onClick={Reset}>reset</button>
    </div>
  )
}

export default UserDetails
