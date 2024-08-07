"use client"
import "@/app/style.css"
import { useEffect, useState } from "react";

export default function Page({ params }) {
    const id = params.userid;
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        getUserDetails();
    }, []);

    const getUserDetails = async () => {
        let data = await fetch("http://localhost:3000/api/user/" + id);
        data = await data.json();
        setName(data.result.name);
        setAge(data.result.age);
        setEmail(data.result.email);
    };

    const updateUser = async () => {
        let result = await fetch("http://localhost:3000/api/user/" + id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, age, email })
        });
        result = await result.json();
        console.log(result);
        if (result.success) {
            alert("User information updated");
        } else {
            alert("Please provide valid input");
        }
    };

    return (
        <div className="add-user">
            <h1>Update User Details</h1>
            <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter Name" className="input-field" />
            <input value={age} onChange={(e) => setAge(e.target.value)} type="text" placeholder="Enter Age" className="input-field" />
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Enter Email" className="input-field" />
            <button className="btn" onClick={updateUser}>Update User</button>
        </div>
    );
}
