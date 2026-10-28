interface Attraction {
    name: string; 
    category: string;
    estimatedCost: number | null;
}

interface Weather{
    condition: string;
    month: string[];
    activities: string[];
    event: string[];
}

interface Destination {
    id: number;
    city: string;
    state: string;
    description: string;
    duration: string;
    attractions: Attraction[];
    weatherOptions: Weather[];
    transportation: string[];
}

const destinations: Destination[] = [
//where the cities will eventually be added


{
    id: 1,
    city: "Atlanta",
    state: "Georgia",
    description: "Atlanta is a vibrant city known for its rich history and cultural attractions.",
    duration: "3-4 days",

    attractions: [
        {
            name: "Georgia Aquarium",
            category: "Entertainment",
            estimatedCost: null
        },

        {
            name: "World of Coca-Cola",
            category: "Entertainment",
            estimatedCost: null
        },
        {
            name: "Atlanta Botanical Garden",
            category: "Nature",
            estimatedCost: null
        },
        {
            name: "Piedmont Park",
            category: "Nature",
            estimatedCost: 0
        },
        {
            name: "Ponce City Market",
            category: "Shopping and Dining",
            estimatedCost: null
        },
        {
            name: "Atlanta Beltline",
            category: "Outdoor Recreation",
            estimatedCost: 0
        }
    ],
    
    weatherOptions: [
        {
            condition: "Warm Spring",
            month: ["March", "April", "May"],
            activities: [
                "Visit Atlanta Botanical Garden",
                "Walk the Atlanta BeltLine",
                "Explore Piedmont Park",
                "Enjoy rooftop dining",
                "Explore historic neighborhoods"
            ],
            event: [
                "Atlanta Dogwood Festival",
                "Atlanta Film Festival",
                "Spring Arts Festival"
            ]
        },
        { condition: "Cool Autumn",
            month: ["September", "October", "November"],
            activities: [
                "Visit fall festivals",
                "Explore scenic parks",
                "Attend a football game",
                "Visit local food markets",
                "Explore historic attractions"
            ],
            event: [
                "Atlanta Pride Festival",
                "Little 5 Points Halloween Festival",
                "Fall Harvest Celebrations"
            ]
        }
    ],

    transportation: [
        "Rental Car",
        "MARTA",
        "Uber",
        "Walking"
    ]
}, 
{
    id: 2,
    city: "New Orleans",
    state: "Louisiana",
    description: " A city known for its vibrant culture, music, and cuisine.",
    duration: "3-4 days",
    attractions: [
        {
            name: "French Quarter",
            category: "Cultural and Historical",
            estimatedCost: 0
        },
        {
            name: "Bourbon Street",
            category: "Cultural and Historical",
            estimatedCost: 0
        },
        {
            name: "Jackson Square",
            category: "Sightseeing",
            estimatedCost: 0
        },
        {
            name: "Café du Monde",
            category: "Shopping and Dining",
            estimatedCost: null
        },
        {
            name:"Frenchmen Street",
            category: "Music and nightlife",
            estimatedCost: 0
        }, 
        {
            name:" National WWII Museum",
            category: "Museum",
            estimatedCost: null
        },
        {
            name: "Mississaippi River Cruise",
            category: "Tours and Experiences",
            estimatedCost: null
        } 



    ],
    weatherOptions:[
        {
            condition: "Mild and Pleasant",
            month: ["March", "April", "May"],
            activities: [
                "Explore the French Quarter",
                "Visit local museums",
                "Enjoy live music",
                "Sample local cuisine",
                "Participate in cultural events"
            ],
            event: [
                "Mardi Gras",
                "Jazz Fest",
                "French Quarter Festival"
            ]
        },
        {
            condition: "Cool Autumn",
            month: ["September", "October", "November"],
            activities: [
                "Explore the French Quarter",
                "Visit local museums",
                "Enjoy live music",
                "Sample local cuisine",
                "Participate in cultural events"
            ],
            event: [
                "Voodoo Fest",
                "New Orleans Jazz & Heritage Festival",
                "Halloween in the French Quarter"
            ]
        }

    ],
    transportation: [
        "Walking",
        "Streetcar",
        "Uber/Lyft",
        "RTA Bus",
        "Taxi",
        "Bicycle Rental"
    ],

},
{
    id: 3,
    city: "New York",
    state: "New York",
    description: "New York City is a vibrant metropolis known for its iconic landmarks, diverse culture, and bustling urban life.",
    duration: "3-5 days",

    attractions: [
        {
            name: "Statue of Liberty",
            category: "Sightseeing",
            estimatedCost: 0
        }, 
    {
        name: "Times Square",
        category: "Sightseeing",
        estimatedCost: 0
    }, 
    {
    name: "Central Park",
    category: "Sightseeing",
    estimatedCost: 0
    }, 
{
    name: "Empire State Building",
    category: "Sightseeing",
    estimatedCost: 0    
},

    ],
    weatherOptions: [
{
    condition: "Snowy Winter", 
    month: ["December", "January", "February"],
    activities: [
        "Visit an indoor museum",
        "Enjoy ice skating",
        "Explore Times Square",
        "Sample local cuisine",
        "Explore holiday attractions",
        "Participate in cultural events"
    ],
    event: [
        "New Year's Eve in Times Square",
        "Winter Jazzfest",
        "New York City Marathon", 
        "Rockefeller Center Christmas Tree Lighting",
        "Bryant Park Winter Village", 
        "NYC Restaurant Week"
    ]

}, 
{
    condition:"Mild Spring",
    month: ["March", "April", "May"],
    activities: [
        "Visit Central Park",
        "Enjoy outdoor dining",
        "Visit outdoor markets",
        "Explore Times Square",
        "Explore botanical gardens",
        "Go waterfront sightseeing",
        "Explorre outdoor dining",
        "Sample local cuisine",
        "Participate in cultural events"
    ],
    event: [
        "Sakura Matsuri at the Brooklyn Botanic Garden",
        "Tribeca Film Festival",
        "New York International Auto Show",
        "Spring Cultural Festival",
        "Easter Parade on Fifth Avenue"
    ]
}

    ],
    transportation: [
    "Subway",
    "Walking",
    "MTA Bus",
    "Uber/Lyft",
    "Taxi",
    "NYC Ferry",
    "Citi Bike"
]
}


];



    

