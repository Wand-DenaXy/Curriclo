import Image from "next/image";
import PuroEncanto from "@/app/Assets/PuroEncanto.png";
import WeGreen from "@/app/Assets/WeGreen.png";
import Flutter from "@/app/Assets/Flutter_logo.svg.png";

export default function Header() {
  return (
<section className="projects" id="projects">
        <h2 className="header2">Projects</h2>
        <div className="projects-container">
            <div className="project-card">
                <div className="project-img">
                    <Image src={WeGreen} alt="Project 1" width={900}  />
                </div>
                <div className="project-info">
                    <h3>WeGreen</h3>
                    <p>A complete e-commerce platform developed with three types of users: Seller, Client, Administrator.</p>
                    <div className="project-tags">
                        <span>Javascript</span>
                        <span>PHP</span>
                    </div>
                    <div className="project-links">
                        <a href="https://github.com/WeGreenProject/WeGreen-Main" target="_blank" rel="noopener noreferrer">See Project</a>
                    </div>
                </div>
            </div>

            <div className="project-card">
                <div className="project-img">
                    <Image src={PuroEncanto} alt="Project 2" width={400} height={250} />
                </div>
                <div className="project-info">
                    <h3>Puro Encanto</h3>
                    <p>A party platform where customers can book their parties and administrators manage them!</p>
                    <div className="project-tags">
                        <span>Javascript</span>
                        <span>PHP</span>
                    </div>
                    <div className="project-links">
                         <a href="https://github.com/PuroEncantoo/PuroEncanto_Temp-Main" target="_blank" rel="noopener noreferrer">See Project</a>
                    </div>
                </div>
            </div>

            <div className="project-card">
                <div className="project-img">
                    <img src="https://via.placeholder.com/400x250/131313/00ffee?text=Project+3" alt="Project 3" />
                </div>
                <div className="project-info">
                    <h3>Federação</h3>
                    <p>The Federação project introduced the new <strong>ControllerBase</strong> feature, an abstract class that standardizes controllers, centralizes CRUD operations, and allows code reuse through inheritance.</p>
                    <div className="project-tags">
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>JavaScript</span>
                        <span>PHP</span>
                        <span>MySQL</span> 
                    </div>
                    <div className="project-links">
                        <a href="https://github.com/Wand-DenaXy/Federacao" target="_blank" rel="noopener noreferrer">See Project</a>
                    </div>
                </div>
            </div>

            <div className="project-card">
                <div className="project-img">
                    <img src="https://via.placeholder.com/400x250/131313/00ffee?text=Project+4" alt="Project 4" />
                </div>
                <div className="project-info">
                    <h3>Federação V2</h3>
                    <p>CRUD in Laravel with MySQL</p>
                    <div className="project-tags">
                        <span>Laravel</span>
                        <span>MySQL</span>
                    </div>
                    <div className="project-links">
                        <a href="https://github.com/Wand-DenaXy/FederacaoV2" target="_blank" rel="noopener noreferrer">See Project</a>
                    </div>
                </div>
            </div>

            <div className="project-card">
                <div className="project-img">
                    <Image src={Flutter} alt="Project 5" width={400}/>
                </div>
                <div className="project-info">
                    <h3>Flutter</h3>
                    <p>A cross-platform mobile app built with Flutter, integrated with a robust RESTful API.</p>
                    <div className="project-tags">
                        <span>Flutter</span>
                        <span>API REST</span>
                    </div>
                    <div className="project-links">
                        <a href="https://github.com/Wand-DenaXy/App_apiv2">Ver Projeto</a>
                    </div>
                </div>
            </div>

            <div className="project-card">
                <div className="project-img">
                    <img src="https://via.placeholder.com/400x250/131313/00ffee?text=Project+6" alt="Project 6" />
                </div>
                <div className="project-info">
                    <h3>Em Breve</h3>
                    <p>...</p>
                    <div className="project-tags">
                        <span>API REST</span>
                        <span>FLUTTER</span>
                        <span>FAST API</span>
                    </div>
                    <div className="project-links">
                        <a href="https://github.com/Wand-DenaXy">GitHub</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}