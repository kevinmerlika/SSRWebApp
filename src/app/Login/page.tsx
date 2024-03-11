
import { getSession } from "@/actions/authentication";
import LoginForm from "@/components/loginForm";
import axios from "axios";
import { redirect } from "next/navigation";


// async function getData() {



//   console.log("fetching");
  
//   const response = await axios("https://dog.ceo/api/breeds/image/random");
//   const data = await response.data;
//   return data;


// }



export default async function Login() {

   //Login logic for Navbar
   const isLoggedIn: any = await getSession()

   console.log(` dataaaaaaa ${isLoggedIn.status}`);

   if(isLoggedIn.status == 200){
    redirect("/Dashboard")
   }

  return (
    <main className="hero hero-overlay bg-base-100 ">
    <LoginForm />
    </main>
  );
}
