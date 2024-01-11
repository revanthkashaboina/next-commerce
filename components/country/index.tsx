import Image from "next/image";
import countryFlag from '../country/uae_flag.png'

export default function Country(){
    return(
        <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", boxSizing:'inherit'}}>
            <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", boxSizing:'inherit',cursor:"pointer", color:"#fff"}}>
            <Image src={countryFlag} alt="country-icon" style={{cursor:"pointer", width:"40px", height:"40px", borderRadius:"50%", boxSizing:'inherit', overflow: "hidden", color:"#fff"}}/>
                <p style={{fontSize:"12px", color:"#fff", margin:"0px", boxSizing:'inherit', cursor:"pointer", overflow: "hidden", textAlign:"center"}}>Country</p>
            </div>
        </div>
    )
};