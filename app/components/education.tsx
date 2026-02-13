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
              <p>Completed secondary education (12th grade) in Programming and Information Systems Management at Gabriel Pereira.</p>
        </motion.div>
        <motion.div className="education-block educationimg">
            <Image 
                src={Cyango} 
                alt="Education 2" 
                style={{ width: '80%', height: 'auto', borderRadius: '1rem' }}
            />
            <p><strong>Cyango</strong> — completed an internship at a company focused on augmented reality, with a total of 210 working hours.</p>
        </motion.div>
        <motion.div className="education-block educationimg">
            <Image 
                src={ElChester} 
                alt="Education 3" 
                style={{ width: '80%', height: 'auto', borderRadius: '1rem' }}
            />
            <p><strong>El Chester</strong> — completed an internship at a graphic design company, where I improved and applied my skills in Adobe applications during a 320-hour work period (certificate awarded).</p>
        </motion.div>
        </div>
    </section>
  );
}