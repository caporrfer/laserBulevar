import type { ImageMetadata } from 'astro';
import laserImage from '@/assets/images/depilacion-laser.png';
import facialImage from '@/assets/images/tratamiento-facial.png';
import corporalImage from '@/assets/images/tratamiento-corporal.png';

export interface Service {
  slug: string;
  navLabel: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  description: string;
  intro: string;
  statement: string;
  price: number;
  unit: string;
  image: ImageMetadata;
  imageAlt: string;
  message: string;
  points: string[];
  questions: Array<{ question: string; answer: string }>;
}

export const services: Service[] = [
  {
    slug: 'depilacion-laser',
    navLabel: 'Láser',
    title: 'Depilación láser en Jaén',
    shortTitle: 'Depilación láser',
    eyebrow: 'Depilación en Jaén',
    description: 'Consulta las opciones de depilación láser disponibles en Láser Bulevar para rostro y cuerpo.',
    intro: 'Indica qué zonas te interesan y te explicaremos las opciones disponibles antes de la primera sesión.',
    statement: 'Para rostro y cuerpo.',
    price: 15,
    unit: '/ sesión',
    image: laserImage,
    imageAlt: 'Fotografía editorial creada con IA de una sesión de depilación láser en una pierna adulta',
    message: 'Hola, me gustaría información sobre depilación láser y disponibilidad para una cita.',
    points: ['Rostro y cuerpo', 'Mujeres y hombres', 'Consulta personalizada'],
    questions: [
      {
        question: '¿Qué zonas se pueden consultar?',
        answer: 'Puedes preguntar por zonas faciales y corporales. Al contactar, indica qué áreas te interesan para recibir información concreta y actualizada.',
      },
      {
        question: '¿Cuántas sesiones necesitaré?',
        answer: 'Depende de la zona, el tipo de piel y el vello. El centro podrá orientarte después de conocer tu caso.',
      },
      {
        question: '¿Cómo pido una cita?',
        answer: 'Escribe por WhatsApp o llama al 953 10 19 79. La cita se acuerda directamente con el centro.',
      },
    ],
  },
  {
    slug: 'tratamientos-faciales',
    navLabel: 'Facial',
    title: 'Tratamientos faciales en Jaén',
    shortTitle: 'Cuidado facial',
    eyebrow: 'Tratamientos faciales',
    description: 'Consulta las opciones faciales disponibles en Láser Bulevar según lo que quieras tratar.',
    intro: 'Cuéntanos qué buscas para tu piel y te explicaremos las opciones actuales antes de la cita.',
    statement: 'Cuidado facial.',
    price: 45,
    unit: '/ sesión',
    image: facialImage,
    imageAlt: 'Fotografía editorial creada con IA de un bodegón de cuidado facial con un frasco sin marca',
    message: 'Hola, me gustaría información sobre tratamientos faciales y disponibilidad para una cita.',
    points: ['Cuidado personalizado', 'Opciones no invasivas', 'Consulta previa'],
    questions: [
      {
        question: '¿Qué tratamientos faciales ofrecéis?',
        answer: 'La oferta puede cambiar. Contacta con el centro para conocer las opciones disponibles en este momento.',
      },
      {
        question: '¿Cómo sé qué opción me conviene?',
        answer: 'Explica cómo notas tu piel y qué te gustaría mejorar. El centro podrá orientarte antes de concertar una cita.',
      },
      {
        question: '¿Cómo consulto precio y disponibilidad?',
        answer: 'Puedes escribir por WhatsApp o llamar al 953 10 19 79 para recibir información actualizada.',
      },
    ],
  },
  {
    slug: 'tratamientos-corporales',
    navLabel: 'Corporal',
    title: 'Tratamientos corporales en Jaén',
    shortTitle: 'Cuidado corporal',
    eyebrow: 'Tratamientos corporales',
    description: 'Consulta las opciones corporales disponibles en Láser Bulevar según la zona o el objetivo que tengas.',
    intro: 'Indica qué zona te interesa y el centro te dirá qué opciones tiene disponibles.',
    statement: 'Cuidado corporal.',
    price: 35,
    unit: '/ sesión',
    image: corporalImage,
    imageAlt: 'Fotografía editorial creada con IA de un hombro adulto cubierto con una bata de lino',
    message: 'Hola, me gustaría información sobre tratamientos corporales y disponibilidad para una cita.',
    points: ['Consulta por objetivos', 'Cuidado a medida', 'Atención directa'],
    questions: [
      {
        question: '¿Qué tratamientos corporales están disponibles?',
        answer: 'La oferta actual debe confirmarse con el centro. Puedes explicar qué buscas para recibir información sobre las opciones disponibles.',
      },
      {
        question: '¿Necesito saber qué tratamiento quiero?',
        answer: 'No. Basta con contar qué zona o aspecto del cuidado corporal te interesa para que puedan orientarte.',
      },
      {
        question: '¿Cómo concertamos la visita?',
        answer: 'Escribe por WhatsApp o llama al centro. Te confirmarán directamente el horario disponible.',
      },
    ],
  },
];

export const getService = (slug: string) =>
  services.find((service) => service.slug === slug)!;

