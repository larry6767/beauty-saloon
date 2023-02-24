import imgUnavailabe from '/src/components/sections/Promotions/img-unavailabe.png'

export const testContent = {
  img: imgUnavailabe,
  header: 'Lorem ipsum dolor sit',
  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  date: '1 декабря 2020',
}

export const promotionsContent = [
  {
    date: testContent.date,
    header: testContent.header,
    image: {
      src: testContent.img,
      alt: 'A',
    },
    text: 'A' + testContent.text,
  },
  {
    date: testContent.date,
    header: testContent.header,
    image: {
      src: testContent.img,
      alt: 'B',
    },
    text: 'B' + testContent.text,
  },
  {
    date: testContent.date,
    header: testContent.header,
    image: {
      src: testContent.img,
      alt: 'C',
    },
    text: 'C' + testContent.text,
  },
  {
    date: testContent.date,
    header: testContent.header,
    image: {
      src: testContent.img,
      alt: 'D',
    },
    text: 'D' + testContent.text,
  },
]
