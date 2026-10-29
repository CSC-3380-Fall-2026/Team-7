interface Attraction {
    name: string;
    category: string;
    estimatedCost: number | null;
}

interface Weather {
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

const attractionCategories: string[] = [
    "Entertainment", 
    "Food & Dining", 
    "Outdoor & Nature", 
    "Beaches & Water Activities", 
    "History & Culture", 
    "Museums & Art", 
    "Nightlife", 
    "Shopping", 
    "Sports & Recreation", 
    "Family Friendly", 
    "Theme Parks", 
    "Sightseeing & Landmarks",
    "Wellness & Relaxation", 
    "Festivals and Events"
]; 

const destinations: Destination[] = [


    {
        id: 1,
        city: "Atlanata",
        state: "Georgia",
        description: " Atlanta is a vibrant city in Georgia, known for its rich history, cultural diversity, and lively entertainment scene.",
        duration: "3-4 days",
        attractions: [],

        weatherOptions: [
            {
                condition: "Sunny",
                month: ["June", "July", "August"],
                activities: [],
                event: []
            },
            {
                condition: "Cool",
                month: ["October", "November"],
                activities: [],
                event: []
            }


        ],
        transportation: [
            "MARTA",
            "Uber/Lyft",
            "Rental Car",
            "Walking"]
    },

    {
        id: 2,
        city: "Chicago",
        state: "Illinois",
        description: "Chicago is a city in Illinois, known for its vibrant culture, music, and cuisine.",
        duration: "3-5 days",
        attractions: [],
        weatherOptions: [
            {
                condition: "Snowy",
                month: ["December", "January", "February"],
                activities: [],
                event: []
            },
            {
                condition: "Sunny",
                month: ["June", "July", "August"],
                activities: [],
                event: []
            }
        ],
        transportation: [
            "CTA Trains",
            "CTA Buses",
            "Walking",
            "Uber/Lyft"
        ]
    },

    {
        id: 3,
        city: "Denver",
        state: "Colorado",
        description: "Denver is a city in Colorado, known for its vibrant culture, outdoor activities, and proximity to the Rocky Mountains.",
        duration: "3-5 days",
        attractions: [],
        weatherOptions: [
            {
                condition: "Snowy",
                month: ["December", "January", "February", "March"],
                activities: [],
                event: []
            },
            {
                condition: "Sunny",
                month: ["June", "July", "August"],
                activities: [],
                event: []
            }
        ],
        transportation: [
            "Rental Car",
            "RTD Rail",
            "RTD Buses",
            "Walking",
            "Uber/Lyft"
        ]
    },

    {
        id: 4,
        city: "Honolulu",
        state: "Hawaii",
        description: "Honolulu is a city in Hawaii, known for its beautiful beaches, vibrant culture, and tropical climate.",
        duration: "5-7 days",
        attractions: [],
        weatherOptions: [
            {
                condition: "Sunny",
                month: ["May", "June", "July", "August", "September"],
                activities: [],
                event: []
            },
            {
                condition: "Rainy",
                month: ["November", "December", "January", "February", "March"],
                activities: [],
                event: []
            }
        ],
        transportation: [
            "TheBus",
            "Uber/Lyft",
            "Rental Car",
            "Walking",
            "Skyline Rail"
        ]
    },

    {
        id: 5,
        city: "Houston",
        state: "Texas",
        description: "Houston is a city in Texas, known for its vibrant culture, space exploration, and diverse cuisine.",
        duration: "3-4 days",
        attractions: [],
        weatherOptions: [
            {
                condition: "Hot",
                month: ["June", "July", "August", "September"],
                activities: [],
                event: []
            },
            {
                condition: "Mild",
                month: ["March", "April", "May"],
                activities: [],
                event: []
            }
        ],
        transportation: [
            "Rental Car",
            "Uber/Lyft",
            "Metro Buses",
            "METRO Rail"
        ]
    },

    {
        id: 6,
        city: "Las Vegas",
        state: "Nevada",
        description: "Las Vegas is a city in Nevada, known for its vibrant culture, entertainment industry, and iconic casinos.",
        duration: "3-4 days",
        attractions: [],
        weatherOptions: [
            {
                condition: "Hot",
                month: ["June", "July", "August", "September"],
                activities: [],
                event: []
            },
            {
                condition: "Mild",
                month: ["March", "April", "May"],
                activities: [],
                event: []
            }
        ],
        transportation: [
            "Walking",
            "Uber/Lyft",
            "RTC Buses",
            "Rental Car",
            "Las Vegas Monorail"
        ]
    },

    {
        id: 7,
        city: "Los Angeles",
        state: "California",
        description: "Los Angeles is a city in California, known for its vibrant culture, entertainment industry, and beautiful beaches.",
        duration: "4-6 days",
        attractions: [],
        weatherOptions: [
            {
                condition: "Sunny",
                month: ["June", "July", "August", "September"],
                activities: [],
                event: []
            },
            {
                condition: "Rainy",
                month: ["December", "January", "February", "March"],
                activities: [],
                event: []
            }
        ],
        transportation: [
            "Rental Car",
            "Uber/Lyft",
            "Metro Buses",
            "Metro Rail"
        ]
    },
    {
        id: 8,
        city: "Miami",
        state: "Florida",
        description: "Miami is a city in Florida, known for its vibrant culture, beautiful beaches, and lively nightlife.",
        duration: "3-5 days",
        attractions: [],
        weatherOptions: [
            {
                condition: "Hot",
                month: ["June", "July", "August", "September"],
                activities: [],
                event: []
            },
            {
                condition: "Mild",
                month: ["December", "January", "February", "March"],
                activities: [],
                event: []
            }
        ],
        transportation: [
            "Uber/Lyft",
            "Rental Car",
            "Walking",
            "Metromover",
            "Metrobus",
            "Metrorail"
        ]
    },

    {
        id: 9,
        city: "Nashville",
        state: "Tennessee",
        description: "Nashville is a city in Tennessee, known for its vibrant music scene, cultural attractions, and Southern hospitality.",
        duration: "3-4 days",
        attractions: [],
        weatherOptions: [{
            condition: "Sunny",
            month: ["June", "July", "August", "September"],
            activities: [],
            event: []
        },
        {
            condition: "Cool",
            month: ["October", "November"],
            activities: [],
            event: []
        }],
        transportation: [
            "Uber/Lyft",
            "Rental Car",
            "Walking",
            "WeGo Buses"
        ]
    },

    {
        id: 10,
        city: "New Orleans",
        state: "Louisiana",
        description: "New Orleans is a city in Louisiana, known for its vibrant culture, music, cuisine, and historic architecture.",
        duration: "3-4 days",
        attractions: [],
        weatherOptions: [{
            condition: "Hot",
            month: ["June", "July", "August", "September"],
            activities: [],
            event: []
        },
        {
            condition: "Mild",
            month: ["October", "November", "December", "January", "February", "March"],
            activities: [],
            event: []
        }
        ],
        transportation: [
            "Streetcar",
            "Uber/Lyft",
            "Rental Car",
            "Walking",
            "RTA Buses"
        ]
    },

    {
        id: 11,
        city: "New York City",
        state: "New York",
        description: "New York City is known for its iconic landmarks, diverse neighborhoods, world-famous attractions, and vibrant cultural scene.",
        duration: "4-6 days",
        attractions: [],
        weatherOptions: [
            {
                condition: "Snowy",
                month: ["December", "January", "February", "March"],
                activities: [],
                event: []
            },
            {
                condition: "Sunny",
                month: ["April", "May", "June", "July", "August", "September"],
                activities: [],
                event: []
            }
        ],
        transportation: [
            "Subway",
            "Uber/Lyft",
            "Rental Car",
            "Walking",
            "Taxi",
            "MTA Buses"
        ]

    },

    {
        id: 12,
        city: "Orlando",
        state: "Florida",
        description: "Orlando is a city in Florida, known for its theme parks, vibrant culture, and family-friendly attractions.",
        duration: "4-6 days",
        attractions: [],
        weatherOptions: [
            {
                condition: "Hot",
                month: ["June", "July", "August", "September"],
                activities: [],
                event: []
            },
            {
                condition: "Mild",
                month: ["October", "November", "December", "January", "February", "March"],
                activities: [],
                event: []
            }
        ],
        transportation: [
            "Rental Car",
            "Uber/Lyft",
            "Hotel Shuttles",
            "Theme Park Transportation",
            "LYNX Buses"
        ]
    },

    {
        id: 13,
        city: "San Francisco",
        state: "California",
        description: "San Francisco is a city in California, known for its iconic Golden Gate Bridge, vibrant neighborhoods, and cultural diversity.",
        duration: "3-5 days",
        attractions: [],
        weatherOptions: [
            {
                condition: "Foggy",
                month: ["June", "July", "August", "September"],
                activities: [],
                event: []
            },
            {
                condition: "Rainy",
                month: ["October", "November", "December", "January", "February", "March"],
                activities: [],
                event: []
            }
        ],
        transportation: [
            "Muni Buses",
            "BART",
            "Uber/Lyft",
            "Cable Car",
            "Walking"
        ]
    },

    {
        id: 14,
        city: "Seattle",
        state: "Washington",
        description: "Seattle is a city in Washington, known for its vibrant culture, iconic Space Needle, and beautiful natural surroundings.",
        duration: "3-5 days",
        attractions: [],
        weatherOptions: [{
            condition: "Rainy",
            month: ["October", "November", "December", "January", "February", "March"],
            activities: [],
            event: []
        },
        {
            condition: "Sunny",
            month: ["April", "May", "June", "July", "August", "September"],
            activities: [],
            event: []
        }
        ],
        transportation: [
            "Link Light Rail",
            "King County Metro Buses",
            "Uber/Lyft",
            "Rental Car"
        ]
    },

    {
        id: 15,
        city: "Washington",
        state: "District of Columbia",
        description: "Washington is the capital city of the United States, known for its historic monuments, museums, and political significance.",
        duration: "3-5 days",
        attractions: [],
        weatherOptions: [
            {
                condition: "Hot",
                month: ["June", "July", "August", "September"],
                activities: [],
                event: []
            },
            {
                condition: "Cool",
                month: ["October", "November", "December", "January", "February", "March"],
                activities: [],
                event: []
            }
        ],
        transportation: [
            "Metro",
            "Metro Buses",
            "Walking",
            "Uber/Lyft",
            "Capital Bikeshare"
        ]
    },
];
