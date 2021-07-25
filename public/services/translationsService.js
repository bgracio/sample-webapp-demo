var app = angular.module('TranslationsSrv', []);

var currentLocale = "pt";
var translations = {
   "pt": {
      "student": "Estudante",
      "students": "Estudantes",
      "profile": "Perfil"
   },
   "fr": {
      "student": "Élève",
      "students": "Étudiantes",
      "profile": "Profil"
   },
   "en": {
      "student": "Student",
      "students": "Students",
      "profile": "Profile"
   }
};

app.factory('TranslationsService', () => {
   return {      
      getTranslation: (elem) => {
         var elemTranslation = elem;
         var localeTranslations = this.translations[this.currentLocale];
         
         if (localeTranslations) {
            if(localeTranslations[elem.toLowerCase()]) {
               elemTranslation = localeTranslations[elem.toLowerCase()];
            }
         }
         
         return elemTranslation;
      },

      changeLocale: (locale) => {
         currentLocale = locale;
      }
   }
});