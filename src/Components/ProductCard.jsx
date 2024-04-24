import { useState } from 'react';
import supabase from './Products/supabaseClient.jsx'
export default function ProductCard({product}) {
  
    const [ editing, setEditing ] = useState(false);
    const [ name, setName ] = useState(product.name);
    const [ description, setDescription ] = useState(product.description);
    const [ deleteConfirmation, setDeleteConfirmation ] = useState(false);
    
    async function updateProduct() {
        try {
            const { data, error } = await supabase
                .from("product")
                .update({
                    name: name,
                    description: description
                })
                .eq("id", product.id)
            
            if (error) throw error;
            window.location.reload();
        } catch (error) {
            alert(error.message);
        }}
        
        
        async function deleteProduct() {
        try {
            const { data, error } = await supabase
                .from("product")
                .delete()
                .eq("id", product.id)
            
            if (error) throw error;
            window.location.reload();
        } catch (error) {
            alert(error.message);
        }
    }
    
    return(
    <div>
    {editing===false?
    <>
    <div>
    <h2>{product.name}</h2>
    <p>{product.description}</p>
    <p>{product.price}</p>
    <button onClick={()=>setEditing(true)}>Edit</button>
    <button onClick={()=>setDeleteConfirmation(true)}>Delete</button>
    
    {deleteConfirmation && ( 
    <div>
    <p>Sure?</p>
    <div>
    <button onClick={()=>deleteProduct()}>Yes</button>
    <button onClick={()=>setDeleteConfirmation(false)}>No</button>
    
    </div>
    
    </div>
    	)}
    </div>
    </>
    : 
    <>
    <div>
    <form action="">
    <label>ProductName</label>
    <input type="text"
    defaultValue={product.name}
    id="name"
    onChange={(e) => setName(e.target.value)}
    />
    </form>
    <button onClick={()=>setEditing(false)}>cancel</button>
    <button onClick={()=>updateProduct()}>Update</button>
    </div>
    </>
    }
   </div> 
    )
}