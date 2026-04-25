import baImg from "../assets/tt.jpeg";
import kerImg from "../assets/ka.jpeg";
import tapImg from "../assets/taptap.png";
import nigImg from "../assets/shi.png";

// No PDF imports needed since they are in the public folder

export const diningOutlets = [
  {
    id: 1,
    name: "GOVERNOR'S BAR",
    cuisine: "French Contemporary & Spirits",
    description:
      "Indulge in an era of colonial elegance. Offering a premium selection of vintage malts and refined French-inspired appetizers, the Governor’s Bar is where heritage meets high-end mixology.",
    image: baImg,
    openingHours: "11:00 AM - 11:00 PM",
    dressCode: "Smart Casual / Formal",
    menuLink: "/menus/Bite_Menu.pdf",
  },
  {
    id: 2,
    name: "KARAOKE SUITE",
    cuisine: "Asian Fusion & Bites",
    description:
      "Sing your heart out in total privacy. Our Karaoke Suites combine a state-of-the-art sound system with a vibrant menu of Asian street food and signature platters perfect for sharing with the squad.",
    image: kerImg,
    openingHours: "06:00 PM - 02:00 AM",
    dressCode: "Casual",
    menuLink: "/menus/Bar_Menu.pdf",
  },
  {
    id: 3,
    name: "TAP BAR",
    cuisine: "Artisan Beers & Tapas",
    description:
      "The ultimate destination for craft beer lovers. Enjoy a chilled atmosphere with an extensive range of local and international brews on tap, complemented by spicy, localized tapas.",
    image: tapImg,
    openingHours: "04:00 PM - 12:00 AM",
    dressCode: "Casual / Trendy",
    menuLink: "/menus/Beer_Menu.pdf",
  },
  {
    id: 4,
    name: "ISTANBUL NIGHTS",
    cuisine: "Middle Eastern & Shisha",
    description:
      "Experience the magic of the Bosphorus in the heart of Colombo. Featuring authentic Turkish mezze, grilled delights, and premium shisha under the stars for a true Mediterranean escape.",
    image: nigImg,
    openingHours: "06:00 PM - 03:00 AM",
    dressCode: "Evening Wear / Smart Casual",
    menuLink: "/menus/Istanbul_Nights_Menu.pdf",
  },
];