
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MapPin, Globe, Mail } from "lucide-react";

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

const LibrariesSection: React.FC = () => (
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
);

export default LibrariesSection;
