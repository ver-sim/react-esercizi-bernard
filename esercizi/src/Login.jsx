import { useState } from "react";

export const Login = () => {
   const [inputVal, setInputVal] = useState({
        username: "",
        password: "",
    });
    const [dataForm, setDataForm] = useState([]);
    const [message, setMessage] = useState(false);

    const handleChange = (e) => {
        const {value, name} = e.target;
        setInputVal({
            ...inputVal,
            [name]: value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputVal.password && inputVal.username){
            setMessage(false)
            setDataForm((preData) => [...preData, inputVal]);
        } else {
            setMessage(true);
        }
        setInputVal({
            username: "",
            password: "",
        })
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>username:</label>
            <input type="text" name="username" value={inputVal.username} onChange={handleChange} />
            <label>password:</label>
            <input type="password" name="password" value={inputVal.password} onChange={handleChange} />
            <button type="submit">submit</button>
        </form>
       {!message ? dataForm.map((val, index) => (
            <p key={index}>{val.username}</p>
       )): <p>compile both field</p>}
    </div>
  );
}
