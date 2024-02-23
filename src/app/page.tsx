'use server'

import axios from "axios";
import Image from "next/image";

async function getData() {



  console.log("fetching");
  
  const response = await axios("https://dog.ceo/api/breeds/image/random");
  const data = await response.data;
  return data;


}

export default async function Home() {

  const dogs = await getData();
  console.log(dogs)

  return (
    <main>
      hi
    </main>
  );
}
