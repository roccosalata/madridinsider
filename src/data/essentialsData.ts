// Re-export all types and data from individual files
export type { Embassy } from './embassies';
export type { EmergencyContact, PoliceStation, ImportantContact, LostPropertyOffice } from './emergencyContacts';
export type { PlaceOfWorship } from './placesOfWorship';
export type { PostOffice, PostAndMail } from './postalServices';

export { embassies } from './embassies';
export { emergencyContacts, policeStations, otherImportantContacts, lostPropertyOffices } from './emergencyContacts';
export { religions } from './placesOfWorship';
export { postOffices, postAndMailInfo } from './postalServices';

// Keep the essentialsData export for backward compatibility
import { embassies } from './embassies';
import { emergencyContacts, policeStations, otherImportantContacts, lostPropertyOffices } from './emergencyContacts';
import { religions } from './placesOfWorship';
import { postOffices, postAndMailInfo } from './postalServices';

export const essentialsData = {
  embassies,
  emergencyContacts,
  religions,
  policeStations,
  otherImportantContacts,
  lostPropertyOffices,
  postOffices,
  postAndMailInfo
};
