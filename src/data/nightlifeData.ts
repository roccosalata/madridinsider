
import { Music2, Moon, GlassWater, Wine, Umbrella } from 'lucide-react';

export const salsaVenues = {
    id: 'salsa',
    icon: <Music2 className="h-8 w-8 text-madrid-red" />,
    title: 'Salsa & Bachata Clubs',
    description: "Feel the Latin rhythm at Madrid's best salsa and bachata clubs. Many offer beginner classes before the main party starts.",
    venues: [
        { name: "El Son", address: "Calle de la Victoria, 6", details: "A classic for salsa lovers, always crowded and full of energy." },
        { name: "Azúcar", address: "Calle de Atocha, 107", details: "Offers different rooms for salsa, bachata, and kizomba." },
        { name: "Cats", address: "Calle de Julián Romea, 4", details: "Popular with students, hosts big Latin parties." },
    ]
};

export const nightclubVenues = {
    id: 'clubs',
    title: 'Nightclubs & Discotecas',
    icon: <Moon className="h-8 w-8 text-madrid-red" />,
    description: "Madrid is famous for its 'discotecas' that stay open until dawn. From multi-story mega-clubs to exclusive venues, there's a dance floor for everyone.",
    venues: [
        { name: "Teatro Kapital", address: "Calle de Atocha, 125", details: "A massive 7-story club with different music on each floor." },
        { name: "Fabrik", address: "Av. de la Industria, 82, Humanes de Madrid", details: "One of the world's top techno clubs, located outside the city." },
        { name: "Joy Eslava", address: "Calle del Arenal, 11", details: "A historic theater turned into an iconic nightclub near Sol." },
    ]
};

export const cocktailBarVenues = {
    id: 'bars',
    title: 'Cocktail Bars & Trendy Spots',
    icon: <GlassWater className="h-8 w-8 text-madrid-red" />,
    description: "For a more relaxed evening, explore Madrid's sophisticated cocktail bars and trendy hotspots in neighborhoods like Malasaña and Salamanca.",
    venues: [
        { name: "Salmon Guru", address: "Calle de Echegaray, 21", details: "An award-winning bar with creative and exotic cocktails." },
        { name: "1862 Dry Bar", address: "Calle del Pez, 27", details: "Classic cocktails in a stylish, vintage atmosphere in Malasaña." },
        { name: "Harvey's Cocktail Bar", address: "Calle de Fuencarral, 70", details: "American-style cocktails and a cozy vibe." },
    ]
};

export const rooftopTerraceVenues = {
    id: 'rooftop-terraces',
    title: 'Rooftop Bars & Terraces',
    icon: <Wine className="h-8 w-8 text-madrid-red" />,
    description: "Enjoy stunning views of the city skyline from one of Madrid's many rooftop bars. Perfect for sunset drinks and warm summer nights.",
    venues: [
        { name: "Círculo de Bellas Artes", address: "Calle de Alcalá, 42", details: "Offers one of the most famous panoramic views of Madrid." },
        { name: "The Hat Madrid", address: "Calle Imperial, 9", details: "A trendy and relaxed rooftop bar on top of a hostel in La Latina." },
        { name: "Ginkgo Sky Bar", address: "Plaza de España, 3", details: "A chic bar with a pool and spectacular views over Plaza de España." },
    ]
};

export const streetTerraceVenues = {
    id: 'street-terraces',
    title: "Classic 'Terrazas' (Day & Night)",
    icon: <Umbrella className="h-8 w-8 text-madrid-red" />,
    description: "As the temperature rises, terraces begin to spread out over almost every paved space available. After an exhausting day´s work in the heat of the city, relax on a terrace where you can chat quietly with friends and enjoy a meal or a drink. This is the essence of Madrid in summer.",
    venues: [
        { name: 'Ananda', address: 'Atocha Train Station (Metro: Atocha Renfe)', details: 'Hours: 11pm-5am. Tel: 91 506 0256' },
        { name: 'Hotel Urban', address: 'Carrera de San Jeronimo, 34 (Metro: Sevilla)', details: 'Hours: 10am-4pm. Tel: 91 787 7770' },
        { name: 'Café de Oriente', address: 'Plaza de Oriente, 2 (Metro: Opera)', details: 'Hours: 8:30am-2:30pm. Tel: 91 547 1564' },
        { name: 'La Buga del Lobo', address: 'Argumosa, 11 (Metro: Lavapies)', details: 'Hours: 12noon-2pm. Tel: 91 467 6151' },
        { name: 'Casa Mingo', address: 'Paseo de la Florida, 34', details: 'Hours: 11am-12midnight. Tel: 91 547 7918' },
        { name: 'Terraza del Museo Thyssen Bornemisza', address: 'Paseo del Prado, 8 (Metro: Banco de España)', details: 'Tel: 91 429 2732' },
        { name: 'Castellana 8', address: 'Castellana, 8 (Metro: Serrano / Colon)', details: 'Hours: 9pm-12midnight. Tel: 91 578 3478' },
        { name: 'Terraza de El Espejo', address: 'Paseo de Recoletos, 33 (Metro: Banco Espana)', details: 'Hours: 9am-1:30pm. Tel: 91 308 2347' },
        { name: 'Circulo de Bellas Artes', address: 'Alcala, 42 (Metro: Banco España / Sevilla)', details: 'Hours: 8am-2pm. Tel: 91 360 5400' }
    ]
};
