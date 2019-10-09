
const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');

const JPEGImages = '../src/assets/*.jpg';
const PNGImages = '../src/assets/*.png';
const output = '../dist/images';

imagemin([JPEGImages, PNGImages], {
  destination: output,
  plugins: [
    imageminMozjpeg({
      quality: 66,
      // progressive: true //是否生成渐进式jpg
    }),
    imageminPngquant({ 
      quality: [0.65, 0.8] 
    })
  ]
});

// imagemin([PNGImages], {
//   destination: output,
//   plugins: [
//     imageminPngquant({ 
//       quality: [0.6, 0.8] 
//     })
//   ],
// });
