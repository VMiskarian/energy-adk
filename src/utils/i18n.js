import ru from './ru.json';
import uz from './uz.json';

const translations = { ru, uz };

export default function getTranslation(locale) {
  return translations[locale] || translations.ru;
}
