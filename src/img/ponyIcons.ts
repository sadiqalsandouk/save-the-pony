import { applejackImage, twilightsparkleImage, fluttershyImage, rainbowdashImage, rarityImage } from '../img/index';

interface PonyImages {
    [key: string]: string;
  }

export const ponyImages: PonyImages = {
  Applejack: applejackImage,
  Fluttershy: fluttershyImage,
  'Twilight Sparkle': twilightsparkleImage,
  'Rainbow Dash': rainbowdashImage,
  Rarity: rarityImage,
};
