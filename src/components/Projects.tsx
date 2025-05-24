"use client";
import Image from 'next/image';
import Link from 'next/link';

const projectsData = [
  {
    title: 'Plateforme E-commerce Innovante',
    category: 'Développement Web',
    description: 'Solution e-commerce moderne avec gestion des stocks en temps réel et interface utilisateur intuitive.',
    image: '/images/projects/ecommerce-showcase.jpg',
    tags: ['Next.js', 'Node.js', 'Stripe'],
    url: '#project-ecommerce',
  },
  {
    title: 'Application Mobile de Santé',
    category: 'Développement Mobile',
    description: 'Application mobile pour la prise de rendez-vous médicaux et le suivi des patients.',
    image: '/images/projects/healthapp-showcase.jpg',
    tags: ['React Native', 'Firebase', 'UX/UI'],
    url: '#project-healthapp',
  },
  {
    title: 'Tableau de Bord Financier',
    category: 'Data Visualisation',
    description: 'Plateforme de visualisation de données financières en temps réel pour une prise de décision éclairée.',
    image: '/images/projects/finance-dashboard-showcase.jpg',
    tags: ['React', 'D3.js', 'API Rest'],
    url: '#project-finance',
  },
  {
    title: 'Réseau Social d’Entreprise',
    category: 'Plateforme Communautaire',
    description: 'Plateforme communautaire avec messagerie instantanée et partage de fichiers sécurisé.',
    image: '/images/projects/social-network-showcase.jpg',
    tags: ['Vue.js', 'GraphQL', 'Sécurité'],
    url: '#project-social',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-[var(--primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nos dernières réalisations
          </h2>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            Découvrez un aperçu de nos projets récents, conçus avec passion et expertise pour répondre aux besoins uniques de nos clients.
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10"
        >
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="flex flex-col overflow-hidden rounded-xl shadow-lg bg-white"
            >
              <div className="relative h-60 w-full flex-shrink-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-xl font-semibold text-[var(--text)] mb-2" title={project.title}>{project.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-2.5 py-1 text-xs font-semibold text-white bg-[var(--secondary)] rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                </div>
                <Link href={project.url} legacyBehavior>
                  <a className="mt-auto inline-block px-6 py-3 bg-[var(--secondary)] text-white text-base font-semibold rounded-lg shadow-md hover:bg-opacity-80 transition-colors duration-300 text-center">
                    Voir le projet
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}