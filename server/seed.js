const mongoose = require('mongoose');
const Restaurant = require('./models/Restaurant');
require('dotenv').config();

const seedData = [
    {
        name: "Grand Terrace",
        description: "Experience the epitome of luxury dining with our diverse international cuisine. From breakfast buffets to elegant dinners, enjoy a view that matches the taste.",
        cuisine: "International Buffet",
        image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80", // Luxury dining interior
        menus: [
            { name: "Signature Breakfast", description: "A widespread international breakfast.", price: 25 },
            { name: "Seafood Platter", description: "Fresh catch of the day grilled to perfection.", price: 45 }
        ]
    },
    {
        name: "Governor's Bar",
        description: "A classic bar setting offering the finest spirits and cocktails in a sophisticated atmosphere. Perfect for evening relaxation.",
        cuisine: "Bar & Lounge",
        image: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=1200&q=80", // Polished bar
        menus: [
            { name: "Old Fashioned", description: "Classic whiskey cocktail.", price: 15 },
            { name: "Club Sandwich", description: "Traditional club sandwich with fries.", price: 18 }
        ]
    },
    {
        name: "Governor's Mic Karaoke",
        description: "Unleash your inner star at our karaoke lounge. Fun, music, and great drinks await you and your friends.",
        cuisine: "Entertainment & Drinks",
        image: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?auto=format&fit=crop&w=1200&q=80", // Stage/Lighting
        menus: [
            { name: "Party Platter", description: "Assorted finger foods for groups.", price: 30 },
            { name: "Pitcher of Beer", description: "Choice of local or imported beer.", price: 20 }
        ]
    },
    {
        name: "Istanbul Nights",
        description: "Transport yourself to Turkey with authentic flavors, spices, and a vibrant atmosphere. A culinary journey awaits.",
        cuisine: "Turkish",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80", // Cozy dining (Placeholder for Turkish vibe)
        menus: [
            { name: "Mixed Grill", description: "Lamb chops, chicken shish, and adana kebab.", price: 35 },
            { name: "Baklava", description: "Traditional sweet pastry.", price: 10 }
        ]
    },
    {
        name: "Tap Bar",
        description: "A casual spot for craft beers and bar bites. Great for catching up with friends or watching the game.",
        cuisine: "Pub & Grill",
        image: "https://images.unsplash.com/photo-1575444758702-4a6b9222336e?auto=format&fit=crop&w=1200&q=80", // Pub/Beer
        menus: [
            { name: "Craft Burger", description: "Juicy beef patty with special sauce.", price: 16 },
            { name: "Fish & Chips", description: "Beer battered fish with chunky chips.", price: 18 }
        ]
    }
];

mongoose.connect('mongodb://localhost:27017/grandterrace', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(async () => {
        console.log('MongoDB connected for seeding');
        await seedDB();
    })
    .catch(err => {
        console.log('Connection error:', err);
        process.exit(1);
    });

const seedDB = async () => {
    try {
        await Restaurant.deleteMany({});
        await Restaurant.insertMany(seedData);
        console.log("Database seeded!");
    } catch (error) {
        console.error("Seeding error:", error);
    } finally {
        mongoose.connection.close();
    }
};
