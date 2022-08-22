import Home from "./components/home";
import Logo from "./components/logo";
import Headersocial from "./components/headersocial";
import Nav from "./components/nav";
import About from "./components/about";
import Projects from "./components/projects";
import Content from "./content";
 function App() {
  return (
    <>
      <Headersocial/>
      <Logo/>
      <Home/>
      <Nav/>
      <About/>
      <Projects projects={Content.projects}/>
 
    </>

  );
}

export default App;
