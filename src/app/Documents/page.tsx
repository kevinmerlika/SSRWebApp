
import { getSession } from "@/actions/authentication";
import axios from "axios";
import { redirect } from "next/navigation";

// async function getData() {



//   console.log("fetching");
  
//   const response = await axios("https://dog.ceo/api/breeds/image/random");
//   const data = await response.data;
//   return data;


// }


export default async function Documents() {
   //Login logic for Navbar
   const isLoggedIn: any = await getSession()

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
