import axios from "axios";

const API = "http://localhost:8000/api/orders";

export const buyStock = async (stock, qty=1)=>{
  return axios.post(
    `${API}/buy`,
    {
      name: stock.name,
      qty,
      price: stock.price
    },
    {
      headers:{
        // Authorization:`Bearer ${localStorage.getItem("token")}`
        Authorization:`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhYXl1c2hAZ21haWwuY29tIiwiaWF0IjoxNzc0MTU2ODQ5LCJleHAiOjE3NzQ3NjE2NDl9.77xUeEkZEPPLVsDmLZnpmFzxnhcxheMsUPtZ53vhQzw`
        
      }
    }
  )
}



export const sellStock = async (stock, qty=1)=>{
  return axios.post(
    `${API}/sell`,
    {
      name: stock.name,
      qty,
      price: stock.price
    },
    {
      headers:{
        Authorization:`Bearer ${localStorage.getItem("token")}`
      }
    }
  )
}