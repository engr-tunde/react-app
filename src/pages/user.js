
import AppError from "../components/global/Apperror";
import Apploader from "../components/global/Apploader";
import useFetch from "../components/global/hooks/usefetch";

const UserPage=()=>{
    const {data,error,loading} = useFetch("https://jsonplaceholder.typicode.com/users");
    console.log(data);
 return(<div className="container lg:py-0">
 <div className="py-[100px] text-appAqua   h-full flex flex-col">
    <h3 className="text-appAqua text-center capitalize">here is the list of our users</h3>
    <div className="px-3 mb-3 flex justify-between gap-3">
                    <div>S/N</div>
                    <div>Name</div>
                    <div>Email Address</div>
                    <div>Home Address</div>
                </div>
        {data ?(data.map((item,i)=>(
            <div key={i} className="flex justify-between gap-4 border border-appAqua px-4 py-2">
                
               <div>{item.id}</div>
               <div className="">{item.name}</div>
               <div>{item.email}</div>
               <div>{item.address.street}</div>
            </div> 
        ))) :error ?<AppError error={error}/>:loading ? <Apploader/>:null}
    </div>
    </div>
 )
}
export default UserPage;