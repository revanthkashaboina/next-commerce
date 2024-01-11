import React from "react";
import Link from "next/link";

interface ObjItem {
    id: number;
    image: any;
    title: string;
}

const arrObj: ObjItem[] = [
    { id: 1, image: "", title: 'Loyalty Program' },
    { id: 2, image: "", title: 'Ready to Eat' },
    { id: 3, image: "", title: 'Fruit and Vegetables' },
    { id: 4, image: "", title: 'Diary, Eggs & Chilled' },
];

const Offers: React.FC = () => {
    return (
        <div style={{ padding: "35px 0", boxSizing: "inherit" }}>
            <div style={{ color: "#f7682b", boxSizing: "inherit", fontFamily: "sans-serif" }}>
                <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", boxSizing: "inherit" }}>
                    <h2 style={{ fontFamily: "sans-serif", fontSize: "25px", margin: "25px, 0", boxSizing: "inherit", marginBlockStart: "0.83em", marginBlockEnd: "0.83em", marginInlineStart: "0px", marginInlineEnd: "0px", fontWeight: "bold" }}>OFFERS</h2>
                    <div style={{ display: "flex", justifyContent: "flex-end", boxSizing: "inherit" }}>
                        <button style={{ backgroundColor: "#f7682b", color: "#fff", cursor: "pointer", padding: "12px 20px", fontFamily: "sans-serif", borderRadius: "25px", border: "none", fontSize: "12px", boxSizing: "inherit", appearance: "auto", letterSpacing: "normal", wordSpacing: "normal", lineHeight: "normal", textTransform: "none", textIndent: "0px", textShadow: "none", display: "inline-block", textAlign: "center", margin: "0em", paddingBlock: "1px", paddingInline: "6px" }}>View all</button>
                    </div>
                </div>
                <div style={{boxSizing:"inherit"}}>
                    <div style={{gridTemplateColumns:"repeat(5, minmax(125px, 1fr))", display:"grid", gridGap:"15px", boxSizing: "inherit"}}>
                        <div style={{display:"flex", height:"100%", flexDirection:"column", backgroundColor:"#fff", alignItems:"center", justifyContent:"space-between", textAlign:"center", padding:"15px 5px", border:"1px solid #e8e8e8", borderRadius:"10px", boxSizing:"inherit"}}>
                            <Link href="#" style={{width:"100%", textDecoration:"none", fontSize:"14px",boxSizing: "inherit", textAlign:"center", fontFamily:"sans-serif" }}>
                                <div style={{width:"100%", color:"#757575", cursor:"pointer"}}>
                                    <div style={{display:"flex", justifyContent:"space-between", position:"relative", height:"0px", bottom:"10px", boxSizing: "inherit"}}>
                                        <div style={{boxSizing: "inherit"}}>
                                            <div style={{boxSizing: "inherit"}}>
                                                    <h1>Hello</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offers;
