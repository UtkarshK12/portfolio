import  { useEffect, useRef } from 'react';

function TaskBar() {
    const taskBarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (taskBarRef.current) {
            const height = taskBarRef.current.offsetHeight;
            document.documentElement.style.setProperty('--taskbar-height', `${height + 40}px`);
        }
    }, []);

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            const offset = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--taskbar-height')) || 0;
            const elementPosition = section.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
                top: elementPosition - offset,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div ref={taskBarRef} className="shadow-lg backdrop-filter backdrop-blur-md bg-gray-800 border-white border-gray-200 flex flex-row justify-items-center p-5 items-center gap-10 w-full top-0 z-10">
            <div className="max-w-4xl w-full flex justify-between items-center text-gray-700 text-xl">
                <div className="flex gap-10 font-mono text-gray-100">
                    <span onClick={() => scrollToSection('about')} className="cursor-pointer hover:text-gray-300">About</span>
                    <span onClick={() => scrollToSection('projects')} className="cursor-pointer hover:text-gray-300">Projects</span>
                    <span onClick={() => scrollToSection('blogs')} className="cursor-pointer hover:text-gray-300">Blogs</span>
                    <span onClick={() => scrollToSection('experience')} className="cursor-pointer hover:text-gray-300">Experience</span>
                </div>
            </div>
        </div>
    );
}

export default TaskBar;