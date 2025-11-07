import "./styles/home/index.css"
import Header from "../src/components/global/header";
import Footer from "../src/components/global/footer";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import Main from "./pages/about";
import Homepage from "./pages/home";
import BlogPage from "./pages/blog";
import UserPage from "./pages/user";
import ContactsPage from "./pages/contacts";
import { useState } from "react";
import { ToastContainer } from "react-toastify";


function App() {
    const [background,setbackground]=useState(false)
     const handlebg=()=>{
        if(background===false){
          setbackground(true)
        }else{
          setbackground(false)
        }
     }
   const logo ="AR Arena";
     let FirstName=`blackpanter`
    return (
       <div className={background===true?"bg-black py-6 h-full":"bg-blue-800 py-6 h-full"}> 
         <ToastContainer
        position="top-right"
        autoClose={5000}
       hideProgressBar={false}
        newestOnTop={true}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss={true}
        draggable={true}
        pauseOnHover={true}
      />
       <BrowserRouter>
         <Header logo={logo} FirstName={FirstName} handlebg={handlebg}/>
          <Routes>
            <Route path="/home" Component={Homepage}/>
            <Route path="/main" Component={Main}/>
            <Route path="/user" Component={UserPage}/>
            <Route path="/contacts" Component={ContactsPage}/>
            <Route path="/blog" Component={BlogPage}/>
          </Routes>
        <Footer />
       </BrowserRouter>
        
     </div>
     )}


export default App;