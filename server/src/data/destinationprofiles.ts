export interface Attraction {
    name: string;
    category: string;
    estimatedCost: number | null;
    website?: string;
}
export interface Activity {
    name: string;
    category: string;
    description: string;
    estimatedCostMin: number | null;
    estimatedCostMax: number | null;
    priceType: string;
    estimatedDuration: number;
    location: string;
    openingHours?: string;
    website?: string;
}
export interface EventOption {
    name: string;
    category: string;
    description: string;
    estimatedCostMin: number | null;
    estimatedCostMax: number | null;
    priceType: string;
    startDate?: string;
    endDate?: string;
    startTime?: string;
    endTime?: string;
    estimatedDuration?: number;
    location: string;
    website?: string;
}

export interface TransportationOption {
    name: string;
    type: string;
    description?: string;
    estimatedCostMin: number | null;
    estimatedCostMax: number | null;
    priceType: string;
    estimatedDuration?: number;
    website?: string;
}
export interface Hotel {
    name: string;
    category: string;
    description?: string;
    address: string;
    estimatedNightlyCostMin: number | null;
    estimatedNightlyCostMax: number | null;
    priceType: string;
    maxGuests?: number;
    amenities: string[];
    parkingCost?: number | null;
    additionalFees?: number | null;
    website?: string;
}

export interface VacationRental {
    name: string;
    category: string;
    propertyType: string;
    description?: string;
    address: string;
    estimatedNightlyCostMin: number | null;
    estimatedNightlyCostMax: number | null;
    priceType: string;
    maxGuests: number;
    bedrooms: number;
    bathrooms: number;
    amenities: string[];
    cleaningFee?: number | null;
    serviceFee?: number | null;
    parkingCost?: number | null;
    minimumNights?: number;
    website?: string;
}


export interface Restaurant {
    name: string;
    category: string;
    description: string;


    mealTypes: ("Breakfast" | "Lunch" | "Dinner")[];


    estimatedCostMin: number | null;
    estimatedCostMax: number | null;
    priceType: string;

    priceTier: "Budget" | "Mid-Range" | "High-End";


    address: string;
    cuisine: string;
    openingHours?: string;
    website?: string;


    reservationRecommended?: boolean;
}






interface Weather {
    condition: string;
    month: string[];
    attractions: Attraction[];
    activities?: Activity[];
    event: EventOption[];
}


interface Destination {
    id: number;
    city: string;
    state: string;
    description: string;
    duration: string;
    weatherOptions: Weather[];
    activities?: Activity[];

    // Restaurant recommendations shared across weather options
    breakfast?: Restaurant[];
    lunch?: Restaurant[];
    dinner?: Restaurant[];

    transportation: string[];
    transportationOptions: TransportationOption[];
    hotels: Hotel[];
    vacationRentals: VacationRental[];
}





export const categories: string[] = [
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
    // ATLANTA #1

    {

        id: 1,
        city: "Atlanta",
        state: "Georgia",
        description: "Atlanta is a vibrant city in Georgia, known for its rich history, cultural diversity, and lively entertainment scene.",
        duration: "3-4 days",

        weatherOptions: [
            {
                // WEATHER OPTION 1: SUNNY

                condition: "Sunny",
                month: ["June", "July", "August"],


                // Three main attractions
                attractions: [
                    {
                        name: "Piedmont Park",
                        category: "Outdoor & Nature",
                        estimatedCost: 0,
                        website: "https://piedmontpark.org/"
                    },
                    {
                        name: "Ponce City Market",
                        category: "Food & Dining",
                        estimatedCost: 0,
                        website: "https://poncecitymarket.com/"
                    },
                    {
                        name: "SkyView Atlanta",
                        category: "Entertainment",
                        estimatedCost: 19.50,
                        website: "https://www.skyviewatlanta.com/tickets/"
                    }
                ],


                // Sunny seasonal events
                event: [
                    {
                        name: "Peachtree Road Race Spectator Experience",
                        category: "Festivals and Events",
                        description: "Watch Atlanta's annual Fourth of July 10k as runners travel along Peachtree Road toward Piedmont Park",
                        estimatedCostMin: 0,
                        estimatedCostMax: 0,
                        priceType: "perPerson",
                        startDate: "2027-07-04",
                        endDate: "2027-07-04",
                        estimatedDuration: 120,
                        location: "Peachtree Road, Atlanta, GA",
                        website: "https://www.atlantatrackclub.org/peachtree"
                    },

                    {
                        name: "Piedmont Park Arts Festival",
                        category: "Festivals and Events",
                        description: " Explore an outdoor arts festival featuring painters, photograpgers, sculptors, and handmade crafts, artist demonstrations ",
                        estimatedCostMin: 0,
                        estimatedCostMax: 0,
                        priceType: "perPerson",
                        startDate: "2027-08-21",
                        endDate: "2027-08-22",
                        estimatedDuration: 180,
                        location: "Piedmont Park, Atlanta, GA 30309",
                        website: "https://www.affps.com/piedmont-park-arts-festival"

                    },

                ],

            },

            {
                // WEATHER OPTION 2: COOL

                condition: "Cool",
                month: ["October", "November"],


                // Three main attractions
                attractions: [
                    {
                        name: "Martin Luther King Jr. National Historical Park",
                        category: "History & Culture",
                        estimatedCost: 0,
                        website: "https://www.nps.gov/malu/"
                    },
                    {
                        name: "Lenox Square",
                        category: "Shopping",
                        estimatedCost: 0,
                        website: "https://www.simon.com/mall/lenox-square"
                    },
                    {
                        name: "Georgia Aquarium",
                        category: "Family Friendly",
                        estimatedCost: 55,
                        website: "https://www.georgiaaquarium.org/tickets/"
                    }
                ],


                // Cool seasonal events
                event: [
                    {
                        name: "Garden Lights, Holiday Nights",
                        category: "Festivals and Events",
                        description: "Experience illuminated garden displays, colorful holiday lights, and seasonal installations throughout the Atlanta Botanical Garden.",
                        estimatedCostMin: 30,
                        estimatedCostMax: 60,
                        priceType: "perPerson",
                        startDate: "2026-11-14",
                        endDate: "2027-01-10",
                        estimatedDuration: 120,
                        location: "1345 Piedmont Avenue NE, Atlanta, GA 30309",
                        website: "https://atlantabg.org/calendar/garden-lights-holiday-nights/"
                    },
                    {
                        name: "Piedmont Park Holiday Gift Market",
                        category: "Festivals and Events",
                        description: "Browse an outdoor holiday market featuring original artwork, handmade gifts, crafts, and local vendors in Piedmont Park.",
                        estimatedCostMin: 0,
                        estimatedCostMax: 0,
                        priceType: "perPerson",
                        startDate: "2026-11-28",
                        endDate: "2026-11-29",
                        estimatedDuration: 120,
                        location: "Piedmont Park, Atlanta, GA 30309",
                        website: "https://piedmontpark.org/event/piedmont-park-holiday-market-2/"
                    }
                ],
            }
        ],


        activities: [
            {
                name: "Ponce City Market Food Hall",
                category: "Food & Dining",
                description: "Explore a variety of culinary delights at Ponce City Market Food Hall, featuring local and international cuisines.",
                estimatedCostMin: 10,
                estimatedCostMax: 30,
                priceType: "perPerson",
                estimatedDuration: 90,
                location: "675 Ponce De Leon Ave NE, Atlanta, GA 30308",
                openingHours: "Verify current vendor hours",
                website: "https://poncecitymarket.com/"
            },
            {
                name: "Atlanta BeltLine Eastside Trail Walk",
                category: "Outdoor & Nature",
                description: "Walk along a scenic urban trail featuring art, parks, local restaurants, and shopping.",
                estimatedCostMin: 0,
                estimatedCostMax: 0,
                priceType: "perPerson",
                estimatedDuration: 90,
                location: "Atlanta BeltLine Eastside Trail, Atlanta, GA",
                openingHours: "Verify official trail access hours",
                website: "https://beltline.org/"
            },
            {
                name: "Little Five Points Vintage Shopping",
                category: "Shopping",
                description: "Explore unique vintage shops and boutiques in the eclectic Little Five Points neighborhood.",
                estimatedCostMin: 0,
                estimatedCostMax: null,
                priceType: "perPerson",
                estimatedDuration: 120,
                location: "Euclid Avenue NE and Moreland Avenue NE, Atlanta, GA 30307",
                openingHours: "Varies by store",
                website: "https://www.littlefivepoints.com/"
            },
            {
                name: "Skyline Park at Ponce City Market",
                category: "Entertainment",
                description: "Enjoy a rooftop amusement park with games, mini golf, and views of the Atlanta skyline.",
                estimatedCostMin: 10,
                estimatedCostMax: 15,
                priceType: "perPerson",
                estimatedDuration: 120,
                location: "675 Ponce De Leon Ave NE, Atlanta, GA 30308",
                openingHours: "Verify seasonal operating hours",
                website: "https://poncecitymarket.com/"
            },
            {
                name: "Historic Oakland Cemetery Self-Guided Tour",
                category: "History & Culture",
                description: "Take a self-guided tour of historic Oakland Cemetery and explore its landscapes, architecture, and notable graves.",
                estimatedCostMin: 0,
                estimatedCostMax: 0,
                priceType: "perPerson",
                estimatedDuration: 90,
                location: "248 Oakland Avenue SE, Atlanta, GA 30312",
                openingHours: "Grounds generally open dawn to dusk",
                website: "https://oaklandcemetery.com/"
            },
            {
                name: "Atlanta History Center Museum Visit",
                category: "Museums & Art",
                description: "Explore the Atlanta History Center, featuring exhibits on the city's history, culture, and heritage.",
                estimatedCostMin: 31,
                estimatedCostMax: 35,
                priceType: "perPerson",
                estimatedDuration: 150,
                location: "130 West Paces Ferry Road NW, Atlanta, GA 30305",
                openingHours: "Verify current museum hours",
                website: "https://www.atlantahistorycenter.com/"
            },
            {
                name: "Krog Street Market Food Hall",
                category: "Food & Dining",
                description: "Explore Krog Street Market, featuring local restaurants, specialty food vendors, and international cuisines.",
                estimatedCostMin: 0,
                estimatedCostMax: null,
                priceType: "perPerson",
                estimatedDuration: 90,
                location: "99 Krog Street NE, Atlanta, GA 30307",
                openingHours: "Varies by vendor",
                website: "https://www.thekrogdistrict.com/"
            },
            {
                name: "Phipps Plaza Shopping",
                category: "Shopping",
                description: "Explore high-end shops and boutiques at Phipps Plaza, an upscale shopping destination in Buckhead.",
                estimatedCostMin: 0,
                estimatedCostMax: null,
                priceType: "perPerson",
                estimatedDuration: 120,
                location: "3500 Peachtree Road NE, Atlanta, GA 30326",
                openingHours: "Verify current mall and store hours",
                website: "https://www.simon.com/mall/phipps-plaza"
            },
            {
                name: "Center for Puppetry Arts Museum Visit",
                category: "Entertainment",
                description: "Explore the Center for Puppetry Arts Museum, featuring exhibits on puppetry history, art, and the Jim Henson Collection.",
                estimatedCostMin: 16.50,
                estimatedCostMax: 16.50,
                priceType: "perPerson",
                estimatedDuration: 120,
                location: "1404 Spring Street NW, Atlanta, GA 30309",
                openingHours: "Verify current museum hours",
                website: "https://puppet.org/visitor-info/"
            },
            {
                name: "Atlanta Botanical Garden Fall Visit",
                category: "Outdoor & Nature",
                description: "Explore seasonal gardens, colorful foliage, scenic walking paths, and indoor conservatories.",
                estimatedCostMin: 28,
                estimatedCostMax: 28,
                priceType: "perPerson",
                estimatedDuration: 120,
                location: "1345 Piedmont Avenue NE, Atlanta, GA 30309",
                openingHours: "Verify October and November operating hours",
                website: "https://atlantabg.org/plan-your-visit/"
            }
        ],


        // RESTAURANTS — SHARED ACROSS WEATHER OPTIONS


        breakfast: [
            {
                name: "Home Grown GA",
                category: "Food & Dining",
                description: "Retro Atlanta diner serving Southern breakfast favorites such as chicken biscuits, grits, and French toast.",
                mealTypes: ["Breakfast", "Lunch"],
                estimatedCostMin: 9,
                estimatedCostMax: 28,
                priceType: "perPerson",
                priceTier: "Budget",
                address: "968 Memorial Dr SE, Atlanta, GA 30316",
                cuisine: "Southern American",
                openingHours: "Daily 8 AM-2 PM",
                website: "https://www.homegrownga.com/",
                reservationRecommended: false,
            },
            {
                name: "The Flying Biscuit Cafe - Midtown",
                category: "Food & Dining",
                description: "Atlanta breakfast and brunch cafe serving biscuits, creamy grits, omelets, and Southern-style comfort food.",
                mealTypes: ["Breakfast", "Lunch", "Dinner"],
                estimatedCostMin: 13,
                estimatedCostMax: 20,
                priceType: "perPerson",
                priceTier: "Mid-Range",
                address: "1001 Piedmont Ave NE, Atlanta, GA 30309",
                cuisine: "Southern American",
                openingHours: "Mon-Thu 8 AM-4 PM; Fri-Sun 8 AM-8 PM",
                website: "https://www.flyingbiscuit.com/locations-2/midtown/",
                reservationRecommended: false,
            },
            {
                name: "Buttermilk Kitchen",
                category: "Food & Dining",
                description: "Scratch-made Southern breakfast and brunch restaurant known for biscuits, chicken and waffles, and seasonal dishes.",
                mealTypes: ["Breakfast", "Lunch"],
                estimatedCostMin: 12,
                estimatedCostMax: 18.5,
                priceType: "perPerson",
                priceTier: "Mid-Range",
                address: "4225 Roswell Rd NE, Atlanta, GA 30342",
                cuisine: "Southern American",
                openingHours: "Tue-Fri 8 AM-2 PM; Sat-Sun 8 AM-3 PM; closed Mon",
                website: "https://www.buttermilkatlanta.com/",
                reservationRecommended: true,
            },
            {
                name: "Canoe - Sunday Brunch",
                category: "Food & Dining",
                description: "Upscale riverside restaurant offering a special-occasion Sunday brunch in an elegant garden setting.",
                mealTypes: ["Breakfast", "Lunch", "Dinner"],
                estimatedCostMin: 19,
                estimatedCostMax: 32,
                priceType: "perPerson",
                priceTier: "High-End",
                address: "4199 Paces Ferry Rd SE, Atlanta, GA 30339",
                cuisine: "Contemporary American",
                openingHours: "Sunday brunch 10:30 AM-2:30 PM",
                website: "https://canoeatl.com/",
                reservationRecommended: true,
            },
        ],

        lunch: [
            {
                name: "Busy Bee Cafe",
                category: "Food & Dining",
                description: "Historic Atlanta soul-food restaurant known for fried chicken, Southern side dishes, and takeout plates.",
                mealTypes: ["Lunch", "Dinner"],
                estimatedCostMin: 20,
                estimatedCostMax: 36.5,
                priceType: "perPerson",
                priceTier: "Mid-Range",
                address: "810 Martin Luther King Jr Dr SW, Atlanta, GA 30314",
                cuisine: "Southern Soul Food",
                openingHours: "Daily 11 AM-7 PM; takeout only",
                website: "https://www.thebusybeecafe.com/",
                reservationRecommended: false,
            },
            {
                name: "South City Kitchen - Midtown",
                category: "Food & Dining",
                description: "Refined Southern cooking featuring fried chicken, classic sides, and seasonal dishes in Midtown Atlanta.",
                mealTypes: ["Lunch", "Dinner"],
                estimatedCostMin: 19,
                estimatedCostMax: 28,
                priceType: "perPerson",
                priceTier: "Mid-Range",
                address: "1144 Crescent Ave NE, Atlanta, GA 30309",
                cuisine: "Southern American",
                openingHours: "Weekday lunch Mon-Fri 11 AM-2:30 PM; weekend brunch 10 AM-3 PM",
                website: "https://www.southcitykitchen.com/midtown/",
                reservationRecommended: true,
            },
            {
                name: "The Chastain",
                category: "Food & Dining",
                description: "Garden-driven contemporary American restaurant next to Chastain Park, offering weekday lunch and weekend brunch.",
                mealTypes: ["Breakfast", "Lunch", "Dinner"],
                estimatedCostMin: 26,
                estimatedCostMax: 49,
                priceType: "perPerson",
                priceTier: "High-End",
                address: "4320 Powers Ferry Rd NW, Atlanta, GA 30342",
                cuisine: "Contemporary American",
                openingHours: "Lunch Mon-Fri 11 AM-2 PM; brunch Sat-Sun 11 AM-2 PM",
                website: "https://thechastainatl.com/",
                reservationRecommended: true,
            },
            {
                name: "Ray's In the City",
                category: "Food & Dining",
                description: "Downtown restaurant featuring seafood, steaks, and a polished dining experience.",
                mealTypes: ["Lunch", "Dinner"],
                estimatedCostMin: 19,
                estimatedCostMax: 42,
                priceType: "perPerson",
                priceTier: "High-End",
                address: "240 Peachtree St NW, Atlanta, GA 30303",
                cuisine: "Steakhouse and Seafood",
                openingHours: "Mon-Fri lunch starts 11:30 AM; verify weekend lunch service",
                website: "https://www.raysinthecity.com/",
                reservationRecommended: true,
            },
            {
                name: "Taco T Mexican Restaurant - Marietta",
                category: "Food & Dining",
                description: "Family-owned casual Mexican restaurant serving street tacos, burritos, quesadillas, and birria.",
                mealTypes: ["Breakfast", "Lunch", "Dinner"],
                estimatedCostMin: 2.85,
                estimatedCostMax: 25.99,
                priceType: "perPerson",
                priceTier: "Budget",
                address: "682 Powder Springs St, Marietta, GA 30064",
                cuisine: "Mexican",
                openingHours: "TODO: Verify exact Marietta location hours; closed Mondays",
                website: "https://www.tacotmarietta.com/",
                reservationRecommended: false,
            },
        ],

        dinner: [
            {
                name: "Pollo Primo",
                category: "Food & Dining",
                description: "Casual Atlanta spot serving Mexican-inspired roasted chicken with tortillas, rice, and sides.",
                mealTypes: ["Lunch", "Dinner"],
                estimatedCostMin: 12.50,
                estimatedCostMax: 20.50,
                priceType: "perPerson",
                priceTier: "Budget",
                address: "792 Moreland Ave SE, Atlanta, GA 30316",
                cuisine: "Mexican-inspired Chicken",
                openingHours: "Tue-Sat noon-10 PM; Sun 1 PM-8 PM; closed Mon",
                website: "https://polloprimoatl.com/",
                reservationRecommended: false,
            },
            {
                name: "Agora Mediterranean - Midtown",
                category: "Food & Dining",
                description: "Upscale-casual Mediterranean restaurant offering meze, grilled dishes, and Greek and Turkish favorites.",
                mealTypes: ["Lunch", "Dinner"],
                estimatedCostMin: 19,
                estimatedCostMax: 44,
                priceType: "perPerson",
                priceTier: "Mid-Range",
                address: "92 Peachtree Pl NE, Atlanta, GA 30309",
                cuisine: "Mediterranean",
                openingHours: "Daily dinner from 5 PM; Mon-Fri until 10 PM, Sat until 11 PM, Sun until 9 PM",
                website: "https://www.agoracuisine.com/contact",
                reservationRecommended: true,
            },
            {
                name: "Ecco - Midtown",
                category: "Food & Dining",
                description: "Stylish European-inspired restaurant serving handmade pastas, wood-fired dishes, and seasonal plates.",
                mealTypes: ["Dinner"],
                estimatedCostMin: 25,
                estimatedCostMax: 65,
                priceType: "perPerson",
                priceTier: "Mid-Range",
                address: "40 7th St NE, Atlanta, GA 30308",
                cuisine: "European",
                openingHours: "Mon-Thu 4-9:30 PM; Fri 4-10 PM; Sat 5-10 PM; Sun 5-9 PM",
                website: "https://www.ecco-atlanta.com/location/midtown",
                reservationRecommended: true,
            },
            {
                name: "Canoe",
                category: "Food & Dining",
                description: "Upscale seasonal American dinner restaurant with riverside views and landscaped gardens.",
                mealTypes: ["Breakfast", "Lunch", "Dinner"],
                estimatedCostMin: 28,
                estimatedCostMax: 69,
                priceType: "perPerson",
                priceTier: "High-End",
                address: "4199 Paces Ferry Rd SE, Atlanta, GA 30339",
                cuisine: "Contemporary American",
                openingHours: "Sun-Thu 5:30-9:30 PM; Fri-Sat 5:30-10 PM",
                website: "https://canoeatl.com/",
                reservationRecommended: true,
            },

            {
                name: "American Deli - Old National",
                category: "Food & Dining",
                description: "Casual Atlanta restaurant known for lemon pepper wings, Philly cheesesteaks, burgers, fried rice, and combo meals.",
                mealTypes: ["Lunch", "Dinner"],
                estimatedCostMin: 14,
                estimatedCostMax: 20,
                priceType: "perPerson",
                priceTier: "Budget",
                address: "6175 Old National Hwy, Atlanta, GA 30349",
                cuisine: "American Wings & Sandwiches",
                website: "https://americandeli.com/",
                reservationRecommended: false
            },


        ],

        // LOCAL TRANSPORTATION

        transportation: [
            "MARTA",
            "Uber/Lyft",
            "Rental Car",
            "Walking"
        ],


        // ATLANTA — DETAILED TRANSPORTATION OPTIONS
        transportationOptions: [
            {
                name: "MARTA",
                type: "Public Transportation",
                description: "Atlanta's public rail and bus network. Connects Hartsfield-Jackson Atlanta International Airport with Downtown, Midtown, Buckhead, and other areas. Standard one-way fare is $2.50 with eligible free transfers.",
                estimatedCostMin: 2.50,
                estimatedCostMax: 2.50,
                priceType: "perRide",
                website: "https://itsmarta.com/ride/how-to-pay/fares-and-transfers"
            },
            {
                name: "Uber/Lyft",
                type: "Rideshare",
                description: "App-based transportation available throughout metropolitan Atlanta. Convenient for attractions not directly served by MARTA, hotels, restaurants, and late-night travel. Fares vary by distance, demand, and time of day.",
                estimatedCostMin: 12,
                estimatedCostMax: 40,
                priceType: "perRide",
                website: "https://www.uber.com/"
            },
            {
                name: "Rental Car",
                type: "Car Rental",
                description: "Rental vehicles available at Hartsfield-Jackson Atlanta International Airport and throughout the city. Useful for exploring surrounding suburbs and destinations outside Atlanta's transit network. Rental costs exclude gas, parking, tolls, and optional insurance.",
                estimatedCostMin: 40,
                estimatedCostMax: 90,
                priceType: "perDay",
                website: "https://www.enterprise.com/"
            },
            {
                name: "Walking",
                type: "Walking",
                description: "Free transportation for exploring walkable parts of Downtown Atlanta, Midtown, Centennial Olympic Park, Piedmont Park, Ponce City Market, and the Atlanta BeltLine. Travel time depends on distance and route.",
                estimatedCostMin: 0,
                estimatedCostMax: 0,
                priceType: "free"
            }
        ],




        // ATLANTA — THREE REAL HOTELS
        // Budget, Mid-Range, and High-End
        hotels: [
            {
                name: "Motel 6 Atlanta, GA - Downtown",
                category: "Budget",
                description: "Budget-friendly motel in Downtown Atlanta near major attractions and public transportation. Offers basic guest rooms with air conditioning, complimentary Wi-Fi, and convenient access to the Georgia Aquarium and other downtown destinations. Pets are allowed. On-site parking may cost extra.",
                address: "311 Courtland Street NE, Atlanta, GA 30303, USA",
                estimatedNightlyCostMin: 90,
                estimatedNightlyCostMax: 170,
                priceType: "perNight",
                amenities: [
                    "Free Wi-Fi",
                    "Air conditioning",
                    "Flat-screen TV",
                    "Pet-friendly rooms",
                    "Elevator",
                    "24-hour front desk",
                    "Nearby restaurants",
                    "Paid parking"
                ],
                parkingCost: null,
                additionalFees: null,
                website: "https://www.motel6.com/property/motel-atlanta-georgia-us-292932/"
            },
            {
                name: "Hyatt Centric Midtown Atlanta",
                category: "Mid-Range",
                description: "Modern hotel in the heart of Midtown Atlanta near Piedmont Park, Fox Theatre, and the Midtown MARTA station. Features renovated guest rooms, a heated indoor saltwater pool, fitness center, on-site dining, and easy access to shopping and restaurants.",
                address: "125 10th Street NE, Atlanta, GA 30309, USA",
                estimatedNightlyCostMin: 140,
                estimatedNightlyCostMax: 250,
                priceType: "perNight",
                amenities: [
                    "Free Wi-Fi",
                    "Heated indoor saltwater pool",
                    "Fitness center",
                    "On-site restaurant",
                    "Air conditioning",
                    "Flat-screen TV",
                    "In-room refrigerator",
                    "Coffee maker",
                    "Pet-friendly accommodations",
                    "Paid self-parking",
                    "Valet parking",
                    "Nearby MARTA station"
                ],
                parkingCost: null,
                additionalFees: null,
                website: "https://www.hyatt.com/hyatt-centric/en-US/atlhm-hyatt-centric-midtown-atlanta/"
            },
            {
                name: "The St. Regis Atlanta",
                category: "High-End",
                description: "Luxury five-star hotel in Atlanta's Buckhead neighborhood featuring elegant rooms and suites, a resort-style outdoor swimming pool, whirlpool, fitness center, upscale dining, and personalized concierge services. Convenient to luxury shopping and Buckhead restaurants. The hotel requires guests checking in to be at least 21 years old.",
                address: "88 West Paces Ferry Road NW, Atlanta, GA 30305, USA",
                estimatedNightlyCostMin: 650,
                estimatedNightlyCostMax: 1000,
                priceType: "perNight",
                amenities: [
                    "Wi-Fi",
                    "Luxury guest rooms and suites",
                    "Outdoor swimming pool",
                    "Whirlpool",
                    "Fitness center",
                    "Spa services",
                    "Upscale dining",
                    "Concierge service",
                    "Valet parking",
                    "Air conditioning",
                    "Electric vehicle charging",
                    "Complimentary local car service within two miles"
                ],
                parkingCost: 70,
                additionalFees: null,
                website: "https://www.marriott.com/en-us/hotels/ATLXR-the-st-regis-atlanta/overview/"
            }
        ],



        // ATLANTA — REAL AIRBNB LISTINGS

        vacationRentals: [
            {
                name: "Atlanta BeltLine Industrial Loft",
                category: "Vacation Rental",
                propertyType: "Entire loft",
                description: "Historic converted 1906 cotton warehouse loft in Atlanta's Old Fourth Ward near the BeltLine. Features natural skylights, two king beds, a renovated kitchen, a private balcony, and a dedicated workspace.",
                address: "Old Fourth Ward, Atlanta, GA, USA — exact street address provided after booking",
                estimatedNightlyCostMin: 208.50,
                estimatedNightlyCostMax: 208.50,
                priceType: "perNight",
                maxGuests: 4,
                bedrooms: 2,
                bathrooms: 1,
                amenities: [
                    "Wi-Fi",
                    "Kitchen",
                    "Air conditioning",
                    "Dedicated workspace",
                    "Private balcony",
                    "Smart TV",
                    "Coffee machine"
                ],
                cleaningFee: null,
                serviceFee: null,
                parkingCost: null,
                website: "https://www.airbnb.com/rooms/610156971861003491"
            },
            {
                name: "Atlanta Enchanted Treehouse Retreat",
                category: "Vacation Rental",
                propertyType: "Treehouse and tiny home",
                description: "Unique Atlanta treehouse retreat built around a large sycamore tree near the BeltLine and Ponce City Market. Includes a tiny home with king bed, elevated treehouse decks, hammocks, a private two-person hot tub, and a kitchenette. Access requires steep stairs.",
                address: "Old Fourth Ward, Atlanta, GA, USA — exact street address provided after booking",
                estimatedNightlyCostMin: 322,
                estimatedNightlyCostMax: 322,
                priceType: "perNight",
                maxGuests: 2,
                bedrooms: 1,
                bathrooms: 1,
                amenities: [
                    "Wi-Fi",
                    "Private hot tub",
                    "King bed",
                    "Kitchenette",
                    "Hammocks",
                    "Private fenced yard",
                    "Outdoor seating",
                    "Free driveway parking",
                    "Smart TV"
                ],
                cleaningFee: null,
                serviceFee: null,
                parkingCost: null,
                website: "https://www.airbnb.com/rooms/46770647"
            }
        ]
    },

    //  chicago #2

    {
        id: 2,
        city: "Chicago",
        state: "Illinois",
        description: "Chicago is a vibrant city in Illinois known for its architecture, museums, music, food, beautiful lakefront, and diverse neighborhoods.",
        duration: "3-5 days",

        weatherOptions: [
            {
                // WEATHER OPTION 1: SNOWY
                condition: "Snowy",
                month: ["December", "January", "February"],

                // Three main attractions
                attractions: [
                    {
                        name: "Art Institute of Chicago",
                        category: "Museums & Art",
                        estimatedCost: 32
                    },
                    {
                        name: "360 CHICAGO Observation Deck",
                        category: "Sightseeing & Landmarks",
                        estimatedCost: 27
                    },
                    {
                        name: "Water Tower Place",
                        category: "Shopping",
                        estimatedCost: 0
                    }
                ],


                // Snowy seasonal events
                event: [
                    {
                        name: "Christkindlmarket Chicago",
                        category: "Festivals and Events",
                        description: "Explore a traditional German-inspired outdoor Christmas market featuring holiday gifts, handcrafted decorations, seasonal foods, and festive lights.",
                        estimatedCostMin: 0,
                        estimatedCostMax: 0,
                        priceType: "perPerson",
                        startDate: "2026-11-20",
                        endDate: "2026-12-24",
                        estimatedDuration: 120,
                        location: "Daley Plaza, 50 W Washington Street, Chicago, IL 60602",
                        website: "https://www.christkindlmarket.com/daleyplaza/"
                    },
                    {
                        name: "Wintrust Winter WonderFest",
                        category: "Festivals and Events",
                        description: "Experience an indoor holiday festival featuring seasonal attractions, festive decorations, ice skating, rides, and family-friendly entertainment at Navy Pier.",
                        estimatedCostMin: 27,
                        estimatedCostMax: 32,
                        priceType: "perPerson",
                        startDate: "2026-11-27",
                        endDate: "2027-01-03",
                        estimatedDuration: 180,
                        location: "Navy Pier Festival Hall, 600 E Grand Avenue, Chicago, IL 60611",
                        website: "https://navypier.org/pier-events/wintrust-winter-wonderfest/"
                    }
                ]
            },

            {
                // WEATHER OPTION 2: SUNNY
                condition: "Sunny",
                month: ["June", "July", "August"],

                // Three main attractions
                attractions: [
                    {
                        name: "Millennium Park",
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


                // Sunny seasonal events
                event: [
                    {
                        name: "57th Street Art Fair",
                        category: "Festivals and Events",
                        description: "Explore an outdoor art festival in Chicago's Hyde Park neighborhood featuring paintings, photography, ceramics, jewelry, sculpture, live music, and food vendors.",
                        estimatedCostMin: 0,
                        estimatedCostMax: 0,
                        priceType: "perPerson",
                        startDate: "2027-06-05",
                        endDate: "2027-06-06",
                        estimatedDuration: 180,
                        location: "57th Street between Woodlawn and Kenwood Avenues, Chicago, IL 60637",
                        website: "https://www.choosechicago.com/event/the-80th-annual-57th-street-art-fair-returns/"
                    },
                    {
                        name: "Windy City Smokeout",
                        category: "Festivals and Events",
                        description: "Attend a summer country music and barbecue festival featuring live performances, touring artists, barbecue vendors, and festival entertainment.",
                        estimatedCostMin: null,
                        estimatedCostMax: null,
                        priceType: "perPerson",
                        startDate: "2027-07-08",
                        endDate: "2027-07-11",
                        estimatedDuration: 240,
                        location: "United Center Parking Lot, 1901 W Madison Street, Chicago, IL 60612",
                        website: "https://www.windycitysmokeout.com/"
                    },
                ]
            }
        ],

        // SHARED ACTIVITIES — available for both Snowy and Sunny weather
        activities: [
            {
                // Activity 1: Museums & Art
                name: "Field Museum Visit",
                category: "Museums & Art",
                description: "Explore natural history exhibits, dinosaur fossils, ancient cultures, and interactive museum displays.",
                estimatedCostMin: 30,
                estimatedCostMax: 40,
                priceType: "perPerson",
                estimatedDuration: 180,
                location: "1400 S DuSable Lake Shore Drive, Chicago, IL 60605",
                openingHours: "Verify museum hours",
                website: "https://www.fieldmuseum.org/"
            },
            {
                // Activity 2: Food & Dining
                name: "Chicago French Market Food Hall",
                category: "Food & Dining",
                description: "Explore an indoor food market featuring local vendors, international cuisine, specialty foods, and quick meals.",
                estimatedCostMin: 12,
                estimatedCostMax: 30,
                priceType: "perPerson",
                estimatedDuration: 90,
                location: "131 N Clinton Street, Chicago, IL 60661",
                openingHours: "Verify vendor hours",
                website: "https://frenchmarketchicago.com/"
            },
            {
                // Activity 3: History & Culture
                name: "Chicago Cultural Center Visit",
                category: "History & Culture",
                description: "Explore a historic Chicago landmark featuring architectural details, art exhibitions, and a famous stained glass dome.",
                estimatedCostMin: 0,
                estimatedCostMax: 0,
                priceType: "perPerson",
                estimatedDuration: 90,
                location: "78 E Washington Street, Chicago, IL 60602",
                openingHours: "Verify current building hours",
                website: "https://www.chicago.gov/city/en/depts/dca/supp_info/chicago_culturalcenter.html"
            },
            {
                // Activity 4: Entertainment
                name: "Skydeck Chicago Observation Experience",
                category: "Entertainment",
                description: "Enjoy panoramic views of Chicago from Willis Tower and experience The Ledge glass observation boxes.",
                estimatedCostMin: 32,
                estimatedCostMax: 49,
                priceType: "perPerson",
                estimatedDuration: 120,
                location: "233 S Wacker Drive, Chicago, IL 60606",
                openingHours: "Hours vary by season",
                website: "https://theskydeck.com/"
            },
            {
                // Activity 5: Outdoor & Nature
                name: "Garfield Park Conservatory Visit",
                category: "Outdoor & Nature",
                description: "Explore lush tropical plants, indoor gardens, and greenhouse exhibits during Chicago's colder winter months.",
                estimatedCostMin: 0,
                estimatedCostMax: 20,
                priceType: "perPerson",
                estimatedDuration: 120,
                location: "300 N Central Park Avenue, Chicago, IL 60624",
                openingHours: "Verify current hours and reservation requirements",
                website: "https://garfieldconservatory.org/"
            },
            {
                // Activity 1: Outdoor & Nature
                name: "Chicago Riverwalk",
                category: "Outdoor & Nature",
                description: "Walk along the Chicago River, enjoy waterfront views, discover public art, and explore nearby restaurants and cafes.",
                estimatedCostMin: 0,
                estimatedCostMax: 0,
                priceType: "perPerson",
                estimatedDuration: 90,
                location: "Chicago Riverwalk, Downtown Chicago, IL",
                openingHours: "Verify public access hours",
                website: "https://www.chicago.gov/city/en/depts/cdot/supp_info/chicago_riverwalk.html"
            },
            {
                // Activity 2: Food & Dining
                name: "Chicago Deep-Dish Pizza Experience",
                category: "Food & Dining",
                description: "Try Chicago's famous deep-dish pizza at a local restaurant and experience one of the city's signature foods.",
                estimatedCostMin: 15,
                estimatedCostMax: 30,
                priceType: "perPerson",
                estimatedDuration: 90,
                location: "Chicago, IL - Restaurant to be selected",
                openingHours: "Varies by restaurant",
                website: ""
            },
            {
                // Activity 3: Family Friendly
                name: "Lincoln Park Zoo Visit",
                category: "Family Friendly",
                description: "Explore a free urban zoo featuring animal habitats, gardens, educational exhibits, and views of the Chicago skyline.",
                estimatedCostMin: 0,
                estimatedCostMax: 0,
                priceType: "perPerson",
                estimatedDuration: 150,
                location: "2001 N Clark Street, Chicago, IL 60614",
                openingHours: "Hours vary seasonally",
                website: "https://www.lpzoo.org/"
            },
            {
                // Activity 4: Entertainment
                name: "Chicago Architecture River Cruise",
                category: "Entertainment",
                description: "Take a guided boat tour along the Chicago River to learn about the city's historic skyscrapers and famous architecture.",
                estimatedCostMin: 46,
                estimatedCostMax: 65,
                priceType: "perPerson",
                estimatedDuration: 90,
                location: "Chicago River, Downtown Chicago, IL",
                openingHours: "Departure times vary by tour operator",
                website: "https://www.architecture.org/"
            },
            {
                // Activity 5: Sports & Recreation
                name: "Lakefront Trail Bike Ride",
                category: "Sports & Recreation",
                description: "Ride a bicycle along Chicago's scenic lakefront, passing beaches, parks, and views of Lake Michigan.",
                estimatedCostMin: 15,
                estimatedCostMax: 35,
                priceType: "perPerson",
                estimatedDuration: 120,
                location: "Lakefront Trail, Chicago, IL",
                openingHours: "Verify trail access and bicycle rental hours",
                website: "https://divvybikes.com/"
            }
        ],



        breakfast: [
            {
                name: "Lou Mitchell's",
                category: "Food & Dining",
                description: "American diner restaurant candidate for breakfast in the Chicago area; TODO: confirm menu and operating hours.",
                mealTypes: ["Breakfast"],
                estimatedCostMin: 12,
                estimatedCostMax: 25,
                priceType: "perPerson",
                priceTier: "Budget",
                address: "565 W Jackson Blvd, Chicago, IL 60661",
                cuisine: "American diner",
                openingHours: "Wed-Fri 6 AM-2 PM; Sat-Sun 7 AM-2 PM; closed Mon-Tue",
                website: "https://www.loumitchells.com/",
                reservationRecommended: false,
            },
            {
                name: "Wildberry Pancakes and Cafe",
                category: "Food & Dining",
                description: "American breakfast restaurant candidate for breakfast in the Chicago area; TODO: confirm menu and operating hours.",
                mealTypes: ["Breakfast"],
                estimatedCostMin: 15,
                estimatedCostMax: 30,
                priceType: "perPerson",
                priceTier: "Mid-Range",
                address: "196 E Pearson St, Chicago, IL 60611",
                cuisine: "American breakfast",
                openingHours: "Daily 7 AM-2 PM",
                website: "https://wildberrycafe.com/locations/chicago-water-tower-place",
                reservationRecommended: true,
            },
            {
                name: "Batter & Berries",
                category: "Food & Dining",
                description: "American brunch restaurant candidate for breakfast in the Chicago area; TODO: confirm menu and operating hours.",
                mealTypes: ["Breakfast"],
                estimatedCostMin: 15,
                estimatedCostMax: 30,
                priceType: "perPerson",
                priceTier: "Mid-Range",
                address: "2748 N Lincoln Ave, Chicago, IL 60614",
                cuisine: "American brunch",
                openingHours: "Fri-Mon 8 AM-3 PM; Tue-Thu 9 AM-2 PM",
                website: "https://www.batterandberries.com/",
                reservationRecommended: false,
            },
            {
                name: "The Peninsula Chicago - The Lobby",
                category: "Food & Dining",
                description: "Luxury hotel breakfast restaurant candidate for breakfast in the Chicago area; TODO: confirm menu and operating hours.",
                mealTypes: ["Breakfast"],
                estimatedCostMin: 35,
                estimatedCostMax: 65,
                priceType: "perPerson",
                priceTier: "High-End",
                address: "108 E Superior St, Chicago, IL 60611",
                cuisine: "Luxury hotel breakfast",
                openingHours: "Breakfast daily 7 AM-11:30 AM",
                website: "https://www.peninsula.com/en/chicago/hotel-fine-dining/the-lobby-afternoon-tea",
                reservationRecommended: true,
            },
        ],

        lunch: [
            {
                name: "Cafecito",
                category: "Food & Dining",
                description: "Cuban sandwiches restaurant candidate for lunch in the Chicago area; TODO: confirm menu and operating hours.",
                mealTypes: ["Lunch"],
                estimatedCostMin: 10,
                estimatedCostMax: 20,
                priceType: "perPerson",
                priceTier: "Budget",
                address: "26 E Congress Pkwy, Chicago, IL 60605",
                cuisine: "Cuban sandwiches",
                openingHours: "Mon-Fri 8 AM-8 PM; Sat-Sun 8 AM-6 PM",
                website: "https://iheartcafecito.com/",
                reservationRecommended: false,
            },
            {
                name: "Manny’s Cafeteria & Delicatessen",
                category: "Food & Dining",
                description: "Jewish deli restaurant candidate for lunch in the Chicago area; TODO: confirm menu and operating hours.",
                mealTypes: ["Lunch"],
                estimatedCostMin: 18,
                estimatedCostMax: 35,
                priceType: "perPerson",
                priceTier: "Mid-Range",
                address: "1141 S Jefferson St, Chicago, IL 60607",
                cuisine: "Jewish deli",
                openingHours: "Tue-Sat 8 AM-7:30 PM; Sun 8 AM-3:30 PM; closed Mon",
                website: "https://www.mannysdeli.com/",
                reservationRecommended: false,
            },
            {
                name: "The Purple Pig",
                category: "Food & Dining",
                description: "Mediterranean small plates restaurant candidate for lunch in the Chicago area; TODO: confirm menu and operating hours.",
                mealTypes: ["Lunch"],
                estimatedCostMin: 25,
                estimatedCostMax: 50,
                priceType: "perPerson",
                priceTier: "Mid-Range",
                address: "444 N Michigan Ave, Chicago, IL 60611",
                cuisine: "Mediterranean small plates",
                openingHours: "Daily 11 AM-10 PM",
                website: "https://thepurplepigrestaurantgroup.com/locations/chicago/",
                reservationRecommended: true,
            },
            {
                name: "Cindy’s Rooftop",
                category: "Food & Dining",
                description: "American rooftop dining restaurant candidate for lunch in the Chicago area; TODO: confirm menu and operating hours.",
                mealTypes: ["Lunch"],
                estimatedCostMin: 25,
                estimatedCostMax: 55,
                priceType: "perPerson",
                priceTier: "High-End",
                address: "12 S Michigan Ave, Chicago, IL 60603",
                cuisine: "American rooftop dining",
                openingHours: "Mon-Thu 11 AM-11 PM; Fri 11 AM-midnight; Sat 10 AM-midnight; Sun 10 AM-11 PM",
                website: "https://cindysrooftop.com/",
                reservationRecommended: true,
            },
        ],

        dinner: [
            {
                name: "Portillo’s",
                category: "Food & Dining",
                description: "Chicago-style hot dogs and Italian beef restaurant candidate for dinner in the Chicago area; TODO: confirm menu and operating hours.",
                mealTypes: ["Dinner"],
                estimatedCostMin: 12,
                estimatedCostMax: 25,
                priceType: "perPerson",
                priceTier: "Budget",
                address: "100 W Ontario St, Chicago, IL 60610",
                cuisine: "Chicago-style hot dogs and Italian beef",
                openingHours: "Daily 10 AM-1 AM",
                website: "https://locations.portillos.com/chicago",
                reservationRecommended: false,
            },
            {
                name: "Quartino Ristorante",
                category: "Food & Dining",
                description: "Italian restaurant candidate for dinner in the Chicago area; TODO: confirm menu and operating hours.",
                mealTypes: ["Dinner"],
                estimatedCostMin: 20,
                estimatedCostMax: 45,
                priceType: "perPerson",
                priceTier: "Mid-Range",
                address: "626 N State St, Chicago, IL 60654",
                cuisine: "Italian",
                openingHours: "Daily 11 AM-11 PM",
                website: "https://quartinoristorante.com/chicago",
                reservationRecommended: true,
            },
            {
                name: "Girl & the Goat",
                category: "Food & Dining",
                description: "Contemporary American restaurant candidate for dinner in the Chicago area; TODO: confirm menu and operating hours.",
                mealTypes: ["Dinner"],
                estimatedCostMin: 40,
                estimatedCostMax: 80,
                priceType: "perPerson",
                priceTier: "Mid-Range",
                address: "809 W Randolph St, Chicago, IL 60607",
                cuisine: "Contemporary American",
                openingHours: "Sun-Thu dinner 4:30 PM-10 PM; Fri-Sat dinner 4:30 PM-11 PM; Sun brunch 10 AM-2 PM",
                website: "https://www.girlandthegoat.com/chicago",
                reservationRecommended: true,
            },
            {
                name: "Alinea",
                category: "Food & Dining",
                description: "Modernist tasting menu restaurant candidate for dinner in the Chicago area; TODO: confirm menu and operating hours.",
                mealTypes: ["Dinner"],
                estimatedCostMin: 395,
                estimatedCostMax: 595,
                priceType: "perPerson",
                priceTier: "High-End",
                address: "406 N Sangamon St, Chicago, IL 60642",
                cuisine: "Modernist tasting menu",
                openingHours: "Daily dinner; seating times vary by reservation",
                website: "https://www.alinearestaurant.com/",
                reservationRecommended: true,
            },
        ],



        // LOCAL TRANSPORTATION
        transportation: [
            "CTA Trains",
            "CTA Buses",
            "Walking",
            "Uber/Lyft"
        ],


        // CHICAGO — DETAILED TRANSPORTATION OPTIONS
        transportationOptions: [
            {
                name: "CTA Trains",
                type: "Public Transportation",
                description: "Chicago Transit Authority elevated and subway trains, commonly called the L. Connects Downtown Chicago, River North, neighborhoods, and major attractions. The Blue Line serves O'Hare Airport and the Orange Line serves Midway Airport. Standard train fare is $2.50; boarding at O'Hare costs $5. Eligible transfers are free within two hours.",
                estimatedCostMin: 2.50,
                estimatedCostMax: 2.50,
                priceType: "perRide",
                website: "https://www.transitchicago.com/fares/"
            },
            {
                name: "CTA Buses",
                type: "Public Transportation",
                description: "Chicago's city bus system serving Downtown, neighborhoods, museums, shopping areas, and attractions. Standard electronic fare is $2.25 per ride. Cash bus fare is $2.50 without transfers. Passengers can use Ventra cards or supported contactless payment methods.",
                estimatedCostMin: 2.25,
                estimatedCostMax: 2.25,
                priceType: "perRide",
                website: "https://www.transitchicago.com/"
            },
            {
                name: "Walking",
                type: "Walking",
                description: "Free transportation for exploring Downtown Chicago, the Magnificent Mile, Millennium Park, Grant Park, Navy Pier, River North, and the Chicago Riverwalk. Walking is convenient for nearby attractions, shopping, restaurants, and sightseeing. Travel times depend on distance and weather conditions.",
                estimatedCostMin: 0,
                estimatedCostMax: 0,
                priceType: "free"
            },
            {
                name: "Uber/Lyft",
                type: "Rideshare",
                description: "App-based rideshare transportation available throughout Chicago and surrounding neighborhoods. Convenient for hotel transfers, attractions not near public transportation, and trips during unfavorable weather. Prices depend on distance, traffic, demand, and time of day. Airport fees may apply.",
                estimatedCostMin: 12,
                estimatedCostMax: 45,
                priceType: "perRide",
                website: "https://www.uber.com/"
            }
        ],

        // CHICAGO — THREE REAL HOTELS
        // Budget, Mid-Range, and High-End
        hotels: [
            {
                name: "Freehand Chicago",
                category: "Budget",
                description: "Budget-friendly boutique hotel and hostel hybrid in Chicago's River North neighborhood. Located inside a historic 1927 building near the Magnificent Mile, restaurants, nightlife, and public transportation. Offers private hotel rooms and group accommodations, complimentary Wi-Fi, a fitness center, an on-site cafe, and the Broken Shaker bar. Additional fees vary depending on room type.",
                address: "19 East Ohio Street, Chicago, IL 60611, USA",
                estimatedNightlyCostMin: 150,
                estimatedNightlyCostMax: 350,
                priceType: "perNight",
                amenities: [
                    "Free Wi-Fi",
                    "Private hotel rooms available",
                    "Group rooms available",
                    "Air conditioning",
                    "Fitness center",
                    "On-site cafe",
                    "Broken Shaker bar",
                    "24-hour front desk",
                    "Daily housekeeping",
                    "Guest laundry",
                    "Luggage storage",
                    "Pet-friendly private rooms",
                    "Nearby CTA train station",
                    "Paid off-site parking"
                ],
                parkingCost: null,
                additionalFees: null,
                website: "https://freehandhotels.com/chicago/"
            },

            {
                name: "Hampton Inn Chicago West Loop Fulton Market Area",
                category: "Mid-Range",
                description: "Comfortable modern hotel in Chicago's West Loop neighborhood near Fulton Market, Randolph Street Restaurant Row, and Union Station. Offers complimentary hot breakfast, free Wi-Fi, an indoor swimming pool, fitness center, modern guest rooms, and convenient access to Downtown Chicago attractions. On-site self-parking costs $65 per day.",
                address: "116 North Jefferson Street, Chicago, IL 60661, USA",
                estimatedNightlyCostMin: 180,
                estimatedNightlyCostMax: 400,
                priceType: "perNight",
                amenities: [
                    "Free Wi-Fi",
                    "Complimentary hot breakfast",
                    "Indoor swimming pool",
                    "Fitness center",
                    "Modern guest rooms",
                    "Flat-screen TVs",
                    "Streaming entertainment",
                    "Connecting rooms available",
                    "Pet-friendly rooms",
                    "EV charging",
                    "On-site secured parking",
                    "Digital Key",
                    "Outdoor terrace",
                    "Meeting rooms",
                    "Air conditioning"
                ],
                parkingCost: 65,
                additionalFees: null,
                website: "https://www.hilton.com/en/hotels/chiwxhx-hampton-chicago-west-loop-fulton-market-area/"
            },
            {
                name: "The Langham, Chicago",
                category: "High-End",
                description: "Luxury five-star hotel overlooking the Chicago River in the landmark Mies van der Rohe-designed tower. Features spacious rooms and suites, sophisticated furnishings, Chicago River and city views in select rooms, an indoor swimming pool, Chuan Spa, fitness facilities, upscale dining, and concierge services. Convenient to the Chicago Riverwalk, Magnificent Mile, and Millennium Park.",
                address: "330 North Wabash Avenue, Chicago, IL 60611, USA",
                estimatedNightlyCostMin: 380,
                estimatedNightlyCostMax: 1000,
                priceType: "perNight",
                amenities: [
                    "Complimentary Wi-Fi",
                    "Luxury rooms and suites",
                    "Chicago River views in select rooms",
                    "City skyline views",
                    "Indoor swimming pool",
                    "Chuan Spa",
                    "Hot tub",
                    "Sauna",
                    "Fitness center",
                    "Upscale restaurant",
                    "Afternoon tea service",
                    "Concierge service",
                    "Spacious luxury bathrooms",
                    "Deep soaking bathtub",
                    "Rainfall shower",
                    "Air conditioning",
                    "Valet parking"
                ],
                parkingCost: 88,
                additionalFees: null,
                website: "https://www.langhamhotels.com/en/the-langham/chicago/"
            }
        ],



        // CHICAGO — TWO REAL AIRBNB LISTINGS


        vacationRentals: [
            {
                name: "Chicago Skyline Luxury Retreat",
                category: "Vacation Rental",
                propertyType: "Entire apartment",
                description: "Modern two-bedroom corner high-rise apartment in River North featuring panoramic skyline views, floor-to-ceiling windows, private balcony, a chef's kitchen, and access to a heated outdoor pool and rooftop lounge. Located near the Chicago Riverwalk and Magnificent Mile.",
                address: "River North, Chicago, IL, USA — exact address provided after booking",
                estimatedNightlyCostMin: 254.33,
                estimatedNightlyCostMax: 254.33,
                priceType: "perNight",
                maxGuests: 5,
                bedrooms: 2,
                bathrooms: 2,
                amenities: [
                    "Wi-Fi",
                    "Full kitchen",
                    "Private balcony",
                    "Chicago skyline views",
                    "Heated outdoor pool",
                    "Rooftop lounge",
                    "Fitness center",
                    "Washer and dryer",
                    "Air conditioning",
                    "24-hour front desk"
                ],
                cleaningFee: null,
                serviceFee: null,
                parkingCost: null,
                website: "https://www.airbnb.com/rooms/1796641841671184258"
            },
            {
                name: "Chicago Wicker Park Designer Loft",
                category: "Vacation Rental",
                propertyType: "Entire loft",
                description: "Unique designer loft inside a converted early-1900s warehouse in Chicago's Wicker Park neighborhood. Features exposed brick, 14-foot timber ceilings, an award-winning chef's kitchen, Japanese-style soaking tub, and spacious living areas near Division Street.",
                address: "Wicker Park, Chicago, IL, USA — exact address provided after booking",
                estimatedNightlyCostMin: 494.50,
                estimatedNightlyCostMax: 494.50,
                priceType: "perNight",
                maxGuests: 4,
                bedrooms: 2,
                bathrooms: 2,
                amenities: [
                    "Wi-Fi",
                    "Chef's kitchen",
                    "Exposed brick interior",
                    "Japanese soaking tub",
                    "Heated bathroom floors",
                    "Washer and dryer",
                    "Dedicated workspace",
                    "Smart TV",
                    "Free street parking",
                    "Air conditioning"
                ],
                cleaningFee: null,
                serviceFee: null,
                parkingCost: null,
                website: "https://www.airbnb.com/rooms/6553226"
            }
        ]
    },



    // Devner #3
    {

        // DESTINATION 3: DENVER, COLORADO

        id: 3,
        city: "Denver",
        state: "Colorado",
        description: "Denver is a vibrant Colorado city known for its mountain views, outdoor recreation, arts, museums, historic neighborhoods, and proximity to the Rocky Mountains.",
        duration: "3-5 days",

        weatherOptions: [
            {
                // WEATHER OPTION 1: SNOWY

                condition: "Snowy",
                month: ["December", "January", "February", "March"],

                // Three main attractions
                attractions: [
                    {
                        name: "Denver Art Museum",
                        category: "Museums & Art",
                        estimatedCost: 30,
                    },
                    {
                        name: "Denver Pavilions",
                        category: "Shopping",
                        estimatedCost: 0,
                    },
                    {
                        name: "Meow Wolf Convergence Station",
                        category: "Entertainment",
                        estimatedCost: 37,
                    }
                ],

                // Snowy seasonal events
                event: [
                    {
                        name: "Denver Christkindlmarket",
                        category: "Festivals and Events",
                        description: "Explore a traditional German holiday market featuring handcrafted gifts, European foods, festive decorations, artisan vendors, and live entertainment.",
                        estimatedCostMin: 0,
                        estimatedCostMax: 0,
                        priceType: "perPerson",
                        startDate: "2026-11-20",
                        endDate: "2026-12-23",
                        estimatedDuration: 120,
                        location: "Auraria Campus, Tivoli Quad, 1000 Larimer Street, Denver, CO 80204",
                        website: "https://www.christkindlmarketdenver.com/"
                    },
                    {
                        name: "Denver Botanic Gardens Blossoms of Light",
                        category: "Festivals and Events",
                        description: "Experience a winter holiday light display with illuminated gardens, colorful LED installations, glowing trees, and seasonal entertainment.",
                        estimatedCostMin: 19,
                        estimatedCostMax: 45,
                        priceType: "perPerson",
                        startDate: "2026-11-20",
                        endDate: "2027-01-10",
                        estimatedDuration: 120,
                        location: "Denver Botanic Gardens, 1007 York Street, Denver, CO 80206",
                        website: "https://www.botanicgardens.org/events/public-events/blossoms-light"
                    }
                ],
            },
            {

                // WEATHER OPTION 2: SUNNY

                condition: "Sunny",
                month: ["June", "July", "August"],

                // Three main attractions
                attractions: [
                    {
                        name: "Red Rocks Park and Amphitheatre",
                        category: "Outdoor & Nature",
                        estimatedCost: 0
                    },
                    {
                        name: "Denver Botanic Gardens",
                        category: "Outdoor & Nature",
                        estimatedCost: 15.25,
                    },
                    {
                        name: "Coors Field",
                        category: "Sports & Recreation",
                        estimatedCost: null
                    }
                ],

                // Sunny seasonal events
                event: [

                    {
                        name: "Denver Cherry Blossom Festival",
                        category: "Festivals and Events",
                        description: "Celebrate Japanese heritage and culture with taiko drumming, traditional performances, Japanese food, artwork, cultural demonstrations, and a marketplace.",
                        estimatedCostMin: 0,
                        estimatedCostMax: 0,
                        priceType: "perPerson",
                        startDate: "2027-06-26",
                        endDate: "2027-06-27",
                        estimatedDuration: 180,
                        location: "Sakura Square, Downtown Denver, CO 80202",
                        website: "https://cherryblossomdenver.org/"
                    },
                    {
                        name: "Cherry Creek Arts Festival",
                        category: "Festivals and Events",
                        description: "Explore a three-day outdoor arts festival featuring hundreds of juried artists, paintings, photography, sculpture, live music, food vendors, and interactive art activities.",
                        estimatedCostMin: 0,
                        estimatedCostMax: 0,
                        priceType: "perPerson",
                        startDate: "2027-07-02",
                        endDate: "2027-07-04",
                        estimatedDuration: 180,
                        location: "Cherry Creek North, Denver, CO 80206",
                        website: "https://cherryarts.org/events/cherry-creek-arts-festival/"
                    }
                ],



            }
        ],


        // SHARED ACTIVITIES (BOTH WEATHER OPTIONS)
        activities: [
            {
                // Activity 1: Museums & Art
                name: "Denver Museum of Nature & Science",
                category: "Museums & Art",
                description: "Explore interactive exhibits on dinosaurs, wildlife, space, natural history, and science at an indoor museum.",
                estimatedCostMin: 27.95,
                estimatedCostMax: 27.95,
                priceType: "perPerson",
                estimatedDuration: 180,
                location: "2001 Colorado Boulevard, Denver, CO 80205",
                openingHours: "Daily 9 AM-5 PM; most Fridays until 9 PM. Check holiday hours.",
                website: "https://www.dmns.org/"
            },
            {
                // Activity 2: Food & Dining
                name: "Denver Central Market Food Hall",
                category: "Food & Dining",
                description: "Explore an indoor food hall in the RiNo Art District featuring local restaurants, bakeries, specialty foods, and coffee.",
                estimatedCostMin: 12,
                estimatedCostMax: 30,
                priceType: "perPerson",
                estimatedDuration: 90,
                location: "2669 Larimer Street, Denver, CO 80205",
                openingHours: "Verify current vendor hours",
                website: "https://www.denvercentralmarket.com/"
            },
            {
                // Activity 3: History & Culture
                name: "History Colorado Center",
                category: "History & Culture",
                description: "Learn about Colorado's history through interactive exhibits, cultural displays, historical artifacts, and educational experiences.",
                estimatedCostMin: 15,
                estimatedCostMax: 20,
                priceType: "perPerson",
                estimatedDuration: 150,
                location: "1200 Broadway, Denver, CO 80203",
                openingHours: "Verify museum hours",
                website: "https://www.historycolorado.org/history-colorado-center"
            },
            {
                // Activity 4: Shopping
                name: "Cherry Creek Shopping Center",
                category: "Shopping",
                description: "Explore an indoor shopping destination featuring luxury retailers, fashion boutiques, department stores, and restaurants.",
                estimatedCostMin: 0,
                estimatedCostMax: null,
                priceType: "perPerson",
                estimatedDuration: 120,
                location: "3000 E 1st Avenue, Denver, CO 80206",
                openingHours: "Hours vary by store",
                website: "https://www.cherrycreekshoppingcenter.com/"
            },

            // Activity 5: Entertainment

            {
                name: "McGregor Skate at McGregor Square",
                category: "Sports & Recreation",
                description: "Enjoy seasonal outdoor ice skating at McGregor Square in downtown Denver near Coors Field and Union Station. Skate rentals are available.",
                estimatedCostMin: 6,
                estimatedCostMax: 15,
                priceType: "perPerson",
                estimatedDuration: 90,
                location: "1901 Wazee Street, Denver, CO 80202",
                openingHours: "Seasonal Nov 27-Jan 31; session hours vary",
                website: "https://www.mcgregorsquare.com/events/mcgregor-skate/"
            },


            {
                // Activity 1: Outdoor & Nature
                name: "City Park Scenic Walk",
                category: "Outdoor & Nature",
                description: "Explore one of Denver's largest parks, featuring scenic lakes, walking paths, landscaped gardens, and skyline views with the Rocky Mountains in the background.",
                estimatedCostMin: 0,
                estimatedCostMax: 0,
                priceType: "perPerson",
                estimatedDuration: 90,
                location: "City Park, Denver, CO 80205",
                openingHours: "Verify posted park hours",
                website: "https://www.denvergov.org/"
            },
            {
                // Activity 2: Food & Dining
                name: "Denver Union Station Dining Experience",
                category: "Food & Dining",
                description: "Explore Denver's historic Union Station and enjoy its restaurants, coffee shops, and food options inside the restored transportation landmark.",
                estimatedCostMin: 15,
                estimatedCostMax: 35,
                priceType: "perPerson",
                estimatedDuration: 90,
                location: "1701 Wynkoop Street, Denver, CO 80202",
                openingHours: "Varies by restaurant",
                website: "https://www.denverunionstation.com/"
            },
            {
                // Activity 3: Sports & Recreation
                name: "Cherry Creek Trail Bike Ride",
                category: "Sports & Recreation",
                description: "Ride a bicycle along Denver's scenic Cherry Creek Trail, passing parks, waterways, and downtown neighborhoods.",
                estimatedCostMin: 0,
                estimatedCostMax: 40,
                priceType: "perPerson",
                estimatedDuration: 120,
                location: "Cherry Creek Trail, Denver, CO",
                openingHours: "Verify public trail access hours",
                website: "https://visitdenver.com/"
            },
            {
                // Activity 4: Family Friendly
                name: "Denver Zoo Conservation Alliance Visit",
                category: "Family Friendly",
                description: "Explore wildlife habitats and educational exhibits featuring animals from around the world at Denver's zoo.",
                estimatedCostMin: 27,
                estimatedCostMax: 27,
                priceType: "perPerson",
                estimatedDuration: 180,
                location: "2300 Steele Street, Denver, CO 80205",
                openingHours: "Hours vary by season",
                website: "https://denverzoo.org/"
            },
            {
                // Activity 5: Entertainment
                name: "Confluence Park Riverfront Visit",
                category: "Outdoor & Nature",
                description: "Enjoy Denver's riverfront at the meeting point of Cherry Creek and the South Platte River, with walking trails, scenic views, and nearby recreation.",
                estimatedCostMin: 0,
                estimatedCostMax: 0,
                priceType: "perPerson",
                estimatedDuration: 90,
                location: "Confluence Park, Denver, CO 80202",
                openingHours: "Verify posted park hours",
                website: "https://visitdenver.com/"
            }
        ],




        breakfast: [

            {
                name: "Santiago’s Mexican Restaurant",
                category: "Food & Dining",
                description: "Casual Colorado Mexican restaurant known for breakfast burritos, green chile, and affordable Mexican comfort food.",
                mealTypes: ["Breakfast"],
                estimatedCostMin: 6,
                estimatedCostMax: 15,
                priceType: "perPerson",
                priceTier: "Budget",
                address: "2505 N Federal Blvd, Denver, CO 80211",
                cuisine: "Mexican breakfast",
                openingHours: "Mon-Sat 6 AM-8 PM; closed Sun",
                website: "https://eatatsantiagos.com/Denver-N-Federal",
                reservationRecommended: false
            },
            {
                name: "Snooze, an A.M. Eatery",
                category: "Food & Dining",
                description: "Colorful breakfast and brunch restaurant serving creative pancakes, eggs Benedict, breakfast classics, and specialty coffee.",
                mealTypes: ["Breakfast"],
                estimatedCostMin: 15,
                estimatedCostMax: 30,
                priceType: "perPerson",
                priceTier: "Mid-Range",
                address: "1701 Wynkoop St, Suite 100, Denver, CO 80202",
                cuisine: "American brunch",
                openingHours: "Mon-Fri 6 AM-3 PM; Sat-Sun 6 AM-3:30 PM",
                website: "https://www.snoozeeatery.com/restaurant/colorado/union-station",
                reservationRecommended: false
            },
            {
                name: "Denver Biscuit Company",
                category: "Food & Dining",
                description: "Popular Denver breakfast spot serving oversized buttermilk biscuit sandwiches, biscuit plates, and Southern-inspired comfort food.",
                mealTypes: ["Breakfast"],
                estimatedCostMin: 15,
                estimatedCostMax: 28,
                priceType: "perPerson",
                priceTier: "Mid-Range",
                address: "3237 E Colfax Ave, Denver, CO 80206",
                cuisine: "Southern-inspired breakfast",
                openingHours: "Breakfast service hours vary; verify with restaurant",
                website: "https://www.theatomiccowboy.com/locations-colfax",
                reservationRecommended: false
            },
            {
                name: "The Bindery",
                category: "Food & Dining",
                description: "Contemporary Denver restaurant and bakery offering seasonal breakfast, weekend brunch, scratch-made pastries, and creative American cuisine.",
                mealTypes: ["Breakfast"],
                estimatedCostMin: 20,
                estimatedCostMax: 40,
                priceType: "perPerson",
                priceTier: "High-End",
                address: "1817 Central St, Denver, CO 80211",
                cuisine: "Contemporary American brunch",
                openingHours: "Tue-Fri breakfast 9 AM-2 PM; Sat-Sun brunch 9 AM-3 PM; closed Mon",
                website: "https://thebinderydenver.com/",
                reservationRecommended: true
            },
        ],
        lunch: [

            {
                name: "Biker Jim’s Gourmet Dogs",
                category: "Food & Dining",
                description: "Denver gourmet sausage concept at Avanti Food & Beverage, known for creative hot dogs, specialty sausages, and unusual toppings.",
                mealTypes: ["Lunch"],
                estimatedCostMin: 12,
                estimatedCostMax: 25,
                priceType: "perPerson",
                priceTier: "Budget",
                address: "3200 N Pecos St, Denver, CO 80211",
                cuisine: "Gourmet hot dogs",
                openingHours: "Vendor hours vary; verify current Avanti schedule",
                website: "https://bikerjimsco.com/",
                reservationRecommended: false
            },
            {
                name: "Denver Central Market",
                category: "Food & Dining",
                description: "Lively RiNo food hall featuring independent vendors serving pizza, sandwiches, fresh seafood, baked goods, coffee, and other specialties.",
                mealTypes: ["Lunch"],
                estimatedCostMin: 12,
                estimatedCostMax: 30,
                priceType: "perPerson",
                priceTier: "Mid-Range",
                address: "2669 Larimer St, Denver, CO 80205",
                cuisine: "Food hall",
                openingHours: "Food vendors Sun-Thu 8 AM-9 PM; Fri-Sat 8 AM-11 PM; individual hours vary",
                website: "https://www.denvercentralmarket.com/",
                reservationRecommended: false
            },
            {
                name: "Mercantile Dining & Provision",
                category: "Food & Dining",
                description: "Modern American restaurant in Denver Union Station featuring seasonal farm-inspired dishes, lunch specials, and locally sourced ingredients.",
                mealTypes: ["Lunch"],
                estimatedCostMin: 20,
                estimatedCostMax: 45,
                priceType: "perPerson",
                priceTier: "Mid-Range",
                address: "1701 Wynkoop St, Suite 155, Denver, CO 80202",
                cuisine: "Contemporary American",
                openingHours: "Mon-Fri lunch 11 AM-2 PM; Sat-Sun brunch 10:30 AM-2 PM",
                website: "https://www.mercantiledenver.com/",
                reservationRecommended: true
            },
            {
                name: "Tavernetta",
                category: "Food & Dining",
                description: "Upscale Italian restaurant near Union Station serving handmade pastas, seasonal Italian specialties, and refined lunch dishes.",
                mealTypes: ["Lunch"],
                estimatedCostMin: 25,
                estimatedCostMax: 60,
                priceType: "perPerson",
                priceTier: "High-End",
                address: "1889 16th St, Denver, CO 80202",
                cuisine: "Upscale Italian",
                openingHours: "Mon-Fri lunch 11:30 AM-2 PM; dinner daily 5 PM-10 PM",
                website: "https://www.tavernettadenver.com/",
                reservationRecommended: true
            },

        ],

        dinner: [

            {
                name: "Illegal Pete’s",
                category: "Food & Dining",
                description: "Casual Colorado Mexican restaurant serving customizable burritos, bowls, tacos, queso, and other quick-service favorites.",
                mealTypes: ["Dinner"],
                estimatedCostMin: 12,
                estimatedCostMax: 22,
                priceType: "perPerson",
                priceTier: "Budget",
                address: "270 S Broadway, Denver, CO 80209",
                cuisine: "Mexican",
                openingHours: "Mon-Thu 10:30 AM-10 PM; Fri-Sat 10:30 AM-11 PM; Sun 9 AM-9 PM",
                website: "https://www.illegalpetes.com/locations",
                reservationRecommended: false
            },
            {
                name: "Work & Class",
                category: "Food & Dining",
                description: "Lively RiNo restaurant combining Latin American and Southern-inspired comfort food, slow-roasted meats, and shareable sides.",
                mealTypes: ["Dinner"],
                estimatedCostMin: 25,
                estimatedCostMax: 50,
                priceType: "perPerson",
                priceTier: "Mid-Range",
                address: "2500 Larimer St, Suite 101, Denver, CO 80205",
                cuisine: "Latin American and Southern-inspired",
                openingHours: "Wed-Sun dinner 5 PM-close; closed Mon-Tue",
                website: "https://www.workandclassdenver.com/",
                reservationRecommended: true
            },
            {
                name: "Safta",
                category: "Food & Dining",
                description: "Modern Israeli restaurant known for freshly baked pita, hummus, Middle Eastern small plates, grilled dishes, and seasonal cuisine.",
                mealTypes: ["Dinner"],
                estimatedCostMin: 35,
                estimatedCostMax: 75,
                priceType: "perPerson",
                priceTier: "Mid-Range",
                address: "3330 Brighton Blvd, Suite 201, Denver, CO 80216",
                cuisine: "Israeli",
                openingHours: "Sun-Thu dinner 5 PM-9 PM; Fri-Sat dinner 5 PM-10 PM",
                website: "https://www.eatwithsafta.com/",
                reservationRecommended: true
            },
            {
                name: "Beckon",
                category: "Food & Dining",
                description: "Intimate fine-dining restaurant offering a seasonal multi-course chef's tasting menu in Denver's RiNo neighborhood.",
                mealTypes: ["Dinner"],
                estimatedCostMin: 250,
                estimatedCostMax: 395,
                priceType: "perPerson",
                priceTier: "High-End",
                address: "2843 Larimer St, Denver, CO 80205",
                cuisine: "Chef-led tasting menu",
                openingHours: "Wed-Sun 5 PM-11 PM; reservations required",
                website: "https://www.beckon-denver.com/",
                reservationRecommended: true
            },

        ],




        // ==========================================
        // LOCAL TRANSPORTATION
        // ==========================================

        transportation: [
            "Rental Car",
            "RTD Rail",
            "RTD Buses",
            "Walking",
            "Uber/Lyft"
        ],


        // DENVER — DETAILED TRANSPORTATION OPTIONS


        transportationOptions: [
            {
                name: "Rental Car",
                type: "Car Rental",
                description: "Rental vehicles available at Denver International Airport and across metropolitan Denver. Useful for visiting Red Rocks Park, mountain attractions, surrounding suburbs, and destinations outside the RTD transit network. Rates vary by vehicle, travel dates, rental location, and driver age. Fuel, tolls, parking, and insurance are not included.",
                estimatedCostMin: 45,
                estimatedCostMax: 100,
                priceType: "perDay",
                website: "https://www.enterprise.com/"
            },
            {
                name: "RTD Rail",
                type: "Public Transportation",
                description: "Denver's Regional Transportation District operates light rail and commuter rail connecting Downtown, Union Station, Denver International Airport, and surrounding communities. A standard three-hour pass costs $2.75. A standard day pass costs $5.50, and an airport day pass costs $10.",
                estimatedCostMin: 2.75,
                estimatedCostMax: 2.75,
                priceType: "per3Hours",
                website: "https://www.rtd-denver.com/fares-passes/fares"
            },
            {
                name: "RTD Buses",
                type: "Public Transportation",
                description: "Denver's public bus network serves Downtown, neighborhoods, museums, shopping areas, and destinations not directly accessible by rail. A standard three-hour pass costs $2.75 and includes eligible transfers. A standard day pass costs $5.50. Service frequency and travel times depend on the route.",
                estimatedCostMin: 2.75,
                estimatedCostMax: 2.75,
                priceType: "per3Hours",
                website: "https://www.rtd-denver.com/"
            },
            {
                name: "Walking",
                type: "Walking",
                description: "Free transportation for exploring pedestrian-friendly areas including Downtown Denver, LoDo, Union Station, Larimer Square, Civic Center Park, and the 16th Street corridor. Walking is convenient for nearby restaurants, museums, shops, and attractions.",
                estimatedCostMin: 0,
                estimatedCostMax: 0,
                priceType: "free"
            },
            {
                name: "Uber/Lyft",
                type: "Rideshare",
                description: "App-based rideshare transportation available throughout Denver and surrounding areas. Convenient for airport transfers, hotels, restaurants, nightlife, and attractions not directly served by RTD. Fares depend on distance, traffic, demand, weather, and time of day. Airport pickup fees may apply.",
                estimatedCostMin: 12,
                estimatedCostMax: 45,
                priceType: "perRide",
                website: "https://www.uber.com/"
            }
        ],





        hotels: [
            {
                name: "11th Avenue Hostel",
                category: "Budget",
                description: "Budget-friendly historic hostel and hotel in Denver's Golden Triangle Creative District near the Denver Art Museum and Civic Center Park. Offers private rooms and shared dormitory accommodations, complimentary Wi-Fi, a shared guest kitchen, lounge spaces, an on-site cafe, laundry facilities, and a 24-hour front desk. Nearby paid off-site parking is available. Some room types have shared bathrooms.",
                address: "1112 North Broadway, Denver, CO 80203, USA",
                estimatedNightlyCostMin: 75,
                estimatedNightlyCostMax: 160,
                priceType: "perNight",
                amenities: [
                    "Free Wi-Fi",
                    "Private rooms available",
                    "Shared dormitory accommodations",
                    "Shared guest kitchen",
                    "Shared dining area",
                    "Community refrigerator",
                    "Guest lounge",
                    "Library and reading area",
                    "On-site cafe",
                    "Guest laundry facilities",
                    "Luggage storage",
                    "24-hour front desk",
                    "Secure bicycle storage",
                    "Shared outdoor patio",
                    "Nearby public transportation",
                    "Paid off-site parking"
                ],
                parkingCost: null,
                additionalFees: null,
                website: "https://www.11thavenuehostel.com/"
            },
            {
                name: "Hampton Inn & Suites Denver Downtown-Convention Center",
                category: "Mid-Range",
                description: "Modern downtown hotel near the Colorado Convention Center, 16th Street, and central Denver attractions. Features complimentary hot breakfast, free Wi-Fi, an indoor swimming pool, fitness center, business center, and comfortable guest rooms. Convenient for travelers who want to explore Downtown Denver without renting a car. Valet parking is available for approximately $60 per day; on-site self-parking is not offered.",
                address: "550 15th Street, Denver, CO 80202, USA",
                estimatedNightlyCostMin: 120,
                estimatedNightlyCostMax: 250,
                priceType: "perNight",
                amenities: [
                    "Free Wi-Fi",
                    "Complimentary hot breakfast",
                    "Indoor swimming pool",
                    "Fitness center",
                    "Modern guest rooms",
                    "Streaming entertainment",
                    "Connecting rooms available",
                    "Business center",
                    "Meeting rooms",
                    "Digital Key",
                    "Pet-friendly accommodations",
                    "Air conditioning",
                    "Valet parking",
                    "Nearby restaurants",
                    "Nearby public transportation"
                ],
                parkingCost: 60,
                additionalFees: null,
                website: "https://www.hilton.com/en/hotels/dencvhx-hampton-suites-denver-downtown-convention-center/"
            },
            {
                name: "The Brown Palace Hotel and Spa, Autograph Collection",
                category: "High-End",
                description: "Historic luxury hotel in Downtown Denver, originally opened in 1892. Features elegant rooms and suites, a grand multi-story atrium, traditional afternoon tea service, upscale restaurants, an on-site spa and salon, fitness center, and concierge services. Conveniently located near Denver's downtown restaurants, shopping, and entertainment. Verify the minimum check-in age before booking.",
                address: "321 17th Street, Denver, CO 80202, USA",
                estimatedNightlyCostMin: 250,
                estimatedNightlyCostMax: 550,
                priceType: "perNight",
                amenities: [
                    "Luxury guest rooms and suites",
                    "Historic hotel architecture",
                    "Grand atrium",
                    "Afternoon tea service",
                    "On-site restaurants",
                    "On-site bar",
                    "Spa and salon",
                    "Massage and body treatments",
                    "Fitness center",
                    "Concierge service",
                    "Business center",
                    "Meeting facilities",
                    "Air conditioning",
                    "Pet-friendly accommodations",
                    "Valet parking",
                    "Historic hotel tours"
                ],
                parkingCost: 66,
                additionalFees: null,
                website: "https://www.marriott.com/en-us/hotels/denak-the-brown-palace-hotel-and-spa-autograph-collection/overview/"
            }
        ],




        // DENVER — TWO REAL AIRBNB LISTINGS

        vacationRentals: [
            {
                name: "Denver RiNo Urban Art Loft",
                category: "Vacation Rental",
                propertyType: "Entire condo",
                description: "Colorful top-floor corner loft in Denver's RiNo Art District featuring custom hand-painted street art murals, floor-to-ceiling windows, a private deck with city views, and rooftop access. Close to Denver Central Market, Mission Ballroom, breweries, and art galleries.",
                address: "RiNo Art District / Five Points, Denver, CO, USA — exact address provided after booking",
                estimatedNightlyCostMin: 205,
                estimatedNightlyCostMax: 205,
                priceType: "perNight",
                maxGuests: 6,
                bedrooms: 2,
                bathrooms: 2,
                amenities: [
                    "Wi-Fi",
                    "Full kitchen",
                    "Private deck",
                    "City views",
                    "Rooftop access",
                    "Street art murals",
                    "Floor-to-ceiling windows",
                    "Washer and dryer",
                    "Dedicated workspace",
                    "Smart TV",
                    "Air conditioning",
                    "Free street parking",
                    "Dog friendly"
                ],
                cleaningFee: null,
                serviceFee: null,
                parkingCost: null,
                website: "https://www.airbnb.com/rooms/45400129"
            },
            {
                name: "Denver Historic Brick Carriage Loft",
                category: "Vacation Rental",
                propertyType: "Entire guesthouse",
                description: "Unique industrial-chic carriage house in Denver's historic Curtis Park neighborhood near the RiNo Art District. Features exposed brick, handcrafted pipe chandelier, steel staircase, vintage-inspired furnishings, and custom design details. Restaurants, coffee shops, and breweries are nearby.",
                address: "Curtis Park / Five Points, Denver, CO, USA — exact address provided after booking",
                estimatedNightlyCostMin: 199,
                estimatedNightlyCostMax: 199,
                priceType: "perNight",
                maxGuests: 4,
                bedrooms: 2,
                bathrooms: 1,
                amenities: [
                    "Wi-Fi",
                    "Kitchen",
                    "Dedicated workspace",
                    "Free street parking",
                    "Exposed brick interior",
                    "Industrial-style decor",
                    "Handcrafted pipe chandelier",
                    "Steel staircase",
                    "Pet friendly"
                ],
                cleaningFee: null,
                serviceFee: null,
                parkingCost: null,
                website: "https://www.airbnb.com/rooms/22515364"
            }
        ]



    },

    // Hawaii #4 

    {
        // ==========================================
        // DESTINATION 4: HONOLULU, HAWAII
        // ==========================================

        id: 4,
        city: "Honolulu",
        state: "Hawaii",
        description: "Honolulu is Hawaii's capital city, known for beautiful beaches, Hawaiian culture, tropical scenery, historic landmarks, and outdoor adventures.",
        duration: "5-7 days",

        weatherOptions: [
            {
                // ==================================
                // WEATHER OPTION 1: SUNNY
                // ==================================

                condition: "Sunny",
                month: [
                    "May",
                    "June",
                    "July",
                    "August",
                    "September"
                ],

                // Three main attractions
                attractions: [
                    {
                        name: "Waikiki Beach",
                        category: "Beaches & Water Activities",
                        estimatedCost: 0
                    },

                    {
                        name: "Diamond Head State Monument",
                        category: "Outdoor & Nature",
                        estimatedCost: 5,
                        website: "https://dlnr.hawaii.gov/dsp/parks/oahu/diamond-head-state-monument/"
                    },

                    {
                        name: "Ala Moana Center",
                        category: "Shopping",
                        estimatedCost: 0
                    }
                ],



                // Sunny seasonal events
                event: [

                    {
                        name: "King Kamehameha Celebration Floral Parade",
                        category: "Festivals and Events",
                        description: "Celebrate Hawaiian history and culture at Honolulu's annual floral parade featuring flower-covered floats, marching bands, cultural organizations, and traditional pa'u horseback riders.",
                        estimatedCostMin: 0,
                        estimatedCostMax: 0,
                        priceType: "perPerson",
                        startDate: "2027-06-12",
                        endDate: "2027-06-12",
                        startTime: "09:00",
                        endTime: "13:00",
                        estimatedDuration: 240,
                        location: "Iolani Palace to Kapiolani Park, Honolulu, HI",
                        website: "https://sfca.hawaii.gov/resources/king-kamehameha-celebration-commission/"
                    },


                    {
                        name: "Pan-Pacific Festival",
                        category: "Festivals and Events",
                        description: "Celebrate Hawaii's multicultural heritage through traditional Japanese and Pacific Island performances, hula, live music, cultural demonstrations, food vendors, arts and crafts, a Waikiki block party, and a cultural parade.",
                        estimatedCostMin: 0,
                        estimatedCostMax: 0,
                        priceType: "perPerson",
                        startDate: "2027-06-11",
                        endDate: "2027-06-13",
                        estimatedDuration: 180,
                        location: "Waikiki and Ala Moana Center, Honolulu, HI 96815",
                        website: "https://www.panpacificfestival.org/"
                    },




                ],

            },

            {

                // WEATHER OPTION 2: RAINY


                condition: "Rainy",
                month: [
                    "November",
                    "December",
                    "January",
                    "February",
                    "March",
                    "April",
                ],

                // Three main attractions
                attractions: [

                    {
                        name: "Bishop Museum",
                        category: "Museums & Art",
                        estimatedCost: 33.95,
                        website: "https://www.bishopmuseum.org/visit/tickets/"
                    },


                    {
                        name: "Iolani Palace",
                        category: "History & Culture",
                        estimatedCost: 28,
                        website: "https://www.iolanipalace.org/visit/tours-admission/self-led-audio-tours/"
                    },


                    {
                        name: "International Market Place",
                        category: "Shopping",
                        estimatedCost: 0,
                        website: "https://www.simon.com/mall/international-market-place"
                    },

                ],



                // Rainy seasonal events

                event: [
                    {
                        name: "Honolulu City Lights",
                        category: "Festivals and Events",
                        description: "Celebrate the holiday season with illuminated decorations, a giant Christmas tree, festive displays, and family-friendly entertainment at Honolulu Hale. Opening night features the Electric Light Parade and official tree-lighting ceremony.",
                        estimatedCostMin: 0,
                        estimatedCostMax: 0,
                        priceType: "perPerson",
                        startDate: "2026-12-05",
                        endDate: "2026-12-31",
                        estimatedDuration: 120,
                        location: "Honolulu Hale, 530 S King Street, Honolulu, HI 96813",
                        website: "https://www.honolulucitylights.org/"
                    },
                    {
                        name: "Chinatown Festival and Parade",
                        category: "Festivals and Events",
                        description: "Celebrate Lunar New Year in Honolulu's historic Chinatown with lion dances, cultural performances, food vendors, family activities, live entertainment, and a festive parade along Hotel Street.",
                        estimatedCostMin: 0,
                        estimatedCostMax: 0,
                        priceType: "perPerson",
                        startDate: "2027-01-30",
                        endDate: "2027-01-30",
                        startTime: "09:00",
                        endTime: "22:00",
                        estimatedDuration: 180,
                        location: "Aala Park and North Beretania Street, Honolulu, HI 96817",
                        website: "https://chinatown808.com/events/chinatown-festival-parade/"
                    },
                    {
                        name: "Waikiki SPAM JAM Festival",
                        category: "Festivals and Events",
                        description: "Celebrate Hawaii's love of SPAM at a lively Waikiki street festival featuring creative SPAM-inspired dishes, local restaurants, live Hawaiian music, cultural entertainment, food vendors, arts, and crafts.",
                        estimatedCostMin: 0,
                        estimatedCostMax: 0,
                        priceType: "perPerson",
                        startDate: "2027-04-24",
                        endDate: "2027-04-24",
                        startTime: "16:00",
                        endTime: "22:00",
                        estimatedDuration: 180,
                        location: "Kalakaua Avenue, Waikiki, Honolulu, HI 96815",
                        website: "https://www.spamjamhawaii.com/"
                    }
                ],

            }
        ],

        // ==========================================
        // SHARED ACTIVITIES — AVAILABLE IN BOTH WEATHER OPTIONS
        // ==========================================

        activities: [
            {
                name: "Waikiki Beginner Surfing Lesson",
                category: "Beaches & Water Activities",
                description: "Learn to surf with a professional instructor on Waikiki's beginner-friendly waves. Ohana Surf Project offers two-hour open group lessons covering ocean safety, paddling, standing, and riding waves. Surfboards and instruction are included.",
                estimatedCostMin: 120,
                estimatedCostMax: 120,
                priceType: "perPerson",
                estimatedDuration: 120,
                location: "Waikiki Beach, Honolulu, HI 96815",
                openingHours: "Scheduled lessons at 9 AM and 12 PM; availability and ocean conditions vary",
                website: "https://ohanasurfproject.com/lessons/surfing-lessons/"
            },
            {
                name: "Kapiolani Regional Park Walk",
                category: "Outdoor & Nature",
                description: "Enjoy a scenic walk through Honolulu's historic public park near Diamond Head, featuring tropical trees, open lawns, walking paths, and mountain views.",
                estimatedCostMin: 0,
                estimatedCostMax: 0,
                priceType: "perPerson",
                estimatedDuration: 90,
                location: "3840 Paki Avenue, Honolulu, HI 96815",
                openingHours: "Outdoor public park; visit during daylight hours and follow posted access signs",
                website: "https://www.honolulu.gov/"
            },
            {
                name: "Leonard's Bakery Malasada Experience",
                category: "Food & Dining",
                description: "Taste freshly made Portuguese-style malasadas at Leonard's Bakery, a popular Honolulu bakery known for its sugar-coated doughnuts and filled malasada puffs. Cost is an estimated budget for a small pastry purchase.",
                estimatedCostMin: 3,
                estimatedCostMax: 8,
                priceType: "perPerson",
                estimatedDuration: 45,
                location: "933 Kapahulu Avenue, Honolulu, HI 96816",
                openingHours: "Daily 5:30 AM-7 PM",
                website: "https://leonardshawaii.com/menu/malasadas-and-doughnuts/"
            },
            {
                name: "Kakaako Street Art Walk",
                category: "Museums & Art",
                description: "Explore colorful outdoor murals, street art, galleries, and creative businesses throughout Honolulu's Kakaako neighborhood, known for its urban art and POW! WOW! Hawaii mural history.",
                estimatedCostMin: 0,
                estimatedCostMax: 0,
                priceType: "perPerson",
                estimatedDuration: 120,
                location: "Kakaako, Honolulu, HI",
                openingHours: "Outdoor murals are generally accessible during daylight hours; individual businesses set their own hours",
                website: "https://www.gohawaii.com/islands/oahu"
            },
            {
                name: "Waikiki Sunset Catamaran Cruise",
                category: "Entertainment",
                description: "Enjoy a scenic 90-minute sunset sail aboard a catamaran along Waikiki's coastline, featuring Pacific Ocean views, Diamond Head, and the Honolulu shoreline. Pricing is an estimated per-person range and varies by departure date and booking option.",
                estimatedCostMin: 65,
                estimatedCostMax: 85,
                priceType: "perPerson",
                estimatedDuration: 90,
                location: "Waikiki Beach, Honolulu, HI 96815",
                openingHours: "Sunset departures vary seasonally; advance reservations recommended",
                website: "https://waikikisailing.com/sailing-charters/sunset-sail/"
            },
            {
                name: "Honolulu Museum of Art Visit",
                category: "Museums & Art",
                description: "Explore galleries featuring Hawaiian, Asian, European, and contemporary artworks, along with rotating exhibitions and cultural displays. General adult admission includes access to the museum's galleries.",
                estimatedCostMin: 25,
                estimatedCostMax: 25,
                priceType: "perPerson",
                estimatedDuration: 150,
                location: "900 S Beretania Street, Honolulu, HI 96814",
                openingHours: "Wed-Thu and Sat-Sun 10 AM-6 PM; Fri 10 AM-9 PM; closed Mon-Tue",
                website: "https://honolulumuseum.org/visit-homa-ntwf"
            },
            {
                name: "Pearl Harbor Visitor Center Museums",
                category: "History & Culture",
                description: "Explore the free Pearl Harbor National Memorial visitor center and museum exhibits covering the events of December 7, 1941, World War II, and the history of Pearl Harbor. Optional USS Arizona Memorial boat program reservations are separate.",
                estimatedCostMin: 0,
                estimatedCostMax: 0,
                priceType: "perPerson",
                estimatedDuration: 120,
                location: "1 Arizona Memorial Place, Honolulu, HI 96818",
                openingHours: "Daily 7 AM-5 PM; closed Thanksgiving, Christmas, and New Year's Day",
                website: "https://www.nps.gov/perl/planyourvisit/hours.htm"
            },
            {
                name: "Capitol Modern Art Museum",
                category: "Museums & Art",
                description: "Visit Hawaii's free state art museum featuring contemporary Hawaiian artwork, rotating exhibitions, a sculpture garden, and public art from the Art in Public Places Collection.",
                estimatedCostMin: 0,
                estimatedCostMax: 0,
                priceType: "perPerson",
                estimatedDuration: 90,
                location: "250 S Hotel Street, Honolulu, HI 96813",
                openingHours: "Wed-Sat 10 AM-4 PM; closed Sun-Tue",
                website: "https://www.capitolmodern.org/visit"
            },
            {
                name: "Royal Hawaiian Center Cultural Class",
                category: "History & Culture",
                description: "Participate in a complimentary Hawaiian cultural experience such as hula lessons, ukulele lessons, lei making, or traditional lauhala weaving. Classes are scheduled throughout the week, with limited space for some activities.",
                estimatedCostMin: 0,
                estimatedCostMax: 0,
                priceType: "perPerson",
                estimatedDuration: 60,
                location: "2201 Kalakaua Avenue, Honolulu, HI 96815",
                openingHours: "Cultural classes generally begin at 11:30 AM on scheduled weekdays; specific classes and dates vary",
                website: "https://www.royalhawaiiancenter.com/events"
            },
            {
                name: "Waikiki Aquarium Visit",
                category: "Family Friendly",
                description: "Discover marine life from Hawaiian and Pacific waters through exhibits featuring tropical fish, reef ecosystems, Hawaiian monk seals, and ocean conservation. General adult admission includes access to aquarium exhibits.",
                estimatedCostMin: 12,
                estimatedCostMax: 12,
                priceType: "perPerson",
                estimatedDuration: 90,
                location: "2777 Kalakaua Avenue, Honolulu, HI 96815",
                openingHours: "Daily 9 AM-4:30 PM; last admission 4 PM; holiday hours may vary",
                website: "https://www.waikikiaquarium.org/visit/admission-information/"
            }
        ],



        breakfast: [
            {
                name: "Liliha Bakery",
                category: "Food & Dining",
                description: "Historic Honolulu bakery and diner established in 1950, famous for its signature Coco Puffs, buttery grilled rolls, pancakes, eggs, and classic Hawaiian-style breakfast plates. The original Liliha location offers casual counter-service dining and freshly baked pastries.",
                mealTypes: ["Breakfast", "Lunch"],
                estimatedCostMin: 8,
                estimatedCostMax: 25,
                priceType: "perPerson",
                priceTier: "Budget",
                address: "515 N Kuakini St, Honolulu, HI 96817",
                cuisine: "Hawaiian-American diner and bakery",
                openingHours: "Daily 6 AM-10 PM; breakfast and coffee shop service hours may differ",
                website: "https://www.lilihabakery.com/locations",
                reservationRecommended: false
            },
            {
                name: "Sweet E's Cafe",
                category: "Food & Dining",
                description: "Cozy neighborhood breakfast and brunch cafe in Honolulu's Kapahulu area, known for stuffed French toast, pancakes, eggs Benedict, omelets, and traditional American breakfast favorites. Offers casual dine-in service and takeout.",
                mealTypes: ["Breakfast", "Lunch"],
                estimatedCostMin: 15,
                estimatedCostMax: 30,
                priceType: "perPerson",
                priceTier: "Mid-Range",
                address: "1006 Kapahulu Ave, Honolulu, HI 96816",
                cuisine: "American breakfast and brunch",
                openingHours: "Daily 7 AM-2 PM",
                website: "https://localicioushawaii.org/sweet-es-cafe/",
                reservationRecommended: false
            },
            {
                name: "Koko Head Cafe",
                category: "Food & Dining",
                description: "Creative island-style brunch restaurant in Honolulu's Kaimuki neighborhood featuring locally sourced ingredients and Hawaiian-Asian fusion dishes. Popular specialties include Cornflake French Toast, breakfast bibimbap, dumplings, and creative egg dishes.",
                mealTypes: ["Breakfast", "Lunch"],
                estimatedCostMin: 18,
                estimatedCostMax: 35,
                priceType: "perPerson",
                priceTier: "Mid-Range",
                address: "1120 12th Ave, Honolulu, HI 96816",
                cuisine: "Hawaiian-Asian fusion brunch",
                openingHours: "Mon-Fri 8 AM-1 PM; Sat-Sun 8 AM-2 PM",
                website: "https://www.kokoheadcafe.com/",
                reservationRecommended: true
            },
            {
                name: "Orchids at Halekulani",
                category: "Food & Dining",
                description: "Elegant oceanfront restaurant inside the luxury Halekulani Hotel overlooking Waikiki Beach and Diamond Head. Serves upscale breakfast specialties, eggs Benedict, pancakes, fresh tropical fruits, and Japanese breakfast selections. Sunday features an elaborate premium brunch experience.",
                mealTypes: ["Breakfast", "Lunch"],
                estimatedCostMin: 20,
                estimatedCostMax: 55,
                priceType: "perPerson",
                priceTier: "High-End",
                address: "2199 Kalia Rd, Honolulu, HI 96815",
                cuisine: "Upscale American and Hawaiian breakfast",
                openingHours: "Mon-Sat breakfast 7 AM-10:30 AM; Sun brunch 9 AM-2 PM",
                website: "https://www.halekulani.com/dining/orchids/",
                reservationRecommended: true
            }
        ],


        lunch: [
            {
                name: "Marugame Udon Waikiki",
                category: "Food & Dining",
                description: "Popular casual Japanese restaurant in Waikiki specializing in freshly made Sanuki-style udon noodles, flavorful broths, tempura, and rice bowls. Guests can watch noodles being prepared and customize their meals with toppings and sides. Affordable lunch option within walking distance of Waikiki Beach.",
                mealTypes: ["Lunch", "Dinner"],
                estimatedCostMin: 6,
                estimatedCostMax: 20,
                priceType: "perPerson",
                priceTier: "Budget",
                address: "2310 Kuhio Ave, Suite 124, Honolulu, HI 96815",
                cuisine: "Japanese udon and tempura",
                openingHours: "Daily 10 AM-11 PM",
                website: "https://www.marugameudon.com/locations/waikiki/",
                reservationRecommended: false
            },
            {
                name: "Rainbow Drive-In",
                category: "Food & Dining",
                description: "Historic Honolulu drive-in restaurant serving Hawaiian-style plate lunches since 1961. Popular dishes include loco moco, BBQ beef, boneless chicken with gravy, mahi mahi, chili plates, and mixed lunch plates. Casual counter-service restaurant known for generous portions and affordable local comfort food.",
                mealTypes: ["Breakfast", "Lunch", "Dinner"],
                estimatedCostMin: 9,
                estimatedCostMax: 22,
                priceType: "perPerson",
                priceTier: "Mid-Range",
                address: "3308 Kanaina Ave, Honolulu, HI 96815",
                cuisine: "Hawaiian plate lunches and American comfort food",
                openingHours: "Daily 7 AM-9 PM; lunch available after breakfast service ends at 10:30 AM",
                website: "https://www.rainbowdrivein.com/locations/kapahulu",
                reservationRecommended: false
            },
            {
                name: "Helena's Hawaiian Food",
                category: "Food & Dining",
                description: "Family-owned traditional Hawaiian restaurant established in 1946 and recognized with a James Beard America's Classics Award. Known for pipikaula short ribs, kalua pig, laulau, lomi salmon, poi, and classic Hawaiian combination plates. Offers an authentic local dining experience in Honolulu's Kalihi neighborhood.",
                mealTypes: ["Lunch", "Dinner"],
                estimatedCostMin: 15,
                estimatedCostMax: 35,
                priceType: "perPerson",
                priceTier: "Mid-Range",
                address: "1240 N School St, Honolulu, HI 96817",
                cuisine: "Traditional Hawaiian",
                openingHours: "Tue-Fri 10 AM-7:30 PM; closed Sat-Mon",
                website: "https://www.helenashawaiianfood.com/",
                reservationRecommended: false
            },
            {
                name: "Kapa Hale",
                category: "Food & Dining",
                description: "Upscale neighborhood restaurant in Honolulu's Kahala area offering creative contemporary Hawaiian cuisine influenced by local ingredients and international flavors. Features seasonally inspired dishes, seafood, thoughtfully prepared meats, and modern island-style presentations. A refined alternative for travelers seeking a special lunch experience.",
                mealTypes: ["Lunch", "Dinner"],
                estimatedCostMin: 25,
                estimatedCostMax: 60,
                priceType: "perPerson",
                priceTier: "High-End",
                address: "4614 Kilauea Ave, Suite 102, Honolulu, HI 96816",
                cuisine: "Contemporary Hawaiian and Pacific-inspired",
                openingHours: "Wed-Fri lunch 10:30 AM-2 PM; Sat-Sun brunch 9 AM-2 PM",
                website: "https://www.kapahale.com/",
                reservationRecommended: true
            }
        ],


        dinner: [
            {
                name: "Zippy's - Vineyard",
                category: "Food & Dining",
                description: "Popular Hawaiian restaurant chain serving local comfort food, including chili, saimin noodles, loco moco, chicken katsu, fried chicken, and Hawaiian-style plate lunches. The Vineyard location offers casual dine-in service, takeout, and freshly baked desserts.",
                mealTypes: ["Lunch", "Dinner"],
                estimatedCostMin: 12,
                estimatedCostMax: 25,
                priceType: "perPerson",
                priceTier: "Budget",
                address: "59 N Vineyard Blvd, Honolulu, HI 96817",
                cuisine: "Hawaiian local comfort food",
                openingHours: "Daily 6 AM-12 AM for dine-in; takeout begins at 5 AM",
                website: "https://www.zippys.com/locations/vineyard",
                reservationRecommended: false
            },
            {
                name: "The Pig & The Lady",
                category: "Food & Dining",
                description: "Creative Vietnamese-inspired restaurant in Honolulu's Kaimuki neighborhood combining Southeast Asian flavors with locally sourced Hawaiian ingredients. Known for its pho, handmade dishes, innovative appetizers, seasonal entrees, and family-style dining.",
                mealTypes: ["Lunch", "Dinner"],
                estimatedCostMin: 25,
                estimatedCostMax: 55,
                priceType: "perPerson",
                priceTier: "Mid-Range",
                address: "3650 Waialae Ave, Suite 120, Honolulu, HI 96816",
                cuisine: "Vietnamese fusion and Southeast Asian",
                openingHours: "Tue-Sat dinner 5 PM-9:30 PM; last seating 8:45 PM; closed for dinner Sun-Mon",
                website: "https://thepigandthelady.com/",
                reservationRecommended: true
            },
            {
                name: "MW Restaurant",
                category: "Food & Dining",
                description: "Contemporary Hawaiian restaurant led by chefs Wade Ueoka and Michelle Karr-Ueoka, offering creative interpretations of local comfort food. Features fresh island seafood, seasonal ingredients, innovative entrees, and signature desserts in a refined but welcoming dining atmosphere.",
                mealTypes: ["Dinner"],
                estimatedCostMin: 35,
                estimatedCostMax: 75,
                priceType: "perPerson",
                priceTier: "Mid-Range",
                address: "888 Kapiolani Blvd, Suite 201, Honolulu, HI 96813",
                cuisine: "Contemporary Hawaiian and Pacific-inspired",
                openingHours: "Tue-Sat dinner 5 PM-9 PM; closed Sun-Mon",
                website: "https://mwrestaurant.com/",
                reservationRecommended: true
            },
            {
                name: "Senia",
                category: "Food & Dining",
                description: "Upscale chef-driven restaurant in Honolulu's Chinatown neighborhood featuring contemporary American cuisine influenced by Hawaiian ingredients and international culinary techniques. Offers a seasonal a la carte dinner menu and an exclusive multi-course chef's counter tasting experience on Friday and Saturday evenings.",
                mealTypes: ["Dinner"],
                estimatedCostMin: 65,
                estimatedCostMax: 200,
                priceType: "perPerson",
                priceTier: "High-End",
                address: "75 N King St, Honolulu, HI 96817",
                cuisine: "Contemporary American fine dining",
                openingHours: "Mon-Sat a la carte dinner 5:30 PM-9:30 PM; chef's counter tasting menu Fri-Sat at 6:30 PM; closed Sun",
                website: "https://www.restaurantsenia.com/",
                reservationRecommended: true
            }
        ],



        // LOCAL TRANSPORTATION

        transportation: [
            "TheBus",
            "Uber/Lyft",
            "Rental Car",
            "Walking",
            "Skyline Rail"
        ],



        // HONOLULU — DETAILED TRANSPORTATION OPTIONS


        transportationOptions: [
            {
                name: "TheBus",
                type: "Public Transportation",
                description: "Honolulu's public bus network serving Waikiki, Downtown Honolulu, Pearl Harbor, shopping areas, beaches, and communities throughout Oahu. The adult HOLO card fare is $3 for two hours of unlimited eligible travel on TheBus and Skyline. The 24-hour fare cap is $7.50, a three-day pass costs $20, and a seven-day pass costs $45. Adult cash fare is $3.25 per boarding without transfers. A new adult HOLO card costs $2.",
                estimatedCostMin: 3,
                estimatedCostMax: 3,
                priceType: "per2Hours",
                website: "https://www.thebus.org/Fare/TheBusFares20260701.asp"
            },
            {
                name: "Uber/Lyft",
                type: "Rideshare",
                description: "App-based rideshare transportation available throughout Honolulu and Oahu. Useful for traveling between Waikiki hotels, restaurants, beaches, nightlife, and attractions not conveniently served by public transportation. Budget approximately $10-$50 per ride for many local and airport trips, with longer journeys potentially costing more. Uber reports an average airport-to-Waikiki fare of approximately $36. Actual prices depend on distance, traffic, demand, pickup location, and time of day. Airport fees and surge pricing may apply.",
                estimatedCostMin: 10,
                estimatedCostMax: 50,
                priceType: "perRide",
                website: "https://www.uber.com/global/en/r/cities/honolulu-hi-us/"
            },
            {
                name: "Rental Car",
                type: "Car Rental",
                description: "Rental vehicles available at Daniel K. Inouye International Airport and throughout Honolulu. Useful for exploring the North Shore, eastern Oahu, scenic coastal drives, and attractions outside Waikiki. Budget approximately $50-$100 per day for a standard rental vehicle, depending on travel dates, vehicle category, rental company, and driver age. Fuel, parking, taxes, insurance, and optional fees are not included. Waikiki hotel parking may add substantial daily costs.",
                estimatedCostMin: 50,
                estimatedCostMax: 100,
                priceType: "perDay",
                website: "https://www.enterprise.com/"
            },
            {
                name: "Walking",
                type: "Walking",
                description: "Free transportation for exploring Waikiki Beach, Kalakaua Avenue, International Market Place, Royal Hawaiian Center, nearby restaurants, shopping centers, and beachfront attractions. Many central Waikiki destinations are within walking distance. Travel times depend on distance, weather conditions, pedestrian crossings, and accessibility.",
                estimatedCostMin: 0,
                estimatedCostMax: 0,
                priceType: "free"
            },
            {
                name: "Skyline Rail",
                type: "Public Transportation",
                description: "Honolulu's automated rail transit system connecting West Oahu, Pearl Harbor-area destinations, and Daniel K. Inouye International Airport. A HOLO card is required to ride. Adult fare is $3 for two hours of unlimited eligible travel on Skyline and TheBus, with a $7.50 daily cap. A new HOLO card costs $2. The rail system does not directly serve Waikiki or Downtown Honolulu; passengers can use connecting bus routes. Skyline generally operates from 4 AM until approximately 10 PM, with limited later service.",
                estimatedCostMin: 3,
                estimatedCostMax: 3,
                priceType: "per2Hours",
                website: "https://www.holocard.net/en/for-visitors/"
            }
        ],




        // HONOLULU — THREE REAL HOTELS
        // Budget, Mid-Range, and High-End


        hotels: [
            {
                name: "Waikiki Malia",
                category: "Budget",
                description: "Value-oriented hotel in central Waikiki near shopping, restaurants, public transportation, and Waikiki Beach. Offers guest rooms and studio accommodations, an outdoor plunge pool, heated hot tub, fitness room, on-site dining, and guest laundry. Standard self-parking costs $50 plus tax per day beginning November 1, 2026. A mandatory $45 plus tax daily amenity fee applies per room. These fees may already be included in some booking totals.",
                address: "2211 Kuhio Avenue, Honolulu, HI 96815, USA",
                estimatedNightlyCostMin: 120,
                estimatedNightlyCostMax: 260,
                priceType: "perNight",
                amenities: [
                    "Wi-Fi included in amenity fee",
                    "Outdoor plunge pool",
                    "Heated hot tub",
                    "24-hour fitness room",
                    "Air conditioning",
                    "Flat-screen TV",
                    "In-room refrigerator",
                    "Balconies in select rooms",
                    "On-site IHOP restaurant",
                    "On-site sports bar",
                    "Guest laundry facilities",
                    "24-hour front desk",
                    "Concierge services",
                    "Pet-friendly rooms",
                    "Paid self-parking",
                    "Electric vehicle charging",
                    "Nearby public transportation",
                    "Walking distance to Waikiki Beach"
                ],
                parkingCost: 50,
                additionalFees: 45,
                website: "https://www.waikikimalia.com/"
            },
            {
                name: "Hilton Garden Inn Waikiki Beach",
                category: "Mid-Range",
                description: "Modern hotel in central Waikiki near International Market Place and approximately two blocks from Waikiki Beach. Features comfortable guest rooms, an outdoor rooftop swimming pool, fitness center, on-site dining, concierge services, and Wi-Fi. Breakfast costs extra. Valet parking is $58 per day, with no on-site self-parking. A daily resort charge applies; recent booking disclosures list approximately $42 per room per night before tax. Confirm whether it is already included in the quoted room rate.",
                address: "2330 Kuhio Avenue, Honolulu, HI 96815, USA",
                estimatedNightlyCostMin: 170,
                estimatedNightlyCostMax: 350,
                priceType: "perNight",
                amenities: [
                    "Wi-Fi included in resort charge",
                    "Outdoor rooftop swimming pool",
                    "Sun deck",
                    "Fitness center",
                    "On-site restaurant",
                    "On-site cafe and market",
                    "Concierge services",
                    "Business center",
                    "Meeting rooms",
                    "Air conditioning",
                    "Flat-screen TVs",
                    "Streaming entertainment",
                    "Connecting rooms available",
                    "Pet-friendly accommodations",
                    "Digital Key",
                    "EV charging",
                    "Covered valet parking",
                    "Beach towels",
                    "Walking distance to Waikiki Beach",
                    "Nearby shopping and restaurants"
                ],
                parkingCost: 58,
                additionalFees: 42,
                website: "https://www.hilton.com/en/hotels/hnlkugi-hilton-garden-inn-waikiki-beach/"
            },
            {
                name: "Halekulani Hotel",
                category: "High-End",
                description: "Luxury oceanfront hotel directly on Waikiki Beach, known for elegant accommodations, Pacific Ocean views, exceptional hospitality, and a peaceful resort atmosphere. Features a signature heated swimming pool overlooking the ocean, SpaHalekulani, fitness facilities, fine dining, beachfront restaurants, concierge services, and Hawaiian entertainment. Overnight parking costs $68 per night. The hotel does not charge a resort fee. Optional dining, spa treatments, and other services cost extra.",
                address: "2199 Kalia Road, Honolulu, HI 96815, USA",
                estimatedNightlyCostMin: 700,
                estimatedNightlyCostMax: 1300,
                priceType: "perNight",
                amenities: [
                    "Complimentary Wi-Fi",
                    "Luxury rooms and suites",
                    "Ocean-view rooms available",
                    "Private lanais in select rooms",
                    "Direct beachfront location",
                    "Heated outdoor swimming pool",
                    "Oceanfront pool deck",
                    "SpaHalekulani",
                    "Fitness and movement studio",
                    "Fine dining restaurants",
                    "Oceanfront dining",
                    "Afternoon tea",
                    "Live Hawaiian music",
                    "Hula performances",
                    "Concierge services",
                    "Room service",
                    "Luxury bathroom amenities",
                    "Valet parking",
                    "Complimentary cultural venue access",
                    "No resort fee"
                ],
                parkingCost: 68,
                additionalFees: 0,
                website: "https://www.halekulani.com/"
            }
        ],




        // HONOLULU — TWO REAL AIRBNB LISTINGS



        vacationRentals: [
            {
                name: "Waikiki Ocean Breeze Luxury Suite",
                category: "Vacation Rental",
                propertyType: "Entire condo",
                description: "Renovated luxury one-bedroom Nami Suite on the 26th floor in Waikiki, featuring panoramic Pacific Ocean views, a private lanai, modern designer furnishings, a king bed, queen sofa bed, and a fully equipped kitchen. Guests have access to shared resort amenities including a swimming pool, hot tubs, sauna, barbecue facilities, and recreational areas. Complimentary garage parking for one vehicle is included. Located approximately one block from Waikiki Beach.",
                address: "Waikiki, Honolulu, HI, USA — exact street address provided after booking",
                estimatedNightlyCostMin: 435.25,
                estimatedNightlyCostMax: 435.25,
                priceType: "perNight",
                maxGuests: 4,
                bedrooms: 1,
                bathrooms: 1,
                amenities: [
                    "High-speed Wi-Fi",
                    "Full kitchen",
                    "Private ocean-view lanai",
                    "King bed",
                    "Queen sofa bed",
                    "Air conditioning",
                    "Smart TVs",
                    "Dedicated workspace",
                    "Swimming pool",
                    "Hot tubs",
                    "Sauna",
                    "Barbecue grills",
                    "Beach chairs",
                    "Beach umbrella",
                    "Boogie boards",
                    "Cooler",
                    "Free garage parking for one vehicle",
                    "Laundry facilities in building",
                    "Keyless self-check-in",
                    "Coffee maker",
                    "Dishwasher"
                ],
                cleaningFee: null,
                serviceFee: null,
                parkingCost: 0,
                website: "https://www.airbnb.com/rooms/877706358929892651"
            },
            {
                name: "Diamond Head Tropical Balcony Escape",
                category: "Vacation Rental",
                propertyType: "Entire studio condo",
                description: "Renovated ninth-floor studio in the Waikiki Grand Hotel featuring two private balconies with views of Diamond Head, the Pacific Ocean, and Kapiolani Park. The open-concept studio sleeps up to four guests with a queen bed and queen sofa sleeper. Includes a kitchenette, beach equipment, and access to shared laundry facilities. Located steps from Waikiki Beach, the Honolulu Zoo, restaurants, and shopping.",
                address: "Waikiki, Honolulu, HI, USA — exact street address provided after booking",
                estimatedNightlyCostMin: 281,
                estimatedNightlyCostMax: 281,
                priceType: "perNight",
                maxGuests: 4,
                bedrooms: 0,
                bathrooms: 1,
                amenities: [
                    "Wi-Fi",
                    "Two private balconies",
                    "Ocean views",
                    "Diamond Head views",
                    "Beach access",
                    "Kitchenette",
                    "Queen bed",
                    "Queen sofa bed",
                    "Refrigerator",
                    "Microwave",
                    "Coffee maker",
                    "Hotplate",
                    "Toaster oven",
                    "Beach chairs",
                    "Beach umbrella",
                    "Snorkeling equipment",
                    "Boogie boards",
                    "Beach towels",
                    "Cooler",
                    "Dedicated workspace",
                    "Laundry facilities in building"
                ],
                cleaningFee: null,
                serviceFee: null,
                parkingCost: null,
                website: "https://www.airbnb.com/rooms/52704138"
            }
        ],


    },


    // Houston #5

    {
        // ==========================================
        // DESTINATION 5: HOUSTON, TEXAS
        // ==========================================

        id: 5,
        city: "Houston",
        state: "Texas",
        description: "Houston is a vibrant Texas city known for space exploration, world-class museums, diverse cuisine, cultural attractions, shopping, and beautiful urban parks.",
        duration: "3-4 days",

        weatherOptions: [
            {
                // ==================================
                // WEATHER OPTION 1: HOT
                // ==================================

                condition: "Hot",
                month: [
                    "June",
                    "July",
                    "August",
                    "September"
                ],

                // Three main attractions

                attractions: [
                    {
                        name: "Space Center Houston",
                        category: "Museums & Art",
                        estimatedCost: 29.95,
                        website: "https://spacecenter.org/visitor-information/"
                    },
                    {
                        name: "The Galleria",
                        category: "Shopping",
                        estimatedCost: 0,
                        website: "https://www.simon.com/mall/the-galleria"
                    },
                    {
                        name: "Downtown Aquarium Houston",
                        category: "Family Friendly",
                        estimatedCost: 16.99,
                        website: "https://www.downtownaquariumhouston.com/ticket-info"
                    }
                ],



                // Hot seasonal events

                event: [
                    {
                        name: "Freedom Over Texas",
                        category: "Festivals and Events",
                        description: "Celebrate Independence Day at Houston's official Fourth of July festival featuring live music, family-friendly activities, food vendors, entertainment, and a spectacular fireworks display over Buffalo Bayou. The 2026 celebration featured country music, rock performances, interactive festival zones, and patriotic entertainment. Children 12 and under receive free admission.",
                        estimatedCostMin: 15,
                        estimatedCostMax: 15,
                        priceType: "perPerson",
                        startDate: "2026-07-04",
                        endDate: "2026-07-04",
                        startTime: "15:00",
                        endTime: "22:00",
                        estimatedDuration: 240,
                        location: "Eleanor Tinsley Park and Sam Houston Park, Houston, TX 77019",
                        website: "https://www.houstontx.gov/july4/"
                    },
                    {
                        name: "Houston Pride Festival and Parade",
                        category: "Festivals and Events",
                        description: "Celebrate Houston's LGBTQ+ community at the annual Pride Festival and nighttime parade in Downtown Houston. The festival features live music, cultural performances, community organizations, food vendors, and entertainment. General festival admission starts at $10, while the nighttime parade is free for spectators. Food, merchandise, and premium experiences cost extra.",
                        estimatedCostMin: 0,
                        estimatedCostMax: 10,
                        priceType: "perPerson",
                        startDate: "2027-06-26",
                        endDate: "2027-06-26",
                        startTime: "11:00",
                        endTime: "22:00",
                        estimatedDuration: 180,
                        location: "Houston City Hall, 901 Bagby Street, Houston, TX 77002",
                        website: "https://pridehouston.org/festival-and-parade/"
                    }
                ],
            },


            {
                // ==================================
                // WEATHER OPTION 2: MILD
                // ==================================
                condition: "Mild",
                month: [
                    "March",
                    "April",
                    "May"
                ],

                // Three main attractions
                attractions: [
                    {
                        name: "Hermann Park",
                        category: "Outdoor & Nature",
                        estimatedCost: 0,
                        website: "https://hermannpark.org/visit/"
                    },
                    {
                        name: "POST Houston",
                        category: "Food & Dining",
                        estimatedCost: 0,
                        website: "https://www.posthtx.com/visit"
                    },
                    {
                        name: "Houston Zoo",
                        category: "Family Friendly",
                        estimatedCost: 27.95,
                        website: "https://www.houstonzoo.org/plan-your-visit/prices-and-discounts/"
                    }
                ],



                // Mild seasonal events
                event: [

                    {
                        name: "Houston Livestock Show and Rodeo",
                        category: "Festivals and Events",
                        description: "Experience Houston's annual rodeo celebration featuring professional rodeo competitions, livestock exhibitions, carnival rides, Western culture, shopping, Texas food, and nightly concerts. A grounds admission ticket includes access to the livestock show, shopping, and carnival grounds, but stadium rodeo competitions and concerts require a separate rodeo/concert ticket. The $25 admission amount is a planning estimate based on previous grounds ticket pricing.",
                        estimatedCostMin: 25,
                        estimatedCostMax: 25,
                        priceType: "perPerson",
                        startDate: "2027-03-02",
                        endDate: "2027-03-21",
                        estimatedDuration: 240,
                        location: "NRG Park, 1 NRG Park, Houston, TX 77054",
                        website: "https://www.rodeohouston.com/tickets/"
                    },
                    {
                        name: "Houston Botanic Garden Flower Power Festival",
                        category: "Festivals and Events",
                        description: "Celebrate spring at Houston Botanic Garden with colorful blooms, flower-focused family activities, garden-themed crafts, local art vendors, plant displays, and live music. Festival admission includes access to the Garden. Optional crafts, food, and merchandise cost extra. The $20 adult admission amount is based on the previous festival and should be checked when 2027 tickets become available.",
                        estimatedCostMin: 20,
                        estimatedCostMax: 20,
                        priceType: "perPerson",
                        startDate: "2027-04-11",
                        endDate: "2027-04-11",
                        estimatedDuration: 180,
                        location: "Houston Botanic Garden, One Botanic Lane, Houston, TX 77017",
                        website: "https://hbg.org/visit/annual-festivals/"


                    }
                ]
            }
        ],







        // SHARED ACTIVITIES — AVAILABLE IN BOTH WEATHER OPTIONS

        activities: [
            {
                name: "Cockrell Butterfly Center Visit",
                category: "Family Friendly",
                description: "Explore a three-story tropical rainforest conservatory at the Houston Museum of Natural Science, featuring live butterflies, tropical plants, a waterfall, and educational exhibits about insects and arthropods. The adjacent Brown Hall of Entomology is undergoing renovations, so some exhibits may be unavailable.",
                estimatedCostMin: 15,
                estimatedCostMax: 15,
                priceType: "perPerson",
                estimatedDuration: 90,
                location: "5555 Hermann Park Drive, Houston, TX 77030",
                openingHours: "Mon 12 PM-5 PM; Tue 10 AM-8 PM; Wed-Thu 10 AM-5 PM; Fri-Sun 10 AM-6 PM; holiday hours vary",
                website: "https://www.hmns.org/exhibits/cockrell-butterfly-center/"
            },
            {
                name: "The Menil Collection Museum Visit",
                category: "Museums & Art",
                description: "Explore a free art museum featuring modern, contemporary, ancient, and international artwork in naturally lit galleries. The surrounding Menil campus includes additional art buildings, green spaces, and outdoor sculptures.",
                estimatedCostMin: 0,
                estimatedCostMax: 0,
                priceType: "perPerson",
                estimatedDuration: 120,
                location: "1533 Sul Ross Street, Houston, TX 77006",
                openingHours: "Wed-Sun 11 AM-7 PM; closed Mon-Tue",
                website: "https://www.menil.org/visit"
            },
            {
                name: "Museum of Fine Arts Houston Visit",
                category: "Museums & Art",
                description: "Discover thousands of years of art through paintings, sculptures, photography, and international exhibitions. Admission to the permanent collections is free on Thursdays. Special exhibitions may require additional tickets. The upper cost is a planning estimate for a regular adult museum visit.",
                estimatedCostMin: 0,
                estimatedCostMax: 24,
                priceType: "perPerson",
                estimatedDuration: 180,
                location: "1001 Bissonnet Street, Houston, TX 77005",
                openingHours: "Wed 11 AM-5 PM; Thu-Fri 11 AM-9 PM; Sat 11 AM-6 PM; Sun 12:30 PM-6 PM; closed Mon-Tue; verify holiday hours",
                website: "https://www.mfah.org/visit/admission-information"
            },
            {
                name: "Downtown Houston Underground Tunnel Walk",
                category: "Sightseeing & Landmarks",
                description: "Explore accessible sections of Downtown Houston's underground pedestrian tunnel network, connecting office buildings, restaurants, shops, and services. The air-conditioned tunnels cover more than six miles and are mainly active during weekday business hours. Some sections are privately operated and may restrict public access.",
                estimatedCostMin: 0,
                estimatedCostMax: 0,
                priceType: "perPerson",
                estimatedDuration: 90,
                location: "Downtown Houston, Houston, TX 77002",
                openingHours: "Generally Mon-Fri during business hours, approximately 6 AM-6 PM; individual tunnel entrances vary",
                website: "https://downtownhouston.org/experience/downtown-tunnels"
            },
            {
                name: "Houston Center for Contemporary Craft",
                category: "Museums & Art",
                description: "Explore free contemporary craft exhibitions featuring ceramics, textiles, glass, metalwork, wood, and other creative media. The museum also features artist studios and a craft garden. Free parking is available behind the building.",
                estimatedCostMin: 0,
                estimatedCostMax: 0,
                priceType: "perPerson",
                estimatedDuration: 90,
                location: "4848 Main Street, Houston, TX 77002",
                openingHours: "Tue-Sat 10 AM-5 PM; closed Sun-Mon and selected holidays",
                website: "https://crafthouston.org/visit/"
            },
            {
                name: "Buffalo Bayou Park Scenic Walk",
                category: "Outdoor & Nature",
                description: "Explore scenic walking trails, gardens, public artwork, and waterfront views along Buffalo Bayou near Downtown Houston. Visitors can enjoy skyline views, natural landscapes, and trails connecting several park attractions. Walking is free; parking and optional rentals cost extra.",
                estimatedCostMin: 0,
                estimatedCostMax: 0,
                priceType: "perPerson",
                estimatedDuration: 120,
                location: "105-B Sabine Street, Houston, TX 77007",
                openingHours: "Daily; lighted areas 6 AM-11 PM; unlighted areas dawn to dusk",
                website: "https://buffalobayou.org/visitor-information/"
            },
            {
                name: "The Original Ninfa's on Navigation",
                category: "Food & Dining",
                description: "Enjoy authentic Tex-Mex cuisine at the historic Original Ninfa's on Navigation, known for fajitas, tacos al carbon, enchiladas, queso, and handmade flour tortillas. The restaurant is associated with the popularization of fajitas in Houston. The listed per-person cost is a planning estimate for a meal and may vary by order.",
                estimatedCostMin: 20,
                estimatedCostMax: 45,
                priceType: "perPerson",
                estimatedDuration: 90,
                location: "2704 Navigation Boulevard, Houston, TX 77003",
                openingHours: "Lunch and dinner service available daily; confirm current hours and holiday schedule before visiting",
                website: "https://ninfas.com/ninfas-on-navigation/"
            },
            {
                name: "Houston Arboretum & Nature Center",
                category: "Outdoor & Nature",
                description: "Explore a free 155-acre nature sanctuary near Memorial Park featuring forest trails, ponds, native plants, wildlife habitats, educational exhibits, and peaceful outdoor spaces. Admission is free, but parking normally costs $6.50 per vehicle and is free on Thursdays.",
                estimatedCostMin: 0,
                estimatedCostMax: 0,
                priceType: "perPerson",
                estimatedDuration: 120,
                location: "4501 Woodway Drive, Houston, TX 77024",
                openingHours: "Trails daily 7 AM-7:30 PM Mar-Oct; 7 AM-6 PM Nov-Feb; Nature Center daily 9 AM-4 PM",
                website: "https://houstonarboretum.org/plan-your-visit/"
            },
            {
                name: "McGovern Centennial Gardens Walk",
                category: "Outdoor & Nature",
                description: "Explore beautifully landscaped gardens, colorful flower displays, walking paths, themed garden rooms, and the Garden Mount inside Hermann Park. General admission is free. The gardens have seasonal closing hours.",
                estimatedCostMin: 0,
                estimatedCostMax: 0,
                priceType: "perPerson",
                estimatedDuration: 90,
                location: "1500 Hermann Drive, Houston, TX 77004",
                openingHours: "Daily 9 AM-7 PM during daylight saving time; 9 AM-5 PM during standard time; closed Thanksgiving and Christmas",
                website: "https://hermannpark.org/visit/mcgovern-centennial-gardens/"
            },
            {
                name: "Discovery Green Downtown Park Experience",
                category: "Entertainment",
                description: "Enjoy a free 12-acre Downtown Houston park featuring public art, landscaped gardens, walking paths, Kinder Lake, outdoor recreation, and seasonal entertainment. Many public events are free, although certain activities, food vendors, and special events may have additional charges.",
                estimatedCostMin: 0,
                estimatedCostMax: 0,
                priceType: "perPerson",
                estimatedDuration: 120,
                location: "1500 McKinney Street, Houston, TX 77010",
                openingHours: "Daily 6 AM-11 PM; special events and individual attractions may have different hours",
                website: "https://www.discoverygreen.com/visit/"
            }
        ],




        // ==========================================
        // HOUSTON RESTAURANTS
        // BREAKFAST, LUNCH, AND DINNER
        // ==========================================

        breakfast: [
            {
                name: "Kolache Factory - Memorial Park",
                category: "Food & Dining",
                description: "Casual Houston bakery specializing in freshly baked Czech-inspired kolaches filled with sausage, cheese, eggs, fruit, and other sweet or savory ingredients. Offers breakfast pastries, cinnamon rolls, croissants, and specialty coffee. Convenient for travelers looking for an affordable and quick breakfast.",
                mealTypes: ["Breakfast", "Lunch"],
                estimatedCostMin: 5,
                estimatedCostMax: 15,
                priceType: "perPerson",
                priceTier: "Budget",
                address: "5535 Memorial Dr, Suite C, Houston, TX 77007",
                cuisine: "Czech-inspired bakery and breakfast pastries",
                openingHours: "Mon-Sat 6 AM-2 PM; Sun 7 AM-2 PM",
                website: "https://locations.kolachefactory.com/tx/houston/5535-memorial-ste-c",
                reservationRecommended: false
            },
            {
                name: "The Breakfast Klub",
                category: "Food & Dining",
                description: "Popular Houston breakfast restaurant in Midtown known for Southern comfort food and signature dishes including Wings & Waffles, Katfish & Grits, biscuits, pancakes, omelets, and breakfast sandwiches. Offers casual counter-service dining and is a well-known destination for visitors and locals.",
                mealTypes: ["Breakfast", "Lunch"],
                estimatedCostMin: 12,
                estimatedCostMax: 30,
                priceType: "perPerson",
                priceTier: "Mid-Range",
                address: "3711 Travis St, Houston, TX 77002",
                cuisine: "Southern American breakfast and soul food",
                openingHours: "Mon-Fri 7 AM-2 PM; Sat-Sun 8 AM-2 PM",
                website: "https://thebreakfastklub.com/",
                reservationRecommended: false
            },
            {
                name: "Common Bond Bistro & Bakery - Montrose",
                category: "Food & Dining",
                description: "Contemporary Houston bakery and cafe featuring freshly baked croissants, pastries, breakfast sandwiches, eggs, French toast, and specialty coffee. The Montrose location offers breakfast and brunch dishes in a modern cafe setting, along with lunch, dinner, and house-made desserts.",
                mealTypes: ["Breakfast", "Lunch", "Dinner"],
                estimatedCostMin: 10,
                estimatedCostMax: 30,
                priceType: "perPerson",
                priceTier: "Mid-Range",
                address: "1706 Westheimer Rd, Houston, TX 77006",
                cuisine: "American and French-inspired bakery and brunch",
                openingHours: "Mon-Sat 7 AM-9 PM; Sun 7 AM-8 PM; breakfast menu availability may vary",
                website: "https://www.commonbondcafe.com/location/montrose/",
                reservationRecommended: false
            },
            {
                name: "Brennan's of Houston",
                category: "Food & Dining",
                description: "Upscale Creole restaurant in Midtown Houston known for Louisiana-inspired cuisine, elegant dining rooms, and traditional Southern hospitality. Offers a special weekend brunch featuring dishes such as Eggs Sardou, seafood specialties, turtle soup, and Bananas Foster. Sunday Jazz Brunch includes live music and is ideal for a special-occasion dining experience.",
                mealTypes: ["Breakfast", "Lunch"],
                estimatedCostMin: 30,
                estimatedCostMax: 65,
                priceType: "perPerson",
                priceTier: "High-End",
                address: "3300 Smith St, Houston, TX 77006",
                cuisine: "Upscale Creole and Southern brunch",
                openingHours: "Sat brunch 11 AM-2 PM; Sun Jazz Brunch 10 AM-2 PM; no weekday breakfast service",
                website: "https://www.brennanshouston.com/menu/brunch/",
                reservationRecommended: true
            }
        ],


        lunch: [
            {
                name: "Tacos A Go Go - Midtown",
                category: "Food & Dining",
                description: "Casual Houston Tex-Mex restaurant serving street tacos, breakfast tacos, burritos, quesadillas, birria, and nachos. Known for affordable Mexican-inspired food, house-made salsas, and quick-service dining. Convenient Midtown location for travelers seeking a budget-friendly lunch.",
                mealTypes: ["Breakfast", "Lunch", "Dinner"],
                estimatedCostMin: 7,
                estimatedCostMax: 20,
                priceType: "perPerson",
                priceTier: "Budget",
                address: "3704 Main St, Houston, TX 77002",
                cuisine: "Tex-Mex and Mexican street tacos",
                openingHours: "Daily 7 AM-10 PM",
                website: "https://www.tacosagogo.com/location/tacos-a-go-go-midtown/",
                reservationRecommended: false
            },
            {
                name: "The Original Ninfa's on Navigation",
                category: "Food & Dining",
                description: "Historic Houston Tex-Mex restaurant established in 1973 by Mama Ninfa Laurenzo. Famous for tacos al carbon, sizzling fajitas, handmade flour tortillas, enchiladas, queso, and traditional Mexican-inspired dishes. Located in Houston's East End and known for helping popularize fajitas in the United States.",
                mealTypes: ["Lunch", "Dinner"],
                estimatedCostMin: 20,
                estimatedCostMax: 45,
                priceType: "perPerson",
                priceTier: "Mid-Range",
                address: "2704 Navigation Blvd, Houston, TX 77003",
                cuisine: "Traditional Tex-Mex and Mexican",
                openingHours: "Mon-Thu 11 AM-10 PM; Fri 11 AM-11 PM; Sat 10 AM-11 PM; Sun 10 AM-10 PM; weekend brunch 10 AM-2 PM",
                website: "https://ninfas.com/",
                reservationRecommended: true
            },
            {
                name: "Truth BBQ - Houston",
                category: "Food & Dining",
                description: "Award-winning Central Texas-style barbecue restaurant specializing in oak-smoked brisket, pork ribs, turkey, house-made sausages, and traditional Southern barbecue sides. Offers brisket sandwiches, barbecue plates, and homemade desserts. Popular lunch destination where meats are served until sold out.",
                mealTypes: ["Lunch", "Dinner"],
                estimatedCostMin: 18,
                estimatedCostMax: 40,
                priceType: "perPerson",
                priceTier: "Mid-Range",
                address: "110 S Heights Blvd, Houston, TX 77007",
                cuisine: "Texas smoked barbecue",
                openingHours: "Tue-Sun lunch 11 AM until sold out; closed Mon; dinner Tue-Sat 5 PM until sold out",
                website: "https://truthbbq.com/pages/locations",
                reservationRecommended: false
            },
            {
                name: "Georgia James",
                category: "Food & Dining",
                description: "Upscale modern American steakhouse in Houston offering premium steaks, seafood, salads, and chef-inspired dishes. The restaurant features a refined dining atmosphere and a special Friday lunch menu. Ideal for travelers seeking a high-end steakhouse lunch, but regular lunch service is available on Fridays only.",
                mealTypes: ["Lunch", "Dinner"],
                estimatedCostMin: 30,
                estimatedCostMax: 90,
                priceType: "perPerson",
                priceTier: "High-End",
                address: "3503 W Dallas St, Houston, TX 77019",
                cuisine: "Modern American steakhouse",
                openingHours: "Friday lunch 11 AM-5 PM only; Mon-Wed 3 PM-10 PM; Thu and Sat 3 PM-11 PM; Fri open until 11 PM; closed Sun",
                website: "https://www.georgiajameshouston.com/",
                reservationRecommended: true
            }
        ],
        dinner: [
            {
                name: "Torchy's Tacos - Shepherd",
                category: "Food & Dining",
                description: "Casual Texas-based Tex-Mex restaurant known for creative specialty tacos, green chile queso, burritos, bowls, and fresh salsas. Offers affordable counter-service dining with vegetarian options and a relaxed atmosphere. A convenient budget-friendly dinner option near Houston's Montrose neighborhood.",
                mealTypes: ["Breakfast", "Lunch", "Dinner"],
                estimatedCostMin: 10,
                estimatedCostMax: 25,
                priceType: "perPerson",
                priceTier: "Budget",
                address: "2411 S Shepherd Dr, Houston, TX 77019",
                cuisine: "Tex-Mex and creative street tacos",
                openingHours: "Mon-Thu 8 AM-9:30 PM; Fri 8 AM-11 PM; Sat 9 AM-11 PM; Sun 9 AM-9:30 PM",
                website: "https://torchystacos.com/shepherd/order",
                reservationRecommended: false
            },
            {
                name: "Hugo's",
                category: "Food & Dining",
                description: "Award-winning regional Mexican restaurant from chef Hugo Ortega, located inside a restored historic building in Houston's Montrose neighborhood. Known for traditional moles, handmade tortillas, regional seafood, slow-cooked meats, and authentic Mexican specialties prepared with modern techniques.",
                mealTypes: ["Lunch", "Dinner"],
                estimatedCostMin: 25,
                estimatedCostMax: 60,
                priceType: "perPerson",
                priceTier: "Mid-Range",
                address: "1600 Westheimer Rd, Houston, TX 77006",
                cuisine: "Regional Mexican",
                openingHours: "Mon-Wed 3 PM-9 PM; Thu 11:30 AM-9 PM; Fri 11:30 AM-11 PM; Sat 11 AM-11 PM; Sun 10 AM-9 PM",
                website: "https://www.hugosrestaurant.net/",
                reservationRecommended: true
            },
            {
                name: "Uchi Houston",
                category: "Food & Dining",
                description: "Award-winning contemporary Japanese restaurant from chef Tyson Cole, offering inventive sushi, sashimi, seasonal small plates, hot dishes, and chef-selected omakase experiences. Located in Houston's Montrose neighborhood and known for high-quality seafood, creative flavor combinations, and attentive service.",
                mealTypes: ["Dinner"],
                estimatedCostMin: 40,
                estimatedCostMax: 100,
                priceType: "perPerson",
                priceTier: "Mid-Range",
                address: "904 Westheimer Rd, Suite A, Houston, TX 77006",
                cuisine: "Contemporary Japanese sushi and omakase",
                openingHours: "Sun-Thu 4 PM-10 PM; Fri-Sat 4 PM-11 PM; daily happy hour 4 PM-6 PM",
                website: "https://uchi.uchirestaurants.com/location/omakase-houston/",
                reservationRecommended: true
            },
            {
                name: "MARCH",
                category: "Food & Dining",
                description: "Luxury Michelin-starred fine-dining restaurant in Houston's Montrose neighborhood offering an immersive multi-course Mediterranean tasting menu. Led by chef Felipe Riccio, the restaurant explores different Mediterranean regions through seasonal ingredients, artistic presentations, and detailed culinary storytelling. Reservations are required, and the tasting experience typically lasts approximately three hours.",
                mealTypes: ["Dinner"],
                estimatedCostMin: 230,
                estimatedCostMax: 300,
                priceType: "perPerson",
                priceTier: "High-End",
                address: "1624 Westheimer Rd, Houston, TX 77006",
                cuisine: "Mediterranean fine dining and tasting menus",
                openingHours: "Tue-Sat 5:30 PM-9:30 PM; reservations only; closed Sun-Mon",
                website: "https://www.marchrestaurant.com/",
                reservationRecommended: true
            }
        ],


        // ==========================================
        // LOCAL TRANSPORTATION
        // ==========================================

        transportation: [
            "Rental Car",
            "Uber/Lyft",
            "Metro Buses",
            "METRO Rail"
        ],


        // ==========================================
        // HOUSTON — DETAILED TRANSPORTATION OPTIONS
        // ==========================================

        transportationOptions: [
            {
                name: "Rental Car",
                type: "Car Rental",
                description: "Rental vehicles are available at George Bush Intercontinental Airport, William P. Hobby Airport, and locations throughout Houston. Useful for reaching Space Center Houston, suburban attractions, shopping centers, and destinations outside METRO's transit network. Houston is geographically spread out, so renting a car can be convenient for trips across multiple neighborhoods. Costs vary by dates, vehicle type, rental company, driver age, and insurance. Fuel, tolls, parking, and optional fees are not included.",
                estimatedCostMin: null,
                estimatedCostMax: null,
                priceType: "perDay",
                website: "https://www.enterprise.com/"
            },
            {
                name: "Uber/Lyft",
                type: "Rideshare",
                description: "App-based rideshare transportation available throughout Houston and surrounding areas. Convenient for airport transfers, hotel transportation, restaurants, nightlife, museums, and attractions not directly served by public transportation. Fares vary according to distance, traffic, demand, travel time, and pickup location. Airport pickup fees and surge pricing may apply.",
                estimatedCostMin: null,
                estimatedCostMax: null,
                priceType: "perRide",
                website: "https://www.uber.com/"
            },
            {
                name: "Metro Buses",
                type: "Public Transportation",
                description: "Houston METRO local buses provide public transportation throughout the city, including Downtown, the Museum District, Texas Medical Center, shopping areas, and surrounding communities. Standard adult fare is $1.25, including eligible transfers for up to three hours when using an accepted electronic payment method. A local transit day pass costs $3. Some college students qualify for a reduced fare after applying for a discounted fare card. Park & Ride commuter buses have separate higher fares.",
                estimatedCostMin: 1.25,
                estimatedCostMax: 1.25,
                priceType: "per3Hours",
                website: "https://www.ridemetro.org/riding-metro/transit-services/local-bus"
            },
            {
                name: "METRO Rail",
                type: "Public Transportation",
                description: "Houston's METRORail system includes the Red, Green, and Purple Lines, connecting Downtown Houston, the Museum District, Texas Medical Center, and other central destinations. Standard adult fare is $1.25 with eligible transfers for up to three hours. A local transit day pass costs $3. Rail is useful for visiting several central attractions without renting a car, but it does not provide direct service to Houston's major airports or Space Center Houston.",
                estimatedCostMin: 1.25,
                estimatedCostMax: 1.25,
                priceType: "per3Hours",
                website: "https://www.ridemetro.org/riding-metro/transit-services/metrorail"
            }
        ],






        // Houston hotels 

        hotels: [
            {
                name: "Club Quarters Hotel Downtown, Houston",
                category: "Budget",
                description: "Value-oriented hotel in Downtown Houston near METRORail, restaurants, business districts, and major attractions. Offers modern guest rooms, complimentary high-speed Wi-Fi, workspaces, coffee makers, a fitness center, and on-site dining at Table 7 Bistro. Convenient for exploring downtown without renting a car. Valet parking costs $45 daily, with separate paid public self-parking available across the street.",
                address: "1085 Rusk Street, Houston, TX 77002, USA",
                estimatedNightlyCostMin: 90,
                estimatedNightlyCostMax: 200,
                priceType: "perNight",
                amenities: [
                    "Free high-speed Wi-Fi",
                    "Modern guest rooms",
                    "Flat-screen Smart TV",
                    "Dedicated workspace",
                    "In-room coffee maker",
                    "Fitness center",
                    "On-site restaurant",
                    "On-site bar",
                    "Complimentary filtered drinking water",
                    "24-hour front desk",
                    "Luggage storage",
                    "Meeting facilities",
                    "Air conditioning",
                    "Valet parking",
                    "Paid public parking nearby",
                    "Nearby METRORail station",
                    "Walkable downtown location"
                ],
                parkingCost: 45,
                additionalFees: null,
                website: "https://www.clubquartershotels.com/houston/downtown"
            },
            {
                name: "Hampton Inn Houston Downtown Convention Center",
                category: "Mid-Range",
                description: "Comfortable modern hotel in Downtown Houston near Daikin Park, Discovery Green, Toyota Center, and the George R. Brown Convention Center. Features complimentary hot breakfast, free Wi-Fi, an outdoor swimming pool, fitness center, business center, and on-site dining. Convenient for visitors attending events or exploring downtown attractions. Covered valet parking costs $59 daily; hotel self-parking is not available.",
                address: "710 Crawford Street, Houston, TX 77002, USA",
                estimatedNightlyCostMin: 110,
                estimatedNightlyCostMax: 240,
                priceType: "perNight",
                amenities: [
                    "Free Wi-Fi",
                    "Complimentary hot breakfast",
                    "Outdoor swimming pool",
                    "Fitness center",
                    "On-site restaurant and bar",
                    "Modern guest rooms",
                    "Streaming entertainment",
                    "Connecting rooms available",
                    "Business center",
                    "Meeting rooms",
                    "Digital Key",
                    "Air conditioning",
                    "Pet-friendly accommodations",
                    "Covered secured valet parking",
                    "Walkable downtown location",
                    "Near Discovery Green",
                    "Near Daikin Park"
                ],
                parkingCost: 59,
                additionalFees: null,
                website: "https://www.hilton.com/en/hotels/houdwhx-hampton-houston-downtown-convention-center/"
            },
            {
                name: "The Post Oak Hotel at Uptown Houston",
                category: "High-End",
                description: "Luxury Forbes Five-Star hotel and spa located in Houston's Uptown and Galleria area. Features elegant guest rooms and suites, floor-to-ceiling windows, an outdoor resort-style swimming pool, private pool cabanas, a full-service spa and salon, fitness facilities, fine dining, and personalized concierge services. Convenient for luxury shopping and dining near The Galleria. Overnight valet parking costs approximately $60 per night.",
                address: "1600 West Loop South, Houston, TX 77027, USA",
                estimatedNightlyCostMin: 500,
                estimatedNightlyCostMax: 1100,
                priceType: "perNight",
                amenities: [
                    "Complimentary Wi-Fi",
                    "Luxury guest rooms and suites",
                    "City views in select rooms",
                    "Floor-to-ceiling windows",
                    "Outdoor resort-style swimming pool",
                    "Private pool cabanas",
                    "Full-service spa",
                    "Luxury salon",
                    "Fitness center",
                    "Fine dining restaurants",
                    "On-site cocktail lounges",
                    "In-room dining",
                    "Concierge services",
                    "Luxury shopping nearby",
                    "Air conditioning",
                    "Valet parking",
                    "Electric vehicle charging",
                    "Pet-friendly accommodations"
                ],
                parkingCost: 60,
                additionalFees: null,
                website: "https://www.thepostoakhotel.com/"
            }
        ],



        vacationRentals: [
            {
                name: "Houston Skyline Container Retreat",
                category: "Vacation Rental",
                propertyType: "Entire shipping container apartment",
                description: "Modern converted shipping-container apartment in Houston's East End near Navigation Esplanade and Buffalo Bayou. This private 640-square-foot downstairs unit at The EastSider accommodates four guests and features two bedrooms, two bathrooms, a full kitchen, dining area, living room, and a private 200-square-foot deck. Guests also have access to a shared rooftop terrace with panoramic Downtown Houston skyline views, outdoor dining, a barbecue grill, and a fire pit. The rooftop terrace, lawn, and parking area are shared with guests from the upstairs apartment.",
                address: "East End, Houston, TX, USA — exact street address provided after booking",
                estimatedNightlyCostMin: 113.25,
                estimatedNightlyCostMax: 113.25,
                priceType: "perNight",
                maxGuests: 4,
                bedrooms: 2,
                bathrooms: 2,
                amenities: [
                    "Wi-Fi",
                    "Private kitchen",
                    "Private dining area",
                    "Private living room",
                    "Private outdoor deck",
                    "Shared rooftop terrace",
                    "Downtown skyline views",
                    "Outdoor dining area",
                    "Barbecue grill",
                    "Shared fire pit",
                    "Outdoor lounge seating",
                    "HDTV with streaming services",
                    "Free shared on-site parking",
                    "Queen bed",
                    "Double bed",
                    "Sofa bed"
                ],
                cleaningFee: null,
                serviceFee: null,
                parkingCost: 0,
                website: "https://www.airbnb.com/rooms/38704723"
            },
            {
                name: "Houston Montrose Treetop Hideaway",
                category: "Vacation Rental",
                propertyType: "Entire guesthouse apartment",
                description: "Light-filled private guesthouse above an artist's studio in Houston's Montrose neighborhood. This 700-plus-square-foot apartment features original artwork, a separate entrance, one queen bedroom, a full kitchen, dining area, living room, dedicated workspace, and a private treetop deck overlooking a garden. Located within walking distance of the Menil Collection, neighborhood restaurants, shops, and cafes. Accommodates a maximum of two overnight guests.",
                address: "Montrose, Houston, TX, USA — exact street address provided after booking",
                estimatedNightlyCostMin: 120.50,
                estimatedNightlyCostMax: 120.50,
                priceType: "perNight",
                maxGuests: 2,
                bedrooms: 1,
                bathrooms: 1,
                amenities: [
                    "Wi-Fi",
                    "Full kitchen",
                    "Private entrance",
                    "Private garden-view deck",
                    "Garden views",
                    "Queen bed",
                    "Living room",
                    "Dining area",
                    "Dedicated workspace",
                    "Original artwork",
                    "Free street parking",
                    "Walkable neighborhood"
                ],
                cleaningFee: null,
                serviceFee: null,
                parkingCost: 0,
                website: "https://www.airbnb.com/rooms/4467481"
            }
        ],

    },


    // las Vegas #6 

    {


        id: 6,
        city: "Las Vegas",
        state: "Nevada",
        description: "Las Vegas is a vibrant Nevada city known for world-class entertainment, luxurious resorts, shopping, dining, nightlife, unique museums, and beautiful desert landscapes.",
        duration: "3-4 days",

        weatherOptions: [
            {

                // WEATHER OPTION 1: HOT


                condition: "Hot",
                month: [
                    "June",
                    "July",
                    "August",
                    "September"
                ],

                // Three main attractions
                attractions: [
                    {
                        name: "Bellagio Conservatory & Botanical Gardens",
                        category: "Sightseeing & Landmarks",
                        website: "https://bellagio.mgmresorts.com/en/entertainment/conservatory-botanical-garden.html",
                        estimatedCost: 0,
                    },
                    {
                        name: "The Forum Shops at Caesars Palace",
                        category: "Shopping",
                        website: "https://www.simon.com/mall/the-forum-shops-at-caesars-palace",
                        estimatedCost: 0,
                    },
                    {
                        name: "Shark Reef Aquarium",
                        category: "Family Friendly",
                        website: "https://mandalaybay.mgmresorts.com/en/entertainment/shark-reef-aquarium.html",
                        estimatedCost: 29,
                    }
                ],


                // Hot seasonal events
                event: [
                    {
                        name: "iHeartRadio Music Festival",
                        category: "Festivals and Events",
                        description: "Experience a two-night music festival featuring major artists across pop, hip-hop, country, rock, and other genres, with live performances at T-Mobile Arena.",
                        estimatedCostMin: 100,
                        estimatedCostMax: 350,
                        priceType: "perPerson",
                        startDate: "2026-09-18",
                        endDate: "2026-09-19",
                        estimatedDuration: 240,
                        location: "T-Mobile Arena, 3780 Las Vegas Boulevard S, Las Vegas, NV 89158",
                        website: "https://news.iheart.com/featured/iheartradio-music-festival/",
                    },
                    {
                        name: "Las Vegas Greek Food Festival",
                        category: "Festivals and Events",
                        description: "Celebrate Greek culture with traditional cuisine, live music, folk dancing, handmade goods, church tours, and family-friendly festival entertainment.",
                        estimatedCostMin: 10,
                        estimatedCostMax: 10,
                        priceType: "perPerson",
                        startDate: "2026-09-25",
                        endDate: "2026-09-27",
                        estimatedDuration: 180,
                        location: "St. John the Baptist Greek Orthodox Church, 5300 El Camino Road, Las Vegas, NV 89118",
                        website: "https://lasvegasgreekfestival.com/tickets/",
                    }

                ]
            },

            {
                // WEATHER OPTION 2: MILD


                condition: "Mild",
                month: [
                    "March",
                    "April",
                    "May"
                ],

                // Three main attractions
                attractions: [
                    {
                        name: "Red Rock Canyon National Conservation Area",
                        category: "Outdoor & Nature",
                        website: "https://www.blm.gov/visit/red-rock-canyon-national-conservation-area",
                        estimatedCost: 20, // Approximate fee per vehicle for the scenic drive, not per person
                    },
                    {
                        name: "The LINQ Promenade",
                        category: "Food & Dining",
                        website: "https://www.caesars.com/linq/things-to-do/linq-promenade",
                        estimatedCost: 0,
                    },
                    {
                        name: "Fremont Street Experience",
                        category: "Sightseeing & Landmarks",
                        website: "https://vegasexperience.com/",
                        estimatedCost: 0,
                    }
                ],


                // Mild seasonal events
                event: [
                    {
                        name: "Viva Las Vegas Rockabilly Weekend",
                        category: "Festivals and Events",
                        description: "Enjoy a four-day celebration of rockabilly music and vintage culture featuring classic cars, live bands, retro fashion, dancing, and entertainment.",
                        estimatedCostMin: 45,
                        estimatedCostMax: 250,
                        priceType: "perPerson",
                        startDate: "2027-04-08",
                        endDate: "2027-04-11",
                        estimatedDuration: 240,
                        location: "The Orleans Hotel and Casino, 4500 W Tropicana Avenue, Las Vegas, NV 89103",
                        website: "https://vivalasvegas.net/"
                    },
                    {
                        name: "Electric Daisy Carnival Las Vegas - EDC Dusk",
                        category: "Festivals and Events",
                        description: "Attend a large electronic dance music festival featuring internationally recognized DJs, immersive stage designs, light shows, carnival rides, interactive artwork, and nighttime entertainment.",
                        estimatedCostMin: 450,
                        estimatedCostMax: 750,
                        priceType: "perPerson",
                        startDate: "2027-05-14",
                        endDate: "2027-05-16",
                        estimatedDuration: 480,
                        location: "Las Vegas Motor Speedway, 7000 N Las Vegas Boulevard, Las Vegas, NV 89115",
                        website: "https://lasvegas.edc.com/",
                    }
                ]
            }
        ],

        // SHARED ACTIVITIES - AVAILABLE IN BOTH WEATHER OPTIONS

        activities: [
            {
                // Activity 1: History & Culture
                name: "The Mob Museum Visit",
                category: "History & Culture",
                description: "Explore interactive exhibits about organized crime, law enforcement, Prohibition, and the history of Las Vegas inside a historic courthouse.",
                estimatedCostMin: 35,
                estimatedCostMax: 60,
                priceType: "perPerson",
                estimatedDuration: 150,
                location: "300 Stewart Avenue, Las Vegas, NV 89101",
                openingHours: "Daily; check official calendar for hours and timed-ticket availability",
                website: "https://themobmuseum.org/"
            },
            {
                // Activity 2: Entertainment
                name: "AREA15 Immersive Entertainment Experience",
                category: "Entertainment",
                description: "Explore an indoor entertainment complex featuring interactive art installations, immersive experiences, specialty shops, and creative attractions.",
                estimatedCostMin: 0,
                estimatedCostMax: 100,
                priceType: "perPerson",
                estimatedDuration: 180,
                location: "3215 S Rancho Drive, Las Vegas, NV 89102",
                openingHours: "Hours vary by day; individually ticketed experiences have separate schedules",
                website: "https://www.area15.com/"
            },
            {
                // Activity 3: Family Friendly
                name: "Pinball Hall of Fame",
                category: "Family Friendly",
                description: "Explore a collection of vintage and modern pinball machines and enjoy classic arcade-style entertainment.",
                estimatedCostMin: 0,
                estimatedCostMax: 20,
                priceType: "perPerson",
                estimatedDuration: 90,
                location: "4925 Las Vegas Boulevard S, Las Vegas, NV 89119",
                openingHours: "Daily; check published arcade hours",
                website: "https://www.pinballmuseum.org/"
            },
            {
                // Activity 4: Sports & Recreation
                name: "Shelby Heritage Center Tour",
                category: "Sports & Recreation",
                description: "Discover classic Shelby vehicles, automotive history, performance cars, and exhibits celebrating Carroll Shelby's legacy.",
                estimatedCostMin: 0,
                estimatedCostMax: 0,
                priceType: "perPerson",
                estimatedDuration: 90,
                location: "6405 Ensworth Street, Las Vegas, NV 89119",
                openingHours: "Visit during published showroom hours; confirm tours with Shelby American",
                website: "https://shelby.com/Shelby-Heritage-Center-Home"
            },
            {
                // Activity 5: Museums & Art
                name: "Nevada State Museum Las Vegas Visit",
                category: "Museums & Art",
                description: "Explore exhibits about Nevada's natural history, wildlife, cultural heritage, geology, and development.",
                estimatedCostMin: 10,
                estimatedCostMax: 15,
                priceType: "perPerson",
                estimatedDuration: 120,
                location: "309 S Valley View Boulevard, Las Vegas, NV 89107",
                openingHours: "Thu-Mon 9 AM-4 PM; closed Tue-Wed; confirm holiday changes",
                website: "https://www.lasvegasnvmuseum.org/"
            },
            {
                // Activity 1: History & Culture
                name: "The Neon Museum Las Vegas",
                category: "History & Culture",
                description: "Explore an outdoor museum displaying historic Las Vegas neon signs, vintage casino signage, and restored landmarks from the city's past.",
                estimatedCostMin: 25,
                estimatedCostMax: 45,
                priceType: "perPerson",
                estimatedDuration: 90,
                location: "770 Las Vegas Boulevard N, Las Vegas, NV 89101",
                openingHours: "Timed admissions vary seasonally; book ahead",
                website: "https://neonmuseum.org/"
            },
            {
                // Activity 2: Shopping
                name: "Downtown Container Park Shopping",
                category: "Shopping",
                description: "Explore an open-air shopping and entertainment complex featuring boutique stores, local restaurants, art, and a family-friendly play area.",
                estimatedCostMin: 0,
                estimatedCostMax: 50,
                priceType: "perPerson",
                estimatedDuration: 120,
                location: "707 Fremont Street, Las Vegas, NV 89101",
                openingHours: "Individual shops and restaurants have different hours",
                website: "https://downtowncontainerpark.com/"
            },
            {
                // Activity 3: Museums & Art
                name: "Las Vegas Arts District Gallery Walk",
                category: "Museums & Art",
                description: "Explore independent art galleries, colorful murals, vintage boutiques, creative studios, and local businesses in downtown Las Vegas.",
                estimatedCostMin: 0,
                estimatedCostMax: 50,
                priceType: "perPerson",
                estimatedDuration: 120,
                location: "Main Street and Charleston Boulevard, Las Vegas, NV",
                openingHours: "Daytime gallery hours vary by business; First Friday events are scheduled separately",
                website: "https://www.visitlasvegas.com/experience/post/intro-to-the-18b-arts-district/"
            },
            {
                // Activity 4: Outdoor & Nature
                name: "Springs Preserve Gardens and Trails",
                category: "Outdoor & Nature",
                description: "Explore desert gardens, nature trails, local history exhibits, and educational displays focused on the Mojave Desert environment.",
                estimatedCostMin: 20,
                estimatedCostMax: 25,
                priceType: "perPerson",
                estimatedDuration: 180,
                location: "333 S Valley View Boulevard, Las Vegas, NV 89107",
                openingHours: "Hours vary seasonally; check garden and trail schedule",
                website: "https://www.springspreserve.org/"
            },
            {
                // Activity 5: Sightseeing & Landmarks
                name: "Fountains of Bellagio Show",
                category: "Sightseeing & Landmarks",
                description: "Watch a free choreographed fountain performance featuring music, lights, and synchronized water displays on the Las Vegas Strip.",
                estimatedCostMin: 0,
                estimatedCostMax: 0,
                priceType: "perPerson",
                estimatedDuration: 30,
                location: "3600 Las Vegas Boulevard S, Las Vegas, NV 89109",
                openingHours: "Shows generally run afternoons and evenings; weather may interrupt performances",
                website: "https://bellagio.mgmresorts.com/"
            }
        ],


        // LAS VEGAS RESTAURANTS — BREAKFAST, LUNCH AND DINNER
        // Per meal: 1 Budget, 2 Mid-Range, 1 High-End.

        breakfast: [
            {
                name: "The Egg & I",
                category: "Food & Dining",
                description: "Casual Las Vegas breakfast diner serving eggs, pancakes, skillets and omelets.",
                mealTypes: ["Breakfast"],
                estimatedCostMin: 8,
                estimatedCostMax: 20,
                priceType: "perPerson",
                priceTier: "Budget",
                address: "4533 W Sahara Ave, Las Vegas, NV 89102",
                cuisine: "American diner",
                openingHours: "Daily breakfast and lunch; confirm current opening hours",
                website: "https://www.theeggandilv.com/",
                reservationRecommended: false,

            },
            {
                name: "BabyStacks Cafe",
                category: "Food & Dining",
                description: "Local pancake and brunch cafe known for creative pancake flavors and breakfast plates.",
                mealTypes: ["Breakfast"],
                estimatedCostMin: 14,
                estimatedCostMax: 28,
                priceType: "perPerson",
                priceTier: "Mid-Range",
                address: "4135 S Buffalo Dr, Las Vegas, NV 89147",
                cuisine: "American breakfast and pancakes",
                openingHours: "Daily breakfast and lunch; verify location-specific hours",
                website: "https://www.babystackscafe.com/",
                reservationRecommended: false,

            },
            {
                name: "Mon Ami Gabi",
                category: "Food & Dining",
                description: "French bistro at Paris Las Vegas serving breakfast, crepes and classic French dishes with Strip views.",
                mealTypes: ["Breakfast"],
                estimatedCostMin: 20,
                estimatedCostMax: 40,
                priceType: "perPerson",
                priceTier: "Mid-Range",
                address: "3655 S Las Vegas Blvd, Las Vegas, NV 89109",
                cuisine: "French bistro breakfast",
                openingHours: "Daily breakfast 7 AM-11 AM",
                website: "https://www.monamigabi.com/las-vegas/",
                reservationRecommended: true,

            },
            {
                name: "Bouchon at The Venetian",
                category: "Food & Dining",
                description: "Chef Thomas Keller French bistro with pastries, upscale breakfast dishes and weekend brunch.",
                mealTypes: ["Breakfast"],
                estimatedCostMin: 30,
                estimatedCostMax: 65,
                priceType: "perPerson",
                priceTier: "High-End",
                address: "3355 S Las Vegas Blvd, Las Vegas, NV 89109",
                cuisine: "Upscale French brunch",
                openingHours: "Weekend brunch; confirm current schedule and reservations",
                website: "https://www.thomaskeller.com/bouchon-las-vegas",
                reservationRecommended: true,

            },
        ],

        lunch: [
            {
                name: "In-N-Out Burger",
                category: "Food & Dining",
                description: "West Coast burger chain serving burgers, fries and shakes at an accessible Las Vegas Strip location.",
                mealTypes: ["Lunch"],
                estimatedCostMin: 8,
                estimatedCostMax: 17,
                priceType: "perPerson",
                priceTier: "Budget",
                address: "3545 S Las Vegas Blvd, Las Vegas, NV 89109",
                cuisine: "American burgers",
                openingHours: "Daily lunch and dinner; hours vary by location",
                website: "https://locations.in-n-out.com/",
                reservationRecommended: false,

            },
            {
                name: "Eataly Las Vegas",
                category: "Food & Dining",
                description: "Italian food marketplace at Park MGM with pasta, pizza, bakeries and multiple counters.",
                mealTypes: ["Lunch"],
                estimatedCostMin: 18,
                estimatedCostMax: 38,
                priceType: "perPerson",
                priceTier: "Mid-Range",
                address: "3770 S Las Vegas Blvd, Las Vegas, NV 89109",
                cuisine: "Italian marketplace",
                openingHours: "Daily; individual marketplace counters set their own lunch hours",
                website: "https://www.eataly.com/us_en/stores/las-vegas",
                reservationRecommended: false,

            },
            {
                name: "Din Tai Fung at ARIA",
                category: "Food & Dining",
                description: "Taiwanese restaurant inside ARIA known for xiao long bao soup dumplings, noodles and shared plates.",
                mealTypes: ["Lunch"],
                estimatedCostMin: 25,
                estimatedCostMax: 55,
                priceType: "perPerson",
                priceTier: "Mid-Range",
                address: "3730 S Las Vegas Blvd, Las Vegas, NV 89158",
                cuisine: "Taiwanese dumplings",
                openingHours: "Lunch and dinner daily; verify current seating times",
                website: "https://aria.mgmresorts.com/en/restaurants/din-tai-fung.html",
                reservationRecommended: true,

            },
            {
                name: "Estiatorio Milos",
                category: "Food & Dining",
                description: "High-end Mediterranean seafood restaurant at The Venetian with fresh fish and a lunch prix fixe option.",
                mealTypes: ["Lunch"],
                estimatedCostMin: 45,
                estimatedCostMax: 95,
                priceType: "perPerson",
                priceTier: "High-End",
                address: "3355 S Las Vegas Blvd, Las Vegas, NV 89109",
                cuisine: "Upscale Greek seafood",
                openingHours: "Lunch and dinner service; confirm daily lunch seating",
                website: "https://www.estiatoriomilos.com/",
                reservationRecommended: true,

            },
        ],

        dinner: [
            {
                name: "Tacos El Gordo",
                category: "Food & Dining",
                description: "Tijuana-style street tacos featuring handmade tortillas, marinated meats and fast casual service.",
                mealTypes: ["Dinner"],
                estimatedCostMin: 12,
                estimatedCostMax: 28,
                priceType: "perPerson",
                priceTier: "Budget",
                address: "3041 S Las Vegas Blvd, Las Vegas, NV 89109",
                cuisine: "Mexican tacos",
                openingHours: "Daily; late-night service varies",
                website: "https://tacoselgordobc.com/",
                reservationRecommended: false,

            },
            {
                name: "Lotus of Siam",
                category: "Food & Dining",
                description: "Acclaimed Northern Thai restaurant serving curries, noodles and regional specialties. Use the Flamingo Road location; the Red Rock location closed in 2026.",
                mealTypes: ["Dinner"],
                estimatedCostMin: 25,
                estimatedCostMax: 60,
                priceType: "perPerson",
                priceTier: "Mid-Range",
                address: "620 E Flamingo Rd, Las Vegas, NV 89119",
                cuisine: "Northern Thai",
                openingHours: "Dinner service; verify current hours and available location",
                website: "https://www.lotusofsiamlv.com/contact",
                reservationRecommended: true,

            },
            {
                name: "Best Friend at Park MGM",
                category: "Food & Dining",
                description: "Chef Roy Choi Korean-American restaurant with kimchi fried rice, barbecue and shareable dishes.",
                mealTypes: ["Dinner"],
                estimatedCostMin: 30,
                estimatedCostMax: 70,
                priceType: "perPerson",
                priceTier: "Mid-Range",
                address: "3770 S Las Vegas Blvd, Las Vegas, NV 89109",
                cuisine: "Korean-American",
                openingHours: "Evening dinner service; confirm current opening days and times",
                website: "https://parkmgm.mgmresorts.com/en/restaurants/best-friend.html",
                reservationRecommended: true,

            },
            {
                name: "Joël Robuchon",
                category: "Food & Dining",
                description: "Luxury French fine dining at MGM Grand offering a multi-course tasting menu and formal service.",
                mealTypes: ["Dinner"],
                estimatedCostMin: 250,
                estimatedCostMax: 500,
                priceType: "perPerson",
                priceTier: "High-End",
                address: "3799 S Las Vegas Blvd, Las Vegas, NV 89109",
                cuisine: "French fine dining",
                openingHours: "Reservation-only dinner service; confirm available evenings",
                website: "https://mgmgrand.mgmresorts.com/en/restaurants/joel-robuchon-french-restaurant.html",
                reservationRecommended: true,

            },
        ],

        // LOCAL TRANSPORTATION

        transportation: [
            "Walking",
            "Uber/Lyft",
            "RTC Buses",
            "Rental Car",
            "Las Vegas Monorail"
        ],



        // LAS VEGAS — DETAILED TRANSPORTATION OPTIONS

        transportationOptions: [
            {
                name: "Walking",
                type: "Walking",
                description: "Free transportation for exploring the Las Vegas Strip, Fremont Street Experience, hotel resorts, shopping centers, and nearby attractions. Many resorts have pedestrian bridges and indoor walkways. Distances between hotels can be longer than they appear, and summer temperatures can be extremely hot. Walking is best for attractions close to the hotel.",
                estimatedCostMin: 0,
                estimatedCostMax: 0,
                priceType: "free"
            },
            {
                name: "Uber/Lyft",
                type: "Rideshare",
                description: "App-based rideshare transportation available throughout Las Vegas and surrounding areas. Convenient for travel between hotels, the airport, Fremont Street, restaurants, nightlife, and attractions outside the Strip. Many casinos and resorts have designated rideshare pickup locations. Prices vary by distance, traffic, demand, event schedules, and time of day. Airport and other fees may apply.",
                estimatedCostMin: 12,
                estimatedCostMax: 55,
                priceType: "perRide",
                website: "https://www.uber.com/"
            },
            {
                name: "RTC Buses",
                type: "Public Transportation",
                description: "Regional Transportation Commission of Southern Nevada bus services, including the Deuce, which operates along the Las Vegas Strip and Downtown Las Vegas. Regular visitor fares are $4 for a single ride, $6 for a two-hour pass, $8 for a 24-hour pass, and $20 for a three-day pass. Residential bus routes have different fare options. Useful for reaching resorts, restaurants, shopping, and Fremont Street without driving.",
                estimatedCostMin: 4,
                estimatedCostMax: 4,
                priceType: "perRide",
                website: "https://www.rtcsnv.com/ways-to-travel/fares-passes/"
            },
            {
                name: "Rental Car",
                type: "Car Rental",
                description: "Rental vehicles available at Harry Reid International Airport and throughout Las Vegas. Useful for visiting Red Rock Canyon, Hoover Dam, surrounding desert destinations, and attractions outside the Strip. Daily rates vary by rental dates, vehicle type, driver age, and rental company. Fuel, insurance, parking, and optional fees are not included. Many Las Vegas resorts charge for parking.",
                estimatedCostMin: 40,
                estimatedCostMax: 100,
                priceType: "perDay",
                website: "https://www.enterprise.com/"
            },
            {
                name: "Las Vegas Monorail",
                type: "Monorail",
                description: "Elevated rail system operating along the east side of the Las Vegas Strip, connecting MGM Grand, Horseshoe/Paris, Flamingo/Caesars Palace, Harrah's/The LINQ, Las Vegas Convention Center, Westgate, and SAHARA Las Vegas. A single ride costs $5.75 when purchased online or $6.25 at full fare. Unlimited passes are available, including a 24-hour online ticket for $13.95. The Monorail does not directly serve the airport or Fremont Street.",
                estimatedCostMin: 5.75,
                estimatedCostMax: 6.25,
                priceType: "perRide",
                website: "https://www.lvmonorail.com/ticket-information/"
            }
        ],



        // LAS VEGAS — THREE REAL HOTELS
        // Budget, Mid-Range, and High-End


        hotels: [
            {
                name: "Excalibur Hotel & Casino",
                category: "Budget",
                description: "Budget-oriented castle-themed resort on the southern Las Vegas Strip near MGM Grand, Luxor, and New York-New York. Features standard guest rooms, multiple swimming pools, a casino, restaurants, a large arcade, and live entertainment including Tournament of Kings. Convenient access to nearby resorts through pedestrian walkways and the free Mandalay Bay tram. Registered guest self-parking costs $20 per day. A mandatory daily resort fee applies. Minimum check-in age is 21.",
                address: "3850 South Las Vegas Boulevard, Las Vegas, NV 89109, USA",
                estimatedNightlyCostMin: 50,
                estimatedNightlyCostMax: 180,
                priceType: "perNight",
                amenities: [
                    "Wi-Fi included in resort fee",
                    "Standard guest rooms",
                    "Renovated rooms available",
                    "Air conditioning",
                    "Flat-screen TVs",
                    "Outdoor swimming pools",
                    "Poolside cabanas",
                    "Water slide",
                    "Fitness center",
                    "On-site restaurants",
                    "Food court",
                    "Casino",
                    "Fun Dungeon arcade",
                    "Live entertainment",
                    "Tournament of Kings show",
                    "24-hour front desk",
                    "Luggage storage",
                    "Paid self-parking",
                    "Valet parking",
                    "Nearby resort tram",
                    "Convenient Strip location"
                ],
                parkingCost: 20,
                additionalFees: null,
                website: "https://excalibur.mgmresorts.com/"

            },
            {
                name: "Hampton Inn Tropicana",
                category: "Mid-Range",
                description: "Comfortable non-casino hotel near the Las Vegas Strip, Allegiant Stadium, and T-Mobile Arena. Offers complimentary hot breakfast, free Wi-Fi, an outdoor swimming pool, fitness center, modern guest rooms, and a relaxing outdoor fire pit area. A good choice for visitors who prefer a quieter stay without casino resort fees. On-site covered self-parking costs $21 per day. No mandatory resort fee is charged.",
                address: "4975 South Dean Martin Drive, Las Vegas, NV 89118, USA",
                estimatedNightlyCostMin: 110,
                estimatedNightlyCostMax: 260,
                priceType: "perNight",
                amenities: [
                    "Free Wi-Fi",
                    "Complimentary hot breakfast",
                    "Non-smoking guest rooms",
                    "Outdoor swimming pool",
                    "Fitness center",
                    "Outdoor fire pit",
                    "Outdoor seating area",
                    "Lobby bar",
                    "24-hour market",
                    "Air conditioning",
                    "Flat-screen TVs",
                    "Digital Key",
                    "Meeting rooms",
                    "Pet-friendly accommodations",
                    "Covered self-parking",
                    "Electric vehicle charging",
                    "No resort fee",
                    "Near Allegiant Stadium",
                    "Near T-Mobile Arena"
                ],
                parkingCost: 21,
                additionalFees: 0,
                website: "https://www.hilton.com/en/hotels/lasinhx-hampton-tropicana/"

            },
            {
                name: "Wynn Las Vegas",
                category: "High-End",
                description: "Luxury five-star resort on the Las Vegas Strip offering elegant rooms and suites, upscale restaurants, fine dining, designer shopping, outdoor swimming pools, a full-service spa, golf course, entertainment, and concierge services. Guests can access Wynn and Encore resort facilities. A mandatory daily resort fee of $55 plus tax applies. Registered hotel guests receive complimentary self-parking, while standard valet parking costs $40 per day.",
                address: "3131 South Las Vegas Boulevard, Las Vegas, NV 89109, USA",
                estimatedNightlyCostMin: 250,
                estimatedNightlyCostMax: 650,
                priceType: "perNight",
                amenities: [
                    "Luxury guest rooms and suites",
                    "Wi-Fi included in resort fee",
                    "Las Vegas Strip views in select rooms",
                    "Floor-to-ceiling windows",
                    "Outdoor swimming pools",
                    "Private cabanas",
                    "Full-service spa",
                    "Luxury salon",
                    "Fitness center",
                    "Fine dining restaurants",
                    "Casual dining options",
                    "Luxury shopping boutiques",
                    "On-site entertainment",
                    "Nightlife venues",
                    "Casino",
                    "Golf course",
                    "Concierge services",
                    "Room service",
                    "Air conditioning",
                    "Complimentary guest self-parking",
                    "Valet parking"
                ],
                parkingCost: 0,
                additionalFees: 55,
                website: "https://www.wynnlasvegas.com/"

            }
        ],



        // LAS VEGAS — TWO REAL AIRBNB LISTINGS


        vacationRentals: [
            {
                name: "Vegas Skyline Arcade Penthouse",
                category: "Vacation Rental",
                propertyType: "Entire condo",
                description: "Spacious 2,100-square-foot condo near the Strip at the Platinum Hotel featuring two bedrooms, Strip views, wraparound terrace, pool table, retro arcade game and kitchen. Pool, hot tub and fitness amenities may be shared. Listing mentions a possible additional nightly resort fee; verify the amount and whether it is included in Airbnb checkout before pricing.",
                address: "Platinum Hotel, Paradise, Las Vegas, NV, USA — exact unit address provided after booking",
                estimatedNightlyCostMin: 471.75,
                estimatedNightlyCostMax: 471.75,
                priceType: "perNight",
                maxGuests: 7,
                bedrooms: 2,
                bathrooms: 2,
                amenities: [
                    "Wi-Fi",
                    "Full kitchen",
                    "Las Vegas Strip views",
                    "Wraparound terrace",
                    "Professional pool table",
                    "Full-size retro arcade machine",
                    "LED accent lighting",
                    "Smart TVs",
                    "Deep soaking bathtub",
                    "Washer and dryer",
                    "Dedicated workspace",
                    "Swimming pool",
                    "Hot tub",
                    "Fitness center",
                    "Free self-parking",
                    "Hotel concierge service",
                    "Air conditioning"
                ],
                cleaningFee: null,
                serviceFee: null,
                parkingCost: 0,
                website: "https://www.airbnb.com/rooms/1021938274134456750"
                // Verify the current fee and its inclusion in total pricing.
            },
            {
                name: "Vegas Desert Racing Pool Retreat",
                category: "Vacation Rental",
                propertyType: "Entire house",
                description: "Three-bedroom, two-and-a-half-bath Las Vegas house with racing-themed room, pool table, full kitchen, private backyard and swimming pool. The pool is unheated; verify house rules and any pet charges before booking.",
                address: "Spring Valley, Las Vegas, NV, USA — exact street address provided after booking",
                estimatedNightlyCostMin: 360,
                estimatedNightlyCostMax: 360,
                priceType: "perNight",
                maxGuests: 7,
                bedrooms: 3,
                bathrooms: 2.5,
                amenities: [
                    "Wi-Fi",
                    "Full kitchen",
                    "Private outdoor swimming pool",
                    "Pool table",
                    "Racing-car-themed bedroom",
                    "King bed",
                    "Fenced backyard",
                    "Outdoor dining area",
                    "Barbecue grill",
                    "Sun loungers",
                    "Dedicated workspace",
                    "Free on-site parking"
                ],
                cleaningFee: null,
                serviceFee: null,
                parkingCost: 0,
                website: "https://www.airbnb.com/rooms/802379914566101255"
            }
        ]


    },


    //  Los Angeles #7
    {




        id: 7,
        city: "Los Angeles",
        state: "California",
        description: "Los Angeles is a vibrant California city known for its entertainment industry, famous beaches, Hollywood landmarks, diverse cuisine, museums, shopping, and outdoor activities.",
        duration: "4-6 days",


        weatherOptions: [
            {

                // WEATHER OPTION 1: SUNNY


                condition: "Sunny",
                month: [
                    "June",
                    "July",
                    "August",
                    "September"
                ],

                // Three main attractions
                attractions: [
                    {
                        name: "Santa Monica Beach",
                        category: "Beaches & Water Activities",
                        estimatedCost: 0,
                        website: "https://www.santamonica.com/things-to-do/santa-monica-beach/"
                    },
                    {
                        name: "Griffith Observatory",
                        category: "Sightseeing & Landmarks",
                        estimatedCost: 0,
                        website: "https://griffithobservatory.org/"
                    },
                    {
                        name: "The Grove",
                        category: "Shopping",
                        estimatedCost: 0,
                        website: "https://thegrovela.com/"
                    }
                ],



                // Sunny seasonal events
                event: [



                    {
                        name: "A Roots Picnic Experience",
                        category: "Festivals and Events",
                        description: "Experience a live hip-hop and R&B concert celebrating music history, featuring The Roots at the Hollywood Bowl.",
                        estimatedCostMin: 45,
                        estimatedCostMax: 200,
                        priceType: "perPerson",
                        startDate: "2027-06-25",
                        endDate: "2027-06-25",
                        startTime: "20:00",
                        estimatedDuration: 180,
                        location: "Hollywood Bowl, 2301 N Highland Avenue, Los Angeles, CA 90068",
                        website: "https://www.hollywoodbowl.com/events/instances/qeaxg8s3/2027-06-25/a-roots-picnic-experience-2027"
                    },
                    {
                        name: "July Fourth Fireworks Spectacular with The B-52s",
                        category: "Festivals and Events",
                        description: "Celebrate Independence Day with three nights of live music by The B-52s and the Los Angeles Philharmonic, accompanied by a fireworks spectacular at the Hollywood Bowl.",
                        estimatedCostMin: 35,
                        estimatedCostMax: 180,
                        priceType: "perPerson",
                        startDate: "2027-07-02",
                        endDate: "2027-07-04",
                        estimatedDuration: 180,
                        location: "Hollywood Bowl, 2301 N Highland Avenue, Los Angeles, CA 90068",
                        website: "https://www.hollywoodbowl.com/events/instances/46526cx7/2027-07-02/july-fourth-fireworks-spectacular-with-the-b-52s"
                    },
                ],

            },

            {
                // WEATHER OPTION 2: RAINY


                condition: "Rainy",
                month: [
                    "December",
                    "January",
                    "February",
                    "March"
                ],

                // Three main attractions
                attractions: [
                    {
                        name: "The Getty Center",
                        category: "Museums & Art",
                        estimatedCost: 0,
                        website: "https://www.getty.edu/visit/center/"
                    },
                    {
                        name: "Universal Studios Hollywood",
                        category: "Entertainment",
                        estimatedCost: 119,
                        website: "https://www.universalstudioshollywood.com/web/en/us/tickets-and-passes"
                    },
                    {
                        name: "Grand Central Market",
                        category: "Food & Dining",
                        estimatedCost: 0,
                        website: "https://grandcentralmarket.com/"
                    }
                ],



                // Rainy seasonal events
                event: [
                    {
                        name: "L.A. Zoo Lights",
                        category: "Festivals and Events",
                        description: "Explore a nighttime holiday experience featuring illuminated animal sculptures, festive light displays, interactive installations, seasonal treats, and family-friendly entertainment.",
                        estimatedCostMin: 19,
                        estimatedCostMax: 45,
                        priceType: "perPerson",
                        startDate: "2026-11-20",
                        endDate: "2027-01-10",
                        estimatedDuration: 90,
                        location: "Los Angeles Zoo, 5333 Zoo Drive, Los Angeles, CA 90027",
                        website: "https://lazoo.org/plan-your-visit/special-experiences/zoolights/"
                    },
                    {
                        name: "128th Annual Golden Dragon Parade",
                        category: "Festivals and Events",
                        description: "Celebrate Lunar New Year in Los Angeles Chinatown with colorful dragon and lion dances, traditional music, cultural performances, parade floats, and community celebrations.",
                        estimatedCostMin: 0, // Public parade viewing
                        estimatedCostMax: 0,
                        priceType: "perPerson",
                        startDate: "2027-02-13",
                        endDate: "2027-02-13",
                        startTime: "13:00",
                        endTime: "16:00",
                        estimatedDuration: 180,
                        location: "North Broadway and Hill Street, Chinatown, Los Angeles, CA 90012",
                        website: "https://www.lachinesechamber.org/events"
                    }
                ]
            }
        ],

        // Shared activities available in both Sunny and Rainy weather
        activities: [
            {
                // Activity 1: Outdoor & Nature
                name: "Venice Canals Scenic Walk",
                category: "Outdoor & Nature",
                description: "Explore the historic Venice Canals neighborhood featuring picturesque waterways, pedestrian bridges, unique homes, and peaceful walking paths.",
                estimatedCostMin: 0,
                estimatedCostMax: 0,
                priceType: "perPerson",
                estimatedDuration: 90,
                location: "Venice Canal Historic District, Venice, Los Angeles, CA 90291",
                openingHours: "Outdoor residential walk; visit during daylight hours",
                website: "https://venicecanals.org/"
            },
            {
                // Activity 2: Food & Dining
                name: "The Original Farmers Market Food Experience",
                category: "Food & Dining",
                description: "Explore a historic Los Angeles food market featuring restaurants, bakeries, specialty foods, fresh produce, and international cuisine.",
                estimatedCostMin: 0,
                estimatedCostMax: 35,
                priceType: "perPerson",
                estimatedDuration: 90,
                location: "6333 W 3rd Street, Los Angeles, CA 90036",
                openingHours: "Verify current market and vendor hours",
                website: "https://farmersmarketla.com/"
            },
            {
                // Activity 3: Shopping
                name: "Abbot Kinney Boulevard Shopping",
                category: "Shopping",
                description: "Explore a popular Venice shopping district featuring independent boutiques, fashion stores, art galleries, coffee shops, and restaurants.",
                estimatedCostMin: 0,
                estimatedCostMax: 100,
                priceType: "perPerson",
                estimatedDuration: 120,
                location: "Abbot Kinney Boulevard, Venice, Los Angeles, CA 90291",
                openingHours: "Varies by store",
                website: "https://www.abbotkinneyblvd.com/"
            },
            {
                // Activity 4: Entertainment
                name: "Santa Monica Pier Entertainment Experience",
                category: "Entertainment",
                description: "Explore the famous Santa Monica Pier featuring an amusement park, Ferris wheel, arcade games, ocean views, and casual dining.",
                estimatedCostMin: 0,
                estimatedCostMax: 60,
                priceType: "perPerson",
                estimatedDuration: 150,
                location: "200 Santa Monica Pier, Santa Monica, CA 90401",
                openingHours: "Amusement rides and businesses have varying hours",
                website: "https://www.santamonicapier.org/"
            },
            {
                // Activity 5: Sports & Recreation
                name: "Echo Park Lake Pedal Boat Experience",
                category: "Sports & Recreation",
                description: "Enjoy a scenic pedal boat ride on Echo Park Lake with views of downtown Los Angeles, palm trees, walking paths, and the surrounding park.",
                estimatedCostMin: 15,
                estimatedCostMax: 30,
                priceType: "perPerson",
                estimatedDuration: 90,
                location: "Echo Park Lake, 751 Echo Park Avenue, Los Angeles, CA 90026",
                openingHours: "Boat rental times vary by operator and weather",
                website: "https://wheelfunrentals.com/"
            },
            {
                // Activity 1: Museums & Art
                name: "The Broad Contemporary Art Museum",
                category: "Museums & Art",
                description: "Explore a modern art museum featuring contemporary artwork, major installations, sculptures, and works by internationally recognized artists.",
                estimatedCostMin: 0,
                estimatedCostMax: 0,
                priceType: "perPerson",
                estimatedDuration: 120,
                location: "221 S Grand Avenue, Los Angeles, CA 90012",
                openingHours: "Verify current museum hours and reservation availability",
                website: "https://www.thebroad.org/"
            },
            {
                // Activity 2: Entertainment
                name: "Academy Museum of Motion Pictures",
                category: "Entertainment",
                description: "Explore exhibits about filmmaking, movie history, costumes, props, animation, visual effects, and the artists behind major Hollywood productions.",
                estimatedCostMin: 25,
                estimatedCostMax: 25,
                priceType: "perPerson",
                estimatedDuration: 150,
                location: "6067 Wilshire Boulevard, Los Angeles, CA 90036",
                openingHours: "Verify current museum hours",
                website: "https://www.academymuseum.org/"
            },
            {
                // Activity 3: Family Friendly
                name: "California Science Center Visit",
                category: "Family Friendly",
                description: "Discover interactive science exhibitions covering ecosystems, technology, space exploration, biology, and scientific discoveries.",
                estimatedCostMin: 0,
                estimatedCostMax: 0,
                priceType: "perPerson",
                estimatedDuration: 150,
                location: "700 Exposition Park Drive, Los Angeles, CA 90037",
                openingHours: "Verify current exhibition hours and construction closures",
                website: "https://californiasciencecenter.org/"
            },
            {
                // Activity 4: History & Culture
                name: "Petersen Automotive Museum Visit",
                category: "History & Culture",
                description: "Explore exhibits featuring classic cars, luxury vehicles, automotive engineering, racing history, and famous vehicles from film and television.",
                estimatedCostMin: 21,
                estimatedCostMax: 30,
                priceType: "perPerson",
                estimatedDuration: 150,
                location: "6060 Wilshire Boulevard, Los Angeles, CA 90036",
                openingHours: "Verify current museum hours",
                website: "https://www.petersen.org/"
            },
            {
                // Activity 5: Food & Dining
                name: "Little Tokyo Japanese Food Experience",
                category: "Food & Dining",
                description: "Explore the restaurants, bakeries, ramen shops, and specialty food businesses in Los Angeles' historic Little Tokyo neighborhood.",
                estimatedCostMin: 0,
                estimatedCostMax: 35,
                priceType: "perPerson",
                estimatedDuration: 120,
                location: "Little Tokyo, Downtown Los Angeles, CA 90012",
                openingHours: "Varies by restaurant and business",
                website: "https://www.discoverlosangeles.com/"
            }
        ],

        breakfast: [
            {
                name: "Eggslut",
                category: "Food & Dining",
                description: "Breakfast sandwiches and egg-focused counter service inside Grand Central Market.",
                mealTypes: ["Breakfast"],
                estimatedCostMin: 10,
                estimatedCostMax: 22,
                priceType: "perPerson",
                priceTier: "Budget",
                address: "317 S Broadway, Los Angeles, CA 90013",
                cuisine: "American breakfast sandwiches",
                openingHours: "Daily, generally morning through afternoon; verify hours",
                website: "https://www.eggslut.com/locations",
                reservationRecommended: false
            },
            {
                name: "The Griddle Cafe",
                category: "Food & Dining",
                description: "Popular Hollywood breakfast cafe known for oversized pancakes, French toast, and savory brunch plates.",
                mealTypes: ["Breakfast"],
                estimatedCostMin: 18,
                estimatedCostMax: 35,
                priceType: "perPerson",
                priceTier: "Mid-Range",
                address: "7916 Sunset Blvd, Los Angeles, CA 90046",
                cuisine: "American breakfast and brunch",
                openingHours: "Morning to early afternoon; check current daily hours",
                website: "https://www.thegriddlecafe.com/",
                reservationRecommended: false
            },
            {
                name: "République",
                category: "Food & Dining",
                description: "Bakery, cafe, and restaurant offering pastries, breakfast dishes, coffee, and French-inspired cooking.",
                mealTypes: ["Breakfast"],
                estimatedCostMin: 20,
                estimatedCostMax: 45,
                priceType: "perPerson",
                priceTier: "Mid-Range",
                address: "624 S La Brea Ave, Los Angeles, CA 90036",
                cuisine: "French-inspired cafe and bakery",
                openingHours: "Breakfast and daytime bakery service; verify current hours",
                website: "https://republiquela.com/",
                reservationRecommended: false
            },
            {
                name: "Polo Lounge",
                category: "Food & Dining",
                description: "Iconic luxury Beverly Hills Hotel dining room offering refined breakfast and brunch in a garden setting.",
                mealTypes: ["Breakfast"],
                estimatedCostMin: 45,
                estimatedCostMax: 95,
                priceType: "perPerson",
                priceTier: "High-End",
                address: "9641 Sunset Blvd, Beverly Hills, CA 90210",
                cuisine: "Upscale American and California cuisine",
                openingHours: "Breakfast and brunch service varies by day; verify hours",
                website: "https://www.dorchestercollection.com/los-angeles/the-beverly-hills-hotel/dining/polo-lounge",
                reservationRecommended: true
            }
        ],

        lunch: [
            {
                name: "Philippe the Original",
                category: "Food & Dining",
                description: "Historic LA counter-service restaurant famous for French-dipped sandwiches.",
                mealTypes: ["Lunch"],
                estimatedCostMin: 12,
                estimatedCostMax: 25,
                priceType: "perPerson",
                priceTier: "Budget",
                address: "1001 N Alameda St, Los Angeles, CA 90012",
                cuisine: "American deli and French-dip sandwiches",
                openingHours: "Daily breakfast through evening; confirm posted hours",
                website: "https://philippes.com/",
                reservationRecommended: false
            },
            {
                name: "Guisados",
                category: "Food & Dining",
                description: "Locally loved taco shop serving homestyle braised meats on handmade corn tortillas. Downtown LA location.",
                mealTypes: ["Lunch"],
                estimatedCostMin: 12,
                estimatedCostMax: 25,
                priceType: "perPerson",
                priceTier: "Mid-Range",
                address: "541 S Spring St, Los Angeles, CA 90013",
                cuisine: "Mexican tacos",
                openingHours: "Lunch and daytime service; check downtown location hours",
                website: "https://www.guisados.la/locations",
                reservationRecommended: false
            },
            {
                name: "Grand Central Market",
                category: "Food & Dining",
                description: "Historic multi-vendor food hall with many cuisines; price depends on selected vendor.",
                mealTypes: ["Lunch"],
                estimatedCostMin: 15,
                estimatedCostMax: 35,
                priceType: "perPerson",
                priceTier: "Mid-Range",
                address: "317 S Broadway, Los Angeles, CA 90013",
                cuisine: "International food hall",
                openingHours: "Vendors vary; check current market hours",
                website: "https://grandcentralmarket.com/visit-the-market/",
                reservationRecommended: false
            },
            {
                name: "The Ivy",
                category: "Food & Dining",
                description: "Upscale and stylish West Hollywood-area restaurant serving California-inspired lunch and brunch.",
                mealTypes: ["Lunch"],
                estimatedCostMin: 45,
                estimatedCostMax: 95,
                priceType: "perPerson",
                priceTier: "High-End",
                address: "113 N Robertson Blvd, Los Angeles, CA 90048",
                cuisine: "Californian and American",
                openingHours: "Lunch and brunch hours vary; check reservations",
                website: "https://theivyrestaurants.com/",
                reservationRecommended: true
            }
        ],

        dinner: [
            {
                name: "Howlin’ Ray’s",
                category: "Food & Dining",
                description: "Chinatown Nashville-style hot chicken spot; its Chinatown location has limited afternoon and early-evening service, so plan an early dinner.",
                mealTypes: ["Dinner"],
                estimatedCostMin: 15,
                estimatedCostMax: 30,
                priceType: "perPerson",
                priceTier: "Budget",
                address: "727 N Broadway, Suite 128, Los Angeles, CA 90012",
                cuisine: "Nashville hot chicken",
                openingHours: "Limited daytime/early evening hours; verify before dinner",
                website: "https://howlinrays.com/pages/locations",
                reservationRecommended: false
            },
            {
                name: "Bestia",
                category: "Food & Dining",
                description: "Highly regarded Arts District restaurant known for handmade pasta, Italian-inspired plates, and cured meats.",
                mealTypes: ["Dinner"],
                estimatedCostMin: 45,
                estimatedCostMax: 90,
                priceType: "perPerson",
                priceTier: "Mid-Range",
                address: "2121 E 7th Pl, Los Angeles, CA 90021",
                cuisine: "Italian",
                openingHours: "Dinner hours and reservations vary by day",
                website: "https://bestiala.com/",
                reservationRecommended: true
            },
            {
                name: "Bavel",
                category: "Food & Dining",
                description: "Arts District restaurant serving modern Middle Eastern cooking, wood-fired dishes, and shared plates.",
                mealTypes: ["Dinner"],
                estimatedCostMin: 50,
                estimatedCostMax: 100,
                priceType: "perPerson",
                priceTier: "Mid-Range",
                address: "500 Mateo St, Los Angeles, CA 90013",
                cuisine: "Middle Eastern",
                openingHours: "Dinner service; confirm current schedule",
                website: "https://baveldtla.com/",
                reservationRecommended: true
            },
            {
                name: "Providence",
                category: "Food & Dining",
                description: "Luxury seafood-focused Los Angeles fine dining restaurant featuring multi-course tasting menus.",
                mealTypes: ["Dinner"],
                estimatedCostMin: 250,
                estimatedCostMax: 400,
                priceType: "perPerson",
                priceTier: "High-End",
                address: "5955 Melrose Ave, Los Angeles, CA 90038",
                cuisine: "Seafood tasting menu and fine dining",
                openingHours: "Reservation-based dinner; check current schedule",
                website: "https://providencela.com/",
                reservationRecommended: true
            }
        ],


        // LOCAL TRANSPORTATION


        transportation: [
            "Rental Car",
            "Uber/Lyft",
            "Metro Buses",
            "Metro Rail"
        ],





        transportationOptions: [
            {
                name: "Rental Car",
                type: "Car Rental",
                description: "Rental vehicles are available at Los Angeles International Airport, Hollywood Burbank Airport, and throughout Los Angeles. Useful for visiting Santa Monica, Venice Beach, Hollywood, Griffith Observatory, and destinations spread across Southern California. Rental rates vary by dates, vehicle type, driver age, and rental company. Gas, parking, tolls, and optional insurance are not included. Traffic congestion and paid parking should be considered.",
                estimatedCostMin: 45, // Planning estimate, excludes extras
                estimatedCostMax: 110,
                priceType: "perDay",
                website: "https://www.enterprise.com/"
            },
            {
                name: "Uber/Lyft",
                type: "Rideshare",
                description: "App-based rideshare transportation available across Los Angeles and surrounding areas. Convenient for travel between hotels, restaurants, beaches, nightlife, and attractions not directly served by Metro. Fares vary by distance, traffic, demand, pickup location, and time of day. Airport pickup arrangements and additional fees may apply.",
                estimatedCostMin: 12, // Planning estimate; airport/surge trips cost more
                estimatedCostMax: 65,
                priceType: "perRide",
                website: "https://www.uber.com/"
            },
            {
                name: "Metro Buses",
                type: "Public Transportation",
                description: "Los Angeles Metro buses serve Downtown, Hollywood, Santa Monica-area connections, neighborhoods, shopping districts, and attractions throughout LA County. Standard one-way fare is $1.75 with eligible free transfers within two hours, excluding round trips. Electronic payment offers a $5 daily cap and $18 seven-day cap. Travel times vary significantly with traffic. Other regional bus agencies may have separate fares.",
                estimatedCostMin: 1.75,
                estimatedCostMax: 1.75,
                priceType: "perRide",
                website: "https://www.metro.net/fares/"
            },
            {
                name: "Metro Rail",
                type: "Public Transportation",
                description: "Los Angeles Metro rail connects major destinations through subway and light rail services, including Downtown Los Angeles, Hollywood, Universal City, Santa Monica, and other neighborhoods. Standard one-way fare is $1.75 with eligible free transfers within two hours, excluding round trips. Electronic payment offers a $5 daily cap and $18 seven-day cap. The system provides connections to buses and airport-related transit services.",
                estimatedCostMin: 1.75,
                estimatedCostMax: 1.75,
                priceType: "perRide",
                website: "https://www.metro.net/riding/"
            }
        ],




        // LOS ANGELES — THREE REAL HOTELS
        // Budget, Mid-Range, and High-End


        hotels: [
            {
                name: "citizenM Los Angeles Downtown",
                category: "Budget",
                description: "Value-oriented modern hotel in Downtown Los Angeles near Little Tokyo, Grand Central Market, the Broadway Theater District, and Metro stations. Features compact smart guest rooms with king beds, rainfall showers, tablet-controlled lighting, complimentary Wi-Fi, a 24-hour restaurant and bar, fitness center, and modern shared lounge areas. No on-site parking is available; guests can use nearby paid parking garages. Minimum check-in age is 18.",
                address: "361 South Spring Street, Los Angeles, CA 90013, USA",
                estimatedNightlyCostMin: 130, // Planning rate, excluding taxes and fees
                estimatedNightlyCostMax: 260,
                priceType: "perNight",
                amenities: [
                    "Wi-Fi",
                    "Compact modern guest rooms",
                    "Extra-large king bed",
                    "Rainfall shower",
                    "Smart-room tablet controls",
                    "Blackout blinds",
                    "Smart TV with Chromecast",
                    "Air conditioning",
                    "24-hour restaurant and bar",
                    "Breakfast buffet available for purchase",
                    "24-hour fitness center",
                    "Modern guest lounges",
                    "Contactless check-in",
                    "Meeting rooms",
                    "Elevators",
                    "Nearby Metro station",
                    "Nearby paid parking garages"
                ],
                parkingCost: null,
                additionalFees: null,
                website: "https://www.marriott.com/en-us/hotels/laxzd-citizenm-los-angeles-downtown/overview/"

            },
            {
                name: "Hilton Garden Inn Los Angeles/Hollywood",
                category: "Mid-Range",
                description: "Comfortable mid-range hotel in Hollywood near the Hollywood Walk of Fame, TCL Chinese Theatre, Dolby Theatre, and Hollywood Bowl. Offers modern guest rooms, complimentary Wi-Fi, an outdoor swimming pool, hot tub, fitness center, on-site restaurant, and room service. Breakfast is available for an additional charge. Valet parking costs $60 per day and hotel self-parking is not available.",
                address: "2005 North Highland Avenue, Los Angeles, CA 90068, USA",
                estimatedNightlyCostMin: 170,
                estimatedNightlyCostMax: 330,
                priceType: "perNight",
                amenities: [
                    "Free Wi-Fi",
                    "Modern guest rooms",
                    "Outdoor swimming pool",
                    "Hot tub",
                    "Fitness center",
                    "On-site restaurant",
                    "Room service",
                    "Breakfast available for purchase",
                    "Flat-screen TVs",
                    "Air conditioning",
                    "Business center",
                    "Meeting rooms",
                    "Digital Key",
                    "Pet-friendly accommodations",
                    "Valet parking",
                    "Nearby Hollywood attractions",
                    "Near Hollywood Bowl",
                    "Near Universal Studios Hollywood"
                ],
                parkingCost: 60,
                additionalFees: null,
                website: "https://www.hilton.com/en/hotels/laxhogi-hilton-garden-inn-los-angeles-hollywood/"

            },
            {
                name: "Conrad Los Angeles",
                category: "High-End",
                description: "Luxury hotel in Downtown Los Angeles across from Walt Disney Concert Hall and near The Broad museum, Grand Park, and the Grand Avenue Arts district. Features elegant rooms and suites, a rooftop terrace with outdoor swimming pool, city views, a full-service spa, upscale restaurants, fitness center, concierge services, and room service. Valet parking is available at an additional charge.",
                address: "100 South Grand Avenue, Los Angeles, CA 90012, USA",
                estimatedNightlyCostMin: 480,
                estimatedNightlyCostMax: 950,
                priceType: "perNight",
                amenities: [
                    "Free Wi-Fi",
                    "Luxury guest rooms and suites",
                    "City views in select rooms",
                    "Walt Disney Concert Hall views",
                    "Rooftop outdoor swimming pool",
                    "Rooftop terrace",
                    "Poolside lounge seating",
                    "Full-service spa",
                    "Sauna",
                    "Fitness center",
                    "Upscale restaurants",
                    "On-site bars",
                    "Room service",
                    "Concierge services",
                    "Streaming entertainment",
                    "Digital Key",
                    "Connecting rooms available",
                    "Pet-friendly accommodations",
                    "Air conditioning",
                    "Valet parking",
                    "Nearby museums and arts venues"
                ],
                parkingCost: null,
                additionalFees: null,
                website: "https://www.hilton.com/en/hotels/laxavci-conrad-los-angeles/"

            }
        ],






        vacationRentals: [
            {
                name: "Venice Beach Oceanfront Rooftop Escape",
                category: "Vacation Rental",
                propertyType: "Entire oceanfront home",
                description: "Spacious luxury oceanfront residence located directly on the Venice Beach Boardwalk. Features panoramic Pacific Ocean views, two private king-bedroom suites, a rooftop deck, oceanfront patio, private primary-suite balcony, and a modern kitchen with premium Thermador appliances. Walking distance to Venice Beach, restaurants, shopping, and the Venice Canals.",
                address: "Venice Beach, Los Angeles, CA, USA — exact street address provided after booking",
                estimatedNightlyCostMin: 975.75,
                estimatedNightlyCostMax: 975.75,
                priceType: "perNight",
                maxGuests: 8,
                bedrooms: 2,
                bathrooms: 2.5,
                amenities: [
                    "Wi-Fi",
                    "Full kitchen",
                    "Oceanfront location",
                    "Pacific Ocean views",
                    "Direct beach access",
                    "Rooftop deck",
                    "Oceanfront patio",
                    "Private bedroom balcony",
                    "Two king beds",
                    "Additional sofa sleeping spaces",
                    "Thermador kitchen appliances",
                    "Air conditioning",
                    "Smart TV",
                    "Private gated parking space",
                    "Outdoor seating",
                    "Soaking bathtub",
                    "Rainfall shower"
                ],
                cleaningFee: null,
                serviceFee: null,
                parkingCost: 0,
                website: "https://www.airbnb.com/rooms/1168076881760467390"
            },
            {
                name: "Hollywood Hills Artistic Pool Sanctuary",
                category: "Vacation Rental",
                propertyType: "Entire house",
                description: "Private designer residence in the Hollywood Hills featuring curated art collections, modern furnishings, two king bedrooms, a spacious chef's kitchen, and a landscaped backyard with a private swimming pool. Includes an outdoor dining area, barbecue grill, fireplace, and sun loungers. Located a short drive from Universal Studios Hollywood and the Hollywood Bowl.",
                address: "Hollywood Hills, Los Angeles, CA, USA — exact street address provided after booking",
                estimatedNightlyCostMin: 541.75,
                estimatedNightlyCostMax: 541.75,
                priceType: "perNight",
                maxGuests: 5,
                bedrooms: 2,
                bathrooms: 2,
                amenities: [
                    "Wi-Fi",
                    "Full kitchen",
                    "Private swimming pool",
                    "Optional heated pool",
                    "Landscaped backyard",
                    "Outdoor dining area",
                    "Outdoor fireplace",
                    "Barbecue grill",
                    "Sun loungers",
                    "Two king beds",
                    "Contemporary art collection",
                    "Designer furnishings",
                    "Smart TV",
                    "Free on-site parking",
                    "Air conditioning"
                ],
                cleaningFee: null,
                serviceFee: null,
                parkingCost: 0,
                website: "https://www.airbnb.com/rooms/1384068330392120165"

            }
        ]
    },



    // Miami #8

    {
        id: 8,
        city: "Miami",
        state: "Florida",
        description: "Miami is a vibrant Florida city known for its beautiful beaches, tropical climate, Latin American and Caribbean culture, colorful art districts, nightlife, shopping, and diverse cuisine.",
        duration: "3-5 days",

        weatherOptions: [
            {

                // WEATHER OPTION 1: HOT

                condition: "Hot",
                month: [
                    "June",
                    "July",
                    "August",
                    "September"
                ],

                // Three main attractions
                attractions: [
                    {
                        name: "Frost Science Museum",
                        category: "Museums & Art",
                        estimatedCost: 35,
                        website: "https://www.frostscience.org/plan-your-visit/"
                    },
                    {
                        name: "Dolphin Mall",
                        category: "Shopping",
                        estimatedCost: 0,
                        website: "https://www.shopdolphinmall.com/"
                    },
                    {
                        name: "Bayside Marketplace",
                        category: "Food & Dining",
                        estimatedCost: 0,
                        website: "https://www.baysidemarketplace.com/"
                    }
                ],


                // Hot seasonal events
                event: [
                    {
                        name: "Miami Swim Week - The Shows",
                        category: "Festivals and Events",
                        description: "Experience Miami's annual swimwear and resort-fashion celebration featuring designer runway shows, fashion presentations, industry events, and creative experiences.",
                        estimatedCostMin: null,
                        estimatedCostMax: null,
                        priceType: "perPerson",
                        startDate: "2027-06-02",
                        endDate: "2027-06-06",
                        estimatedDuration: 180,
                        location: "Miami Beach, FL - 2027 venue to be announced",
                        website: "https://dcswimweek.com/miami-swim-week-shows/"
                    },
                    {
                        name: "International Latin Hustle Festival",
                        category: "Festivals and Events",
                        description: "Celebrate Latin hustle dancing with professional workshops, live performances, dance competitions, evening shows, and social dancing.",
                        estimatedCostMin: null,
                        estimatedCostMax: null,
                        priceType: "perPerson",
                        startDate: "2027-07-01",
                        endDate: "2027-07-04",
                        estimatedDuration: 240,
                        location: "DoubleTree by Hilton Miami Airport Hotel & Convention Center, 711 NW 72nd Avenue, Miami, FL 33126",
                        website: "https://ilatinhustlefest.com/"
                    }
                ],
            },
            {
                condition: "Mild",
                month: [
                    "December",
                    "January",
                    "February",
                    "March"
                ],

                // Three main attractions
                attractions: [
                    {
                        name: "South Beach",
                        category: "Beaches & Water Activities",
                        estimatedCost: 0,
                        website: "https://www.miamiandbeaches.com/"
                    },
                    {
                        name: "Wynwood Walls",
                        category: "Museums & Art",
                        estimatedCost: 15,
                        website: "https://thewynwoodwalls.com/"
                    },
                    {
                        name: "Little Havana",
                        category: "History & Culture",
                        estimatedCost: 0,
                        website: "https://www.miamiandbeaches.com/neighborhoods/little-havana"
                    }
                ],


                // Mild seasonal events
                event: [
                    {
                        name: "South Beach Wine and Food Festival",
                        category: "Festivals and Events",
                        description: "Experience a four-day culinary festival featuring celebrity chefs, tasting events, cooking demonstrations, brunches, specialty dining experiences, and food-focused entertainment.",
                        estimatedCostMin: 59,
                        estimatedCostMax: 250,
                        priceType: "perPerson",
                        startDate: "2027-02-25",
                        endDate: "2027-02-28",
                        estimatedDuration: 180,
                        location: "Various locations throughout Miami Beach and Miami, FL",
                        website: "https://sobewff.org/"
                    },
                    {
                        name: "Calle Ocho Music Festival",
                        category: "Festivals and Events",
                        description: "Celebrate Latin American and Caribbean cultures at a large outdoor street festival featuring live Latin music, folkloric dancing, international food vendors, and community entertainment.",
                        estimatedCostMin: 0,
                        estimatedCostMax: 0,
                        priceType: "perPerson",
                        startDate: "2027-03-14",
                        endDate: "2027-03-14",
                        startTime: "11:00",
                        endTime: "19:00",
                        estimatedDuration: 180,
                        location: "SW 8th Street, between SW 12th and SW 27th Avenues, Little Havana, Miami, FL",
                        website: "https://carnavalmiami.com/events/calle-ocho/"
                    }
                ]
            }
        ],
        // Shared activities for both Hot and Mild weather
        activities: [
            {
                name: "Pérez Art Museum Miami Visit",
                category: "Museums & Art",
                description: "Explore contemporary and modern art exhibitions featuring artists from the Americas, along with beautiful architecture and views of Biscayne Bay.",
                estimatedCostMin: 18,
                estimatedCostMax: 22,
                priceType: "perPerson",
                estimatedDuration: 120,
                location: "1103 Biscayne Boulevard, Miami, FL 33132",
                openingHours: "Verify current museum hours",
                website: "https://www.pamm.org/"
            },
            {
                name: "1-800-Lucky Asian Food Hall",
                category: "Food & Dining",
                description: "Explore an Asian-inspired food hall in Wynwood featuring restaurants, quick-service food vendors, and a lively dining atmosphere.",
                estimatedCostMin: 0,
                estimatedCostMax: 40,
                priceType: "perPerson",
                estimatedDuration: 90,
                location: "143 NW 23rd Street, Miami, FL 33127",
                openingHours: "Restaurant and vendor hours vary",
                website: "https://www.1800lucky.com/"
            },
            {
                name: "Brickell City Centre Shopping",
                category: "Shopping",
                description: "Explore a modern shopping and entertainment complex featuring fashion retailers, restaurants, luxury stores, and contemporary architecture.",
                estimatedCostMin: 0,
                estimatedCostMax: 100,
                priceType: "perPerson",
                estimatedDuration: 120,
                location: "701 S Miami Avenue, Miami, FL 33131",
                openingHours: "Verify current shopping center and store hours",
                website: "https://www.brickellcitycentre.com/"
            },
            {
                name: "Superblue Miami Immersive Art Experience",
                category: "Entertainment",
                description: "Explore immersive art installations featuring interactive environments, large-scale digital artwork, and sensory experiences.",
                estimatedCostMin: 35,
                estimatedCostMax: 60,
                priceType: "perPerson",
                estimatedDuration: 120,
                location: "1101 NW 23rd Street, Miami, FL 33127",
                openingHours: "Verify current exhibition and admission hours",
                website: "https://www.superblue.com/"
            },
            {
                name: "Institute of Contemporary Art Miami",
                category: "Museums & Art",
                description: "Explore free contemporary art exhibitions, innovative installations, and creative works from internationally recognized and emerging artists.",
                estimatedCostMin: 0,
                estimatedCostMax: 0,
                priceType: "perPerson",
                estimatedDuration: 90,
                location: "61 NE 41st Street, Miami, FL 33137",
                openingHours: "Verify current gallery hours and entry requirements",
                website: "https://icamiami.org/"
            },
            {
                name: "South Beach Art Deco Historic District Walk",
                category: "History & Culture",
                description: "Explore colorful Art Deco buildings, historic architecture, pastel-colored hotels, and iconic streets along Miami Beach's famous Ocean Drive.",
                estimatedCostMin: 0,
                estimatedCostMax: 0,
                priceType: "perPerson",
                estimatedDuration: 90,
                location: "Ocean Drive, Miami Beach, FL 33139",
                openingHours: "Outdoor self-guided walk; daytime recommended",
                website: "https://mdpl.org/"
            },
            {
                name: "Vizcaya Museum and Gardens Visit",
                category: "History & Culture",
                description: "Explore a historic waterfront estate featuring European-inspired architecture, beautifully landscaped gardens, decorative artwork, and views of Biscayne Bay.",
                estimatedCostMin: 25,
                estimatedCostMax: 35,
                priceType: "perPerson",
                estimatedDuration: 180,
                location: "3251 S Miami Avenue, Miami, FL 33129",
                openingHours: "Verify current museum and garden hours",
                website: "https://vizcaya.org/"
            },
            {
                name: "Little Havana Cuban Food and Culture Walk",
                category: "Food & Dining",
                description: "Explore Calle Ocho in Little Havana, where visitors can discover Cuban coffee, bakeries, restaurants, local shops, music, and neighborhood culture.",
                estimatedCostMin: 0,
                estimatedCostMax: 40,
                priceType: "perPerson",
                estimatedDuration: 120,
                location: "Calle Ocho, SW 8th Street, Miami, FL 33135",
                openingHours: "Varies by restaurant and shop",
                website: "https://www.miamiandbeaches.com/"
            },
            {
                name: "Venetian Pool Swimming Experience",
                category: "Beaches & Water Activities",
                description: "Enjoy a historic outdoor swimming pool in Coral Gables featuring waterfalls, coral rock formations, and a unique Mediterranean-style setting.",
                estimatedCostMin: 20,
                estimatedCostMax: 30,
                priceType: "perPerson",
                estimatedDuration: 120,
                location: "2701 De Soto Boulevard, Coral Gables, FL 33134",
                openingHours: "Seasonal pool hours and closures vary",
                website: "https://www.coralgables.com/"
            },
            {
                name: "Fairchild Tropical Botanic Garden Visit",
                category: "Outdoor & Nature",
                description: "Explore tropical gardens featuring rare plants, palm trees, flowering landscapes, nature trails, and seasonal botanical exhibitions.",
                estimatedCostMin: 25,
                estimatedCostMax: 35,
                priceType: "perPerson",
                estimatedDuration: 180,
                location: "10901 Old Cutler Road, Coral Gables, FL 33156",
                openingHours: "Verify current garden hours",
                website: "https://fairchildgarden.org/"
            }
        ],


        // MIAMI RESTAURANTS 
        // Per meal: 1 Budget, 2 Mid-Range, 1 High-End.

        breakfast: [
            {
                name: "El Bagel",
                category: "Food & Dining",
                description: "Small Miami bagel shop serving fresh bagels, breakfast sandwiches, and coffee.",
                mealTypes: ["Breakfast"],
                estimatedCostMin: 10,
                estimatedCostMax: 22,
                priceType: "perPerson",
                priceTier: "Budget",
                address: "6910 Biscayne Blvd, Miami, FL 33138",
                cuisine: "Bagels and breakfast sandwiches",
                openingHours: "Morning through early afternoon; check day-specific hours",
                website: "https://www.elbagel.com/",
                reservationRecommended: false
            },
            {
                name: "GreenStreet Cafe",
                category: "Food & Dining",
                description: "Coconut Grove cafe with breakfast, brunch, pancakes, omelets, and outdoor seating.",
                mealTypes: ["Breakfast"],
                estimatedCostMin: 18,
                estimatedCostMax: 38,
                priceType: "perPerson",
                priceTier: "Mid-Range",
                address: "3468 Main Hwy, Coconut Grove, FL 33133",
                cuisine: "American breakfast and brunch",
                openingHours: "Breakfast and brunch service; confirm daily hours",
                website: "https://www.greenstreetcafe.net/",
                reservationRecommended: false
            },
            {
                name: "B Bistro + Bakery",
                category: "Food & Dining",
                description: "Brickell bakery and restaurant featuring pastries, breakfast plates, and brunch dishes.",
                mealTypes: ["Breakfast"],
                estimatedCostMin: 20,
                estimatedCostMax: 45,
                priceType: "perPerson",
                priceTier: "Mid-Range",
                address: "600 Brickell Ave, Miami, FL 33131",
                cuisine: "Contemporary bakery and brunch",
                openingHours: "Breakfast and lunch hours; confirm day-specific service",
                website: "https://bbistromiami.com/",
                reservationRecommended: false
            },
            {
                name: "Sunday brunch at Biltmore Hotel",
                category: "Food & Dining",
                description: "Upscale Sunday brunch at the Biltmore Hotel featuring seafood, carving stations, pastry, and breakfast items; offered on Sundays.",
                mealTypes: ["Breakfast"],
                estimatedCostMin: 95,
                estimatedCostMax: 150,
                priceType: "perPerson",
                priceTier: "High-End",
                address: "1200 Anastasia Ave, Coral Gables, FL 33134",
                cuisine: "Luxury hotel brunch buffet",
                openingHours: "Sunday brunch only; confirm seating schedule",
                website: "https://biltmorehotel.com/coral-gables-dining/sunday-brunch/",
                reservationRecommended: true
            }
        ],

        lunch: [
            {
                name: "La Sandwicherie",
                category: "Food & Dining",
                description: "Miami Beach sandwich counter known for freshly prepared French-style sandwiches, salads, and smoothies.",
                mealTypes: ["Lunch"],
                estimatedCostMin: 12,
                estimatedCostMax: 25,
                priceType: "perPerson",
                priceTier: "Budget",
                address: "229 14th St, Miami Beach, FL 33139",
                cuisine: "French-inspired sandwiches",
                openingHours: "Daily service; verify South Beach location hours",
                website: "https://lasandwicherie.com/",
                reservationRecommended: false
            },
            {
                name: "Sanguich de Miami",
                category: "Food & Dining",
                description: "Little Havana sandwich shop offering pressed Cuban sandwiches, croquetas, and shakes.",
                mealTypes: ["Lunch"],
                estimatedCostMin: 15,
                estimatedCostMax: 30,
                priceType: "perPerson",
                priceTier: "Mid-Range",
                address: "2057 SW 8th St, Miami, FL 33135",
                cuisine: "Cuban sandwiches",
                openingHours: "Daytime service; check official location hours",
                website: "https://sanguich.com/locations/",
                reservationRecommended: false
            },
            {
                name: "Mandolin Aegean Bistro",
                category: "Food & Dining",
                description: "Aegean restaurant with Greek and Turkish small plates, grilled seafood, and a garden courtyard.",
                mealTypes: ["Lunch"],
                estimatedCostMin: 25,
                estimatedCostMax: 55,
                priceType: "perPerson",
                priceTier: "Mid-Range",
                address: "4312 NE 2nd Ave, Miami, FL 33137",
                cuisine: "Greek and Turkish",
                openingHours: "Lunch service on select days; verify current hours",
                website: "https://www.mandolinrestaurant.com/",
                reservationRecommended: true
            },
            {
                name: "Jaya at The Setai",
                category: "Food & Dining",
                description: "Upscale Asian-inspired restaurant at The Setai hotel in Miami Beach, with lunch and brunch offerings.",
                mealTypes: ["Lunch"],
                estimatedCostMin: 45,
                estimatedCostMax: 100,
                priceType: "perPerson",
                priceTier: "High-End",
                address: "2001 Collins Ave, Miami Beach, FL 33139",
                cuisine: "Upscale Asian",
                openingHours: "Lunch and brunch availability varies; confirm before visiting",
                website: "https://www.thesetaihotel.com/dining/jaya-at-the-setai",
                reservationRecommended: true
            }
        ],

        dinner: [
            {
                name: "La Carreta",
                category: "Food & Dining",
                description: "Longstanding Cuban restaurant serving ropa vieja, palomilla steak, croquetas, and other Cuban classics.",
                mealTypes: ["Dinner"],
                estimatedCostMin: 15,
                estimatedCostMax: 35,
                priceType: "perPerson",
                priceTier: "Budget",
                address: "3632 SW 8th St, Miami, FL 33135",
                cuisine: "Cuban",
                openingHours: "Lunch and dinner; verify current location hours",
                website: "https://www.lacarreta.com/",
                reservationRecommended: false
            },
            {
                name: "Cvi.che 105",
                category: "Food & Dining",
                description: "Popular downtown Miami Peruvian seafood restaurant specializing in ceviche, tiraditos, and traditional dishes.",
                mealTypes: ["Dinner"],
                estimatedCostMin: 25,
                estimatedCostMax: 55,
                priceType: "perPerson",
                priceTier: "Mid-Range",
                address: "105 NE 3rd Ave, Miami, FL 33132",
                cuisine: "Peruvian seafood",
                openingHours: "Lunch and dinner; check official downtown location hours",
                website: "https://www.ceviche105.com/hours-and-locations/",
                reservationRecommended: true
            },
            {
                name: "Michael’s Genuine Food & Drink",
                category: "Food & Dining",
                description: "Miami Design District restaurant featuring seasonal American cooking, wood-fired dishes, and small plates.",
                mealTypes: ["Dinner"],
                estimatedCostMin: 35,
                estimatedCostMax: 85,
                priceType: "perPerson",
                priceTier: "Mid-Range",
                address: "130 NE 40th St, Miami, FL 33137",
                cuisine: "Contemporary American",
                openingHours: "Dinner service; check official hours",
                website: "https://michaelsgenuine.com/miami/",
                reservationRecommended: true
            },
            {
                name: "COTE Miami",
                category: "Food & Dining",
                description: "High-end Korean steakhouse in the Design District offering premium meat cuts and interactive table grilling.",
                mealTypes: ["Dinner"],
                estimatedCostMin: 75,
                estimatedCostMax: 180,
                priceType: "perPerson",
                priceTier: "High-End",
                address: "3900 NE 2nd Ave, Miami, FL 33137",
                cuisine: "Korean steakhouse",
                openingHours: "Dinner service; reservations advised",
                website: "https://www.cotekoreansteakhouse.com/locations/cotemiami",
                reservationRecommended: true
            }
        ],


        // LOCAL TRANSPORTATION


        transportation: [
            "Uber/Lyft",
            "Rental Car",
            "Walking",
            "Metromover",
            "Metrobus",
            "Metrorail"
        ],





        transportationOptions: [
            {
                name: "Uber/Lyft",
                type: "Rideshare",
                description: "App-based rideshare transportation available throughout Miami, Miami Beach, Brickell, Wynwood, Little Havana, and surrounding areas. Convenient for airport transfers, beaches, restaurants, hotels, nightlife, and attractions not served directly by public transportation. Prices vary by distance, traffic, demand, pickup location, and time of day. Airport fees and surge pricing may apply.",
                estimatedCostMin: 12,
                estimatedCostMax: 65,
                priceType: "perRide",
                website: "https://www.uber.com/"
            },
            {
                name: "Rental Car",
                type: "Car Rental",
                description: "Rental vehicles available at Miami International Airport, Fort Lauderdale-Hollywood International Airport, and locations throughout Miami. Useful for visiting Miami Beach, Coral Gables, Key Biscayne, Everglades-area attractions, and destinations outside the transit network. Costs vary by rental dates, vehicle type, company, driver age, and insurance. Fuel, tolls, parking, and optional fees are not included. Parking in Miami Beach and Downtown Miami may be expensive.",
                estimatedCostMin: 45,
                estimatedCostMax: 110,
                priceType: "perDay",
                website: "https://www.enterprise.com/"
            },
            {
                name: "Walking",
                type: "Walking",
                description: "Free transportation for exploring walkable neighborhoods including South Beach, Ocean Drive, Lincoln Road, Brickell, Bayside Marketplace, and parts of Wynwood and Little Havana. Walking is convenient for nearby restaurants, beaches, shopping, and sightseeing. Travel time depends on distance, traffic crossings, heat, and weather conditions.",
                estimatedCostMin: 0,
                estimatedCostMax: 0,
                priceType: "free"
            },
            {
                name: "Metromover",
                type: "Public Transportation",
                description: "Free automated elevated transit system serving Downtown Miami, Brickell, and the Omni area. Useful for visiting Bayside Marketplace, Bayfront Park, Brickell City Centre, and nearby restaurants and attractions. Connects with Metrorail and Metrobus services. Metromover is free for all passengers, although transferring from Metromover to a paid transit service may require a fare.",
                estimatedCostMin: 0,
                estimatedCostMax: 0,
                priceType: "free",
                website: "https://www.miamidade.gov/global/transportation/metromover.page"
            },
            {
                name: "Metrobus",
                type: "Public Transportation",
                description: "Miami-Dade County bus network serving Downtown Miami, Miami Beach, the airport, neighborhoods, shopping areas, and destinations beyond Metrorail stations. The regular fare is $2.25 through December 2026 and is scheduled to increase to $2.75 in January 2027. Eligible transfers between Metrobus and Metrorail are free within the applicable transfer period when using supported electronic payment. Express and inter-county services may have different fares.",
                estimatedCostMin: 2.75,
                estimatedCostMax: 2.75,
                priceType: "perRide",
                website: "https://www.miamidade.gov/global/transportation/metrobus.page"
            },
            {
                name: "Metrorail",
                type: "Public Transportation",
                description: "Miami-Dade County elevated rail system connecting Miami International Airport, Downtown Miami, Brickell, Coconut Grove, Coral Gables-area stations, and southern Miami-Dade County. The regular fare is $2.25 through December 2026 and is scheduled to increase to $2.75 in January 2027. Eligible transfers to Metrobus are free with supported payment. Metrorail does not directly serve Miami Beach; travelers can connect to buses or rideshare.",
                estimatedCostMin: 2.75,
                estimatedCostMax: 2.75,
                priceType: "perRide",
                website: "https://www.miamidade.gov/global/transportation/metrorail.page"
            }
        ],







        hotels: [
            {
                name: "Freehand Miami",
                category: "Budget",
                description: "Budget-friendly boutique hotel in Miami Beach near the ocean, restaurants, nightlife, and public transportation. Offers private hotel rooms and group-friendly accommodations, an outdoor swimming pool, tropical garden courtyard, complimentary Wi-Fi, on-site bars, and complimentary bicycles. The hotel charges a resort fee of $35 plus tax. No private parking lot is available; limited valet parking at a nearby AC Hotel costs $55 plus tax, subject to availability.",
                address: "2727 Indian Creek Drive, Miami Beach, FL 33140, USA",
                estimatedNightlyCostMin: 90,
                estimatedNightlyCostMax: 230,
                priceType: "perNight",
                amenities: [
                    "Complimentary Wi-Fi",
                    "Private rooms available",
                    "Group-friendly accommodations",
                    "Outdoor swimming pool",
                    "Tropical garden courtyard",
                    "Outdoor terrace",
                    "Broken Shaker bar",
                    "Ray's Hometown Bar",
                    "Complimentary bicycle rentals",
                    "Local Tesla ride service",
                    "Air conditioning",
                    "24-hour front desk",
                    "Daily housekeeping",
                    "Guest laundry services",
                    "Luggage storage",
                    "Pet-friendly private rooms",
                    "Nearby beach access",
                    "Nearby public transportation",
                    "Paid off-site parking"
                ],
                parkingCost: null,
                additionalFees: 35,
                website: "https://freehandhotels.com/miami/"

            },
            {
                name: "Hampton Inn & Suites Miami/Brickell-Downtown",
                category: "Mid-Range",
                description: "Recently renovated mid-range hotel in Miami's Brickell neighborhood near Brickell City Centre, restaurants, shopping, and public transportation. Offers complimentary hot breakfast, free Wi-Fi, an outdoor swimming pool, fitness center, comfortable guest rooms, meeting facilities, and EV charging. The property is close to Metromover and Metrorail connections. On-site secured self-parking costs $39 per day; valet parking is not available.",
                address: "50 SW 12th Street, Miami, FL 33130, USA",
                estimatedNightlyCostMin: 150,
                estimatedNightlyCostMax: 350,
                priceType: "perNight",
                amenities: [
                    "Free Wi-Fi",
                    "Complimentary hot breakfast",
                    "Outdoor swimming pool",
                    "Fitness center",
                    "Recently renovated guest rooms",
                    "Flat-screen TVs",
                    "Streaming entertainment",
                    "Connecting rooms available",
                    "On-site restaurant",
                    "Meeting rooms",
                    "Concierge services",
                    "Digital Key",
                    "Electric vehicle charging",
                    "Air conditioning",
                    "Secured covered self-parking",
                    "Nearby Metromover station",
                    "Nearby Metrorail connections",
                    "Walkable Brickell location"
                ],
                parkingCost: 39,
                additionalFees: null,
                website: "https://www.hilton.com/en/hotels/miabvhx-hampton-suites-miami-brickell-downtown/"

            },
            {
                name: "Four Seasons Hotel Miami",
                category: "High-End",
                description: "Luxury five-star hotel on Brickell Avenue offering elegant rooms and suites, skyline and Biscayne Bay views in selected accommodations, a spacious tropical rooftop pool deck, full-service spa, fitness facilities, and upscale restaurants. Located near Brickell City Centre, fine dining, shopping, and nightlife. Daily valet parking costs $65, while adjacent self-parking is listed at $60 per day.",
                address: "1435 Brickell Avenue, Miami, FL 33131, USA",
                estimatedNightlyCostMin: 500,
                estimatedNightlyCostMax: 1100,
                priceType: "perNight",
                amenities: [
                    "Luxury guest rooms and suites",
                    "Wi-Fi",
                    "City views in select rooms",
                    "Biscayne Bay views in select rooms",
                    "Large rooftop pool deck",
                    "Outdoor swimming pool",
                    "Poolside cabanas",
                    "Tropical garden areas",
                    "Over-water hammocks",
                    "Full-service spa",
                    "Equinox fitness center access",
                    "Upscale dining",
                    "Rooftop dining",
                    "Poolside dining",
                    "Cocktail bar",
                    "Concierge services",
                    "Room service",
                    "Air conditioning",
                    "Valet parking",
                    "Nearby paid self-parking",
                    "Nearby Brickell shopping"
                ],
                parkingCost: 65,
                additionalFees: null,
                website: "https://www.fourseasons.com/miami/"

            }
        ],





        vacationRentals: [
            {
                name: "Miami South Beach Art Deco Escape",
                category: "Vacation Rental",
                propertyType: "Entire condo",
                description: "Bright two-bedroom condo in Miami Beach's historic Art Deco district, located one block from South Beach. Features a private balcony overlooking the neighborhood, two queen bedrooms, a fully equipped kitchen, a living room with a futon sleeper, and three Smart TVs. Walking distance to Ocean Drive, Lummus Park, restaurants, shopping, and nightlife. Located on the second floor with no elevator.",
                address: "227 13th Street, Miami Beach, FL, USA",
                estimatedNightlyCostMin: 289.50,
                estimatedNightlyCostMax: 289.50,
                priceType: "perNight",
                maxGuests: 6,
                bedrooms: 2,
                bathrooms: 1,
                amenities: [
                    "Wi-Fi",
                    "Full kitchen",
                    "Private balcony",
                    "Art Deco district views",
                    "Shared beach access nearby",
                    "Two queen beds",
                    "Futon sleeper sofa",
                    "Additional floor mattress",
                    "Three Smart TVs",
                    "Air conditioning",
                    "Ceiling fans",
                    "Coffee maker",
                    "Microwave",
                    "Beach towels",
                    "Self check-in"
                ],
                cleaningFee: null,
                serviceFee: null,
                parkingCost: null,
                website: "https://www.airbnb.com/rooms/49240026"
            },
            {
                name: "Miami Riverfront Artistic Loft",
                category: "Vacation Rental",
                propertyType: "Entire townhouse",
                description: "Unique 2,800-square-foot waterfront loft-style townhouse in Miami's Spring Garden neighborhood along the Miami River. Features three bedrooms, two and a half bathrooms, high ceilings, designer furniture, curated artwork, a waterfront garden, premium Sonos audio, an HD movie projector, and a spacious living area. Conveniently located near Downtown Miami, Wynwood, and Brickell.",
                address: "Spring Garden / Miami River, Miami, FL, USA — exact street address provided after booking",
                estimatedNightlyCostMin: 795.75,
                estimatedNightlyCostMax: 795.75,
                priceType: "perNight",
                maxGuests: 8,
                bedrooms: 3,
                bathrooms: 2.5,
                amenities: [
                    "Wi-Fi",
                    "Kitchen",
                    "Miami River views",
                    "Waterfront garden",
                    "Private outdoor space",
                    "Curated art collection",
                    "High ceilings",
                    "Custom designer furniture",
                    "Sonos sound system",
                    "HD movie projector",
                    "Smart TVs",
                    "King bed",
                    "Queen beds",
                    "Dedicated workspace",
                    "Free on-site parking"
                ],
                cleaningFee: null,
                serviceFee: null,
                parkingCost: 0,
                website: "https://www.airbnb.com/rooms/4223809"
            }
        ]

    },



    // Nashville #9

    {
        id: 9,
        city: "Nashville",
        state: "Tennessee",
        description: "Nashville is the capital of Tennessee, known as Music City for its country music history, live entertainment, Southern cuisine, historic landmarks, shopping, and outdoor attractions.",
        duration: "3-4 days",

        weatherOptions: [
            {

                // WEATHER OPTION 1: SUNNY


                condition: "Sunny",
                month: [
                    "June",
                    "July",
                    "August",
                    "September"
                ],

                // Three main attractions
                attractions: [
                    {
                        name: "Grand Ole Opry",
                        category: "Entertainment",
                        estimatedCost: 55,
                        website: "https://www.opry.com/tours"
                    },
                    {
                        name: "Centennial Park",
                        category: "Outdoor & Nature",
                        estimatedCost: 0,
                        website: "https://www.nashville.gov/departments/parks/parks/centennial-park"
                    },
                    {
                        name: "Fifth + Broadway",
                        category: "Shopping",
                        estimatedCost: 0,
                        website: "https://fifthandb.com/"
                    }
                ],


                // Sunny seasonal events
                event: [
                    {
                        name: "CMA Fest",
                        category: "Festivals and Events",
                        description: "Experience Nashville's annual country music festival featuring live performances, country music artists, fan experiences, concerts, and entertainment throughout downtown Nashville.",
                        estimatedCostMin: 0,
                        estimatedCostMax: null,
                        priceType: "perPerson",
                        startDate: "2027-06-10",
                        endDate: "2027-06-13",
                        estimatedDuration: 240,
                        location: "Downtown Nashville and Nissan Stadium, Nashville, TN",
                        website: "https://cmafest.com/"
                    },
                    {
                        name: "Let Freedom Sing! Music City July 4th",
                        category: "Festivals and Events",
                        description: "Celebrate Independence Day with free live music, family-friendly activities, outdoor entertainment, and a large fireworks celebration in downtown Nashville.",
                        estimatedCostMin: 0,
                        estimatedCostMax: 0,
                        priceType: "perPerson",
                        startDate: "2027-07-04",
                        endDate: "2027-07-04",
                        estimatedDuration: 240,
                        location: "Downtown Nashville, Broadway and Cumberland Riverfront, Nashville, TN",
                        website: "https://www.visitmusiccity.com/july4th"
                    }
                ]
            },

            {

                // WEATHER OPTION 2: COOL


                condition: "Cool",
                month: [
                    "October",
                    "November"
                ],

                // Three main attractions
                attractions: [
                    {
                        name: "Country Music Hall of Fame",
                        category: "Museums & Art",
                        estimatedCost: 32,
                        website: "https://www.countrymusichalloffame.org/"
                    },
                    {
                        name: "Ryman Auditorium",
                        category: "History & Culture",
                        estimatedCost: 35,
                        website: "https://www.ryman.com/tours"
                    },
                    {
                        name: "Broadway Honky Tonk",
                        category: "Nightlife",
                        estimatedCost: 0,
                        website: "https://www.visitmusiccity.com/nashville-neighborhoods/downtown"
                    }
                ],


                // Cool seasonal events
                event: [
                    {
                        name: "Cheekwood Harvest",
                        category: "Festivals and Events",
                        description: "Celebrate autumn at Cheekwood Estate and Gardens with thousands of pumpkins, seasonal flowers, fall garden displays, outdoor activities, and live entertainment.",
                        estimatedCostMin: 25,
                        estimatedCostMax: 35,
                        priceType: "perPerson",
                        startDate: "2026-09-19",
                        endDate: "2026-11-01",
                        estimatedDuration: 180,
                        location: "Cheekwood Estate and Gardens, 1200 Forrest Park Drive, Nashville, TN 37205",
                        website: "https://cheekwood.org/calendar-events/cheekwood-harvest/"
                    },
                    {
                        name: "Celebrate Nashville Cultural Festival",
                        category: "Festivals and Events",
                        description: "Experience Nashville's multicultural festival featuring international music, cultural dance performances, global food vendors, arts, crafts, and family-friendly activities.",
                        estimatedCostMin: 0,
                        estimatedCostMax: 0,
                        priceType: "perPerson",
                        startDate: "2026-10-03",
                        endDate: "2026-10-03",
                        startTime: "10:00",
                        endTime: "18:00",
                        estimatedDuration: 180,
                        location: "Centennial Park, 2500 West End Avenue, Nashville, TN 37203",
                        website: "https://celebratenashville.org/"
                    }
                ]
            }
        ],

        // Shared activities available for both Sunny and Cool weather
        activities: [
            {
                // Activity 1: Outdoor & Nature
                name: "John Seigenthaler Pedestrian Bridge Walk",
                category: "Outdoor & Nature",
                description: "Walk across a scenic pedestrian bridge over the Cumberland River and enjoy views of the Nashville skyline, downtown buildings, and riverfront.",
                estimatedCostMin: 0,
                estimatedCostMax: 0,
                priceType: "perPerson",
                estimatedDuration: 60,
                location: "John Seigenthaler Pedestrian Bridge, Nashville, TN 37213",
                openingHours: "Public pedestrian access; check for closures",
                website: "https://www.visitmusiccity.com/"
            },
            {
                // Activity 2: Food & Dining
                name: "Nashville Farmers Market Food Hall",
                category: "Food & Dining",
                description: "Explore a local marketplace featuring restaurants, food vendors, specialty shops, and regional Southern cuisine.",
                estimatedCostMin: 0,
                estimatedCostMax: 35,
                priceType: "perPerson",
                estimatedDuration: 90,
                location: "900 Rosa L Parks Boulevard, Nashville, TN 37208",
                openingHours: "Vendor hours vary; verify before visiting",
                website: "https://www.nashvillefarmersmarket.org/"
            },
            {
                // Activity 3: Shopping
                name: "12South Neighborhood Shopping",
                category: "Shopping",
                description: "Explore Nashville's 12South neighborhood featuring local boutiques, vintage clothing shops, coffee houses, restaurants, and colorful murals.",
                estimatedCostMin: 0,
                estimatedCostMax: 100,
                priceType: "perPerson",
                estimatedDuration: 120,
                location: "12th Avenue South, Nashville, TN 37204",
                openingHours: "Varies by store",
                website: "https://www.visitmusiccity.com/nashville-neighborhoods/12south"
            },
            {
                // Activity 4: History & Culture
                name: "Bicentennial Capitol Mall State Park Walk",
                category: "History & Culture",
                description: "Explore an outdoor state park featuring Tennessee history exhibits, monuments, fountains, walking paths, and views of the State Capitol.",
                estimatedCostMin: 0,
                estimatedCostMax: 0,
                priceType: "perPerson",
                estimatedDuration: 90,
                location: "600 James Robertson Parkway, Nashville, TN 37243",
                openingHours: "Verify posted park hours",
                website: "https://tnstateparks.com/parks/bicentennial-mall"
            },
            {
                // Activity 5: Sports & Recreation
                name: "Radnor Lake State Park Nature Walk",
                category: "Outdoor & Nature",
                description: "Explore peaceful hiking trails around Radnor Lake while enjoying forest scenery, wildlife viewing, and natural landscapes.",
                estimatedCostMin: 0,
                estimatedCostMax: 0,
                priceType: "perPerson",
                estimatedDuration: 120,
                location: "1160 Otter Creek Road, Nashville, TN 37220",
                openingHours: "Verify trail access hours and park regulations",
                website: "https://tnstateparks.com/parks/radnor-lake"
            },
            {
                // Activity 1: History & Culture
                name: "Tennessee State Museum Visit",
                category: "History & Culture",
                description: "Explore free museum exhibits showcasing Tennessee's history, culture, historical artifacts, and important events.",
                estimatedCostMin: 0,
                estimatedCostMax: 0,
                priceType: "perPerson",
                estimatedDuration: 150,
                location: "1000 Rosa L Parks Boulevard, Nashville, TN 37208",
                openingHours: "Tue-Sat 10 AM-5 PM; Sun 1 PM-5 PM; closed Monday",
                website: "https://tnmuseum.org/"
            },
            {
                // Activity 2: Museums & Art
                name: "National Museum of African American Music",
                category: "Museums & Art",
                description: "Explore interactive exhibits highlighting African American contributions to music, including gospel, blues, jazz, R&B, hip-hop, and other musical genres.",
                estimatedCostMin: 30,
                estimatedCostMax: 40,
                priceType: "perPerson",
                estimatedDuration: 150,
                location: "510 Broadway, Nashville, TN 37203",
                openingHours: "Verify current museum hours",
                website: "https://www.nmaam.org/"
            },
            {
                // Activity 3: Museums & Art
                name: "Frist Art Museum Visit",
                category: "Museums & Art",
                description: "Explore rotating art exhibitions featuring local, national, and international artists inside a historic Art Deco building.",
                estimatedCostMin: 15,
                estimatedCostMax: 25,
                priceType: "perPerson",
                estimatedDuration: 120,
                location: "919 Broadway, Nashville, TN 37203",
                openingHours: "Verify current museum and exhibition hours",
                website: "https://fristartmuseum.org/"
            },
            {
                // Activity 4: Family Friendly
                name: "Adventure Science Center Visit",
                category: "Family Friendly",
                description: "Explore hands-on science exhibits, interactive displays, educational activities, and planetarium experiences.",
                estimatedCostMin: 20,
                estimatedCostMax: 35,
                priceType: "perPerson",
                estimatedDuration: 180,
                location: "800 Fort Negley Boulevard, Nashville, TN 37203",
                openingHours: "Mon and Thu-Fri 9 AM-3 PM; Sat-Sun 9 AM-5 PM; closed Tue-Wed",
                website: "https://www.adventuresci.org/"
            },
            {
                // Activity 5: Entertainment
                name: "Musicians Hall of Fame & Museum Visit",
                category: "Entertainment",
                description: "Explore musical instruments, recording history, interactive exhibits, and displays honoring musicians and recording artists across different genres.",
                estimatedCostMin: 25,
                estimatedCostMax: 35,
                priceType: "perPerson",
                estimatedDuration: 120,
                location: "401 Gay Street, Nashville, TN 37219",
                openingHours: "Mon-Sat 10 AM-5 PM; holiday hours may vary",
                website: "https://www.musicianshalloffame.com/"
            }],


        // NASHVILLE RESTAURANTS
        // Per meal: 1 Budget, 2 Mid-Range, 1 High-End.

        breakfast: [
            {
                name: "Biscuit Love",
                category: "Food & Dining",
                description: "Southern breakfast and brunch counter famous for Bonuts, biscuits, shrimp and grits, and the East Nasty breakfast sandwich.",
                mealTypes: ["Breakfast"],
                estimatedCostMin: 15,
                estimatedCostMax: 30,
                priceType: "perPerson",
                priceTier: "Mid-Range",
                address: "316 11th Avenue South, Nashville, TN 37203",
                cuisine: "Southern breakfast and biscuits",
                openingHours: "Daily 7 AM-3 PM; holiday exceptions",
                website: "https://www.biscuitlove.com/locations/gulch",
                reservationRecommended: false
            },
            {
                name: "Pancake Pantry",
                category: "Food & Dining",
                description: "Longstanding Nashville pancake restaurant serving scratch-made pancakes, omelets, and breakfast classics in Hillsboro Village.",
                mealTypes: ["Breakfast"],
                estimatedCostMin: 12,
                estimatedCostMax: 28,
                priceType: "perPerson",
                priceTier: "Budget",
                address: "1796 21st Avenue South, Nashville, TN 37212",
                cuisine: "American breakfast and pancakes",
                openingHours: "Daily 6 AM-3 PM; confirm holiday hours",
                website: "https://thepancakepantry.com/",
                reservationRecommended: false
            },
            {
                name: "Monell’s",
                category: "Food & Dining",
                description: "Historic Germantown family-style Southern restaurant serving shared platters of fried chicken, biscuits, eggs, and rotating country favorites.",
                mealTypes: ["Breakfast"],
                estimatedCostMin: 20,
                estimatedCostMax: 40,
                priceType: "perPerson",
                priceTier: "Mid-Range",
                address: "1235 6th Avenue North, Nashville, TN 37208",
                cuisine: "Family-style Southern comfort food",
                openingHours: "Breakfast available on weekends; confirm current meal schedule",
                website: "https://monellstn.com/",
                reservationRecommended: false
            },
            {
                name: "Adele’s weekend brunch",
                category: "Food & Dining",
                description: "Upscale weekend brunch buffet in The Gulch with seasonal Southern-American dishes, brunch favorites, and desserts.",
                mealTypes: ["Breakfast"],
                estimatedCostMin: 45,
                estimatedCostMax: 75,
                priceType: "perPerson",
                priceTier: "High-End",
                address: "1210 McGavock Street, Nashville, TN 37203",
                cuisine: "Modern American brunch buffet",
                openingHours: "Sat-Sun 9:30 AM-2 PM brunch buffet only",
                website: "https://www.adelesnashville.com/location/adeles-nashville/",
                reservationRecommended: true
            }
        ],

        lunch: [
            {
                name: "Prince’s Hot Chicken",
                category: "Food & Dining",
                description: "Original Nashville hot chicken specialist serving spice-level fried chicken with Southern sides at Assembly Food Hall.",
                mealTypes: ["Lunch"],
                estimatedCostMin: 13,
                estimatedCostMax: 28,
                priceType: "perPerson",
                priceTier: "Budget",
                address: "5055 Broadway, Nashville, TN 37203",
                cuisine: "Nashville hot chicken",
                openingHours: "Lunch and dinner; see Assembly Food Hall vendor hours",
                website: "https://www.princeshotchicken.com/",
                reservationRecommended: false
            },
            {
                name: "Hattie B’s Hot Chicken",
                category: "Food & Dining",
                description: "Popular Nashville counter-service hot chicken restaurant offering sandwiches, tenders, wings, and Southern sides.",
                mealTypes: ["Lunch"],
                estimatedCostMin: 15,
                estimatedCostMax: 30,
                priceType: "perPerson",
                priceTier: "Budget",
                address: "112 19th Avenue South, Nashville, TN 37203",
                cuisine: "Nashville hot chicken",
                openingHours: "Lunch and dinner daily; check location hours",
                website: "https://www.hattieb.com/",
                reservationRecommended: false
            },
            {
                name: "The Pharmacy Burger Parlor",
                category: "Food & Dining",
                description: "East Nashville burger garden specializing in burgers, sausages, shakes, and house-made sodas.",
                mealTypes: ["Lunch"],
                estimatedCostMin: 18,
                estimatedCostMax: 35,
                priceType: "perPerson",
                priceTier: "Mid-Range",
                address: "731 McFerrin Avenue, Nashville, TN 37206",
                cuisine: "Burgers and American comfort food",
                openingHours: "Lunch and dinner; check official hours",
                website: "https://thepharmacyburger.com/",
                reservationRecommended: false
            },
            {
                name: "The Southern Steak & Oyster",
                category: "Food & Dining",
                description: "Downtown SoBro restaurant serving Southern-inspired steak, seafood, freshly shucked oysters, and lunch plates.",
                mealTypes: ["Lunch"],
                estimatedCostMin: 25,
                estimatedCostMax: 65,
                priceType: "perPerson",
                priceTier: "High-End",
                address: "150 3rd Avenue South, Nashville, TN 37201",
                cuisine: "Southern steak and seafood",
                openingHours: "Lunch and dinner; verify current daily hours",
                website: "https://www.thesouthernnashville.com/",
                reservationRecommended: true
            }
        ],

        dinner: [
            {
                name: "Martin’s Bar-B-Que Joint",
                category: "Food & Dining",
                description: "Tennessee whole-hog barbecue restaurant serving smoked meats, ribs, brisket, and classic Southern sides.",
                mealTypes: ["Dinner"],
                estimatedCostMin: 18,
                estimatedCostMax: 40,
                priceType: "perPerson",
                priceTier: "Budget",
                address: "410 4th Avenue South, Nashville, TN 37201",
                cuisine: "Tennessee barbecue",
                openingHours: "Lunch and dinner daily; check venue hours",
                website: "https://www.martinsbbqjoint.com/visit",
                reservationRecommended: false
            },
            {
                name: "The Stillery",
                category: "Food & Dining",
                description: "Downtown Nashville restaurant offering Southern comfort food, burgers, pizza, hot chicken, and live music.",
                mealTypes: ["Dinner"],
                estimatedCostMin: 20,
                estimatedCostMax: 45,
                priceType: "perPerson",
                priceTier: "Mid-Range",
                address: "113 2nd Avenue North, Nashville, TN 37201",
                cuisine: "American comfort food",
                openingHours: "Lunch and dinner; evening live music and hours vary",
                website: "https://stillerynashville.com/",
                reservationRecommended: true
            },
            {
                name: "Rolf and Daughters",
                category: "Food & Dining",
                description: "Germantown restaurant known for handmade pasta, seasonal small plates, and inventive Italian-inspired cuisine.",
                mealTypes: ["Dinner"],
                estimatedCostMin: 35,
                estimatedCostMax: 80,
                priceType: "perPerson",
                priceTier: "Mid-Range",
                address: "700 Taylor Street, Nashville, TN 37208",
                cuisine: "Modern Italian-inspired",
                openingHours: "Daily 5 PM-10 PM",
                website: "https://www.rolfanddaughters.com/contact",
                reservationRecommended: true
            },
            {
                name: "The Catbird Seat",
                category: "Food & Dining",
                description: "Intimate chef-led multi-course tasting-menu restaurant with a creative open-kitchen experience in the South Gulch.",
                mealTypes: ["Dinner"],
                estimatedCostMin: 200,
                estimatedCostMax: 350,
                priceType: "perPerson",
                priceTier: "High-End",
                address: "700 8th Avenue South, 5th Floor, Nashville, TN 37203",
                cuisine: "Chef-led tasting menu",
                openingHours: "Wed-Sat 5 PM-9 PM; advance reservations essential",
                website: "https://www.thecatbirdseatrestaurant.com/",
                reservationRecommended: true
            }
        ],

        // ==========================================
        // LOCAL TRANSPORTATION
        // ==========================================

        transportation: [
            "Uber/Lyft",
            "Rental Car",
            "Walking",
            "WeGo Buses"
        ],



        // NASHVILLE — DETAILED TRANSPORTATION OPTIONS


        transportationOptions: [
            {
                name: "Uber/Lyft",
                type: "Rideshare",
                description: "App-based rideshare transportation available throughout Nashville and surrounding areas. Convenient for Nashville International Airport transfers, Downtown Broadway, Music Row, The Gulch, East Nashville, restaurants, hotels, and nightlife. Fares vary by distance, traffic, demand, pickup location, and time of day. Airport fees and surge pricing may apply.",
                estimatedCostMin: 12,
                estimatedCostMax: 60,
                priceType: "perRide",
                website: "https://www.uber.com/"
            },
            {
                name: "Rental Car",
                type: "Car Rental",
                description: "Rental vehicles available at Nashville International Airport and throughout the Nashville metropolitan area. Useful for exploring attractions outside downtown, including the Grand Ole Opry, Belle Meade, nearby state parks, and surrounding Tennessee towns. Rental rates vary by travel dates, vehicle type, driver age, rental company, and insurance coverage. Fuel, parking, tolls, and optional fees are not included. Parking in Downtown Nashville can be expensive.",
                estimatedCostMin: 45,
                estimatedCostMax: 110,
                priceType: "perDay",
                website: "https://www.enterprise.com/"
            },
            {
                name: "Walking",
                type: "Walking",
                description: "Free transportation for exploring walkable parts of Downtown Nashville, including Lower Broadway, Bridgestone Arena, Ryman Auditorium, Country Music Hall of Fame, Music City Center, and nearby restaurants and entertainment venues. Some Midtown, Gulch, and East Nashville attractions require longer trips. Walking times depend on distance, hills, weather, and pedestrian conditions.",
                estimatedCostMin: 0,
                estimatedCostMax: 0,
                priceType: "free"
            },
            {
                name: "WeGo Buses",
                type: "Public Transportation",
                description: "Nashville's WeGo Public Transit local bus network connects Downtown Nashville, Vanderbilt, Music Row-area stops, surrounding neighborhoods, and Nashville International Airport via Route 18. Standard adult fare is $2 for two hours of unlimited eligible rides when paying with QuickTicket or supported contactless payment. The daily fare cap is $4. Exact-cash payment is $2 per boarding without transfers. Regional bus and train services have separate fares.",
                estimatedCostMin: 2,
                estimatedCostMax: 2,
                priceType: "per2Hours",
                website: "https://www.wegotransit.com/buy/fare-information/"
            }
        ],




        // NASHVILLE — THREE REAL HOTELS
        // Budget, Mid-Range, and High-End


        hotels: [
            {
                name: "Hampton Inn Nashville/Vanderbilt",
                category: "Budget",
                description: "Value-oriented hotel in Nashville's Midtown and Vanderbilt area near Music Row, Centennial Park, and local restaurants. Offers complimentary hot breakfast, free Wi-Fi, an outdoor swimming pool, fitness center, and comfortable standard guest rooms. Convenient for visitors exploring Vanderbilt University and central Nashville. On-site self-parking costs $35 per day. Guest reviews indicate some rooms and facilities may be dated.",
                address: "1919 West End Avenue, Nashville, TN 37203, USA",
                estimatedNightlyCostMin: 110,
                estimatedNightlyCostMax: 240,
                priceType: "perNight",
                amenities: [
                    "Free Wi-Fi",
                    "Complimentary hot breakfast",
                    "Outdoor swimming pool",
                    "Fitness center",
                    "Standard guest rooms",
                    "Air conditioning",
                    "Flat-screen TVs",
                    "Connecting rooms available",
                    "Digital Key",
                    "Meeting rooms",
                    "Pet-friendly accommodations",
                    "On-site self-parking",
                    "Nearby restaurants",
                    "Near Vanderbilt University",
                    "Near Music Row",
                    "Near Centennial Park"
                ],
                parkingCost: 35,
                additionalFees: null,
                website: "https://www.hilton.com/en/hotels/bnavnhx-hampton-nashville-vanderbilt/"
                // $125 for stays of 5 or more nights.
            },
            {
                name: "Drury Plaza Hotel Nashville Downtown",
                category: "Mid-Range",
                description: "Modern downtown Nashville hotel in the SoBro district within walking distance of Broadway, Bridgestone Arena, Ryman Auditorium, Music City Center, and the Country Music Hall of Fame. Features complimentary hot breakfast, free Wi-Fi, Drury's evening 5:30 Kickback food service, an indoor/outdoor swimming pool, whirlpool, fitness center, and an on-site restaurant and bar. Covered on-site parking costs $45 plus tax per night.",
                address: "300 Korean Veterans Boulevard, Nashville, TN 37201, USA",
                estimatedNightlyCostMin: 190,
                estimatedNightlyCostMax: 390,
                priceType: "perNight",
                amenities: [
                    "Free Wi-Fi",
                    "Complimentary hot breakfast",
                    "Complimentary 5:30 Kickback",
                    "Indoor and outdoor swimming pool",
                    "Whirlpool",
                    "Rooftop pool area",
                    "24-hour fitness center",
                    "24-hour business center",
                    "The Kitchen + Bar at SOBRO",
                    "Live music at on-site restaurant",
                    "Standard guest rooms and suites",
                    "In-room refrigerator",
                    "In-room microwave",
                    "Flat-screen TV",
                    "Air conditioning",
                    "Guest laundry facilities",
                    "Pet-friendly accommodations",
                    "Covered on-site parking",
                    "Walking distance to Broadway",
                    "Near Country Music Hall of Fame",
                    "Near Bridgestone Arena"
                ],
                parkingCost: 45,
                additionalFees: null,
                website: "https://www.druryhotels.com/locations/nashville-tn/drury-plaza-hotel-nashville-downtown"
            },
            {
                name: "The Hermitage Hotel",
                category: "High-End",
                description: "Historic five-star luxury hotel in Downtown Nashville near the Tennessee State Capitol, Ryman Auditorium, and Broadway entertainment district. Originally opened in 1910, the hotel features elegant rooms and suites, marble bathrooms, upscale dining at Drusie & Darr, The Pink Hermit cafe, afternoon tea, concierge services, and a fitness center. Overnight valet parking costs $58 plus tax. Breakfast is not automatically included. The hotel does not have a swimming pool.",
                address: "231 6th Avenue North, Nashville, TN 37219, USA",
                estimatedNightlyCostMin: 450,
                estimatedNightlyCostMax: 950,
                priceType: "perNight",
                amenities: [
                    "Complimentary Wi-Fi",
                    "Luxury guest rooms and suites",
                    "Historic Beaux-Arts architecture",
                    "Grand hotel lobby",
                    "Marble bathrooms",
                    "Deep soaking bathtubs",
                    "Separate showers in select rooms",
                    "Premium bedding",
                    "Luxury bathroom amenities",
                    "Drusie & Darr restaurant",
                    "The Pink Hermit cafe",
                    "Afternoon tea service",
                    "In-room dining",
                    "24-hour fitness center",
                    "Concierge services",
                    "Business center",
                    "Pet-friendly accommodations",
                    "Valet parking",
                    "Air conditioning",
                    "Near Tennessee State Capitol",
                    "Walking distance to Downtown attractions"
                ],
                parkingCost: 58,
                additionalFees: null,
                website: "https://thehermitagehotel.com/"
                // in a selected room package.
            }
        ],







        vacationRentals: [
            {
                name: "Nashville Secret Speakeasy Hideaway",
                category: "Vacation Rental",
                propertyType: "Entire condo",
                description: "Unique speakeasy-themed condo in Downtown Nashville featuring secret doors, exposed brick, atmospheric lighting, a hidden Jungle Room with a king bed, a Peacock Room with a queen bed, and a glowing gold bathroom. Includes a fully equipped kitchen, coffee bar, Smart TVs, and two additional folding beds. Walking distance to Broadway, Printer's Alley, and the Ryman Auditorium.",
                address: "Downtown Nashville, TN, USA — exact street address provided after booking",
                estimatedNightlyCostMin: 231.75,
                estimatedNightlyCostMax: 231.75,
                priceType: "perNight",
                maxGuests: 6,
                bedrooms: 2,
                bathrooms: 1,
                amenities: [
                    "Wi-Fi",
                    "Full kitchen",
                    "Hidden bookshelf door",
                    "Secret themed rooms",
                    "Exposed brick interior",
                    "Custom ambient lighting",
                    "Gold-themed bathroom",
                    "King bed",
                    "Queen bed",
                    "Two folding guest beds",
                    "Coffee bar",
                    "Smart TVs",
                    "Dedicated workspace",
                    "Private street-level entrance",
                    "Shared building laundry",
                    "Elevator access through building"
                ],
                cleaningFee: null,
                serviceFee: null,
                parkingCost: null,
                website: "https://www.airbnb.com/rooms/878440666274505872"
            },
            {
                name: "Nashville Vintage Music City Bungalow",
                category: "Vacation Rental",
                propertyType: "Entire house",
                description: "Restored 1920s Craftsman home in East Nashville featuring exposed brick walls, colorful vintage-inspired interiors, four bedrooms, a private backyard hot tub, a shuffleboard game room, a vintage record player, and a spacious outdoor deck. Includes a fire pit, barbecue grill, fenced dog run, garden, and driveway parking. Located near East Nashville restaurants and coffee shops.",
                address: "East Nashville, Nashville, TN, USA — exact street address provided after booking",
                estimatedNightlyCostMin: 257.50,
                estimatedNightlyCostMax: 257.50,
                priceType: "perNight",
                maxGuests: 9,
                bedrooms: 4,
                bathrooms: 2,
                amenities: [
                    "Wi-Fi",
                    "Full kitchen",
                    "Private hot tub",
                    "Game room",
                    "Shuffleboard table",
                    "Vintage record player",
                    "Exposed brick interior",
                    "Clawfoot bathtub",
                    "Outdoor deck",
                    "Barbecue grill",
                    "Fire pit",
                    "Backyard garden",
                    "Fenced dog run",
                    "Dedicated workspace",
                    "Free driveway parking"
                ],
                cleaningFee: null,
                serviceFee: null,
                parkingCost: 0,
                website: "https://www.airbnb.com/rooms/33153162"
            }
        ]

    },



    // New Orleans #10

    {


        id: 10,
        city: "New Orleans",
        state: "Louisiana",
        description: "New Orleans is a vibrant Louisiana city known for its jazz music, Creole and Cajun cuisine, historic French Quarter, colorful architecture, cultural festivals, and lively entertainment.",
        duration: "3-4 days",

        weatherOptions: [
            {

                // WEATHER OPTION 1: HOT

                condition: "Hot",
                month: [
                    "June",
                    "July",
                    "August",
                    "September"
                ],

                // Three main attractions
                attractions: [
                    {
                        name: "The National WWII Museum",
                        category: "Museums & Art",
                        estimatedCost: 42,
                        website: "https://www.nationalww2museum.org/visit/plan-your-visit"
                    },
                    {
                        name: "Audubon Aquarium",
                        category: "Museums & Art",
                        estimatedCost: 35,
                        website: "https://audubonnatureinstitute.org/aquarium"
                    },
                    {
                        name: "New Orleans Riverwalk Outlets",
                        category: "Shopping",
                        estimatedCost: 0,
                        website: "https://www.riverwalkneworleans.com/"
                    }
                ],



                // Hot seasonal events
                event: [
                    {
                        name: "Go Fourth on the River",
                        category: "Festivals and Events",
                        description: "Celebrate Independence Day along the New Orleans riverfront with a free fireworks display over the Mississippi River and views of the historic French Quarter skyline.",
                        estimatedCostMin: 0,
                        estimatedCostMax: 0,
                        priceType: "perPerson",
                        startDate: "2027-07-04",
                        endDate: "2027-07-04",
                        startTime: "21:00",
                        estimatedDuration: 90,
                        location: "Woldenberg Riverfront Park and Mississippi Riverfront, New Orleans, LA 70130",
                        website: "https://www.go4thontheriver.com/"
                    },
                    {
                        name: "Satchmo SummerFest",
                        category: "Festivals and Events",
                        description: "Celebrate Louis Armstrong and the jazz heritage of New Orleans with live jazz performances, traditional music, Louisiana cuisine, cultural programming, and educational seminars.",
                        estimatedCostMin: 0,
                        estimatedCostMax: 0,
                        priceType: "perPerson",
                        startDate: "2027-07-31",
                        endDate: "2027-08-01",
                        estimatedDuration: 180,
                        location: "New Orleans Jazz Museum, 400 Esplanade Avenue, New Orleans, LA 70116",
                        website: "https://fqfi.org/"
                    }
                ]
            },

            {

                // WEATHER OPTION 2: MILD


                condition: "Mild",
                month: [
                    "October",
                    "November",
                    "December",
                    "January",
                    "February",
                    "March"
                ],

                // Three main attractions
                attractions: [
                    {
                        name: "Jackson Square",
                        category: "Sightseeing & Landmarks",
                        estimatedCost: 0,
                        website: "https://www.neworleans.com/things-to-do/attractions/jackson-square/"
                    },
                    {
                        name: "French Market",
                        category: "Shopping",
                        estimatedCost: 0,
                        website: "https://www.frenchmarket.org/"
                    },
                    {
                        name: "Frenchmen Street",
                        category: "Nightlife",
                        estimatedCost: 0,
                        website: "https://www.neworleans.com/plan/neighborhoods/marigny-bywater/frenchmen-street/"
                    }
                ],



                // Mild seasonal events
                event: [
                    {
                        name: "Krewe of BOO! Halloween Parade",
                        category: "Festivals and Events",
                        description: "Celebrate Halloween with a Mardi Gras-style parade featuring spooky floats, marching bands, dance groups, festive costumes, and Halloween-themed throws through downtown New Orleans.",
                        estimatedCostMin: 0,
                        estimatedCostMax: 0,
                        priceType: "perPerson",
                        startDate: "2027-10-23",
                        endDate: "2027-10-23",
                        startTime: "18:30",
                        estimatedDuration: 120,
                        location: "French Quarter and Downtown New Orleans, LA",
                        website: "https://www.kreweofboo.com/halloweenparade"
                    },
                    {
                        name: "Celebration in the Oaks",
                        category: "Festivals and Events",
                        description: "Experience a holiday light festival in New Orleans City Park with illuminated oak trees, festive displays, walking and driving light tours, and seasonal entertainment.",
                        estimatedCostMin: 25,
                        estimatedCostMax: 45,
                        priceType: "perPerson",
                        startDate: "2026-11-27",
                        endDate: "2027-01-01",
                        estimatedDuration: 120,
                        location: "New Orleans City Park, New Orleans, LA 70124",
                        website: "https://celebrationintheoaks.com/"
                    },

                ],
            }
        ],

        activities: [

            {
                // Activity 1: History & Culture
                name: "Mardi Gras World Studio Tour",
                category: "History & Culture",
                description: "Explore a working Mardi Gras float production facility and discover how the colorful floats, sculptures, and decorations are created for New Orleans parades.",
                estimatedCostMin: 26,
                estimatedCostMax: 30,
                priceType: "perPerson",
                estimatedDuration: 90,
                location: "1380 Port of New Orleans Place, New Orleans, LA 70130",
                openingHours: "Tour times vary; confirm before visiting",
                website: "https://mardigrasworld.com/"
            },
            {
                // Activity 2: Museums & Art
                name: "Ogden Museum of Southern Art Visit",
                category: "Museums & Art",
                description: "Explore paintings, photography, sculptures, and exhibitions celebrating the art and cultural traditions of the American South.",
                estimatedCostMin: 15,
                estimatedCostMax: 20,
                priceType: "perPerson",
                estimatedDuration: 120,
                location: "925 Camp Street, New Orleans, LA 70130",
                openingHours: "Daily hours vary; verify before visiting",
                website: "https://ogdenmuseum.org/"
            },
            {
                // Activity 3: Food & Dining
                name: "Cafe Du Monde Beignet Experience",
                category: "Food & Dining",
                description: "Enjoy traditional New Orleans beignets covered in powdered sugar and experience one of the city's most famous coffee stands.",
                estimatedCostMin: 6,
                estimatedCostMax: 15,
                priceType: "perPerson",
                estimatedDuration: 60,
                location: "800 Decatur Street, New Orleans, LA 70116",
                openingHours: "Daily; opening hours may change",
                website: "https://shop.cafedumonde.com/"
            },
            {
                // Activity 4: History & Culture
                name: "The Historic New Orleans Collection",
                category: "History & Culture",
                description: "Explore historical exhibitions, photographs, artifacts, and galleries documenting the history and culture of New Orleans and the Gulf South.",
                estimatedCostMin: 0,
                estimatedCostMax: 0,
                priceType: "perPerson",
                estimatedDuration: 120,
                location: "520 Royal Street, New Orleans, LA 70130",
                openingHours: "Gallery hours vary; check official website",
                website: "https://www.hnoc.org/"
            },
            {
                // Activity 5: Family Friendly
                name: "Louisiana Children's Museum Visit",
                category: "Family Friendly",
                description: "Enjoy interactive exhibits featuring science, creative play, nature, learning activities, and Louisiana culture inside a family-oriented museum.",
                estimatedCostMin: 16,
                estimatedCostMax: 20,
                priceType: "perPerson",
                estimatedDuration: 150,
                location: "15 Henry Thomas Drive, New Orleans, LA 70124",
                openingHours: "Ticketed visiting hours vary by day",
                website: "https://lcm.org/"
            },

            {
                // Activity 1: Outdoor & Nature
                name: "New Orleans City Park Sculpture Garden",
                category: "Outdoor & Nature",
                description: "Explore the Sydney and Walda Besthoff Sculpture Garden, featuring outdoor artwork, landscaped walking paths, lagoons, and beautiful oak trees.",
                estimatedCostMin: 0,
                estimatedCostMax: 0,
                priceType: "perPerson",
                estimatedDuration: 120,
                location: "1 Collins Diboll Circle, New Orleans, LA 70124",
                openingHours: "Daylight hours; confirm on official site",
                website: "https://noma.org/sculpture-garden/"
            },
            {
                // Activity 2: History & Culture
                name: "Garden District Historic Walking Experience",
                category: "History & Culture",
                description: "Walk through the historic Garden District to admire nineteenth-century mansions, beautiful gardens, oak-lined streets, and distinctive New Orleans architecture.",
                estimatedCostMin: 0,
                estimatedCostMax: 0,
                priceType: "perPerson",
                estimatedDuration: 120,
                location: "Garden District, New Orleans, LA 70115",
                openingHours: "Self-guided outdoor walk",
                website: "https://www.neworleans.com/"
            },
            {
                // Activity 3: Food & Dining
                name: "Gumbo Shop Creole Dining Experience",
                category: "Food & Dining",
                description: "Experience traditional New Orleans cuisine, including gumbo and other Louisiana dishes, at a restaurant in the historic French Quarter.",
                estimatedCostMin: 20,
                estimatedCostMax: 40,
                priceType: "perPerson",
                estimatedDuration: 90,
                location: "630 Saint Peter Street, New Orleans, LA 70116",
                openingHours: "Check current service hours",
                website: "https://www.gumboshop.com/"
            },
            {
                // Activity 4: Shopping
                name: "Magazine Street Boutique Shopping",
                category: "Shopping",
                description: "Explore a popular New Orleans shopping corridor featuring independent boutiques, antique stores, art galleries, coffee shops, and restaurants.",
                estimatedCostMin: 0,
                estimatedCostMax: 100,
                priceType: "perPerson",
                estimatedDuration: 150,
                location: "Magazine Street, New Orleans, LA",
                openingHours: "Varies by store",
                website: "https://www.magazinestreet.com/"
            },
            {
                // Activity 5: Entertainment
                name: "Preservation Hall Traditional Jazz Performance",
                category: "Entertainment",
                description: "Experience a live performance of traditional New Orleans jazz inside one of the city's best-known historic music venues.",
                estimatedCostMin: 25,
                estimatedCostMax: 60,
                priceType: "perPerson",
                estimatedDuration: 60,
                location: "726 Saint Peter Street, New Orleans, LA 70116",
                openingHours: "Showtimes vary; book ahead",
                website: "https://www.preservationhall.com/"
            }
        ],



        breakfast: [
            {
                name: "Molly's Rise and Shine",
                category: "Food & Dining",
                description: "Breakfast cafe serving creative breakfast sandwiches, biscuit plates, and casual morning favorites in the Lower Garden District.",
                mealTypes: ["Breakfast"],
                estimatedCostMin: 8,
                estimatedCostMax: 22,
                priceType: "perPerson",
                priceTier: "Budget",
                address: "2368 Magazine Street, New Orleans, LA 70130",
                cuisine: "Creative American breakfast",
                openingHours: "Breakfast and lunch; check official website",
                website: "https://www.mollysriseandshine.com/",
                reservationRecommended: false
            },
            {
                name: "Ruby Slipper Cafe",
                category: "Food & Dining",
                description: "Local breakfast and brunch restaurant serving Southern-style benedicts, biscuits, pancakes, and brunch specialties.",
                mealTypes: ["Breakfast"],
                estimatedCostMin: 14,
                estimatedCostMax: 30,
                priceType: "perPerson",
                priceTier: "Mid-Range",
                address: "204 Decatur Street, New Orleans, LA 70130",
                cuisine: "Southern brunch",
                openingHours: "Breakfast and brunch daily; check location hours",
                website: "https://rubybrunch.com/locations/louisiana/french-quarter-decatur/",
                reservationRecommended: false
            },
            {
                name: "Willa Jean",
                category: "Food & Dining",
                description: "Bakery and restaurant known for fresh pastries, biscuits, breakfast sandwiches, and Southern-inspired brunch fare.",
                mealTypes: ["Breakfast"],
                estimatedCostMin: 15,
                estimatedCostMax: 35,
                priceType: "perPerson",
                priceTier: "Mid-Range",
                address: "611 O'Keefe Avenue, New Orleans, LA 70113",
                cuisine: "Southern bakery and brunch",
                openingHours: "Breakfast and lunch; check official website",
                website: "https://www.willajean.com/",
                reservationRecommended: true
            },
            {
                name: "Brennan's",
                category: "Food & Dining",
                description: "Historic French Quarter restaurant known for Creole breakfast, elegant dining rooms, and the famous bananas Foster dessert.",
                mealTypes: ["Breakfast"],
                estimatedCostMin: 35,
                estimatedCostMax: 85,
                priceType: "perPerson",
                priceTier: "High-End",
                address: "417 Royal Street, New Orleans, LA 70130",
                cuisine: "Upscale Creole breakfast",
                openingHours: "Breakfast or brunch on select days; check reservations",
                website: "https://www.brennansneworleans.com/",
                reservationRecommended: true
            }
        ],

        lunch: [
            {
                name: "Parkway Bakery & Tavern",
                category: "Food & Dining",
                description: "Long-running neighborhood po-boy shop specializing in roast beef, fried shrimp, and classic Louisiana sandwiches.",
                mealTypes: ["Lunch"],
                estimatedCostMin: 12,
                estimatedCostMax: 25,
                priceType: "perPerson",
                priceTier: "Budget",
                address: "538 Hagan Avenue, New Orleans, LA 70119",
                cuisine: "New Orleans po-boys",
                openingHours: "Lunch service; check weekly closed days",
                website: "https://parkwaypoorboys.com/",
                reservationRecommended: false
            },
            {
                name: "Gumbo Shop",
                category: "Food & Dining",
                description: "French Quarter restaurant serving traditional New Orleans gumbo, jambalaya, red beans and rice, and Creole classics.",
                mealTypes: ["Lunch"],
                estimatedCostMin: 20,
                estimatedCostMax: 40,
                priceType: "perPerson",
                priceTier: "Mid-Range",
                address: "630 Saint Peter Street, New Orleans, LA 70116",
                cuisine: "Creole and Cajun",
                openingHours: "Lunch and dinner; verify daily hours",
                website: "https://gumboshop.com/",
                reservationRecommended: false
            },
            {
                name: "Dooky Chase's Restaurant",
                category: "Food & Dining",
                description: "Historic Tremé restaurant serving Creole dishes and Louisiana soul food with strong ties to New Orleans civil rights history.",
                mealTypes: ["Lunch"],
                estimatedCostMin: 22,
                estimatedCostMax: 45,
                priceType: "perPerson",
                priceTier: "Mid-Range",
                address: "2301 Orleans Avenue, New Orleans, LA 70119",
                cuisine: "Creole and soul food",
                openingHours: "Lunch offered on select days; verify schedule",
                website: "https://www.dookychaserestaurants.com/",
                reservationRecommended: true
            },
            {
                name: "Commander's Palace",
                category: "Food & Dining",
                description: "Garden District fine-dining landmark known for refined Creole cuisine, turtle soup, and multi-course dining.",
                mealTypes: ["Lunch"],
                estimatedCostMin: 40,
                estimatedCostMax: 95,
                priceType: "perPerson",
                priceTier: "High-End",
                address: "1403 Washington Avenue, New Orleans, LA 70130",
                cuisine: "Fine-dining Creole",
                openingHours: "Lunch on select days and dinner; reservations recommended",
                website: "https://www.commanderspalace.com/",
                reservationRecommended: true
            }
        ],

        dinner: [
            {
                name: "Cochon Butcher",
                category: "Food & Dining",
                description: "Casual butcher shop and sandwich restaurant offering house-cured meats, Louisiana-inspired sandwiches, and prepared specialties.",
                mealTypes: ["Dinner"],
                estimatedCostMin: 15,
                estimatedCostMax: 30,
                priceType: "perPerson",
                priceTier: "Budget",
                address: "930 Tchoupitoulas Street, New Orleans, LA 70130",
                cuisine: "Cajun sandwiches and charcuterie",
                openingHours: "Daytime and early evening service; verify closing time",
                website: "https://cochonbutcher.com/",
                reservationRecommended: false
            },
            {
                name: "Peche Seafood Grill",
                category: "Food & Dining",
                description: "Warehouse District seafood restaurant featuring Gulf oysters, fresh fish, wood-fired seafood, and seasonal Louisiana dishes.",
                mealTypes: ["Dinner"],
                estimatedCostMin: 30,
                estimatedCostMax: 70,
                priceType: "perPerson",
                priceTier: "Mid-Range",
                address: "800 Magazine Street, New Orleans, LA 70130",
                cuisine: "Gulf seafood",
                openingHours: "Lunch and dinner; check official website",
                website: "https://www.pecherestaurant.com/",
                reservationRecommended: true
            },
            {
                name: "Compère Lapin",
                category: "Food & Dining",
                description: "Chef Nina Compton restaurant blending Caribbean heritage, Creole flavors, and contemporary Louisiana ingredients.",
                mealTypes: ["Dinner"],
                estimatedCostMin: 35,
                estimatedCostMax: 85,
                priceType: "perPerson",
                priceTier: "Mid-Range",
                address: "535 Tchoupitoulas Street, New Orleans, LA 70130",
                cuisine: "Caribbean-Creole",
                openingHours: "Dinner; limited brunch service may be available",
                website: "https://comperelapin.com/",
                reservationRecommended: true
            },
            {
                name: "Restaurant August",
                category: "Food & Dining",
                description: "Elegant contemporary restaurant serving Louisiana seafood and refined seasonal tasting and à la carte dishes.",
                mealTypes: ["Dinner"],
                estimatedCostMin: 65,
                estimatedCostMax: 150,
                priceType: "perPerson",
                priceTier: "High-End",
                address: "301 Tchoupitoulas Street, New Orleans, LA 70130",
                cuisine: "Contemporary Creole fine dining",
                openingHours: "Dinner; confirm current opening days",
                website: "https://www.restaurantaugust.com/",
                reservationRecommended: true
            }
        ],






        transportation: [
            "Streetcar",
            "Uber/Lyft",
            "Rental Car",
            "Walking",
            "RTA Buses"
        ],



        transportationOptions: [
            {
                name: "Streetcar",
                type: "Public Transportation",
                description: "New Orleans' historic streetcar network serves popular tourist areas including Canal Street, the French Quarter edge, St. Charles Avenue, the Garden District, City Park, and the Riverfront. Standard adult fare is $1.25 per ride with eligible two-hour transfers. Unlimited Jazzy Passes cost $3 for one day, $8 for three days, or $15 for seven days. Streetcars are convenient for sightseeing and visiting nearby attractions, although travel can be slower than rideshare.",
                estimatedCostMin: 1.25,
                estimatedCostMax: 1.25,
                priceType: "perRide",
                website: "https://www.norta.com/ride-with-us/how-to-pay/fares"
            },
            {
                name: "Uber/Lyft",
                type: "Rideshare",
                description: "App-based rideshare transportation available throughout New Orleans and surrounding areas. Convenient for trips between Louis Armstrong New Orleans International Airport, hotels, the French Quarter, the Garden District, Frenchmen Street, restaurants, and nightlife. Fares vary according to distance, traffic, demand, pickup location, and time of day. Airport fees and additional charges may apply. Some French Quarter streets may have restricted vehicle access during major events.",
                estimatedCostMin: 12,
                estimatedCostMax: 60,
                priceType: "perRide",
                website: "https://www.uber.com/"
            },
            {
                name: "Rental Car",
                type: "Car Rental",
                description: "Rental vehicles are available at Louis Armstrong New Orleans International Airport and throughout the metropolitan area. Useful for exploring plantations that offer public tours, nearby Louisiana towns, swamp tour departure points, and attractions outside the city. Rental prices vary by travel dates, vehicle type, driver age, rental company, and insurance. Fuel, parking, tolls, and optional fees are not included. Downtown and French Quarter parking can be expensive, so a rental car may be unnecessary for a central New Orleans itinerary.",
                estimatedCostMin: 45,
                estimatedCostMax: 110,
                priceType: "perDay",
                website: "https://www.enterprise.com/"
            },
            {
                name: "Walking",
                type: "Walking",
                description: "Free transportation for exploring walkable areas including the French Quarter, Jackson Square, Bourbon Street, Royal Street, Frenchmen Street, the Central Business District, and parts of the Warehouse District. Walking is convenient for restaurants, historic landmarks, jazz venues, museums, and shopping. Travel time depends on distance, sidewalk conditions, weather, and pedestrian traffic. Summer heat and heavy rain should be considered.",
                estimatedCostMin: 0,
                estimatedCostMax: 0,
                priceType: "free"
            },
            {
                name: "RTA Buses",
                type: "Public Transportation",
                description: "New Orleans Regional Transit Authority buses provide public transportation across the city, including neighborhoods, shopping areas, cultural attractions, and destinations not directly served by streetcars. Standard adult fare is $1.25 per ride with eligible two-hour transfers. The one-day Jazzy Pass costs $3 and covers eligible unlimited bus and streetcar travel. Airport Express Route 202 connects Louis Armstrong New Orleans International Airport with Downtown New Orleans for $1.25. Some regional routes have different fares.",
                estimatedCostMin: 1.25,
                estimatedCostMax: 1.25,
                priceType: "perRide",
                website: "https://www.norta.com/"
            }
        ],



        hotels: [
            {
                name: "HI New Orleans Hostel",
                category: "Budget",
                description: "Budget-friendly modern hostel in a renovated historic building on Canal Street near the French Quarter and Central Business District. Offers shared dormitory beds and private rooms with bathrooms. Features complimentary Wi-Fi, a large shared guest kitchen, dining spaces, comfortable lounges, work areas, laundry facilities, and convenient access to the Canal Street streetcar. A good option for travelers trying to minimize accommodation costs. No dedicated on-site parking is available.",
                address: "1028 Canal Street, New Orleans, LA 70112, USA",
                estimatedNightlyCostMin: 45,
                estimatedNightlyCostMax: 165,
                priceType: "perNight",
                amenities: [
                    "Free Wi-Fi",
                    "Shared dormitory rooms",
                    "Private rooms available",
                    "Private bathrooms in select rooms",
                    "Privacy curtains for bunk beds",
                    "Individual reading lights",
                    "Personal power outlets",
                    "Secure storage lockers",
                    "Large shared kitchen",
                    "Shared dining area",
                    "Guest lounge",
                    "Game room",
                    "Workspaces",
                    "Guest laundry facilities",
                    "Luggage storage",
                    "On-site cafe",
                    "24-hour staff",
                    "Bed linens and towels",
                    "Nearby Canal Street streetcar",
                    "Walking distance to French Quarter",
                    "Nearby paid parking garages"
                ],
                parkingCost: null,
                additionalFees: null,
                website: "https://www.hiusa.org/find-hostels/louisiana/new-orleans-1028-canal-street"
            },
            {
                name: "Hampton Inn & Suites New Orleans-Convention Center",
                category: "Mid-Range",
                description: "Comfortable hotel in the Arts and Warehouse District directly across from the Ernest N. Morial Convention Center. Features modern guest rooms and suites, complimentary hot breakfast, free Wi-Fi, an outdoor courtyard swimming pool, fitness center, business facilities, and convenient access to the National WWII Museum and downtown attractions. The hotel is also near the Port of New Orleans cruise terminals. Valet parking is available for $44, and hotel self-parking is not offered.",
                address: "1201 Convention Center Boulevard, New Orleans, LA 70130, USA",
                estimatedNightlyCostMin: 115,
                estimatedNightlyCostMax: 275,
                priceType: "perNight",
                amenities: [
                    "Free Wi-Fi",
                    "Complimentary hot breakfast",
                    "Modern guest rooms and suites",
                    "Outdoor swimming pool",
                    "Courtyard seating",
                    "Fitness center",
                    "Business center",
                    "Meeting rooms",
                    "Concierge services",
                    "Connecting rooms available",
                    "Streaming entertainment",
                    "Digital Key",
                    "Air conditioning",
                    "Pet-friendly accommodations",
                    "Secured covered valet parking",
                    "Nearby restaurants",
                    "Across from Convention Center",
                    "Near the National WWII Museum",
                    "Near cruise terminals",
                    "Walking distance to downtown attractions"
                ],
                parkingCost: 44,
                additionalFees: null,
                website: "https://www.hilton.com/en/hotels/msylahx-hampton-suites-new-orleans-convention-center/"
            },
            {
                name: "The Roosevelt New Orleans, A Waldorf Astoria Hotel",
                category: "High-End",
                description: "Historic luxury Waldorf Astoria hotel in Downtown New Orleans approximately one block from the French Quarter and Bourbon Street. Features elegant rooms and suites, a rooftop outdoor swimming pool, full-service spa, fitness center, concierge services, and upscale dining including the famous Sazerac Bar and Fountain Lounge. Convenient to Canal Street, theaters, restaurants, and major attractions. Valet parking is available for $57; hotel self-parking is not offered.",
                address: "130 Roosevelt Way, New Orleans, LA 70112, USA",
                estimatedNightlyCostMin: 280,
                estimatedNightlyCostMax: 650,
                priceType: "perNight",
                amenities: [
                    "Luxury guest rooms and suites",
                    "Historic hotel architecture",
                    "Grand lobby",
                    "Outdoor rooftop swimming pool",
                    "Poolside cabanas available",
                    "Full-service spa",
                    "Spa treatments",
                    "Fitness center",
                    "Sazerac Bar",
                    "Fountain Lounge",
                    "Teddy's Cafe",
                    "Upscale dining",
                    "Room service",
                    "Concierge services",
                    "Business facilities",
                    "Meeting and event spaces",
                    "Air conditioning",
                    "Valet parking",
                    "Near the French Quarter",
                    "Near Canal Street",
                    "Walking distance to Bourbon Street"
                ],
                parkingCost: 57,
                additionalFees: null,
                website: "https://www.hilton.com/en/hotels/msyrhwa-the-roosevelt-new-orleans/"
            }
        ],


        vacationRentals: [
            {
                name: "French Quarter Follies II",
                category: "Vacation Rental",
                propertyType: "Entire Condo",
                description: "Historic two-bedroom condominium located in the French Quarter on Royal Street. Features a private balcony overlooking the neighborhood, a fully equipped kitchen, washer and dryer, Wi-Fi, and convenient walking access to Jackson Square, Bourbon Street, restaurants, galleries, and live entertainment.",
                address: "Royal Street, French Quarter, New Orleans, LA, USA",
                estimatedNightlyCostMin: 477.75,
                estimatedNightlyCostMax: 477.75,
                priceType: "perNight",
                maxGuests: 4,
                bedrooms: 2,
                bathrooms: 2,
                amenities: [
                    "Private balcony",
                    "Fully equipped kitchen",
                    "Wi-Fi",
                    "Washer",
                    "Dryer",
                    "Television",
                    "Dishwasher",
                    "Air conditioning",
                    "Historic building",
                    "Walkable French Quarter location"
                ],
                cleaningFee: null,
                serviceFee: null,
                parkingCost: null,
                website: "https://www.airbnb.com/rooms/41131414"
            },
            {
                name: "NOLA Marigny Cottage",
                category: "Vacation Rental",
                propertyType: "Entire Guesthouse",
                description: "Private two-bedroom, two-bathroom guesthouse on historic property in the Bywater neighborhood near the Marigny and French Quarter. Features a fully equipped kitchen, private outdoor patio, Wi-Fi, laundry facilities, and convenient access to restaurants, music venues, and neighborhood attractions.",
                address: "Bywater, New Orleans, LA, USA",
                estimatedNightlyCostMin: 261,
                estimatedNightlyCostMax: 261,
                priceType: "perNight",
                maxGuests: 4,
                bedrooms: 2,
                bathrooms: 2,
                amenities: [
                    "Private outdoor patio",
                    "Fully equipped kitchen",
                    "High-speed Wi-Fi",
                    "Washer",
                    "Dryer",
                    "Smart TV",
                    "Air conditioning",
                    "Free street parking",
                    "Walkable neighborhood",
                    "Nearby Frenchmen Street"
                ],
                cleaningFee: null,
                serviceFee: null,
                parkingCost: 0,
                website: "https://www.airbnb.com/rooms/43832778"
            }
        ],



    },




    // New York #11

    {

        id: 11,
        city: "New York City",
        state: "New York",
        description: "New York City is known for its iconic landmarks, diverse neighborhoods, world-famous museums, Broadway entertainment, shopping, food, and vibrant cultural scene.",
        duration: "4-6 days",

        weatherOptions: [
            {
                // ==================================
                // WEATHER OPTION 1: SNOWY
                // ==========================================

                condition: "Snowy",
                month: [
                    "December",
                    "January",
                    "February",
                    "March"
                ],

                // Three main attractions
                attractions: [
                    {
                        name: "Metropolitan Museum of Art",
                        category: "Museums & Art",
                        estimatedCost: 30,
                        website: "https://www.metmuseum.org/plan-your-visit"
                    },
                    {
                        name: "Chelsea Market",
                        category: "Shopping",
                        estimatedCost: 0,
                        website: "https://www.chelseamarket.com/"
                    },
                    {
                        name: "Broadway Theater District",
                        category: "Entertainment",
                        estimatedCost: 99,
                        website: "https://www.broadway.org/"
                    }
                ],


                // Snowy seasonal events
                event: [

                    {
                        name: "Bank of America Winter Village at Bryant Park",
                        category: "Festivals and Events",
                        description: "Explore a winter village in Midtown Manhattan featuring an outdoor ice skating rink, seasonal food, holiday decorations, and artisan shopping. Holiday Shops operate through January 3, while the skating rink continues through February 28.",
                        estimatedCostMin: 0,
                        estimatedCostMax: 55,
                        priceType: "perPerson",
                        startDate: "2026-10-28",
                        endDate: "2027-02-28",
                        estimatedDuration: 120,
                        location: "Bryant Park, 42nd Street and Sixth Avenue, New York, NY 10018",
                        website: "https://bryantpark.org/activities/bank-of-america-winter-village-at-bryant-park"
                    },
                    {
                        name: "Rockefeller Center Christmas Tree Holiday Display",
                        category: "Festivals and Events",
                        description: "Visit Rockefeller Center to view its famous illuminated Christmas tree, festive holiday decorations, and Rockefeller Plaza. The public viewing experience is free, while skating and other attractions cost extra.",
                        estimatedCostMin: 0,
                        estimatedCostMax: 0,
                        priceType: "perPerson",
                        startDate: "2026-12-03",
                        endDate: "2026-12-31",
                        estimatedDuration: 90,
                        location: "Rockefeller Center, 45 Rockefeller Plaza, New York, NY 10111",
                        website: "https://www.rockefellercenter.com/holidays/rockefeller-center-christmas-tree/"
                    }
                ]
            },

            {
                // ==================================
                // WEATHER OPTION 2: SUNNY
                // ==========================================

                condition: "Sunny",
                month: [
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September"
                ],

                // Three main attractions
                attractions: [
                    {
                        name: "Central Park",
                        category: "Outdoor & Nature",
                        estimatedCost: 0,
                        website: "https://www.centralparknyc.org/"
                    },
                    {
                        name: "Statue of Liberty",
                        category: "Sightseeing & Landmarks",
                        estimatedCost: 25.5,
                        website: "https://www.cityexperiences.com/new-york/city-cruises/statue/"
                    },
                    {
                        name: "Fifth Avenue",
                        category: "Shopping",
                        estimatedCost: 0,
                        website: "https://fifthavenue.nyc/"
                    }
                ],


                // Sunny seasonal events
                event: [
                    {
                        name: "Tribeca Festival",
                        category: "Festivals and Events",
                        description: "Experience New York City's annual Tribeca Festival featuring film premieres, documentaries, creative storytelling, special screenings, filmmaker discussions, and entertainment events.",
                        estimatedCostMin: 20,
                        estimatedCostMax: 80,
                        priceType: "perPerson",
                        startDate: "2027-06-03",
                        endDate: "2027-06-12",
                        estimatedDuration: 180,
                        location: "Various screening venues throughout New York City, NY",
                        website: "https://tribecafilm.com/festival"
                    },
                    {
                        name: "SummerStage - Angus & Julia Stone",
                        category: "Festivals and Events",
                        description: "Enjoy an outdoor concert featuring Australian indie-folk and pop artists Angus and Julia Stone as part of New York City's SummerStage concert series in Central Park.",
                        estimatedCostMin: 45,
                        estimatedCostMax: 125,
                        priceType: "perPerson",
                        startDate: "2027-05-15",
                        endDate: "2027-05-15",
                        startTime: "19:00",
                        endTime: "22:00",
                        estimatedDuration: 180,
                        location: "Central Park SummerStage, E 71st Street, New York, NY",
                        website: "https://cityparksfoundation.org/events/angus-julia-stone/"
                    }
                ]
            }
        ],


        // Shared activities available for both Snowy and Sunny weather
        activities: [
            {
                // Activity 1: Museums & Art
                name: "American Museum of Natural History Visit",
                category: "Museums & Art",
                description: "Explore dinosaur fossils, wildlife exhibits, ancient cultures, space exploration, and natural history collections.",
                estimatedCostMin: 30,
                estimatedCostMax: 30,
                priceType: "perPerson",
                estimatedDuration: 180,
                location: "200 Central Park West, New York, NY 10024",
                openingHours: "Daily 10 AM-5:30 PM; holiday schedule may vary",
                website: "https://www.amnh.org/"
            },
            {
                // Activity 2: Food & Dining
                name: "Essex Market Food Hall",
                category: "Food & Dining",
                description: "Explore an indoor food market on Manhattan's Lower East Side featuring local vendors, international cuisine, bakeries, and specialty foods.",
                estimatedCostMin: 0,
                estimatedCostMax: 30,
                priceType: "perPerson",
                estimatedDuration: 90,
                location: "88 Essex Street, New York, NY 10002",
                openingHours: "Generally Mon-Sat 8 AM-8 PM; Sun 10 AM-6 PM; vendor hours vary",
                website: "https://www.essexmarket.nyc/"
            },
            {
                // Activity 3: History & Culture
                name: "Grand Central Terminal Historic Visit",
                category: "History & Culture",
                description: "Explore the historic Grand Central Terminal, featuring beautiful architecture, the famous celestial ceiling, shops, restaurants, and the Whispering Gallery.",
                estimatedCostMin: 0,
                estimatedCostMax: 0,
                priceType: "perPerson",
                estimatedDuration: 90,
                location: "89 E 42nd Street, New York, NY 10017",
                openingHours: "Terminal generally open daily; shops and dining vary",
                website: "https://www.grandcentralterminal.com/"
            },
            {
                // Activity 4: Shopping
                name: "Macy's Herald Square Shopping",
                category: "Shopping",
                description: "Explore a famous department store featuring fashion, beauty, accessories, home goods, and seasonal displays.",
                estimatedCostMin: 0,
                estimatedCostMax: 0,
                priceType: "perPerson",
                estimatedDuration: 120,
                location: "151 W 34th Street, New York, NY 10001",
                openingHours: "Store hours vary by day and holidays",
                website: "https://www.macys.com/"
            },
            {
                // Activity 5: Museums & Art
                name: "The Morgan Library & Museum",
                category: "Museums & Art",
                description: "Explore a historic private library and museum featuring rare books, manuscripts, artwork, and beautifully decorated reading rooms.",
                estimatedCostMin: 0,
                estimatedCostMax: 30,
                priceType: "perPerson",
                estimatedDuration: 120,
                location: "225 Madison Avenue, New York, NY 10016",
                openingHours: "Tue-Thu 10:30 AM-5 PM; Fri 10:30 AM-8 PM; Sat-Sun 10:30 AM-5 PM",
                website: "https://www.themorgan.org/"
            },
            {
                // Activity 1: Outdoor & Nature
                name: "The High Line Scenic Walk",
                category: "Outdoor & Nature",
                description: "Explore an elevated public park built on a former railway, featuring landscaped gardens, public art, walking paths, and views of Manhattan.",
                estimatedCostMin: 0,
                estimatedCostMax: 0,
                priceType: "perPerson",
                estimatedDuration: 90,
                location: "The High Line, Manhattan, New York, NY",
                openingHours: "Seasonal; park hours vary",
                website: "https://www.thehighline.org/"
            },
            {
                // Activity 2: Sightseeing & Landmarks
                name: "Brooklyn Bridge Scenic Walk",
                category: "Sightseeing & Landmarks",
                description: "Walk across the historic Brooklyn Bridge and enjoy views of the Manhattan skyline, East River, and nearby waterfront neighborhoods.",
                estimatedCostMin: 0,
                estimatedCostMax: 0,
                priceType: "perPerson",
                estimatedDuration: 90,
                location: "Brooklyn Bridge, New York, NY",
                openingHours: "Pedestrian access daily",
                website: "https://www.nyc.gov/"
            },
            {
                // Activity 3: Food & Dining
                name: "Smorgasburg Outdoor Food Market",
                category: "Food & Dining",
                description: "Explore a seasonal outdoor food market featuring street food, international cuisines, local vendors, and creative dishes.",
                estimatedCostMin: 0,
                estimatedCostMax: 35,
                priceType: "perPerson",
                estimatedDuration: 120,
                location: "Williamsburg, Brooklyn, New York, NY",
                openingHours: "Seasonal weekend markets; check current market hours",
                website: "https://www.smorgasburg.com/"
            },
            {
                // Activity 4: Beaches & Water Activities
                name: "Staten Island Ferry Sightseeing Ride",
                category: "Beaches & Water Activities",
                description: "Ride the free Staten Island Ferry across New York Harbor and enjoy views of the Statue of Liberty, Ellis Island, and Lower Manhattan.",
                estimatedCostMin: 0,
                estimatedCostMax: 0,
                priceType: "perPerson",
                estimatedDuration: 60,
                location: "Whitehall Terminal, 4 South Street, New York, NY 10004",
                openingHours: "Ferry runs daily; times vary",
                website: "https://siferry.com/"
            },
            {
                // Activity 5: Sports & Recreation
                name: "Governors Island Bike and Park Experience",
                category: "Sports & Recreation",
                description: "Explore a car-free island with scenic bike paths, parks, historic buildings, public art, and views of New York Harbor.",
                estimatedCostMin: 5,
                estimatedCostMax: 40,
                priceType: "perPerson",
                estimatedDuration: 180,
                location: "Governors Island, New York, NY 10004",
                openingHours: "Island access and bike rental hours vary",
                website: "https://www.govisland.com/"
            }
        ],



        // Per meal: 1 Budget, 2 Mid-Range, 1 High-End.

        breakfast: [
            {
                name: "Ess-a-Bagel",
                category: "Food & Dining",
                description: "Classic New York bagel shop serving fresh bagels, cream cheese spreads, egg sandwiches, and coffee. A quick budget breakfast near Midtown East.",
                mealTypes: ["Breakfast"],
                estimatedCostMin: 7,
                estimatedCostMax: 20,
                priceType: "perPerson",
                priceTier: "Budget",
                address: "770 3rd Avenue, New York, NY 10017, USA",
                cuisine: "Bagels",
                openingHours: "Daily morning to afternoon; confirm holiday hours",
                website: "https://www.ess-a-bagel.com/location/770-3rd-ave/",
                reservationRecommended: false
            },
            {
                name: "Clinton St. Baking Company",
                category: "Food & Dining",
                description: "Popular Lower East Side breakfast destination best known for blueberry pancakes, eggs, biscuits, and brunch plates. Lines and reservations may be required.",
                mealTypes: ["Breakfast"],
                estimatedCostMin: 18,
                estimatedCostMax: 40,
                priceType: "perPerson",
                priceTier: "Mid-Range",
                address: "4 Clinton Street, New York, NY 10002, USA",
                cuisine: "American pancakes and breakfast",
                openingHours: "Breakfast and brunch daily; confirm weekday and weekend seating",
                website: "https://clintonstreetbaking.com/pages/contact",
                reservationRecommended: true
            },
            {
                name: "Balthazar",
                category: "Food & Dining",
                description: "SoHo French brasserie serving classic breakfast pastries, eggs, breads, and coffee in an energetic dining room.",
                mealTypes: ["Breakfast"],
                estimatedCostMin: 20,
                estimatedCostMax: 48,
                priceType: "perPerson",
                priceTier: "Mid-Range",
                address: "80 Spring Street, New York, NY 10012, USA",
                cuisine: "French brasserie",
                openingHours: "Breakfast daily; check restaurant schedule",
                website: "https://balthazarny.com/contact-us/",
                reservationRecommended: true
            },
            {
                name: "The Palm Court at The Plaza",
                category: "Food & Dining",
                description: "Elegant Plaza Hotel dining room offering upscale breakfast service and its signature afternoon tea experience in a historic setting.",
                mealTypes: ["Breakfast"],
                estimatedCostMin: 35,
                estimatedCostMax: 85,
                priceType: "perPerson",
                priceTier: "High-End",
                address: "768 Fifth Avenue, New York, NY 10019, USA",
                cuisine: "Luxury hotel breakfast",
                openingHours: "Breakfast and afternoon tea schedules vary; confirm before booking",
                website: "https://www.theplazany.com/dining/the-palm-court/",
                reservationRecommended: true
            },
        ],

        lunch: [
            {
                name: "Los Tacos No. 1",
                category: "Food & Dining",
                description: "Casual Chelsea Market taqueria serving fresh Mexican-style tacos, quesadillas, and aguas frescas.",
                mealTypes: ["Lunch"],
                estimatedCostMin: 10,
                estimatedCostMax: 24,
                priceType: "perPerson",
                priceTier: "Budget",
                address: "75 Ninth Avenue, Chelsea Market, New York, NY 10011, USA",
                cuisine: "Mexican tacos",
                openingHours: "Daily; Chelsea Market vendor hours vary",
                website: "https://www.lostacos1.com/location/los-tacos-chelsea-market/",
                reservationRecommended: false
            },
            {
                name: "Katz’s Delicatessen",
                category: "Food & Dining",
                description: "Historic Lower East Side deli specializing in hand-carved pastrami and corned beef sandwiches, pickles, and Jewish deli classics.",
                mealTypes: ["Lunch"],
                estimatedCostMin: 25,
                estimatedCostMax: 45,
                priceType: "perPerson",
                priceTier: "Mid-Range",
                address: "205 East Houston Street, New York, NY 10002, USA",
                cuisine: "Jewish deli",
                openingHours: "Daily; late-night hours vary",
                website: "https://katzsdelicatessen.com/location",
                reservationRecommended: false
            },
            {
                name: "Xi’an Famous Foods",
                category: "Food & Dining",
                description: "Counter-service restaurant serving spicy hand-ripped noodles, cumin lamb, dumplings, and regional Xi’an dishes.",
                mealTypes: ["Lunch"],
                estimatedCostMin: 12,
                estimatedCostMax: 24,
                priceType: "perPerson",
                priceTier: "Mid-Range",
                address: "8 Liberty Place, New York, NY 10038, USA",
                cuisine: "Chinese noodles",
                openingHours: "Daily lunch and dinner; verify branch hours",
                website: "https://www.xianfoods.com/locations",
                reservationRecommended: false
            },
            {
                name: "The Modern",
                category: "Food & Dining",
                description: "Fine dining restaurant at the Museum of Modern Art offering contemporary cuisine, seasonal tasting menus, and garden views.",
                mealTypes: ["Lunch"],
                estimatedCostMin: 85,
                estimatedCostMax: 190,
                priceType: "perPerson",
                priceTier: "High-End",
                address: "9 West 53rd Street, New York, NY 10019, USA",
                cuisine: "Upscale contemporary American",
                openingHours: "Lunch service on selected days; check reservations and current menu",
                website: "https://www.themodernnyc.com/location-and-hours/",
                reservationRecommended: true
            },
        ],

        dinner: [
            {
                name: "Joe’s Pizza",
                category: "Food & Dining",
                description: "Classic Greenwich Village New York pizza shop serving traditional thin-crust slices and whole pies.",
                mealTypes: ["Dinner"],
                estimatedCostMin: 6,
                estimatedCostMax: 20,
                priceType: "perPerson",
                priceTier: "Budget",
                address: "7 Carmine Street, New York, NY 10014, USA",
                cuisine: "New York pizza",
                openingHours: "Daily; late evening service may be available",
                website: "https://www.joespizzanyc.com/locations",
                reservationRecommended: false
            },
            {
                name: "L’Artusi",
                category: "Food & Dining",
                description: "Popular West Village Italian restaurant serving house-made pasta, seasonal dishes, and refined Italian-inspired cuisine.",
                mealTypes: ["Dinner"],
                estimatedCostMin: 35,
                estimatedCostMax: 85,
                priceType: "perPerson",
                priceTier: "Mid-Range",
                address: "228 West 10th Street, New York, NY 10014, USA",
                cuisine: "Italian",
                openingHours: "Dinner daily; hours vary by day",
                website: "https://www.lartusi.com/",
                reservationRecommended: true
            },
            {
                name: "Gramercy Tavern",
                category: "Food & Dining",
                description: "Contemporary American restaurant with a casual tavern area and refined dining room showcasing seasonal ingredients.",
                mealTypes: ["Dinner"],
                estimatedCostMin: 45,
                estimatedCostMax: 110,
                priceType: "perPerson",
                priceTier: "Mid-Range",
                address: "42 East 20th Street, New York, NY 10003, USA",
                cuisine: "Contemporary American",
                openingHours: "Lunch and dinner; dining room and tavern hours vary",
                website: "https://www.gramercytavern.com/",
                reservationRecommended: true
            },
            {
                name: "Le Bernardin",
                category: "Food & Dining",
                description: "Michelin-starred fine-dining restaurant specializing in seafood-focused tasting menus and French technique.",
                mealTypes: ["Dinner"],
                estimatedCostMin: 140,
                estimatedCostMax: 325,
                priceType: "perPerson",
                priceTier: "High-End",
                address: "155 West 51st Street, New York, NY 10019, USA",
                cuisine: "French seafood fine dining",
                openingHours: "Dinner on selected weekdays and Saturdays; reservations required",
                website: "https://www.le-bernardin.com/reservations",
                reservationRecommended: true
            },
        ],




        transportation: [
            "Subway",
            "Uber/Lyft",
            "Rental Car",
            "Walking",
            "Taxi",
            "MTA Buses"
        ],


        transportationOptions: [
            {
                name: "Subway",
                type: "Public Transportation",
                description: "New York City's subway system connects Manhattan, Brooklyn, Queens, and the Bronx through an extensive network of underground and elevated trains. Useful for visiting Times Square, Central Park, museums, shopping districts, Broadway, and neighborhoods across the city. The standard fare is $3 per ride using OMNY contactless payment. Eligible transfers to local buses are free within two hours. Using the same payment method, subway and local bus spending is capped at $35 in a seven-day period. Airport AirTrain services charge separate fares.",
                estimatedCostMin: 3,
                estimatedCostMax: 3,
                priceType: "perRide",
                website: "https://www.mta.info/fares"
            },
            {
                name: "Uber/Lyft",
                type: "Rideshare",
                description: "App-based rideshare transportation available throughout New York City's five boroughs. Convenient for airport transfers, hotels, restaurants, nightlife, and destinations where public transit connections are inconvenient. Prices vary by distance, demand, traffic, time of day, and vehicle type. Airport fees, tolls, congestion pricing surcharges, and tips may increase the total fare.",
                estimatedCostMin: 18,
                estimatedCostMax: 90,
                priceType: "perRide",
                website: "https://www.uber.com/"
            },
            {
                name: "Rental Car",
                type: "Car Rental",
                description: "Rental vehicles available at John F. Kennedy International Airport, LaGuardia Airport, Newark Liberty International Airport, and locations throughout New York City. Useful primarily for trips outside the city, including surrounding towns and regional attractions. Renting a car is usually unnecessary for sightseeing in Manhattan because subway and bus coverage is extensive. Daily rental rates vary by travel dates, vehicle, company, and driver age. Fuel, tolls, congestion charges, insurance, and expensive city parking are not included.",
                estimatedCostMin: 70,
                estimatedCostMax: 160,
                priceType: "perDay",
                website: "https://www.enterprise.com/"
            },
            {
                name: "Walking",
                type: "Walking",
                description: "Free transportation for exploring walkable areas including Times Square, Central Park, Fifth Avenue, Rockefeller Center, the Theater District, SoHo, Greenwich Village, and Downtown Manhattan. Walking is especially useful for sightseeing, shopping, and visiting nearby restaurants and attractions. Travel time depends on distance, pedestrian traffic, street crossings, and weather conditions.",
                estimatedCostMin: 0,
                estimatedCostMax: 0,
                priceType: "free"
            },
            {
                name: "Taxi",
                type: "Taxi",
                description: "Licensed New York City yellow taxis provide metered transportation throughout the city. The standard metered fare begins with a $3 initial charge, followed by distance-based or time-based charges. Additional mandatory surcharges, congestion-related fees, tolls, and tips may apply. Taxi rides are convenient for hotel transfers, travelers carrying luggage, and destinations not easily reached by subway. The $3 initial meter charge does not represent the full cost of a taxi trip.",
                estimatedCostMin: 15,
                estimatedCostMax: 75,
                priceType: "perRide",
                website: "https://www.nyc.gov/site/tlc/passengers/taxi-fare.page"
            },
            {
                name: "MTA Buses",
                type: "Public Transportation",
                description: "New York City's MTA local and Select Bus Service routes operate across the five boroughs, providing access to neighborhoods, shopping districts, museums, parks, and attractions. The standard local bus fare is $3 per ride, with eligible free transfers to subway services or other buses within two hours when using the same payment method. The seven-day OMNY cap is $35 for eligible subway and local bus travel. Express bus fares are higher at $7.25 and are not represented by this standard local bus price.",
                estimatedCostMin: 3,
                estimatedCostMax: 3,
                priceType: "perRide",
                website: "https://www.mta.info/agency/new-york-city-transit"
            }
        ],





        hotels: [
            {
                name: "Pod 39 Hotel",
                category: "Budget",
                description: "Budget-friendly boutique hotel in Manhattan's Murray Hill neighborhood near Grand Central Terminal. Features compact private guest rooms with efficient layouts, rainfall showers, air conditioning, and flat-screen televisions. Guests can enjoy a rooftop lounge, social spaces, on-site dining, and walking tours. The hotel is conveniently located near subway connections for exploring Manhattan. A mandatory facility fee of $29.84 including tax is charged per room per night. Minimum check-in age is 18.",
                address: "145 East 39th Street, New York, NY 10016, USA",
                estimatedNightlyCostMin: 125,
                estimatedNightlyCostMax: 280,
                priceType: "perNight",
                amenities: [
                    "High-speed Wi-Fi included in facility fee",
                    "Compact private guest rooms",
                    "Queen bed rooms available",
                    "Bunk bed rooms available",
                    "Private bathrooms",
                    "Rainfall showers",
                    "Air conditioning",
                    "Flat-screen televisions",
                    "In-room safe",
                    "Work desk in select rooms",
                    "Rooftop lounge",
                    "Playroom Lounge",
                    "On-site restaurant",
                    "Morning coffee and tea",
                    "Local gym access",
                    "Complimentary guided walking tours",
                    "Luggage storage",
                    "24-hour front desk",
                    "Pet-friendly accommodations",
                    "Discounted nearby garage parking",
                    "Near Grand Central Terminal",
                    "Near subway stations"
                ],
                parkingCost: null,
                additionalFees: 29.84,
                website: "https://www.thepodhotel.com/pod-39"

            },
            {
                name: "Hilton Garden Inn New York/Times Square Central",
                category: "Mid-Range",
                description: "Modern Midtown Manhattan hotel located on West 42nd Street near Times Square, Broadway theaters, Bryant Park, and public transportation. Features comfortable guest rooms, complimentary Wi-Fi, fitness center, an on-site restaurant, meeting facilities, and convenient access to major sightseeing destinations. Breakfast is available for an additional charge. The hotel has no on-site self-parking or valet service, but nearby public parking garages are available. A mandatory daily destination charge applies.",
                address: "136 West 42nd Street, New York, NY 10036, USA",
                estimatedNightlyCostMin: 190,
                estimatedNightlyCostMax: 420,
                priceType: "perNight",
                amenities: [
                    "Free Wi-Fi",
                    "Modern guest rooms",
                    "Flat-screen televisions",
                    "Streaming entertainment",
                    "Fitness center",
                    "On-site restaurant",
                    "Room service",
                    "Breakfast buffet available for purchase",
                    "Meeting rooms",
                    "Connecting rooms available",
                    "Digital Key",
                    "Air conditioning",
                    "Pet-friendly accommodations",
                    "Nearby public parking garages",
                    "Nearby subway stations",
                    "Walking distance to Times Square",
                    "Near Broadway theaters",
                    "Near Bryant Park"
                ],
                parkingCost: null,
                additionalFees: null,
                website: "https://www.hilton.com/en/hotels/nycssgi-hilton-garden-inn-new-york-times-square-central/"

            },
            {
                name: "The Langham, New York, Fifth Avenue",
                category: "High-End",
                description: "Luxury five-star hotel on Fifth Avenue in Midtown Manhattan near the Empire State Building, Bryant Park, shopping, and major transportation hubs. Features elegant spacious guest rooms and suites, luxury furnishings, premium bathrooms, upscale dining, concierge services, fitness facilities, and personalized guest service. The hotel offers a complimentary local house-car service during specified hours, subject to availability. Valet parking costs $90 per day with no in-and-out privileges. Overnight self-parking is not available.",
                address: "400 Fifth Avenue, New York, NY 10018, USA",
                estimatedNightlyCostMin: 650,
                estimatedNightlyCostMax: 1400,
                priceType: "perNight",
                amenities: [
                    "Luxury guest rooms and suites",
                    "Spacious accommodations",
                    "Complimentary Wi-Fi",
                    "City views in select rooms",
                    "Empire State Building views in select suites",
                    "Luxury bathrooms",
                    "Premium bedding",
                    "Elegant modern furnishings",
                    "Upscale dining",
                    "Ai Fiori restaurant",
                    "In-room dining",
                    "Concierge services",
                    "Fitness facilities",
                    "Complimentary local house-car service",
                    "Air conditioning",
                    "Dog-friendly accommodations",
                    "Valet parking",
                    "Near Fifth Avenue shopping",
                    "Near Empire State Building",
                    "Near Herald Square subway station"
                ],
                parkingCost: 90,
                additionalFees: null,
                website: "https://www.langhamhotels.com/en/the-langham/new-york/"

            }
        ],



        vacationRentals: [
            {
                name: "Brooklyn Historic Brownstone Hideaway",
                category: "Vacation Rental",
                propertyType: "Private room in historic brownstone",
                description: "Cozy private guest room inside an 1892 Brooklyn brownstone in Clinton Hill near Fort Greene Park. Features a dedicated bathroom, custom oak closets, kitchenette area with refrigerator, and workspace. Guests have a separate access route to the room while sharing the residence with the on-site hosts. Nearby subway stations provide access to Manhattan and Brooklyn attractions. NYC registration: OSE-STRREG-0001058.",
                address: "Clinton Hill / Fort Greene, Brooklyn, New York, NY, USA — exact address provided after booking",
                estimatedNightlyCostMin: 252,
                estimatedNightlyCostMax: 252,
                priceType: "perNight",
                maxGuests: 1,
                bedrooms: 1,
                bathrooms: 1,
                amenities: [
                    "Wi-Fi",
                    "Private guest bedroom",
                    "Dedicated bathroom",
                    "Kitchenette",
                    "Refrigerator",
                    "Custom oak closets",
                    "Workspace",
                    "Air conditioning",
                    "Historic brownstone architecture",
                    "Free street parking",
                    "Luggage dropoff allowed",
                    "Nearby subway access"
                ],
                cleaningFee: null,
                serviceFee: null,
                parkingCost: 0,
                website: "https://www.airbnb.com/rooms/30096719"
            },
            {
                name: "Manhattan Empire Skyline Art Loft",
                category: "Vacation Rental",
                propertyType: "Private room in shared loft",
                description: "Creative loft-style home in Manhattan's Flatiron and Gramercy area featuring a sunlit private bedroom, exposed brick, queen bed, and access to a shared kitchen and rooftop with Empire State Building views. Located near Madison Square Park, restaurants, shops, and subway stations. Guests share the home with the host and a small Miniature Schnauzer. NYC registration: OSE-STRREG-0002284.",
                address: "Flatiron / Gramercy, Manhattan, New York, NY, USA — exact address provided after booking",
                estimatedNightlyCostMin: 170.20,
                estimatedNightlyCostMax: 170.20,
                priceType: "perNight",
                maxGuests: 1,
                bedrooms: 1,
                bathrooms: 1,
                amenities: [
                    "Wi-Fi",
                    "Private guest bedroom",
                    "Queen bed",
                    "Shared bathroom",
                    "Shared kitchen",
                    "Shared rooftop",
                    "Empire State Building views",
                    "City skyline views",
                    "Exposed brick interior",
                    "Natural light",
                    "55-inch television",
                    "Air conditioning",
                    "Dedicated workspace",
                    "Nearby subway access"
                ],
                cleaningFee: null,
                serviceFee: null,
                parkingCost: null,
                website: "https://www.airbnb.com/rooms/9729286"
            }
        ]


    },




    // Orlanda #12

    {

        // DESTINATION 12: ORLANDO, FLORIDA


        id: 12,
        city: "Orlando",
        state: "Florida",
        description: "Orlando is a Florida destination known for its theme parks, family-friendly entertainment, shopping, lakes, gardens, and cultural attractions.",
        duration: "4-6 days",

        weatherOptions: [
            {
                // WEATHER OPTION 1: HOT
                condition: "Hot",
                month: ["June", "July", "August", "September"],

                attractions: [
                    {
                        name: "Universal Volcano Bay",
                        category: "Theme Parks",
                        estimatedCost: 85,
                        website: "https://www.universalorlando.com/web/en/us/tickets-packages/park-tickets"
                    },
                    {
                        name: "Disney Springs",
                        category: "Shopping",
                        estimatedCost: 0,
                        website: "https://www.disneysprings.com/"
                    },
                    {
                        name: "SEA LIFE Orlando Aquarium",
                        category: "Family Friendly",
                        estimatedCost: 29.99,
                        website: "https://www.visitsealife.com/orlando/tickets-passes/"
                    }
                ],


                event: [
                    {
                        name: "Fireworks at the Fountain",
                        category: "Festivals and Events",
                        description: "Celebrate Independence Day at Lake Eola Park with live music, food vendors, family-friendly activities, and fireworks over the lake.",
                        estimatedCostMin: 0,
                        estimatedCostMax: 0,
                        priceType: "perPerson",
                        startDate: "2026-07-04",
                        endDate: "2026-07-04",
                        startTime: "16:00",
                        endTime: "22:00",
                        estimatedDuration: 180,
                        location: "Lake Eola Park, 195 N Rosalind Avenue, Orlando, FL 32801",
                        website: "https://www.orlando.gov/"
                    },
                    {
                        name: "One Magical Weekend",
                        category: "Festivals and Events",
                        description: "Experience a multi-day LGBTQ+ music and Pride festival featuring DJs, themed parties, poolside celebrations, and live entertainment.",
                        estimatedCostMin: 35,
                        estimatedCostMax: 150,
                        priceType: "perPerson",
                        startDate: "2027-06-03",
                        endDate: "2027-06-07",
                        estimatedDuration: 240,
                        location: "Sheraton Lake Buena Vista Resort, Orlando, FL",
                        website: "https://www.onemagicalweekend.com/"
                    }
                ]
            },

            {
                // WEATHER OPTION 2: MILD
                condition: "Mild",
                month: [
                    "October", "November", "December",
                    "January", "February", "March"
                ],

                attractions: [
                    {
                        name: "Magic Kingdom Park",
                        category: "Theme Parks",
                        estimatedCost: 135,
                        website: "https://disneyworld.disney.go.com/admission/ticket-prices/"
                    },
                    {
                        name: "ICON Park",
                        category: "Entertainment",
                        estimatedCost: 0,
                        website: "https://iconparkorlando.com/"
                    },
                    {
                        name: "Lake Eola Park",
                        category: "Outdoor & Nature",
                        estimatedCost: 0,
                        website: "https://www.orlando.gov/Parks-the-Environment/Directory/Lake-Eola-Park"
                    }
                ],


                event: [
                    {
                        name: "Orlando Tree Lighting Celebration",
                        category: "Festivals and Events",
                        description: "Celebrate the holiday season at Lake Eola Park with live music, the Christmas tree lighting, festive decorations, food trucks, and a holiday market.",
                        estimatedCostMin: 0,
                        estimatedCostMax: 0,
                        priceType: "perPerson",
                        startDate: "2026-12-04",
                        endDate: "2026-12-04",
                        startTime: "17:30",
                        endTime: "21:30",
                        estimatedDuration: 180,
                        location: "Lake Eola Park, 195 N Rosalind Avenue, Orlando, FL 32801",
                        website: "https://www.orlando.gov/"
                    },
                    {
                        name: "EPCOT International Festival of the Arts",
                        category: "Festivals and Events",
                        description: "Explore visual artwork, artist demonstrations, live performances, creative exhibits, and specialty food experiences throughout EPCOT.",
                        estimatedCostMin: 135,
                        estimatedCostMax: 220,
                        priceType: "perPerson",
                        startDate: "2027-01-15",
                        endDate: "2027-03-01",
                        estimatedDuration: 240,
                        location: "EPCOT, 200 Epcot Center Drive, Lake Buena Vista, FL 32830",
                        website: "https://disneyworld.disney.go.com/"
                    }
                ]
            }
        ],
        // Shared activities for both weather options
        activities: [
            {
                // Activity 1: Museums & Art
                name: "Orlando Science Center Visit",
                category: "Museums & Art",
                description: "Explore interactive science exhibits, hands-on experiments, nature displays, and immersive educational experiences.",
                estimatedCostMin: 29,
                estimatedCostMax: 32,
                priceType: "perPerson",
                estimatedDuration: 180,
                location: "777 E Princeton Street, Orlando, FL 32803",
                openingHours: "Generally 10 AM-5 PM; closed most Wednesdays",
                website: "https://www.osc.org/"
            },
            {
                // Activity 2: Entertainment
                name: "Madame Tussauds Orlando",
                category: "Entertainment",
                description: "Explore a wax museum featuring lifelike figures of celebrities, athletes, musicians, and historical personalities.",
                estimatedCostMin: 28,
                estimatedCostMax: 42,
                priceType: "perPerson",
                estimatedDuration: 90,
                location: "8401 International Drive, Orlando, FL 32819",
                openingHours: "Verify current attraction hours",
                website: "https://www.madametussauds.com/orlando/"
            },
            {
                // Activity 3: Food & Dining
                name: "East End Market Food Hall",
                category: "Food & Dining",
                description: "Explore a neighborhood market featuring local food vendors, bakeries, coffee, specialty foods, and artisan businesses.",
                estimatedCostMin: 0,
                estimatedCostMax: 30,
                priceType: "perPerson",
                estimatedDuration: 90,
                location: "3201 Corrine Drive, Orlando, FL 32803",
                openingHours: "Varies by vendor",
                website: "https://eastendmkt.com/"
            },
            {
                // Activity 4: Shopping
                name: "The Mall at Millenia Shopping",
                category: "Shopping",
                description: "Browse luxury boutiques, department stores, fashion retailers, and restaurants in an indoor shopping mall.",
                estimatedCostMin: 0,
                estimatedCostMax: 0,
                priceType: "perPerson",
                estimatedDuration: 120,
                location: "4200 Conroy Road, Orlando, FL 32839",
                openingHours: "Verify mall and store hours",
                website: "https://www.mallatmillenia.com/"
            },
            {
                // Activity 5: Family Friendly
                name: "Crayola Experience Orlando",
                category: "Family Friendly",
                description: "Participate in hands-on art projects, interactive creative activities, and colorful family entertainment.",
                estimatedCostMin: 28,
                estimatedCostMax: 38,
                priceType: "perPerson",
                estimatedDuration: 150,
                location: "8001 S Orange Blossom Trail, Orlando, FL 32809",
                openingHours: "Verify current operating hours",
                website: "https://www.crayolaexperience.com/orlando"
            },
            {
                // Activity 1: Outdoor & Nature
                name: "Harry P. Leu Gardens Visit",
                category: "Outdoor & Nature",
                description: "Explore tropical gardens, flowering plants, peaceful walking paths, and landscaped botanical collections.",
                estimatedCostMin: 15,
                estimatedCostMax: 15,
                priceType: "perPerson",
                estimatedDuration: 120,
                location: "1920 N Forest Avenue, Orlando, FL 32803",
                openingHours: "Hours change seasonally",
                website: "https://www.leugardens.org/"
            },
            {
                // Activity 2: Beaches & Water Activities
                name: "Lake Eola Swan Boat Ride",
                category: "Beaches & Water Activities",
                description: "Rent a swan-shaped pedal boat and enjoy views of the lake, fountain, and downtown Orlando skyline.",
                estimatedCostMin: 15,
                estimatedCostMax: 15,
                priceType: "perBoat",
                estimatedDuration: 30,
                location: "512 E Washington Street, Orlando, FL 32801",
                openingHours: "Rental schedule varies",
                website: "https://www.orlando.gov/"
            },
            {
                // Activity 3: Food & Dining
                name: "Winter Park Park Avenue Dining",
                category: "Food & Dining",
                description: "Explore restaurants, cafes, bakeries, and sidewalk dining along Winter Park's historic shopping corridor.",
                estimatedCostMin: 0,
                estimatedCostMax: 60,
                priceType: "perPerson",
                estimatedDuration: 120,
                location: "Park Avenue, Winter Park, FL 32789",
                openingHours: "Varies by restaurant",
                website: "https://cityofwinterpark.org/"
            },
            {
                // Activity 4: History & Culture
                name: "Charles Hosmer Morse Museum",
                category: "History & Culture",
                description: "Explore American decorative arts and the museum's collection of works by Louis Comfort Tiffany.",
                estimatedCostMin: 6,
                estimatedCostMax: 6,
                priceType: "perPerson",
                estimatedDuration: 120,
                location: "445 N Park Avenue, Winter Park, FL 32789",
                openingHours: "Verify museum hours",
                website: "https://morsemuseum.org/"
            },
            {
                // Activity 5: Sports & Recreation
                name: "Winter Park Scenic Boat Tour",
                category: "Sports & Recreation",
                description: "Enjoy a guided boat ride along the Winter Park Chain of Lakes, featuring waterfront homes, wildlife, and natural scenery.",
                estimatedCostMin: 20,
                estimatedCostMax: 20,
                priceType: "perPerson",
                estimatedDuration: 60,
                location: "312 E Morse Boulevard, Winter Park, FL 32789",
                openingHours: "Tours depend on weather and operating schedule",
                website: "https://www.scenicboattours.com/"
            }
        ],






        breakfast: [
            {
                name: "Keke’s Breakfast Cafe",
                category: "Food & Dining",
                description: "Fresh pancakes, omelets, waffles, French toast, and breakfast plates at the Doctor Phillips location.",
                mealTypes: ["Breakfast"],
                estimatedCostMin: 10,
                estimatedCostMax: 23,
                priceType: "perPerson",
                priceTier: "Budget",
                address: "7512 Dr Phillips Blvd, Suite 100, Orlando, FL 32819",
                cuisine: "American breakfast",
                openingHours: "Daily morning to afternoon; verify holiday hours",
                website: "https://www.kekes.com/locations/kekes-doctor-phillips",
                reservationRecommended: false
            },
            {
                name: "Se7en Bites",
                category: "Food & Dining",
                description: "Scratch-made Southern comfort breakfasts, biscuits, pastries, and brunch plates in the Milk District. Limited Thursday through Sunday service.",
                mealTypes: ["Breakfast"],
                estimatedCostMin: 13,
                estimatedCostMax: 28,
                priceType: "perPerson",
                priceTier: "Mid-Range",
                address: "617 N Primrose Dr, Orlando, FL 32803",
                cuisine: "Southern bakery and brunch",
                openingHours: "Thu-Sun breakfast and brunch; closed Mon-Wed",
                website: "https://www.se7enbites.com/",
                reservationRecommended: false
            },
            {
                name: "Hash House A Go Go",
                category: "Food & Dining",
                description: "Oversized farm-style breakfast plates including pancakes, scrambles, biscuits, and signature fried chicken dishes.",
                mealTypes: ["Breakfast"],
                estimatedCostMin: 17,
                estimatedCostMax: 35,
                priceType: "perPerson",
                priceTier: "Mid-Range",
                address: "5350 International Dr, Orlando, FL 32819",
                cuisine: "American comfort breakfast",
                openingHours: "Breakfast and brunch; check official daily hours",
                website: "https://orlando.hashhouseagogo.com/",
                reservationRecommended: false
            },
            {
                name: "The Boheme Sunday jazz brunch",
                category: "Food & Dining",
                description: "Elegant Sunday jazz brunch featuring chef-prepared dishes and live music inside the Grand Bohemian Hotel in downtown Orlando.",
                mealTypes: ["Breakfast"],
                estimatedCostMin: 45,
                estimatedCostMax: 90,
                priceType: "perPerson",
                priceTier: "High-End",
                address: "325 S Orange Ave, Orlando, FL 32801",
                cuisine: "Upscale hotel brunch",
                openingHours: "Sunday jazz brunch only; weekday breakfast also offered",
                website: "https://www.theboheme.com/",
                reservationRecommended: true
            }
        ],

        lunch: [
            {
                name: "Black Rooster Taqueria",
                category: "Food & Dining",
                description: "Mills 50 taqueria serving handmade tortillas, seasonal tacos, bowls, and freshly prepared Mexican-inspired dishes.",
                mealTypes: ["Lunch"],
                estimatedCostMin: 12,
                estimatedCostMax: 25,
                priceType: "perPerson",
                priceTier: "Budget",
                address: "1323 N Mills Ave, Orlando, FL 32803",
                cuisine: "Mexican tacos",
                openingHours: "Lunch service; check current daily hours",
                website: "https://www.blackroostertaqueria.com/locations-mills/",
                reservationRecommended: false
            },
            {
                name: "Hawkers Asian Street Food",
                category: "Food & Dining",
                description: "Shareable Malaysian, Chinese, Thai, Vietnamese, and Korean-inspired street food, noodles, and small plates.",
                mealTypes: ["Lunch"],
                estimatedCostMin: 18,
                estimatedCostMax: 38,
                priceType: "perPerson",
                priceTier: "Mid-Range",
                address: "1103 N Mills Ave, Orlando, FL 32803",
                cuisine: "Asian street food",
                openingHours: "Lunch and dinner; hours vary by weekday",
                website: "https://eathawkers.com/locations/orlando/",
                reservationRecommended: true
            },
            {
                name: "The Ravenous Pig",
                category: "Food & Dining",
                description: "Contemporary American gastropub with seasonal dishes and locally sourced ingredients; midday dining is offered during weekend brunch.",
                mealTypes: ["Lunch"],
                estimatedCostMin: 23,
                estimatedCostMax: 48,
                priceType: "perPerson",
                priceTier: "Mid-Range",
                address: "565 W Fairbanks Ave, Winter Park, FL 32789",
                cuisine: "American gastropub",
                openingHours: "Sat-Sun brunch 11 AM-3 PM; weekday lunch not regularly offered",
                website: "https://www.theravenouspig.com/",
                reservationRecommended: true
            },
            {
                name: "Salt & The Cellar",
                category: "Food & Dining",
                description: "Luxury Mediterranean and Asian-fusion restaurant by chef Akira Back inside ette hotel, with an upscale lunch menu.",
                mealTypes: ["Lunch"],
                estimatedCostMin: 35,
                estimatedCostMax: 85,
                priceType: "perPerson",
                priceTier: "High-End",
                address: "3001 Sherberth Rd, Kissimmee, FL 34747",
                cuisine: "Mediterranean and Asian fusion",
                openingHours: "Lunch generally 11:30 AM-2 PM; confirm selected day",
                website: "https://www.saltandthecellar.com/",
                reservationRecommended: true
            }
        ],

        dinner: [
            {
                name: "Chicken Fire",
                category: "Food & Dining",
                description: "Casual Orlando hot-chicken restaurant known for Nashville-style spicy fried chicken sandwiches, tenders, and sides.",
                mealTypes: ["Dinner"],
                estimatedCostMin: 13,
                estimatedCostMax: 27,
                priceType: "perPerson",
                priceTier: "Budget",
                address: "2425 E Colonial Dr, Orlando, FL 32803",
                cuisine: "Nashville-style hot chicken",
                openingHours: "Dinner service; verify current hours",
                website: "https://www.chickenfire.com/",
                reservationRecommended: false
            },
            {
                name: "Domu",
                category: "Food & Dining",
                description: "Orlando ramen restaurant specializing in rich house-made broths, noodles, creative Japanese small plates, and cocktails.",
                mealTypes: ["Dinner"],
                estimatedCostMin: 19,
                estimatedCostMax: 45,
                priceType: "perPerson",
                priceTier: "Mid-Range",
                address: "3201 Corrine Dr, Orlando, FL 32803",
                cuisine: "Japanese ramen",
                openingHours: "Dinner service; hours vary by weekday",
                website: "https://www.domufl.com/",
                reservationRecommended: true
            },
            {
                name: "Prato",
                category: "Food & Dining",
                description: "Wood-fired pizza, house-made pasta, seasonal Italian cuisine, and wine on Winter Park’s Park Avenue.",
                mealTypes: ["Dinner"],
                estimatedCostMin: 25,
                estimatedCostMax: 65,
                priceType: "perPerson",
                priceTier: "Mid-Range",
                address: "124 N Park Ave, Winter Park, FL 32789",
                cuisine: "Italian",
                openingHours: "Dinner service; check current schedule",
                website: "https://www.pratoitalian.com/winter-park/",
                reservationRecommended: true
            },
            {
                name: "Victoria & Albert’s",
                category: "Food & Dining",
                description: "Formal fine-dining tasting-menu experience at Disney’s Grand Floridian Resort with multiple courses and optional wine pairings.",
                mealTypes: ["Dinner"],
                estimatedCostMin: 295,
                estimatedCostMax: 450,
                priceType: "perPerson",
                priceTier: "High-End",
                address: "4401 Floridian Way, Lake Buena Vista, FL 32830",
                cuisine: "Luxury tasting menu",
                openingHours: "Dinner by reservation; operating days vary",
                website: "https://disneyworld.disney.go.com/dining/grand-floridian-resort-and-spa/victoria-and-alberts/",
                reservationRecommended: true
            }
        ],

        transportation: [
            "Rental Car",
            "Uber/Lyft",
            "Hotel Shuttles",
            "Theme Park Transportation",
            "LYNX Buses"
        ],



        transportationOptions: [
            {
                name: "Rental Car",
                type: "Car Rental",
                description: "Rental vehicles are available at Orlando International Airport, Orlando Sanford International Airport, and locations throughout Central Florida. Useful for visiting Walt Disney World, Universal Orlando, SeaWorld, shopping centers, and attractions spread throughout the region. Rental rates depend on dates, vehicle type, driver age, and rental company. Gas, toll roads, theme park parking, hotel parking, and optional insurance are not included.",
                estimatedCostMin: 45,
                estimatedCostMax: 105,
                priceType: "perDay",
                website: "https://www.enterprise.com/"
            },
            {
                name: "Uber/Lyft",
                type: "Rideshare",
                description: "App-based rideshare transportation available throughout Orlando, International Drive, Lake Buena Vista, and surrounding areas. Convenient for airport transfers, hotel transportation, restaurants, shopping, and theme parks. Fares depend on distance, traffic, demand, pickup location, and time of day. Airport charges, tolls, and surge pricing may apply. Major theme parks may use designated rideshare pickup and drop-off locations.",
                estimatedCostMin: 15,
                estimatedCostMax: 75,
                priceType: "perRide",
                website: "https://www.uber.com/"
            },
            {
                name: "Hotel Shuttles",
                type: "Hotel Shuttle",
                description: "Scheduled shuttle transportation offered by select Orlando hotels to nearby theme parks and attractions. Some hotels provide complimentary services for registered guests, while others use paid transportation providers. Rosen Inn International offers complimentary scheduled Universal Orlando shuttles with reservations required and limited seating. Its Walt Disney World shuttle option is provided by a third party for a fee. Shuttle schedules, accessibility, destinations, and charges vary by hotel.",
                estimatedCostMin: 0,
                estimatedCostMax: 25,
                priceType: "perRide",
                website: "https://www.roseninn7600.com/transportation"
                // as complimentary.
            },
            {
                name: "Theme Park Transportation",
                type: "Theme Park Transportation",
                description: "Transportation systems inside eligible Orlando theme park resorts, including Walt Disney World's complimentary buses, monorails, boats, and Skyliner gondolas. These connect selected Disney resort hotels, theme parks, and Disney Springs, subject to route and guest eligibility rules. Universal Orlando also provides transportation on certain resort and hotel routes. Transportation between competing theme park resorts is generally not included. Some premium services and private transfers cost extra.",
                estimatedCostMin: 0,
                estimatedCostMax: 0,
                priceType: "included",
                website: "https://disneyworld.disney.go.com/guest-services/resort-transportation/"
                // complimentary resort transportation.
            },
            {
                name: "LYNX Buses",
                type: "Public Transportation",
                description: "Central Florida's LYNX public bus network serves Orlando, International Drive, Downtown Orlando, Orlando International Airport, and parts of Orange, Seminole, and Osceola counties. Standard fare is $2 per ride, with eligible free transfers within 90 minutes when requested from the operator. An all-day pass costs $4.50 and a seven-day pass costs $16. Service frequency and travel time depend on the route, and theme park visits may require transfers.",
                estimatedCostMin: 2,
                estimatedCostMax: 2,
                priceType: "perRide",
                website: "https://www.golynx.com/fares-passes/"
            }
        ],





        hotels: [
            {
                name: "Rosen Inn International",
                category: "Budget",
                description: "Budget-friendly family hotel on Orlando's International Drive near Universal Orlando Resort, ICON Park, and popular restaurants and shopping. Features comfortable guest rooms, two seasonally heated outdoor swimming pools, a children's pool, restaurants, arcade, fitness center, and free Wi-Fi. Complimentary scheduled shuttle service is available to Universal Orlando and select other theme parks with advance reservations. Gated self-parking costs $10 per night, capped at $50 per car for stays of five or more nights. No resort fee is charged.",
                address: "7600 International Drive, Orlando, FL 32819, USA",
                estimatedNightlyCostMin: 75,
                estimatedNightlyCostMax: 170,
                priceType: "perNight",
                amenities: [
                    "Free Wi-Fi",
                    "Non-smoking guest rooms",
                    "Flat-screen HDTV",
                    "Mini refrigerator",
                    "Microwave",
                    "Coffee and tea maker",
                    "Air conditioning",
                    "Two outdoor swimming pools",
                    "Children's swimming pool",
                    "Fitness center",
                    "Fountain View Cafe",
                    "Topsy Turvey Lounge",
                    "Mini-market and deli",
                    "Game room and arcade",
                    "Guest laundry facilities",
                    "Playground",
                    "24-hour front desk",
                    "Dog-friendly accommodations",
                    "Gated self-parking",
                    "Complimentary scheduled Universal shuttles",
                    "Nearby International Drive attractions",
                    "No resort fee"
                ],
                parkingCost: 10,
                additionalFees: 0,
                website: "https://www.roseninn7600.com/"
            },
            {
                name: "Hampton Inn Orlando International Drive/Convention Center",
                category: "Mid-Range",
                description: "Comfortable hotel in Orlando's International Drive and convention center area, near ICON Park, SeaWorld, Universal Orlando, and local restaurants. Offers complimentary hot breakfast, free Wi-Fi, an outdoor swimming pool, fitness center, connecting-room options, and pet-friendly accommodations. Convenient for convention visitors and families exploring Orlando attractions. On-site self-parking costs $10 per night plus tax. Theme park shuttle options may be available for an additional fee; there is no airport shuttle.",
                address: "8900 Universal Boulevard, Orlando, FL 32819, USA",
                estimatedNightlyCostMin: 110,
                estimatedNightlyCostMax: 240,
                priceType: "perNight",
                amenities: [
                    "Free Wi-Fi",
                    "Complimentary hot breakfast",
                    "Non-smoking guest rooms",
                    "Outdoor swimming pool",
                    "Fitness center",
                    "Air conditioning",
                    "Connecting rooms available",
                    "Digital Key",
                    "Electric vehicle charging",
                    "Pet-friendly accommodations",
                    "Cribs available",
                    "On-site self-parking",
                    "Nearby restaurants",
                    "Near Orange County Convention Center",
                    "Near ICON Park",
                    "Theme park shuttle options for a fee"
                ],
                parkingCost: 10,
                additionalFees: null,
                website: "https://www.hilton.com/en/hotels/mcocchx-hampton-orlando-international-drive-convention-center/"
            },
            {
                name: "Waldorf Astoria Orlando",
                category: "High-End",
                description: "Luxury resort in the Bonnet Creek area near Walt Disney World, offering elegant rooms and suites, upscale dining, outdoor swimming pools, full-service spa, fitness center, and an 18-hole golf course. Guests can enjoy complimentary scheduled transportation to Disney theme parks and Disney Springs, plus access to select amenities at neighboring Signia by Hilton Orlando Bonnet Creek. The resort has a mandatory $50 daily resort charge plus tax. Overnight valet parking costs $60 plus tax. Minimum age for booking and checking in is 21.",
                address: "14200 Bonnet Creek Resort Lane, Orlando, FL 32821, USA",
                estimatedNightlyCostMin: 450,
                estimatedNightlyCostMax: 1050,
                priceType: "perNight",
                amenities: [
                    "Luxury rooms and suites",
                    "Wi-Fi included in resort charge",
                    "Outdoor swimming pools",
                    "Poolside cabanas",
                    "Full-service Waldorf Astoria Spa",
                    "Fitness center",
                    "Waldorf Astoria Golf Club",
                    "Bull & Bear fine dining",
                    "Peacock Alley lounge",
                    "Poolside dining",
                    "Room service",
                    "Concierge services",
                    "Air conditioning",
                    "Connecting rooms available",
                    "Pet-friendly accommodations",
                    "Valet parking",
                    "Electric vehicle charging",
                    "Complimentary scheduled Disney shuttles",
                    "Access to select neighboring resort amenities",
                    "Lazy river access at neighboring resort",
                    "Near Walt Disney World"
                ],
                parkingCost: 60,
                additionalFees: 50,
                website: "https://www.hilton.com/en/hotels/orlbcwa-waldorf-astoria-orlando/"
                // included in the displayed booking total.
            }
        ],





        vacationRentals: [

            {
                name: "Orlando Universal Private Pool Retreat",
                category: "Vacation Rental",
                propertyType: "Entire House",
                description: "Modern four-bedroom vacation home near Universal Orlando in the Doctor Phillips neighborhood. Features a private screened swimming pool, covered patio, outdoor dining area, gas grill, full kitchen, laundry facilities, and convenient access to Orlando theme parks. Optional pool heating costs $35 per day.",
                address: "Doctor Phillips, Orlando, FL, USA",
                estimatedNightlyCostMin: 448,
                estimatedNightlyCostMax: 448,
                priceType: "perNight",
                maxGuests: 8,
                bedrooms: 4,
                bathrooms: 2,
                amenities: [
                    "Private screened swimming pool",
                    "Covered patio",
                    "Outdoor dining area",
                    "Gas grill",
                    "Fully equipped kitchen",
                    "Fast Wi-Fi",
                    "Smart TVs",
                    "Washer and dryer",
                    "Air conditioning",
                    "Free driveway parking",
                    "Optional pool heating"
                ],
                cleaningFee: null,
                serviceFee: null,
                parkingCost: 0,
                website: "https://www.airbnb.com/rooms/559426136968953223"
            },

            {
                name: "Orlando Enchanted Treetop Hideaway",
                category: "Vacation Rental",
                propertyType: "Treehouse",
                description: "Unique handcrafted treehouse in Orlando's Thornton Park neighborhood near Lake Eola and downtown attractions. Features a cozy elevated sleeping loft, hanging swing chair, living area, small wood-burning stove, television, mini refrigerator, and sink. Includes exclusive use of a private lower-level open-air lounge and access to shared outdoor spaces with a koi pond, fire pit, outdoor dining, and garden seating.",
                address: "Thornton Park, Orlando, FL, USA — exact street address provided after booking",
                estimatedNightlyCostMin: 298,
                estimatedNightlyCostMax: 298,
                priceType: "perNight",
                maxGuests: 2,
                bedrooms: 1,
                bathrooms: 1,
                amenities: [
                    "Wi-Fi",
                    "Queen bed",
                    "Additional double bed",
                    "Elevated sleeping loft",
                    "Hanging swing chairs",
                    "Wood-burning stove",
                    "Television",
                    "Mini refrigerator",
                    "Small sink",
                    "Private lower-level outdoor lounge",
                    "Shared garden patio",
                    "Shared koi pond area",
                    "Shared fire pit",
                    "Shared outdoor dining area",
                    "Shared outdoor grill",
                    "Air conditioning",
                    "Free on-site parking"
                ],
                cleaningFee: null,
                serviceFee: null,
                parkingCost: 0,
                website: "https://www.airbnb.com/rooms/1196401362780814000"
            }
        ]


    },



    // San Francisco #13
    {

        id: 13,
        city: "San Francisco",
        state: "California",
        description: "San Francisco is a California city known for the Golden Gate Bridge, waterfront attractions, historic neighborhoods, cultural diversity, museums, and scenic coastal views.",
        duration: "3-5 days",

        weatherOptions: [
            {
                // WEATHER OPTION 1: FOGGY
                condition: "Foggy",
                month: ["June", "July", "August", "September"],

                attractions: [
                    {
                        name: "Golden Gate Bridge",
                        category: "Sightseeing & Landmarks",
                        estimatedCost: 0,
                        website: "https://www.goldengate.org/bridge/visiting-the-bridge/"
                    },
                    {
                        name: "Fisherman's Wharf",
                        category: "Food & Dining",
                        estimatedCost: 0,
                        website: "https://www.fishermanswharf.org/"
                    },
                    {
                        name: "Pier 39",
                        category: "Entertainment",
                        estimatedCost: 0,
                        website: "https://www.pier39.com/"
                    }
                ],


                event: [
                    {
                        name: "San Francisco Pride Celebration and Parade",
                        category: "Festivals and Events",
                        description: "Celebrate LGBTQ+ culture and community at San Francisco Pride, featuring a large parade along Market Street, live performances, music, community organizations, and a festival around Civic Center.",
                        estimatedCostMin: 0,
                        estimatedCostMax: 0,
                        priceType: "perPerson",
                        startDate: "2027-06-26",
                        endDate: "2027-06-27",
                        estimatedDuration: 180,
                        location: "Market Street and Civic Center Plaza, San Francisco, CA",
                        website: "https://sfpride.org/"
                    },
                    {
                        name: "Fillmore Jazz Festival",
                        category: "Festivals and Events",
                        description: "Explore a free outdoor jazz festival featuring live music, local performers, neighborhood celebrations, food vendors, artisan booths, and entertainment along Fillmore Street.",
                        estimatedCostMin: 0,
                        estimatedCostMax: 0,
                        priceType: "perPerson",
                        startDate: "2027-07-03",
                        endDate: "2027-07-04",
                        estimatedDuration: 180,
                        location: "Fillmore Street, San Francisco, CA 94115",
                        website: "https://www.fillmorejazzfest.com/"
                    }
                ]
            },

            {
                // WEATHER OPTION 2: RAINY
                condition: "Rainy",
                month: [
                    "October", "November", "December",
                    "January", "February", "March"
                ],

                attractions: [
                    {
                        name: "California Academy of Sciences",
                        category: "Museums & Art",
                        estimatedCost: 49,
                        website: "https://www.calacademy.org/hours-admission"
                    },
                    {
                        // Replaces closed San Francisco Centre
                        name: "San Francisco Japantown",
                        category: "Shopping",
                        estimatedCost: 0,
                        website: "https://www.sfjapantown.org/"
                    },
                    {
                        name: "Ferry Building Marketplace",
                        category: "Food & Dining",
                        estimatedCost: 0,
                        website: "https://www.ferrybuildingmarketplace.com/"
                    }
                ],


                event: [
                    {
                        name: "San Francisco Chinese New Year Parade",
                        category: "Festivals and Events",
                        description: "Celebrate Lunar New Year with illuminated parade floats, lion and dragon dances, traditional music, cultural performances, and festive activities through downtown San Francisco and Chinatown.",
                        estimatedCostMin: 0,
                        estimatedCostMax: 0,
                        priceType: "perPerson",
                        startDate: "2027-02-20",
                        endDate: "2027-02-20",
                        startTime: "17:15",
                        estimatedDuration: 180,
                        location: "Second and Market Streets, Downtown San Francisco, CA",
                        website: "https://chineseparade.com/"
                    },
                    {
                        name: "Safeway Holiday Ice Rink at Union Square",
                        category: "Festivals and Events",
                        description: "Enjoy outdoor ice skating in Union Square during the holiday season, surrounded by festive decorations, seasonal entertainment, shopping, and winter activities in downtown San Francisco.",
                        estimatedCostMin: 17,
                        estimatedCostMax: 22,
                        priceType: "perPerson",
                        startDate: "2026-11-04",
                        endDate: "2027-01-18",
                        estimatedDuration: 60,
                        location: "Union Square, 333 Post Street, San Francisco, CA 94102",
                        website: "https://unionsquareicerink.com/"
                    }
                ]
            }
        ],

        // Shared activities available for both weather options
        activities: [
            {
                // Activity 1: Outdoor & Nature
                name: "Presidio Tunnel Tops Walk",
                category: "Outdoor & Nature",
                description: "Explore a scenic public park featuring walking paths, gardens, picnic areas, and views of the Golden Gate Bridge.",
                estimatedCostMin: 0,
                estimatedCostMax: 0,
                priceType: "perPerson",
                estimatedDuration: 120,
                location: "Presidio Tunnel Tops, San Francisco, CA 94129",
                openingHours: "Daily; outdoor park access varies by area",
                website: "https://presidio.gov/"
            },
            {
                // Activity 2: Food & Dining
                name: "Ferry Building Marketplace Dining",
                category: "Food & Dining",
                description: "Browse restaurants, cafes, artisan food stalls, specialty vendors, and local products inside a historic waterfront landmark.",
                estimatedCostMin: 0,
                estimatedCostMax: 35,
                priceType: "perPerson",
                estimatedDuration: 90,
                location: "1 Ferry Building, San Francisco, CA 94111",
                openingHours: "Varies by vendor",
                website: "https://www.ferrybuildingmarketplace.com/"
            },
            {
                // Activity 3: Shopping
                name: "Union Square Shopping",
                category: "Shopping",
                description: "Explore stores, boutiques, department stores, public art, and shopping streets around Union Square.",
                estimatedCostMin: 0,
                estimatedCostMax: 150,
                priceType: "perPerson",
                estimatedDuration: 120,
                location: "Union Square, San Francisco, CA 94108",
                openingHours: "Varies by retailer",
                website: "https://www.sftravel.com/"
            },
            {
                // Activity 4: Sports & Recreation
                name: "Golden Gate Park Bicycle Ride",
                category: "Sports & Recreation",
                description: "Ride through Golden Gate Park along scenic paths, gardens, lakes, and recreational areas.",
                estimatedCostMin: 0,
                estimatedCostMax: 45,
                priceType: "perPerson",
                estimatedDuration: 120,
                location: "Golden Gate Park, San Francisco, CA 94122",
                openingHours: "Park open daily; rental shop hours vary",
                website: "https://sfrecpark.org/"
            },
            {
                // Activity 5: History & Culture
                name: "Alcatraz Island Historical Tour",
                category: "History & Culture",
                description: "Take a ferry to Alcatraz Island to explore its former federal prison, historic buildings, and views of San Francisco Bay.",
                estimatedCostMin: 45,
                estimatedCostMax: 60,
                priceType: "perPerson",
                estimatedDuration: 180,
                location: "Pier 33, San Francisco, CA 94111",
                openingHours: "Ferry departures vary by date",
                website: "https://www.nps.gov/alca/"
            },
            {
                // Activity 1: Museums & Art
                name: "Exploratorium Science Museum",
                category: "Museums & Art",
                description: "Explore an interactive museum featuring hands-on science exhibits, experiments, technology, and creative discovery.",
                estimatedCostMin: 39,
                estimatedCostMax: 45,
                priceType: "perPerson",
                estimatedDuration: 180,
                location: "Pier 15, San Francisco, CA 94111",
                openingHours: "Check official calendar; hours vary by day",
                website: "https://www.exploratorium.edu/"
            },
            {
                // Activity 2: Museums & Art
                name: "de Young Museum Visit",
                category: "Museums & Art",
                description: "Explore art collections, international exhibitions, textiles, paintings, sculpture, and other creative works.",
                estimatedCostMin: 20,
                estimatedCostMax: 35,
                priceType: "perPerson",
                estimatedDuration: 150,
                location: "50 Hagiwara Tea Garden Drive, San Francisco, CA 94118",
                openingHours: "Verify museum hours",
                website: "https://www.famsf.org/"
            },
            {
                // Activity 3: History & Culture
                name: "Cable Car Museum",
                category: "History & Culture",
                description: "Learn about San Francisco's historic cable car system through photographs, mechanical exhibits, and working machinery.",
                estimatedCostMin: 0,
                estimatedCostMax: 0,
                priceType: "perPerson",
                estimatedDuration: 90,
                location: "1201 Mason Street, San Francisco, CA 94108",
                openingHours: "Check official calendar; hours vary by day",
                website: "https://www.cablecarmuseum.org/"
            },
            {
                // Activity 4: Family Friendly
                name: "Aquarium of the Bay Visit",
                category: "Family Friendly",
                description: "Explore marine exhibits featuring sharks, rays, fish, and other aquatic wildlife from San Francisco Bay.",
                estimatedCostMin: 30,
                estimatedCostMax: 40,
                priceType: "perPerson",
                estimatedDuration: 120,
                location: "Pier 39, San Francisco, CA 94133",
                openingHours: "Check official calendar; hours vary by date",
                website: "https://www.aquariumofthebay.org/"
            },
            {
                // Activity 5: Food & Dining
                name: "Japantown Japanese Food Experience",
                category: "Food & Dining",
                description: "Explore Japanese restaurants, bakeries, tea shops, and specialty food stores within San Francisco's historic Japantown.",
                estimatedCostMin: 15,
                estimatedCostMax: 45,
                priceType: "perPerson",
                estimatedDuration: 120,
                location: "Post Street, San Francisco, CA 94115",
                openingHours: "Varies by business",
                website: "https://www.sftravel.com/"
            }
        ],


        breakfast: [
            {
                name: "Pinecrest Diner",
                category: "Food & Dining",
                description: "American diner serving classic breakfasts, pancakes, eggs, and coffee near Union Square.",
                mealTypes: ["Breakfast"],
                estimatedCostMin: 10,
                estimatedCostMax: 25,
                priceType: "perPerson",
                priceTier: "Budget",
                address: "401 Geary Street, San Francisco, CA 94102, USA",
                cuisine: "American diner",
                openingHours: "Open daily; check seasonal hours",
                website: "https://pinecrestdiner.com/",
                reservationRecommended: false
            },
            {
                name: "Sweet Maple",
                category: "Food & Dining",
                description: "Popular Pacific Heights brunch restaurant known for Millionaire’s Bacon, French toast, and hearty morning plates.",
                mealTypes: ["Breakfast"],
                estimatedCostMin: 20,
                estimatedCostMax: 40,
                priceType: "perPerson",
                priceTier: "Mid-Range",
                address: "2101 Sutter Street, San Francisco, CA 94115, USA",
                cuisine: "American brunch",
                openingHours: "Breakfast and brunch daily; check current hours",
                website: "https://www.sweetmaplesf.com/",
                reservationRecommended: false
            },
            {
                name: "Tartine Inner Sunset",
                category: "Food & Dining",
                description: "Casual all-day Tartine cafe offering pastries, baked goods, breakfast dishes, coffee, and seasonal meals.",
                mealTypes: ["Breakfast"],
                estimatedCostMin: 15,
                estimatedCostMax: 35,
                priceType: "perPerson",
                priceTier: "Mid-Range",
                address: "1226 9th Avenue, San Francisco, CA 94122, USA",
                cuisine: "Bakery and cafe",
                openingHours: "Open daily; verify latest schedule",
                website: "https://tartinebakery.com/san-francisco/inner-sunset",
                reservationRecommended: false
            },
            {
                name: "Garden Court at Palace Hotel",
                category: "Food & Dining",
                description: "Historic glass-domed dining room inside the Palace Hotel serving an upscale breakfast and weekend dining.",
                mealTypes: ["Breakfast"],
                estimatedCostMin: 35,
                estimatedCostMax: 75,
                priceType: "perPerson",
                priceTier: "High-End",
                address: "2 New Montgomery Street, San Francisco, CA 94105, USA",
                cuisine: "Hotel breakfast and Californian",
                openingHours: "Breakfast service daily; verify current hours",
                website: "https://www.gardencourtsf.com/",
                reservationRecommended: true
            },
        ],

        lunch: [
            {
                name: "La Taqueria",
                category: "Food & Dining",
                description: "Mission District taqueria specializing in grilled meat tacos and Mission-style burritos.",
                mealTypes: ["Lunch"],
                estimatedCostMin: 12,
                estimatedCostMax: 25,
                priceType: "perPerson",
                priceTier: "Budget",
                address: "2889 Mission Street, San Francisco, CA 94110, USA",
                cuisine: "Mexican burritos and tacos",
                openingHours: "Lunch service; check current days and hours",
                website: "https://lataqueriasf.net/",
                reservationRecommended: false
            },
            {
                name: "Swan Oyster Depot",
                category: "Food & Dining",
                description: "Long-running Nob Hill seafood counter serving oysters, crab, clam chowder, and fresh seafood during daytime hours.",
                mealTypes: ["Lunch"],
                estimatedCostMin: 25,
                estimatedCostMax: 65,
                priceType: "perPerson",
                priceTier: "Mid-Range",
                address: "1517 Polk Street, San Francisco, CA 94109, USA",
                cuisine: "Seafood counter",
                openingHours: "Daytime service; closed Sunday; check current hours",
                website: "https://www.swanoysterdepot.us/",
                reservationRecommended: false
            },
            {
                name: "Sotto Mare",
                category: "Food & Dining",
                description: "North Beach Italian seafood restaurant popular for seafood cioppino, pasta, and fresh fish.",
                mealTypes: ["Lunch"],
                estimatedCostMin: 25,
                estimatedCostMax: 55,
                priceType: "perPerson",
                priceTier: "Mid-Range",
                address: "552 Green Street, San Francisco, CA 94133, USA",
                cuisine: "Italian seafood",
                openingHours: "Lunch and dinner; check current hours",
                website: "https://www.sottomaresf.com/",
                reservationRecommended: true
            },
            {
                name: "Kokkari Estiatorio",
                category: "Food & Dining",
                description: "Upscale Financial District Greek restaurant serving grilled meats, seafood, Mediterranean small plates, and elegant lunches.",
                mealTypes: ["Lunch"],
                estimatedCostMin: 35,
                estimatedCostMax: 80,
                priceType: "perPerson",
                priceTier: "High-End",
                address: "200 Jackson Street, San Francisco, CA 94111, USA",
                cuisine: "Greek and Mediterranean",
                openingHours: "Weekday lunch service; verify current lunch days",
                website: "https://kokkari.com/",
                reservationRecommended: true
            },
        ],

        dinner: [
            {
                name: "Golden Boy Pizza",
                category: "Food & Dining",
                description: "North Beach counter-service pizza shop offering signature square-cut slices and casual late evening meals.",
                mealTypes: ["Dinner"],
                estimatedCostMin: 10,
                estimatedCostMax: 25,
                priceType: "perPerson",
                priceTier: "Budget",
                address: "542 Green Street, San Francisco, CA 94133, USA",
                cuisine: "Pizza",
                openingHours: "Dinner and late evening; check current hours",
                website: "https://goldenboypizza.com/",
                reservationRecommended: false
            },
            {
                name: "Foreign Cinema",
                category: "Food & Dining",
                description: "Mission District California-Mediterranean restaurant offering seasonal dinners and outdoor film projections in its courtyard.",
                mealTypes: ["Dinner"],
                estimatedCostMin: 35,
                estimatedCostMax: 85,
                priceType: "perPerson",
                priceTier: "Mid-Range",
                address: "2534 Mission Street, San Francisco, CA 94110, USA",
                cuisine: "Californian and Mediterranean",
                openingHours: "Dinner nightly; weekend brunch separately",
                website: "https://foreigncinema.com/",
                reservationRecommended: true
            },
            {
                name: "State Bird Provisions",
                category: "Food & Dining",
                description: "Acclaimed Fillmore restaurant serving inventive Californian small plates and frequently changing seasonal dishes.",
                mealTypes: ["Dinner"],
                estimatedCostMin: 50,
                estimatedCostMax: 110,
                priceType: "perPerson",
                priceTier: "Mid-Range",
                address: "1529 Fillmore Street, San Francisco, CA 94115, USA",
                cuisine: "Modern Californian small plates",
                openingHours: "Dinner service; check reservation calendar",
                website: "https://www.statebirdsf.com/",
                reservationRecommended: true
            },
            {
                name: "Atelier Crenn",
                category: "Food & Dining",
                description: "Luxury fine-dining restaurant by chef Dominique Crenn offering a creative multi-course tasting experience with a seafood-forward focus.",
                mealTypes: ["Dinner"],
                estimatedCostMin: 350,
                estimatedCostMax: 550,
                priceType: "perPerson",
                priceTier: "High-End",
                address: "3127 Fillmore Street, San Francisco, CA 94123, USA",
                cuisine: "Fine dining tasting menu",
                openingHours: "Dinner by reservation; check current schedule",
                website: "https://www.ateliercrenn.com/",
                reservationRecommended: true
            },
        ],


        transportation: [
            "Muni Buses",
            "BART",
            "Uber/Lyft",
            "Cable Car",
            "Walking"
        ],





        transportationOptions: [
            {
                name: "Muni Buses",
                type: "Public Transportation",
                description: "San Francisco Municipal Transportation Agency buses operate throughout the city, connecting Downtown, Union Square, Golden Gate Park, the Mission District, Chinatown, Fisherman's Wharf, and many neighborhoods. Standard adult fare is $2.85 using Clipper or contactless payment, or $3 when paying cash. The fare includes 120 minutes of eligible travel and transfers on regular Muni services, including Muni Metro light rail. Cable cars require separate fares. On January 4, 2027, the electronic adult fare increases to $3.",
                estimatedCostMin: 2.85,
                estimatedCostMax: 3.00,
                priceType: "per2Hours",
                website: "https://www.sfmta.com/getting-around/muni/fares"


            },
            {
                name: "BART",
                type: "Public Transportation",
                description: "Bay Area Rapid Transit regional rail connects San Francisco with Oakland, Berkeley, San Francisco International Airport, Oakland International Airport via the airport connector, and other Bay Area communities. Convenient for airport transfers and regional trips beyond the Muni network. Fares vary by origin, destination, and travel date rather than using a fixed citywide price. Riders can pay using Clipper or supported contactless bank cards. BART and Muni are separate transit systems with different fare structures.",
                estimatedCostMin: 2.50,
                estimatedCostMax: 13,
                priceType: "perRide",
                website: "https://www.bart.gov/tickets/calculator"


            },
            {
                name: "Uber/Lyft",
                type: "Rideshare",
                description: "App-based rideshare transportation available throughout San Francisco and the surrounding Bay Area. Convenient for airport transfers, hotels, restaurants, nightlife, sightseeing, and attractions that are difficult to reach by public transportation. Prices vary depending on distance, traffic, demand, pickup location, vehicle type, and time of day. Airport pickup charges, tolls, and surge pricing may apply.",
                estimatedCostMin: 12,
                estimatedCostMax: 75,
                priceType: "perRide",
                website: "https://www.uber.com/"
            },
            {
                name: "Cable Car",
                type: "Cable Car",
                description: "San Francisco's historic cable car system serves popular sightseeing routes between Powell Street, Nob Hill, Chinatown, Fisherman's Wharf, and other central attractions. The current single-ride adult fare is $9 and does not include transfers between cable car lines. On January 4, 2027, the single-ride fare increases to $12. A new $18 Cable Car Plus day pass will provide unlimited cable car and eligible Muni travel. Cable cars are separate from regular Muni single-ride tickets.",
                estimatedCostMin: 9,
                estimatedCostMax: 12,
                priceType: "perRide",
                website: "https://www.sfmta.com/fares/cable-car-single-ride"


            },
            {
                name: "Walking",
                type: "Walking",
                description: "Free transportation for exploring walkable San Francisco neighborhoods and attractions, including Union Square, Chinatown, North Beach, Fisherman's Wharf, the Embarcadero, and parts of Golden Gate Park. Walking is useful for exploring restaurants, historic landmarks, waterfront attractions, and shopping. San Francisco has steep hills, so travel time and accessibility depend on the route, weather, and elevation changes.",
                estimatedCostMin: 0,
                estimatedCostMax: 0,
                priceType: "free"
            }
        ],




        hotels: [
            {
                name: "HI San Francisco Downtown Hostel",
                category: "Budget",
                description: "Budget-friendly hostel in Downtown San Francisco near Union Square, Powell Street, and public transportation. Offers renovated shared dormitory rooms and private rooms, complimentary Wi-Fi, a shared guest kitchen, lounge areas, laundry facilities, and organized activities. Convenient for visitors who want to explore San Francisco without renting a car. Discounted parking passes for a nearby garage are available through the hostel, but rates vary. Shared dorm beds and private rooms have different prices.",
                address: "312 Mason Street, San Francisco, CA 94102, USA",
                estimatedNightlyCostMin: 55,
                estimatedNightlyCostMax: 190,
                priceType: "perNight",
                amenities: [
                    "Free Wi-Fi",
                    "Shared dormitory accommodations",
                    "Private rooms available",
                    "Private bathrooms in select rooms",
                    "Privacy curtains on dorm beds",
                    "Individual reading lights",
                    "Personal charging outlets",
                    "Secure storage lockers",
                    "Shared guest kitchen",
                    "Shared dining area",
                    "Guest lounge",
                    "Dedicated laptop work area",
                    "Complimentary coffee",
                    "24-hour snack market",
                    "Guest laundry facilities",
                    "Luggage storage",
                    "24-hour front desk",
                    "Organized hostel activities",
                    "Guided neighborhood walking tours",
                    "Nearby discounted garage parking",
                    "Nearby BART and Muni stations",
                    "Walking distance to Union Square"
                ],
                parkingCost: null,
                additionalFees: null,
                website: "https://hihostels.com/hostels/hi-san-francisco-downtown/"






            },
            {
                name: "Hampton Inn San Francisco Downtown/Convention Center",
                category: "Mid-Range",
                description: "Comfortable mid-range hotel in San Francisco's South of Market neighborhood near Moscone Center, Downtown San Francisco, and public transportation. Features complimentary hot breakfast, free Wi-Fi, fitness facilities, modern guest rooms, business-friendly amenities, and convenient access to shopping and sightseeing. Secured valet parking costs $65 per day with in-and-out privileges. The hotel does not offer self-parking or an airport shuttle.",
                address: "942 Mission Street, San Francisco, CA 94103, USA",
                estimatedNightlyCostMin: 130,
                estimatedNightlyCostMax: 320,
                priceType: "perNight",
                amenities: [
                    "Free Wi-Fi",
                    "Complimentary hot breakfast",
                    "Modern guest rooms",
                    "Non-smoking accommodations",
                    "Flat-screen televisions",
                    "Streaming entertainment",
                    "Fitness center",
                    "Connecting rooms available",
                    "Digital Key",
                    "Air conditioning",
                    "Business-friendly amenities",
                    "Cribs available",
                    "Pet-friendly accommodations",
                    "Secured valet parking",
                    "Covered parking",
                    "Parking with in-and-out privileges",
                    "Near Moscone Convention Center",
                    "Near Powell Street transit",
                    "Nearby restaurants and shopping"
                ],
                parkingCost: 65,
                additionalFees: null,
                website: "https://www.hilton.com/en/hotels/sfocchx-hampton-san-francisco-downtown-convention-center/"






            },
            {
                name: "The Ritz-Carlton, San Francisco",
                category: "High-End",
                description: "Luxury five-star hotel in a historic 1909 Neoclassical landmark building in Nob Hill, near Chinatown and Union Square. Offers elegant guest rooms and suites, upscale dining, concierge services, fitness facilities, room service, and luxury guest amenities. Club Level accommodations provide access to a private lounge with food and beverage presentations when included in the booked room category. Valet parking is available for an additional daily charge. Cable car service is nearby for sightseeing.",
                address: "600 Stockton Street, San Francisco, CA 94108, USA",
                estimatedNightlyCostMin: 450,
                estimatedNightlyCostMax: 1100,
                priceType: "perNight",
                amenities: [
                    "Luxury guest rooms and suites",
                    "Historic Neoclassical architecture",
                    "Complimentary Wi-Fi",
                    "Elegant luxury furnishings",
                    "Premium bedding",
                    "Luxury bathroom amenities",
                    "City views in select suites",
                    "Parallel 37 restaurant",
                    "Bruma cocktail lounge",
                    "In-room dining",
                    "Fitness center",
                    "Concierge services",
                    "Club Lounge access for eligible rooms",
                    "Turndown service",
                    "24-hour front desk",
                    "Meeting and event facilities",
                    "Air conditioning",
                    "Dog-friendly accommodations",
                    "Valet parking",
                    "Electric vehicle charging",
                    "Nearby cable car service",
                    "Walking distance to Chinatown",
                    "Near Union Square"
                ],
                parkingCost: 107,
                additionalFees: null,
                website: "https://www.marriott.com/en-us/hotels/sforz-the-ritz-carlton-san-francisco/overview/"

            }
        ],


        vacationRentals: [
            {
                name: "San Francisco Charming Mission Apartment",
                category: "Vacation Rental",
                propertyType: "Entire Guest Suite",
                description: "Renovated two-bedroom guest apartment in San Francisco's Mission District, located within a historic home with a separate private entrance. Features a fully equipped kitchen, fast Wi-Fi, laundry facilities, dedicated workspace, and convenient walking access to restaurants, cafes, parks, and nightlife.",
                address: "Mission District, San Francisco, CA, USA",
                estimatedNightlyCostMin: 445.75,
                estimatedNightlyCostMax: 445.75,
                priceType: "perNight",
                maxGuests: 4,
                bedrooms: 2,
                bathrooms: 1,
                amenities: [
                    "Private entrance",
                    "Fully equipped kitchen",
                    "Dishwasher",
                    "Nespresso coffee maker",
                    "Fast Wi-Fi",
                    "Dedicated workspace",
                    "Washer and dryer",
                    "Smart TV",
                    "Free street parking",
                    "Walkable neighborhood"
                ],
                cleaningFee: null,
                serviceFee: null,
                parkingCost: 0,
                website: "https://www.airbnb.com/rooms/45843816"
            },
            {
                name: "San Francisco Sunny Bernal Heights Retreat",
                category: "Vacation Rental",
                propertyType: "Entire Guest Suite",
                description: "Private two-bedroom guest suite in San Francisco's Bernal Heights neighborhood near the Mission District and Potrero Hill. Features a separate entrance, comfortable living area, kitchenette, patio with bay views, Wi-Fi, and convenient access to neighborhood restaurants, cafes, shopping, and parks.",
                address: "Bernal Heights, San Francisco, CA, USA",
                estimatedNightlyCostMin: 238.25,
                estimatedNightlyCostMax: 238.25,
                priceType: "perNight",
                maxGuests: 6,
                bedrooms: 2,
                bathrooms: 1,
                amenities: [
                    "Private entrance",
                    "Kitchenette",
                    "Living room",
                    "Private patio",
                    "Bay views",
                    "City skyline views",
                    "Wi-Fi",
                    "Dedicated workspace",
                    "Television with Apple TV",
                    "Nearby street parking",
                    "Family-friendly accommodations"
                ],
                cleaningFee: null,
                serviceFee: null,
                parkingCost: null,
                website: "https://www.airbnb.com/rooms/36029332"
            }
        ],
    },



    // seattlle #14

    {

        id: 14,
        city: "Seattle",
        state: "Washington",
        description: "Seattle is a Pacific Northwest city known for the Space Needle, waterfront scenery, coffee culture, museums, technology, arts, and beautiful surrounding nature.",
        duration: "3-5 days",

        weatherOptions: [
            {
                // WEATHER OPTION 1: RAINY
                condition: "Rainy",
                month: [
                    "October", "November", "December",
                    "January", "February", "March"
                ],

                attractions: [
                    {
                        name: "Museum of Pop Culture",
                        category: "Museums & Art",
                        estimatedCost: 35,
                        website: "https://www.mopop.org/plan-your-visit/"
                    },
                    {
                        name: "Seattle Aquarium",
                        category: "Family Friendly",
                        estimatedCost: 45,
                        website: "https://www.seattleaquarium.org/visit/plan-your-visit/"
                    },
                    {
                        name: "Westlake Center",
                        category: "Shopping",
                        estimatedCost: 0,
                        website: "https://www.westlakecenter.com/"
                    }
                ],


                event: [
                    {
                        name: "Seattle Center Winterfest",
                        category: "Festivals and Events",
                        description: "Celebrate the holiday season at Seattle Center with festive lights, a miniature winter train village, live performances, ice sculpting demonstrations, and family-friendly entertainment.",
                        estimatedCostMin: 0,
                        estimatedCostMax: 0,
                        priceType: "perPerson",
                        startDate: "2026-11-27",
                        endDate: "2026-12-31",
                        estimatedDuration: 120,
                        location: "Seattle Center, 305 Harrison Street, Seattle, WA 98109",
                        website: "https://www.seattlecenter.com/events/featured-events/winterfest"
                    },
                    {
                        name: "Christmas Ship Parade of Boats Viewing Party",
                        category: "Festivals and Events",
                        description: "Watch a parade of illuminated holiday boats travel along Seattle's Fremont Cut, featuring the Christmas Ship, holiday music, festive decorations, and free public waterfront viewing.",
                        estimatedCostMin: 0,
                        estimatedCostMax: 0,
                        priceType: "perPerson",
                        startDate: "2026-12-11",
                        endDate: "2026-12-11",
                        startTime: "19:30",
                        endTime: "21:30",
                        estimatedDuration: 120,
                        location: "Evanston Plaza, Evanston Avenue N and N Northlake Way, Seattle, WA",
                        website: "https://www.argosycruises.com/christmas-ship-parade-of-boats/"
                    }
                ]
            },

            {
                // WEATHER OPTION 2: SUNNY
                condition: "Sunny",
                month: [
                    "April", "May", "June",
                    "July", "August", "September"
                ],

                attractions: [
                    {
                        name: "Pike Place Market",
                        category: "Food & Dining",
                        estimatedCost: 0,
                        website: "https://www.pikeplacemarket.org/"
                    },
                    {
                        name: "Space Needle",
                        category: "Sightseeing & Landmarks",
                        estimatedCost: 45,
                        website: "https://www.spaceneedle.com/plan-your-visit"
                    },
                    {
                        name: "Discovery Park",
                        category: "Outdoor & Nature",
                        estimatedCost: 0,
                        website: "https://www.seattle.gov/parks/allparks/discovery-park"
                    }
                ],


                event: [
                    {

                        name: "Seattle International Film Festival",
                        category: "Festivals and Events",
                        description: "Experience Seattle's annual international film festival featuring independent movies, documentaries, short films, international cinema, film premieres, and discussions with filmmakers.",
                        estimatedCostMin: 16,
                        estimatedCostMax: 30,
                        priceType: "perPerson",
                        startDate: "2027-05-13",
                        endDate: "2027-05-23",
                        estimatedDuration: 180,
                        location: "SIFF Cinemas and participating theaters throughout Seattle, WA",
                        website: "https://www.siff.net/festival"
                    },
                    {
                        name: "Seafair Weekend Festival",
                        category: "Festivals and Events",
                        description: "Celebrate Seattle's summer traditions with the Boeing Seafair Air Show, U.S. Navy Blue Angels, hydroplane boat racing, live entertainment, food vendors, and family-friendly festival activities along Lake Washington.",
                        estimatedCostMin: 35,
                        estimatedCostMax: 80,
                        priceType: "perPerson",
                        startDate: "2027-08-06",
                        endDate: "2027-08-08",
                        estimatedDuration: 240,
                        location: "Genesee Park and Lake Washington, Seattle, WA 98118",
                        website: "https://www.seafair.org/seafair-weekend-festival/"
                    }

                ]
            }
        ],

        // Activities shared by both weather options
        activities: [
            {
                // Activity 1: Museums & Art
                name: "Chihuly Garden and Glass",
                category: "Museums & Art",
                description: "Explore colorful glass artwork, large-scale sculptures, illuminated installations, and the famous Glasshouse.",
                estimatedCostMin: 40,
                estimatedCostMax: 45,
                priceType: "perPerson",
                estimatedDuration: 120,
                location: "305 Harrison Street, Seattle, WA 98109",
                openingHours: "Hours vary by date and private events",
                website: "https://www.chihulygardenandglass.com/"
            },
            {
                // Activity 2: Museums & Art
                name: "Museum of Flight Visit",
                category: "Museums & Art",
                description: "Explore historic airplanes, spacecraft, aviation exhibits, and interactive displays about flight and space exploration.",
                estimatedCostMin: 28,
                estimatedCostMax: 32,
                priceType: "perPerson",
                estimatedDuration: 180,
                location: "9404 E Marginal Way S, Seattle, WA 98108",
                openingHours: "Daily hours vary; check museum calendar",
                website: "https://www.museumofflight.org/"
            },
            {
                // Activity 3: Food & Dining
                name: "Pike Place Market Food Experience",
                category: "Food & Dining",
                description: "Explore Seattle's historic market, sample local food, browse bakeries, and visit specialty coffee and seafood vendors.",
                estimatedCostMin: 0,
                estimatedCostMax: null,
                priceType: "perPerson",
                estimatedDuration: 120,
                location: "85 Pike Street, Seattle, WA 98101",
                openingHours: "Varies by vendor",
                website: "https://www.pikeplacemarket.org/"
            },
            {
                // Activity 4: History & Culture
                name: "Seattle Underground Tour",
                category: "History & Culture",
                description: "Take a guided walking tour through historic underground passages and learn about Seattle's early history.",
                estimatedCostMin: 0,
                estimatedCostMax: 40,
                priceType: "perPerson",
                estimatedDuration: 90,
                location: "614 1st Avenue, Seattle, WA 98104",
                openingHours: "Tour times vary",
                website: "https://www.undergroundtour.com/"
            },
            {
                // Activity 5: Family Friendly
                name: "Pacific Science Center Visit",
                category: "Family Friendly",
                description: "Explore interactive science displays, educational exhibits, live demonstrations, and immersive learning experiences.",
                estimatedCostMin: 25,
                estimatedCostMax: 35,
                priceType: "perPerson",
                estimatedDuration: 150,
                location: "200 2nd Avenue N, Seattle, WA 98109",
                openingHours: "Hours vary by date; check exhibitions and operating calendar",
                website: "https://pacificsciencecenter.org/"
            },
            {
                // Activity 1: Outdoor & Nature
                name: "Ballard Locks Botanical Garden Visit",
                category: "Outdoor & Nature",
                description: "Explore landscaped gardens and watch boats travel through the locks connecting Seattle's waterways.",
                estimatedCostMin: 0,
                estimatedCostMax: 0,
                priceType: "perPerson",
                estimatedDuration: 90,
                location: "3015 NW 54th Street, Seattle, WA 98107",
                openingHours: "Verify public visitor hours",
                website: "https://www.nws.usace.army.mil/"
            },
            {
                // Activity 2: Beaches & Water Activities
                name: "Alki Beach Waterfront Walk",
                category: "Beaches & Water Activities",
                description: "Walk along Seattle's waterfront beach and enjoy views of Puget Sound, boats, and the city skyline.",
                estimatedCostMin: 0,
                estimatedCostMax: 0,
                priceType: "perPerson",
                estimatedDuration: 120,
                location: "Alki Avenue SW, Seattle, WA 98116",
                openingHours: "Verify posted beach park hours",
                website: "https://www.seattle.gov/parks"
            },
            {
                // Activity 3: Sports & Recreation
                name: "Green Lake Park Loop Walk",
                category: "Sports & Recreation",
                description: "Enjoy a scenic walk around Green Lake with views of trees, recreational fields, and the waterfront.",
                estimatedCostMin: 0,
                estimatedCostMax: 0,
                priceType: "perPerson",
                estimatedDuration: 120,
                location: "7201 E Green Lake Drive N, Seattle, WA 98115",
                openingHours: "Verify posted park hours",
                website: "https://www.seattle.gov/parks"
            },
            {
                // Activity 4: Entertainment
                name: "Seattle Great Wheel Experience",
                category: "Entertainment",
                description: "Ride a waterfront observation wheel with views of Elliott Bay and downtown Seattle.",
                estimatedCostMin: 25,
                estimatedCostMax: 35,
                priceType: "perPerson",
                estimatedDuration: 60,
                location: "1301 Alaskan Way, Seattle, WA 98101",
                openingHours: "Daily hours vary by season and weather",
                website: "https://seattlegreatwheel.com/"
            },
            {
                // Activity 5: Shopping
                name: "Fremont Neighborhood Shopping and Art Walk",
                category: "Shopping",
                description: "Explore independent boutiques, local cafes, public sculptures, and unique neighborhood artwork.",
                estimatedCostMin: 0,
                estimatedCostMax: null,
                priceType: "perPerson",
                estimatedDuration: 120,
                location: "Fremont Avenue N, Seattle, WA 98103",
                openingHours: "Varies by business",
                website: "https://visitseattle.org/"
            }
        ],



        breakfast: [
            {
                name: "Biscuit Bitch",
                category: "Food & Dining",
                description: "Southern-style breakfast biscuits with sausage gravy, eggs and coffee served counter-style near Pike Place Market.",
                mealTypes: ["Breakfast"],
                estimatedCostMin: 8,
                estimatedCostMax: 18,
                priceType: "perPerson",
                priceTier: "Budget",
                address: "1909 1st Avenue, Seattle, WA 98101",
                cuisine: "Breakfast biscuits",
                openingHours: "Daily approximately 7:30 AM-1 PM",
                website: "https://biscuitbitch.square.site/",
                reservationRecommended: false
            },
            {
                name: "Portage Bay Cafe",
                category: "Food & Dining",
                description: "Pacific Northwest breakfast and brunch serving pancakes, French toast, eggs and locally sourced ingredients at the South Lake Union cafe.",
                mealTypes: ["Breakfast"],
                estimatedCostMin: 18,
                estimatedCostMax: 35,
                priceType: "perPerson",
                priceTier: "Mid-Range",
                address: "391 Terry Avenue N, Seattle, WA 98109",
                cuisine: "Pacific Northwest brunch",
                openingHours: "Breakfast and lunch daily; verify current hours",
                website: "https://www.portagebaycafe.com/south-lake-union",
                reservationRecommended: true
            },
            {
                name: "Tilikum Place Cafe",
                category: "Food & Dining",
                description: "European-influenced brunch spot in Belltown known for savory and sweet Dutch baby pancakes and seasonal breakfast plates.",
                mealTypes: ["Breakfast"],
                estimatedCostMin: 20,
                estimatedCostMax: 40,
                priceType: "perPerson",
                priceTier: "Mid-Range",
                address: "407 Cedar Street, Seattle, WA 98121",
                cuisine: "European-inspired brunch",
                openingHours: "Brunch Thursday-Friday 10 AM-2 PM and Saturday-Sunday 9 AM-2 PM; verify holidays",
                website: "https://www.tilikumplacecafe.com/",
                reservationRecommended: true
            },
            {
                name: "The George at Fairmont Olympic",
                category: "Food & Dining",
                description: "Upscale brasserie inside Fairmont Olympic Hotel offering chef-prepared breakfast and weekend brunch with Pacific Northwest ingredients.",
                mealTypes: ["Breakfast"],
                estimatedCostMin: 28,
                estimatedCostMax: 60,
                priceType: "perPerson",
                priceTier: "High-End",
                address: "411 University Street, Seattle, WA 98101",
                cuisine: "Upscale hotel breakfast",
                openingHours: "Weekday breakfast 6:30 AM-11 AM; weekend brunch 7 AM-2 PM",
                website: "https://www.thegeorgeseattle.com/",
                reservationRecommended: true
            },
        ],

        lunch: [
            {
                name: "Pike Place Chowder",
                category: "Food & Dining",
                description: "Popular Pike Place Market seafood counter serving award-winning clam chowder, seafood soups and bread bowls.",
                mealTypes: ["Lunch"],
                estimatedCostMin: 12,
                estimatedCostMax: 25,
                priceType: "perPerson",
                priceTier: "Budget",
                address: "1530 Post Alley, Seattle, WA 98101",
                cuisine: "Seafood chowder",
                openingHours: "Daily lunch service; verify seasonal hours",
                website: "https://www.pikeplacechowder.com/pikeplacemarketlocation",
                reservationRecommended: false
            },
            {
                name: "Piroshky Piroshky",
                category: "Food & Dining",
                description: "Pike Place Market bakery known for savory Russian-style hand pies and sweet pastries suitable for an inexpensive lunch.",
                mealTypes: ["Lunch"],
                estimatedCostMin: 9,
                estimatedCostMax: 20,
                priceType: "perPerson",
                priceTier: "Mid-Range",
                address: "1908 Pike Place, Seattle, WA 98101",
                cuisine: "Eastern European pastries",
                openingHours: "Monday-Thursday 8 AM-6:30 PM; Friday-Sunday 8 AM-7 PM",
                website: "https://piroshkybakery.com/stores",
                reservationRecommended: false
            },
            {
                name: "Matt’s in the Market",
                category: "Food & Dining",
                description: "Pacific Northwest restaurant above Pike Place Market serving seasonal seafood, sandwiches, salads and market-inspired lunch plates.",
                mealTypes: ["Lunch"],
                estimatedCostMin: 22,
                estimatedCostMax: 48,
                priceType: "perPerson",
                priceTier: "Mid-Range",
                address: "94 Pike Street, Suite 32, Seattle, WA 98101",
                cuisine: "Pacific Northwest",
                openingHours: "Lunch approximately 11:30 AM-2:30 PM; verify reservations",
                website: "https://www.mattsinthemarket.com/",
                reservationRecommended: true
            },
            {
                name: "The Pink Door",
                category: "Food & Dining",
                description: "Pike Place Market Italian-American restaurant known for pasta, seafood, romantic dining and a patio overlooking Elliott Bay.",
                mealTypes: ["Lunch"],
                estimatedCostMin: 27,
                estimatedCostMax: 65,
                priceType: "perPerson",
                priceTier: "High-End",
                address: "1919 Post Alley, Seattle, WA 98101",
                cuisine: "Upscale Italian",
                openingHours: "Lunch and dinner offered; verify current lunch days and seating times",
                website: "https://www.thepinkdoor.net/",
                reservationRecommended: true
            },
        ],

        dinner: [
            {
                name: "Dick’s Drive-In",
                category: "Food & Dining",
                description: "Classic Seattle fast-food counter serving cheeseburgers, hand-cut fries and milkshakes at its Capitol Hill location.",
                mealTypes: ["Dinner"],
                estimatedCostMin: 7,
                estimatedCostMax: 18,
                priceType: "perPerson",
                priceTier: "Budget",
                address: "115 Broadway Avenue E, Seattle, WA 98102",
                cuisine: "American burgers",
                openingHours: "Daily late morning through late evening; verify location hours",
                website: "https://www.ddir.com/",
                reservationRecommended: false
            },
            {
                name: "Toulouse Petit",
                category: "Food & Dining",
                description: "Lively Lower Queen Anne restaurant serving Cajun and Creole-inspired seafood, jambalaya, gumbo and New Orleans dishes.",
                mealTypes: ["Dinner"],
                estimatedCostMin: 23,
                estimatedCostMax: 55,
                priceType: "perPerson",
                priceTier: "Mid-Range",
                address: "601 Queen Anne Avenue N, Seattle, WA 98109",
                cuisine: "Cajun and Creole",
                openingHours: "Daily dinner service; verify hours and happy hour",
                website: "https://www.toulousepetit.com/",
                reservationRecommended: true
            },
            {
                name: "The Walrus and the Carpenter",
                category: "Food & Dining",
                description: "Ballard oyster bar serving fresh Pacific Northwest oysters, seafood small plates and seasonal dishes.",
                mealTypes: ["Dinner"],
                estimatedCostMin: 30,
                estimatedCostMax: 75,
                priceType: "perPerson",
                priceTier: "Mid-Range",
                address: "4743 Ballard Avenue NW, Seattle, WA 98107",
                cuisine: "Seafood and oysters",
                openingHours: "Evening service; verify current days and opening times",
                website: "https://thewalrusbar.com/",
                reservationRecommended: true
            },
            {
                name: "Canlis",
                category: "Food & Dining",
                description: "Upscale tasting-menu restaurant in Queen Anne with Pacific Northwest fine dining, lake views and formal service.",
                mealTypes: ["Dinner"],
                estimatedCostMin: 180,
                estimatedCostMax: 250,
                priceType: "perPerson",
                priceTier: "High-End",
                address: "2576 Aurora Avenue N, Seattle, WA 98109",
                cuisine: "Fine dining Pacific Northwest",
                openingHours: "Dinner by reservation; verify current service days",
                website: "https://canlis.com/",
                reservationRecommended: true
            },
        ],






        transportation: [
            "Link Light Rail",
            "King County Metro Buses",
            "Uber/Lyft",
            "Rental Car"
        ],



        transportationOptions: [
            {
                name: "Link Light Rail",
                type: "Public Transportation",
                description: "Sound Transit's Link light rail connects Seattle-Tacoma International Airport, Downtown Seattle, Capitol Hill, the University of Washington, Northgate, and other Puget Sound communities. The 1 Line and 2 Line have a standard adult fare of $3 per ride. A Link day pass costs $6. Eligible transfers between Link and participating regional buses receive fare credit within two hours when using an ORCA card or supported contactless payment. Link is especially useful for airport transfers and exploring Seattle without a rental car.",
                estimatedCostMin: 3,
                estimatedCostMax: 3,
                priceType: "perRide",
                website: "https://www.soundtransit.org/ride-with-us/how-to-pay/fares"
            },
            {
                name: "King County Metro Buses",
                type: "Public Transportation",
                description: "King County Metro operates local buses and RapidRide services across Seattle and surrounding communities. Routes serve Downtown Seattle, Pike Place Market-area stops, Seattle Center, Capitol Hill, Ballard, Fremont, the University District, and other neighborhoods. The standard adult fare is $3 per ride. An adult Metro day pass costs $6. Eligible transfers between participating buses and Link light rail receive fare credit for two hours when using ORCA or supported contactless payment. Cash-paid paper transfers are valid only on Metro buses.",
                estimatedCostMin: 3,
                estimatedCostMax: 3,
                priceType: "perRide",
                website: "https://kingcounty.gov/en/dept/metro/fares-and-payment/prices"
            },
            {
                name: "Uber/Lyft",
                type: "Rideshare",
                description: "App-based rideshare transportation is available throughout Seattle and the surrounding metropolitan area. Convenient for airport transfers, hotels, restaurants, nightlife, waterfront attractions, and neighborhoods that require multiple transit connections. Prices vary by distance, traffic, demand, pickup location, vehicle type, and time of day. Airport pickup fees, tolls, and surge pricing may apply. Designated rideshare pickup areas may be required at Seattle-Tacoma International Airport.",
                estimatedCostMin: 15,
                estimatedCostMax: 65,
                priceType: "perRide",
                website: "https://www.uber.com/"
            },
            {
                name: "Rental Car",
                type: "Car Rental",
                description: "Rental vehicles are available at Seattle-Tacoma International Airport and throughout the Seattle metropolitan area. Useful for exploring destinations outside central Seattle, including Mount Rainier National Park, Snoqualmie Falls, nearby hiking areas, and surrounding Washington communities. Rental rates vary by travel dates, vehicle type, driver age, and rental company. Fuel, tolls, parking, insurance, and optional fees are not included. Downtown Seattle parking can be expensive, and public transportation may be more practical for central attractions.",
                estimatedCostMin: 45,
                estimatedCostMax: 110,
                priceType: "perDay",
                website: "https://www.enterprise.com/"
            }
        ],




        hotels: [
            {
                name: "Green Tortoise Hostel Seattle",
                category: "Budget",
                description: "Budget-friendly hostel in Downtown Seattle directly across from Pike Place Market and near the Seattle waterfront. Offers shared dormitory beds and limited private rooms, complimentary breakfast, free Wi-Fi, communal kitchen, laundry facilities, private single-occupancy shared bathrooms, and nightly social activities. The property is conveniently located near restaurants, shopping, transit connections, and Seattle attractions. No dedicated on-site parking is available, but discounted nearby garage parking is listed at $21 per 24 hours.",
                address: "105B Pike Street, Seattle, WA 98101, USA",
                estimatedNightlyCostMin: 50,
                estimatedNightlyCostMax: 160,
                priceType: "perNight",
                amenities: [
                    "Free Wi-Fi",
                    "Complimentary breakfast",
                    "Shared dormitory rooms",
                    "Limited private rooms",
                    "Bunk beds with privacy curtains",
                    "Individual reading lights",
                    "Personal charging outlets",
                    "Secure storage lockers",
                    "Air conditioning",
                    "Shared private-use bathrooms",
                    "Rainfall showers",
                    "Communal guest kitchen",
                    "Shared dining area",
                    "Guest lounge",
                    "Nightly social activities",
                    "Organized walking tours",
                    "Guest laundry facilities",
                    "Luggage storage",
                    "24-hour reception",
                    "Nearby discounted garage parking",
                    "Across from Pike Place Market",
                    "Walking distance to waterfront",
                    "Nearby Link light rail stations"
                ],
                parkingCost: null,
                additionalFees: null,
                website: "https://greentortoise.net/"
                // as currently advertised by the hostel.
            },
            {
                name: "Hampton Inn & Suites Seattle-Downtown",
                category: "Mid-Range",
                description: "Comfortable hotel near Seattle Center, the Space Needle, and Museum of Pop Culture. Features modern guest rooms and suites, complimentary hot breakfast, free Wi-Fi, fitness center, business center, and convenient access to Downtown Seattle attractions. The hotel is a short walk from Seattle Center Monorail connections and nearby restaurants. Secured on-site self-parking costs $40 per day with in-and-out privileges. No hotel valet parking or airport shuttle is offered.",
                address: "700 Fifth Avenue North, Seattle, WA 98109, USA",
                estimatedNightlyCostMin: 130,
                estimatedNightlyCostMax: 280,
                priceType: "perNight",
                amenities: [
                    "Free Wi-Fi",
                    "Complimentary hot breakfast",
                    "Modern guest rooms and suites",
                    "Non-smoking accommodations",
                    "Fitness center",
                    "Business center",
                    "Flat-screen televisions",
                    "Streaming entertainment",
                    "Connecting rooms available",
                    "Digital Key",
                    "Cribs available",
                    "Air conditioning",
                    "Pet-friendly accommodations",
                    "Electric vehicle charging",
                    "Secured on-site self-parking",
                    "Covered parking",
                    "Parking with in-and-out privileges",
                    "Near Seattle Center",
                    "Near the Space Needle",
                    "Near Museum of Pop Culture",
                    "Near Seattle Center Monorail"
                ],
                parkingCost: 40,
                additionalFees: null,
                website: "https://www.hilton.com/en/hotels/seadthx-hampton-suites-seattle-downtown/"
            },
            {
                name: "Four Seasons Hotel Seattle",
                category: "High-End",
                description: "Luxury five-star hotel in Downtown Seattle near Pike Place Market, Seattle Art Museum, and the waterfront. Features elegant guest rooms and suites, waterfront and Elliott Bay views in select accommodations, a heated outdoor infinity-edge swimming pool, hot tub, full-service spa, fitness center, upscale dining at Goldfinch Tavern, and personalized concierge services. The property also offers a complimentary local house car on a first-come, first-served basis within its service area. Overnight valet parking costs $75 per night.",
                address: "99 Union Street, Seattle, WA 98101, USA",
                estimatedNightlyCostMin: 500,
                estimatedNightlyCostMax: 1150,
                priceType: "perNight",
                amenities: [
                    "Luxury guest rooms and suites",
                    "Wi-Fi",
                    "Waterfront views in select rooms",
                    "Elliott Bay views in select rooms",
                    "Premium bedding",
                    "Floor-to-ceiling windows in select rooms",
                    "Luxury bathroom amenities",
                    "Heated outdoor infinity-edge pool",
                    "Outdoor hot tub",
                    "Waterfront pool terrace",
                    "Seasonal poolside dining",
                    "Full-service spa",
                    "Spa massages and treatments",
                    "Fitness center",
                    "Goldfinch Tavern restaurant",
                    "Cocktail lounge",
                    "In-room dining",
                    "Concierge services",
                    "Complimentary local house car",
                    "Air conditioning",
                    "Pet-friendly accommodations",
                    "Overnight valet parking",
                    "Near Pike Place Market",
                    "Across from Seattle Art Museum",
                    "Walking distance to the waterfront"
                ],
                parkingCost: 75,
                additionalFees: null,
                website: "https://www.fourseasons.com/seattle/"
            }
        ],




        vacationRentals: [
            {
                name: "Seattle Capitol Hill Skyline Loft",
                category: "Vacation Rental",
                propertyType: "Entire loft",
                description: "Stylish loft in Seattle's Capitol Hill neighborhood featuring three sleeping areas, a spacious living room, a large dining table, and a private 600-square-foot outdoor deck with a fire pit, hammock, and seating. Includes a Sonos sound system, full kitchen, high-speed Wi-Fi, and one parking space. Located near Cal Anderson Park, restaurants, nightlife, and light rail. One sleeping area is an open loft rather than an enclosed bedroom.", address: "Capitol Hill, Seattle, WA, USA — exact street address provided after booking",
                estimatedNightlyCostMin: 225.25,
                estimatedNightlyCostMax: 225.25,
                priceType: "perNight",
                maxGuests: 5,
                bedrooms: 3,
                bathrooms: 1.5,
                amenities: [
                    "Fast Wi-Fi",
                    "Full kitchen",
                    "Private 600-square-foot deck",
                    "Outdoor fire pit",
                    "Hammock",
                    "Outdoor seating",
                    "King bed",
                    "Queen bed",
                    "Single bed in open loft",
                    "Large dining table",
                    "Sonos sound system",
                    "55-inch Smart TV",
                    "Dedicated workspace",
                    "Free on-site parking",
                    "Nearby public transportation"
                ],
                cleaningFee: null,
                serviceFee: null,
                parkingCost: 0,
                website: "https://www.airbnb.com/rooms/643795086584526464"
            },

            {
                name: "Seattle Highland Park Garden Guesthouse",
                category: "Vacation Rental",
                propertyType: "Entire Guesthouse",
                description: "Private garden guesthouse in Seattle's Highland Park neighborhood with a queen loft bedroom, modern kitchen, living area, dedicated workspace, private deck, and landscaped outdoor garden. Located near Westcrest Park and White Center, with access to downtown Seattle and Seattle-Tacoma International Airport.",
                address: "Highland Park, Seattle, WA, USA",
                estimatedNightlyCostMin: 167.50,
                estimatedNightlyCostMax: 167.50,
                priceType: "perNight",
                maxGuests: 2,
                bedrooms: 1,
                bathrooms: 1,
                amenities: [
                    "Private entrance",
                    "Queen loft bedroom",
                    "Modern kitchen",
                    "Wi-Fi",
                    "Dedicated workspace",
                    "Living room",
                    "Dining area",
                    "Walk-in shower",
                    "Private deck",
                    "Landscaped garden",
                    "Outdoor seating",
                    "Fire pit"
                ],
                cleaningFee: null,
                serviceFee: null,
                parkingCost: null,
                website: "https://www.airbnb.com/rooms/829846023491706591"
            }

        ]
    },



    // Washington #15 

    {
        // ==========================================
        // DESTINATION 15: WASHINGTON, D.C.
        // ==========================================
        id: 15,
        city: "Washington",
        state: "District of Columbia",
        description: "Washington, D.C. is the capital of the United States, known for historic monuments, national museums, government landmarks, cultural attractions, parks, and diverse neighborhoods.",
        duration: "3-5 days",

        weatherOptions: [
            {
                // WEATHER OPTION 1: HOT
                condition: "Hot",
                month: [
                    "June", "July", "August", "September"
                ],

                attractions: [
                    {
                        name: "Smithsonian Air and Space Museum",
                        category: "Museums & Art",
                        estimatedCost: 0,
                        website: "https://airandspace.si.edu/visit/museum-dc"
                    },
                    {
                        name: "Union Station",
                        category: "Shopping",
                        estimatedCost: 0,
                        website: "https://www.unionstationdc.com/"
                    },
                    {
                        name: "National Museum of American History",
                        category: "Museums & Art",
                        estimatedCost: 0,
                        website: "https://americanhistory.si.edu/"
                    }
                ],


                event: [
                    {
                        name: "Capital Pride Festival",
                        category: "Festivals and Events",
                        description: "Celebrate LGBTQ+ culture and community at Washington DC's Capital Pride Festival, featuring live musical performances, multiple entertainment stages, local artisans, cultural activities, food vendors, and community organizations along Pennsylvania Avenue.",
                        estimatedCostMin: 0,
                        estimatedCostMax: 0,
                        priceType: "perPerson",
                        startDate: "2027-06-13",
                        endDate: "2027-06-13",
                        startTime: "12:00",
                        endTime: "22:00",
                        estimatedDuration: 180,
                        location: "Pennsylvania Avenue NW, Washington, DC",
                        website: "https://www.capitalpride.org/event/festival/"
                    },
                    {
                        name: "National Independence Day Parade",
                        category: "Festivals and Events",
                        description: "Celebrate Independence Day in the nation's capital with a patriotic parade featuring marching bands, floats, community organizations, and performances along historic Constitution Avenue.",
                        estimatedCostMin: 0,
                        estimatedCostMax: 0,
                        priceType: "perPerson",
                        startDate: "2027-07-04",
                        endDate: "2027-07-04",
                        startTime: "11:45",
                        estimatedDuration: 120,
                        location: "Constitution Avenue NW between 7th and 17th Streets, Washington, DC",
                        website: "https://july4thparade.com/"
                    }
                ]
            },

            {
                // WEATHER OPTION 2: COOL
                condition: "Cool",
                month: [
                    "October", "November", "December",
                    "January", "February", "March"
                ],

                attractions: [
                    {
                        name: "Lincoln Memorial",
                        category: "Sightseeing & Landmarks",
                        estimatedCost: 0,
                        website: "https://www.nps.gov/linc/"
                    },
                    {
                        name: "Eastern Market",
                        category: "Shopping",
                        estimatedCost: 0,
                        website: "https://easternmarket-dc.org/"
                    },
                    {
                        name: "National Mall",
                        category: "Sightseeing & Landmarks",
                        estimatedCost: 0,
                        website: "https://www.nps.gov/nama/"
                    }
                ],


                event: [
                    {
                        name: "DowntownDC Holiday Market",
                        category: "Festivals and Events",
                        description: "Experience a festive holiday market featuring more than 120 local vendors, handmade gifts, artisan crafts, seasonal food, holiday lights, shopping, and live entertainment in downtown Washington DC.",
                        estimatedCostMin: 0,
                        estimatedCostMax: 0,
                        priceType: "perPerson",
                        startDate: "2026-11-13",
                        endDate: "2026-12-23",
                        estimatedDuration: 120,
                        location: "F Street NW between 7th and 9th Streets NW, Washington, DC 20004",
                        website: "https://www.downtowndc.org/holiday-market/"
                    },
                    {
                        name: "National Cherry Blossom Festival",
                        category: "Festivals and Events",
                        description: "Celebrate Japanese-American friendship and the arrival of spring in Washington DC with beautiful cherry blossoms, cultural performances, arts, family activities, and special events around the Tidal Basin and throughout the city.",
                        estimatedCostMin: 0,
                        estimatedCostMax: 0,
                        priceType: "perPerson",
                        startDate: "2027-03-20",
                        endDate: "2027-04-11",
                        estimatedDuration: 180,
                        location: "Tidal Basin and participating locations throughout Washington, DC",
                        website: "https://nationalcherryblossomfestival.org/"
                    }
                ]
            }
        ],

        // Shared activities available in both Hot and Cool weather
        activities: [
            {
                // Activity 1: Museums & Art
                name: "Smithsonian National Museum of Natural History",
                category: "Museums & Art",
                description: "Explore dinosaur fossils, gemstones, wildlife exhibits, ancient cultures, and natural history collections. General admission is free.",
                estimatedCostMin: 0,
                estimatedCostMax: 0,
                priceType: "perPerson",
                estimatedDuration: 180,
                location: "10th Street and Constitution Avenue NW, Washington, DC 20560",
                openingHours: "Verify current museum hours",
                website: "https://naturalhistory.si.edu/"
            },
            {
                // Activity 2: History & Culture
                name: "National Museum of African American History and Culture",
                category: "History & Culture",
                description: "Explore exhibitions documenting African American history, cultural contributions, art, music, and civil rights.",
                estimatedCostMin: 0,
                estimatedCostMax: 0,
                priceType: "perPerson",
                estimatedDuration: 180,
                location: "1400 Constitution Avenue NW, Washington, DC 20560",
                openingHours: "Free timed-entry pass required; verify hours",
                website: "https://nmaahc.si.edu/"
            },
            {
                // Activity 3: Food & Dining
                name: "Union Market Food Hall",
                category: "Food & Dining",
                description: "Explore a food hall featuring local restaurants, international food vendors, bakeries, specialty foods, and creative businesses.",
                estimatedCostMin: 0,
                estimatedCostMax: 35,
                priceType: "perPerson",
                estimatedDuration: 90,
                location: "1309 5th Street NE, Washington, DC 20002",
                openingHours: "Varies by vendor",
                website: "https://unionmarketdc.com/"
            },
            {
                // Activity 4: Museums & Art
                name: "National Gallery of Art Visit",
                category: "Museums & Art",
                description: "Explore art collections featuring paintings, sculptures, photography, historical artwork, and contemporary exhibitions.",
                estimatedCostMin: 0,
                estimatedCostMax: 0,
                priceType: "perPerson",
                estimatedDuration: 150,
                location: "Constitution Avenue NW, Washington, DC 20565",
                openingHours: "Verify current gallery hours",
                website: "https://www.nga.gov/"
            },
            {
                // Activity 5: Family Friendly
                name: "International Spy Museum",
                category: "Family Friendly",
                description: "Explore interactive exhibits about espionage, intelligence history, spy equipment, and undercover operations. Admission varies by date and availability.",
                estimatedCostMin: 30,
                estimatedCostMax: 40,
                priceType: "perPerson",
                estimatedDuration: 150,
                location: "700 L'Enfant Plaza SW, Washington, DC 20024",
                openingHours: "Verify current museum hours",
                website: "https://www.spymuseum.org/"
            },
            {
                // Activity 1: History & Culture
                name: "National Archives Museum",
                category: "History & Culture",
                description: "View historic American documents and exhibits, including the Declaration of Independence, Constitution, and Bill of Rights.",
                estimatedCostMin: 0,
                estimatedCostMax: 0,
                priceType: "perPerson",
                estimatedDuration: 120,
                location: "701 Constitution Avenue NW, Washington, DC 20408",
                openingHours: "Verify museum hours and reservations",
                website: "https://museum.archives.gov/"
            },
            {
                // Activity 2: Outdoor & Nature
                name: "United States Botanic Garden Conservatory",
                category: "Outdoor & Nature",
                description: "Explore indoor tropical plant collections, botanical exhibits, landscaped gardens, and educational displays.",
                estimatedCostMin: 0,
                estimatedCostMax: 0,
                priceType: "perPerson",
                estimatedDuration: 90,
                location: "100 Maryland Avenue SW, Washington, DC 20001",
                openingHours: "Conservatory daily 10 AM-5 PM; holiday exceptions",
                website: "https://www.usbg.gov/"
            },
            {
                // Activity 3: Museums & Art
                name: "National Portrait Gallery Visit",
                category: "Museums & Art",
                description: "Explore portraits of historical figures, artists, presidents, and other influential Americans.",
                estimatedCostMin: 0,
                estimatedCostMax: 0,
                priceType: "perPerson",
                estimatedDuration: 120,
                location: "8th and G Streets NW, Washington, DC 20001",
                openingHours: "Verify current gallery hours",
                website: "https://npg.si.edu/"
            },
            {
                // Activity 4: Food & Dining
                name: "Georgetown Dining and Shopping Walk",
                category: "Food & Dining",
                description: "Explore Georgetown's historic streets, restaurants, cafes, bakeries, boutiques, and waterfront shopping.",
                estimatedCostMin: 0,
                estimatedCostMax: 40,
                priceType: "perPerson",
                estimatedDuration: 120,
                location: "M Street NW, Georgetown, Washington, DC 20007",
                openingHours: "Varies by restaurant and store",
                website: "https://www.georgetowndc.com/"
            },
            {
                // Activity 5: Museums & Art
                name: "Smithsonian American Art Museum Visit",
                category: "Museums & Art",
                description: "Explore American artwork, sculpture, photography, paintings, and cultural exhibitions in the historic Patent Office Building.",
                estimatedCostMin: 0,
                estimatedCostMax: 0,
                priceType: "perPerson",
                estimatedDuration: 120,
                location: "8th and G Streets NW, Washington, DC 20004",
                openingHours: "Verify current museum hours",
                website: "https://americanart.si.edu/"
            }
        ],



        // WASHINGTON, D.C. RESTAURANTS — RESEARCH CANDIDATES
        // Per meal: 1 Budget, 2 Mid-Range, 1 High-End.
        breakfast: [
            {
                name: "Lincoln Waffle Shop",
                category: "Food & Dining",
                description: "Casual downtown diner near Ford’s Theatre serving waffles, pancakes, eggs, bacon and classic American breakfasts.",
                mealTypes: ["Breakfast"],
                estimatedCostMin: 10,
                estimatedCostMax: 23,
                priceType: "perPerson",
                priceTier: "Budget",
                address: "504 10th Street NW, Washington, DC 20004, USA",
                cuisine: "American diner",
                openingHours: "Daily morning and afternoon service; check holiday hours",
                website: "https://www.lincolnswaffleshop.com/",
                reservationRecommended: false
            },
            {
                name: "Call Your Mother Deli",
                category: "Food & Dining",
                description: "Popular Georgetown bagel deli known for creative breakfast sandwiches, fresh bagels and coffee.",
                mealTypes: ["Breakfast"],
                estimatedCostMin: 12,
                estimatedCostMax: 25,
                priceType: "perPerson",
                priceTier: "Mid-Range",
                address: "3428 O Street NW, Washington, DC 20007, USA",
                cuisine: "Bagels and deli",
                openingHours: "Daily morning and afternoon service; verify local hours",
                website: "https://www.callyourmotherdeli.com/georgetown-dc-call-your-mother-deli",
                reservationRecommended: false
            },
            {
                name: "Founding Farmers",
                category: "Food & Dining",
                description: "Sit-down farm-to-table restaurant with cooked-to-order weekday breakfasts, weekend brunch, pancakes, eggs, and American comfort dishes.",
                mealTypes: ["Breakfast"],
                estimatedCostMin: 18,
                estimatedCostMax: 38,
                priceType: "perPerson",
                priceTier: "Mid-Range",
                address: "1924 Pennsylvania Avenue NW, Washington, DC 20006, USA",
                cuisine: "American farm-to-table",
                openingHours: "Weekday breakfast until 11 AM; weekend brunch offered",
                website: "https://www.wearefoundingfarmers.com/location/dc/",
                reservationRecommended: true
            },
            {
                name: "Blue Duck Tavern",
                category: "Food & Dining",
                description: "Upscale hotel restaurant in Park Hyatt Washington serving seasonal American breakfast dishes, house-made pastries and refined brunch plates.",
                mealTypes: ["Breakfast"],
                estimatedCostMin: 30,
                estimatedCostMax: 65,
                priceType: "perPerson",
                priceTier: "High-End",
                address: "1201 24th Street NW, Washington, DC 20037, USA",
                cuisine: "Upscale American",
                openingHours: "Breakfast service available; verify exact hours",
                website: "https://www.blueducktavern.com/location/blue-duck-tavern/",
                reservationRecommended: true
            }
        ],

        lunch: [
            {
                name: "Ben’s Chili Bowl",
                category: "Food & Dining",
                description: "Historic U Street restaurant known for its signature half-smokes, chili cheese fries and classic Washington, D.C. comfort food.",
                mealTypes: ["Lunch"],
                estimatedCostMin: 9,
                estimatedCostMax: 22,
                priceType: "perPerson",
                priceTier: "Budget",
                address: "1213 U Street NW, Washington, DC 20009, USA",
                cuisine: "American chili dogs",
                openingHours: "Lunch and dinner service; hours vary by day",
                website: "https://benschilibowl.com/",
                reservationRecommended: false
            },
            {
                name: "CHIKO",
                category: "Food & Dining",
                description: "Fast-casual Capitol Hill restaurant combining Chinese and Korean flavors in rice bowls, dumplings and seasonal lunch specials.",
                mealTypes: ["Lunch"],
                estimatedCostMin: 16,
                estimatedCostMax: 32,
                priceType: "perPerson",
                priceTier: "Mid-Range",
                address: "423 8th Street SE, Washington, DC 20003, USA",
                cuisine: "Chinese-Korean fusion",
                openingHours: "Lunch and dinner; confirm current service hours",
                website: "https://www.mychiko.com/",
                reservationRecommended: false
            },
            {
                name: "Zaytinya",
                category: "Food & Dining",
                description: "José Andrés restaurant offering Greek, Turkish and Lebanese-inspired small plates, spreads and grilled dishes.",
                mealTypes: ["Lunch"],
                estimatedCostMin: 25,
                estimatedCostMax: 55,
                priceType: "perPerson",
                priceTier: "Mid-Range",
                address: "701 9th Street NW, Washington, DC 20001, USA",
                cuisine: "Eastern Mediterranean",
                openingHours: "Lunch and dinner daily; check service hours",
                website: "https://www.zaytinya.com/location/washington-dc/",
                reservationRecommended: true
            },
            {
                name: "Fiola Mare",
                category: "Food & Dining",
                description: "Luxury Georgetown waterfront restaurant specializing in coastal Italian seafood and seasonal fish; prices may include a stated restaurant surcharge.",
                mealTypes: ["Lunch"],
                estimatedCostMin: 45,
                estimatedCostMax: 120,
                priceType: "perPerson",
                priceTier: "High-End",
                address: "3050 K Street NW, Washington, DC 20007, USA",
                cuisine: "Italian seafood",
                openingHours: "Lunch service offered; confirm day and time",
                website: "https://www.fiolamaredc.com/lunch",
                reservationRecommended: true
            }
        ],

        dinner: [
            {
                name: "Falafel Inc",
                category: "Food & Dining",
                description: "Affordable Georgetown quick-service falafel spot serving sandwiches, bowls, salads and house-made sauces.",
                mealTypes: ["Dinner"],
                estimatedCostMin: 6,
                estimatedCostMax: 18,
                priceType: "perPerson",
                priceTier: "Budget",
                address: "1210 Potomac Street NW, Washington, DC 20007, USA",
                cuisine: "Middle Eastern falafel",
                openingHours: "Lunch and dinner; check location hours",
                website: "https://order.falafelinc.org/locations",
                reservationRecommended: false
            },
            {
                name: "Daikaya",
                category: "Food & Dining",
                description: "Two-level Japanese restaurant near Capital One Arena; the first-floor ramen shop serves Sapporo-style noodle bowls while the upstairs izakaya offers separate dishes.",
                mealTypes: ["Dinner"],
                estimatedCostMin: 17,
                estimatedCostMax: 35,
                priceType: "perPerson",
                priceTier: "Mid-Range",
                address: "705 6th Street NW, Washington, DC 20001, USA",
                cuisine: "Japanese ramen",
                openingHours: "First-floor ramen shop serves dinner; check current hours",
                website: "https://www.daikaya.com/location/daikaya-dine-in-hours/",
                reservationRecommended: false
            },
            {
                name: "Le Diplomate",
                category: "Food & Dining",
                description: "Popular French brasserie with steak frites, roast chicken, seafood, warm bread and classic French desserts.",
                mealTypes: ["Dinner"],
                estimatedCostMin: 35,
                estimatedCostMax: 80,
                priceType: "perPerson",
                priceTier: "Mid-Range",
                address: "1601 14th Street NW, Washington, DC 20009, USA",
                cuisine: "French bistro",
                openingHours: "Dinner daily; check weekend and holiday schedules",
                website: "https://lediplomatedc.com/",
                reservationRecommended: true
            },
            {
                name: "The Inn at Little Washington",
                category: "Food & Dining",
                description: "Destination fine-dining restaurant offering a luxury multi-course tasting menu in Washington, Virginia. This is outside Washington, D.C. and requires a substantial separate drive.",
                mealTypes: ["Dinner"],
                estimatedCostMin: 350,
                estimatedCostMax: 500,
                priceType: "perPerson",
                priceTier: "High-End",
                address: "309 Middle Street, Washington, VA 22747, USA",
                cuisine: "Fine-dining tasting menu",
                openingHours: "Dinner by advance reservation; confirm specific service dates",
                website: "https://www.theinnatlittlewashington.com/michelin-starred-dining-room",
                reservationRecommended: true
            }
        ],


        transportation: [
            "Metro",
            "Metro Buses",
            "Walking",
            "Uber/Lyft",
            "Capital Bikeshare"
        ],



        transportationOptions: [
            {
                name: "Metro",
                type: "Public Transportation",
                description: "Washington Metropolitan Area Transit Authority Metrorail connects Washington, D.C., Northern Virginia, and Maryland through six color-coded rail lines. Useful for reaching the National Mall, Smithsonian museums, Capitol Hill, downtown neighborhoods, Reagan National Airport, and Dulles International Airport. Standard weekday daytime fares range from $2.25 to $6.75 depending on distance. Late-evening and weekend fares range from $2.25 to $2.50. Eligible bus-to-rail and rail-to-bus transfers receive discounts within two hours when using supported payment methods.",
                estimatedCostMin: 2.25,
                estimatedCostMax: 6.75,
                priceType: "perRide",
                website: "https://www.wmata.com/pay.html"
                // day of week, and time of travel.
                // Weekday daytime: $2.25-$6.75.
                // Late evening/weekends: $2.25-$2.50.
                // Eligible two-hour transfer credits apply.
            },
            {
                name: "Metro Buses",
                type: "Public Transportation",
                description: "WMATA Metrobus operates regular, limited-stop, and express services throughout Washington, D.C., Maryland, and Northern Virginia. Useful for visiting museums, monuments, neighborhoods, restaurants, hotels, and destinations not directly served by Metrorail. Standard regular and limited-stop routes cost $2.25 per ride. Designated express routes cost $4.80. Eligible bus-to-bus transfers are free within two hours, and eligible rail-bus transfers receive fare discounts when using supported electronic payment.",
                estimatedCostMin: 2.25,
                estimatedCostMax: 2.25,
                priceType: "perRide",
                website: "https://www.wmata.com/pay.html"
                // Express routes currently cost $4.80.
                // Eligible transfers may reduce trip costs.
            },
            {
                name: "Walking",
                type: "Walking",
                description: "Free transportation for exploring the National Mall, Smithsonian museums, Washington Monument, Lincoln Memorial, Capitol Hill, Downtown Washington, Georgetown, and other pedestrian-friendly areas. Walking is convenient for sightseeing, restaurants, historic landmarks, and parks. Distances between monuments may be longer than they appear, so visitors should consider weather, accessibility, traffic crossings, and walking time.",
                estimatedCostMin: 0,
                estimatedCostMax: 0,
                priceType: "free"
            },
            {
                name: "Uber/Lyft",
                type: "Rideshare",
                description: "App-based rideshare transportation available throughout Washington, D.C., Northern Virginia, and surrounding Maryland communities. Convenient for airport transfers, hotels, restaurants, nightlife, and attractions not easily reached by public transportation. Fares vary by distance, traffic, demand, pickup location, and time of day. Airport pickup charges, tolls, and surge pricing may apply. Street closures and security restrictions near major government buildings can affect pickup locations.",
                estimatedCostMin: 12,
                estimatedCostMax: 65,
                priceType: "perRide",
                website: "https://www.uber.com/"
            },
            {
                name: "Capital Bikeshare",
                type: "Bike Share",
                description: "Public bicycle-sharing network serving Washington, D.C., Arlington, Alexandria, and surrounding communities. Visitors can rent classic bicycles or electric bicycles from docking stations using the Capital Bikeshare or Lyft app. A single classic-bike ride costs $1 to unlock plus $0.15 per minute. Electric bicycles cost $1 to unlock plus $0.35 per minute. A $10 day pass includes unlimited classic-bike rides of up to 45 minutes each; additional charges apply for longer rides and electric bicycles. Taxes and certain parking-related charges may apply.",
                estimatedCostMin: 2.5,
                estimatedCostMax: 6.25,
                priceType: "perRide",
                website: "https://capitalbikeshare.com/pricing"
                // $1 unlock + $0.15 per minute.
                // Ebike: $1 unlock + $0.35 per minute.
                // Day pass: $10 for eligible classic-bike rides.
                // A fixed estimated fare requires ride duration.
            }
        ],



        hotels: [
            {
                name: "HighRoad Hotel",
                category: "Budget",
                description: "Budget-friendly boutique hotel and hostel in Washington, D.C.'s Adams Morgan neighborhood near restaurants, nightlife, and neighborhood attractions. Offers compact private hotel rooms with ensuite bathrooms and shared pod-style hostel accommodations. Features complimentary Wi-Fi, a communal kitchen, guest lounges, coffee and tea, laundry facilities, and helpful front desk staff. Private room configurations include queen rooms, bunk rooms, and loft-style accommodations. Many rooms require stair access because the historic building does not have an elevator.",
                address: "1804 Belmont Road NW, Washington, DC 20009, USA",
                estimatedNightlyCostMin: 95,
                estimatedNightlyCostMax: 230,
                priceType: "perNight",
                amenities: [
                    "Free high-speed Wi-Fi",
                    "Private guest rooms available",
                    "Shared dormitory rooms",
                    "Pod-style dormitory beds",
                    "Private bathrooms in hotel rooms",
                    "Air conditioning",
                    "Heating",
                    "Flat-screen TVs in private rooms",
                    "Premium bed linens",
                    "Complimentary towels",
                    "Complimentary toiletries",
                    "Secure storage lockers",
                    "Personal charging outlets",
                    "Shared guest kitchen",
                    "Community dining space",
                    "Guest lounge",
                    "Complimentary coffee and tea",
                    "Guest laundry facilities",
                    "Luggage storage",
                    "24-hour front desk",
                    "Nearby restaurants",
                    "Nearby nightlife",
                    "Nearby Metrobus stops",
                    "Adams Morgan neighborhood location"
                ],
                parkingCost: null,
                additionalFees: null,
                website: "https://highroadhotel.com/"
                // Prices vary by accommodation type.
                // Confirm parking availability and rates.
                // No elevator in the main building.
                // Many rooms require stairs.
                // Minimum check-in age: 18.
                // Dormitory guests have additional policies.
                // Direct bookings may waive some service fees.
            },
            {
                name: "Hampton Inn Washington, D.C./White House",
                category: "Mid-Range",
                description: "Comfortable mid-range hotel in a historic downtown building near the White House, Lafayette Square, and Farragut West Metro Station. Features complimentary hot breakfast, free Wi-Fi, a heated indoor swimming pool, fitness center, business facilities, and modern guest rooms. Convenient for travelers exploring Washington's monuments and museums without renting a car. Valet parking costs $59 per day with in-and-out privileges. Hotel self-parking is not available.",
                address: "1729 H Street NW, Washington, DC 20006, USA",
                estimatedNightlyCostMin: 160,
                estimatedNightlyCostMax: 360,
                priceType: "perNight",
                amenities: [
                    "Free Wi-Fi",
                    "Complimentary hot breakfast",
                    "Modern guest rooms",
                    "Non-smoking accommodations",
                    "Heated indoor swimming pool",
                    "Fitness center",
                    "Business center",
                    "Meeting rooms",
                    "Connecting rooms available",
                    "Digital Key",
                    "Air conditioning",
                    "Flat-screen TVs",
                    "Cribs available",
                    "Pet-friendly accommodations",
                    "Secured valet parking",
                    "Covered parking",
                    "Parking with in-and-out privileges",
                    "Near the White House",
                    "Near Lafayette Square",
                    "Near Farragut West Metro Station",
                    "Convenient Downtown location"
                ],
                parkingCost: 59,
                additionalFees: null,
                website: "https://www.hilton.com/en/hotels/washshx-hampton-washington-dc-white-house/"
            },

            {
                name: "The Hay-Adams",
                category: "High-End",
                description: "Historic five-star luxury hotel directly across Lafayette Square from the White House in Downtown Washington, D.C. Features elegant guest rooms and suites, classic architecture, luxury furnishings, fine dining at The Lafayette, the Off The Record cocktail lounge, fitness center, concierge services, and personalized guest experiences. Select accommodations offer views of the White House or other Washington landmarks. Overnight valet parking costs $90 including tax, with in-and-out privileges. The property is within walking distance of many museums, monuments, restaurants, and downtown attractions.",
                address: "800 16th Street NW, Washington, DC 20006, USA",
                estimatedNightlyCostMin: 550,
                estimatedNightlyCostMax: 1250,
                priceType: "perNight",
                amenities: [
                    "Luxury guest rooms and suites",
                    "Complimentary Wi-Fi",
                    "Historic hotel architecture",
                    "Elegant furnishings",
                    "Premium bedding",
                    "Luxury bathroom amenities",
                    "White House views in select rooms",
                    "Lafayette Square views in select rooms",
                    "Fine dining at The Lafayette",
                    "Off The Record cocktail lounge",
                    "In-room dining",
                    "Fitness center",
                    "Concierge services",
                    "24-hour business center",
                    "Meeting and event facilities",
                    "Air conditioning",
                    "Dog-friendly accommodations",
                    "Valet parking",
                    "Parking with in-and-out privileges",
                    "Bicycles available for guest rental",
                    "Across from Lafayette Square",
                    "Near the White House",
                    "Near the National Mall",
                    "Walkable Downtown location"
                ],
                parkingCost: 90,
                additionalFees: null,
                website: "https://www.hayadams.com/"
            }
        ],

        vacationRentals: [
            {
                name: "Washington DC Shaw Historic Carriage House",
                category: "Vacation Rental",
                propertyType: "Entire Guesthouse",
                description: "Private two-story historic carriage house in Shaw's Blagden Alley. Features exposed brick, a queen bedroom, fully equipped kitchen, living room, dining area, laundry facilities, and a private entrance. Convenient walking access to restaurants, cafes, the convention center, and Metro.",
                address: "Shaw, Blagden Alley, Washington, DC, USA",
                estimatedNightlyCostMin: 172.75,
                estimatedNightlyCostMax: 172.75,
                priceType: "perNight",
                maxGuests: 2,
                bedrooms: 1,
                bathrooms: 1.5,
                amenities: [
                    "Private entrance",
                    "Queen bed",
                    "Fully equipped kitchen",
                    "Living room",
                    "Dining area",
                    "Wi-Fi",
                    "Television",
                    "Washer",
                    "Dryer",
                    "Historic carriage house",
                    "Nearby Metro station",
                    "Walkable neighborhood"
                ],
                cleaningFee: null,
                serviceFee: null,
                parkingCost: null,
                website: "https://www.airbnb.com/rooms/607267248294668250"
            },
            {
                name: "Washington DC Eastern Market Carriage House",
                category: "Vacation Rental",
                propertyType: "Entire Guesthouse",
                description: "Private one-bedroom carriage house apartment above a garage in historic Capitol Hill, near Eastern Market, the U.S. Capitol, and the National Mall. Features a queen bedroom, sofa bed, kitchen, Wi-Fi, laundry facilities, and a separate entrance. Apartment access requires stairs.",
                address: "Capitol Hill, Eastern Market, Washington, DC, USA",
                estimatedNightlyCostMin: 306.50,
                estimatedNightlyCostMax: 306.50,
                priceType: "perNight",
                maxGuests: 4,
                bedrooms: 1,
                bathrooms: 1,
                amenities: [
                    "Private entrance",
                    "Queen bed",
                    "Sofa bed",
                    "Kitchen",
                    "Wi-Fi",
                    "Television",
                    "Washer",
                    "Dryer",
                    "Air conditioning",
                    "Walkable Capitol Hill location",
                    "Nearby Eastern Market"
                ],
                cleaningFee: null,
                serviceFee: null,
                parkingCost: null,
                website: "https://www.airbnb.com/rooms/1408255483800709182"
            }
        ],


    }
]