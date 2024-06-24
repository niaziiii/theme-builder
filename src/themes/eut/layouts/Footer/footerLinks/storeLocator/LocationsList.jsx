"use client";

import LocationItems from "./LocationItems";

function LocationList() {
  const locations = [
    {
      name: "Daya Health Foods",
      address: "7398 YONGE ST. UNIT 36 D\nTHORNHILL ON L4J 8J2",
      phone: "905-881-0454",
      email: "info@dayahealthfoods.com",
      distance: "0.5 km",
      directions: "Directions",
    },
    {
      name: "Ambrosia Natural Foods",
      address: "55 Doncaster Avenue\nTHORNHILL ON L3T 1L7",
      phone: "905 881-7811",
      distance: "1.3 km",
      directions: "Directions",
    },
    {
      name: "Health Garden",
      address: "69 DONCASTER AVENUE\nTHORNHILL ON L3T 1C6",
      phone: "905-881-5764",
      email: "healthgarden@rogers.com",
      distance: "1.3 km",
      directions: "Directions",
    },
    {
      name: "Health Garden",
      address: "69 Doncaster Avenue\nTHORNHILL ON L3T 1C6",
      phone: "905-881-5764",
      distance: "1.3 km",
      directions: "Directions",
    },
    {
      name: "Ambrosia Natural Foods",
      address: "55 Doncaster Avenue\nTHORNHILL ON L3T 1L7",
      phone: "905 881-7811",
      email: "gillian@ambrosia.ca",
      distance: "1.4 km",
      directions: "Directions",
    },
    {
      name: "Nutrition House – Centrepoint Mall",
      address: "6464 YONGE STREET\nNORTH YORK ON M2M 3X4",
      phone: "416-221-2355",
      distance: "2 km",
      directions: "Directions",
    },
    {
      name: "S & H Health Foods",
      address: "6464 Yonge Street Center Point Mal\nNORTH YORK ON M2M 3X4",
      phone: "416-225-1919",
      distance: "2 km",
      directions: "Directions",
    },
    {
      name: "Nutrition House",
      address: "6464 Yonge Street\nNORTH YORK ON M2M 3X4",
      phone: "416-221-2355",
      distance: "2 km",
      directions: "Directions",
    },
    {
      name: "Natural Life Health Market",
      address: "7700 BATHURST ST. UNIT#30\nTHORNHILL ON L4J 7Y3",
      phone: "905-707-3350",
      email: "murray.nl@hotmail.com",
      distance: "2.1 km",
      directions: "Directions",
    },
    {
      name: "Natural Life Health Market",
      address: "7700 Bathurst St. Unit 30\nTHORNHILL ON L4J 7Y3",
      phone: "905 707-3350",
      fax: "905 707-3316",
      email: "kyla.nl@hotmail.com",
      distance: "2.1 km",
      directions: "Directions",
    },
    {
      name: "Nature’s Counter",
      address: "2900 Steeles Ave East\nTHORNHILL ON L3T 4X1",
      phone: "905 881 6950",
      distance: "2.2 km",
      directions: "Directions",
    },
    {
      name: "Rexall",
      address: "1 Promenade Circle\nTHORNHILL ON L4J4P8",
      phone: "905-764-0545",
      distance: "2.2 km",
      directions: "Directions",
    },
    {
      name: "Natural Life Health Market",
      address: "7700 Bathurst Street Unit 30\nTHORNHILL ON L4J 7Y3",
      phone: "905-707-3350",
      email: "kyla.nl@hotmail.com",
      distance: "2.3 km",
      directions: "Directions",
    },
    {
      name: "Rebecca Lazar",
      address: "66 Gailcrest Circle\nTHORNHILL ON L4J 5V4",
      phone: "905 887 1140",
      distance: "2.3 km",
      directions: "Directions",
    },
    {
      name: "Real Health & Fitness",
      address: "66 Gailcrest Circle\nTHORNHILL ON L4J 5V4",
      phone: "905-889-1140",
      distance: "2.3 km",
      directions: "Directions",
    },
    {
      name: "S & H Health Foods (Thornhill)",
      address: "1 PROMENADE CIRCLE MALL UNIT #105\nTHORNHILL ON L4J 4P8",
      phone: "905-709-5966",
      email: "baba2006@rogers.com",
      distance: "2.4 km",
      directions: "Directions",
    },
    {
      name: "Renee’s Esthetics and Health Products",
      address: "129 HOLM CRESCENT\nTHORNHILL ON L3T 5J4",
      phone: "905-881-0193",
      distance: "2.9 km",
      directions: "Directions",
    },
    {
      name: "Natural Wellness",
      address: "302-24 Drury Avenue\nTORONTO ON M2M 1C8",
      phone: "API error: ZERO_RESULTS",
      distance: "3.1 km",
      directions: "Directions",
    },
    {
      name: "Four Seasons Health",
      address: "5827 YONGE ST.\nTORONTO ON M2M 3T9",
      phone: "416-225-0444",
      fax: "416-225-0444",
      distance: "3.6 km",
      directions: "Directions",
    },
    {
      name: "Main Drug Mart",
      address: "3265 Bayview Avenue\nNORTH YORK ON M2K 1G4",
      phone: "416-222-5484",
      distance: "3.6 km",
      directions: "Directions",
    },
    {
      name: "Health Garden",
      address: "130 RACCO PKWY.\nTHORNHILL ON L4J 8X9",
      phone: "905-882-5483",
      email: "healthgarden@live.com",
      distance: "4 km",
      directions: "Directions",
    },
    {
      name: "Colon Therapy Health & Education Centre",
      address: "98 Rockford Road\nTORONTO ON M2R 3A7",
      phone: "416-635-5151",
      email: "carla@colonhydrotherapy.ca",
      distance: "4 km",
      directions: "Directions",
    },
    {
      name: "Kathryn Yash",
      address: "154 Jaimie Road\nTHORNHILL ON L4J 6A8",
      phone: "647 448 9274",
      email: "katie.yash@gmail.com",
      distance: "4.1 km",
      directions: "Directions",
    },
    {
      name: "Pure Cell Natural Foods",
      address: "5418 Yonge Street Unit 12\nNORTH YORK ON M2N 6X4",
      phone: "416-512-1219",
      email: "info@purecell.net",
      distance: "4.4 km",
      directions: "Directions",
    },
    {
      name: "Purecell Naturela Food",
      address: "5418 YONGE ST UNIT #12\nNORTH YORK ON M2N 6X4",
      phone: "416-512-1219",
      email: "info@purecell.net",
      distance: "4.4 km",
      directions: "Directions",
    },
  ];

  return (
    <div className="flex flex-col grow text-lg leading-6 max-md:mt-1.5">
      <div className="storeScrollbar overflow-y-auto overflow-x-auto relative max-h-[65vh] max-md:order-2 w-full">
        {locations.map((location, index) => (
          <LocationItems key={index} {...location} />
        ))}
      </div>
    </div>
  );
}

export default LocationList;
