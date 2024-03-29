import { groq } from "next-sanity";
import client from "./client";

export const productQuery='*[_type=="Products"]'; 
export const bannerQuery='*[_type=="Banner"]'; 
export const categoryQuery='*[_type=="Banner"]'; 

export const SlugQuery=`*[_type=="Products"]{
    slug{
        current
    }
}`; 

export const productDetails=(slug)=>{
    return( `*[_type=="Products" && slug.current=='${slug}'][0]`)
   }


 export  async function getBanniere() {
    return client.fetch(groq`*[_type=="Banner"]`);
  }

 export async function getProducts() {
    return client.fetch(groq`*[_type=="Products"]`);
  }

 export async function getProduct(slug) {
    return  client.fetch(groq`*[_type=="Products" && slug.current=='${slug}'][0]`)   
  }
