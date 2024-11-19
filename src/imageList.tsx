
const imagesAliShopping = import.meta.glob<{ default: string }>('./assets/alishopping_images/*.jpg', { eager: true });
const imagesMySocialMedia = import.meta.glob<{ default: string }>('./assets/mySocialMedia_images/*.{png,PNG}', { eager: true });
const imagesMyChatApp = import.meta.glob<{ default: string }>('./assets/myChatApp_images/*.jpg', { eager: true });


export const alishopping_images = Object.values(imagesAliShopping).map((module) => module.default);
export const mySocialMedia_images = Object.values(imagesMySocialMedia).map((module) => module.default);
export const myChatApp_images = Object.values(imagesMyChatApp).map((module) => module.default);


