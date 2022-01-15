import './App.css';
import Banner from './Banner/Banner';
import Projects from './Projects/Projects';
import Blogs from './Blogs/Blogs';
import Certifications from './Certifications/Certifications';
import Skills from './Skills/Skills';
import Academics from './Academics/Academics';
import Resume from './Resume/Resume';
import Misc from './Misc/Misc';
import Bar from './Bar';

function App() {
  return (
    <div className="App">
        <Banner />
        <Projects />
        <Blogs />
        <Certifications />
        <Skills />
        <Academics />
        <Resume />
        <Misc />
        <Bar />
    </div>
  );
}

export default App;
