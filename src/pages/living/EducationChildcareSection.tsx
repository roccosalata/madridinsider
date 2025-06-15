import React from "react";
import { directoryData } from "@/data/directoryData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MapPin, Globe, Mail, FileText, Calendar, Clock } from "lucide-react";

const educationChildcareData = directoryData['living-in-madrid']?.['education-childcare'];
const studentLifeData = directoryData['living-in-madrid']?.['student-life'];

const bilingualSchools = [
  {
    name: "American School of Madrid",
    address: "Carretera de Humera, Km 2, 28023 Aravaca, Madrid",
    phone: "917-401-900"
  },
  {
    name: "British Institute School",
    address: "Martinez Campos, 31, 28010 Madrid",
    phone: "913-373-596"
  },
  {
    name: "Colegio Everest",
    address: "Urb. Monteclaro, Ctra. Pozuelo-Majadahonda, 28223 Madrid",
    phone: "917-994-899"
  },
  {
    name: "Hastings Infant School",
    address: "Paseo de la Habana, 204, 28036 Madrid",
    phone: "913-590-621"
  },
  {
    name: "Numont P.N.E.U. Madrid",
    address: "Parma, 16, 28043 Madrid",
    phone: "913-002-431"
  },
  {
    name: "Hastings Junior & Secondary School",
    address: "Azulinas, 8, 28036 Madrid",
    phone: "913-599-913"
  },
  {
    name: "Runnymede College",
    address: "Salvia, 30, La Moraleja, Alcobendas, 28109 Madrid",
    phone: "916-508-302"
  },
  {
    name: "St. Charles College",
    address: "Guadalquivir, 16, 28002 Madrid",
    phone: "915-634-078"
  },
  {
    name: "St. Michael's School",
    address: "Avda. Victoria, 96, 28023 Madrid",
    phone: "913-077-174"
  },
  {
    name: "St. Anne's School",
    address: "Pinar, 22, 28006 Madrid",
    phone: "915-612-717"
  },
  {
    name: "St. Anne's Kindergarten & Junior School",
    address: "Alfonso XIII, 162, 28016 Madrid",
    phone: "913-459-060"
  },
  {
    name: "International Primary School",
    address: "Rosa Jardon, 3, 28016 Madrid",
    phone: "913-592-121"
  },
  {
    name: "Kensington School (Bilingual)",
    address: "Avda. de Bularas, 2, Los Alamos de Bularas, Pozuelo de Alarcón, 28224 Madrid",
    phone: "917-154-797"
  },
  {
    name: "King's College: The British School of Madrid",
    address: "Ada del los Andes, 35 Soto de Viñuelas, 28761 Madrid",
    phone: "918-034-800",
    website: "www.kingsgroup.org"
  },
  {
    name: "English Montessori School",
    address: "Avda. de la Salle, s/n, 28023 Madrid",
    phone: "913-572-667"
  },
  {
    name: "King's Infant School",
    address: "Prieto Ureña, 9 - 11, Chamartín, 28016 Madrid",
    phone: "913-505-843",
    website: "www.kingsgroup.org"
  },
  {
    name: "International College in Spain",
    address: "Vereda Norte, 3, La Moraleja, Alcobendas, 28109 Madrid",
    phone: "916-502-398"
  },
  {
    name: "King's College School",
    address: "Paseo de Alcobendas, 5, La Moraleja, 28109 Madrid",
    phone: "916-585-540",
    website: "www.kingsgroup.org"
  },
  {
    name: "Study Center Foundation",
    address: "Valentin Robledo, 2, Pozuelo de Alarcon, 28224 Madrid",
    phone: "917-155-138"
  }
];

