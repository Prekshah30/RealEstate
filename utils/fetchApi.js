import axios from 'axios';

export const baseUrl='https://bayut.p.rapidapi.com';

export const fetchApi = async (url) =>{
    const{data}=await axios.get((url),{
        headers: {
                 'X-RapidAPI-Key': '3fbce81df8msh2dc2537e8b38d3cp1a719cjsn0fc9e9bbf07e',
                 'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
               }

    });
    return data;
}