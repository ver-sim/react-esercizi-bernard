import { useEffect } from "react";
import { useState } from "react";
import './Card.css'
export const Card = () => {
  const [user, setUserData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchApi = async () => {
        try {
            const resp = await fetch("https://random-data-api.com/api/users/random_user?size=4");
    
            if(resp.ok){
                setError(false);
                const json = await resp.json();
                setUserData(json);
            } else {
                setError(true);
            }     
        } catch (error) {
            setError(error)
        }
    }
    fetchApi();
  }, []);

  return (
    <div>
        {!user && !error && <h2>Loading...</h2>}
        {error && <p>Error {error}</p>}
        <ul >
            {user && user.map((val, index) => (
                <li key={index} style={{border: "1px solid black"}}>
                    <h3>{`${val.first_name} ${val.last_name}`}</h3>
                    <p>{val.email}</p>
                    <p>City: {val.address.city}</p>
                    <p>State: {val.address.state}</p>
                    <img src={val.avatar} alt="" width={100} />
                </li>
            ))}
        </ul>
    </div>
  );
}