import baImg from "../assets/tt.jpeg";
import kerImg from "../assets/ka.jpeg";
import tapImg from "../assets/taptap.jpeg";
import nigImg from "../assets/shi.jpeg";

// No PDF imports needed since they are in the public folder

export const diningOutlets = [
  {
    id: 1,
    name: "GOVERNOR'S BAR",
    cuisine: "Colonial - Contemporary - Great Spirits",
    description:
      "Indulge in an era of colonial elegance. Offering a premium selection of local spirits, beers, ciders, vintage malts and refined Sri Lankan-inspired appetizers. The Governor’s Bar is where heritage meets high-end mixology.",
    image: baImg,
    openingHours: "02:00 PM - Midnight",
    status: "Open Daily",
    dressCode: "Smart Casual / Formal",
    menuLink: "/menus/Bite_Menu.pdf",
  },
   {
    id: 4,
    name: "ISTANBUL NIGHTS",
    cuisine: "Shisha - hookah terrace",
    description:
      "Experience the magic of the Bosphorus in the heart of Colombo. Featuring authentic and premium shisha - hookah, mocktails and fresh juice under the stars for a true Mediterranean escape.",
    image: nigImg,
    openingHours: "02:00 PM - Midnight",
    status: "Open Daily",
    dressCode: "Evening Wear / Smart Casual",
    menuLink: "/menus/Istanbul_Nights_Menu.pdf",
  },
  {
    id: 3,
    name: "TAP BAR",
    cuisine: "Craft - Draft - Tap Beers - Ciders",
    description:
      "The ultimate destination for draft and craft beer lovers with a great selection of ciders. Enjoy a chilled atmosphere with an extensive range of local and international brews on tap, complemented by spicy, localized Bar bites.",
    image: tapImg,
    openingHours: "02:00 PM - Midnight,\n2:00 PM - 8:00 PM",
    status: "Monday to Wednesday,\nThursday to Sunday",
    dressCode: "Casual / Trendy",
    menuLink: "/menus/Beer_Menu.pdf",
  },
  {
    id: 2,
    name: "KARAOKE SUITE",
    cuisine: "Cocktails - Shots - Wines - Bites",
    description:
      "Sing your heart out in total privacy. Our Karaoke & Singing Suite combines a state-of-the-art sound system with a vibrant menu of cocktails, shots, wines, Bar Bites and signature platters perfect for sharing with the squad.",
    image: kerImg,
    openingHours: "08:30 PM - 01:00 AM",
    status: "Thursday to Sunday",
    p: "Karaoke Nights Reservations Only",
    dressCode: "Casual",
    menuLink: "/menus/Bar_Menu.pdf",
  },
];
