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
          Sou técnico de Tecnologias e Programação de Sistemas de Informação, com experiência no desenvolvimento de aplicações web e foco em backend. Possuo competências em programação, estruturação de aplicações, integração com bases de dados e desenvolvimento de funcionalidades orientadas para soluções web, com experiência em tecnologias como PHP e Laravel. Ao longo do meu percurso desenvolvi projetos académicos e pessoais que reforçaram a minha capacidade de análise, resolução de problemas e organização de código. Sou uma pessoa responsável, dedicada e com vontade de evoluir continuamente, procurando contribuir de forma positiva para as equipas e projetos em que me integro.
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