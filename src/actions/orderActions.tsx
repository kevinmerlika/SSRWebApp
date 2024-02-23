import Order from '@/model/Order';
import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import orderSchema from '@/model/Invoice';
import { error } from 'console';

// pages/api/search.js

export default async function handler(req: String, res: any) {
    const searchQuery = req;
  
    try {
        console.log(searchQuery);
        
      const response = await axios(`http://localhost:3001/documents/order/${searchQuery}`);
  

      if (response) {
        console.log(res);
        console.log(response)
        
        res.json(response.data);
      } else {
        console.log("nothing")
        res.json({});
      }
    }catch{
        console.log(error);
        
    }
  }
  