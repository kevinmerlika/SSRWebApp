"use server"

import axios from "axios";
import { response } from "express";
import https from "https";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { redirect } from 'next/navigation'






const axiosInstance = axios.create({
    httpsAgent: new https.Agent({
        rejectUnauthorized: false // Ignore self-signed certificate errors
    }), 
    withCredentials: true,// Enable sending cookies with requests,
    headers: {
        'Content-type': 'application/json'
      }

});

// Add a request interceptor
axiosInstance.interceptors.request.use(function (config) {
    // Log the request before it is sent
    console.log("Request:", config);
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});


export async function getSession() {
    try {
        const cook = await getCookie();
        console.log(cook);

       // Check if the cookie is defined
    if (cook) {
        
        // Set the retrieved cookie in the request headers
        axiosInstance.defaults.headers.Cookie = cook;
    } else {
        console.log("Cookie is undefined");
    }
        
        const session = await axiosInstance.get("https://localhost:443/user/getSession", {
            baseURL: 'http://localhost:3002', // Assuming your server is running on this URL
            headers: {
              'Content-Type': 'application/json',
              'Accept': '*/*', // Add the Accept header
              'User-Agent': 'axios/1.5.0', // Add the User-Agent header
              'Accept-Encoding': 'gzip, deflate, br', // Add the Accept-Encoding header
              'Connection': 'keep-alive', // Add the Connection header,`
               'Cookie' : `${cook}`
            },
            withCredentials: true // Ensure credentials (cookies) are sent with requests
        });
        console.log(session.data); // Assuming session data is what you need
        return session;
    } catch (error) {
        // return new Response(JSON.stringify({status: "200"}))
        // Check if the error is an Axios error
        if (axios.isAxiosError(error)) {
            // Extract error information
            const { response, code, message } = error;

            // Check if a response was received
            if (response) {
                // Extract response data, status code, and status text
                const { data, status, statusText } = response;

                console.error(`Error Response: ${status} ${statusText}`);
                console.error("Error Data:", data);
                return { status, statusText, data };
            } else if (code) {
                console.error("Error Code:", code);
                console.error("Error Message:", message);
                return { code, message };
            }
        }

        // Handle other types of errors
        console.error("Error fetching session:", error);
        return redirect("/")
    }
}

export async function signIn(formdata: FormData) {

    try {
        const crendentials = await formdata;
        const username = crendentials.get('username')
        const password = crendentials.get('password') 
    console.log(`${username} and ${password}`);

    const credential = {
        username: username,
        password: password
    };

    console.log(credential);
    


    // Send JSON request
    const login: any = await axiosInstance.post("https://localhost:443/user/login", credential, {
        headers: {
            'Content-Type': 'application/json'
        }
    });


   // Extract the cookie value from the response headers
   const setCookieHeader = login.headers["set-cookie"][0]; // Assuming the cookie is in the "set-cookie" header
   const cookieValue = setCookieHeader.split(';')[0].split('=')[1];

   // Set the cookie using your cookie library
   const cookieStore = cookies();
   await cookieStore.set({
       name: "connect.sid",
       path: "/",
       value: cookieValue,
       sameSite: 'none',
       secure:true,
       httpOnly:true,
   });

    console.log(login.data); // Assuming session data is what you need
    return JSON.stringify(login.status);

        
        
    } catch (error) {
        
        

        // Handle other types of errors
        console.error("Error fetching session:", error);
        return redirect("/")
    }
    
}

export async function getCookie() {
    // Assuming you're using some function to get cookies, adjust it accordingly
    const cookie = cookies().get('connect.sid');
    if (cookie) {
        console.log(`Cookie found: ${cookie}`);
        return `${cookie.name}=${cookie.value}`;
    } else {
        console.log('Cookie not found');
        return undefined;
    }
}

export async function logOut() {

    await cookies().delete('connect.sid')
    
}