
// Test comment
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent } from '@/components/ui/card';

import { placesOfWorship } from '../data/essentialsData';
import PlacesOfWorshipList from '@/components/PlacesOfWorshipList';
const Living = () => {
  return (
    <Layout>
      <HeroSection 
        title="Madrid Life: Practical Guide" 
        subtitle="Make Madrid home: Advice on accommodation, paperwork, and daily services for students, expats, and long-term residents" 
      />
      
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-8">Madrid Life: Practical Guide</h1>
        <p className="text-lg mb-12">Essential information for anyone planning to live in Madrid, whether you're a student, expat, or long-term resident.</p>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Finding Accommodation in Madrid</h2>
          <Card>
            <CardContent className="pt-6">
              <p>Details coming soon about finding accommodation in Madrid, including neighborhoods, rental processes, and typical costs.</p>
            </CardContent>
          </Card>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Paperwork & Formalities (NIE, TIE, Empadronamiento, Visas)</h2>
          <Card>
            <CardContent className="pt-6">
              <p>Details coming soon about essential paperwork and administrative procedures for living in Madrid.</p>
            </CardContent>
          </Card>
        </section>

        {/* Work & Residency Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Work & Residency</h2>
          <Card>
            <CardContent className="pt-6 text-sm">
              <p className="text-red-600 mb-4"><strong>Disclaimer:</strong> The information below is based on consular information sheets from 2002. Visa and residency requirements can change frequently. Please consult official Spanish government websites or the nearest Spanish embassy/consulate for the most current and accurate information.</p>
              
              <p><strong>Visa: USA</strong></p>

              <p><strong>Spain and Andorra - Consular Information Sheet</strong></p>
              <p>February 25, 2002</p>

              <p>COUNTRY DESCRIPTION: Spain and Andorra are both highly developed and stable democracies with modern economies. Spain is a member of the European Community. Additional information on Spain may be obtained from the Tourist Office of Spain (www.okspain.org), telephone (212) 265-8822, or via the Internet at http://www.okspain.org. Additional information on Andorra may be obtained from the Andorran Mission to the U.N., 2 U.N. Plaza, 25th Floor, New York, New York 10018, telephone (212) 750-8064.</p>

              <p>ENTRY REQUIREMENTS: A passport is required for both countries, but a visa is not required for tourist or business stays up to 90 days. Individuals who enter Spain without a visa are not authorized to work. For further information concerning entry requirements for Spain, travelers should contact the Embassy of Spain at 2375 Pennsylvania Avenue NW, Washington, D.C. 20037, telephone (202) 728-2330, or the nearest Spanish consulate in Boston, Chicago, Houston, Los Angeles, Miami, New Orleans, New York, San Francisco, or San Juan. The web site of the Spanish Embassy in the United States is www.spainemb.org. For further information on entry requirements in Andorra, travelers should contact the Andorran Mission to the U.N., 2 U.N. Plaza, 25th Floor, New York, NY 10018, telephone (212) 750-8064.</p>

              <p>Students planning to study in Spain should be aware of a recent change in Spanish immigration laws, which require applications for student visas to be submitted a minimum of 60 days before anticipated travel to Spain.</p>

              <p>In an effort to prevent international child abduction, many governments have initiated procedures at entry/exit points. These often include requiring documentary evidence of relationship and permission for the child's travel from the parent(s) or legal guardian not present. Having such documentation on hand, even if not required, may facilitate entry/departure.</p>

              <p>DUAL NATIONALITY: In addition to being subject to all Spanish laws affecting U.S. citizens, dual nationals may also be subject to other laws that impose special obligations on Spanish citizens. For additional information, please see the Consular Affairs home page on the Internet at travel.state.gov for our Dual Nationality flyer.</p>

              <p>SAFETY AND SECURITY: The ETA terrorist organization remains active in Spain. Although ETA efforts have historically been directed against police, military, and other Spanish government targets, in March 2001, ETA issued a communique announcing its intention to target Spanish tourist areas. Americans have not been the specific targets of ETA activities. The Spanish government is vigorously engaged in combating terrorism at home and abroad and has been able to avert many terrorist activities. Over the years, ETA has conducted many successful attacks, many of which have resulted in deaths and injuries. Last year, ETA attacks included a number of car bomb incidents, which occurred in areas frequented by tourists, including the Madrid and Malaga airports. While there were no tourist fatalities from any of these incidents, a number of innocent bystanders suffered injuries. A smaller Marxist group, GRAPO, has also mounted several attacks since 1999 and killed three people. U.S. tourists traveling to Spain should exercise caution and refer to the guidance offered in the Worldwide Caution Public Announcements issued in the wake of the September 11 attacks against New York and Washington.</p>

              <p>CRIME: While most of Spain has a moderate rate of crime, and most of the estimated one million American tourists have trouble free visits to Spain each year, the principal tourist areas have been experiencing an increase in violent crime. Madrid and Barcelona, in particular, have reported growing incidents of muggings and violent attacks, and older tourists and Asian-Americans seem to be particularly at risk. Criminals frequent tourist areas and major attractions such as museums, monuments, restaurants, hotels, beach resorts, trains, train stations, airports, subways and ATM machines. In Barcelona, violent attacks have occurred near the Picasso Museum and in the Gothic Quarter, Parc Guell, Plaza Real and Mont Juic. In Madrid, reported incidents occur in key tourist areas, including the area near the Prado Museum and Atocha train station, and areas of old Madrid like Sol, El Rastro flea market and Plaza Mayor. Travelers should exercise caution, carry limited cash and credit cards, and leave extra cash, credit cards, passports and personal documents in a safe location. Crimes have occurred at all times of day and night.</p>

              <p>Thieves often work in teams or pairs. In most cases, one person distracts a victim while the accomplice performs the robbery. For example, a stranger might wave a map in your face and ask for directions or "inadvertently" spill something on you. While your attention is diverted, an accomplice makes off with the valuables. Attacks can also be initiated from behind, with the victim being grabbed around the neck and choked by one assailant while others rifle through the belongings. A group of assailants may surround the victim, maybe in a crowded popular tourist area or on public transportation, and only after the group has departed does the person discover he/she has been robbed. Some attacks have been so violent that victims have needed to seek medical attention after the attack.</p>

              <p>Theft from parked cars is also common. Small items like luggage, cameras or briefcases are often stolen from parked cars. Travelers are advised not to leave valuables in parked cars, and to keep doors locked, windows rolled up and valuables out of sight when driving. "Good Samaritans" scams are unfortunately common. A passing car will attempt to divert the driver's attention by indicating there is a mechanical problem. If the driver stops to check the vehicle, accomplices steal from the car while the driver is looking elsewhere. Drivers should be cautious about accepting help from anyone other than a uniformed Spanish police officer or Civil Guard. Andorra has a low rate of crime.</p>

              <p>The loss or theft abroad of a U.S. passport should be reported immediately to the local police and the nearest U.S. embassy or consulate. U.S. citizens may refer to the Department of State's pamphlet, A Safe Trip Abroad, for ways to promote a more trouble-free journey. The pamphlet is available by mail from the Superintendent of Documents, U.S. Government Printing Office, Washington, D.C. 20402, via the Internet at www.access.gpo.gov/su_docs, or via the Bureau of Consular Affairs home page at travel.state.gov.</p>

              <p>MEDICAL FACILITIES AND INSURANCE: Good medical care is available. The Department of State strongly urges Americans to consult with their medical insurance company prior to traveling abroad to confirm whether their policy applies overseas and if it will cover emergency expenses such as a medical evacuation. U.S. medical insurance plans seldom cover health costs incurred outside the United States unless supplemental coverage is purchased. Further, U.S. Medicare and Medicaid programs do not provide payment for medical services outside the United States. However, many travel agents and private companies offer insurance plans that will cover health care expenses incurred overseas, including emergency services such as medical evacuations.</p>

              <p>When making a decision regarding health insurance, Americans should consider that many foreign doctors and hospitals require payment in cash prior to providing service and that a medical evacuation to the United States. may cost well in excess of $­50,000. Uninsured travelers who require medical care overseas often face extreme difficulties, whereas travelers who have purchased overseas medical insurance have found it to be life-saving when a medical emergency has occurred. When consulting with your insurer prior to your trip, please ascertain whether payment will be made to the overseas healthcare provider or if you will be reimbursed later for expenses that you incur. Some insurance policies also include coverage for psychiatric treatment and for disposition of remains in the event of death.</p>

              <p>Useful information on medical emergencies abroad, including overseas insurance programs, is provided in the Department of State's Bureau of Consular Affairs brochure, Medical Information for Americans Traveling Abroad, available via the Bureau of Consular Affairs home page or autofax: (202) 647-3000.</p>

              <p>OTHER HEALTH INFORMATION: Information on vaccinations and other health precautions may be obtained from the Centers for Disease Control and Prevention's hotline for international travelers at 1-877-FYI-TRIP (1-877-394-8747); fax: 1-888-CDC-FAXX (1-888-232-3299), or via the CDC's Internet site at www.cdc.gov.</p>

              <p>TRAFFIC SAFETY AND ROAD CONDITIONS: While in a foreign country, U.S. citizens may encounter road conditions that differ significantly from those in the United States. The information below concerning Spain is provided for general reference only, and it may not be totally accurate in a particular location or circumstance.</p>

              <p>Safety of Public Transportation: Good<br/>Urban Road Conditions/Maintenance: Excellent<br/>Rural Road Conditions/Maintenance: Good<br/>Availability of Roadside Assistance: Good</p>

              <p>Traffic in Madrid and Barcelona is faster-paced than in U.S. cities. Pedestrians should use designated crossing areas when crossing streets and obey traffic lights. Night driving on Fridays and Saturdays in urban areas may be dangerous due to drivers under the influence of alcohol. Night driving in isolated rural areas can be dangerous because of farm animals and poorly marked roads. Rural traffic is generally heavier in July and August as well as during the Christmas and Easter seasons.</p>

              <p>Public transportation in large cities is generally excellent. Taxi services are relatively inexpensive, and the use of meters is common, although there have been reports of taxi drivers occasionally overcharging tourists coming from the airport. Travelers are advised to use registered cabs only.</p>

              <p>For additional general information about road safety, including links to foreign government sites, please see the Department of State, Bureau of Consular Affairs home page at http://travel.state.gov/road_safety.html. For specific information concerning Spanish driving permits, vehicle inspection, road tax and mandatory insurance, please contact the Spanish National Tourist Organization offices in New York via the Internet at www.okspain.org.</p>

              <p>AVIATION SAFETY OVERSIGHT: The U.S. Federal Aviation Administration (FAA) has assessed the Government of Spain's Civil Aviation Authority as Category 1 -- in compliance with international aviation safety standards for oversight of Spain's air carrier operations. For further information, travelers may contact the Department of Transportation within the United States at telephone 1-800-322-7873, or visit the FAA's Internet website at www.faa.gov/avr/iasa.</p>

              <p>The U.S. Department of Defense (DOD) separately assesses some foreign air carriers for suitability as official providers of air services. For information regarding the DOD policy on specific carriers, travelers may contact the DOD at telephone (618) 229-4801.</p>

              <p>CUSTOMS REGULATIONS: It is advisable to contact the Embassy of Spain in Washington, D.C. or one of Spain's consulates in the United States for specific information regarding customs requirements. This is especially important if you are attempting to send any medications to Spain through postal channels. Spain's customs authorities encourage the use of an ATA (Admission Temporaire/Temporary Admission) Carnet for the temporary admission of professional equipment, commercial samples, and/or goods for exhibitions and fair purposes. ATA Carnet Headquarters, located at the U.S. Council for International Business, 1212 Avenue of the Americas, New York, NY 10036, issues and guarantees the ATA Carnet in the United States. For additional information, please call (212) 354-4480, or send an e-mail to atacarnet@uscib.org, or visit www.uscib.org for details.</p>

              <p>CRIMINAL PENALTIES: While in a foreign country, a U.S. citizen is subject to that country's laws and regulations, which sometimes differ significantly from those in the United States and may not afford the protections available to the individual under U.S. law. Penalties for breaking the law can be more severe than in the United States for similar offenses. Persons violating Spanish law, even unknowingly, may be expelled, arrested or imprisoned. Penalties for possession of, use of, or trafficking in illegal drugs in Spain are strict, and convicted offenders can expect jail sentences and fines.</p>

              <p>CHILDREN'S ISSUES: For information on international adoption of children and international parental child abduction, please refer to our Internet site at travel.state.gov/children's_issues.html or telephone (202) 736-7000.</p>

              <p>REGISTRATION/EMBASSY AND CONSULATE LOCATIONS: Americans living in or visiting Spain or Andorra are encouraged to register at the Consular Section of the U.S. Embassy in Madrid or at the U.S. Consulate General in Barcelona where they may obtain updated information on travel and security within Spain or Andorra. The U.S. Embassy in Madrid, Spain is located at Serrano 75; telephone (34)(91) 587-2200, and fax (34)(91) 587-2303. U.S. citizens who register in the Consular Section at the U.S. Embassy or Consulate listed below can obtain updated information on travel and security within Spain or Andorra. Additional information is also available through the U.S. Embassy's Internet homepage at www.embusa.es/indexbis.html.</p>

              <p>There is a U.S. Consulate in Barcelona, at Paseo Reina Elisenda 23-25; telephone (34)(93) 280-2227 and fax (34)(93) 205-5206.</p>

              <p>There are also Consular Agencies in the following locations:</p>

              <p>Malaga, at Avenida Juan Gomez Juanito #8, Edificio Lucia 1C, 29640, Fuengirola, telephone (34)(952)474-891 and fax (34)(952) 465-189, hours 10:00 a.m. to 1:00 p.m.;</p>

              <p>La Coruna, at Canton Grande 16-17, telephone(34)(981) 213-233 and fax (34)(981) 222-808, hours 10:00 a.m. to 1:00 p.m.;</p>

              <p>Las Palmas, at Edificio Arca, Calle Los Martinez de Escobar 3, Oficina 7, telephone (34)(928) 222-552 and fax (34)(928) 225-863, hours 10:00 a.m. to 1:00 p.m.;</p>

              <p>Palma de Mallorca, Ave. Jaime III, 26 Entresuelo, 2-H-1 (97), telephone (34)(971) 725-051 and fax (34)(971) 718-755, hours 10:30 a.m. to 1:30 p.m.;</p>

              <p>Seville, at Paseo de Las Delicias 7, telephone (34)(954) 231-885 and fax (34)(954) 232-040, hours 8:30 a.m. to 1:30 p.m.;</p>

              <p>Valencia, at Doctor Romagosa #1, 2-J, 46002, Valencia telephone (34)(96)-351-6973 and fax (34)(96) 352-9565, hours 10:00 a.m. to 1:00 p.m.</p>

              <p>For Andorra, please contact the U.S. Consulate in Barcelona.</p>

              <p>* * *</p>

              <p>This replaces the Consular Information Sheet dated April 4, 2001 to update sections on Country Description, Entry Requirements, Dual Nationality, Safety/Security, Crime and Traffic Safety and Road Conditions.</p>

              <p>Return to Consular Information Sheets and Travel Warnings Page</p>

              <p>Information taken from the US State Department web site 03/06/02</p>

              <p className="text-red-600 mb-4 mt-8"><strong>Disclaimer:</strong> The information below is based on a UK Foreign and Commonwealth Office source from June 3, 2002. Visa and residency requirements can change frequently. Please consult official Spanish government websites or the nearest Spanish embassy/consulate for the most current and accurate information.</p>

              <p><strong>Visa: UK</strong></p>

              <p>SUMMARY</p>

              <p>Most of the 13 million British nationals who are expected to visit Spain this year will have a trouble-free holiday. But, visitors should be alert to the existence of street crime and the possibility of continuing terrorist activity.</p>

              <p>Spanish Trade Unions have called a General Strike for Thursday 20 June 2002. The extent to which the strike will be supported is not yet known. However, should it go ahead, some disruption can be expected to public transport schedules, airport facilities (eg baggage handling and catering) and access to some tourist sights and facilities</p>

              <p>ENTRY REQUIREMENTS</p>

              <p>Your passport is a valuable document. Look after it! Replacing a lost or stolen passport can be time consuming and expensive.</p>

              <p>Street crime is common in many Spanish cities, towns and holiday resorts. Passports, credit cards, travel tickets and money should not be carried together in handbags or pockets. Be wary of approaches by strangers either asking for directions or asking for, or offering, help of any kind. These approaches, at times made by bogus policemen, are sometimes ploys to distract attention while accomplices make off with valuables or possessions.</p>

              <p>To combat the increase in street crime, which, in some cases, has been accompanied by violence, the authorities have stepped up the police presence in tourist areas. Nevertheless, visitors should remain alert in all areas (including hotel lobbies, airports, train and bus stations, on public transport, at car rental outlets and even supermarkets and their car parks). In Madrid, particular care should be taken in the Puerto de Sol and surrounding streets including the Plaza Mayor, the Retiro Park and Lavapies and, currently, the Metro (underground) line from Barajas Airport to the city centre. In Barcelona, visitors should be especially vigilant in the Ramblas and surrounding streets and, following a recent spate of violent muggings, the Monjuic area of the city. The cities and areas listed above are not exclusive and appropriate care and precautions should be taken to guard against street crime in all places.</p>

              <p>The incidence of rape and sexual assault is statistically very low. Nevertheless attacks occur. Visitors are advised not to lower their personal security awareness because they are on holiday. They should also be alert to the availability and possible use of 'date rape' drugs.</p>

              <p>Motorists should be on the look out for 'highway pirates' who target foreign registered and hire cars, especially those towing caravans. Motorists are sometimes targeted in service areas and subsequently tricked into stopping on the hard shoulder. The usual ploy is for a passing vehicle to suggest by gesture that there is something seriously wrong with a rear wheel. Motorists who decide to stop to check the condition of their vehicle should be extremely wary of anyone offering help. They should lock all vehicle doors and keep bags containing valuables out of sight. Car keys should not be left in the ignition.</p>

              <p>TERRORISM</p>

              <p>In mid May, the Government announced the arrest in France of several members of ETA, the Basque terrorist group, who, it was claimed, were planning a bombing campaign in tourist areas for this summer. The evidence suggested plans for car-bomb attacks against hotel establishments in the Benidorm and possibly Malaga regions, with warnings to the police before the bombs went off. These and other earlier arrests followed the threat made by ETA in March 2001 that, to further its aim of damaging the Spanish economy, it would attack Spain’s tourist industry and cause disruption in tourist areas. It warned tourists to stay away from Spanish resorts.</p>

              <p>During last summer, ETA carried out a number of mostly car bomb attacks in resorts on the east coast, and at Madrid and Malaga airports. In most cases, warnings were given and there were few casualties. The high-speed rail link between Madrid and Seville was briefly disrupted, and there was some minor evidence of planning against ferries operating between the UK and northern Spain.</p>

              <p>Since then, ETA attacks – shootings and car bombings - have continued, though their number has decreased. The main targets continue to be Spanish politicians, members of the security forces, judges and journalists. But the aim of the car bomb in Madrid in May (near a major football stadium before a big match) was clearly above all to disrupt. In mid May, the security authorities arrested two ETA terrorists in Madrid with bomb making equipment.</p>

              <p>There are also regular incidents of street violence in the Basque country, involving organizations sympathetic to ETA, and directed against the security forces, political parties and banks. These incidents normally happen at night, away from tourist areas, and often take the form of Molotov cocktail attacks against the homes of local politicians, security force buildings and cash dispensers.</p>

              <p>Although the security forces have had considerable success in arresting ETA terrorist groups, attacks are likely to continue, in which case tourists could become caught up. Although warnings have normally been given, this may not always be the case. Or a bomb might explode prematurely. Statistically your chances of being caught up in a terrorist outrage are extremely low. But there is just the possibility of being in the wrong place at the wrong time. Were there to be a further attack in a tourist area, the chances of some tourists being involved would be relatively high given the many millions of foreign tourists who visit Spain each year.</p>
              <p>If further incidents take place, tourists can expect disruptions from real or hoax terrorist attempts. Visitors should follow the instructions of the local police and other authorities.</p>

              <p>Gibraltar</p>

              <p>Spanish border checks mean travelers may experience delays in crossing between Spain and Gibraltar.</p>

              <p>Road Safety</p>

              <p>Visitors should take particular care when driving as regulations and customs are different from those in the UK and the accident rate is higher. Pedestrians should take care particularly when crossing, or walking along, unlit roads at night. Driving licences and insurance documents must be carried and produced for inspection if required.</p>

              <p>It is a legal requirement for motorists traveling to or transiting Spain to carry (in all vehicles) two red warning triangles to be placed, in the event of an accident or breakdown, in front of and behind the vehicle. Failure to comply may result in the imposition of a spot fine of up to 90 Euros. This requirement is in addition to the need for drivers to carry a spare wheel, a spare fan belt and full set of spare bulbs plus the tools to change them.</p>

              <p>Spanish laws prohibit the carriage of any load on the back of cars, camper vans or caravans, which protrudes beyond either the length of the width of the carrying vehicle. It is therefore illegal to carry bicycles or mopeds on the backs of cars, camper vans or caravans. Bicycles can, however, be carried on the roof of a car provided they are safely secured. Both bicycles and mopeds should, if possible, be carried inside camper vans and/or caravans or in the panniers provided for the purpose in some makes of these types of vehicles.</p>

              <p>HEALTH</p>

              <p>Emergency Health Care</p>

              <p>Visitors should obtain an E111 form from their local post office/social security office to cover the costs of any emergency health care they receive at State run hospitals during their stay. But, please note that those unlucky enough to be involved in an accident may be taken to a private clinic in the first instance where an E111 will not be valid to settle the bill. Visitors are therefore strongly recommended to also take out full private insurance cover.</p>

              <p>Additionally, an E111 form gives no entitlement to medical repatriation costs, nor does it cover ongoing illnesses of a non-urgent nature. Visitors to Andorra, which is not an EU member, are specifically reminded that E111 forms are not accepted there.</p>

              <p>Classical Swine Fever</p>

              <p>Since June 2001, an outbreak of Classical Swine Fever has affected the regions of Lerida and Castellón. This is a very serious pig disease but it does not affect humans. The Spanish authorities have taken appropriate disease control measures. All meat from the affected area must be marked with a special oval health stain with a cross through it. This meat may only be used to produce cooked products and it is illegal to bring this meat to the United Kingdom. Visitors to Spain should be aware that they must not bring back any prohibited meat as it could bring disease with it.</p>

              <p>GENERAL</p>

              <p>Purchase of Property, Timeshare Ownership and Holiday Clubs</p>

              <p>British citizens intending to purchase a property in Spain are strongly advised to engage a local lawyer. Some general guidance notes on the subject are available from the Spanish Desk in the Consular Division of the Foreign and Commonwealth Office, Room G/105/6, Old Admiralty Building, Whitehall, London, SW1A 2PA; and from British Consular Offices in Spain. Timeshare ownership is well established in Spain with many known and respected companies, agents and resorts operating legally, fairly and successfully. However, there are equally many unscrupulous companies in operation, some of which claim to provide various incentives (including stock market investments and discounts on airfares and accommodation) when exchanging existing timeshare ownership or taking out membership of holiday clubs.</p>

              <p>More often than not, such inducements do not materialize once a deal has been signed and sealed. Anyone who is approached by agents operating such schemes should treat the approaches with the utmost caution.</p>

              <p>Purchases of Tobacco products and Alcoholic drinks for export</p>

              <p>Following the withdrawal of duty free facilities within the European Union, customs authorities in all member countries have introduced guidance levels for the importation of tobacco, alcohol and other products purchased by visitors for their own use. These levels should be checked with HM Customs. Travelers who purchase more than the amount specified by HM Customs, must be able to satisfy Customs Officers at both the point of departure and arrival that the goods are for their personal use. Failure to do so may result in the goods being confiscated and/or a large fine being imposed.</p>

              <p>Dangerous cigarette lighters</p>

              <p>United Kingdom airlines and the Civil Aviation Authority are concerned about the serious fire risk in hold loaded luggage arising from promotions in Spanish holiday resorts in which cigarette lighters are attached to and/or packed in cartons of some brands of cigarettes. The lighters have a sensitive electronic ignition, which can be activated by movement within a suitcase as it is being transported. Travelers who buy such cartons of cigarettes are advised to remove the lighters and dispose of them prior to their return flight as these lighters should not be carried onboard an aircraft.</p>

              <p>The euro</p>

              <p>The euro was introduced in Spain on 1 January 2002. The Peseta is no longer a valid currency. However, peseta notes and coins may continue to be changed into euros at any bank in Spain up to 30 June 2002. Thereafter, only Peseta notes will be accepted for exchange and only in branches of the Bank of Spain located in Madrid and regional capitals.</p>
              <p>Information taken from www.fco.gov.uk on the 3rd June 2002. Information supplied correct at time of posting.</p>

              <p className="text-red-600 mb-4 mt-8"><strong>Disclaimer:</strong> The information below is based on a US Embassy in Madrid document from February 2002. Visa and residency requirements can change frequently. Please consult official Spanish government websites or the nearest Spanish embassy/consulate for the most current and accurate information.</p>

              <p><strong>USA Citizens in Spain</strong></p>

              <p><strong>PROVISIONS GOVERNING EMPLOYMENT AND RESIDENCE OF AMERICANS IN SPAIN</strong></p>
              <p>February 2002</p>

              <p>A) PASSPORT-VISA REQUIREMENTS</p>

              <p>1) Use of Diplomatic/Official Passports</p>
              <p>In accordance with Spanish law, personnel assigned to the Embassy who are accredited and are in possession of a Spanish issued carte or carnet should enter Spain using a diplomatic or official passport AND their Spanish issued identification. Individuals with diplomatic or official passports who are not accredited and/or are not in possession of a Spanish issued identification should request a visa (if required) for entry into Spain. If there are any questions as to whether or not a visa is required, the nearest Spanish Embassy or Consulate should be contacted. Military personnel assigned to the Joint Mobility Control Center (JMCC) and TAD Personnel under the umbrella of the Defense Cooperation Agreement are not required to apply for visas or Spanish residency permits as they are covered under the DCA. These individuals should enter Spain using a military ID card AND a no-fee passport.</p>

              <p>2) Tourists</p>
              <p>U.S. citizens do not need a visa for tourist or business stays up to 90 days. They ARE NOT authorized to work. For further information concerning entry requirements for Spain, travelers should contact the Embassy of Spain at 2375 Pennsylvania Avenue NW, Washington, D.C. 20037, telephone (202) 728-2330, or the nearest Spanish consulate in Boston, Chicago, Houston, Los Angeles, Miami, New Orleans, New York, San Francisco, or San Juan. The web site of the Spanish Embassy in the United States is www.spainemb.org.</p>

              <p>3) Working & Residing in Spain</p>
              <p>ANY American citizen who plans to WORK or RESIDE in Spain MUST obtain a WORK and RESIDENCY VISA from the Spanish Embassy or a Spanish Consulate IN THE UNITED STATES before coming to Spain. The only exception to this rule is for those individuals covered under the Defense Cooperation Agreement (see paragraph A.1 above). An American arriving in Spain without the proper visa will NOT be granted a residency permit by the Spanish authorities and will be required to return to the United States to obtain one. Please note that Spanish regulations require that such applications be filed AT LEAST 60 days in advance of the applicant's proposed arrival in Spain.</p>

              <p>Please note that under the new Aliens' Law, it is no longer possible for American citizens to apply for work and residency permits from within Spain, EXCEPT in very exceptional circumstances (and only then with the approval of the Immigration authorities in Madrid). If you have questions concerning this new procedure, please contact the Spanish Embassy or Consulate in the United States. Questions related to the Aliens' Law and its application should be directed to the Immigration Office nearest your place of residence or intended residence. Contact information for these offices is provided in Section G. below.</p>

              <p>B) NIE NUMBERS (NUMERO DE IDENTIDAD DE EXTRANJERO)</p>
              <p>American citizens who plan to reside in Spain, even if they do not plan to work, should apply for a NIE number. This number is required for all fiscal transactions in Spain, i.e., buying a car or apartment, opening a bank account, obtaining a mortgage, paying taxes, etc. Once the individual has obtained the authorization to reside in Spain (stamped on their visa), they should present themselves at the appropriate Comisaria de Policia and solicit the NIE number.</p>

              <p>C) CONSULAR MATRICULA</p>
              <p>Upon arrival in Spain, all Americans are urged to register with the Consular Section of the Embassy or Consulate in whose district they reside. In addition to the Embassy in Madrid and the Consulate General in Barcelona, there are six Consular Agencies in Spain located in Bilbao, La Coruna, Las Palmas (Canary Islands), Malaga, Palma de Mallorca (Balearic Islands), and Seville. Addresses and telephone numbers of all Consular offices are found in Section G. below. Registration assists the Embassy in locating Americans in emergency situations and in distributing the most up-to-date information on conditions in the area.</p>

              <p>The Consular Matricula is not to be confused with the Spanish required residency permit. The Matricula is a U.S. document and is for the use of the U.S. Embassy ONLY.</p>

            </CardContent>
          </Card>
        </section>

        {/* Talent Agencies Subsection */}
        <section className="mb-12">
          <h3 className="text-xl font-semibold mb-4">Talent Agencies</h3>
          <Card>
            <CardContent className="pt-6">
              <p>Madrid has a vibrant arts and entertainment scene with several talent agencies. Here is a list of some agencies, but please note that contact information and representation focus may change.</p>
              <ul className="list-disc pl-5 mt-4">
                <li className="mb-2">
                  <strong>Kuranda</strong>
                  <p>Specializes in film, television, and theater actors.</p>
                  <p>Paseo de la Castellana, 130 - 8º izda. 28046 Madrid</p>
                  <p>Phone: 91 571 37 00</p>
                  <p>Fax: 91 571 34 90</p>
                </li>
                <li className="mb-2">
                  <strong>Mesegué Representantes</strong>
                  <p>Represents actors for film, TV, and commercials.</p>
                  <p>Hermosilla, 105 - 4º F 28009 Madrid</p>
                  <p>Phone: 91 402 44 13</p>
                  <p>Fax: 91 402 66 53</p>
                </li>
                <li className="mb-2">
                  <strong>Salvador Agency</strong>
                  <p>Offers representation for actors and models.</p>
                  <p>Sagasta, 21 - 3º Izda. 28004 Madrid</p>
                  <p>Phone: 91 445 51 00</p>
                </li>
                <li className="mb-2">
                  <strong>Paloma Juanes</strong>
                  <p>Known for representing a range of artistic talent.</p>
                  <p>General Oraá, 29 - 28006 Madrid</p>
                  <p>Phone: 91 563 74 61</p>
                </li>
                 <li className="mb-2">
                  <strong>5 Elementos</strong>
                  <p>A newer agency with a focus on film and TV talent.</p>
                   <p>Phone: 91 542 37 71</p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Internships Subsection */}
        <section className="mb-12">
          <h3 className="text-xl font-semibold mb-4">Internships</h3>
          <Card>
            <CardContent className="pt-6 text-sm">
               <p className="text-red-600 mb-4"><strong>Disclaimer:</strong> The information below is based on a source from February 2002. Internship opportunities and program details can change frequently. Please consult the specific organizations or relevant program websites for the most current information and application procedures.</p>

              <p>Finding an internship in Madrid can be a valuable experience. Here is a list of some organizations that offered internships or had relevant programs in 2002. Please verify their current offerings and requirements:</p>

              <ul className="list-disc pl-5 mt-4">
                <li className="mb-2">
                  <strong>Atlantis</strong>
                  <p>Offers opportunities in Spain.</p>
                  <p>Phone: (202) 244-5647</p>
                  <p>Fax: (202) 244-5645</p>
                  <p>Email: atlantis@erols.com</p>
                </li>
                <li className="mb-2">
                  <strong>CDS International, Inc.</strong>
                  <p>European Internship Program - Spain</p>
                  <p>871 United Nations Plaza, 15th Floor</p>
                  <p>New York, NY 10017-1814</p>
                  <p>Phone: (212) 497-3500</p>
                  <p>Fax: (212) 497-3535</p>
                  <p>Email: info@cdsintl.org</p>
                  <p>Website: www.cdsintl.org</p>
                </li>
                <li className="mb-2">
                  <strong>Cultural Embrace, Inc.</strong>
                  <p>Spain Internships</p>
                  <p>PO Box 3075</p>
                  <p>Seal Beach, CA 90740</p>
                  <p>Toll Free: 1-888-233-7771</p>
                  <p>Fax: (714) 828-8150</p>
                  <p>Email: info@culturalembrace.com</p>
                  <p>Website: www.culturalembrace.com</p>
                </li>
                <li className="mb-2">
                  <strong>Global Experiences</strong>
                  <p>Spain Internship Program</p>
                  <p>1700 Pennsylvania Ave NW, Ste 200</p>
                  <p>Washington, DC 20006</p>
                  <p>Phone: (202) 333-7700</p>
                  <p>Fax: (202) 333-7733</p>
                  <p>Email: info@globalexperiences.com</p>
                  <p>Website: www.globalexperiences.com</p>
                </li>
                <li className="mb-2">
                  <strong>IAESTE United States</strong>
                  <p>Internship opportunities for students in technical fields.</p>
                  <p>10431 Little Patuxent Parkway, Suite 300</p>
                  <p>Columbia, MD 21044-3502</p>
                  <p>Phone: (410) 997-2200</p>
                  <p>Fax: (410) 997-5185</p>
                  <p>Email: iaeste@aiec.org</p>
                  <p>Website: www.iaesteunitedstates.org</p>
                </li>
                 <li className="mb-2">
                  <strong>University of California</strong>
                  <p>UCEAP Programs, including study abroad with potential for internships.</p>
                  <p>Website: www.ucall.ucop.edu</p>
                </li>
              </ul>

            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Banking & Finances in Madrid</h2>
          <Card>
            <CardContent className="pt-6 text-sm">
              <p>Information for this section is being gathered and will be updated soon.</p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Connectivity & Home Services (Mobile, Internet, Utilities)</h2>
          <Card>
            <CardContent className="pt-6 text-sm">
              <p>Information for this section is being gathered and will be updated soon.</p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Healthcare Guide for Madrid</h2>
          <Card>
            <CardContent className="pt-6 text-sm">
              <p>Information for this section is being gathered and will be updated soon.</p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Education & Childcare in Madrid</h2>
          <Card>
            <CardContent className="pt-6 text-sm">
              <p>Information for this section is being gathered and will be updated soon.</p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Working in Madrid</h2>
          <Card>
            <CardContent className="pt-6 text-sm">
              <p>Information for this section is being gathered and will be updated soon.</p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Student Life Essentials in Madrid</h2>
         <Card>
            <CardContent className="pt-6 text-sm">
              <p>Information for this section is being gathered and will be updated soon.</p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Community & Integration in Madrid</h2>
          <Card>
            <CardContent className="pt-6 text-sm">
              <p>Information for this section is being gathered and will be updated soon.</p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Religions & Faiths</h2>
          <p className="text-lg mb-6">Information about places of worship in Madrid is available for longer-term residents, loaded from <code>src/data/essentialsData.ts</code>.</p>

 <PlacesOfWorshipList places={placesOfWorship} />

        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Daily Necessities & Services in Madrid</h2>
          <Card>
            <CardContent className="pt-6 text-sm">
              <p>Information for this section is being gathered and will be updated soon.</p>
            </CardContent>
          </Card>
        </section>
      </div>
    </Layout>
  );
};