const teacherTrainingCenters = [
  {
    name: "EBC Int. TEFL Certificate",
    address: "Orense, 16, 2-E (Metro: Santiago Bernabeu)",
    phone: "915-553-975",
    fax: "770-21-12",
    website: "www.ebc-tefl-course.com",
    email: "tefl@ebcidiomas.com",
    description: "The EBC International TEFL Certificate qualifies you to teach English as a foreign language to business professionals, adults and younger people. Come and join us in our teaching adventure: study abroad, work abroad, teach abroad."
  },
  {
    name: "Canterbury",
    address: "Augusto Figueroa, 47, 1, 1 (Metro: Gran Via)",
    phone: "915-229-898",
    website: "www.canterburyenglish.com",
    email: "canterbury@canterburyenglish.com",
    description: "Canterbury English is a professional association of professors and students from all over the world. Canterbury English will provide successful graduates of our program the possibility of working up to 20-25 hours/week teaching English, if they so desire. Utilizing \"FLEX\" scheduling, Canterbury accommodates the needs of our participants and provides them with the maximum flexibility necessary to balance their time between studying, traveling, and working."
  }
];

const teacherTrainingResources = [
  "www.windsorschools.co.uk/tefl_tesol_madrid.html",
  "www.oxfordtefl.com",
  "www.ihmadrid.com/english.htm",
  "www.cactuslanguage.com",
  "www.eslcafe.com",
  "www.marksesl.com",
  "www.expatriatecafe.com",
  "www.eslteachersboard.com",
  "www.spainexchange.com",
  "www.goabroad.com",
  "www.tefl.com",
  "www.eviews.net/references.html"
];

