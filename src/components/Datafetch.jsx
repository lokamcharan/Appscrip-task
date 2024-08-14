"use client"
import { useEffect, useState } from "react";
import Axios from "axios";
import './Datefectch.css';  

function DataFetch() {
  const [state, setState] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await Axios.get("https://fakestoreapi.com/products");
      setState(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="grid-container">
      {state &&
        state.map((val, ind) => (
          <div key={ind} className="grid-item">
            <img src={val.image} width="3000px" height="150px" alt="img" />
            <h2>{val.category}</h2>
            
          </div>
          
        ))}
    </div>
  );
}

export default DataFetch;
