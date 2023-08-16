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


