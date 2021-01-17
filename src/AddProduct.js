import Header from './Header'
function AddProduct()
{
   async function onFileUpload (e) { 
     
        // Create an object of formData 
        let itemN=e.target.files[0]
        const formData = new FormData(); 
       
        // Update the formData object 
        formData.append( 
          "file", 
          itemN 
        ); 
       
        // Details of the uploaded file 
        // console.log(this.state.selectedFile); 
       
        // Request made to the backend api 
        // Send formData object 
        let result = await fetch("http://localhost:8000/api/temp1", {
            method: 'POST',
            body: formData
        }); 
      }; 
    return (
        <div>
            <Header />
            <h1>Add Product</h1>
            <div> 
                <input type="file" onChange={onFileUpload} /> 
                <button onClick={onFileUpload}> 
                  Upload! 
                </button> 
            </div> 
        </div>
    )
}

export default AddProduct