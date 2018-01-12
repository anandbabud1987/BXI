import I18n from 'react-native-i18n';
import en from '../i18n/en';
import fr from '../i18n/fr';
I18n.fallbacks = true;



I18n.translations = {
  en,
  fr
}
const BiXI18N=(value,language)=>{
  I18n.defaultLocale = "pt-BR";
  I18n.locale = "pt-BR";
  I18n.currentLocale();
  return I18n.t(value, {locale: language});
}
export default BiXI18N;
