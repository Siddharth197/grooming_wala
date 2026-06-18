import puppy1 from '../Image/anjagh-shepherd-dog-4357790_1920.jpg';
import puppy2 from '../Image/chiemsee2024-puppy-1207816_1920.jpg';
import kitten1 from '../Image/congerdesign-kittens-3535404_1920.jpg';
import dog1 from '../Image/danicku-dog-8262506_1920.jpg';
import pet1 from '../Image/gumikutya-pet-10072662_1920.jpg';
import cat1 from '../Image/jaclou-dl-cat-8451431_1920.jpg';
import dog2 from '../Image/melissa197-dog-8781844.jpg';
import pup1 from '../Image/vlaaitje-puppy-1047521_1920.jpg';

const petImages = [
  puppy1,
  puppy2,
  kitten1,
  dog1,
  pet1,
  cat1,
  dog2,
  pup1
];

export function getRandomPetImage() {
  return petImages[Math.floor(Math.random() * petImages.length)];
}

export function getRandomPetImageUrls(count: number) {
  const shuffled = [...petImages]
    .sort(() => Math.random() - 0.5)
    .slice(0, count)
    .map((image) => image.src);
  return shuffled;
}

export const petImageUrls = petImages.map((image) => image.src);
