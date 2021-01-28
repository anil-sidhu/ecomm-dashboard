import Header from './Header'
import React from 'react'
import {Table} from 'react-bootstrap' 
function ProductList()
{
    const [list,setList]=React.useState([]);
    React.useEffect(async ()=>{
       let result= await fetch('http://localhost:8000/api/list');
       result=await result.json();
       setList(result)
       console.warn("result",result)
    })
    return (
        <div>
            <Header />
            <h1>Product List</h1>
            <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
   {
       list.map((item)=>
       <tr>
       <td>1</td>
       <td>Mark</td>
       <td>Otto</td>
       <td>@mdo</td>
     </tr>)
   }
    
  </tbody>
</Table>
        </div>
    )
}

export default ProductList;