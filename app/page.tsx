import Header from "./components/header";
import Home from "./components/home";
import Skills from "./components/skill";
import Education from "./components/education";
import Projects from "./components/projects";
import Footer from "./components/footer";

export default function Page() {

  return (
    <>
      <Header />
      <Home />
      <Education />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
}
