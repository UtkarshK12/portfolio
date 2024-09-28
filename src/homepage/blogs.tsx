import { useEffect, useState } from "react";
import Blog from "./blog";

export default function Blogs () {


    const [blogsList, setBlogsList] = useState<any[]>();
    
    useEffect(()=>{
        const fetchData = async () =>{
            try{
            const response = await fetch("https://raw.githubusercontent.com/UtkarshK12/resume-files/main/blogs.txt");

            if(!response.ok){
                console.log("res error")
            }
    
            const data = await response.json();

            const blogsList_res= data["blogs"]

            setBlogsList(blogsList_res)
            console.log(blogsList_res)
        }
        catch(e){
            console.log(e);
        }
        }

        fetchData();
       
    },[])

    return(
        <div>
        <div className="text-gray-700 font-bold text-4xl font-serif min-w-screen flex w-full justify-center items-center  mx-auto">Blogs</div>
        <div className="h-10"></div>
        <div className="p-8 grid gap-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {
            blogsList?.map((blogs, index) => (
                        <Blog 
                            key={blogs.id || index} 
                            title={blogs.blogs_title} 
                            detail={blogs.blogs_detail}
                            url={blogs.blogs_url}
                        ></Blog>
                    ))
                    }
        </div>
        </div>
        </div>
       
    )
}