const languageSchools = [
  {
    name: "Academia Contacto",
    address: "Mayor, 18, 5 Izqda. (Metro: Sol)",
    phone: "913-642-454",
    website: "www.academiacontacto.com",
    email: "hola@academiacontacto.com"
  },
  {
    name: "AIL Madrid - Academia Internacional de Lenguas",
    address: "Nuñez de Balboa 17, 2ºD",
    phone: "917-256-350",
    website: "www.ailmadrid.com/spanish-courses/spanish_courses"
  },
  {
    name: "ACE, Corporate Language Training",
    phone: "913-530-045",
    email: "ace.informacion@oise.com"
  },
  {
    name: "Acento Español",
    address: "Mayor, 4, 6-9 (Metro: Sol)",
    phone: "915-213-676",
    fax: "915-317-112",
    website: "www.acentoespanol.com",
    email: "info@acentoespanol.com"
  },
  {
    name: "Actual Plus School",
    address: "Gran Via, 71, 1 (Metro: Plaza España)",
    phone: "915-475-608"
  },
  {
    name: "Advanced Institute",
    address: "Fernandez de los Ríos, 75 (Metro: Arguelles / Moncloa / Islas Filipinas)",
    phone: "915-431-992"
  },
  {
    name: "Alba Language Consulting",
    address: "Av. Pio XII",
    phone: "913-596-016 / 607-645-086",
    website: "www.albalanguage.com",
    email: "info@albalanguage.com"
  },
  {
    name: "Alea Idiomas",
    address: "Alfonso XII, 24, B dcha (Metro: Retiro / Atocha Renfe)",
    phone: "915-240-800"
  },
  {
    name: "American Language Academy",
    address: "Rodriguez San Pedro, 2 6 PL. OF. 9 (Metro: San Bernardo / Quevedo)",
    phone: "914-453-196 / 914-455-511 / 914-455-800",
    website: "www.americanlanguage.es",
    email: "ala@americanlanguage.es"
  },
  {
    name: "Arriba",
    address: "Gran Vía, 68 5-A (Metro: Plaza España)",
    phone: "915-475-608",
    fax: "915-479-471",
    email: "aarriba@ctv.es"
  },
  {
    name: "Aula Cero",
    address: "Emilio Jimenez Millas, 2, 6-B (Metro: Plaza de España)",
    phone: "915-424-285",
    website: "www.aulacero.com",
    email: "aulacero@retemail.es"
  },
  {
    name: "Bridge-Linguatec",
    address: "Serrano, 4 (Metro: Retiro / Serrano)",
    phone: "1-800-724-4210 (USA)",
    website: "www.bridgelinguatec.com",
    email: "admissions@bridgelinguatec.com"
  },
  {
    name: "C.E.E. Idiomas",
    address: "Carmen, 6 (Metro: Sol)",
    phone: "915-220-472 / 915-211-004 / 915-221-857 / 915-313-854",
    email: "cee1@arrakis.es"
  },
  {
    name: "C.P.I. Idiomas",
    address: "Puerta del Sol, 4, 5-A (Metro: Sol)",
    phone: "917-010-618",
    website: "www.cpi-vamos.com"
  },
  {
    name: "Canterbury English / Garcia Lorca",
    address: "Augosto Figueroa (Metro: Chueca)",
    website: "www.canterburyenglish.com"
  },
  {
    name: "Carpe Diem",
    address: "Fuencarral, 13, 1 (Metro: Gran Via)",
    phone: "915-223-122",
    fax: "915-328-509",
    website: "www.carpemadrid.com",
    email: "info@carpemadrid.com"
  },
  {
    name: "Centro de Lenguage Ortega y Gasset",
    address: "José Ortega y Gasset, 86, 4 Dcha (Metro: Lista)",
    phone: "914-010-317 / 914-029-018",
    email: "cogasset@wanadoo.es"
  },
  {
    name: "Ceran Lingua International",
    phone: "958-228-172",
    website: "www.ceran.com",
    email: "customer@ceran.com"
  },
  {
    name: "Club Ivy",
    address: "Monte Esquinza, 26-28 (Metro: Alonso Martinez)",
    phone: "913-191-107 / 913-191-075",
    email: "ematamoros@clubivy.com"
  },
  {
    name: "Culturesp",
    address: "Puerto Rico, 11 (Metro: Colombia)",
    phone: "619-343-081",
    website: "www.culturesp.com",
    email: "culturesp@culturesp.com"
  },
  {
    name: "Don Quijote",
    address: "Virgen de los peligros, 9, 1º (Metro: Gran Via)",
    phone: "923-27-72-00",
    website: "www.donquijote.org"
  },
  {
    name: "EBC Idiomas",
    address: "Juan Hurtado de Mendoza, 5 6-D (Metro: Cuzco)",
    phone: "915-553-975",
    fax: "770-21-12",
    website: "www.ebcidiomas.com",
    email: "ebc@ebcidiomas.com"
  },
  {
    name: "Elemadrid",
    address: "Serrano, 4 (Metro: Retiro / Serrano)",
    phone: "914-324-540",
    website: "www.elemadrid.com",
    email: "email@elemadrid.com"
  },
  {
    name: "Emerson Languages",
    address: "Plaza Bami 1, 28017, Madrid",
    phone: "91-404-12-90",
    website: "www.emersonlanguages.com"
  },
  {
    name: "Enforex Spanish Language Schools",
    address: "Alberto Aguilera, 26 (Metro: San Bernardo)",
    phone: "915-943-776",
    website: "www.enforex.com",
    email: "spanish@enforex.es"
  },
  {
    name: "Escuela Garrigó",
    address: "Principe, 8 3 Izqda. (Metro: Sol / Sevilla)",
    phone: "915-599-578 / 609-144-608"
  },
  {
    name: "Escuela Internacional",
    address: "Talamanca, 10 (Alcalá de Henares (Madrid))",
    phone: "918-831-264"
  },
  {
    name: "Escuela Oficial de Idiomas",
    address: "Jesus Maestro, s/n (Metro: Guzman el Bueno)",
    phone: "915-544-561"
  },
  {
    name: "Eureka, Academia de Español",
    address: "Arenal, 26 3-D (Metro: Sol / Opera)",
    phone: "915-488-640",
    fax: "915-482-580",
    website: "www.eureka-madrid.com",
    email: "eureka@eureka-madrid.com"
  },
  {
    name: "Formula Sí",
    address: "Velázquez, 3, 1 (Metro: Retiro / Velázquez)",
    phone: "915-767-453",
    fax: "915-773-655",
    website: "www.formula-si.com",
    email: "info@formula-si.com"
  },
  {
    name: "Goethe Institut",
    address: "Zurbaran, 21 (Metro: Alonso Martinez)",
    phone: "913-913-944"
  },
  {
    name: "Hispania Center",
    address: "Carretas, 14, 4-B (Metro: Sol)",
    phone: "915-231-493"
  },
  {
    name: "Hyland Language Centre",
    address: "Serrano, 19 (Metro: Colon)",
    phone: "914-319-757"
  },
  {
    name: "Iberenglish",
    address: "Mundillo, 3 (Metro: Valdeacederas)",
    phone: "619-453-215 / 913-152-143",
    website: "www.iberenglish.com",
    email: "info@iberenglish.com"
  },
  {
    name: "Idioma Fluido",
    phone: "915-430-993 / 669-154-325",
    email: "idiomafluido@hotmail.com"
  },
  {
    name: "Idiomas Seif",
    address: "Gran Via, 50, 1-Izq. (Metro: Callao / Santo Domingo)",
    phone: "91-548-7592",
    email: "idiomasseif@telefonica.net"
  },
  {
    name: "InHispania",
    address: "Montera, 10-12 1-1 (Metro: Sol / Gran Vía)",
    phone: "915-212-231",
    website: "www.inhispania.com",
    email: "info@inhispania.com"
  },
  {
    name: "Instituto Britanico",
    address: "Miguel Angel, 1 Dpdo (Metro: Ruben Dario)",
    phone: "913-373-501"
  },
  {
    name: "Institut Francais",
    address: "Marques de la Ensenada, 12 (Metro: Alonso Martinez)",
    phone: "917-004-800"
  },
  {
    name: "Instituto Hernán Cortés",
    address: "Díez Porlier, 41",
    phone: "915-634-601"
  },
  {
    name: "International House",
    address: "Zurbano, 8 (Metro: Alonso Martinez)",
    phone: "913-101-314",
    website: "www.ihmadrid.com",
    email: "spanish@ihmadrid.com"
  },
  {
    name: "Language Destinations",
    address: "Serrano (Metro: Gregorio Marañon)",
    phone: "915-046-932 / 660-635-509",
    email: "info@languagedestinations.com"
  },
  {
    name: "Language Studies International",
    address: "Luchana, 31, 1 (Metro: Bilbao)",
    phone: "914-460-999",
    website: "www.lsi.edu",
    email: "mad@lsi.edu"
  },
  {
    name: "Madrid University / Spanish Courses",
    address: "Calle de los Pirineos, 55, 28040 Madrid",
    phone: "(+34) 952-222-998",
    website: "http://www.madrid-university.es/",
    email: "info@madrid-university.es"
  },
  {
    name: "O.I.S.E, Español intensivo",
    address: "Juan Hurtado de Mendoza 17 Posterior",
    phone: "913-530-045",
    website: "www.oise-intensive-spanish.com",
    email: "madrid@oise.com"
  },
  {
    name: "One to One",
    address: "Tutor, 25 (Metro: Plaza España)",
    phone: "915-593-129 / 915-593-567",
    website: "www.es-onetoone.com",
    email: "onetoone@es-onetoone.com"
  },
  {
    name: "Paraninfo",
    address: "Princesa, 70 (Metro: Arguelles)",
    phone: "915-433-139",
    website: "www.paraninfo.com/spanish_for_foreigners_in_madrid",
    email: "paraninfo@paraninfo.com"
  },
  {
    name: "Plus Idiomas",
    address: "Arenal, 21, 6 (Metro: Sol / Opera)",
    phone: "915-481-116",
    website: "www.madridplus.es",
    email: "info@madridplus.es"
  },
  {
    name: "Sí.la.bas",
    address: "Cardenal Cisneros, 82 (Metro: Quevedo / Iglesia / Canal)",
    phone: "915-939-066",
    website: "www.academiasilabas.com",
    email: "silabas@inicia.es"
  },
  {
    name: "Spanish in the World",
    address: "Baltasar Gracián, 4 (Metro: San Bernardo)",
    phone: "915-943-776",
    website: "www.spanishintheworld.com",
    email: "info@spanishintheworld.com"
  },
  {
    name: "Spanish for Foreigners",
    phone: "616-554-966 / 914-026-855",
    email: "nacho@interlink.es"
  },
  {
    name: "Tandem",
    address: "Marqués de Cubas, 8",
    phone: "915-322-715",
    website: "www.tandem-madrid.com",
    email: "info@tandem-madrid.com"
  },
  {
    name: "Todo Espanol",
    address: "Gral Diaz Porlier, 1 (Metro: Goya)",
    phone: "914-354-238"
  },
  {
    name: "Versus Hispania",
    address: "Paseo de la Chopera, 311 porterior, local 3 (Alcobendas)",
    phone: "917-738-302 / 914-841-727 / 669-586-954 / 636-053-913",
    website: "www.versushispania.com",
    email: "versus@versushispania.com"
  }
];

