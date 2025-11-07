
import { useState } from "react";

const Secondsection=({FirstName})=>{
    
    let [Token,setToken]=useState(0)
  const Mine=()=>{
           setToken(Token+=2)
    }

    const newsArr=[
        {
            id:1,
            title:"Sports",
            image:"/download.jpeg",
            news:"portugal defeat spain in the 2014 WC Quarter final, portugal's hope rest on cristiano ronaldo's shoulder! as he stand for the late match scenerio freekick, and later at the 83rd minutes he put the ball at the back of the net",
            date:"23-4-2025",
              btn:"read more"
        },

        {
            id:2,
            title:"Economy",
             image:"/download (1).jpeg",
             news:"Nigeria’s economy is entering a new phase as the Central Bank cuts interest rates for the first time since 2020, signalling confidence in slowing inflation and relative exchange rate stability. SAMI TUNJI explores how the modest rate cut is symbolic, and lasting growth will depend on consistent reforms, stronger fiscal alignment, and sustained non-oil sector expansion",
             date:"03-10-2025",
             btn:"read more"
        },

        {
            id:3,
            title:"Education",
            image:"/download (2).jpeg",
            news:"Education in Nigeria follows a 6-3-3-4 system, which includes six years of primary school, three years of junior secondary school, three years of senior secondary school, and four years of university. Primary and junior secondary education is compulsory and free for students aged 6 to 15. Challenges in the system include funding gaps, access issues, and quality concerns, with many children out of school despite official policy.",
            date:"13-10-2025",
              btn:"read more"
        },
    ]
       const [showFull,setshowFull]=useState()
                const handleShowfull=(childId)=>{
                       if(showFull===childId){
                          setshowFull()
                       }else{
                         setshowFull(childId)
                       }
                    
                }

    
return(
     <section className="container ">
        <h3 className="text-white capitalize text-3xl text-center mt-[100px]">about us</h3>
      <section className="text-[#fff] flex flex-col lg:flex-row justify-between gap-6 p-2 lg:p-6  rounded-lg">
        
         <div className=" w-[100%] lg:w-[50%] h-[500px] bg-white border-[30px] border-appAqua rounded-[50px]">
           <img src="https://global-t.netlify.app/static/media/rent-2.b225c4d075a62382288c.png" alt="" className="h-[100%]"/>
       </div>
       <div className="flex flex-col justify-center gap-4  border-2 border-appAqua text-appAqua p-6 rounded-xl w-[100%] lg:w-[50%]">
        <h1>yoo! dev. {FirstName}! what have you done today?</h1>
        <p>Global Triumph Market Plus Multiconcept (G.T.M.P.M) Reg. Num: RC: 1665631 is a highly reputable Real Estate Company in Nigeria. The company office is located at 26, Omolara Olusi Street, Hopville Estate, Opposite SBI Hotel, Sangotedo Road, Ajah, Lagos.</p>

        <p>Global Triumph Market Plus Multiconcept Company (G.T.M.P.M) was incorporated in Nigeria in the year 2014 and also was awarded certificate from SCRUM Academy for Realtors.</p>
        
        <p>From the time of its registration, the company has attracted highly distinguished customers both within and outside Nigeria thus this could be said to be a testimonial of its genuineness and consistency in service delivery.</p>
      </div>
      </section>
         <h1 className="text-appAqua capitalize text-3xl py-4">claim your daily token:</h1>
      <div className=" text-white h-[200px]  flex items-center justify-center gap-4 border border-appAqua ">
          <div>
             <div style={{color:"#ddd"}}>Daily claimed Token</div>
          
             <div className="Convert-Tokenbtn">
                <span>Token bal:</span>
             <span>{Token}</span>
           
             </div>
             </div>
            
          <div onClick={Mine} className="primary-btn">Claim Token</div>
          </div>
          <div className=" flex flex-col lg:flex-row  justify-between rounded-lg border border-appAqua text-appAqua mt-[10px] p-4 capitalize">
                <h1>categories</h1>
                <div className="flex justify-between text-2xl gap-6">
                    <div>sport</div>
                    <div>education</div>
                    <div>economy</div>
                </div>
            </div>
           <div className=" p-[30px] w-[100%] flex flex-col lg:flex-row justify-center gap-3 lg:justify-between text-white rounded-[8px] my-[10px] shadow-appAqua shadow-md">
            
            {newsArr.map((child)=>{
                 
                return<div className="w-[100%] lg:w-[30%] rounded-[30px] border-appAqua border-2 p-[20px] flex flex-col items-center gap-[6px] " key={child.id}>
                   <h2>{child.title}</h2>
                   <div ><img src={child.image} alt=""/></div>
                   <p>{ showFull === child.id ? child.news: child.news.substring(0,100)+`.....`}</p>
                  
                <div style={{width:"100%",display:"flex", justifyContent:"space-between",color:"#bbb"}}>
                    <div>Date:{child.date}</div>

                    <div className="primary-btn" onClick={()=>handleShowfull(child.id)}>{showFull === true ?`read less `  :child.btn }</div>
                </div>

                </div>
            })}
           </div>
        </section>

     
)
}
export default Secondsection;