import { useEffect, useState } from "react";
import Project from "./project";

export default function Projects(){

    const [projectList, setProjectList] = useState<any[]>();
    
    useEffect(()=>{
        const fetchData = async () =>{
            try{
            const response = await fetch("https://raw.githubusercontent.com/UtkarshK12/resume-files/main/projects.txt");

            if(!response.ok){
                console.log("res error")
            }
    
            const data = await response.json();

            const projectList_res= data["projects"]

            setProjectList(projectList_res)
            console.log(projectList_res)
        }
        catch(e){
            console.log(e);
        }
        }

        fetchData();
       
    },[])

    return(
        <div>
            <div className="text-gray-700 font-bold text-4xl font-serif min-w-screen flex w-full justify-center items-center  mx-auto">Projects</div>
            <div className="h-10"></div>
 <div className="p-8 grid gap-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectList?.map((project, index) => (
                        <Project 
                            key={project.id || index} 
                            title={project.project_title} 
                            detail={project.project_breif}
                            url={project.project_url}
                        ></Project>
                    ))}
        </div>
      </div>
        </div>
       
    )
}