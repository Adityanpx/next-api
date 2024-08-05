"use client"
import "@/app/style.css"
import { useEffect, useState } from "react";

export default function page(params){
    let id = params.userid
    const [name,setName] = useState("");
    const [age,setAge] = useState("");
    const [email,setEmail] = useState("");

    useEffect(()=>{

    },[])

    const getUserDetails=async()=>{
        let data= await fetch("http://localhost:3000/users/"+id);
        data = await data.json()
    }

    return(
        
            
                <div className="add-user">
            <h1>Update user details</h1>
            <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Enter name" className="input-field"/>
            <input value={age}  onChange={(e)=>setAge(e.target.value)} type="text" placeholder="Enter Age" className="input-field"/>
            <input value={email}  onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="Enter Email" className="input-field"/>
            <button className="btn">Add User</button>
        </div>
            
        
    )

}