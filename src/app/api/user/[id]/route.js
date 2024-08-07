import { user } from "@/util/db";
import { NextResponse } from "next/server";

export function GET(request,content){

    const UserData = user.filter((item)=> item.id==content.params.id)
    return NextResponse.json(
        UserData.length==0?{result:"No Data found",success:false}:{result:UserData[0],success:true},
        {status:200})
}

export async function PUT(request,content){
    let payload = await request.json();
    payload.id = content.params.id;
    console.log(payload);
    if(!payload.id || !payload.name || !payload.email || !payload.age){
        return NextResponse.json({result:"data not found",success:false},{status:400})
}
    

    return NextResponse.json({result:payload,success:true},{status:200})
}

export function DELETE(request,content){
    let id = content.params.id
    if(id){
        return NextResponse.json({result:"user deleted",success:true},{status:200})

    }else{
        return NextResponse.json({result:"Internal error, please try after sometime",success:false},{status:400})
    }
}