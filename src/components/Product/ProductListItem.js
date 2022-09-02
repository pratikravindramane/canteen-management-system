const ProductListItem=(props)=>{
    return <tr id={props.id}>
    {/* <td>1</td> */}
    <td>{props.name}</td>
    <td>{props.cost}</td>
  </tr>
}
export default ProductListItem