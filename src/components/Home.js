import React,{useState,useEffect} from 'react'
import { Link,Outlet } from 'react-router-dom';

const Home = () => {
    const [state, setState] = useState(2);
  //const [state2, setState2] = useState(0);
  const [data,setData] = useState([]); // need a blank array

    //useEffect(() => {
   // window.alert("useEffect called");
   // },[state,state2]); // previously without [] it it is independent but now using [] it is dependent (blank dependent); using [state] we can run in conditional


   useEffect(() => {
   async function getData() {
    const get = await fetch(`https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`);

    const res = await get.json();
    setData(res);
    console.log(res);

   }
   getData();
   document.title = `(${state}) employees online`; // to change title where show how many online in a chat app

   },[state])

  return (
    <div>
       <button onClick={() => setState(state + 1)}>Click me {state}</button>
      {/* <button onClick={() => setState2(state2 + 1)}>Click me 2 {state2}</button> */}


      {
        data && data.map((element,index)=>{
          return(
            <Link to={`/app/${element.id}`}>
            <div className='data' key={index}>
              <h4>{element.firstName}</h4>
              <h4>{element.lastName}</h4>
              <h4>{element.email}</h4>
            </div>
            </Link>
          )
        })
      }
      <Outlet/>
    </div>
  
  )
}

export default Home
