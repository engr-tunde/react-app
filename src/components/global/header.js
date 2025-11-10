import { useState } from "react";
import { CiSettings } from "react-icons/ci";
import { FaAngleDown, FaBars, FaHome, FaSearch, FaSortAlphaDown, FaToggleOff } from "react-icons/fa";
import { FaHand } from "react-icons/fa6";
import { GiArchiveRegister } from "react-icons/gi";
import { HiDotsVertical } from "react-icons/hi";
import { ImBlog } from "react-icons/im";
import { MdContactPhone, MdOutlineClose, MdOutlineReviews, MdOutlineRoundaboutLeft } from "react-icons/md";
import { RiCloseLargeLine } from "react-icons/ri";
import { Link } from "react-router-dom";


const Header=({logo,FirstName,handlebg})=>{

  const [showMobilemenu,setshowMobilemenu]=useState(false);
  const [loginContainer,setloginContainer]=useState(false);
  const [hoverDrop,sethoverDrop]=useState(false)
  const [blogDrop,setblogDrop]=useState(false)

  const openMobilemenu=()=>{
    setshowMobilemenu(true)
  }
   const closeMobilemenu=()=>{
    setshowMobilemenu(false)
  }

  const OpenLoginCont=()=>{
    setloginContainer(true)
  }
  const ClosenLoginCont=()=>{
    setloginContainer(false)
  }
  const closehoverDrop=()=>{
   if(hoverDrop===true){
     sethoverDrop(false)
   }else{
     sethoverDrop(true)

   }
  }

  const openblogDrop=()=>{
     setblogDrop(true)
    setTimeout(()=>{
    setblogDrop(false)

    },2000)
  }
  const blogdroparr=[" reviews ","chart","report"];
  const dotmenu=[
   {
    SN:1,
    content: "register now",
    icon:<GiArchiveRegister />
   },
        {
      SN:2,
      content:"settings",
      icon:<CiSettings />
    },
  {
    SN:3,
    content:  "filter",
    icon:<FaSortAlphaDown />
  }
  ];
 

   let greetuser=``;
     const dayTime=new Date();
     const SplitdayTime = dayTime.toString().split(" ");
     const currentTime=SplitdayTime[4];
     const currentHourArr=currentTime.split(":");
     const currentHour=currentHourArr[0];
   
    if(currentHour < 12){
       greetuser=`Good Morning, ${FirstName}`;
     }else if(currentHour <= 16){
        greetuser=`Good Afternoon, ${FirstName}!`;
     }else{
       greetuser=`Good Evening, ${FirstName}!`;
     };
     const [profileCont,setprofileCont]=useState(false);
     const profile=()=>{
      if(profileCont===false){
          setprofileCont(true);

      }else{
          setprofileCont(false);

      }
     }
   
  return(<div>
    <header className=" bg-black text-appAqua border-b border-appAqua fixed top-0 w-[100%] py-3 capitalize">
      <div className="container p-2 hidden lg:flex items-center justify-between h-10">
         <Link to="/home" className="flex text-5xl font-bold ">
          <img src="https://forxbit.vercel.app/assets/images/logo-green-2.png" alt="" className="h-14"/>
         {logo}

         </Link>
           <div className="flex justify-between gap-3 font-bold capitalize">
            <Link to="/home">home</Link>
           <Link to="/main">about</Link>
           <Link to="/user">user</Link>
           <Link to="/contacts">contact</Link>
           <Link to="/blog" className="flex items-center"><div>blog</div><FaAngleDown onMouseOver={openblogDrop}/></Link>
           <div className={blogDrop===true?"bg-[#222]  w-[150px] py-2 border border-appAqua rounded-lg fixed top-14 left-[55%] flex flex-col items-start gap-2":"hidden"}>
            {blogdroparr.map((element,i)=>{
                return<div className="hover:bg-appAqua hover:text-black px-2 w-[100%]" key={i}>{element}</div>
            })}
               
           </div>
           </div>
         <div className="flex justify-between items-center gap-5 capitalize">
          <div className="flex items-center gap-4" >
            
             <div>
              welcome, <i>{FirstName}</i>!
              </div>
              </div>
            
         <Link to="/home" className="primary-btn" >login</Link>
         
                    
            <div onClick={closehoverDrop}className="hover:border  border-appAqua rounded-lg p-2"><HiDotsVertical  /></div>
          <div className={hoverDrop===true?"bg-[#222]  w-[150px] py-2 border border-appAqua rounded-lg fixed top-14 right-4 flex flex-col items-start gap-2 font-bold ":"hidden"}>
             <div className="flex justify-between items-center gap-2 px-2"onClick={profile}>
              <div className=" bg-green-800 text-white border-2 border-appAqua p-2 uppercase rounded-[50%]">
              {FirstName.charAt(0)}{FirstName.charAt(5)} 
              </div>
              <div>
                profile
             </div>
             </div>
               <div className="w-full hover:bg-appAqua hover:text-black  flex items-center justify-center gap-3"><FaToggleOff  />  <div  onClick={handlebg} >dark mode</div></div>
            {dotmenu.map((element,SN)=>{
              return<div className="hover:bg-appAqua hover:text-black px-2 w-[100%] flex justify-start items-center gap-2" key={SN} >{element.icon}{element.content}</div>
            })}
           
            </div>
         </div>
    </div>
    </header>
    <div className={loginContainer === true?"bg-black/55 h-screen w-full fixed top-0 py-6 z-50":"hidden"} >
    <div className=" bg-[#9a9696] w-14 h-14 rounded-[50%] p-3  text-white text-3xl fixed right-0 lg:right-20">
     <RiCloseLargeLine onClick={ClosenLoginCont}/>
    </div>
          <div className=" bg-black mt-10 mx-auto w-[95%] lg:w-[70%] border border-appAqua rounded-[30px] h-[95%] lg:h-[80%] flex flex-col lg:flex-row ">
            <div className="bg-appAqua w-[100%] lg:w-[50%] h-[30%] lg:h-full  rounded-t-[30px] rounded-b-[50%] lg:rounded-l-[30px] lg:rounded-r-[50%] flex items-center">
               <div className="flex flex-col items-center justify-center p-10 text-center">
                 <h4 className="text-black text-2xl lg:text:3xl capitalize">welcome,to {logo} our dear user!</h4>
                 <p>where the word impossible doesn't exist</p>
               </div>
            </div>
            <div className="bg-black w-[100%] lg:w-[60%] h-[70%] lg:h-full rounded-bl-[30px] rounded-br-[30px] lg:rounded-r-[30px] rounded-l text-appAqua px-2">
                <div className="flex flex-col items-center gap-3 mt-4">
                  <div><img src="https://forxbit.vercel.app/assets/images/logo-green.png" alt="" className="h-20"/></div>
                  <h2 className="capitalize text-appAqua text-center">login into your account</h2>
                   <form className=" w-[80%] flex flex-col justify-center gap-3" >
                    <div>
                      <label className="block capitalize mb-2 ">name</label>
                    <input type="text" placeholder="enter your username" className="w-[100%]"/>
                    </div>
                   <div>
                     <label className="block capitalize mb-2">password</label>
                    <input type="password" placeholder="enter your password" className="w-[100%]"/>
                   </div>
                   </form>
                   <div className="w-[80%] flex justify-end ">forgot password ?</div>
                   <div className=" primary-btn w-[80%] text-center"onClick={ClosenLoginCont}>login</div>
                </div>
            </div>
            
          </div>
       </div>
       <div className="container ">
            <section className= {profileCont===true?"bg-black border-2 border-appAqua text-white flex flex-col lg:flex-rows items-center justify-center gap-3 py-5 mt-20 lg:mt-16 rounded-3xl slide":"hidden"}>
      <img src="https://scontent.flos2-2.fna.fbcdn.net/v/t39.30808-1/514336242_745323597994946_4217475317495265862_n.jpg?stp=dst-jpg_p160x160_tt6&_nc_cat=105&ccb=1-7&_nc_sid=1d2534&_nc_eui2=AeGyJBJsqcWlNlvYXPmyGxkzXq9pGqEq2-Jer2kaoSrb4vNsvlKm1K76ZKYQyzh4AujVyFWZXEKtT5s2JWTpxRK-&_nc_ohc=WeD82bmqpKsQ7kNvwF1zTH3&_nc_oc=Adm-222swToAFWwRlfPaoPVghPxbKcstGVUTqqVgrnpCw3SKO0IjA5PWVZ-OA-4W-3w&_nc_zt=24&_nc_ht=scontent.flos2-2.fna&_nc_gid=Ih6UWtbWhXCHcQd_41YKrw&oh=00_AfflTF4y-Cx2FEuO0MyBydY7tJnKvP4n5rMv-KN_ZcsSYQ&oe=68FD8906" alt=""  className="rounded-[50%] h-[100px] w-[100px]"/>  
        <div className="flex flex-col items-center text-appAqua">
         <div className="text-xl font-bold flex items-center justify-between gap-4">{greetuser}<FaHand className="text-appAqua" /></div>
        <div>Welcome to react js! </div>
        <p> where all your codes are written with  ease!</p>
        </div>
            </section>
         </div>
      {/* mobile header */}
      <div className=" lg:hidden  bg-black p-2 flex items-center justify-between fixed top-0 w-[100%] border-b border-appAqua">
           <div className="text-2xl font-bold text-appAqua capitalize flex items-center">
            <img src="https://forxbit.vercel.app/assets/images/logo-green-2.png" alt="" className="h-10"/>
         {logo}
         </div>
          <div className="text-4xl text-appAqua"onClick={openMobilemenu}><FaBars /></div>
      </div>
       
       <div className={showMobilemenu === true?"bg-black/55 h-screen w-full fixed top-14 z-20 slide":"hidden"}>
          <div className="bg-black h-[70%] w-[90%] m-auto rounded-2xl border border-appAqua py-12 px-10 text-white flex flex-col">
            <div className="mb-6 flex justify-between">
                <div className=" bg-green-800 text-white border-2 border-appAqua p-2 uppercase rounded-[50%]"onClick={profile}>
              {FirstName.charAt(0)}{FirstName.charAt(5)} 
            </div>
                 
               <MdOutlineClose size={30} onClick={closeMobilemenu}/>
            </div>
            <div className="flex items-center border  rounded-full gap-2"><input type="text"  placeholder="search" className="text-white px-4 py-2 bg-transparent border rounded-l-full" />
            <FaSearch />
            </div>
           <div className="flex flex-col gap-3 items-center mt-3 font-bold capitalize text-xl">
           <Link to="/home" className="flex items-center justify-center gap-4 text-appAqua hover:bg-appAqua hover:text-black px-14" onClick={closeMobilemenu}><FaHome />home</Link>
           <Link to="/main"className="flex items-center justify-center gap-4 text-appAqua hover:bg-appAqua hover:text-black px-14"onClick={closeMobilemenu}><MdOutlineRoundaboutLeft />about</Link>
           <Link className="flex items-center justify-center gap-4 text-appAqua hover:bg-appAqua hover:text-black px-14"><MdOutlineReviews />review</Link>
           <Link to="/user" className="flex items-center justify-center gap-4 text-appAqua hover:bg-appAqua hover:text-black px-14"onClick={closeMobilemenu}><MdContactPhone />user</Link>
             <Link to="/blog" className="flex items-center justify-center gap-4 text-appAqua hover:bg-appAqua hover:text-black px-14"onClick={closeMobilemenu}><ImBlog />blog</Link>
               <div onClick={handlebg} className="hover:border border-appAqua rounded-lg p-2 text-appAqua flex items-center justify-center gap-2"><FaToggleOff /><span>Dark mode</span></div>
           <div className="flex justify-between gap-5 font-normal ">
            <button className="primary-btn "onClick={OpenLoginCont}>login</button>
            <button className="primary-btn">signup</button>
           </div>
           </div>
           
          </div>
       </div>

       
    </div>
    
    )
};

export default Header;