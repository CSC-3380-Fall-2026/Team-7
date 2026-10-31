export interface Attraction {
    name: string;
    category: string;
    estimatedCost: number | null;
}

interface Weather {
    condition: string;
    month: string[];
    attractions: Attraction[];
    activities: string[];
    event: string[];
}


interface Destination {
    id: number;
    city: string;
    state: string;
    description: string;
    duration: string;
    weatherOptions: Weather[];
    transportation: string[];
}

export const attractionCategories: string[] = [
    "Entertainment",
    "Food & Dining", 
    "Outdoor & Nature", 
    "Beaches & Water Activities", 
    "History & Culture", 
    "Museums & Art", 
    "Nightlife", 
    "Sports & Recreation", 
    "Family Friendly",
    "Theme Parks", 
    "Sightseeing & Landmarks",
    "Wellness & Relaxation", 
    "Festivals and Events", 
    "Shopping"
]; 


    export const destinations: Destination[] = [


    {
        // Atlanta Destination Profile
        id: 1,
        city: "Atlanta",
        state: "Georgia",
        description: " Atlanta is a vibrant city in Georgia, known for its rich history, cultural diversity, and lively entertainment scene.",
        duration: "3-4 days",
        

        weatherOptions: [
            {
                condition: "Sunny",
                month: ["June", "July", "August"],
                attractions: [
                       {
                        name: "Piedmont Park", 
                        category: "Outdoor & Nature",
                        estimatedCost: 0
                       }, 
                       {
                        name: "Ponce City Market",
                        category: "Food & Dining",
                        estimatedCost: 0
                       },
                       {
                        name: "SkyView Atlanta",
                        category: "Entertainment",
                        estimatedCost: null
                       },
                ],
                activities: [],
                event: []
            },
            {
                condition: "Cool",
                month: ["October", "November"],
                attractions: [
                    {
                        name:"Martin Luther King Jr. National Historical Park",
                        category: "History & Culture",
                        estimatedCost: 0
                    }, 
                    {
                        name: "Lenox Square",
                        category: "Shopping",
                        estimatedCost: 0
                    }, 
                    { 
                        name:"Georgia Aquarium",
                        category: "Family Friendly",
                        estimatedCost:null
                    }
                ],
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
        // Chicago Destination Profile
        id: 2,
        city: "Chicago",
        state: "Illinois",
        description: "Chicago is a city in Illinois, known for its vibrant culture, music, and cuisine.",
        duration: "3-5 days",

        weatherOptions: [
            {
                condition: "Snowy",
                month: ["December", "January", "February"],
                attractions: [
                    {
                        name:"Art Institute of Chicago",
                        category: "Museums & Art",
                        estimatedCost: null
                    }, 
                    { 
                        name: "360 CHICAGO Observation Deck",
                        category: "Sightseeing & Landmarks",
                        estimatedCost: null
                    }, 
                    {
                        name: "Water Tower Place",
                        category: "Shopping",
                        estimatedCost: 0 
                    }
                ],
                activities: [],
                event: []
            },
            {
                condition: "Sunny",
                month: ["June", "July", "August"],
                attractions: [
                    {name: "Millennium Park",
                        category: "Outdoor & Nature",
                        estimatedCost: 0
                    }, 
                    {
                        name: "Navy Pier",
                        category: "Entertainment",
                        estimatedCost: 0
                    }, 
                    {
                        name: "North Avenue Beach",
                        category: "Beaches & Water Activities",
                        estimatedCost: 0
                    }
                ],
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
        // Denver Destination Profile
        id: 3,
        city: "Denver",
        state: "Colorado",
        description: "Denver is a city in Colorado, known for its vibrant culture, outdoor activities, and proximity to the Rocky Mountains.",
        duration: "3-5 days",
       
        weatherOptions: [
            {
                condition: "Snowy",
                month: ["December", "January", "February", "March"],
                attractions: [ 
                    {
                        name: "Denver Art Museum",
                        category: "Museums & Art",
                        estimatedCost: null
                    }, 
                    {
                        name:"Denver Pavilions",
                        category: "Shopping",
                        estimatedCost: null
                    }, 
                    {
                        name: "Meow Wolf Convergence Station",
                        category: "Entertainment",
                        estimatedCost: null
                    }
                ],
                activities: [],
                event: []
            },
            {
                condition: "Sunny",
                month: ["June", "July", "August"],
                attractions: [
                    {
                        name: "Red Rocks Park and Amphitheatre",
                        category: "Outdoor & Nature",
                        estimatedCost: 0
                    }, 
                    { 
                        name: "Denver Botanic Gardens",
                        category: "Outdoor & Nature",
                        estimatedCost: null
                    }, 
                    {
                        name: "Coors Field",
                        category: "Sports & Recreation",
                        estimatedCost: null
                    }
                ],
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
        // Honolulu Destination Profile
        id: 4,
        city: "Honolulu",
        state: "Hawaii",
        description: "Honolulu is a city in Hawaii, known for its beautiful beaches, vibrant culture, and tropical climate.",
        duration: "5-7 days",
       
        weatherOptions: [
            {
                condition: "Sunny",
                month: ["May", "June", "July", "August", "September"],
                attractions: [
                    {
                        name: "Waikiki Beach",
                        category: "Beaches & Water Activities",
                        estimatedCost: 0
                    }, 
                    {
                        name: "Diamond Head State Monument",
                        category: "Outdoor & Nature",
                        estimatedCost: null
                    }, 
                    {
                        name: "Ala Moana Center",
                        category: "Shopping",
                        estimatedCost: 0
                    }, 
                ],
                activities: [],
                event: []
            },
            {
                condition: "Rainy",
                month: ["November", "December", "January", "February", "March"],
                attractions: [
                    {
                        name: "Bishop Museum",
                        category: "Museums & Art",
                        estimatedCost: null
                    }, 
                    {
                        name: "Iolani Palace",
                        category: "History & Culture",
                        estimatedCost: null
                    }, 
                    {
                        name: "International Market Place",
                        category: "Shopping",
                        estimatedCost: 0
                    }
                ],                
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
        // Houston Destination Profile
        id: 5,
        city: "Houston",
        state: "Texas",
        description: "Houston is a city in Texas, known for its vibrant culture, space exploration, and diverse cuisine.",
        duration: "3-4 days",
  
        weatherOptions: [
            {
                condition: "Hot",
                month: ["June", "July", "August", "September"],
                attractions: [
                    {
                        name: "Space Center Houston",
                        category: "Museums & Art",
                        estimatedCost: null
                    }, 
                    {
                        name: "The Galleria",
                        category: "Shopping",
                        estimatedCost: 0
                    }, 
                    {
                        name: "Downtown Aquarium Houston",
                        category: "Family Friendly",
                        estimatedCost: null
                    }
                ],
                activities: [],
                event: []
            },
            {
                condition: "Mild",
                month: ["March", "April", "May"],
                attractions: [
                    {
                        name: "Hermann Park",
                        category: "Outdoor & Nature",
                        estimatedCost: 0
                    }, 
                    {
                        name: "POST Houston",
                        category: "Food & Dining",
                        estimatedCost: 0
                    }, 
                    {
                        name:"Houston Zoo", 
                        category: "Family Friendly",
                        estimatedCost: null
                    }
                ],
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
        // Las Vegas Destination Profile
        id: 6,
        city: "Las Vegas",
        state: "Nevada",
        description: "Las Vegas is a city in Nevada, known for its vibrant culture, entertainment industry, and iconic casinos.",
        duration: "3-4 days",
  
        weatherOptions: [
            {
                condition: "Hot",
                month: ["June", "July", "August", "September"],
                attractions: [
                    {
                        name: "Bellagio Conservatory & Botanical Gardens",
                        category: "Sightseeing & Landmarks",
                        estimatedCost: 0
                    },
                    {
                        name:"The Forum Shops at Caesars Palace",
                        category: "Shopping",
                        estimatedCost: 0
                    }, 
                    {
                        name: "Shark Reef Aquarium",
                        category: "Family Friendly",
                        estimatedCost: null
                    }
                ],
                activities: [],
                event: []
            },
            {
                condition: "Mild",
                month: ["March", "April", "May"],
                attractions: [
                    {
                        name: "Red Rock Canyon National Conservation Area",
                        category: "Outdoor & Nature",
                        estimatedCost: null
                    }, 
                    {
                        name: "The LINQ Promenade",
                        category: "Food & Dining",
                        estimatedCost: 0
                    }, 
                    {
                        name: "Fremont Street Experience",
                        category: "Sightseeing & Landmarks",
                        estimatedCost: 0
                    }
                ],
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
        // Los Angeles Destination Profile
        id: 7,
        city: "Los Angeles",
        state: "California",
        description: "Los Angeles is a city in California, known for its vibrant culture, entertainment industry, and beautiful beaches.",
        duration: "4-6 days",
   
        weatherOptions: [
            {
                condition: "Sunny",
                month: ["June", "July", "August", "September"],
                attractions: [
                    {
                        name: "Santa Monica Beach",
                        category: "Beaches & Water Activities",
                        estimatedCost: 0
                    }, 
                    {
                        name:"Griffith Observatory",
                        category: "Sightseeing & Landmarks",
                        estimatedCost: 0
                    },
                    {
                        name: "The Grove",
                        category: "Shopping",
                        estimatedCost: 0
                    }
                ],
                activities: [],
                event: []
            },
            {
                condition: "Rainy",
                month: ["December", "January", "February", "March"],
                attractions: [
                    {
                        name: "The Getty Center",
                        category: "Museums & Art",
                        estimatedCost: 0
                    } , 
                    {
                        name: "Universal Studios Hollywood",
                        category: "Entertainment",
                        estimatedCost: null
                    },
                    {
                        name: "Grand Central Market",
                        category: "Food & Dining",
                        estimatedCost: 0
                    }
                ],
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
        // Miami Destination Profile
        id: 8,
        city: "Miami",
        state: "Florida",
        description: "Miami is a city in Florida, known for its vibrant culture, beautiful beaches, and lively nightlife.",
        duration: "3-5 days",
      
        weatherOptions: [
            {
                condition: "Hot",
                month: ["June", "July", "August", "September"],
                attractions: [
                    {
                        name: "Frost Science Museum",
                        category: "Museums & Art",
                        estimatedCost: null
                    }, 
                    {
                        name: "Dolphin Mall",
                        category: "Shopping",
                        estimatedCost: 0
                    }, 

                    { 
                        name: "Bayside Marketplace",
                        category: "Food & Dining",
                        estimatedCost: 0
                    }
                
                ],
                activities: [],
                event: []
            }, 
                
            {
                condition: "Mild",
                month: ["December", "January", "February", "March"],
                attractions: [
                    {
                        name: "South Beach",
                        category: "Beaches & Water Activities",
                        estimatedCost: 0
                    }, 
                    {
                        name: "Wynwood Walls",
                        category: "Museums & Art",
                        estimatedCost: null
                    }, 
                    {
                        name: "Little Havana",
                        category: "History & Culture",
                        estimatedCost: 0
                    }

                ],
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
        // Nashville Destination Profile
        id: 9,
        city: "Nashville",
        state: "Tennessee",
        description: "Nashville is a city in Tennessee, known for its vibrant music scene, cultural attractions, and Southern hospitality.",
        duration: "3-4 days",
      
        weatherOptions: [{
            condition: "Sunny",
            month: ["June", "July", "August", "September"],
            attractions: [
                {
                    name: "Grand Ole Opry",
                    category: "Entertainment",
                    estimatedCost: null
                }, 
                {
                    name: "Centennial Park",
                    category: "Outdoor & Nature",
                    estimatedCost: 0
                },
                {
                    name: "Fifth + Broadway",
                    category: "Shopping",
                    estimatedCost:0
                }
                
            ],
            activities: [],
            event: []
        },
        {
            condition: "Cool",
            month: ["October", "November"],
            attractions: [
                {
                    name: " Country Music Hall of Fame",
                    category: "Museums & Art",
                    estimatedCost: null
                },
                {
                    name: "Ryman Auditorium",
                    category: "History & Culture",
                    estimatedCost: null
                },
                {
                    name: "Broadway Honky Tonk",
                    category: "Nightlife",
                    estimatedCost: 0
                }
            ],
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
        // New Orleans Destination Profile
        id: 10,
        city: "New Orleans",
        state: "Louisiana",
        description: "New Orleans is a city in Louisiana, known for its vibrant culture, music, cuisine, and historic architecture.",
        duration: "3-4 days",
       
        weatherOptions: [{
            condition: "Hot",
            month: ["June", "July", "August", "September"],
            attractions: [
                {
                    name: "The National WWII Museum",
                    category: "Museums & Art",
                    estimatedCost: null 
                }, 
                {
                    name: "Audubon Aquarium",
                    category: "Museums & Art",
                    estimatedCost: null
                }, 
                { 
                    name: " New Orleans Riverwalk Outlets", 
                    category: "Shopping",
                    estimatedCost: 0
                }
            ],
            activities: [],
            event: []
        },
        {
            condition: "Mild",
            month: ["October", "November", "December", "January", "February", "March"],
            attractions: [
                {
                    name: "Jackson Square",
                    category: "Sightseeing & Landmarks",
                    estimatedCost: 0
                }, 
                {
                    name: "French Market",
                    category: "Shopping",
                    estimatedCost: 0    
                }, 
                {
                    name: "Frenchman Street",
                    category: "Nightlife",
                    estimatedCost: 0
                }
            ],
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
        // New York City Destination Profile
        id: 11,
        city: "New York City",
        state: "New York",
        description: "New York City is known for its iconic landmarks, diverse neighborhoods, world-famous attractions, and vibrant cultural scene.",
        duration: "4-6 days",
    
        weatherOptions: [
            {
                condition: "Snowy",
                month: ["December", "January", "February", "March"],
                attractions: [
                    {
                        name: "Metropolitan Museum of Art",
                        category: "Museums & Art",
                        estimatedCost: null
                    },
                     {
                        name: "Chelsea Market",
                        category: "Shopping",
                        estimatedCost: 0
                      }, 
                      {
                        name: "Broadway Theater District",
                        category: "Entertainment",
                        estimatedCost: null 
                      }
                ],
                activities: [],
                event: []
            },
            {
                condition: "Sunny",
                month: ["April", "May", "June", "July", "August", "September"],
                attractions: [
                    {
                        name: "Central Park",
                        category: "Outdoor & Nature",
                        estimatedCost: 0
                    },
                    {
                        name: "Statue of Liberty",
                        category: "Sightseeing & Landmarks",
                        estimatedCost: null 
                    }, 
                    {
                        name: "Fifth Avenue",
                        category: "Shopping",
                        estimatedCost: 0
                    }
                ],
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
        // Orlando Destination Profile
        id: 12,
        city: "Orlando",
        state: "Florida",
        description: "Orlando is a city in Florida, known for its theme parks, vibrant culture, and family-friendly attractions.",
        duration: "4-6 days",
    
        weatherOptions: [
            {
                condition: "Hot",
                month: ["June", "July", "August", "September"],
                attractions: [
                    {
                        name : "Universal Volcano Bay",
                        category: "Theme Parks",
                        estimatedCost: null
                    }, 
                    {
                        name: "Disney Springs",
                        category: "Shopping",
                        estimatedCost: 0
                    }, 
                    {
                        name:"SEA LIFE Orlando Aquarium",
                        category: "Family Friendly",
                        estimatedCost: null
                    }
                ],
                activities: [],
                event: []
            },
            {
                condition: "Mild",
                month: ["October", "November", "December", "January", "February", "March"],
                attractions: [
                    {
                        name:" Magic Kingdom Park",
                        category: "Theme Parks",
                        estimatedCost: null
                    }, 
                    {
                        name: "ICON Park",
                        category: "Entertainment",
                        estimatedCost: 0
                    }, 
                    {
                        name: "Lake Eola Park",
                        category: "Outdoor & Nature",
                        estimatedCost: 0
                    }
                ],
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
        // San Francisco Destination Profile
        id: 13,
        city: "San Francisco",
        state: "California",
        description: "San Francisco is a city in California, known for its iconic Golden Gate Bridge, vibrant neighborhoods, and cultural diversity.",
        duration: "3-5 days",
        
        weatherOptions: [
            {
                condition: "Foggy",
                month: ["June", "July", "August", "September"],
                attractions: [
                    {
                        name: "Golden Gate Bridge",
                        category: "Sightseeing & Landmarks",
                        estimatedCost: 0
                    },
                    { 
                        name: "Fisherman's Wharf",
                        category: "Food & Dining",
                        estimatedCost: 0    
                    }, 
                    {
                        name: "Pier 39",
                        category: "Entertainment",
                        estimatedCost: 0
                    }
                ],
                activities: [],
                event: []
            },
            {
                condition: "Rainy",
                month: ["October", "November", "December", "January", "February", "March"],
                attractions: [
                    {
                        name:"California Academy of Sciences",
                        category: "Museums & Art",
                        estimatedCost: null
                    }, 
                    {
                        name: "Westfield San Francisco Centre",
                        category: "Shopping",
                        estimatedCost: 0
                    }, 
                    {
                        name: "Ferry Building Marketplace",
                        category: "Food & Dining",
                        estimatedCost: 0    
                    }
                ],        
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
        // Seattle Destination Profile
        id: 14,
        city: "Seattle",
        state: "Washington",
        description: "Seattle is a city in Washington, known for its vibrant culture, iconic Space Needle, and beautiful natural surroundings.",
        duration: "3-5 days",
       
        weatherOptions: [{
            condition: "Rainy",
            month: ["October", "November", "December", "January", "February", "March"],
            attractions: [
                {
                    name: "Museum of Pop Culture",
                    category: "Museums & Art",
                    estimatedCost: null
                }, 
                {
                    name: "Seattle Aquarium",
                    category: "Family Friendly",
                    estimatedCost: null
                }, 
                {
                   name: "Westlake Center",
                   category: "Shopping",
                   estimatedCost: 0 
                }
            ],
            activities: [],
            event: []
        },
        {
            condition: "Sunny",
            month: ["April", "May", "June", "July", "August", "September"],
            attractions: [
                {
                     name: "Pike Place Market",
                    category: "Food & Dining",
                    estimatedCost: 0
                }, 
                {
                    name: "Space Needle",
                    category: "Sightseeing & Landmarks",
                    estimatedCost: null
                }, 
                {
                    name:"Discovery Park",
                    category: "Outdoor & Nature",
                    estimatedCost: null
                }
            ],
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
        // Washington Destination Profile   
        id: 15,
        city: "Washington",
        state: "District of Columbia",
        description: "Washington is the capital city of the United States, known for its historic monuments, museums, and political significance.",
        duration: "3-5 days",
       
        weatherOptions: [
            {
                condition: "Hot",
                month: ["June", "July", "August", "September"],
                attractions: [
                    {
                        name: "Smithsonian Air and Space Museum",
                        category: "Museums & Art",
                        estimatedCost: null
                    }, 
                    {
                        name: "Union Station",
                        category: "Shopping",
                        estimatedCost: 0
                    }, 
                    {
                        name: "National Museum of American History",
                        category: "Museums & Art",
                        estimatedCost: 0
                    }
                ],
                activities: [],
                event: []
            },
            {
                condition: "Cool",
                month: ["October", "November", "December", "January", "February", "March"],
                attractions: [
                    {
                        name: "Lincoln Memorial",
                        category: "Sightseeing & Landmarks",
                        estimatedCost: 0
                    }, 
                    {
                        name: "Eastern Market", 
                        category: "Shopping",
                        estimatedCost: 0
                    },
                    {
                        name: "National Mall",
                        category: "Sightseeing & Landmarks",
                        estimatedCost: 0
                    }
                ],
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




