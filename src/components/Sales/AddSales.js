import { useCallback, useEffect, useRef, useState } from 'react'
import classes from './AddSales.module.css'
const AddSales=()=>{
  const nameRef=useRef()
  const [listdata,setData]=useState([])
  const fetchData=useCallback(async()=>{
    try{
      const response=await fetch('https://user-data-693e1-default-rtdb.firebaseio.com/data.json')
      if(!response.ok){
        throw new Error('something went worng')
      }
      const data=await response.json()
      const loadedMovies=[]
      for (const key in data) {
        loadedMovies.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          image: data[key].image,
          cost:data[key].cost
        });
      }
      console.log(loadedMovies)

      setData(loadedMovies)
    }
    catch(error){
      alert(error.message)
    }
  },[])
  useEffect(()=>{
    fetchData()
  },[fetchData])
  const submitHandler=(e)=>{
    e.preventDefault()
    const enteredName= nameRef.current.value
    console.log(enteredName)

  }
    return<section className={classes.sales}>
      <h3>Billing</h3>
      <hr/>
      
      <div className={classes['billing-input']}>
        <h4>Customer Details</h4>
      <hr/>
          <form className="row g-3 mx-5" onSubmit={submitHandler}>
            <div className="col-md-6">
              <label htmlFor="inputname" className="form-label">Name</label>
              <input type="text" className="form-control" id="inputname" ref={nameRef}/>
            </div>
            {/* <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label">number</label>
              <input type="text" className="form-control" id="inputEmail4"/>
            </div> */}
          <h4 >Choose order</h4>
          <hr/>
          <div >
          <select className="form-select" aria-label="Default select example" >
            {listdata.map((data)=>
              <option value="defaultValue">{data.name}</option>
            )}
          </select>
          <button>add</button>
          </div>
          </form>
      </div>
      <table className={classes.table} >

            <tbody className="content">
            <tr>
                <th>sr.</th>
                <th >name</th>
                <th >product</th>
                <th >cost</th>
                <th >action</th>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>sarfaraz</td>
                <td>biryani</td>
                <td>200rs</td>
                <td><button>add</button><button>delete</button></td>
                </tr>
              <tr>
                <td colSpan='4'>total amount</td>
                <td>000/-</td>
              </tr>
            </tbody>
        </table>
  </section>    
    
}
export default AddSales
