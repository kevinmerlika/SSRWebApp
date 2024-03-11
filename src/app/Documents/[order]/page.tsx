import React from "react";
import axios, { AxiosInstance } from "axios";
import { redirect, usePathname } from "next/navigation";
import Order from "@/model/Order";

import https from 'https';
import { getSession } from "@/actions/authentication";

const httpsAgent = new https.Agent({
  rejectUnauthorized: false, // Allow self-signed certificates
});

interface OrderDetailsProps {
  params: {
    order: string;
  };
}

interface OrderDetailsState {
  items: Order | null;
}



// Create an Axios instance with custom configurations
const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'https://192.168.1.66',
  httpsAgent: httpsAgent, // Use the custom HTTPS agent
});



export default async function OrderDetails({ params }: OrderDetailsProps) {
  const data = params.order;

  let items = null;

  //Login logic for Navbar
  const isLoggedIn: any = await getSession()

  console.log(` dataaaaaaa ${isLoggedIn.status}`);

  if(isLoggedIn.status != 200){
   redirect("/Login")
  }

  const fetchData = async (parameter: string) => {
    try {
      const response = await axiosInstance.get(`/documents/order/${parameter}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  };
  


  if(isLoggedIn.status == 200){
  items = await fetchData(data);
  }

  return (
    <main className="bg-base-100">
      <div className="artboard phone-4">
        <div>
          {/* Render order details here */}
          <p className="h-20 text-wrap bg-white text-zinc-950">
            {items?.order_number}
          </p>
          <p>{items?.total_amount}</p>
          {/* Render other order details */}
        </div>
      </div>
    </main>
  );
}
