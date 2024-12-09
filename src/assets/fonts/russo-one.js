import { Russo_One } from 'next/font/google';

const russoOne = Russo_One({
  subsets: ['latin', 'cyrillic'], // Указываем нужные наборы символов
  weight: '400',
  variable: '--font-russo-one',
  display: 'swap', // Настраиваем поведение шрифта
});

export default russoOne;
