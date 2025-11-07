import { useEffect, useState } from "react";
import { infoNotification } from "../utils/helper";


const BlogPage=()=>{
    const [blogNews, setblogNews]=useState();
   

   useEffect(()=>{
   
     const HandleBlogPage= async()=>{
        const FetchData=await fetch("https://jsonplaceholder.typicode.com/posts");
        let FetchedData=await FetchData.json();
        setblogNews(FetchedData)
        console.log(FetchedData.ok)
        console.log(FetchedData)
         if(FetchedData){
     infoNotification("You're welcome!")
    }
    }
    HandleBlogPage()
   },[])
   
    
   
      const [seemore,setseemore]=useState(true);
      const handleseeMore=()=>{
        if(seemore===true){
          setseemore(false)
        }else{
          setseemore(true)
        }
        
      }
      
      
return(<div className="container ">
  <div className="mt-[100px] flex justify-between gap-3 flex-wrap">
   {blogNews 
   ?blogNews.slice(0,10).map((item,id)=>(
     <div key={id} className="w-[350px] mt-[100px] border border-appAqua rounded-lg p-4 text-appAqua">
        <div className=" flex items-start justify-between">
            <div className="rounded-[50%] border border-appAqua p-3">{item.id}</div>
        <h6 >{item.title}</h6>
        </div>
        <div>{item.body}</div>
       </div>
     )):null}
     </div>
     <div className="flex justify-end">
      <div className="primary-btn w-[30%] text-center" onClick={handleseeMore}>{seemore=== true?"see more":"see less"}</div>
      </div>
</div>
)}
export default BlogPage;