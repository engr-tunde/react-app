
import { useState } from "react";
import { FaHand } from "react-icons/fa6";
import { infoNotification, successNotification } from "../utils/helper";


const Homepage=()=>{
        const [name,setname]=useState();
        const [email,setemail]=useState();
       const [warning,setwarning]=useState({});
        const registerForm=()=>{
          if(name&&email.toString().includes("@")){
                successNotification("successfully registered!");
          }else{
                      infoNotification(`include "@" on email field`)
          }
            if(!name){
              setwarning({name:"name field is reqiured!"})
            }else if(!email){
              setwarning({email:"email field is reqiured!"})
               
            }else{
              setwarning();
            }
            if(!Object.keys(warning).length){
                console.log("submited data:")
                console.log("submited data:",name)
                console.log("submited data:",email)
             }
             }
             
     const logo ="AR Arena";
     let greetuser=``;
         const dayTime=new Date();
         const SplitdayTime = dayTime.toString().split(" ");
         const currentTime=SplitdayTime[4];
         const currentHourArr=currentTime.split(":");
         const currentHour=currentHourArr[0];
       
        if(currentHour < 12){
           greetuser=`Good Morning, ${name}`;
         }else if(currentHour <= 16){
            greetuser=`Good Afternoon, ${name}!`;
         }else{
           greetuser=`Good Evening, ${name}!`;
         };
        
  return(<div className=" container w-[100%] mt-16">
       <section className= " border-2 border-appAqua text-white flex flex-col lg:flex-rows items-center justify-center gap-3 mt-12 lg:mt-16 rounded-3xl px-0">
           <div className="flex flex-col lg:flex-row justify-center lg:justify-between w-[100%] lg:pr-8 gap-8">
             <div className="bg-appAqua w-[100%] lg:w-[50%] h-[30%] lg:h-full  rounded-t-3xl rounded-b-[50%] lg:rounded-l-3xl lg:rounded-r-[50%] flex  items-center">
           <div className="flex flex-col items-center justify-center p-10 text-center">
             <h4 className="text-black text-2xl lg:text-3xl capitalize">welcome dev.{name} !,to {logo} our dear user!</h4>
             <p className="text-black">where the word impossible doesn't exist</p>
           </div>
        </div>
           <div className="flex flex-col lg:flex-row  items-center justify-between gap-2">
             <img src="/514336242_745323597994946_4217475317495265862_n.jpg" alt=""  className="rounded-[50%] h-[100px] w-[100px]"/>  
              <div>
                <div className="flex flex-col items-center text-appAqua">
               <div className="text-xl font-bold flex items-center justify-between gap-4 capitalize">{greetuser}<FaHand className="text-appAqua" /></div>
               <div className="capitalize">your email is: {email}</div>
              <div>Welcome to react js! </div>
              <p> where all your codes are written with  ease!</p>
              </div>
              </div>
           </div>
           </div>

              <div className=" h-screen w-full py-6">
                        <div className="mt-10 mx-auto w-[95%] lg:w-[70%] rounded-[30px] h-[95%] lg:h-[80%] flex flex-col lg:flex-row ">
                      
                          <div className="w-[100%] lg:w-[60%] h-[70%] lg:h-full rounded-bl-[30px] rounded-br-[30px] lg:rounded-r-[30px] rounded-l text-appAqua px-2 m-auto">
                              <div className="flex flex-col items-center gap-3 mt-4">
                                <div><img src="https://forxbit.vercel.app/assets/images/logo-green.png" alt="" className="h-20"/></div>
                                <h2 className="capitalize text-appAqua text-center">register your account</h2>
                                 <form className=" w-[80%] flex flex-col justify-center gap-3" >
                                  <div>
                                    <label className="block capitalize mb-2 ">Full Name</label>
                                  <input onChange={(event)=>setname(event.target.value)} type="text" placeholder="enter your username" className="w-[100%]" required/>
                                {warning?.name && <div className="text-red-600">{warning?.name}</div>}
                                  </div>
                                 <div>
                                   <label className="block capitalize mb-2">Email Address</label>
                                  <input  onChange={(event)=>setemail(event.target.value)} type="email" placeholder="enter your email address" className="w-[100%]" required/>
                                   {warning?.email && <div className="text-red-600">{warning?.email}</div>}
                                 </div>
                                 </form>
                                 <div className=" primary-btn w-[80%] text-center" onClick={registerForm}>register</div>
                              </div>
                          </div>
                          
                        </div>
                     </div>
                  </section>
  </div>)};
export default Homepage;