const languageSchoolResources = [
  "www.boalingua.com/learn-spanish-in-spain.htm",
  "www.cervantes.es"
];

const libraries = [
  { name: "Acuña", address: "Calle Quintana 9, MADRID", phone: "91 541 36 19" },
  { name: "Aluche", address: "Calle Camarera 10, MADRID", phone: "91 719 89 96" },
  { 
    name: "Biblioteca Nacional", 
    address: "Paseo Recoletos 20, MADRID", 
    phone: "91 580 78 00",
    website: "www.bne.es",
    email: "webmaster@bne.es"
  },
  { name: "Buenavista", address: "Avenida de los Toreros 5, MADRID", phone: "91 361 42 68" },
  { name: "Canillejas", address: "Calle Musas 11, MADRID", phone: "91 741 18 60" },
  { name: "Canillejas", address: "Calle Boltaña 27, MADRID", phone: "91 588 80 89" },
  { name: "Carabanchel", address: "Calle Hermanos del Moral 15, MADRID", phone: "91 472 60 64" },
  { name: "Central", address: "Calle Conde Duque 9, MADRID", phone: "91 588 57 15" },
  { name: "Central", address: "Calle Felipe el Hermoso 4, MADRID", phone: "91 445 97 82" },
  { name: "Chamartín", address: "Calle Mantuano 51, MADRID", phone: "91 416 67 85" },
  { name: "Ciudad Lineal", address: "Calle Hermanos García Noblejas 2, MADRID", phone: "91 588 75 66" },
  { name: "Concha Espina", address: "Calle Núñez de Balboa 95, MADRID", phone: "91 435 94 70" },
  { name: "Eugenia del Montijo", address: "Calle Eugenia de Montijo 105, MADRID", phone: "91 508 80 15" },
  { name: "Fuencarral - Rafael Alberti", address: "Calle Sangenjo 36, MADRID", phone: "91 731 95 52" },
  { name: "Hortaleza", address: "Calle Abertura s/n, MADRID", phone: "91 763 09 31" },
  { name: "Huerta de la Salud", address: "Calle Mar de las Antillas 9, MADRID", phone: "91 764 52 43" },
  { name: "Islas Filipinas", address: "Calle Nuestra Señora del Valle 2, MADRID", phone: "91 403 63 22" },
  { name: "Latina - Antonio Mingote", address: "Avenida Rafael Finat 51, MADRID", phone: "91 509 36 25" },
  { name: "Mateo Inurria", address: "Calle Manuel Ferrero 1, MADRID", phone: "91 350 31 50" },
  { name: "Menéndez Pelayo", address: "Plaza América Española 2, MADRID", phone: "91 725 57 01" },
  { name: "Moratalaz", address: "Calle Corregidor Alonso Tobar s/n, MADRID", phone: "91 439 46 88" },
  { name: "Moratalaz", address: "Plaza Corregidor Alonso de Aguilar 8, MADRID", phone: "91 437 65 65" },
  { name: "Orcasitas", address: "Avenida Rafaela Ibarra s/n, MADRID", phone: "91 341 68 26" },
  { name: "Orcasur", address: "Plaza del Pueblo 2, MADRID", phone: "91 317 86 45" },
  { name: "Pan Bendito", address: "Camino Viejo de Leganés 188, MADRID", phone: "91 560 05 90" },
  { name: "Pedro Salinas", address: "Glorieta Puerta de Toledo 1, MADRID", phone: "91 366 54 07" },
  { name: "Pío Baroja", address: "Calle Arganda 12, MADRID", phone: "91 474 16 03" },
  { name: "Portazgo", address: "Calle Risco de Peloche 14, MADRID", phone: "91 478 21 82" },
  { name: "Pozo del Tío Raimundo", address: "Avenida Las Glorietas 19, MADRID", phone: "91 507 07 34" },
  { name: "Retiro", address: "Calle Doctor Esquerdo 189, MADRID", phone: "91 501 91 46" },
  { name: "Ruiz Egea", address: "Calle Raimundo Fernández Villaverde 6, MADRID", phone: "91 534 90 29" },
  { name: "Salamanca", address: "Calle Azcona 42, MADRID", phone: "91 726 37 01" },
  { name: "San Blas", address: "Calle Arcos de Jalón 20, MADRID", phone: "91 306 56 41" },
  { name: "Tetuán", address: "Calle Viña Virgen 2, MADRID", phone: "91 588 66 36" },
  { name: "Usera", address: "Paseo Santa María de la Cabeza 115, MADRID", phone: "91 792 43 27" },
  { name: "Vaguada", address: "Avenida Monforte de Lemos 36, MADRID", phone: "91 588 68 91" },
  { name: "Vallecas", address: "Calle Puerto Monasterio 1, MADRID", phone: "91 588 60 51" },
  { name: "Vallecas", address: "Calle Extremeños 5, MADRID", phone: "91 303 31 95" },
  { name: "Vallecas Villa", address: "Calle Monte Aya 12, MADRID", phone: "91 777 13 96" },
  { name: "Vicálvaro", address: "Calle Villardondiego 36, MADRID", phone: "91 776 82 11" }
];

