import { useEffect, useState } from "react";
import { errorNotification, successNotification } from "../../../utils/helper";


const useFetch =  (url) => {
const [data,setdata]=useState()
const [error,seterror]=useState()
const [loading,setloading]=useState(true);

useEffect(()=>{
    const fetcher = async()=>{
        try{
            const fetchUserDetails =await fetch(url);
            if(fetchUserDetails.ok){
                const FetchedData= await fetchUserDetails.json();
                setdata(FetchedData);
                successNotification("successful!")
            }else if(fetchUserDetails.status===404){
                seterror("invalid fetcher!");
                errorNotification("something went wrong!")
            }else{
                seterror("poor connection");
                errorNotification("something went wrong!")
            }
        }catch(error){
            const errorValue=error.message;
            console.log(errorValue)
            seterror("poor connection")
                errorNotification("something went wrong!")

        }
        setloading(false);
    };
    fetcher();
},[url])
return {data,error,loading}
};

export default useFetch;