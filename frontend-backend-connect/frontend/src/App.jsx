import { useEffect } from "react";
import { useState } from "react"

function App() {

  const [jokes,setJokes] = useState([]) ;

  useEffect(() => {

     fetch("/api/jokes").then((data) => data.json() ).then(setJokes).catch((err) => console.log(err)
      ) 


  }, [jokes] ) 

  return (
    <>
      <h1>Jokes : {jokes.length} </h1>
      <div className=" border border-gray-500 p-4 grid grid-cols-2 gap-3" >
        {

          jokes.map((joke) => <div key={joke.id} className="" >
              <h1>{joke.title}</h1>
              <p>{joke.content}</p>
          </div> )

        }
      </div>

    </>
  )
}

export default App