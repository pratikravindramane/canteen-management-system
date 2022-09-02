import { useRef } from 'react'
import classes from './AddProduct.module.css'

const AddProduct=()=>{
  const nameRef=useRef()
  const costRef=useRef()
  const descRef=useRef()
  const imageRef=useRef()

const submitHandler=(e)=>{
  e.preventDefault()
  const name=nameRef.current.value
  const cost=costRef.current.value
  const description=descRef.current.value
  const image=imageRef.current.value

  fetch('https://user-data-693e1-default-rtdb.firebaseio.com/data.json',{
    method:'POST',
    body:JSON.stringify({
      name,
      cost,
      description,
      image
    })
  })
}
    return (
        <>
    <section className={classes['add-product']}>
    <div className={classes['add-product-info']}>
       <h2>Adding product</h2>
       <form onSubmit={submitHandler}>
          <label htmlFor="name">Name</label>
           <input type="text" id='name'ref={nameRef}/>
          <label htmlFor="cost">Cost</label>
           <input type="text" id='cost'ref={costRef}/>
          <label htmlFor="desc">Description</label>
           <textarea  id="desc" rows="3" ref={descRef}></textarea>
           <label htmlFor="inputGroupFile02">Image Link</label>
           <input type="text"  id="inputGroupFile02" ref={imageRef}/>
           <button type='submit'className={classes.btn}>Submit</button>
       </form>
       </div>
     </section>
     </>
     )
}
export default AddProduct