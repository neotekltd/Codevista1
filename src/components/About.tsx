"use client";
import { motion } from "framer-motion";

const aboutListItems = [
  {
    number: "01",
    title: "Une société de solutions informatiques",
    description: "Depuis notre création, nous nous engageons à fournir des solutions informatiques innovantes et sur mesure qui répondent aux besoins spécifiques de chaque client."
  },
  {
    number: "02",
    title: "Une équipe pluridisciplinaire jeune et motivée",
    description: "Notre force réside dans notre équipe dynamique et passionnée, composée d'experts aux compétences variées, toujours prêts à relever de nouveaux défis technologiques."
  },
  {
    number: "03",
    title: "Un savoir-faire et une expertise reconnus",
    description: "Avec des années d'expérience et une veille technologique constante, nous avons acquis une expertise solide, reconnue par nos clients et partenaires."
  },
  {
    number: "04",
    title: "Le respect des délais et des engagements",
    description: "Nous mettons un point d'honneur à respecter nos engagements, en livrant des projets de haute qualité dans les délais impartis, garantissant ainsi votre satisfaction."
  },
];

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 }
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white text-gray-800 dark:bg-slate-800 dark:text-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-2 gap-12 md:gap-16 items-start"
        >
          {/* Left Column: Title and Paragraph */}
          <motion.div variants={itemVariants} className="relative">
            <div className="absolute -left-4 top-2 bottom-2 w-1 bg-[#f43f5e] hidden sm:block">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-3 w-full bg-[#f43f5e] mb-2 rounded-sm" />
              ))}
            </div>
            <div className="pl-4 sm:pl-8">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6">
                En 2011
              </h2>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed space-y-4">
                CodeVista a été fondée avec une vision claire : révolutionner l'interaction numérique pour les entreprises de toutes tailles. Dès nos débuts, nous avons mis l'accent sur l'innovation, la qualité et une approche centrée sur le client. 
                <br/><br/>
                Nous avons commencé comme une petite équipe de passionnés de technologie, déterminés à créer des solutions web qui non seulement répondent aux attentes, mais les dépassent. Au fil des ans, nous avons grandi, évolué et affiné notre expertise, mais notre engagement initial envers l'excellence et la satisfaction client est resté inchangé. Chaque projet est une nouvelle opportunité de démontrer notre passion pour le digital.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Numbered List */}
          <motion.div variants={itemVariants} className="relative space-y-8">
            {aboutListItems.map((item, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="flex items-start space-x-4"
              >
                <span className="text-3xl font-bold text-[#f43f5e]">
                  {item.number}
                </span>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-[#f43f5e] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
            <div className="absolute -right-4 top-0 bottom-0 w-1 bg-[#f43f5e] hidden sm:block">
               {[...Array(10)].map((_, i) => (
                <div key={i} className="h-3 w-full bg-[#f43f5e] mb-2 rounded-sm" />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}