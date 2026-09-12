import type { ImageMetadata } from 'astro';
import laserImage from '@/assets/images/depilacion-laser.png';
import facialImage from '@/assets/images/tratamiento-facial.png';
import corporalImage from '@/assets/images/hero-piel.png';

export interface Service {
  slug: string;
  navLabel: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  description: string;
  intro: string;
  statement: string;
  image: ImageMetadata;
  imageAlt: string;
  message: string;
  highlights: Array<{ number: string; title: string; text: string }>;
  questions: Array<{ question: string; answer: string }>;
}

export const services: Service[] = [
  {
    slug: 'depilacion-laser',
    navLabel: 'Depilación láser',
    title: 'Depilación láser en Jaén',
    shortTitle: 'Depilación láser',
    eyebrow: 'Para mujeres y hombres',
    description: 'Información sobre depilación láser en Láser Bulevar, Jaén. Consulta zonas, disponibilidad y pide cita por WhatsApp o teléfono.',
    intro: 'Una opción para quienes buscan reducir el tiempo dedicado a la depilación y cuidar su piel con un seguimiento adaptado a cada caso.',
    statement: 'Menos rutina. Más tiempo para ti.',
    image: laserImage,
    imageAlt: 'Imagen editorial de una sesión de depilación láser en las piernas',
    message: 'Hola, me gustaría información sobre depilación láser y disponibilidad para una cita.',
    highlights: [
      { number: '01', title: 'Cuéntanos qué buscas', text: 'Indica las zonas que te interesan y cualquier duda que quieras resolver antes de empezar.' },
      { number: '02', title: 'Consulta tu caso', text: 'El centro te informará sobre disponibilidad y sobre el enfoque adecuado para tus necesidades.' },
      { number: '03', title: 'Organiza tu cita', text: 'Contacta por WhatsApp o por teléfono para acordar el momento que mejor te venga.' },
    ],
    questions: [
      { question: '¿La depilación láser es para mujeres y hombres?', answer: 'Sí. Puedes consultar opciones para distintas zonas corporales y faciales, tanto para mujeres como para hombres.' },
      { question: '¿Cuántas sesiones voy a necesitar?', answer: 'El número de sesiones depende de factores individuales y de la zona. El centro podrá orientarte después de conocer tu caso.' },
      { question: '¿Puedo conocer el precio antes de pedir cita?', answer: 'Sí. Escribe por WhatsApp o llama al centro e indica las zonas que te interesan para recibir información actualizada.' },
      { question: '¿Cómo preparo mi primera visita?', answer: 'Pregunta al centro al reservar. Así recibirás indicaciones adecuadas para tu cita y para la zona que quieras tratar.' },
    ],
  },
  {
    slug: 'tratamientos-faciales',
    navLabel: 'Facial',
    title: 'Tratamientos faciales en Jaén',
    shortTitle: 'Cuidado facial',
    eyebrow: 'Tu piel, tu momento',
    description: 'Descubre el cuidado facial de Láser Bulevar en Jaén y consulta qué opción puede encajar con las necesidades de tu piel.',
    intro: 'El cuidado facial empieza por entender cómo está tu piel y qué te gustaría mejorar. Consúltanos para conocer las opciones disponibles.',
    statement: 'Una pausa para escuchar a tu piel.',
    image: facialImage,
    imageAlt: 'Imagen editorial de un tratamiento facial con aplicación de crema',
    message: 'Hola, me gustaría información sobre tratamientos faciales y disponibilidad para una cita.',
    highlights: [
      { number: '01', title: 'Escucha a tu piel', text: 'Cuéntanos qué notas y qué objetivo de cuidado tienes en mente.' },
      { number: '02', title: 'Conoce las opciones', text: 'Consulta los tratamientos faciales disponibles y resuelve tus dudas directamente con el centro.' },
      { number: '03', title: 'Reserva tu momento', text: 'Elige WhatsApp o teléfono para informarte y organizar tu visita.' },
    ],
    questions: [
      { question: '¿Qué tratamientos faciales ofrecéis?', answer: 'La oferta puede cambiar. Contacta con el centro para conocer las opciones disponibles actualmente y recibir información adecuada a lo que buscas.' },
      { question: '¿Cómo sé qué cuidado me conviene?', answer: 'Cuéntanos cómo sientes tu piel y qué objetivo tienes. El centro podrá explicarte las alternativas disponibles antes de reservar.' },
      { question: '¿Se publican precios en la web?', answer: 'No. Para disponer de precios y disponibilidad actualizados, puedes escribir por WhatsApp o llamar al centro.' },
      { question: '¿Puedo regalar un tratamiento?', answer: 'Consulta directamente con el centro para saber qué opciones están disponibles en este momento.' },
    ],
  },
  {
    slug: 'tratamientos-corporales',
    navLabel: 'Corporal',
    title: 'Tratamientos corporales en Jaén',
    shortTitle: 'Cuidado corporal',
    eyebrow: 'Bienestar a tu medida',
    description: 'Información sobre tratamientos corporales en Láser Bulevar, Jaén. Consulta opciones y disponibilidad por WhatsApp o teléfono.',
    intro: 'Un espacio para dedicarte tiempo y conocer distintas opciones de cuidado corporal según lo que estés buscando.',
    statement: 'Cuidarte también forma parte del día.',
    image: corporalImage,
    imageAlt: 'Retrato editorial que representa el cuidado de la piel corporal',
    message: 'Hola, me gustaría información sobre tratamientos corporales y disponibilidad para una cita.',
    highlights: [
      { number: '01', title: 'Define tu objetivo', text: 'Cuéntanos qué zona o aspecto del cuidado corporal te interesa.' },
      { number: '02', title: 'Infórmate', text: 'Pregunta por las opciones disponibles y por cualquier consideración antes de tu visita.' },
      { number: '03', title: 'Encuentra tu horario', text: 'Consulta la agenda del centro por WhatsApp o teléfono y acuerda tu cita.' },
    ],
    questions: [
      { question: '¿Qué tratamientos corporales están disponibles?', answer: 'Contacta con el centro para conocer la oferta actual. Así evitamos mostrar técnicas o equipos que puedan haber cambiado.' },
      { question: '¿Necesito saber qué tratamiento quiero?', answer: 'No es necesario. Puedes explicar qué buscas y pedir información sobre las opciones que ofrece actualmente el centro.' },
      { question: '¿Dónde se realizan las citas?', answer: 'En Láser Bulevar, Calle de la Rioja, 9, 23009 Jaén.' },
      { question: '¿Cómo consulto precios?', answer: 'Escribe por WhatsApp o llama al 953 10 19 79 para solicitar información actualizada.' },
    ],
  },
];

export const getService = (slug: string) => services.find((service) => service.slug === slug)!;
