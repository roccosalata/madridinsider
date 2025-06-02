// Re-export all types and data from individual files
export type { Embassy } from './embassies';
export type { EmergencyContact, PoliceContact, PoliceStation } from './emergencyContacts';
export type { PlaceOfWorship } from './placesOfWorship';
export type { PostOffice, PostAndMail } from './postalServices';

export { embassies } from './embassies';
export { emergencyContacts, policeContacts, policeStations } from './emergencyContacts';
export { religions } from './placesOfWorship';
export { postOffices, postAndMailInfo } from './postalServices';

// Keep the essentialsData export for backward compatibility
import { embassies } from './embassies';
import { emergencyContacts, policeContacts, policeStations } from './emergencyContacts';
import { religions } from './placesOfWorship';
import { postOffices, postAndMailInfo } from './postalServices';

export const essentialsData = {
  embassies,
  emergencyContacts,
  religions,
  policeContacts,
  policeStations,
  postOffices,
  postAndMailInfo
};
