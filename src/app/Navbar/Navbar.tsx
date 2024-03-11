
import Link from "next/link";
import logo from "../../assets/logo.png";
import Image from "next/image";
import { redirect } from "next/navigation";
import Order from "@/model/Order";
import { any } from "zod";
import axios, { AxiosResponse } from "axios";
import MenuItemList from "./MenuItem/MenuItemList";
import ClientComponent from "./ClientComponents/ClientComponent";
import { Children } from "react";
import Drawer from "../Drawer/Drawer";
import Logo from "./Logo";
import ProfileMenu from "./MenuItem/ProfileMenu";
import { revalidatePath } from "next/cache";
const https = require('https');

async function Search(query: FormData) {
  "use server";
  const formdata = query.get("search")?.toString() || ''; // Provide a default value if formdata is undefined
    
    redirect(`/Documents/${formdata}`)
//   }
  
}


async function getData(): Promise<MenuItemsList> {
    "use server"
  
    const httpsAgent = new https.Agent({
      rejectUnauthorized: false,
    });
  
    revalidatePath("/")
    try {
      const response: AxiosResponse<MenuItemsList> = await axios.get("https://192.168.1.66:443/navbar/", {
        httpsAgent: httpsAgent
      });
      const data: MenuItemsList = response.data;
      revalidatePath("/")
      
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }

  interface MenuItem {
    id: number;
    label: string;
    url: string;
  }
  
  interface MenuItemsList {
    menuItems: MenuItem[];
  }
  
  interface MenuItemListProps {
    menuItemsList: MenuItemsList;
  }
  
  


  export default async function Navbar(){

    const isOpen = false;

    const getdat:MenuItemsList = await getData()
    
    
  return (
    <>
    <Drawer />
    <div className="bg-base-content flex-1">
      <div className="navbar flex-1 m-auto flex-col sm:flex-row gap-2">
        <div className="flex-1">
          <Logo />
          <ClientComponent getData = {getData}>asd</ClientComponent>
        </div>
        <form action={Search} method="get">
          <label className="input input-bordered flex items-center gap-2">
            <input type="text" className="grow" placeholder="Search" name="search" />
            <button type="submit" className="btn btn-ghost"><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
            </button>
          </label>
        </form>
        <ul className="menu menu-vertical lg:menu-horizontal bg-base-100 rounded-l-box gap-20">
        <MenuItemList menuItemsList={getdat} />
        </ul>
        
      </div>
    </div>
    
    
    </>
  );
}

