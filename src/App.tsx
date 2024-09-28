import React, { ReactNode } from 'react';
import About from './homepage/about';
import Projects from './homepage/projects';
import Blogs from './homepage/blogs';
import useScrollAnimation from './homepage/hooks/useScroll';
import TaskBar from './homepage/taskBar';
import Experience from './homepage/experience';

interface AnimatedSectionProps {
  children: ReactNode;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children }) => {
  const [ref, isVisible] = useScrollAnimation();
  return (
    <div 
      ref={ref} 
      className={`transition-opacity relative duration-1000 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {children}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div className=' overscroll-y-none'>
      <div className="absolute top-0 left-0 right-0 z-10">
        <TaskBar />
      </div>
      <div className="relative bg-white bg-cover bg-center bg-no-repeat min-h-screen overscroll-y-none px-32">
        <div className="pt-20 flex flex-col items-center justify-center min-h-screen">
          <AnimatedSection>
            <section id="about">
            <About />
            </section>
          </AnimatedSection>
        </div>
        <AnimatedSection>
        <section id="projects">
          <Projects />
          </section>
        </AnimatedSection>
        <div className='h-20'></div>
        <AnimatedSection>
        <section id="blogs">
          <Blogs />
          </section>
        </AnimatedSection>
        <div className='h-20'></div>
        <AnimatedSection>
        <section id="experience">
          <Experience></Experience>
          </section>
        </AnimatedSection>
      </div>
    </div>
    
    
  );
}

export default App;