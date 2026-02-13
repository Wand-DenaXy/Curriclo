import Me from "@/app/Assets/IMG_20250216_172457_321 (1).jpg";
import Image from "next/image";

export default function Education() {
  return (

    
<section className="home" id="home">
      <div className="content">
        <h3 className="text-animation">
          I&apos;m a <span></span>
        </h3>
        <p>
          I am an Information Systems Technologies and Programming Technician with experience in web application development, focusing on backend development. I have skills in programming, application structuring, database integration, and developing features oriented toward web solutions, with experience in technologies such as PHP and Laravel. Throughout my journey, I have developed academic and personal projects that strengthened my analytical thinking, problem-solving abilities, and code organization skills. I am a responsible and dedicated person, continuously motivated to grow and contribute positively to the teams and projects I am part of.
        </p>
        <div className="social-icons">
          <a href="https://github.com/Wand-DenaXy"><i className='bx bxl-github'></i></a>
        </div>
        <div className="btn-group">
          <a href="/ManuelSilvestreCurricloV2.pdf" className="btn" download>Curriculum Vitae</a>
          <a href="mailto:silvestrem754@gmail.com?subject=Contacto%20via%20Portfolio" className="btn">Contact</a>
        </div>
      </div>

      <div className="himg">
        <Image
          src={Me}
          alt="My Photo"
          width={550}
          height={800}
          className="profile-img"
          priority
        />
      </div>
    </section>
  );
}