const languageExchangeVenues = [
  {
    name: "Café Madrid",
    address: "Escalinata, s/n (Metro: Opera)",
    schedule: "Weds: 9:30pm"
  },
  {
    name: "J&J Books and Coffee",
    address: "Espiritu Santo, 47 (Metro: Noviciado)",
    schedule: "Weds - Thurs: 8pm",
    website: "www.jandjbooksandcoffee.com",
    phone: "91 521 8576"
  },
  {
    name: "Molly Malone's",
    address: "Manuela Malasaña, 11 (Metro: Bilbao)",
    schedule: "Sat: 9:30pm",
    phone: "91 594 1635"
  },
  {
    name: "Moore's Barceló",
    address: "Barceló, 1 (Metro: Tribunal)",
    schedule: "Weds: 8pm",
    phone: "91 532 6331"
  },
  {
    name: "O'Neill's Pub",
    address: "Principe, 12 (Metro: Sol / Sevilla)",
    schedule: "Tues: 9pm",
    phone: "91 521 2030"
  },
  {
    name: "Downtown Madrid",
    address: "San Mateo, 21 (Metro: Alonso Martínez / Tribunal)",
    schedule: "Thursdays: 6:00pm - 11:30pm",
    phone: "600 907 873",
    email: "idiomas@downtownmadrid.es",
    website: "http://downtownmadrid.es/idiomas.html",
    description: "Every Thursday evening, Downtown Madrid becomes an international hub where over 200 people from all continents gather to practice languages and share cultures. Attendees wear badges indicating their native language, and staff speak multiple languages including English, French, German, Italian, Portuguese and Spanish."
  }
];

