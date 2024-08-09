import { NextResponse } from "next/server";

export async function GET(request,content){
    const studentDetails = content.params.student;
    console.log(studentDetails);
    return NextResponse.json({result:studentDetails},{status:200})
}

// export async function GET(request, content) {
//     const studentDetails = content.params.student;


//     console.log(studentDetails);
//     return new Response("All routes caught");
// }
