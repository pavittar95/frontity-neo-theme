const settings = {
  name: "blog",
  state: {
    frontity: {
      url: "https://test.frontity.org",
      title: "Test Frontity Blog",
      description: "WordPress installation for Frontity development",
    },
  },
  packages: [
    {
      name: "neo-theme",
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          api: "https://jsnation2020.frontity.org/wp-json",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;

// {
//   "name": "@frontity/mars-theme",
//   "state": {
//     "theme": {
//       "menu": [
//         [
//           "Home",
//           "/"
//         ],
//         [
//           "Nature",
//           "/category/nature/"
//         ],
//         [
//           "Travel",
//           "/category/travel/"
//         ],
//         [
//           "Japan",
//           "/tag/japan/"
//         ],
//         [
//           "About Us",
//           "/about-us/"
//         ]
//       ],
//       "featured": {
//         "showOnList": false,
//         "showOnPost": false
//       }
//     }
//   }
// }
