require('./index.js');
const Faker = require('faker');
const mongoose = require('mongoose');
const Image = require('./image.js');

const samples = [];

for (let i = 1; i <= 100; i += 1) {
  const image = {
    listing_id: i,
    images: [],
    descriptions: [],
  };
  for (let j = 0; j < 20; j += 1) {
    const description = Faker.lorem.sentence();
    if (j === 0) {
      image.images.push('https://loremflickr.com/g/1200/900/house,exterior/all');
      image.descriptions.push(description);
    } else {
      image.images.push('https://loremflickr.com/g/1200/900/house,interior/all');
      image.descriptions.push(description);
    }
  }
  samples.push(image);
}

const insertImages = () => {
  Image.create(samples).then(() => mongoose.disconnect());
};

insertImages();
