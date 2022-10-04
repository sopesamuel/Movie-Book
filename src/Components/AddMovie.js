import { useRef } from 'react'
import './Create.css'


export default function Create({handleAdd}) {  
    

    const title = useRef();
    const description = useRef();
    const rating = useRef();
    const img = useRef();
   
   
console.log(img)
    const resetForm = ()=>{
       img.current.value= ''
        title.current.value = ''
        description.current.value = ''
        rating.current.value = ''
       
        };
    
    const handleSubmit = (e) => {
        e.preventDefault();
      const even = {
                img: img.current.value,
                title: title.current.value,
                description: description.current.value,
                rating: rating.current.value,
                id: Math.floor(Math.random() * 100)
            }
           handleAdd(even)
           resetForm()
        
    }
  
    
    return (
      <div className="create"> 
        <h2 className="page-title">Keep Track Of Your Movies</h2>
        <form onSubmit={handleSubmit}>

        <label>
            <input
             type='file'
             name='images'
             ref={img}
             required
             />
        </label>
  
          <label>
            <span>Movie Title:</span>
            <input 
              ref={title}
              required
            />
          </label>
  
          
  
          <label>
            <span>Movie Description:</span>
            <input 
              ref={description}
              required
            />
          </label>
  
          <label>
            <span>Movie Ratings:</span>
            <input 
              type="number"
              ref={rating}
              required 
            />
          </label>
  
          <button>submit</button>
        </form>
      </div>
    )
  }