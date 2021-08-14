// тут буду вести разработу, будет отвечать за само приложение

const fruits = [
  {
    id: 1,
    title: "apple",
    price: 20,
    img: "https://i.picsum.photos/id/170/536/354.jpg?hmac=ydGbmcpKp_TJ4_cyzHb7h7uTOexC2WGfnsKRBdHDreY",
  },
  {
    id: 2,
    title: "orange",
    price: 30,
    img: "https://i.picsum.photos/id/301/536/354.jpg?hmac=c7TLbE2ZxYKeMsss337rx9i7v9NJ9Yd0VVtL4H5PZiE",
  },
  {
    id: 3,
    title: "mango",
    price: 40,
    img: "https://i.picsum.photos/id/842/536/354.jpg?hmac=C3lO3k81X_cC98IXFCcG-3oZpS3hrQlRsIg6CgW2SMo",
  },
];

// $.modal() - вызвать функцию, что бы было видно, что это плагин
// у объекта $ вызывается метод/функция modal()
// так будет создаваться плагин. мы обращаемся к условной библиотеке(в данной ситуации это объект), дальше вызываем функцию modal
const modal = $.modal({
  title: "Modal",
  closable: true,
  content: `
  <p>Modal is working</p>
  <p>Lorem ipsum</p>`,
  width: "400px",
});
