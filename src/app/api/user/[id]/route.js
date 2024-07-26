import { user } from "@/util/db";
import { NextResponse } from "next/server";

export function GET(request,content){

    const UserData = user.filter((item)=> item.id==content.params.id)
    return NextResponse.json(
        UserData.length==0?{result:"No Data found",success:false}:{result:UserData[0],success:true},
        {status:200})
}