
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar/Navbar";
import Drawer from "./Drawer/Drawer";
import { cookies } from "next/headers";
import Cookies from 'js-cookie'; // Import the js-cookie library
import { getSession } from "@/actions/authentication";
import { redirect } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export async function loggedIn() {
  
  return false;
}


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  //Login logic for Navbar
  const isLoggedIn: any = await getSession()

  console.log(` dataaaaaaa ${isLoggedIn.status}`);





  return (
    <html lang="en">
      <body className={inter.className}>
        {
        isLoggedIn.status == "200" ? <Navbar /> : <></>}
        
        <main className="m-auto min-w-[300px] max-w-7xl p-4"></main>
        {children}

        </body>

    </html>
  );
}

