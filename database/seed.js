const db = require('./index.js');
const Image = require('./image.js');

const samples = [];
for (let i = 1; i <= 100; i += 1) {
  const image = {
    listing_id: i,
    images: [],
  };
  for (let j = 0; j < 20; j += 1) {
    if (j === 0) {
      image.images.push('https://loremflickr.com/g/1200/900/house,exterior/all');
    } else {
      image.images.push('https://loremflickr.com/g/1200/900/house,interior/all');
    }
  }
  samples.push(image);
}

const insertImages = () => {
  Image.create(samples).then(() => db.disconnect());
};

insertImages();
