"use client"
import "@/app/style.css"
import { useState } from "react"
export default function Page(){ 
    const [name,setName] = useState("");
    const [age,setAge] = useState("");
    const [email,setEmail] = useState("");

const addUser= async()=>{
    let data = await fetch("http://localhost:3000/api/user",{
        method:"Post",
        body:JSON.stringify({name,age,email})
    });
    data = await data.json();
    if(data.success){
        alert("new user added");
    }else{
        alert("some error occured");
    }
    console.log(data);
}  

    return (
        <div className="add-user">
            <h1>Add user details</h1>
            <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Enter name" className="input-field"/>
            <input value={age}  onChange={(e)=>setAge(e.target.value)} type="text" placeholder="Enter Age" className="input-field"/>
            <input value={email}  onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="Enter Email" className="input-field"/>
            <button onClick={addUser} className="btn">Add User</button>
        </div>
    )
}