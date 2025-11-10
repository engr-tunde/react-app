import { useState } from "react";
import { errorNotification, infoNotification, successNotification } from "../utils/helper";


const ContactsPage=()=>{
    const [username,setusername]=useState();
    const [content,setcontent]=useState();
    const [warning,setwarning]=useState({});
    const [issubmitting,setissubmitting]=useState(false);  
    const url="https://jsonplaceholder.typicode.com/posts";
    const submitFeedBackForm= async ()=>{
    setissubmitting(true)
         if(username && content){
           const payload={username,content};
        const response=await fetch(url,{method:"post", body:JSON.stringify(payload)});
        if(response.status.toString().includes("20")){
                 successNotification("success!");
        }else{
                errorNotification("something went wrong!")
        }
        const responseData=await response.json();
        console.log("responseData",responseData)
         }else{
          infoNotification("fields are required")
         }

    setissubmitting(false)
            if(!username){
              setwarning({username:"username field is reqiured!"});
            }else if(!content){
              setwarning({content:"content field is reqiured!"})

            }else{
              setwarning();
            }
            if(!Object.keys(warning).length){
                console.log("submited data:");
               console.log("username:",username);
                 console.log("content",content);
             }
             }
     return(<div className="container py-[150px]">
         <div className= "w-[80%] lg:w-[30%] m-auto rounded-lg p-3 text-appAqua flex flex-col justify-center items-center gap-2 border border-appAqua">
            <h3>Give us feed back</h3>
              <div  className="w-full">
                <label>Username</label>
                <input onChange={(event)=>setusername(event.target.value)} type="text" placeholder="Username" className="w-[100%]" required/>
                      {warning?.username && <div className="text-red-600">{warning?.username}</div>}
              </div>

                <div className="w-full">
                <label>report objectives</label>
              <textarea onChange={(event)=>setcontent(event.target.value)} type="text" placeholder="write..."className="w-[100%]" rows={5} required/>
                      {warning?.content && <div className="text-red-600">{warning?.content}</div>}
              </div>

              <button type="submit" onClick={issubmitting? null :submitFeedBackForm} className="primary-btn w-[100%]">{issubmitting? `sending...`:"send message"}</button>
         </div>
     </div>
     )}
export default ContactsPage;