import React, { useEffect, useState } from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import pfp from '../assets/vect.jpg';

const About: React.FC = () => {
    const [about, setAbout] = useState<string | null>();
    const [name, setName] = useState<string>();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    "https://raw.githubusercontent.com/UtkarshK12/resume-files/main/about.txt"
                );
                if (!response.ok) {
                    console.log("res error");
                }
                
                const data = await response.json();
                const res_name: string = data["name"];
                const res_about: string = data["about"];

                setName(res_name);
                setAbout(res_about);
            } catch (e) {
                console.log(e);
            }
        };

        fetchData();
        setName("Utkarsh");
    }, []);

    const socialLinks = [
        { icon: FaLinkedin, url: "https://linkedin.com/in/utkarsh-kumar-38a782164" },
        { icon: FaGithub, url: "https://github.com/UtkarshK12" },
        { icon: FaTwitter, url: "https://x.com/evdaycode" },
        { icon: MdEmail, url: "mailto:utkarsh.iit.delhi@gmail.com" },
    ];

    return (
        <div className="flex flex-row items-center justify-between gap-24">
            <div className="backdrop:filter bg-white bg-opacity-30 rounded-lg p-10 flex flex-col justify-center items-start gap-6 w-full max-w-2xl mx-auto">
                <div>
                    <h1 className='text-gray-700 text-5xl font-bold font-serif mb-4'>Hi, I am {name}! 🙋🏻</h1>
                    <p className="text-gray-600 text-lg">{about}</p>
                </div>
                <div className="flex gap-4 mt-4">
                    {socialLinks.map((link, index) => (
                        <a 
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-red-900 transition-colors duration-300"
                        >
                            <link.icon size={24} />
                        </a>
                    ))}
                </div>
            </div>
            <div className="flex-shrink-0">
                <img src={pfp} alt="Profile picture" className="w-auto h-72 object-cover" />
            </div>
        </div>
    );
}

export default About;