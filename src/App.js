import "./App.css";
import { useState } from 'react';

function App(){
  const [items, setItems] = useState ([]);

  return (
      <>
        
         {items.map((item, index) => (
          <div>
            <a
              onClick={() =>
                setItems(items.filter((_,ind) => ind !== index))
              }
            >
              {item}
            </a>
         </div>
           ))}
      

      <form 
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData (e.currentTarget);
        setItems ((items) => [...items,formData.get("todo")])
        e.currentTarget.reset();
      }}
      >
        <input name="todo" required />
        <button type="submit">Create TODO</button>
      </form>
      
      </>
    
    
    
    
    
    
    

  );
}

export default App;


