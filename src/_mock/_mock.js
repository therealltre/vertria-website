import { sub } from 'date-fns';
//
import { email } from './email';
import { boolean } from './boolean';
import { phoneNumber } from './phoneNumber';
import { fullAddress, country } from './address';
import { firstName, lastName, fullName } from './name';
import { title, sentence, description } from './text';
import { price, rating, age, percent } from './number';

// ----------------------------------------------------------------------

const _mock = {
  id: (index) => `e99f09a7-dd88-49d5-b1c8-1daf80c2d7b${index + 1}`,
  email: (index) => email[index],
  phoneNumber: (index) => phoneNumber[index],
  time: (index) => sub(new Date(), { days: index, hours: index }),
  boolean: (index) => boolean[index],
 
  address: {
    fullAddress: (index) => fullAddress[index],
    country: (index) => country[index], 
  },
  name: {
    firstName: (index) => firstName[index],
    lastName: (index) => lastName[index],
    fullName: (index) => fullName[index],
  },
  text: {
    title: (index) => title[index],
    sentence: (index) => sentence[index],
    description: (index) => description[index],
  },
  number: {
    percent: (index) => percent[index],
    rating: (index) => rating[index],
    age: (index) => age[index],
    price: (index) => price[index],
  },
  image: {
    cover: (index) => `/assets/images/covers/cover_${index + 1}.jpg`,
    feed: (index) => `/assets/images/feeds/feed_${index + 1}.jpg`,
    product: (index) => `/assets/images/products/product_${index + 1}.jpg`,
    avatar: (index) => `/assets/images/avatars/avatar_${index + 1}.jpg`,
  },
};

export default _mock;
