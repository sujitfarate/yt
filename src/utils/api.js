import axios from "axios";
const BASE_URL = "https://youtube138.p.rapidapi.com/";
const options = {
  params: {
    hl: "en",
    gl: "US",
  },
  headers: {
    "X-RapidAPI-Key":"bae3c30d24mshff2cf3facee143bp1fba15jsn7afcbe918ae8",
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

export const fetchDataFromApi=async(url)=>{
const {data}=await axios.get(BASE_URL+url,options)
return data
}