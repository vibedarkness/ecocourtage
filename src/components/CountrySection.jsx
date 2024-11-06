/* eslint-disable react/no-unescaped-entities */
import { motion } from 'framer-motion';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';



const energySites = [
  { id: 1, name: 'Agence Bokhol', position: [16.5167, -15.3500], description: 'Une des premières grandes centrales solaires du Sénégal qui contribue significativement à l’approvisionnement énergétique du pays.' },
  { id: 2, name: 'Agence Taïba Ndiaye', position: [15.1805, -16.8862], description: 'Le plus grand parc éolien d’Afrique de l’Ouest, fournissant de l’énergie propre à des milliers de foyers.' },
  { id: 3, name: 'Agence Dakar', position: [14.6928, -17.4467], description: 'Un centre stratégique facilitant les échanges entre producteurs d’énergie et consommateurs.' },
  { id: 4, name: 'Agence Tambacounda', position: [13.7706, -13.6673], description: 'Un centre de distribution d’énergie pour l’est du Sénégal.' },
  { id: 5, name: 'Agence Saint-Louis', position: [16.0179, -16.4896], description: 'Un centre de gestion énergétique pour la région nord du Sénégal.' },
  { id: 6, name: 'Agence Ziguinchor', position: [12.5550, -16.2719], description: 'Un projet d’énergie solaire dans la région sud pour améliorer la couverture énergétique.' },
  { id: 7, name: 'Agence Kolda', position: [12.8927, -14.9413], description: 'Centrale solaire pour la région de Kolda, soutenant l’infrastructure énergétique locale.' },
  { id: 8, name: 'Agence Kaolack', position: [14.1500, -16.1000], description: 'Une centrale solaire récemment mise en place pour diversifier les sources d’énergie dans la région de Kaolack.' },
  { id: 9, name: 'Agence Louga', position: [15.6091, -16.1000], description: 'Une des premières centrales éoliennes de la région, renforçant le réseau énergétique.' },
  { id: 10, name: 'Agence Kédougou', position: [12.5524, -12.2164], description: 'Une centrale hydroélectrique située près du fleuve Sénégal, jouant un rôle clé dans la production d’énergie renouvelable pour la région est.' }
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
            className="text-4xl font-bold mb-12 cursor-pointer">Qui Sommes nous?</motion.h2>
          <p className="text-gray-700 mb-4 leading-relaxed font-light text-lg">
            Le courtage énergétique au Sénégal est essentiel pour l’optimisation des ressources et l’accès aux énergies renouvelables. Grâce à <strong style={{ fontWeight: 700 }} className='text-[#37D1C5]'> ECO-COURTAGE</strong>, les entreprises et les particuliers peuvent mieux comprendre et s’intégrer dans le marché énergétique en pleine croissance.
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
          <MapContainer
            center={position}
            zoom={7}
            style={{ height: '100%', width: '100%' }}
            scrollWheelZoom={false}
            dragging={window.innerWidth > 768} // Désactive le drag sur mobile
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {energySites.map(site => (
              <Marker
                key={site.id}
                position={site.position}
                eventHandlers={{
                  mouseover: (e) => {
                    e.target.openPopup();
                  },
                  mouseout: (e) => {
                    e.target.closePopup();
                  }
                }}
              >
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
