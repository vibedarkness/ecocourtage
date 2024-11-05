/* eslint-disable react/no-unescaped-entities */
import { motion } from 'framer-motion';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';



const energySites = [
  { id: 1, name: 'Centrale solaire de Bokhol', position: [16.5167, -15.3500], description: 'Une des premières grandes centrales solaires du Sénégal qui contribue significativement à l’approvisionnement énergétique du pays.' },
  { id: 2, name: 'Parc éolien de Taïba Ndiaye', position: [15.1805, -16.8862], description: 'Le plus grand parc éolien d’Afrique de l’Ouest, fournissant de l’énergie propre à des milliers de foyers.' },
  { id: 3, name: 'Bureau de courtage énergétique à Dakar', position: [14.6928, -17.4467], description: 'Un centre stratégique facilitant les échanges entre producteurs d’énergie et consommateurs.' },
  { id: 4, name: 'Centrale hydroélectrique de Félou', position: [12.5524, -12.1428], description: 'Une centrale hydroélectrique située près du fleuve Sénégal, jouant un rôle clé dans la production d’énergie renouvelable.' },
  { id: 5, name: 'Centrale solaire de Malicounda', position: [14.4214, -16.9648], description: 'Un projet solaire visant à renforcer l’approvisionnement énergétique pour les zones environnantes.' },
  { id: 6, name: 'Centrale thermique de Bel-Air', position: [14.7256, -17.4747], description: 'Centrale thermique située à Dakar, contribuant de manière significative au réseau électrique national.' },
  { id: 7, name: 'Projet solaire de Kahone', position: [14.1833, -16.3333], description: 'Une centrale solaire récemment mise en place pour diversifier les sources d’énergie du Sénégal.' },
  { id: 8, name: 'Barrage hydroélectrique de Manantali', position: [13.1971, -10.4223], description: 'Un barrage régional fournissant de l’électricité au Sénégal et aux pays voisins.' },
  { id: 9, name: 'Centrale éolienne de Mboro', position: [15.1111, -16.9444], description: 'Une des premières centrales éoliennes du Sénégal, ajoutant de la capacité éolienne au réseau.' },
  { id: 10, name: 'Centrale solaire de Diass', position: [14.6205, -17.0688], description: 'Une centrale solaire contribuant à l’énergie renouvelable dans la région de Diass.' }
];

const titleVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } },
  hover: {
    scale: 1.05,
    color: '#37D1C5',
    transition: { type: 'spring', stiffness: 200, damping: 10 }
  }
};

const CountrySection = () => {

  const position = [14.6928, -17.4467];

  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-green-50">
      <div className="container mx-auto flex flex-col lg:flex-row items-start">
        {/* Texte de présentation à gauche */}
        <div className="lg:w-1/2 p-8">
          <motion.h2 initial="hidden"
          animate="visible"
          whileHover="hover"
          variants={titleVariants}
          className="text-4xl font-bold mb-12 cursor-pointer">Nous vous Accompagnons!</motion.h2>
          <p className="text-gray-700 mb-4 leading-relaxed font-light text-lg">
            Le courtage énergétique au Sénégal est essentiel pour l’optimisation des ressources et l’accès aux énergies renouvelables. Grâce aux courtiers énergétiques, les entreprises et les particuliers peuvent mieux comprendre et s’intégrer dans le marché énergétique en pleine croissance.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed font-light text-lg">
            Ces intermédiaires jouent un rôle clé dans la transition énergétique, permettant l'adoption de solutions plus durables et la réduction des coûts liés à l’énergie. Ils facilitent l'achat et la vente d'énergie renouvelable, stimulant ainsi l'innovation et la gestion efficace des ressources.
          </p>
          <p className="text-gray-700 leading-relaxed font-light text-lg">
            Le Sénégal se positionne comme un leader régional grâce à son engagement envers l’énergie verte, aidant à promouvoir des pratiques durables et à atteindre ses objectifs environnementaux.
          </p>
        </div>

        {/* Carte interactive à droite */}
        <div className="lg:w-1/2 h-[500px] shadow-md border rounded-lg overflow-hidden">
          <MapContainer center={position} zoom={7} style={{ height: '100%', width: '100%' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {energySites.map(site => (
              <Marker key={site.id} position={site.position}>
                <Popup>
                  <h3 className="font-semibold text-lg text-blue-900">{site.name}</h3>
                  <p className="text-sm text-gray-600">{site.description}</p>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </section>
  );
};

export default CountrySection;
