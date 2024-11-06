// src/data.js

import { FaRegHandshake, FaWrench, FaLightbulb } from 'react-icons/fa';
import image1 from './assets/3.jpeg';
import image2 from './assets/6.jpeg';
import image3 from './assets/1.jpeg';
import image10 from './assets/10.jpg';
import image11 from './assets/11.jpg';
import image12 from './assets/12.jpg';

export const services = [
  {
    id: 1,
    title: 'Analyse et Audit Énergétique',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit fringilla, vulputate sapien ornare faucibus praesent etiam eros, arcu aliquam nostra aptent purus felis pretium. Urna molestie platea sollicitudin class nisi pellentesque, sapien maecenas odio leo orci dignissim senectus, eu vehicula enim ac fusce. Eget mus integer fringilla molestie nullam eros class, felis potenti scelerisque dapibus vehicula lacinia dictum cubilia, aptent quisque nulla sapien sollicitudin torquent.Ridiculus penatibus vivamus nascetur posuere aliquet pharetra lacinia odio, sed taciti ultricies mus proin velit dui, fermentum mauris tristique suspendisse dictumst euismod morbi. Diam ultricies magnis enim bibendum egestas justo facilisi lacinia laoreet erat praesent iaculis congue vivamus, blandit magna hendrerit cubilia rutrum nullam nisi elementum massa mauris ante urna. Iaculis volutpat mauris',
    icon: <FaRegHandshake className="text-[#37D1C5] text-4xl mb-4" />,
    image: image1,
  },
  {
    id: 2,
    title: 'Comparaison de Tarifs',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit fringilla, vulputate sapien ornare faucibus praesent etiam eros, arcu aliquam nostra aptent purus felis pretium. Urna molestie platea sollicitudin class nisi pellentesque, sapien maecenas odio leo orci dignissim senectus, eu vehicula enim ac fusce. Eget mus integer fringilla molestie nullam eros class, felis potenti scelerisque dapibus vehicula lacinia dictum cubilia, aptent quisque nulla sapien sollicitudin torquent.Ridiculus penatibus vivamus nascetur posuere aliquet pharetra lacinia odio, sed taciti ultricies mus proin velit dui, fermentum mauris tristique suspendisse dictumst euismod morbi. Diam ultricies magnis enim bibendum egestas justo facilisi lacinia laoreet erat praesent iaculis congue vivamus, blandit magna hendrerit cubilia rutrum nullam nisi elementum massa mauris ante urna. Iaculis volutpat mauris',
    icon: <FaWrench className="text-[#37D1C5] text-4xl mb-4" />,
    image: image2,
  },
  {
    id: 3,
    title: 'Accompagnement pour les Énergies Renouvelables',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit fringilla, vulputate sapien ornare faucibus praesent etiam eros, arcu aliquam nostra aptent purus felis pretium. Urna molestie platea sollicitudin class nisi pellentesque, sapien maecenas odio leo orci dignissim senectus, eu vehicula enim ac fusce. Eget mus integer fringilla molestie nullam eros class, felis potenti scelerisque dapibus vehicula lacinia dictum cubilia, aptent quisque nulla sapien sollicitudin torquent.Ridiculus penatibus vivamus nascetur posuere aliquet pharetra lacinia odio, sed taciti ultricies mus proin velit dui, fermentum mauris tristique suspendisse dictumst euismod morbi. Diam ultricies magnis enim bibendum egestas justo facilisi lacinia laoreet erat praesent iaculis congue vivamus, blandit magna hendrerit cubilia rutrum nullam nisi elementum massa mauris ante urna. Iaculis volutpat mauris',
    icon: <FaLightbulb className="text-[#37D1C5] text-4xl mb-4" />,
    image: image3,
  },
];

export const blogPosts = [
  {
    id: 1,
    title: "Tout savoir sur le TURPE : sa réévaluation au 1er novembre et la préparation du TURPE 7 en cours",
    author:"Oumar Thiombane",
    excerpt: "Lorem ipsum dolor sit amet consectetur, adipiscing elit taciti tortor nisl mi, praesent proin feugiat metus. Enim dictumst senectus conubia venenatis libero donec, dictum suspendisse pulvinar a commodo netus, phasellus primis sodales placerat habitasse. Vivamus nostra maecenas diam faucibus sociis libero convallis, montes ut placerat vulputate sagittis nunc.",
    date: '5 novembre 2024',
    image: image10,
  },
  {
    id: 2,
    title: "Budget 2025 : quelles sont les prévisions pour le secteur de l’énergie qui pourraient impacter les entreprises ?",
    author:"Ousmane Faye",
    excerpt: "Metus potenti morbi enim pellentesque neque tortor pulvinar praesent, primis imperdiet nascetur diam phasellus non est class, varius vestibulum sociis dictum porttitor ante faucibus. Eget suscipit nostra faucibus molestie aliquam mauris mus tortor, tristique scelerisque diam hendrerit luctus dui posuere maecenas magnis, cum erat velit nunc class facilisi nam. Conubia diam vulputate commodo ornare eget suspendisse, sollicitudin potenti class posuere ut, id aliquam pretium velit dis.",
    date: '4 novembre 2024',
    image: image11,
  },
  {
    id: 3,
    title: "Facture d’électricité : vers une augmentation de l’accise de l’électricité en 2025 ?",
    author:"Mamadou Thiam",
    excerpt: "commodo duis lectus integer, phasellus nascetur egestas habitasse ultricies. Litora lectus nec porttitor dictum erat curabitur felis vestibulum nisl, aptent sem cubilia mattis vel nullam mauris phasellus diam arcu, condimentum potenti magnis maecenas pretium quisque ante vivamus.Quisque vehicula fringilla lacus justo sagittis luctus, morbi aliquet curae eleifend. Orci faucibus nascetur cursus venenatis sapien duis dui posuere aliquet habitant commodo penatibus, tellus ac luctus semper ut interdu",
    date: '3 novembre 2024',
    image: image12,
  },
];
