import Image from "next/image";
import userIcon from './user.png';

export default function User(){
    return(
        <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", boxSizing:'inherit', marginRight:"30px"}}>
            <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", boxSizing:'inherit', width:"100%"}}>
                <div style={{display:"flex", alignItems:"center", backgroundColor:"#fff", height:"40px", width:"40px", borderRadius:"50%", padding:"10px", cursor:"pointer"}}>
                    <Image src={userIcon} alt="user-icon"/>
                </div>
                <p style={{fontSize:"12px", color:"#fff", margin:"0px", boxSizing:'inherit', cursor:"pointer"}}>Login</p>
            </div>
        </div>
    )
};