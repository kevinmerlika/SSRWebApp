import { getSession } from "@/actions/authentication";
import { redirect } from "next/navigation";

export default async function Dashboard() {

   //Login logic for Navbar
   const isLoggedIn: any =  await getSession()

   console.log(` dataaaaaaa ${isLoggedIn.status}`);

   if(isLoggedIn.status != 200){
    redirect("/Login")
   }
  
    return (
      <main>
        hi
      </main>
    );
  }