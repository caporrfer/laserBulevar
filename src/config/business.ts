export const business = {
  name: 'Láser Bulevar',
  locationLabel: 'Jaén',
  siteUrl: 'https://laserbulevar.com',
  phoneDisplay: '953 10 19 79',
  phoneHref: 'tel:+34953101979',
  whatsappNumber: '34953101979',
  address: {
    street: 'Calle de la Rioja, 9',
    postalCode: '23009',
    city: 'Jaén',
    country: 'ES',
  },
  mapsUrl: 'https://maps.app.goo.gl/t3cWbKxac4SZCpkD8',
  rating: {
    value: '4,4',
    reviews: 11,
    checkedAt: '13 de septiembre de 2026',
  },
  hours: {
    weekdays: '10:00–13:30 · 17:00–21:00',
    saturday: '10:00–13:30',
    sunday: 'Cerrado',
  },
} as const;

export const whatsappLink = (message: string) =>
  `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const defaultWhatsappMessage =
  'Hola, me gustaría pedir información y consultar disponibilidad para una cita.';

export const illustrativePriceNotice =
  'Precio de ejemplo para esta propuesta. Pendiente de confirmación por el centro.';

