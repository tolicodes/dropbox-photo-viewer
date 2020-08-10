const faker = require('faker');

export default () => {
    const images = [];
    for (let i = 0; i < 10000; i++) {
        images.push({
            src: faker.image.avatar(),
            thumbnail: faker.image.avatar()
        });
    }
    return images;
};
