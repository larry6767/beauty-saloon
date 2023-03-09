import type { ResponsiveObject } from 'react-slick'

export const responsive: Array<ResponsiveObject> = [
  {
    breakpoint: 2560,
    settings: {
      centerMode: true,
      slidesToShow: 5,
      slidesToScroll: 3,
      centerPadding: '20px',
    },
  },
  {
    breakpoint: 1024,
    settings: {
      centerMode: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      centerPadding: '20px',
    },
  },
  {
    breakpoint: 768,
    settings: {
      centerMode: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      centerPadding: '10px',
    },
  },
  {
    breakpoint: 425,
    settings: {
      centerMode: true,
      slidesToShow: 1,
      slidesToScroll: 3,
      centerPadding: '10px',
    },
  },
]
