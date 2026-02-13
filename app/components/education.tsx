'use client';
import gabrielPereira from "@/app/Assets/gabriel_pereira.jpg";
import ElChester from "@/app/Assets/images.jpeg";
import Cyango from "@/app/Assets/cyango+logo+square.png";
import { motion } from 'framer-motion';
import Image from "next/image";

export default function Education() {
  return (
    <section className="education" id="education">
        <h2 className="header2">Education</h2>
        <div className="education-container">
        <motion.div className="education-block educationimg1">
            <Image 
                src={gabrielPereira} 
                alt="Education 1" 
                style={{ width: '100%', height: 'auto', borderRadius: '1rem' }}
            />
             <p>Finalizou o 12º Ano em Programação e Gestão de Sistemas Informáticos na Gabriel Pereira</p>
        </motion.div>
        <motion.div className="education-block educationimg">
            <Image 
                src={Cyango} 
                alt="Education 2" 
                style={{ width: '80%', height: 'auto', borderRadius: '1rem' }}
            />
            <p><strong>Cyango</strong> - estagiou numa empresa que trabalha com realidade aumentada com um período de duzentas e dez horas de trabalho.</p>
        </motion.div>
        <motion.div className="education-block educationimg">
            <Image 
                src={ElChester} 
                alt="Education 3" 
                style={{ width: '80%', height: 'auto', borderRadius: '1rem' }}
            />
            <p><strong>El Chester</strong> - estagiou nesta empresa de design gráfico a onde aprimorou e implementou as suas competências em aplicações  Adobe que trabalha com com um período de trezentas e vinte horas de trabalho. (Com Certificado)</p>
        </motion.div>
        </div>
    </section>
  );
}