
"use client"

import axios from "axios";
import { useEffect, useState } from "react";

export default function ClientComponent({
    children,
    getData
  }: Readonly<{
    children: React.ReactNode;
    getData: () => Promise<any>;
  }>){
    const [total, setTotal] = useState("4")
    const handleClick = async () => {
        try {
          const response = await axios.get('https://localhost:443/user');
          const userData = response.data;
          // Assuming userData is an array and you want the data of the first index
          const firstUserData = userData[0];
          setTotal(firstUserData.id)
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };
    
  return <div className="min-w-10 "><button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lgflex-col " onClick={handleClick}>
    <span className="badge badge-success">{total}</span>
    {children}
  </button>
  </div>
  }