const languageExchangeResources = [
  "www.in-madrid.com",
  "www.loquo.com",
  "www.lingobongo.com",
  "www.spainexchange.com"
];

const languageExchangeTips = [
  {
    title: "Finding a Partner",
    content: "Finding an intercambio is easy through classified ads or Spanish friends, but finding a regular partner for actual progress requires ensuring similar language levels for balanced conversation."
  },
  {
    title: "Open Your Mind",
    content: "Don't be afraid to meet people from different generations. Intercambio partners who are older or younger can offer interesting perspectives on culture and current affairs."
  },
  {
    title: "The First Meeting",
    content: "Arrange meetings in quiet bars or cafés with their mobile number for cancellations. Weeknights are less crowded and provide better conversation environments."
  },
  {
    title: "Organize Your Talking Time",
    content: "Split time equally between languages, about 45 minutes each. Avoid exchanges where both speak their second language - you'll miss native expressions and accents."
  },
  {
    title: "Learn to Listen",
    content: "After introductions, conversations either halt or flourish. Pay attention to your partner and think of questions that keep the conversation flowing."
  },
  {
    title: "Define Your Goals",
    content: "Clearly communicate your objectives: vocabulary building, grammar correction, exam preparation, or job advancement. Your partner needs to know how to help you effectively."
  },
  {
    title: "Beware of 'Bedroom' Intercambios",
    content: "Some ads invite exchanges beyond languages. If you're seeking only language practice, avoid these and clarify your intentions from the start if there's any confusion."
  }
];

