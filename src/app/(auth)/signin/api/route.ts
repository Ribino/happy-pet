import { draftMode } from "next/headers";


export async function POST(request: Request) {

   const res = await fetch(`${process.env.HOST}${'/auth/signin'}`, {
      method: "POST",
      body: request.body
   });

   if(res.status == 200) {

   }

}