export default Living;

              <p><strong>Visa: UK</strong></p>

              <p>SUMMARY</p>

              <p>Most of the 13 million British nationals who are expected to visit Spain this year will have a trouble-free holiday. But, visitors should be alert to the existence of street crime and the possibility of continuing terrorist activity.</p>

              <p>Spanish Trade Unions have called a General Strike for Thursday 20 June 2002. The extent to which the strike will be supported is not yet known. However, should it go ahead, some disruption can be expected to public transport schedules, airport facilities (eg baggage handling and catering) and access to some tourist sights and facilities</p>

              <p>ENTRY REQUIREMENTS</p>

              <p>Your passport is a valuable document. Look after it! Replacing a lost or stolen passport can be time consuming and expensive.</p>

              <p>Street crime is common in many Spanish cities, towns and holiday resorts. Passports, credit cards, travel tickets and money should not be carried together in handbags or pockets. Be wary of approaches by strangers either asking for directions or asking for, or offering, help of any kind. These approaches, at times made by bogus policemen, are sometimes ploys to distract attention while accomplices make off with valuables or possessions.</p>

              <p>To combat the increase in street crime, which, in some cases, has been accompanied by violence, the authorities have stepped up the police presence in tourist areas. Nevertheless, visitors should remain alert in all areas (including hotel lobbies, airports, train and bus stations, on public transport, at car rental outlets and even supermarkets and their car parks). In Madrid, particular care should be taken in the Puerto de Sol and surrounding streets including the Plaza Mayor, the Retiro Park and Lavapies and, currently, the Metro (underground) line from Barajas Airport to the city centre. In Barcelona, visitors should be especially vigilant in the Ramblas and surrounding streets and, following a recent spate of violent muggings, the Monjuic area of the city. The cities and areas listed above are not exclusive and appropriate care and precautions should be taken to guard against street crime in all places.</p>

              <p>The incidence of rape and sexual assault is statistically very low. Nevertheless attacks occur. Visitors are advised not to lower their personal security awareness because they are on holiday. They should also be alert to the availability and possible use of 'date rape' drugs.</p>

              <p>Motorists should be on the look out for 'highway pirates' who target foreign registered and hire cars, especially those towing caravans. Motorists are sometimes targeted in service areas and subsequently tricked into stopping on the hard shoulder. The usual ploy is for a passing vehicle to suggest by gesture that there is something seriously wrong with a rear wheel. Motorists who decide to stop to check the condition of their vehicle should be extremely wary of anyone offering help. They should lock all vehicle doors and keep bags containing valuables out of sight. Car keys should not be left in the ignition.</p>

              <p>TERRORISM</p>

              <p>In mid May, the Government announced the arrest in France of several members of ETA, the Basque terrorist group, who, it was claimed, were planning a bombing campaign in tourist areas for this summer. The evidence suggested plans for car-bomb attacks against hotel establishments in the Benidorm and possibly Malaga regions, with warnings to the police before the bombs went off. These and other earlier arrests followed the threat made by ETA in March 2001 that, to further its aim of damaging the Spanish economy, it would attack Spain’s tourist industry and cause disruption in tourist areas. It warned tourists to stay away from Spanish resorts.</p>

              <p>During last summer, ETA carried out a number of mostly car bomb attacks in resorts on the east coast, and at Madrid and Malaga airports. In most cases, warnings were given and there were few casualties. The high-speed rail link between Madrid and Seville was briefly disrupted, and there was some minor evidence of planning against ferries operating between the UK and northern Spain.</p>

              <p>Since then, ETA attacks – shootings and car bombings - have continued, though their number has decreased. The main targets continue to be Spanish politicians, members of the security forces, judges and journalists. But the aim of the car bomb in Madrid in May (near a major football stadium before a big match) was clearly above all to disrupt. In mid May, the security authorities arrested two ETA terrorists in Madrid with bomb making equipment.</p>

              <p>There are also regular incidents of street violence in the Basque country, involving organizations sympathetic to ETA, and directed against the security forces, political parties and banks. These incidents normally happen at night, away from tourist areas, and often take the form of Molotov cocktail attacks against the homes of local politicians, security force buildings and cash dispensers.</p>

              <p>Although the security forces have had considerable success in arresting ETA terrorist groups, attacks are likely to continue, in which case tourists could become caught up. Although warnings have normally been given, this may not always be the case. Or a bomb might explode prematurely. Statistically your chances of being caught up in a terrorist outrage are extremely low. But there is just the possibility of being in the wrong place at the wrong time. Were there to be a further attack in a tourist area, the chances of some tourists being involved would be relatively high given the many millions of foreign tourists who visit Spain each year.</p>
              <p>If further incidents take place, tourists can expect disruptions from real or hoax terrorist attempts. Visitors should follow the instructions of the local police and other authorities.</p>

              <p>Gibraltar</p>

              <p>Spanish border checks mean travelers may experience delays in crossing between Spain and Gibraltar.</p>

              <p>Road Safety</p>

              <p>Visitors should take particular care when driving as regulations and customs are different from those in the UK and the accident rate is higher. Pedestrians should take care particularly when crossing, or walking along, unlit roads at night. Driving licences and insurance documents must be carried and produced for inspection if required.</p>

              <p>It is a legal requirement for motorists traveling to or transiting Spain to carry (in all vehicles) two red warning triangles to be placed, in the event of an accident or breakdown, in front of and behind the vehicle. Failure to comply may result in the imposition of a spot fine of up to 90 Euros. This requirement is in addition to the need for drivers to carry a spare wheel, a spare fan belt and full set of spare bulbs plus the tools to change them.</p>

              <p>Spanish laws prohibit the carriage of any load on the back of cars, camper vans or caravans, which protrudes beyond either the length of the width of the carrying vehicle. It is therefore illegal to carry bicycles or mopeds on the backs of cars, camper vans or caravans. Bicycles can, however, be carried on the roof of a car provided they are safely secured. Both bicycles and mopeds should, if possible, be carried inside camper vans and/or caravans or in the panniers provided for the purpose in some makes of these types of vehicles.</p>

              <p>HEALTH</p>

              <p>Emergency Health Care</p>

              <p>Visitors should obtain an E111 form from their local post office/social security office to cover the costs of any emergency health care they receive at State run hospitals during their stay. But, please note that those unlucky enough to be involved in an accident may be taken to a private clinic in the first instance where an E111 will not be valid to settle the bill. Visitors are therefore strongly recommended to also take out full private insurance cover.</p>

              <p>Additionally, an E111 form gives no entitlement to medical repatriation costs, nor does it cover ongoing illnesses of a non-urgent nature. Visitors to Andorra, which is not an EU member, are specifically reminded that E111 forms are not accepted there.</p>

              <p>Classical Swine Fever</p>

              <p>Since June 2001, an outbreak of Classical Swine Fever has affected the regions of Lerida and Castellón. This is a very serious pig disease but it does not affect humans. The Spanish authorities have taken appropriate disease control measures. All meat from the affected area must be marked with a special oval health stain with a cross through it. This meat may only be used to produce cooked products and it is illegal to bring this meat to the United Kingdom. Visitors to Spain should be aware that they must not bring back any prohibited meat as it could bring disease with it.</p>

              <p>GENERAL</p>

              <p>Purchase of Property, Timeshare Ownership and Holiday Clubs</p>

              <p>British citizens intending to purchase a property in Spain are strongly advised to engage a local lawyer. Some general guidance notes on the subject are available from the Spanish Desk in the Consular Division of the Foreign and Commonwealth Office, Room G/105/6, Old Admiralty Building, Whitehall, London, SW1A 2PA; and from British Consular Offices in Spain. Timeshare ownership is well established in Spain with many known and respected companies, agents and resorts operating legally, fairly and successfully. However, there are equally many unscrupulous companies in operation, some of which claim to provide various incentives (including stock market investments and discounts on airfares and accommodation) when exchanging existing timeshare ownership or taking out membership of holiday clubs.</p>

              <p>More often than not, such inducements do not materialize once a deal has been signed and sealed. Anyone who is approached by agents operating such schemes should treat the approaches with the utmost caution.</p>

              <p>Purchases of Tobacco products and Alcoholic drinks for export</p>

              <p>Following the withdrawal of duty free facilities within the European Union, customs authorities in all member countries have introduced guidance levels for the importation of tobacco, alcohol and other products purchased by visitors for their own use. These levels should be checked with HM Customs. Travelers who purchase more than the amount specified by HM Customs, must be able to satisfy Customs Officers at both the point of departure and arrival that the goods are for their personal use. Failure to do so may result in the goods being confiscated and/or a large fine being imposed.</p>

              <p>Dangerous cigarette lighters</p>

              <p>United Kingdom airlines and the Civil Aviation Authority are concerned about the serious fire risk in hold loaded luggage arising from promotions in Spanish holiday resorts in which cigarette lighters are attached to and/or packed in cartons of some brands of cigarettes. The lighters have a sensitive electronic ignition, which can be activated by movement within a suitcase as it is being transported. Travelers who buy such cartons of cigarettes are advised to remove the lighters and dispose of them prior to their return flight as these lighters should not be carried onboard an aircraft.</p>

              <p>The euro</p>

              <p>The euro was introduced in Spain on 1 January 2002. The Peseta is no longer a valid currency. However, peseta notes and coins may continue to be changed into euros at any bank in Spain up to 30 June 2002. Thereafter, only Peseta notes will be accepted for exchange and only in branches of the Bank of Spain located in Madrid and regional capitals.</p>
              <p>Information taken from www.fco.gov.uk on the 3rd June 2002. Information supplied correct at time of posting.</p>

            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Banking & Finances in Madrid</h2>
          <Card>
            <CardContent className="pt-6">
              <p>Details coming soon about banking services, opening accounts, and managing finances in Madrid.</p>
            </CardContent>
          </Card>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Connectivity & Home Services (Mobile, Internet, Utilities)</h2>
          <Card>
            <CardContent className="pt-6">
              <p>Details coming soon about setting up mobile phones, internet, and utilities in Madrid.</p>
            </CardContent>
          </Card>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Healthcare Guide for Madrid</h2>
          <Card>
            <CardContent className="pt-6">
              <p>Details coming soon about accessing healthcare services in Madrid, including public and private options.</p>
            </CardContent>
          </Card>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Education & Childcare in Madrid</h2>
          <Card>
            <CardContent className="pt-6">
              <p>Details coming soon about schools, universities, language learning, and childcare options in Madrid.</p>
            </CardContent>
          </Card>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Working in Madrid</h2>
          <Card>
            <CardContent className="pt-6">
              <p>Details coming soon about finding jobs, work permits, and the employment market in Madrid.</p>
            </CardContent>
          </Card>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Student Life Essentials in Madrid</h2>
          <Card>
            <CardContent className="pt-6">
              <p>Details coming soon about resources and tips specifically for students living in Madrid.</p>
            </CardContent>
          </Card>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Community & Integration in Madrid</h2>
          <Card>
            <CardContent className="pt-6">
              <p>Details coming soon about joining communities, meeting people, and integrating into Madrid life.</p>
            </CardContent>
          </Card>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Religions & Faiths</h2>
          <p className="text-lg mb-6">Information about places of worship in Madrid is available for longer-term residents, loaded from <code>src/data/essentialsData.ts</code>.</p>

 <PlacesOfWorshipList places={placesOfWorship} />

        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Daily Necessities & Services in Madrid</h2>
          <Card>
            <CardContent className="pt-6">
              <p>Details coming soon about essential services and daily necessities in Madrid, from grocery shopping to postal services.</p>
            </CardContent>
          </Card>
        </section>
      </div>
    </Layout>
  );
};

export default Living;
