import React, { useState } from "react";
import './styles.scss'
import {axiosClient} from '../../utils/axiosClient';


function Prime_numbers() {
  const [number, setNumber] = useState("");
  const [error, setError] = useState("");
  const [responseData,setResponseData]=useState("")

  const handleInputChange = (e) => {
    const { value } = e.target;
    setNumber(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (number === "") {
      setError("Please enter a number.");
    } else if (isNaN(number)) {
      setError("Invalid input. Please enter a valid number.");
    } else {
      setError("");
      
      setResponseData("Request sent waiting for reponse")
      //fetching data
      const data=await axiosClient.get('prime/getprimes',{params: {number}});
      console.log(data);
      setResponseData(data?.result);
    }
  };

  return (
    <div id="prime_numbers_container">
      <div className="form-container">
      <h2>Prime Numbers Finder</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="number">Enter the number till you want Prime numbers:</label>
          <input
            type="text"
            id="number"
            name="number"
            value={number}
            onChange={handleInputChange}
          />
          {error && <p className="error">{error}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    <h2>{responseData}</h2>
    </div>
  );
};

export default Prime_numbers