import React, { useState } from 'react'

const Home = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
const sumbithandler=()=>{

}
  return (
    <div className="login">
      <section className="todosContainer">
      
        <form  onSubmit={sumbithandler}>
            <input
            required
              
            value={title}
            onChange={(e) => settitle(e.target.value)}
            type="text"
            placeholder="Title"
          />
          <input
            required
              
            value={desc}
            onChange={(e) => setdesc(e.target.value)}
            type="text"
            placeholder="Description"
          />
       
                <button type='sumbit'  >Add Task</button>
          
           

        </form>
      </section>
    </div>
  )
}

export default Home
