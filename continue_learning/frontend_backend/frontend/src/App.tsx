import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    async function fetchDatas() {
      try {
        const res = await axios.get("/api/jokes");
        setDatas(res.data);
      } catch (error) {
        console.error(error);
        throw error;
      }
    }
    fetchDatas();
  }, []);

  return (
    <>
      <div className=" border border-gray-400 mt-5 mx-auto max-w-4xl">
        <h1>Jokes</h1>

        {datas.map((data) => (
          <div className=" border border-gray-400 rounded-md p-3 grid gap-2">
            <p>{data?.title}</p>
            <p>{data?.content}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