const EducationChildcareSection = () => (
  <section id="education" className="mb-12 scroll-mt-20">
    <h2 className="text-3xl font-bold mb-6">Education & Student Life</h2>
    <div className="space-y-8">
      <Card>
        <CardHeader><CardTitle>Education & Schools</CardTitle></CardHeader>
        <CardContent>
          {educationChildcareData ? (
            <p>{(educationChildcareData as any).introduction}</p>
          ) : (
            <p>Information about education and childcare is coming soon.</p>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Bilingual & English Schools</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 mb-6">
            Madrid offers many excellent bilingual and English-language schools for international families and expats. 
            Here's a comprehensive list of schools offering English-language education:
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {bilingualSchools.map((school, index) => (
              <div key={index} className="p-4 border rounded-lg bg-gray-50">
                <h4 className="font-semibold text-lg mb-2">{school.name}</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span>{school.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 flex-shrink-0" />
                    <span>{school.phone}</span>
                  </div>
                  {school.website && (
                    <div className="flex items-center gap-2">
                      <Globe className="h-4 w-4 flex-shrink-0" />
                      <span>{school.website}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Language Schools</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 mb-6">
            Madrid has numerous language schools offering Spanish courses for foreigners as well as other language instruction. 
            Whether you're looking to learn Spanish, improve your language skills, or teach languages, here are comprehensive options:
          </p>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {languageSchools.map((school, index) => (
              <div key={index} className="p-3 border rounded-lg bg-gray-50">
                <h4 className="font-semibold text-base mb-2">{school.name}</h4>
                <div className="space-y-1 text-sm text-gray-600">
                  {school.address && (
                    <div className="flex items-start gap-2">
                      <MapPin className="h-3 w-3 mt-0.5 flex-shrink-0" />
                      <span>{school.address}</span>
                    </div>
                  )}
                  {school.phone && (
                    <div className="flex items-center gap-2">
                      <Phone className="h-3 w-3 flex-shrink-0" />
                      <span>{school.phone}</span>
                    </div>
                  )}
                  {school.fax && (
                    <div className="flex items-center gap-2">
                      <FileText className="h-3 w-3 flex-shrink-0" />
                      <span>Fax: {school.fax}</span>
                    </div>
                  )}
                  {school.website && (
                    <div className="flex items-center gap-2">
                      <Globe className="h-3 w-3 flex-shrink-0" />
                      <span>{school.website}</span>
                    </div>
                  )}
                  {school.email && (
                    <div className="flex items-center gap-2">
                      <Mail className="h-3 w-3 flex-shrink-0" />
                      <span>{school.email}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8">
            <h5 className="font-semibold mb-4">Additional Language Learning Resources</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {languageSchoolResources.map((resource, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                  <Globe className="h-3 w-3 flex-shrink-0" />
                  <span>{resource}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Language Exchanges / Intercambios</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 mb-6">
            There is no better way to learn a language than to talk. Language exchanges (intercambios) are a fantastic 
            way to practice Spanish while helping others with your native language. Here's everything you need to know 
            about finding and participating in language exchanges in Madrid.
          </p>
          
          <div className="mb-8">
            <h5 className="font-semibold mb-4">Finding Language Exchange Partners</h5>
            <p className="text-gray-700 mb-4">
              Check the classified pages or place your own ad to find the perfect language partner. Bulletin boards 
              at public libraries, universities, language academies, and international bookstores often have flyers 
              from potential partners.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
              {languageExchangeResources.map((resource, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                  <Globe className="h-3 w-3 flex-shrink-0" />
                  <span>{resource}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h5 className="font-semibold mb-4">Regular Intercambio Venues</h5>
            <div className="grid gap-4 md:grid-cols-2">
              {languageExchangeVenues.map((venue, index) => (
                <div key={index} className="p-4 border rounded-lg bg-gray-50">
                  <h4 className="font-semibold text-lg mb-2">{venue.name}</h4>
                  {venue.description && (
                    <p className="text-sm text-gray-700 mb-3">{venue.description}</p>
                  )}
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <span>{venue.address}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 flex-shrink-0" />
                      <span>{venue.schedule}</span>
                    </div>
                    {venue.phone && (
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 flex-shrink-0" />
                        <span>{venue.phone}</span>
                      </div>
                    )}
                    {venue.website && (
                      <div className="flex items-center gap-2">
                        <Globe className="h-4 w-4 flex-shrink-0" />
                        <span>{venue.website}</span>
                      </div>
                    )}
                    {venue.email && (
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 flex-shrink-0" />
                        <span>{venue.email}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h5 className="font-semibold mb-4">Tips for Successful Language Exchanges</h5>
            <div className="space-y-4">
              {languageExchangeTips.map((tip, index) => (
                <div key={index} className="p-4 border rounded-lg bg-blue-50">
                  <h6 className="font-semibold text-base mb-2">{tip.title}</h6>
                  <p className="text-sm text-gray-700">{tip.content}</p>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Teacher Training & TEFL Certification</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 mb-6">
            For those interested in teaching English in Madrid, there are several TEFL certification programs and resources available:
          </p>
          <div className="space-y-6">
            {teacherTrainingCenters.map((center, index) => (
              <div key={index} className="p-4 border rounded-lg bg-gray-50">
                <h4 className="font-semibold text-lg mb-3">{center.name}</h4>
                <p className="text-gray-700 mb-4 text-sm">{center.description}</p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span>{center.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 flex-shrink-0" />
                    <span>{center.phone}</span>
                  </div>
                  {center.fax && (
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 flex-shrink-0" />
                      <span>Fax: {center.fax}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4 flex-shrink-0" />
                    <span>{center.website}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 flex-shrink-0" />
                    <span>{center.email}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8">
            <h5 className="font-semibold mb-4">Additional TEFL Resources</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {teacherTrainingResources.map((resource, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                  <Globe className="h-3 w-3 flex-shrink-0" />
                  <span>{resource}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Libraries</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 mb-6">
            Madrid has an extensive network of public libraries throughout the city. Here's a comprehensive list of libraries 
            where you can study, access books and resources, and often find free internet access:
          </p>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {libraries.map((library, index) => (
              <div key={index} className="p-3 border rounded-lg bg-gray-50">
                <h4 className="font-semibold text-base mb-2">{library.name}</h4>
                <div className="space-y-1 text-sm text-gray-600">
                  <div className="flex items-start gap-2">
                    <MapPin className="h-3 w-3 mt-0.5 flex-shrink-0" />
                    <span>{library.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-3 w-3 flex-shrink-0" />
                    <span>{library.phone}</span>
                  </div>
                  {library.website && (
                    <div className="flex items-center gap-2">
                      <Globe className="h-3 w-3 flex-shrink-0" />
                      <span>{library.website}</span>
                    </div>
                  )}
                  {library.email && (
                    <div className="flex items-center gap-2">
                      <Mail className="h-3 w-3 flex-shrink-0" />
                      <span>{library.email}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader><CardTitle>Student Life</CardTitle></CardHeader>
        <CardContent>
          {studentLifeData ? (
            <p>{(studentLifeData as any).introduction}</p>
          ) : (
            <p>Information about student life is coming soon.</p>
          )}
        </CardContent>
      </Card>
    </div>
  </section>
);

export default EducationChildcareSection;
