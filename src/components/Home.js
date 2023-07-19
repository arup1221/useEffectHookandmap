import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { Link,Outlet } from 'react-router-dom';

const Home = () => {
    const [state, setState] = useState(1);
  
  const [data,setData] = useState([]); // need a blank array
  const [isError,setIsError] = useState(""); // need a blank array

    //useEffect(() => {
   // window.alert("useEffect called");
   // },[state,state2]); // previously without [] it it is independent but now using [] it is dependent (blank dependent); using [state] we can run in conditional


  //  useEffect(() => {
  //  async function getData() {
  //   try{
  //   const get = await fetch(`https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`);

  //   const res = await get.json();
  //   setData(res);

  //   console.log(res);    
  //   }catch(err){
  //     setIsError(err.message)
  //     console.log(err.message);
  //   }

  //  }
  //  getData();
  //  document.title = `(${state}) employees online`; // to change title where show how many online in a chat app

  //  },[state])


  useEffect(() => {
    axios
      .get(`https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`)
      .then((response) => setData(response.data))
      .catch((error) => setIsError(error.message));
  }, [state]);
  
  return (
    <>
    
    
    <div>
     {isError !== "" && <h1>{isError.message}</h1>}
       <button onClick={() => setState(state + 1)}>Click me {state}</button>
      {isError !=="" && <h1>{isError}</h1>}

      {
        data && data.map((element,index)=>{
          return(
            <Link to={`/app/${element.id}`} key={index}>
            <div className='data' >
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
    </>
  )
}

export default Home;
