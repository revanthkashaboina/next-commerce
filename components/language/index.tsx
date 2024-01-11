

export default function Language() {
    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", boxSizing: 'inherit', marginLeft:"30px", marginRight:"30px" }}>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", boxSizing: 'inherit', cursor:"pointer", color:"#fff" }}>
                <p style={{display: "flex", justifyContent: "center", alignItems: "center", height:"40px", width:"60px", borderRadius:'25px', marginTop:"0px", cursor:"pointer", padding:"5px, 10px", backgroundColor:"#fff", color:"#000", fontSize:"12px", margin:"0px", boxSizing: 'inherit'}}>English</p>
                <p style={{ fontSize: "12px", color: "#fff", margin: "0px", boxSizing: 'inherit', cursor: "pointer" }}>Language</p>
            </div>
        </div>
    )
}