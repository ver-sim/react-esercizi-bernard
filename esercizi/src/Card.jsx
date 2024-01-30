import { useEffect, useState } from "react";
import "./Card.css"

export const Card = () => {
  const [dataFetch, setDataFetch] = useState(null);
  const [error, setError] = useState(false);

  const getData = async () => {
    try {
        const resp = await fetch('https://random-data-api.com/api/users/random_user?size=10');
        if(resp.ok){
            const json = await resp.json();
            setDataFetch(json);
        }else {
            setError(true);
        }      
    } catch (error) {
        setError(error);
    }
 }
  useEffect(() => {
    
    getData();
  }, [])

  const handleFetch = () => {
    getData()
  }

  return (
    <div>
        <button onClick={handleFetch}>Fetch Random</button>
        {!dataFetch && !error && <h3>Loading...</h3> }
        {error && <p>Error: {error}</p>}
        <ul>
            {dataFetch && dataFetch.map((val, index) => (
                <li key={index}>
                    <div className="back">
                        <h3>More information here</h3>
                    </div>
                    <div className="front">
                        <img src={val.avatar} alt="" />
                        <h3>{`${val.first_name} ${val.last_name}`}</h3>
                        <p>{val.employment.title}</p>
                    </div>
                    
                </li> 
            ))}
        </ul>


    </div>
  )
}
