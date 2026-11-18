export interface Attraction {
    name: string;
    category: string;
    estimatedCost: number | null;
    website?:string;
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


// Atlanta #1
{
    // ==========================================
    // DESTINATION 1: ATLANTA, GEORGIA
    // ==========================================
    id: 1,
    city: "Atlanta",
    state: "Georgia",
    description: "Atlanta is a vibrant city in Georgia, known for its rich history, cultural diversity, and lively entertainment scene.",
    duration: "3-4 days",

    weatherOptions: [
        {
            // ==================================
            // WEATHER OPTION 1: SUNNY
            // ==================================
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
                    description: "Watch Atlanta's annual Fourth of July 10k as runners travel along Peachtree Road toward Piedmont Park" , 
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
            // ==================================
            // WEATHER OPTION 2: COOL
            // ==================================
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
                    estimatedCost: null,
                    website: "https://www.georgiaaquarium.org/tickets/"
                }
            ],


            // Cool seasonal events
            event: [
               {
                    name: "Garden Lights, Holiday Nights",
                    category: "Festivals and Events",
                    description: "Experience illuminated garden displays, colorful holiday lights, and seasonal installations throughout the Atlanta Botanical Garden.",
                    estimatedCostMin: null, 
                    estimatedCostMax: null, 
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
                estimatedCostMin: null,
                estimatedCostMax: null,
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
            estimatedCostMin: null,
            estimatedCostMax: null,
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
            estimatedCostMin: null,
            estimatedCostMax: null,
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
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            estimatedDuration: 120,
            location: "1345 Piedmont Avenue NE, Atlanta, GA 30309",
            openingHours: "Verify October and November operating hours",
            website: "https://atlantabg.org/plan-your-visit/"
        }
    ],

    // ==========================================
    // RESTAURANTS — SHARED ACROSS WEATHER OPTIONS
    // ==========================================

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
            estimatedCostMin: null,
            estimatedCostMax: null,
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
            estimatedCostMin: null,
            estimatedCostMax: null,
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
            estimatedCostMin: null,
            estimatedCostMax: null,
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
            estimatedCostMin: null,
            estimatedCostMax: null,
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
            estimatedCostMin: null,
            estimatedCostMax: null,
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
            estimatedCostMin: null,
            estimatedCostMax: null,
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
            estimatedCostMin: null,
            estimatedCostMax: null,
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
            estimatedCostMin: null,
            estimatedCostMax: null,
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
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "High-End",
            address: "4199 Paces Ferry Rd SE, Atlanta, GA 30339",
            cuisine: "Contemporary American",
            openingHours: "Sun-Thu 5:30-9:30 PM; Fri-Sat 5:30-10 PM",
            website: "https://canoeatl.com/",
            reservationRecommended: true,
        },
    ],
    // ==========================================
    // LOCAL TRANSPORTATION
    // ==========================================
    transportation: [
        "MARTA",
        "Uber/Lyft",
        "Rental Car",
        "Walking"
    ],

    
    // ==========================================
    // ATLANTA — DETAILED TRANSPORTATION OPTIONS
    // ==========================================

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
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perRide",
            website: "https://www.uber.com/"
        },
        {
            name: "Rental Car",
            type: "Car Rental",
            description: "Rental vehicles available at Hartsfield-Jackson Atlanta International Airport and throughout the city. Useful for exploring surrounding suburbs and destinations outside Atlanta's transit network. Rental costs exclude gas, parking, tolls, and optional insurance.",
            estimatedCostMin: null,
            estimatedCostMax: null,
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


   
    // ==========================================
    // ATLANTA — THREE REAL HOTELS
    // Budget, Mid-Range, and High-End
    // ==========================================
    // TODO: Verify room prices and additional fees
    // for selected travel dates.

    hotels: [
        {
            name: "Motel 6 Atlanta, GA - Downtown",
            category: "Budget",
            description: "Budget-friendly motel in Downtown Atlanta near major attractions and public transportation. Offers basic guest rooms with air conditioning, complimentary Wi-Fi, and convenient access to the Georgia Aquarium and other downtown destinations. Pets are allowed. On-site parking may cost extra.",
            address: "311 Courtland Street NE, Atlanta, GA 30303, USA",
            estimatedNightlyCostMin: null,
            estimatedNightlyCostMax: null,
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
            estimatedNightlyCostMin: null,
            estimatedNightlyCostMax: null,
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
            estimatedNightlyCostMin: null,
            estimatedNightlyCostMax: null,
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
    // TODO: Verify nightly prices, fees, and availability for travel dates.

    vacationRentals: [
        {
            name: "Atlanta BeltLine Industrial Loft",
            category: "Vacation Rental",
            propertyType: "Entire loft",
            description: "Historic converted 1906 cotton warehouse loft in Atlanta's Old Fourth Ward near the BeltLine. Features natural skylights, two king beds, a renovated kitchen, a private balcony, and a dedicated workspace.",
            address: "Old Fourth Ward, Atlanta, GA, USA — exact street address provided after booking",
            estimatedNightlyCostMin: null,
            estimatedNightlyCostMax: null,
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
            estimatedNightlyCostMin: null,
            estimatedNightlyCostMax: null,
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
    
// Chicago #2
{
    // ==========================================
    // DESTINATION 2: CHICAGO, ILLINOIS
    // ==========================================

    id: 2,
    city: "Chicago",
    state: "Illinois",
    description: "Chicago is a vibrant city in Illinois known for its architecture, museums, music, food, beautiful lakefront, and diverse neighborhoods.",
    duration: "3-5 days",

    weatherOptions: [
        {
            // ==================================
            // WEATHER OPTION 1: SNOWY
            // ==================================

            condition: "Snowy",
            month: ["December", "January", "February"],

            // Three main attractions
            attractions: [
                {
                    name: "Art Institute of Chicago",
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
            // ==================================
            // WEATHER OPTION 2: SUNNY
            // ==================================

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
                    estimatedCostMin: null,
                    estimatedCostMax: null,
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
                    estimatedCostMin: null,
                    estimatedCostMax: null,
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
                    estimatedCostMin: null,
                    estimatedCostMax: null,
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
                    estimatedCostMin: null,
                    estimatedCostMax: null,
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
                    estimatedCostMin: null,
                    estimatedCostMax: null,
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
                    estimatedCostMin: null,
                    estimatedCostMax: null,
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
                    estimatedCostMin: null,
                    estimatedCostMax: null,
                    priceType: "perPerson",
                    estimatedDuration: 120,
                    location: "Lakefront Trail, Chicago, IL",
                    openingHours: "Verify trail access and bicycle rental hours",
                    website: "https://divvybikes.com/"
                }
    ],



    breakfast: [
        {
            name: "Lou Mitchell’s",
            category: "Food & Dining",
            description: "American diner restaurant candidate for breakfast in the Chicago area; TODO: confirm menu and operating hours.",
            mealTypes: ["Breakfast"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Budget",
            address: "TODO: Verify street address in Chicago area",
            cuisine: "American diner",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "Wildberry Pancakes and Cafe",
            category: "Food & Dining",
            description: "American breakfast restaurant candidate for breakfast in the Chicago area; TODO: confirm menu and operating hours.",
            mealTypes: ["Breakfast"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Mid-Range",
            address: "TODO: Verify street address in Chicago area",
            cuisine: "American breakfast",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "Batter & Berries",
            category: "Food & Dining",
            description: "American brunch restaurant candidate for breakfast in the Chicago area; TODO: confirm menu and operating hours.",
            mealTypes: ["Breakfast"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Mid-Range",
            address: "TODO: Verify street address in Chicago area",
            cuisine: "American brunch",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "The Peninsula Chicago - The Lobby",
            category: "Food & Dining",
            description: "Luxury hotel breakfast restaurant candidate for breakfast in the Chicago area; TODO: confirm menu and operating hours.",
            mealTypes: ["Breakfast"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "High-End",
            address: "TODO: Verify street address in Chicago area",
            cuisine: "Luxury hotel breakfast",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
    ],

    lunch: [
        {
            name: "Cafecito",
            category: "Food & Dining",
            description: "Cuban sandwiches restaurant candidate for lunch in the Chicago area; TODO: confirm menu and operating hours.",
            mealTypes: ["Lunch"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Budget",
            address: "TODO: Verify street address in Chicago area",
            cuisine: "Cuban sandwiches",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "Manny’s Cafeteria & Delicatessen",
            category: "Food & Dining",
            description: "Jewish deli restaurant candidate for lunch in the Chicago area; TODO: confirm menu and operating hours.",
            mealTypes: ["Lunch"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Mid-Range",
            address: "TODO: Verify street address in Chicago area",
            cuisine: "Jewish deli",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "The Purple Pig",
            category: "Food & Dining",
            description: "Mediterranean small plates restaurant candidate for lunch in the Chicago area; TODO: confirm menu and operating hours.",
            mealTypes: ["Lunch"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Mid-Range",
            address: "TODO: Verify street address in Chicago area",
            cuisine: "Mediterranean small plates",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "Cindy’s Rooftop",
            category: "Food & Dining",
            description: "American rooftop dining restaurant candidate for lunch in the Chicago area; TODO: confirm menu and operating hours.",
            mealTypes: ["Lunch"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "High-End",
            address: "TODO: Verify street address in Chicago area",
            cuisine: "American rooftop dining",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
    ],

    dinner: [
        {
            name: "Portillo’s",
            category: "Food & Dining",
            description: "Chicago-style hot dogs and Italian beef restaurant candidate for dinner in the Chicago area; TODO: confirm menu and operating hours.",
            mealTypes: ["Dinner"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Budget",
            address: "TODO: Verify street address in Chicago area",
            cuisine: "Chicago-style hot dogs and Italian beef",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "Quartino Ristorante",
            category: "Food & Dining",
            description: "Italian restaurant candidate for dinner in the Chicago area; TODO: confirm menu and operating hours.",
            mealTypes: ["Dinner"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Mid-Range",
            address: "TODO: Verify street address in Chicago area",
            cuisine: "Italian",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "Girl & the Goat",
            category: "Food & Dining",
            description: "Contemporary American restaurant candidate for dinner in the Chicago area; TODO: confirm menu and operating hours.",
            mealTypes: ["Dinner"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Mid-Range",
            address: "TODO: Verify street address in Chicago area",
            cuisine: "Contemporary American",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "Alinea",
            category: "Food & Dining",
            description: "Modernist tasting menu restaurant candidate for dinner in the Chicago area; TODO: confirm menu and operating hours.",
            mealTypes: ["Dinner"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "High-End",
            address: "TODO: Verify street address in Chicago area",
            cuisine: "Modernist tasting menu",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
    ],



    // ==========================================
    // LOCAL TRANSPORTATION
    // ==========================================

    transportation: [
        "CTA Trains",
        "CTA Buses",
        "Walking",
        "Uber/Lyft"
    ],

    
    // ==========================================
    // CHICAGO — DETAILED TRANSPORTATION OPTIONS
    // ==========================================

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
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perRide",
            website: "https://www.uber.com/"
        }
    ],


    // TODO: Add three researched hotels
    
    // ==========================================
    // CHICAGO — THREE REAL HOTELS
    // Budget, Mid-Range, and High-End
    // ==========================================
    // TODO: Verify nightly rates, fees, availability,
    // and room types for selected travel dates.

    hotels: [
        {
            name: "Freehand Chicago",
            category: "Budget",
            description: "Budget-friendly boutique hotel and hostel hybrid in Chicago's River North neighborhood. Located inside a historic 1927 building near the Magnificent Mile, restaurants, nightlife, and public transportation. Offers private hotel rooms and group accommodations, complimentary Wi-Fi, a fitness center, an on-site cafe, and the Broken Shaker bar. Additional fees vary depending on room type.",
            address: "19 East Ohio Street, Chicago, IL 60611, USA",
            estimatedNightlyCostMin: null,
            estimatedNightlyCostMax: null,
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
            // TODO: Verify final nightly rates by room type.
            // Published resort fees vary by room category.
            // Private room: $15; private quad: $40;
            // shared bed: $10; penthouse exempt.
            // Confirm whether these fees are charged per night.
        },
        {
            name: "Hampton Inn Chicago West Loop Fulton Market Area",
            category: "Mid-Range",
            description: "Comfortable modern hotel in Chicago's West Loop neighborhood near Fulton Market, Randolph Street Restaurant Row, and Union Station. Offers complimentary hot breakfast, free Wi-Fi, an indoor swimming pool, fitness center, modern guest rooms, and convenient access to Downtown Chicago attractions. On-site self-parking costs $65 per day.",
            address: "116 North Jefferson Street, Chicago, IL 60661, USA",
            estimatedNightlyCostMin: null,
            estimatedNightlyCostMax: null,
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
            // TODO: Confirm room rates for selected dates.
            // Parking rate is per day.
            // Pet fees apply when applicable.
        },
        {
            name: "The Langham, Chicago",
            category: "High-End",
            description: "Luxury five-star hotel overlooking the Chicago River in the landmark Mies van der Rohe-designed tower. Features spacious rooms and suites, sophisticated furnishings, Chicago River and city views in select rooms, an indoor swimming pool, Chuan Spa, fitness facilities, upscale dining, and concierge services. Convenient to the Chicago Riverwalk, Magnificent Mile, and Millennium Park.",
            address: "330 North Wabash Avenue, Chicago, IL 60611, USA",
            estimatedNightlyCostMin: null,
            estimatedNightlyCostMax: null,
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
            // TODO: Verify nightly room prices and taxes.
            // Valet parking is $88 per 24 hours.
            // Confirm spa treatment pricing separately.
        }
    ],


    


    // CHICAGO — TWO REAL AIRBNB LISTINGS
    // TODO: Verify nightly prices, fees, minimum stays,
    // and availability before finalizing.

    vacationRentals: [
        {
            name: "Chicago Skyline Luxury Retreat",
            category: "Vacation Rental",
            propertyType: "Entire apartment",
            description: "Modern two-bedroom corner high-rise apartment in River North featuring panoramic skyline views, floor-to-ceiling windows, private balcony, a chef's kitchen, and access to a heated outdoor pool and rooftop lounge. Located near the Chicago Riverwalk and Magnificent Mile.",
            address: "River North, Chicago, IL, USA — exact address provided after booking",
            estimatedNightlyCostMin: null,
            estimatedNightlyCostMax: null,
            priceType: "perNight",
            maxGuests: 4,
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
            estimatedNightlyCostMin: null,
            estimatedNightlyCostMax: null,
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
    // ==========================================
    // DESTINATION 3: DENVER, COLORADO
    // ==========================================

    id: 3,
    city: "Denver",
    state: "Colorado",
    description: "Denver is a vibrant Colorado city known for its mountain views, outdoor recreation, arts, museums, historic neighborhoods, and proximity to the Rocky Mountains.",
    duration: "3-5 days",

    weatherOptions: [
        {
            // ==================================
            // WEATHER OPTION 1: SNOWY
            // ==================================

            condition: "Snowy",
            month: ["December", "January", "February", "March"],

            // Three main attractions
            attractions: [
                {
                    name: "Denver Art Museum",
                    category: "Museums & Art",
                    estimatedCost: null
                },
                {
                    name: "Denver Pavilions",
                    category: "Shopping",
                    estimatedCost: null
                },
                {
                    name: "Meow Wolf Convergence Station",
                    category: "Entertainment",
                    estimatedCost: null
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
            // ==================================
            // WEATHER OPTION 2: SUNNY
            // ==================================

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
                    estimatedCost: null
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

    // ==========================================
    // SHARED ACTIVITIES (BOTH WEATHER OPTIONS)
    // ==========================================
    activities: [
                {
                    // Activity 1: Museums & Art
                    name: "Denver Museum of Nature & Science",
                    category: "Museums & Art",
                    description: "Explore interactive exhibits on dinosaurs, wildlife, space, natural history, and science at an indoor museum.",
                    estimatedCostMin: null,
                    estimatedCostMax: null,
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
                    estimatedCostMin: null,
                    estimatedCostMax: null,
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
                    estimatedCostMin: null,
                    estimatedCostMax: null,
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
                {
                    // Activity 5: Entertainment
                    name: "Downtown Denver Ice Skating",
                    category: "Sports & Recreation",
                    description: "Enjoy seasonal outdoor ice skating in downtown Denver, with winter decorations and nearby shopping and dining.",
                    estimatedCostMin: null,
                    estimatedCostMax: null,
                    priceType: "perPerson",
                    estimatedDuration: 90,
                    location: "Skyline Park area, Downtown Denver, CO",
                    openingHours: "Seasonal rink; verify opening dates and session hours",
                    website: "https://visitdenver.com/"
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
                    estimatedCostMin: 0,
                    estimatedCostMax: null,
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
                    estimatedCostMax: null,
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
                    estimatedCostMin: null,
                    estimatedCostMax: null,
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
            description: "Mexican breakfast restaurant candidate for breakfast in the Denver area; TODO: confirm menu and operating hours.",
            mealTypes: ["Breakfast"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Budget",
            address: "TODO: Verify street address in Denver area",
            cuisine: "Mexican breakfast",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "Snooze, an A.M. Eatery",
            category: "Food & Dining",
            description: "American brunch restaurant candidate for breakfast in the Denver area; TODO: confirm menu and operating hours.",
            mealTypes: ["Breakfast"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Mid-Range",
            address: "TODO: Verify street address in Denver area",
            cuisine: "American brunch",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "Denver Biscuit Company",
            category: "Food & Dining",
            description: "Southern-inspired breakfast restaurant candidate for breakfast in the Denver area; TODO: confirm menu and operating hours.",
            mealTypes: ["Breakfast"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Mid-Range",
            address: "TODO: Verify street address in Denver area",
            cuisine: "Southern-inspired breakfast",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "The Bindery",
            category: "Food & Dining",
            description: "Upscale contemporary American brunch restaurant candidate for breakfast in the Denver area; TODO: confirm menu and operating hours.",
            mealTypes: ["Breakfast"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "High-End",
            address: "TODO: Verify street address in Denver area",
            cuisine: "Upscale contemporary American brunch",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
    ],

    lunch: [
        {
            name: "Biker Jim’s Gourmet Dogs",
            category: "Food & Dining",
            description: "Gourmet hot dogs restaurant candidate for lunch in the Denver area; TODO: confirm menu and operating hours.",
            mealTypes: ["Lunch"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Budget",
            address: "TODO: Verify street address in Denver area",
            cuisine: "Gourmet hot dogs",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "Denver Central Market",
            category: "Food & Dining",
            description: "Food hall restaurant candidate for lunch in the Denver area; TODO: confirm menu and operating hours.",
            mealTypes: ["Lunch"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Mid-Range",
            address: "TODO: Verify street address in Denver area",
            cuisine: "Food hall",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "Mercantile Dining & Provision",
            category: "Food & Dining",
            description: "Contemporary American restaurant candidate for lunch in the Denver area; TODO: confirm menu and operating hours.",
            mealTypes: ["Lunch"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Mid-Range",
            address: "TODO: Verify street address in Denver area",
            cuisine: "Contemporary American",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "Tavernetta",
            category: "Food & Dining",
            description: "Upscale Italian restaurant candidate for lunch in the Denver area; TODO: confirm menu and operating hours.",
            mealTypes: ["Lunch"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "High-End",
            address: "TODO: Verify street address in Denver area",
            cuisine: "Upscale Italian",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
    ],

    dinner: [
        {
            name: "Illegal Pete’s",
            category: "Food & Dining",
            description: "Mexican restaurant candidate for dinner in the Denver area; TODO: confirm menu and operating hours.",
            mealTypes: ["Dinner"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Budget",
            address: "TODO: Verify street address in Denver area",
            cuisine: "Mexican",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "Work & Class",
            category: "Food & Dining",
            description: "Latin American and Southern-inspired restaurant candidate for dinner in the Denver area; TODO: confirm menu and operating hours.",
            mealTypes: ["Dinner"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Mid-Range",
            address: "TODO: Verify street address in Denver area",
            cuisine: "Latin American and Southern-inspired",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "Safta",
            category: "Food & Dining",
            description: "Israeli restaurant candidate for dinner in the Denver area; TODO: confirm menu and operating hours.",
            mealTypes: ["Dinner"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Mid-Range",
            address: "TODO: Verify street address in Denver area",
            cuisine: "Israeli",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "Beckon",
            category: "Food & Dining",
            description: "Chef-led tasting menu restaurant candidate for dinner in the Denver area; TODO: confirm menu and operating hours.",
            mealTypes: ["Dinner"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "High-End",
            address: "TODO: Verify street address in Denver area",
            cuisine: "Chef-led tasting menu",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
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

   
    // ==========================================
    // DENVER — DETAILED TRANSPORTATION OPTIONS
    // ==========================================

    transportationOptions: [
        {
            name: "Rental Car",
            type: "Car Rental",
            description: "Rental vehicles available at Denver International Airport and across metropolitan Denver. Useful for visiting Red Rocks Park, mountain attractions, surrounding suburbs, and destinations outside the RTD transit network. Daily rental rates vary by vehicle, travel dates, rental location, and driver age. Fuel, tolls, parking, and optional insurance are not included.",
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perDay",
            website: "https://www.enterprise.com/"
        },
        {
            name: "RTD Rail",
            type: "Public Transportation",
            description: "Denver's Regional Transportation District operates light rail and commuter rail connecting Downtown, Union Station, Denver International Airport, and surrounding communities. A standard three-hour pass costs $2.75. A standard day pass costs $5.50. The airport day pass costs $10. RTD trains provide a convenient alternative to driving and paying for downtown parking.",
            estimatedCostMin: 2.75,
            estimatedCostMax: 2.75,
            priceType: "per3Hours",
            website: "https://www.rtd-denver.com/fares-passes/fares"
        },
        {
            name: "RTD Buses",
            type: "Public Transportation",
            description: "Denver's public bus network serves Downtown, neighborhoods, museums, shopping areas, and destinations not directly accessible by rail. A standard three-hour pass costs $2.75 and includes eligible transfers. A standard day pass costs $5.50. Service frequency and travel times depend on the bus route and time of day.",
            estimatedCostMin: 2.75,
            estimatedCostMax: 2.75,
            priceType: "per3Hours",
            website: "https://www.rtd-denver.com/"
        },
        {
            name: "Walking",
            type: "Walking",
            description: "Free transportation for exploring pedestrian-friendly areas including Downtown Denver, LoDo, Union Station, Larimer Square, Civic Center Park, and the 16th Street corridor. Walking is convenient for nearby restaurants, museums, shops, and attractions. Travel times depend on distance, elevation, and weather conditions.",
            estimatedCostMin: 0,
            estimatedCostMax: 0,
            priceType: "free"
        },
        {
            name: "Uber/Lyft",
            type: "Rideshare",
            description: "App-based rideshare transportation available throughout Denver and surrounding areas. Convenient for airport transfers, hotel transportation, restaurants, nightlife, and attractions not directly served by RTD. Fares depend on distance, traffic, demand, weather, and time of day. Airport pickup charges and additional fees may apply.",
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perRide",
            website: "https://www.uber.com/"
        }
    ],



    // ==========================================
    // DENVER — THREE REAL HOTELS
    // Budget, Mid-Range, and High-End
    // ==========================================
    // TODO: Verify nightly rates, taxes, room types,
    // additional fees, and availability for travel dates.

    hotels: [
        {
            name: "11th Avenue Hostel",
            category: "Budget",
            description: "Budget-friendly historic hostel and hotel in Denver's Golden Triangle Creative District near the Denver Art Museum and Civic Center Park. Offers private rooms and shared dormitory accommodations, complimentary Wi-Fi, a shared guest kitchen, lounge spaces, on-site cafe, laundry facilities, and a 24-hour front desk. Nearby paid off-site parking is available. Some room types have shared bathrooms.",
            address: "1112 North Broadway, Denver, CO 80203, USA",
            estimatedNightlyCostMin: null,
            estimatedNightlyCostMax: null,
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
            // TODO: Confirm nightly rates by room type.
            // Private and shared rooms may have different prices.
            // Parking is off-site; the hostel lists
            // nearby parking starting at $10.
            // Verify final parking price and restrictions.
        },
        {
            name: "Hampton Inn & Suites Denver Downtown-Convention Center",
            category: "Mid-Range",
            description: "Modern downtown hotel near the Colorado Convention Center, 16th Street, and central Denver attractions. Features complimentary hot breakfast, free Wi-Fi, an indoor swimming pool, fitness center, business center, and comfortable guest rooms. Convenient for travelers who want to explore Downtown Denver without renting a car. Valet parking is available for $60 per day; on-site self-parking is not offered.",
            address: "550 15th Street, Denver, CO 80202, USA",
            estimatedNightlyCostMin: null,
            estimatedNightlyCostMax: null,
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
            // TODO: Confirm nightly rates and taxes.
            // Parking is $60 per day.
            // Pets may have additional fees.
        },
        {
            name: "The Brown Palace Hotel and Spa, Autograph Collection",
            category: "High-End",
            description: "Historic luxury hotel in Downtown Denver, originally opened in 1892. Features elegant rooms and suites, a grand multi-story atrium, traditional afternoon tea service, upscale restaurants, an on-site spa and salon, fitness center, and concierge services. Conveniently located near Denver's downtown restaurants, shopping, and entertainment. The hotel requires guests checking in to be at least 21 years old.",
            address: "321 17th Street, Denver, CO 80202, USA",
            estimatedNightlyCostMin: null,
            estimatedNightlyCostMax: null,
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
            // TODO: Confirm nightly room rates and taxes.
            // Valet parking is $66 per day.
            // Pet fee is $125 per stay when applicable.
            // Minimum check-in age: 21.
        }
    ],


   
    // DENVER — TWO REAL AIRBNB LISTINGS
    // TODO: Verify nightly prices, fees, and availability.

    vacationRentals: [
        {
            name: "Denver RiNo Urban Art Loft",
            category: "Vacation Rental",
            propertyType: "Entire condo",
            description: "Colorful top-floor corner loft in Denver's RiNo Art District featuring custom hand-painted street art murals, floor-to-ceiling windows, a private deck with city views, and rooftop access. Close to Denver Central Market, Mission Ballroom, breweries, and art galleries.",
            address: "RiNo Art District / Five Points, Denver, CO, USA — exact address provided after booking",
            estimatedNightlyCostMin: null,
            estimatedNightlyCostMax: null,
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
            estimatedNightlyCostMin: null,
            estimatedNightlyCostMax: null,
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
                    estimatedCost: null
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
                description: "Celebrate Hawaiian history and culture with a traditional floral parade featuring decorated floats, marching bands, cultural groups, and pa'u riders on horseback.",
                estimatedCostMin: 0,
                estimatedCostMax: 0,
                priceType: "perPerson",
                startDate: "2027-06-12",
                endDate: "2027-06-12",
                startTime: "09:00",
                endTime: "13:00",
                estimatedDuration: 180,
                location: "King Street near Iolani Palace to Kapiolani Park, Honolulu, HI",
                website: "https://sfca.hawaii.gov/resources/king-kamehameha-celebration-commission/"
            },
            {
                name: "Pan-Pacific Festival",
                category: "Festivals and Events",
                description: "Experience a multicultural festival celebrating Pacific cultures through traditional music, hula performances, cultural demonstrations, arts, food vendors, and a parade.",
                estimatedCostMin: 0,
                estimatedCostMax: 0,
                priceType: "perPerson",
                startDate: "2027-06-11",
                endDate: "2027-06-13",
                estimatedDuration: 180,
                location: "Waikiki and Ala Moana Center, Honolulu, HI",
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



            // Rainy seasonal events
            event: [
                 {
                    name: "Honolulu City Lights",
                    category: "Festivals and Events",
                    description: "Celebrate the holiday season with illuminated decorations, a Christmas tree, festive displays, and seasonal entertainment at Honolulu Hale. Opening night includes an electric light parade.",
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
                    description: "Celebrate Lunar New Year in Honolulu's historic Chinatown with cultural performances, lion dances, food vendors, family activities, and a festive parade.",
                    estimatedCostMin: null,
                    estimatedCostMax: null,
                    priceType: "perPerson",
                    startDate: "2027-01-30",
                    endDate: "2027-01-30",
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
            ]
        }
    ],

    // ==========================================
    // SHARED ACTIVITIES — AVAILABLE IN BOTH WEATHER OPTIONS
    // ==========================================
    activities: [
{
                    // Activity 1: Beaches & Water Activities
                    name: "Waikiki Beginner Surfing Lesson",
                    category: "Beaches & Water Activities",
                    description: "Learn the basics of surfing with an instructor on the famous waves of Waikiki Beach.",
                    estimatedCostMin: null,
                    estimatedCostMax: null,
                    priceType: "perPerson",
                    estimatedDuration: 120,
                    location: "Waikiki Beach, Honolulu, HI 96815",
                    openingHours: "Lessons vary by instructor and ocean conditions",
                    website: ""
                },
                {
                    // Activity 2: Outdoor & Nature
                    name: "Kapiolani Regional Park Walk",
                    category: "Outdoor & Nature",
                    description: "Enjoy a scenic walk through a large public park near Diamond Head, featuring open green spaces, tropical trees, and mountain views.",
                    estimatedCostMin: 0,
                    estimatedCostMax: 0,
                    priceType: "perPerson",
                    estimatedDuration: 90,
                    location: "3840 Paki Avenue, Honolulu, HI 96815",
                    openingHours: "Verify posted park hours",
                    website: "https://www.honolulu.gov/"
                },
                {
                    // Activity 3: Food & Dining
                    name: "Leonard's Bakery Malasada Experience",
                    category: "Food & Dining",
                    description: "Try freshly made Hawaiian-style malasadas, a popular local pastry, at a well-known Honolulu bakery.",
                    estimatedCostMin: null,
                    estimatedCostMax: null,
                    priceType: "perPerson",
                    estimatedDuration: 45,
                    location: "933 Kapahulu Avenue, Honolulu, HI 96816",
                    openingHours: "Verify current bakery hours",
                    website: "https://www.leonardshawaii.com/"
                },
                {
                    // Activity 4: Museums & Art
                    name: "Kakaako Street Art Walk",
                    category: "Museums & Art",
                    description: "Explore colorful street murals, public artwork, creative businesses, and local shops throughout Honolulu's Kakaako neighborhood.",
                    estimatedCostMin: 0,
                    estimatedCostMax: 0,
                    priceType: "perPerson",
                    estimatedDuration: 120,
                    location: "Kakaako, Honolulu, HI",
                    openingHours: "Outdoor artwork is generally viewable during daylight hours",
                    website: ""
                },
                {
                    // Activity 5: Entertainment
                    name: "Waikiki Sunset Catamaran Cruise",
                    category: "Entertainment",
                    description: "Enjoy an evening boat cruise along the Waikiki coastline with views of Diamond Head and the Pacific Ocean at sunset.",
                    estimatedCostMin: null,
                    estimatedCostMax: null,
                    priceType: "perPerson",
                    estimatedDuration: 90,
                    location: "Waikiki Beach, Honolulu, HI",
                    openingHours: "Departure times vary by operator and sunset time",
                    website: ""
                },
{
                    // Activity 1: Museums & Art
                    name: "Honolulu Museum of Art Visit",
                    category: "Museums & Art",
                    description: "Explore galleries featuring Hawaiian, Asian, European, and contemporary artworks, along with rotating exhibitions.",
                    estimatedCostMin: 25,
                    estimatedCostMax: 25,
                    priceType: "perPerson",
                    estimatedDuration: 150,
                    location: "900 S Beretania Street, Honolulu, HI 96814",
                    openingHours: "Wed-Thu and Sat-Sun 10 AM-6 PM; Fri 10 AM-9 PM; Mon-Tue closed",
                    website: "https://honolulumuseum.org/"
                },
                {
                    // Activity 2: History & Culture
                    name: "Pearl Harbor Visitor Center Museums",
                    category: "History & Culture",
                    description: "Explore indoor exhibits and historical displays about the events of December 7, 1941, and the history of Pearl Harbor.",
                    estimatedCostMin: 0,
                    estimatedCostMax: 0,
                    priceType: "perPerson",
                    estimatedDuration: 120,
                    location: "1 Arizona Memorial Place, Honolulu, HI 96818",
                    openingHours: "Verify visitor center hours",
                    website: "https://www.nps.gov/perl/"
                },
                {
                    // Activity 3: Museums & Art
                    name: "Capitol Modern Art Museum",
                    category: "Museums & Art",
                    description: "Explore a free museum showcasing Hawaiian contemporary artwork, cultural expression, and rotating art exhibitions.",
                    estimatedCostMin: 0,
                    estimatedCostMax: 0,
                    priceType: "perPerson",
                    estimatedDuration: 90,
                    location: "250 S Hotel Street, Second Floor, Honolulu, HI 96813",
                    openingHours: "Wed-Sat 10 AM-4 PM; closed Sun-Tue",
                    website: "https://www.capitolmodern.org/"
                },
                {
                    // Activity 4: History & Culture
                    name: "Royal Hawaiian Center Cultural Class",
                    category: "History & Culture",
                    description: "Participate in a Hawaiian cultural experience such as hula, ukulele, lei making, or traditional weaving, depending on the schedule.",
                    estimatedCostMin: 0,
                    estimatedCostMax: 0,
                    priceType: "perPerson",
                    estimatedDuration: 60,
                    location: "2201 Kalakaua Avenue, Honolulu, HI 96815",
                    openingHours: "Class times vary; check cultural events schedule",
                    website: "https://www.royalhawaiiancenter.com/events"
                },
                {
                    // Activity 5: Family Friendly
                    name: "Waikiki Aquarium Visit",
                    category: "Family Friendly",
                    description: "Discover marine life from Hawaiian and Pacific waters through aquarium exhibits featuring tropical fish, reef ecosystems, and ocean conservation.",
                    estimatedCostMin: 12,
                    estimatedCostMax: 12,
                    priceType: "perPerson",
                    estimatedDuration: 90,
                    location: "2777 Kalakaua Avenue, Honolulu, HI 96815",
                    openingHours: "Daily 9 AM-5 PM; last admission may be earlier",
                    website: "https://www.waikikiaquarium.org/"
                }
    ],




    breakfast: [
        {
            name: "Liliha Bakery",
            category: "Food & Dining",
            description: "Hawaiian diner and bakery restaurant candidate for breakfast in the Honolulu area; TODO: confirm menu and operating hours.",
            mealTypes: ["Breakfast"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Budget",
            address: "TODO: Verify street address in Honolulu area",
            cuisine: "Hawaiian diner and bakery",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "Sweet E’s Cafe",
            category: "Food & Dining",
            description: "American brunch restaurant candidate for breakfast in the Honolulu area; TODO: confirm menu and operating hours.",
            mealTypes: ["Breakfast"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Mid-Range",
            address: "TODO: Verify street address in Honolulu area",
            cuisine: "American brunch",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "Koko Head Cafe",
            category: "Food & Dining",
            description: "Hawaiian-inspired brunch restaurant candidate for breakfast in the Honolulu area; TODO: confirm menu and operating hours.",
            mealTypes: ["Breakfast"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Mid-Range",
            address: "TODO: Verify street address in Honolulu area",
            cuisine: "Hawaiian-inspired brunch",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "Orchids at Halekulani",
            category: "Food & Dining",
            description: "Luxury hotel brunch restaurant candidate for breakfast in the Honolulu area; TODO: confirm menu and operating hours.",
            mealTypes: ["Breakfast"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "High-End",
            address: "TODO: Verify street address in Honolulu area",
            cuisine: "Luxury hotel brunch",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
    ],

    lunch: [
        {
            name: "Marukame Udon Waikiki",
            category: "Food & Dining",
            description: "Japanese udon restaurant candidate for lunch in the Honolulu area; TODO: confirm menu and operating hours.",
            mealTypes: ["Lunch"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Budget",
            address: "TODO: Verify street address in Honolulu area",
            cuisine: "Japanese udon",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "Rainbow Drive-In",
            category: "Food & Dining",
            description: "Hawaiian plate lunch restaurant candidate for lunch in the Honolulu area; TODO: confirm menu and operating hours.",
            mealTypes: ["Lunch"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Mid-Range",
            address: "TODO: Verify street address in Honolulu area",
            cuisine: "Hawaiian plate lunch",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "Helena’s Hawaiian Food",
            category: "Food & Dining",
            description: "Traditional Hawaiian restaurant candidate for lunch in the Honolulu area; TODO: confirm menu and operating hours.",
            mealTypes: ["Lunch"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Mid-Range",
            address: "TODO: Verify street address in Honolulu area",
            cuisine: "Traditional Hawaiian",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "La Mer",
            category: "Food & Dining",
            description: "Fine-dining French (verify lunch service) restaurant candidate for lunch in the Honolulu area; TODO: confirm menu and operating hours.",
            mealTypes: ["Lunch"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "High-End",
            address: "TODO: Verify street address in Honolulu area",
            cuisine: "Fine-dining French (verify lunch service)",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
    ],

    dinner: [
        {
            name: "Zippy’s",
            category: "Food & Dining",
            description: "Hawaiian local comfort food restaurant candidate for dinner in the Honolulu area; TODO: confirm menu and operating hours.",
            mealTypes: ["Dinner"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Budget",
            address: "TODO: Verify street address in Honolulu area",
            cuisine: "Hawaiian local comfort food",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "The Pig and the Lady",
            category: "Food & Dining",
            description: "Vietnamese fusion restaurant candidate for dinner in the Honolulu area; TODO: confirm menu and operating hours.",
            mealTypes: ["Dinner"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Mid-Range",
            address: "TODO: Verify street address in Honolulu area",
            cuisine: "Vietnamese fusion",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "MW Restaurant",
            category: "Food & Dining",
            description: "Hawaiian contemporary restaurant candidate for dinner in the Honolulu area; TODO: confirm menu and operating hours.",
            mealTypes: ["Dinner"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Mid-Range",
            address: "TODO: Verify street address in Honolulu area",
            cuisine: "Hawaiian contemporary",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "Senia",
            category: "Food & Dining",
            description: "Contemporary American fine dining restaurant candidate for dinner in the Honolulu area; TODO: confirm menu and operating hours.",
            mealTypes: ["Dinner"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "High-End",
            address: "TODO: Verify street address in Honolulu area",
            cuisine: "Contemporary American fine dining",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
    ],



    // ==========================================
    // LOCAL TRANSPORTATION
    // ==========================================

    transportation: [
        "TheBus",
        "Uber/Lyft",
        "Rental Car",
        "Walking",
        "Skyline Rail"
    ],

  
    // ==========================================
    // HONOLULU — DETAILED TRANSPORTATION OPTIONS
    // ==========================================

    transportationOptions: [
        {
            name: "TheBus",
            type: "Public Transportation",
            description: "Honolulu's public bus network serving Waikiki, Downtown Honolulu, Pearl Harbor, shopping areas, beaches, and communities throughout Oahu. Adult HOLO card fare is $3 for two hours of eligible travel on TheBus and Skyline. The daily fare cap is $7.50. Cash fare is $3.25 per boarding without transfers. A new adult HOLO card costs $2.",
            estimatedCostMin: 3.00,
            estimatedCostMax: 3.00,
            priceType: "per2Hours",
            website: "https://www.thebus.org/Fare/FareAndPasses.asp"
        },
        {
            name: "Uber/Lyft",
            type: "Rideshare",
            description: "App-based rideshare transportation available throughout Honolulu and many areas of Oahu. Convenient for airport transfers, hotels, restaurants, nightlife, and attractions that are difficult to reach by public transportation. Fares vary depending on distance, traffic, demand, pickup location, and time of day. Airport fees and additional charges may apply.",
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perRide",
            website: "https://www.uber.com/"
        },
        {
            name: "Rental Car",
            type: "Car Rental",
            description: "Rental vehicles available at Daniel K. Inouye International Airport and throughout Honolulu. Useful for exploring the North Shore, eastern Oahu, scenic coastal drives, and attractions outside Waikiki. Costs vary by rental dates, vehicle type, driver age, and insurance options. Parking, fuel, and optional fees are not included. Hotel parking in Waikiki can be expensive.",
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perDay",
            website: "https://www.enterprise.com/"
        },
        {
            name: "Walking",
            type: "Walking",
            description: "Free transportation for exploring Waikiki Beach, Kalakaua Avenue, International Market Place, Royal Hawaiian Center, nearby restaurants, and beachfront attractions. Many central Waikiki destinations are within walking distance. Travel times depend on distance, weather, and pedestrian conditions.",
            estimatedCostMin: 0,
            estimatedCostMax: 0,
            priceType: "free"
        },
        {
            name: "Skyline Rail",
            type: "Public Transportation",
            description: "Honolulu's automated rail transit system connecting West Oahu, Pearl Harbor-area destinations, and Daniel K. Inouye International Airport, with transfers to TheBus. A HOLO card is required to ride. Standard adult fare is $3 for two hours of eligible travel, with a daily cap of $7.50. Skyline does not directly serve Waikiki; passengers use connecting buses.",
            estimatedCostMin: 3.00,
            estimatedCostMax: 3.00,
            priceType: "per2Hours",
            website: "https://www.holocard.net/for-visitors/"
        }
    ],



    // ==========================================
    // HONOLULU — THREE REAL HOTELS
    // Budget, Mid-Range, and High-End
    // ==========================================
    // TODO: Verify nightly rates, taxes, availability,
    // and all additional charges for travel dates.

    hotels: [
        {
            name: "Waikiki Malia",
            category: "Budget",
            description: "Value-oriented hotel in central Waikiki near shopping, restaurants, public transportation, and Waikiki Beach. Offers standard guest rooms and studio-style accommodations, an outdoor plunge pool, heated hot tub, fitness room, on-site dining, and guest laundry. Self-parking is available for $50 plus tax per day. A separate daily amenity fee of $45 plus tax applies. Minimum check-in age is 18.",
            address: "2211 Kuhio Avenue, Honolulu, HI 96815, USA",
            estimatedNightlyCostMin: null,
            estimatedNightlyCostMax: null,
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
                "Nearby public transportation",
                "Walking distance to Waikiki Beach"
            ],
            parkingCost: 50,
            additionalFees: 45,
            website: "https://www.waikikimalia.com/"
            // TODO: Nightly room rates are date-dependent.
            // Parking: $50 plus tax per day.
            // Amenity fee: $45 plus tax per room per day.
            // Confirm whether the amenity fee is already
            // included in the booking total.
            // Minimum check-in age: 18.
        },
        {
            name: "Hilton Garden Inn Waikiki Beach",
            category: "Mid-Range",
            description: "Modern hotel in central Waikiki near International Market Place and approximately two blocks from Waikiki Beach. Features comfortable rooms, an outdoor rooftop swimming pool, fitness center, on-site restaurant, concierge services, and complimentary Wi-Fi. Breakfast is available for an additional charge. Valet parking costs $58 per day, and a daily resort charge applies.",
            address: "2330 Kuhio Avenue, Honolulu, HI 96815, USA",
            estimatedNightlyCostMin: null,
            estimatedNightlyCostMax: null,
            priceType: "perNight",
            amenities: [
                "Free Wi-Fi",
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
                "Valet parking",
                "Walking distance to Waikiki Beach"
            ],
            parkingCost: 58,
            additionalFees: null,
            website: "https://www.hilton.com/en/hotels/hnlkugi-hilton-garden-inn-waikiki-beach/"
            // TODO: Verify nightly rates and taxes.
            // Valet parking: $58 per day.
            // An additional daily resort charge applies;
            // its amount must be confirmed before budgeting.
            // Oversized vehicle valet costs more.
        },
        {
            name: "Halekulani Hotel",
            category: "High-End",
            description: "Luxury oceanfront hotel directly on Waikiki Beach, known for elegant accommodations, ocean views, exceptional service, and a peaceful resort atmosphere. Features a signature heated swimming pool overlooking the ocean, SpaHalekulani, fitness facilities, fine dining, beachfront restaurants, concierge services, and Hawaiian entertainment. Overnight parking costs $68 per night. The hotel does not charge a resort fee.",
            address: "2199 Kalia Road, Honolulu, HI 96815, USA",
            estimatedNightlyCostMin: null,
            estimatedNightlyCostMax: null,
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
                "No resort fee"
            ],
            parkingCost: 68,
            additionalFees: 0,
            website: "https://www.halekulani.com/"
            // TODO: Verify nightly rates and taxes.
            // Overnight parking: $68 per night.
            // No resort fee according to the hotel.
            // Optional spa and dining charges are separate.
        }
    ],


    // HONOLULU — TWO REAL AIRBNB LISTINGS
    // TODO: Verify nightly prices, fees, minimum stays,
    // and availability for selected travel dates.

    vacationRentals: [
        {
            name: "Waikiki Ocean Breeze Luxury Suite",
            category: "Vacation Rental",
            propertyType: "Entire condo",
            description: "Renovated luxury one-bedroom suite on the 26th floor in Waikiki, featuring panoramic Pacific Ocean views, a private lanai, modern designer furnishings, and a fully equipped kitchen. Guests have access to resort-style amenities including a swimming pool, hot tubs, sauna, barbecue facilities, and recreational areas. Located approximately one block from Waikiki Beach.",
            address: "Waikiki, Honolulu, HI, USA — exact street address provided after booking",
            estimatedNightlyCostMin: null,
            estimatedNightlyCostMax: null,
            priceType: "perNight",
            maxGuests: 4,
            bedrooms: 1,
            bathrooms: 1,
            amenities: [
                "Wi-Fi",
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
                "Beach chairs and equipment",
                "Free garage parking",
                "Laundry facilities in building"
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
            description: "Renovated ninth-floor Waikiki studio with two private balconies offering views of Diamond Head, the ocean, and Kapiolani Park. Features a kitchenette, queen bed, queen sofa sleeper, and complimentary beach equipment. Located steps from Waikiki Beach, local restaurants, shopping, and the Honolulu Zoo.",
            address: "Waikiki, Honolulu, HI, USA — exact street address provided after booking",
            estimatedNightlyCostMin: null,
            estimatedNightlyCostMax: null,
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
                "Beach chairs",
                "Beach umbrella",
                "Snorkeling equipment",
                "Boogie boards",
                "Beach towels",
                "Laundry facilities in building"
            ],
            cleaningFee: null,
            serviceFee: null,
            parkingCost: null,
            website: "https://www.airbnb.com/rooms/52704138"
        }
    ]

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


            // Hot seasonal events
            event: [
            {
                    name: "Freedom Over Texas",
                    category: "Festivals and Events",
                    description: "Celebrate Independence Day in downtown Houston with live musical performances, family activities, festival vendors, food, entertainment, and a large fireworks display.",
                    estimatedCostMin: null,
                    estimatedCostMax: null,
                    priceType: "perPerson",
                    startDate: "2026-07-04",
                    endDate: "2026-07-04",
                    startTime: "15:00",
                    endTime: "22:00",
                    estimatedDuration: 240,
                    location: "Eleanor Tinsley Park and Sam Houston Park, Houston, TX",
                    website: "https://www.houstontx.gov/july4/"
                },
                {
                    name: "Houston Pride Festival and Parade",
                    category: "Festivals and Events",
                    description: "Celebrate Houston's LGBTQ+ community with a downtown festival featuring local organizations, cultural activities, food vendors, entertainment, and an illuminated nighttime parade.",
                    estimatedCostMin: null,
                    estimatedCostMax: null,
                    priceType: "perPerson",
                    startDate: "2027-06-26",
                    endDate: "2027-06-26",
                    estimatedDuration: 180,
                    location: "Downtown Houston, Houston, TX",
                    website: "https://pridehouston.org/pride-festival/"
         }
            ]
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
                    estimatedCost: 0
                },
                {
                    name: "POST Houston",
                    category: "Food & Dining",
                    estimatedCost: 0
                },
                {
                    name: "Houston Zoo",
                    category: "Family Friendly",
                    estimatedCost: null
                }
            ],


            // Mild seasonal events
            event: [
                 {
                    name: "Houston Livestock Show and Rodeo",
                    category: "Festivals and Events",
                    description: "Experience Houston's annual rodeo celebration featuring professional rodeo competitions, concerts, livestock exhibitions, carnival rides, Western culture, and Texas food.",
                    estimatedCostMin: null,
                    estimatedCostMax: null,
                    priceType: "perPerson",
                    startDate: "2027-03-02",
                    endDate: "2027-03-21",
                    estimatedDuration: 240,
                    location: "NRG Park, 1 NRG Park, Houston, TX 77054",
                    website: "https://www.rodeohouston.com/"
                },
                {
                    name: "Houston Botanic Garden Flower Power Festival",
                    category: "Festivals and Events",
                    description: "Celebrate spring at the Houston Botanic Garden with seasonal flowers, garden-themed family activities, and live music.",
                    estimatedCostMin: null,
                    estimatedCostMax: null,
                    priceType: "perPerson",
                    startDate: "2027-04-11",
                    endDate: "2027-04-11",
                    estimatedDuration: 120,
                    location: "Houston Botanic Garden, 8210 Park Place Boulevard, Houston, TX 77017",
                    website: "https://hbg.org/visit/annual-festivals/"
                }
            ]
        }
    ],

    // ==========================================
    // SHARED ACTIVITIES — AVAILABLE IN BOTH WEATHER OPTIONS
    // ==========================================
    activities: [
                {
                    // Activity 1: Family Friendly
                    name: "Cockrell Butterfly Center Visit",
                    category: "Family Friendly",
                    description: "Explore an indoor tropical butterfly habitat featuring live butterflies, rainforest plants, and educational exhibits about insects.",
                    estimatedCostMin: 15,
                    estimatedCostMax: 15,
                    priceType: "perPerson",
                    estimatedDuration: 90,
                    location: "5555 Hermann Park Drive, Houston, TX 77030",
                    openingHours: "Mon 12 PM-5 PM; Tue 10 AM-8 PM; Wed-Thu 10 AM-5 PM; Fri-Sun 10 AM-6 PM",
                    website: "https://www.hmns.org/exhibits/cockrell-butterfly-center/"
                },
                {
                    // Activity 2: Museums & Art
                    name: "The Menil Collection Museum Visit",
                    category: "Museums & Art",
                    description: "Explore a free art museum featuring modern, contemporary, ancient, and international artwork in a peaceful gallery setting.",
                    estimatedCostMin: 0,
                    estimatedCostMax: 0,
                    priceType: "perPerson",
                    estimatedDuration: 120,
                    location: "1533 Sul Ross Street, Houston, TX 77006",
                    openingHours: "Wed-Sun 11 AM-7 PM; closed Monday and Tuesday",
                    website: "https://www.menil.org/"
                },
                {
                    // Activity 3: History & Culture
                    name: "Museum of Fine Arts Houston Visit",
                    category: "Museums & Art",
                    description: "Discover thousands of years of art and culture through painting, sculpture, photography, and special exhibitions.",
                    estimatedCostMin: 0,
                    estimatedCostMax: 24,
                    priceType: "perPerson",
                    estimatedDuration: 180,
                    location: "1001 Bissonnet Street, Houston, TX 77005",
                    openingHours: "Wed 11 AM-5 PM; Thu-Fri 11 AM-9 PM; Sat 11 AM-6 PM; Sun 12:30 PM-6 PM",
                    website: "https://www.mfah.org/"
                },
                {
                    // Activity 4: Entertainment
                    name: "Downtown Houston Underground Tunnel Walk",
                    category: "Sightseeing & Landmarks",
                    description: "Explore sections of Houston's underground pedestrian tunnel network connecting downtown office buildings, restaurants, and shopping areas.",
                    estimatedCostMin: 0,
                    estimatedCostMax: 0,
                    priceType: "perPerson",
                    estimatedDuration: 90,
                    location: "Downtown Houston, TX",
                    openingHours: "Weekdays during business hours; most tunnels close by 6 PM",
                    website: "https://downtownhouston.org/experience/downtown-tunnels"
                },
                {
                    // Activity 5: Museums & Art
                    name: "Houston Center for Contemporary Craft",
                    category: "Museums & Art",
                    description: "Explore contemporary art exhibitions featuring ceramics, textiles, glass, metalwork, and other creative crafts.",
                    estimatedCostMin: 0,
                    estimatedCostMax: 0,
                    priceType: "perPerson",
                    estimatedDuration: 90,
                    location: "4848 Main Street, Houston, TX 77002",
                    openingHours: "Tue-Sat 10 AM-5 PM; closed Sunday and Monday",
                    website: "https://crafthouston.org/"
                },
                {
                    // Activity 6: Outdoor & Nature
                    name: "Buffalo Bayou Park Scenic Walk",
                    category: "Outdoor & Nature",
                    description: "Explore scenic walking trails, gardens, public art, and waterfront views along Buffalo Bayou near downtown Houston.",
                    estimatedCostMin: 0,
                    estimatedCostMax: 0,
                    priceType: "perPerson",
                    estimatedDuration: 120,
                    location: "105-B Sabine Street, Houston, TX 77007",
                    openingHours: "Lighted areas 6 AM-11 PM; other areas dawn to dusk",
                    website: "https://www.buffalobayou.org/"
                },
                {
                    // Activity 7: Food & Dining
                    name: "The Original Ninfa's on Navigation",
                    category: "Food & Dining",
                    description: "Enjoy traditional Tex-Mex cuisine, including fajitas and tacos, at a historic Houston restaurant.",
                    estimatedCostMin: null,
                    estimatedCostMax: null,
                    priceType: "perPerson",
                    estimatedDuration: 90,
                    location: "2704 Navigation Boulevard, Houston, TX 77003",
                    openingHours: "Verify current restaurant and brunch hours",
                    website: "https://ninfas.com/ninfas-on-navigation/"
                },
                {
                    // Activity 8: Outdoor & Nature
                    name: "Houston Arboretum & Nature Center",
                    category: "Outdoor & Nature",
                    description: "Explore peaceful nature trails, forest habitats, ponds, wildlife, and educational exhibits near Memorial Park.",
                    estimatedCostMin: 0,
                    estimatedCostMax: 0,
                    priceType: "perPerson",
                    estimatedDuration: 120,
                    location: "4501 Woodway Drive, Houston, TX 77024",
                    openingHours: "Trails 7 AM-7:30 PM March-October; Nature Center 9 AM-4 PM",
                    website: "https://houstonarboretum.org/"
                },
                {
                    // Activity 9: Sightseeing & Landmarks
                    name: "McGovern Centennial Gardens Walk",
                    category: "Outdoor & Nature",
                    description: "Explore beautifully landscaped gardens, flower displays, walking paths, and the Garden Mount inside Hermann Park.",
                    estimatedCostMin: 0,
                    estimatedCostMax: 0,
                    priceType: "perPerson",
                    estimatedDuration: 90,
                    location: "1500 Hermann Drive, Houston, TX 77004",
                    openingHours: "Daily 9 AM-7 PM during daylight saving time",
                    website: "https://hermannpark.org/visit/mcgovern-centennial-gardens/"
                },
                {
                    // Activity 10: Entertainment
                    name: "Discovery Green Downtown Park Experience",
                    category: "Entertainment",
                    description: "Enjoy a downtown park featuring public artwork, gardens, walking paths, outdoor activities, and seasonal entertainment.",
                    estimatedCostMin: 0,
                    estimatedCostMax: 0,
                    priceType: "perPerson",
                    estimatedDuration: 120,
                    location: "1500 McKinney Street, Houston, TX 77010",
                    openingHours: "Daily 6 AM-11 PM; extended summer hours may apply",
                    website: "https://www.discoverygreen.com/"
                }
    ],

  // ==========================================
    // HOUSTON RESTAURANTS
    // BREAKFAST, LUNCH, AND DINNER
    // ==========================================

 

    breakfast: [
        {
            name: "Kolache Factory",
            category: "Food & Dining",
            description: "Bakery and kolaches restaurant candidate for breakfast in the Houston area; TODO: confirm menu and operating hours.",
            mealTypes: ["Breakfast"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Budget",
            address: "TODO: Verify street address in Houston area",
            cuisine: "Bakery and kolaches",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "The Breakfast Klub",
            category: "Food & Dining",
            description: "Southern breakfast restaurant candidate for breakfast in the Houston area; TODO: confirm menu and operating hours.",
            mealTypes: ["Breakfast"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Mid-Range",
            address: "TODO: Verify street address in Houston area",
            cuisine: "Southern breakfast",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "Common Bond Bistro & Bakery",
            category: "Food & Dining",
            description: "Cafe and bakery restaurant candidate for breakfast in the Houston area; TODO: confirm menu and operating hours.",
            mealTypes: ["Breakfast"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Mid-Range",
            address: "TODO: Verify street address in Houston area",
            cuisine: "Cafe and bakery",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "Brennan’s of Houston",
            category: "Food & Dining",
            description: "Upscale Creole brunch restaurant candidate for breakfast in the Houston area; TODO: confirm menu and operating hours.",
            mealTypes: ["Breakfast"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "High-End",
            address: "TODO: Verify street address in Houston area",
            cuisine: "Upscale Creole brunch",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
    ],

    lunch: [
        {
            name: "Tacos A Go Go",
            category: "Food & Dining",
            description: "Tex-Mex restaurant candidate for lunch in the Houston area; TODO: confirm menu and operating hours.",
            mealTypes: ["Lunch"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Budget",
            address: "TODO: Verify street address in Houston area",
            cuisine: "Tex-Mex",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "Ninfa’s on Navigation",
            category: "Food & Dining",
            description: "Tex-Mex restaurant candidate for lunch in the Houston area; TODO: confirm menu and operating hours.",
            mealTypes: ["Lunch"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Mid-Range",
            address: "TODO: Verify street address in Houston area",
            cuisine: "Tex-Mex",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "Truth BBQ",
            category: "Food & Dining",
            description: "Texas barbecue restaurant candidate for lunch in the Houston area; TODO: confirm menu and operating hours.",
            mealTypes: ["Lunch"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Mid-Range",
            address: "TODO: Verify street address in Houston area",
            cuisine: "Texas barbecue",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "Georgia James",
            category: "Food & Dining",
            description: "Upscale steakhouse (verify lunch service) restaurant candidate for lunch in the Houston area; TODO: confirm menu and operating hours.",
            mealTypes: ["Lunch"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "High-End",
            address: "TODO: Verify street address in Houston area",
            cuisine: "Upscale steakhouse (verify lunch service)",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
    ],

    dinner: [
        {
            name: "Torchy’s Tacos",
            category: "Food & Dining",
            description: "Tex-Mex restaurant candidate for dinner in the Houston area; TODO: confirm menu and operating hours.",
            mealTypes: ["Dinner"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Budget",
            address: "TODO: Verify street address in Houston area",
            cuisine: "Tex-Mex",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "Hugo’s",
            category: "Food & Dining",
            description: "Regional Mexican restaurant candidate for dinner in the Houston area; TODO: confirm menu and operating hours.",
            mealTypes: ["Dinner"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Mid-Range",
            address: "TODO: Verify street address in Houston area",
            cuisine: "Regional Mexican",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "Uchi Houston",
            category: "Food & Dining",
            description: "Japanese sushi restaurant candidate for dinner in the Houston area; TODO: confirm menu and operating hours.",
            mealTypes: ["Dinner"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Mid-Range",
            address: "TODO: Verify street address in Houston area",
            cuisine: "Japanese sushi",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "March",
            category: "Food & Dining",
            description: "Luxury Mediterranean tasting menu restaurant candidate for dinner in the Houston area; TODO: confirm menu and operating hours.",
            mealTypes: ["Dinner"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "High-End",
            address: "TODO: Verify street address in Houston area",
            cuisine: "Luxury Mediterranean tasting menu",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
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


    // ==========================================
    // HOUSTON — THREE REAL HOTELS
    // Budget, Mid-Range, and High-End
    // ==========================================
    // TODO: Verify nightly rates, taxes, availability,
    // and additional fees for selected travel dates.

    hotels: [
        {
            name: "Club Quarters Hotel Downtown, Houston",
            category: "Budget",
            description: "Value-oriented hotel in the heart of Downtown Houston near METRORail, restaurants, business districts, and major attractions. Offers compact modern guest rooms, complimentary high-speed Wi-Fi, flexible workspaces, coffee makers, a fitness center, and on-site dining. Convenient for visitors wanting to explore downtown without a rental car. Valet parking is available for $45 per day, with paid public self-parking nearby.",
            address: "1085 Rusk Street, Houston, TX 77002, USA",
            estimatedNightlyCostMin: null,
            estimatedNightlyCostMax: null,
            priceType: "perNight",
            amenities: [
                "Free high-speed Wi-Fi",
                "Modern guest rooms",
                "Flat-screen Smart TV",
                "Dedicated workspace",
                "In-room Nespresso coffee maker",
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
            // TODO: Confirm room rates for selected dates.
            // Valet parking: $45 per day.
            // Public garage self-parking is priced separately.
            // Compare total price with the mid-range hotel.
        },
        {
            name: "Hampton Inn Houston Downtown Convention Center",
            category: "Mid-Range",
            description: "Comfortable modern hotel in Downtown Houston close to Daikin Park, Discovery Green, Toyota Center, and the George R. Brown Convention Center. Offers complimentary hot breakfast, free Wi-Fi, an outdoor swimming pool, fitness center, business center, and on-site restaurant. Ideal for travelers attending events or exploring downtown Houston. Hotel valet parking costs $59 per day, and self-parking is not available.",
            address: "710 Crawford Street, Houston, TX 77002, USA",
            estimatedNightlyCostMin: null,
            estimatedNightlyCostMax: null,
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
            // TODO: Verify nightly rates and taxes.
            // Valet parking: $59 per day.
            // No hotel self-parking is offered.
            // Pet fees apply if traveling with pets.
        },
        {
            name: "The Post Oak Hotel at Uptown Houston",
            category: "High-End",
            description: "Luxury Forbes Five-Star hotel and spa located in Houston's Uptown and Galleria area. Features elegant guest rooms and suites, floor-to-ceiling windows, upscale furnishings, an outdoor resort-style swimming pool, private pool cabanas, a full-service spa and salon, fitness center, fine dining, and luxury concierge services. Convenient for high-end shopping and restaurants near The Galleria. Overnight valet parking is listed at approximately $60 per night, subject to confirmation.",
            address: "1600 West Loop South, Houston, TX 77027, USA",
            estimatedNightlyCostMin: null,
            estimatedNightlyCostMax: null,
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
                "24-hour fitness center",
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
            // TODO: Confirm nightly room rates and taxes.
            // Third-party listings show valet at $60/night.
            // Verify this charge directly with the hotel.
            // Spa treatments, dining, and pet fees are extra.
        }
    ],


    
    
    vacationRentals: [
        {
            name: "Houston Skyline Container Retreat",
            category: "Vacation Rental",
            propertyType: "Shipping container apartment",
            description: "Modern converted shipping-container apartment in Houston's East End near Navigation Esplanade and Buffalo Bayou. This private downstairs unit features two bedrooms, two bathrooms, a kitchen, living area, and a 200-square-foot private deck. Guests also have access to a shared rooftop terrace with downtown skyline views, outdoor dining, a barbecue grill, and a fire pit.",
            address: "East End, Houston, TX, USA — exact address provided after booking",
            estimatedNightlyCostMin: null,
            estimatedNightlyCostMax: null,
            priceType: "perNight",
            maxGuests: 4,
            bedrooms: 2,
            bathrooms: 2,
            amenities: [
                "Wi-Fi",
                "Private kitchen",
                "Private outdoor deck",
                "Shared rooftop terrace",
                "Downtown skyline views",
                "Outdoor dining area",
                "Barbecue grill",
                "Shared fire pit",
                "HDTV with streaming services",
                "Free on-site parking"
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
            description: "Light-filled private guesthouse above an artist's studio in Houston's Montrose neighborhood. This 700-plus-square-foot apartment features original artwork, a separate entrance, one queen bedroom, a full kitchen, dining area, living room, and a private treetop deck overlooking a garden. Located within walking distance of the Menil Collection and neighborhood cafes.",
            address: "Montrose, Houston, TX, USA — exact address provided after booking",
            estimatedNightlyCostMin: null,
            estimatedNightlyCostMax: null,
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
                "Dining room",
                "Dedicated workspace",
                "Original artwork",
                "Free street parking"
            ],
            cleaningFee: null,
            serviceFee: null,
            parkingCost: 0,
            website: "https://www.airbnb.com/rooms/4467481"
        }
    ]

},


// las Vegas #6 
   
{
    // ==========================================
    // DESTINATION 6: LAS VEGAS, NEVADA
    // ==========================================

    id: 6,
    city: "Las Vegas",
    state: "Nevada",
    description: "Las Vegas is a vibrant Nevada city known for world-class entertainment, luxurious resorts, shopping, dining, nightlife, unique museums, and beautiful desert landscapes.",
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
                    name: "Bellagio Conservatory & Botanical Gardens",
                    category: "Sightseeing & Landmarks",
                    estimatedCost: 0
                },
                {
                    name: "The Forum Shops at Caesars Palace",
                    category: "Shopping",
                    estimatedCost: 0
                },
                {
                    name: "Shark Reef Aquarium",
                    category: "Family Friendly",
                    estimatedCost: null
                }
            ],


            // Hot seasonal events
            event: [
                {
                 name: "iHeartRadio Music Festival",
                    category: "Festivals and Events",
                    description: "Experience a two-night music festival featuring major artists across pop, hip-hop, country, rock, and other genres, with live performances at T-Mobile Arena.",
                    estimatedCostMin: null,
                    estimatedCostMax: null,
                    priceType: "perPerson",
                    startDate: "2026-09-18",
                    endDate: "2026-09-19",
                    estimatedDuration: 240,
                    location: "T-Mobile Arena, 3780 Las Vegas Boulevard S, Las Vegas, NV 89158",
                    website: "https://news.iheart.com/featured/iheartradio-music-festival/"
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
                    website: "https://lasvegasgreekfestival.com/"
  }
            
            ]
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
                    estimatedCostMin: null,
                    estimatedCostMax: null,
                    priceType: "perPerson",
                    startDate: "2027-05-14",
                    endDate: "2027-05-16",
                    estimatedDuration: 480,
                    location: "Las Vegas Motor Speedway, 7000 N Las Vegas Boulevard, Las Vegas, NV 89115",
                    website: "https://lasvegas.edc.com/"
  }
            ]
        }
    ],

    // ==========================================
    // SHARED ACTIVITIES - AVAILABLE IN BOTH WEATHER OPTIONS
    // ==========================================
    activities: [
{
                    // Activity 1: History & Culture
                    name: "The Mob Museum Visit",
                    category: "History & Culture",
                    description: "Explore interactive exhibits about organized crime, law enforcement, Prohibition, and the history of Las Vegas inside a historic courthouse.",
                    estimatedCostMin: null,
                    estimatedCostMax: null,
                    priceType: "perPerson",
                    estimatedDuration: 150,
                    location: "300 Stewart Avenue, Las Vegas, NV 89101",
                    openingHours: "Daily 9 AM-9 PM; special closures may apply",
                    website: "https://themobmuseum.org/"
                },
                {
                    // Activity 2: Entertainment
                    name: "AREA15 Immersive Entertainment Experience",
                    category: "Entertainment",
                    description: "Explore an indoor entertainment complex featuring interactive art installations, immersive experiences, specialty shops, and creative attractions.",
                    estimatedCostMin: 0,
                    estimatedCostMax: null,
                    priceType: "perPerson",
                    estimatedDuration: 180,
                    location: "3215 S Rancho Drive, Las Vegas, NV 89102",
                    openingHours: "Sun-Thu 12 PM-8 PM; Fri-Sat 12 PM-10 PM. Individual attractions vary.",
                    website: "https://www.area15.com/"
                },
                {
                    // Activity 3: Family Friendly
                    name: "Pinball Hall of Fame",
                    category: "Family Friendly",
                    description: "Explore a collection of vintage and modern pinball machines and enjoy classic arcade-style entertainment.",
                    estimatedCostMin: 0,
                    estimatedCostMax: null,
                    priceType: "perPerson",
                    estimatedDuration: 90,
                    location: "4925 Las Vegas Boulevard S, Las Vegas, NV 89119",
                    openingHours: "Sun-Thu 10 AM-9 PM; Fri-Sat 10 AM-10 PM",
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
                    openingHours: "Verify current self-guided tour hours",
                    website: "https://shelby.com/Shelby-Heritage-Center-Home"
                },
                {
                    // Activity 5: Museums & Art
                    name: "Nevada State Museum Las Vegas Visit",
                    category: "Museums & Art",
                    description: "Explore exhibits about Nevada's natural history, wildlife, cultural heritage, geology, and development.",
                    estimatedCostMin: null,
                    estimatedCostMax: null,
                    priceType: "perPerson",
                    estimatedDuration: 120,
                    location: "309 S Valley View Boulevard, Las Vegas, NV 89107",
                    openingHours: "Thu-Mon 9 AM-4 PM; closed Tuesday and Wednesday",
                    website: "https://www.lasvegasnvmuseum.org/"
                },
{
                    // Activity 1: History & Culture
                    name: "The Neon Museum Las Vegas",
                    category: "History & Culture",
                    description: "Explore an outdoor museum displaying historic Las Vegas neon signs, vintage casino signage, and restored landmarks from the city's past.",
                    estimatedCostMin: null,
                    estimatedCostMax: null,
                    priceType: "perPerson",
                    estimatedDuration: 90,
                    location: "770 Las Vegas Boulevard N, Las Vegas, NV 89101",
                    openingHours: "Seasonal hours and timed admission; verify before visiting",
                    website: "https://neonmuseum.org/"
                },
                {
                    // Activity 2: Shopping
                    name: "Downtown Container Park Shopping",
                    category: "Shopping",
                    description: "Explore an open-air shopping and entertainment complex featuring boutique stores, local restaurants, art, and a family-friendly play area.",
                    estimatedCostMin: 0,
                    estimatedCostMax: null,
                    priceType: "perPerson",
                    estimatedDuration: 120,
                    location: "707 Fremont Street, Las Vegas, NV 89101",
                    openingHours: "Varies by business and event",
                    website: "https://downtowncontainerpark.com/"
                },
                {
                    // Activity 3: Museums & Art
                    name: "Las Vegas Arts District Gallery Walk",
                    category: "Museums & Art",
                    description: "Explore independent art galleries, colorful murals, vintage boutiques, creative studios, and local businesses in downtown Las Vegas.",
                    estimatedCostMin: 0,
                    estimatedCostMax: null,
                    priceType: "perPerson",
                    estimatedDuration: 120,
                    location: "Main Street and Charleston Boulevard, Las Vegas, NV",
                    openingHours: "Gallery hours vary",
                    website: "https://www.visitlasvegas.com/experience/post/intro-to-the-18b-arts-district/"
                },
                {
                    // Activity 4: Outdoor & Nature
                    name: "Springs Preserve Gardens and Trails",
                    category: "Outdoor & Nature",
                    description: "Explore desert gardens, nature trails, local history exhibits, and educational displays focused on the Mojave Desert environment.",
                    estimatedCostMin: null,
                    estimatedCostMax: null,
                    priceType: "perPerson",
                    estimatedDuration: 180,
                    location: "333 S Valley View Boulevard, Las Vegas, NV 89107",
                    openingHours: "Verify seasonal hours and trail access",
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
                    openingHours: "Show schedule varies by day and weather",
                    website: "https://bellagio.mgmresorts.com/"
                }
    ],

    
    // LAS VEGAS RESTAURANTS — RESEARCH CANDIDATES
    // TODO: Confirm restaurant is open and serves the assigned meal.
    // TODO: Replace null costs, TODO addresses, and unverified hours/URLs before seeding.
    // Per meal: 1 Budget, 2 Mid-Range, 1 High-End.

    breakfast: [
        {
            name: "The Egg & I",
            category: "Food & Dining",
            description: "American diner restaurant candidate for breakfast in the Las Vegas area; TODO: confirm menu and operating hours.",
            mealTypes: ["Breakfast"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Budget",
            address: "TODO: Verify street address in Las Vegas area",
            cuisine: "American diner",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "BabyStacks Cafe",
            category: "Food & Dining",
            description: "American breakfast and pancakes restaurant candidate for breakfast in the Las Vegas area; TODO: confirm menu and operating hours.",
            mealTypes: ["Breakfast"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Mid-Range",
            address: "TODO: Verify street address in Las Vegas area",
            cuisine: "American breakfast and pancakes",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "Mon Ami Gabi",
            category: "Food & Dining",
            description: "French bistro breakfast restaurant candidate for breakfast in the Las Vegas area; TODO: confirm menu and operating hours.",
            mealTypes: ["Breakfast"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Mid-Range",
            address: "TODO: Verify street address in Las Vegas area",
            cuisine: "French bistro breakfast",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "Bouchon at The Venetian",
            category: "Food & Dining",
            description: "Upscale French brunch restaurant candidate for breakfast in the Las Vegas area; TODO: confirm menu and operating hours.",
            mealTypes: ["Breakfast"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "High-End",
            address: "TODO: Verify street address in Las Vegas area",
            cuisine: "Upscale French brunch",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
    ],

    lunch: [
        {
            name: "In-N-Out Burger",
            category: "Food & Dining",
            description: "American burgers restaurant candidate for lunch in the Las Vegas area; TODO: confirm menu and operating hours.",
            mealTypes: ["Lunch"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Budget",
            address: "TODO: Verify street address in Las Vegas area",
            cuisine: "American burgers",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "Eataly Las Vegas",
            category: "Food & Dining",
            description: "Italian marketplace restaurant candidate for lunch in the Las Vegas area; TODO: confirm menu and operating hours.",
            mealTypes: ["Lunch"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Mid-Range",
            address: "TODO: Verify street address in Las Vegas area",
            cuisine: "Italian marketplace",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "Din Tai Fung at ARIA",
            category: "Food & Dining",
            description: "Taiwanese dumplings restaurant candidate for lunch in the Las Vegas area; TODO: confirm menu and operating hours.",
            mealTypes: ["Lunch"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Mid-Range",
            address: "TODO: Verify street address in Las Vegas area",
            cuisine: "Taiwanese dumplings",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "Estiatorio Milos",
            category: "Food & Dining",
            description: "Upscale Greek seafood restaurant candidate for lunch in the Las Vegas area; TODO: confirm menu and operating hours.",
            mealTypes: ["Lunch"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "High-End",
            address: "TODO: Verify street address in Las Vegas area",
            cuisine: "Upscale Greek seafood",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
    ],

    dinner: [
        {
            name: "Tacos El Gordo",
            category: "Food & Dining",
            description: "Mexican tacos restaurant candidate for dinner in the Las Vegas area; TODO: confirm menu and operating hours.",
            mealTypes: ["Dinner"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Budget",
            address: "TODO: Verify street address in Las Vegas area",
            cuisine: "Mexican tacos",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "Lotus of Siam",
            category: "Food & Dining",
            description: "Northern Thai restaurant candidate for dinner in the Las Vegas area; TODO: confirm menu and operating hours.",
            mealTypes: ["Dinner"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Mid-Range",
            address: "TODO: Verify street address in Las Vegas area",
            cuisine: "Northern Thai",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "Best Friend at Park MGM",
            category: "Food & Dining",
            description: "Korean-American restaurant candidate for dinner in the Las Vegas area; TODO: confirm menu and operating hours.",
            mealTypes: ["Dinner"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Mid-Range",
            address: "TODO: Verify street address in Las Vegas area",
            cuisine: "Korean-American",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "Joël Robuchon",
            category: "Food & Dining",
            description: "French fine dining restaurant candidate for dinner in the Las Vegas area; TODO: confirm menu and operating hours.",
            mealTypes: ["Dinner"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "High-End",
            address: "TODO: Verify street address in Las Vegas area",
            cuisine: "French fine dining",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
    ],

    
    
    
    
    // ==========================================
    // LOCAL TRANSPORTATION
    // ==========================================

    transportation: [
        "Walking",
        "Uber/Lyft",
        "RTC Buses",
        "Rental Car",
        "Las Vegas Monorail"
    ],

    
    // ==========================================
    // LAS VEGAS — DETAILED TRANSPORTATION OPTIONS
    // ==========================================

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
            estimatedCostMin: null,
            estimatedCostMax: null,
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
            estimatedCostMin: null,
            estimatedCostMax: null,
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


  
    // ==========================================
    // LAS VEGAS — THREE REAL HOTELS
    // Budget, Mid-Range, and High-End
    // ==========================================
    // TODO: Verify nightly rates, availability,
    // taxes, resort fees, and parking charges.

    hotels: [
        {
            name: "Excalibur Hotel & Casino",
            category: "Budget",
            description: "Budget-oriented castle-themed resort on the southern Las Vegas Strip near MGM Grand, Luxor, and New York-New York. Features standard guest rooms, multiple swimming pools, a casino, restaurants, a large arcade, and live entertainment including Tournament of Kings. Convenient access to nearby resorts through pedestrian walkways and the free Mandalay Bay tram. Registered guest self-parking costs $20 per day. A mandatory daily resort fee applies. Minimum check-in age is 21.",
            address: "3850 South Las Vegas Boulevard, Las Vegas, NV 89109, USA",
            estimatedNightlyCostMin: null,
            estimatedNightlyCostMax: null,
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
            // TODO: Verify nightly room rates and taxes.
            // Registered guest self-parking: $20 per day.
            // Mandatory resort fee applies.
            // Confirm resort fee amount before budgeting.
            // Minimum check-in age: 21.
            // Some attractions and shows cost extra.
        },
        {
            name: "Hampton Inn Tropicana",
            category: "Mid-Range",
            description: "Comfortable non-casino hotel near the Las Vegas Strip, Allegiant Stadium, and T-Mobile Arena. Offers complimentary hot breakfast, free Wi-Fi, an outdoor swimming pool, fitness center, modern guest rooms, and a relaxing outdoor fire pit area. A good choice for visitors who prefer a quieter stay without casino resort fees. On-site covered self-parking costs $21 per day. No mandatory resort fee is charged.",
            address: "4975 South Dean Martin Drive, Las Vegas, NV 89118, USA",
            estimatedNightlyCostMin: null,
            estimatedNightlyCostMax: null,
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
            // TODO: Verify nightly rates and taxes.
            // Self-parking: $21 per day.
            // No mandatory resort fee.
            // Pet fees apply when traveling with pets.
            // The hotel does not provide an airport shuttle.
        },
        {
            name: "Wynn Las Vegas",
            category: "High-End",
            description: "Luxury five-star resort on the Las Vegas Strip offering elegant rooms and suites, upscale restaurants, fine dining, designer shopping, outdoor swimming pools, a full-service spa, golf course, entertainment, and concierge services. Guests can access Wynn and Encore resort facilities. A mandatory daily resort fee of $55 plus tax applies. Registered hotel guests receive complimentary self-parking, while standard valet parking costs $40 per day.",
            address: "3131 South Las Vegas Boulevard, Las Vegas, NV 89109, USA",
            estimatedNightlyCostMin: null,
            estimatedNightlyCostMax: null,
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
            // TODO: Verify nightly room rates and taxes.
            // Mandatory resort fee: $55 plus tax per night.
            // Self-parking is complimentary for registered guests.
            // Standard valet parking: $40 per day.
            // Additional spa, dining, and entertainment
            // services may carry separate charges.
        }
    ],


    // ==========================================
    // LAS VEGAS — TWO REAL AIRBNB LISTINGS
    // ==========================================
    // TODO: Verify nightly prices, fees, minimum stays,
    // and availability for the selected travel dates.

    vacationRentals: [
        {
            name: "Vegas Skyline Arcade Penthouse",
            category: "Vacation Rental",
            propertyType: "Entire condo",
            description: "Spacious 2,100-square-foot luxury condo at the Platinum Hotel near the Las Vegas Strip. Features panoramic Strip views, a wraparound terrace, a professional pool table, a full-size retro arcade machine, colorful LED lighting, a modern kitchen, and two bedrooms with luxury furnishings. Guests also have access to hotel swimming pools, a hot tub, and a fitness center.",
            address: "Platinum Hotel, Paradise, Las Vegas, NV, USA — exact unit address provided after booking",
            estimatedNightlyCostMin: null,
            estimatedNightlyCostMax: null,
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
            // TODO: Listing mentions a $16/night resort fee.
            // Verify the current fee and its inclusion in total pricing.
        },
        {
            name: "Vegas Desert Racing Pool Retreat",
            category: "Vacation Rental",
            propertyType: "Entire house",
            description: "Unique two-story vacation home in Las Vegas's Spring Valley area featuring three bedrooms, a racing-car-themed room, a pool table, and a private backyard swimming pool. Includes a full kitchen, high-speed Wi-Fi, outdoor barbecue grill, dining table, and sun loungers. Approximately a 15-minute drive from the Las Vegas Strip. The private pool is not heated.",
            address: "Spring Valley, Las Vegas, NV, USA — exact street address provided after booking",
            estimatedNightlyCostMin: null,
            estimatedNightlyCostMax: null,
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
            // TODO: Pool is not heated.
            // Verify pet fees and house rules if applicable.
        }
    ]

    
},


// Los Angles #7
 
{
    // ==========================================
    // DESTINATION 7: LOS ANGELES, CALIFORNIA
    // ==========================================

    id: 7,
    city: "Los Angeles",
    state: "California",
    description: "Los Angeles is a vibrant California city known for its entertainment industry, famous beaches, Hollywood landmarks, diverse cuisine, museums, shopping, and outdoor activities.",
    duration: "4-6 days",

    weatherOptions: [
        {
            // ==================================
            // WEATHER OPTION 1: SUNNY
            // ==========================================

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
                    estimatedCost: 0
                },
                {
                    name: "Griffith Observatory",
                    category: "Sightseeing & Landmarks",
                    estimatedCost: 0
                },
                {
                    name: "The Grove",
                    category: "Shopping",
                    estimatedCost: 0
                }
            ],



            // Sunny seasonal events
            event: [
            


    {
                    name: "A Roots Picnic Experience",
                    category: "Festivals and Events",
                    description: "Experience a live hip-hop and R&B concert celebrating music history, featuring The Roots at the Hollywood Bowl.",
                    estimatedCostMin: null,
                    estimatedCostMax: null,
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
                    estimatedCostMin: null,
                    estimatedCostMax: null,
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
            // ==================================
            // WEATHER OPTION 2: RAINY
            // ==========================================

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
                    estimatedCost: 0
                },
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



            // Rainy seasonal events
            event: [
               {
                    name: "L.A. Zoo Lights",
                    category: "Festivals and Events",
                    description: "Explore a nighttime holiday experience featuring illuminated animal sculptures, festive light displays, interactive installations, seasonal treats, and family-friendly entertainment.",
                    estimatedCostMin: 19,
                    estimatedCostMax: null,
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
                    estimatedCostMin: null,
                    estimatedCostMax: null,
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
                    estimatedCostMax: null,
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
                    estimatedCostMax: null,
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
                    estimatedCostMax: null,
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
                    estimatedCostMin: null,
                    estimatedCostMax: null,
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
                    estimatedCostMin: null,
                    estimatedCostMax: null,
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
                    estimatedCostMin: null,
                    estimatedCostMax: null,
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
                    estimatedCostMax: null,
                    priceType: "perPerson",
                    estimatedDuration: 120,
                    location: "Little Tokyo, Downtown Los Angeles, CA 90012",
                    openingHours: "Varies by restaurant and business",
                    website: "https://www.discoverlosangeles.com/"
                }
    ],

    // LOS ANGELES RESTAURANTS — RESEARCH CANDIDATES
    // TODO: Confirm restaurant is open and serves the assigned meal.
    // TODO: Replace null costs, TODO addresses, and unverified hours/URLs before seeding.
    // Per meal: 1 Budget, 2 Mid-Range, 1 High-End.

    breakfast: [
        {
            name: "Eggslut",
            category: "Food & Dining",
            description: "Breakfast sandwiches restaurant candidate for breakfast in the Los Angeles area; TODO: confirm menu and operating hours.",
            mealTypes: ["Breakfast"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Budget",
            address: "TODO: Verify street address in Los Angeles area",
            cuisine: "Breakfast sandwiches",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "The Griddle Cafe",
            category: "Food & Dining",
            description: "American breakfast restaurant candidate for breakfast in the Los Angeles area; TODO: confirm menu and operating hours.",
            mealTypes: ["Breakfast"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Mid-Range",
            address: "TODO: Verify street address in Los Angeles area",
            cuisine: "American breakfast",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "République",
            category: "Food & Dining",
            description: "French cafe and bakery restaurant candidate for breakfast in the Los Angeles area; TODO: confirm menu and operating hours.",
            mealTypes: ["Breakfast"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Mid-Range",
            address: "TODO: Verify street address in Los Angeles area",
            cuisine: "French cafe and bakery",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "Polo Lounge",
            category: "Food & Dining",
            description: "Luxury hotel brunch restaurant candidate for breakfast in the Los Angeles area; TODO: confirm menu and operating hours.",
            mealTypes: ["Breakfast"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "High-End",
            address: "TODO: Verify street address in Los Angeles area",
            cuisine: "Luxury hotel brunch",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
    ],

    lunch: [
        {
            name: "Philippe the Original",
            category: "Food & Dining",
            description: "French dip sandwiches restaurant candidate for lunch in the Los Angeles area; TODO: confirm menu and operating hours.",
            mealTypes: ["Lunch"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Budget",
            address: "TODO: Verify street address in Los Angeles area",
            cuisine: "French dip sandwiches",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "Guisados",
            category: "Food & Dining",
            description: "Mexican tacos restaurant candidate for lunch in the Los Angeles area; TODO: confirm menu and operating hours.",
            mealTypes: ["Lunch"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Mid-Range",
            address: "TODO: Verify street address in Los Angeles area",
            cuisine: "Mexican tacos",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "Grand Central Market",
            category: "Food & Dining",
            description: "Multi-vendor food hall restaurant candidate for lunch in the Los Angeles area; TODO: confirm menu and operating hours.",
            mealTypes: ["Lunch"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Mid-Range",
            address: "TODO: Verify street address in Los Angeles area",
            cuisine: "Multi-vendor food hall",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "The Ivy",
            category: "Food & Dining",
            description: "Upscale Californian restaurant candidate for lunch in the Los Angeles area; TODO: confirm menu and operating hours.",
            mealTypes: ["Lunch"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "High-End",
            address: "TODO: Verify street address in Los Angeles area",
            cuisine: "Upscale Californian",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
    ],

    dinner: [
        {
            name: "Howlin’ Ray’s",
            category: "Food & Dining",
            description: "Nashville hot chicken restaurant candidate for dinner in the Los Angeles area; TODO: confirm menu and operating hours.",
            mealTypes: ["Dinner"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Budget",
            address: "TODO: Verify street address in Los Angeles area",
            cuisine: "Nashville hot chicken",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "Bestia",
            category: "Food & Dining",
            description: "Italian restaurant candidate for dinner in the Los Angeles area; TODO: confirm menu and operating hours.",
            mealTypes: ["Dinner"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Mid-Range",
            address: "TODO: Verify street address in Los Angeles area",
            cuisine: "Italian",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "Bavel",
            category: "Food & Dining",
            description: "Middle Eastern restaurant candidate for dinner in the Los Angeles area; TODO: confirm menu and operating hours.",
            mealTypes: ["Dinner"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Mid-Range",
            address: "TODO: Verify street address in Los Angeles area",
            cuisine: "Middle Eastern",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "Providence",
            category: "Food & Dining",
            description: "Seafood fine dining restaurant candidate for dinner in the Los Angeles area; TODO: confirm menu and operating hours.",
            mealTypes: ["Dinner"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "High-End",
            address: "TODO: Verify street address in Los Angeles area",
            cuisine: "Seafood fine dining",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
    ],

    // ==========================================
    // LOCAL TRANSPORTATION
    // ==========================================

    transportation: [
        "Rental Car",
        "Uber/Lyft",
        "Metro Buses",
        "Metro Rail"
    ],

    
    // ==========================================
    // LOS ANGELES — DETAILED TRANSPORTATION OPTIONS
    // ==========================================

    transportationOptions: [
        {
            name: "Rental Car",
            type: "Car Rental",
            description: "Rental vehicles are available at Los Angeles International Airport, Hollywood Burbank Airport, and throughout Los Angeles. Useful for visiting Santa Monica, Venice Beach, Hollywood, Griffith Observatory, and destinations spread across Southern California. Rental rates vary by dates, vehicle type, driver age, and rental company. Gas, parking, tolls, and optional insurance are not included. Traffic congestion and paid parking should be considered.",
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perDay",
            website: "https://www.enterprise.com/"
        },
        {
            name: "Uber/Lyft",
            type: "Rideshare",
            description: "App-based rideshare transportation available across Los Angeles and surrounding areas. Convenient for travel between hotels, restaurants, beaches, nightlife, and attractions not directly served by Metro. Fares vary by distance, traffic, demand, pickup location, and time of day. Airport pickup arrangements and additional fees may apply.",
            estimatedCostMin: null,
            estimatedCostMax: null,
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


    
    // ==========================================
    // LOS ANGELES — THREE REAL HOTELS
    // Budget, Mid-Range, and High-End
    // ==========================================
    // TODO: Verify nightly rates, parking costs,
    // taxes, fees, and availability for travel dates.

    hotels: [
        {
            name: "citizenM Los Angeles Downtown",
            category: "Budget",
            description: "Value-oriented modern hotel in Downtown Los Angeles near Little Tokyo, Grand Central Market, the Broadway Theater District, and Metro stations. Features compact smart guest rooms with king beds, rainfall showers, tablet-controlled lighting, complimentary Wi-Fi, a 24-hour restaurant and bar, fitness center, and modern shared lounge areas. No on-site parking is available; guests can use nearby paid parking garages. Minimum check-in age is 18.",
            address: "361 South Spring Street, Los Angeles, CA 90013, USA",
            estimatedNightlyCostMin: null,
            estimatedNightlyCostMax: null,
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
            // TODO: Verify room rate and taxes for travel dates.
            // No on-site parking is available.
            // Nearby garages charge separately.
            // Breakfast is not automatically complimentary.
            // Minimum check-in age: 18.
            // Rooms are designed for up to two adults.
        },
        {
            name: "Hilton Garden Inn Los Angeles/Hollywood",
            category: "Mid-Range",
            description: "Comfortable mid-range hotel in Hollywood near the Hollywood Walk of Fame, TCL Chinese Theatre, Dolby Theatre, and Hollywood Bowl. Offers modern guest rooms, complimentary Wi-Fi, an outdoor swimming pool, hot tub, fitness center, on-site restaurant, and room service. Breakfast is available for an additional charge. Valet parking costs $60 per day and hotel self-parking is not available.",
            address: "2005 North Highland Avenue, Los Angeles, CA 90068, USA",
            estimatedNightlyCostMin: null,
            estimatedNightlyCostMax: null,
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
            // TODO: Verify nightly room rates and taxes.
            // Valet parking: $60 per day.
            // No hotel self-parking.
            // Breakfast costs extra.
            // Pet fees apply when applicable.
        },
        {
            name: "Conrad Los Angeles",
            category: "High-End",
            description: "Luxury hotel in Downtown Los Angeles across from Walt Disney Concert Hall and near The Broad museum, Grand Park, and the Grand Avenue Arts district. Features elegant rooms and suites, a rooftop terrace with outdoor swimming pool, city views, a full-service spa, upscale restaurants, fitness center, concierge services, and room service. Valet parking is available at an additional charge.",
            address: "100 South Grand Avenue, Los Angeles, CA 90012, USA",
            estimatedNightlyCostMin: null,
            estimatedNightlyCostMax: null,
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
            // TODO: Verify room rates, taxes, and fees.
            // Valet parking is available.
            // Confirm current parking rate directly with hotel.
            // Spa treatments and some dining experiences
            // have additional charges.
        }
    ],


    
    // ==========================================
    // LOS ANGELES — TWO REAL AIRBNB LISTINGS
    // ==========================================
    // TODO: Verify nightly prices, fees, minimum stays,
    // and availability for selected travel dates.

    vacationRentals: [
        {
            name: "Venice Beach Oceanfront Rooftop Escape",
            category: "Vacation Rental",
            propertyType: "Entire oceanfront home",
            description: "Spacious luxury oceanfront residence located directly on the Venice Beach Boardwalk. Features panoramic Pacific Ocean views, two private king-bedroom suites, a rooftop deck, oceanfront patio, private primary-suite balcony, and a modern kitchen with premium Thermador appliances. Walking distance to Venice Beach, restaurants, shopping, and the Venice Canals.",
            address: "Venice Beach, Los Angeles, CA, USA — exact street address provided after booking",
            estimatedNightlyCostMin: null,
            estimatedNightlyCostMax: null,
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
            estimatedNightlyCostMin: null,
            estimatedNightlyCostMax: null,
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
            // TODO: Pool heating advertised at $100 per day.
            // This optional cost is not included in parkingCost.
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


            // Mild seasonal events
            event: [
                {
                    name: "South Beach Wine and Food Festival",
                    category: "Festivals and Events",
                    description: "Experience a four-day culinary festival featuring celebrity chefs, tasting events, cooking demonstrations, brunches, specialty dining experiences, and food-focused entertainment.",
                    estimatedCostMin: 59,
                    estimatedCostMax: null,
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
                // Activity 1: Museums & Art
                name: "Pérez Art Museum Miami Visit",
                category: "Museums & Art",
                description: "Explore contemporary and modern art exhibitions featuring artists from the Americas, along with beautiful architecture and views of Biscayne Bay.",
                estimatedCostMin: null,
                estimatedCostMax: null,
                priceType: "perPerson",
                estimatedDuration: 120,
                location: "1103 Biscayne Boulevard, Miami, FL 33132",
                openingHours: "Verify current museum hours",
                website: "https://www.pamm.org/"
            },
            {
                // Activity 2: Food & Dining
                name: "1-800-Lucky Asian Food Hall",
                category: "Food & Dining",
                description: "Explore an Asian-inspired food hall in Wynwood featuring restaurants, quick-service food vendors, and a lively dining atmosphere.",
                estimatedCostMin: 0,
                estimatedCostMax: null,
                priceType: "perPerson",
                estimatedDuration: 90,
                location: "143 NW 23rd Street, Miami, FL 33127",
                openingHours: "Restaurant and vendor hours vary",
                website: "https://www.1800lucky.com/"
            },
            {
                // Activity 3: Shopping
                name: "Brickell City Centre Shopping",
                category: "Shopping",
                description: "Explore a modern shopping and entertainment complex featuring fashion retailers, restaurants, luxury stores, and contemporary architecture.",
                estimatedCostMin: 0,
                estimatedCostMax: null,
                priceType: "perPerson",
                estimatedDuration: 120,
                location: "701 S Miami Avenue, Miami, FL 33131",
                openingHours: "Verify current shopping center and store hours",
                website: "https://www.brickellcitycentre.com/"
            },
            {
                // Activity 4: Entertainment
                name: "Superblue Miami Immersive Art Experience",
                category: "Entertainment",
                description: "Explore immersive art installations featuring interactive environments, large-scale digital artwork, and sensory experiences.",
                estimatedCostMin: null,
                estimatedCostMax: null,
                priceType: "perPerson",
                estimatedDuration: 120,
                location: "1101 NW 23rd Street, Miami, FL 33127",
                openingHours: "Verify current exhibition and admission hours",
                website: "https://www.superblue.com/"
            },
            {
                // Activity 5: Museums & Art
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
                // Activity 1: History & Culture
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
                // Activity 2: Museums & Art
                name: "Vizcaya Museum and Gardens Visit",
                category: "History & Culture",
                description: "Explore a historic waterfront estate featuring European-inspired architecture, beautifully landscaped gardens, decorative artwork, and views of Biscayne Bay.",
                estimatedCostMin: null,
                estimatedCostMax: null,
                priceType: "perPerson",
                estimatedDuration: 180,
                location: "3251 S Miami Avenue, Miami, FL 33129",
                openingHours: "Verify current museum and garden hours",
                website: "https://vizcaya.org/"
            },
            {
                // Activity 3: Food & Dining
                name: "Little Havana Cuban Food and Culture Walk",
                category: "Food & Dining",
                description: "Explore Calle Ocho in Little Havana, where visitors can discover Cuban coffee, bakeries, restaurants, local shops, music, and neighborhood culture.",
                estimatedCostMin: 0,
                estimatedCostMax: null,
                priceType: "perPerson",
                estimatedDuration: 120,
                location: "Calle Ocho, SW 8th Street, Miami, FL 33135",
                openingHours: "Varies by restaurant and shop",
                website: "https://www.miamiandbeaches.com/"
            },
            {
                // Activity 4: Beaches & Water Activities
                name: "Venetian Pool Swimming Experience",
                category: "Beaches & Water Activities",
                description: "Enjoy a historic outdoor swimming pool in Coral Gables featuring waterfalls, coral rock formations, and a unique Mediterranean-style setting.",
                estimatedCostMin: null,
                estimatedCostMax: null,
                priceType: "perPerson",
                estimatedDuration: 120,
                location: "2701 De Soto Boulevard, Coral Gables, FL 33134",
                openingHours: "Seasonal pool hours and closures vary",
                website: "https://www.coralgables.com/"
            },
            {
                // Activity 5: Outdoor & Nature
                name: "Fairchild Tropical Botanic Garden Visit",
                category: "Outdoor & Nature",
                description: "Explore tropical gardens featuring rare plants, palm trees, flowering landscapes, nature trails, and seasonal botanical exhibitions.",
                estimatedCostMin: null,
                estimatedCostMax: null,
                priceType: "perPerson",
                estimatedDuration: 180,
                location: "10901 Old Cutler Road, Coral Gables, FL 33156",
                openingHours: "Verify current garden hours",
                website: "https://fairchildgarden.org/"
            }
    ],


    // MIAMI RESTAURANTS — RESEARCH CANDIDATES
    // TODO: Confirm restaurant is open and serves the assigned meal.
    // TODO: Replace null costs, TODO addresses, and unverified hours/URLs before seeding.
    // Per meal: 1 Budget, 2 Mid-Range, 1 High-End.

    breakfast: [
        {
            name: "El Bagel",
            category: "Food & Dining",
            description: "Bagels and breakfast sandwiches restaurant candidate for breakfast in the Miami area; TODO: confirm menu and operating hours.",
            mealTypes: ["Breakfast"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Budget",
            address: "TODO: Verify street address in Miami area",
            cuisine: "Bagels and breakfast sandwiches",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "GreenStreet Cafe",
            category: "Food & Dining",
            description: "American brunch restaurant candidate for breakfast in the Miami area; TODO: confirm menu and operating hours.",
            mealTypes: ["Breakfast"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Mid-Range",
            address: "TODO: Verify street address in Miami area",
            cuisine: "American brunch",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "B Bistro + Bakery",
            category: "Food & Dining",
            description: "Contemporary bakery and brunch restaurant candidate for breakfast in the Miami area; TODO: confirm menu and operating hours.",
            mealTypes: ["Breakfast"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Mid-Range",
            address: "TODO: Verify street address in Miami area",
            cuisine: "Contemporary bakery and brunch",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "Sunday brunch at Biltmore Hotel",
            category: "Food & Dining",
            description: "Luxury hotel brunch restaurant candidate for breakfast in the Miami area; TODO: confirm menu and operating hours.",
            mealTypes: ["Breakfast"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "High-End",
            address: "TODO: Verify street address in Miami area",
            cuisine: "Luxury hotel brunch",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
    ],

    lunch: [
        {
            name: "La Sandwicherie",
            category: "Food & Dining",
            description: "French-inspired sandwiches restaurant candidate for lunch in the Miami area; TODO: confirm menu and operating hours.",
            mealTypes: ["Lunch"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Budget",
            address: "TODO: Verify street address in Miami area",
            cuisine: "French-inspired sandwiches",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "Sanguich de Miami",
            category: "Food & Dining",
            description: "Cuban sandwiches restaurant candidate for lunch in the Miami area; TODO: confirm menu and operating hours.",
            mealTypes: ["Lunch"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Mid-Range",
            address: "TODO: Verify street address in Miami area",
            cuisine: "Cuban sandwiches",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "Mandolin Aegean Bistro",
            category: "Food & Dining",
            description: "Greek and Turkish restaurant candidate for lunch in the Miami area; TODO: confirm menu and operating hours.",
            mealTypes: ["Lunch"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Mid-Range",
            address: "TODO: Verify street address in Miami area",
            cuisine: "Greek and Turkish",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "Jaya at The Setai",
            category: "Food & Dining",
            description: "Upscale Asian restaurant candidate for lunch in the Miami area; TODO: confirm menu and operating hours.",
            mealTypes: ["Lunch"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "High-End",
            address: "TODO: Verify street address in Miami area",
            cuisine: "Upscale Asian",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
    ],

    dinner: [
        {
            name: "La Carreta",
            category: "Food & Dining",
            description: "Cuban restaurant candidate for dinner in the Miami area; TODO: confirm menu and operating hours.",
            mealTypes: ["Dinner"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Budget",
            address: "TODO: Verify street address in Miami area",
            cuisine: "Cuban",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "Cvi.che 105",
            category: "Food & Dining",
            description: "Peruvian seafood restaurant candidate for dinner in the Miami area; TODO: confirm menu and operating hours.",
            mealTypes: ["Dinner"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Mid-Range",
            address: "TODO: Verify street address in Miami area",
            cuisine: "Peruvian seafood",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "Michael’s Genuine Food & Drink",
            category: "Food & Dining",
            description: "Contemporary American restaurant candidate for dinner in the Miami area; TODO: confirm menu and operating hours.",
            mealTypes: ["Dinner"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Mid-Range",
            address: "TODO: Verify street address in Miami area",
            cuisine: "Contemporary American",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "COTE Miami",
            category: "Food & Dining",
            description: "Korean steakhouse restaurant candidate for dinner in the Miami area; TODO: confirm menu and operating hours.",
            mealTypes: ["Dinner"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "High-End",
            address: "TODO: Verify street address in Miami area",
            cuisine: "Korean steakhouse",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
    ],





    // ==========================================
    // LOCAL TRANSPORTATION
    // ==========================================

    transportation: [
        "Uber/Lyft",
        "Rental Car",
        "Walking",
        "Metromover",
        "Metrobus",
        "Metrorail"
    ],

    
    // ==========================================
    // MIAMI — DETAILED TRANSPORTATION OPTIONS
    // ==========================================
    // Metrobus and Metrorail fares below reflect the
    // approved January 2027 fare increase.

    transportationOptions: [
        {
            name: "Uber/Lyft",
            type: "Rideshare",
            description: "App-based rideshare transportation available throughout Miami, Miami Beach, Brickell, Wynwood, Little Havana, and surrounding areas. Convenient for airport transfers, beaches, restaurants, hotels, nightlife, and attractions not served directly by public transportation. Prices vary by distance, traffic, demand, pickup location, and time of day. Airport fees and surge pricing may apply.",
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perRide",
            website: "https://www.uber.com/"
        },
        {
            name: "Rental Car",
            type: "Car Rental",
            description: "Rental vehicles available at Miami International Airport, Fort Lauderdale-Hollywood International Airport, and locations throughout Miami. Useful for visiting Miami Beach, Coral Gables, Key Biscayne, Everglades-area attractions, and destinations outside the transit network. Costs vary by rental dates, vehicle type, company, driver age, and insurance. Fuel, tolls, parking, and optional fees are not included. Parking in Miami Beach and Downtown Miami may be expensive.",
            estimatedCostMin: null,
            estimatedCostMax: null,
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


  
    // ==========================================
    // MIAMI — THREE REAL HOTELS
    // Budget, Mid-Range, and High-End
    // ==========================================
    // TODO: Verify nightly rates, taxes, availability,
    // and additional fees for selected travel dates.

    hotels: [
        {
            name: "Freehand Miami",
            category: "Budget",
            description: "Budget-friendly boutique hotel in Miami Beach near the ocean, restaurants, nightlife, and public transportation. Offers private hotel rooms and group-friendly accommodations, an outdoor swimming pool, tropical garden courtyard, complimentary Wi-Fi, on-site bars, and complimentary bicycles. The hotel charges a resort fee of $35 plus tax. No private parking lot is available; limited valet parking at a nearby AC Hotel costs $55 plus tax, subject to availability.",
            address: "2727 Indian Creek Drive, Miami Beach, FL 33140, USA",
            estimatedNightlyCostMin: null,
            estimatedNightlyCostMax: null,
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
            // TODO: Verify room rates and taxes for travel dates.
            // Resort fee: $35 plus tax per night.
            // Check whether resort fees are already included
            // in the booking platform's displayed total.
            // Limited nearby valet: $55 plus tax,
            // subject to availability.
            // Private and group rooms have different pricing.
        },
        {
            name: "Hampton Inn & Suites Miami/Brickell-Downtown",
            category: "Mid-Range",
            description: "Recently renovated mid-range hotel in Miami's Brickell neighborhood near Brickell City Centre, restaurants, shopping, and public transportation. Offers complimentary hot breakfast, free Wi-Fi, an outdoor swimming pool, fitness center, comfortable guest rooms, meeting facilities, and EV charging. The property is close to Metromover and Metrorail connections. On-site secured self-parking costs $39 per day; valet parking is not available.",
            address: "50 SW 12th Street, Miami, FL 33130, USA",
            estimatedNightlyCostMin: null,
            estimatedNightlyCostMax: null,
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
            // TODO: Verify room prices and taxes.
            // Self-parking: $39 per day.
            // Valet parking is not available.
            // No hotel airport shuttle.
            // This property does not allow pets.
        },
        {
            name: "Four Seasons Hotel Miami",
            category: "High-End",
            description: "Luxury five-star hotel on Brickell Avenue offering elegant rooms and suites, skyline and Biscayne Bay views in selected accommodations, a spacious tropical rooftop pool deck, full-service spa, fitness facilities, and upscale restaurants. Located near Brickell City Centre, fine dining, shopping, and nightlife. Daily valet parking costs $65, while adjacent self-parking is listed at $60 per day.",
            address: "1435 Brickell Avenue, Miami, FL 33131, USA",
            estimatedNightlyCostMin: null,
            estimatedNightlyCostMax: null,
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
            // TODO: Verify nightly room prices and taxes.
            // Valet parking: $65 per day.
            // Adjacent self-parking: $60 per day.
            // parkingCost stores the valet option.
            // Spa treatments, cabana rentals, and dining
            // may have additional charges.
        }
    ],


    
    // ==========================================
    // MIAMI — TWO REAL AIRBNB LISTINGS
    // ==========================================
    // TODO: Verify nightly prices, fees, minimum stays,
    // and availability for selected travel dates.

    vacationRentals: [
        {
            name: "Miami South Beach Art Deco Escape",
            category: "Vacation Rental",
            propertyType: "Entire condo",
            description: "Bright two-bedroom condo in Miami Beach's historic Art Deco district, located one block from South Beach. Features a private balcony overlooking the neighborhood, two queen bedrooms, a fully equipped kitchen, a living room with a futon sleeper, and three Smart TVs. Walking distance to Ocean Drive, Lummus Park, restaurants, shopping, and nightlife. Located on the second floor with no elevator.",
            address: "227 13th Street, Miami Beach, FL, USA",
            estimatedNightlyCostMin: null,
            estimatedNightlyCostMax: null,
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
            // TODO: No parking in the building lot.
            // Nearby public parking may have an additional fee.
            // Second-floor walk-up with no elevator.
        },
        {
            name: "Miami Riverfront Artistic Loft",
            category: "Vacation Rental",
            propertyType: "Entire townhouse",
            description: "Unique 2,800-square-foot waterfront loft-style townhouse in Miami's Spring Garden neighborhood along the Miami River. Features three bedrooms, two and a half bathrooms, high ceilings, designer furniture, curated artwork, a waterfront garden, premium Sonos audio, an HD movie projector, and a spacious living area. Conveniently located near Downtown Miami, Wynwood, and Brickell.",
            address: "Spring Garden / Miami River, Miami, FL, USA — exact street address provided after booking",
            estimatedNightlyCostMin: null,
            estimatedNightlyCostMax: null,
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
            // TODO: Verify pricing and all fees for travel dates.
        }
    ]

},



// Nashville #9
{
    // ==========================================
    // DESTINATION 9: NASHVILLE, TENNESSEE
    // ==========================================

    id: 9,
    city: "Nashville",
    state: "Tennessee",
    description: "Nashville is the capital of Tennessee, known as Music City for its country music history, live entertainment, Southern cuisine, historic landmarks, shopping, and outdoor attractions.",
    duration: "3-4 days",

    weatherOptions: [
        {
            // ==================================
            // WEATHER OPTION 1: SUNNY
            // ==========================================

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
                    estimatedCost: 0
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
            // ==================================
            // WEATHER OPTION 2: COOL
            // ==================================

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


            // Cool seasonal events
            event: [
             {
                    name: "Cheekwood Harvest",
                    category: "Festivals and Events",
                    description: "Celebrate autumn at Cheekwood Estate and Gardens with thousands of pumpkins, seasonal flowers, fall garden displays, outdoor activities, and live entertainment.",
                    estimatedCostMin: null,
                    estimatedCostMax: null,
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
                    website: "https://www.visitmusiccity.com/"
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
                    estimatedCostMax: null,
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
                    estimatedCostMax: null,
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
                    estimatedCostMin: null,
                    estimatedCostMax: null,
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
                    estimatedCostMin: null,
                    estimatedCostMax: null,
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
                    estimatedCostMin: null,
                    estimatedCostMax: null,
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
                    estimatedCostMin: null,
                    estimatedCostMax: null,
                    priceType: "perPerson",
                    estimatedDuration: 120,
                    location: "401 Gay Street, Nashville, TN 37219",
                    openingHours: "Mon-Sat 10 AM-5 PM; holiday hours may vary",
                    website: "https://www.musicianshalloffame.com/"
                }    ],


    // NASHVILLE RESTAURANTS — RESEARCH CANDIDATES
    // TODO: Confirm restaurant is open and serves the assigned meal.
    // TODO: Replace null costs, TODO addresses, and unverified hours/URLs before seeding.
    // Per meal: 1 Budget, 2 Mid-Range, 1 High-End.

    breakfast: [
        {
            name: "Biscuit Love",
            category: "Food & Dining",
            description: "Southern breakfast restaurant candidate for breakfast in the Nashville area; TODO: confirm menu and operating hours.",
            mealTypes: ["Breakfast"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Budget",
            address: "TODO: Verify street address in Nashville area",
            cuisine: "Southern breakfast",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "Pancake Pantry",
            category: "Food & Dining",
            description: "American breakfast restaurant candidate for breakfast in the Nashville area; TODO: confirm menu and operating hours.",
            mealTypes: ["Breakfast"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Mid-Range",
            address: "TODO: Verify street address in Nashville area",
            cuisine: "American breakfast",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "Monell’s",
            category: "Food & Dining",
            description: "Southern family-style restaurant candidate for breakfast in the Nashville area; TODO: confirm menu and operating hours.",
            mealTypes: ["Breakfast"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Mid-Range",
            address: "TODO: Verify street address in Nashville area",
            cuisine: "Southern family-style",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "Adele’s weekend brunch",
            category: "Food & Dining",
            description: "Upscale American brunch restaurant candidate for breakfast in the Nashville area; TODO: confirm menu and operating hours.",
            mealTypes: ["Breakfast"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "High-End",
            address: "TODO: Verify street address in Nashville area",
            cuisine: "Upscale American brunch",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
    ],

    lunch: [
        {
            name: "Prince’s Hot Chicken",
            category: "Food & Dining",
            description: "Nashville hot chicken restaurant candidate for lunch in the Nashville area; TODO: confirm menu and operating hours.",
            mealTypes: ["Lunch"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Budget",
            address: "TODO: Verify street address in Nashville area",
            cuisine: "Nashville hot chicken",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "Hattie B’s Hot Chicken",
            category: "Food & Dining",
            description: "Nashville hot chicken restaurant candidate for lunch in the Nashville area; TODO: confirm menu and operating hours.",
            mealTypes: ["Lunch"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Mid-Range",
            address: "TODO: Verify street address in Nashville area",
            cuisine: "Nashville hot chicken",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "The Pharmacy Burger Parlor",
            category: "Food & Dining",
            description: "Burgers restaurant candidate for lunch in the Nashville area; TODO: confirm menu and operating hours.",
            mealTypes: ["Lunch"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Mid-Range",
            address: "TODO: Verify street address in Nashville area",
            cuisine: "Burgers",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "The Southern Steak & Oyster",
            category: "Food & Dining",
            description: "Upscale Southern seafood restaurant candidate for lunch in the Nashville area; TODO: confirm menu and operating hours.",
            mealTypes: ["Lunch"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "High-End",
            address: "TODO: Verify street address in Nashville area",
            cuisine: "Upscale Southern seafood",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
    ],

    dinner: [
        {
            name: "Martin’s Bar-B-Que Joint",
            category: "Food & Dining",
            description: "Tennessee barbecue restaurant candidate for dinner in the Nashville area; TODO: confirm menu and operating hours.",
            mealTypes: ["Dinner"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Budget",
            address: "TODO: Verify street address in Nashville area",
            cuisine: "Tennessee barbecue",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "The Stillery",
            category: "Food & Dining",
            description: "American comfort food restaurant candidate for dinner in the Nashville area; TODO: confirm menu and operating hours.",
            mealTypes: ["Dinner"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Mid-Range",
            address: "TODO: Verify street address in Nashville area",
            cuisine: "American comfort food",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "Rolf and Daughters",
            category: "Food & Dining",
            description: "Modern Italian restaurant candidate for dinner in the Nashville area; TODO: confirm menu and operating hours.",
            mealTypes: ["Dinner"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Mid-Range",
            address: "TODO: Verify street address in Nashville area",
            cuisine: "Modern Italian",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "The Catbird Seat",
            category: "Food & Dining",
            description: "Chef-led tasting menu restaurant candidate for dinner in the Nashville area; TODO: confirm menu and operating hours.",
            mealTypes: ["Dinner"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "High-End",
            address: "TODO: Verify street address in Nashville area",
            cuisine: "Chef-led tasting menu",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
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

    
    // ==========================================
    // NASHVILLE — DETAILED TRANSPORTATION OPTIONS
    // ==========================================

    transportationOptions: [
        {
            name: "Uber/Lyft",
            type: "Rideshare",
            description: "App-based rideshare transportation available throughout Nashville and surrounding areas. Convenient for Nashville International Airport transfers, Downtown Broadway, Music Row, The Gulch, East Nashville, restaurants, hotels, and nightlife. Fares vary by distance, traffic, demand, pickup location, and time of day. Airport fees and surge pricing may apply.",
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perRide",
            website: "https://www.uber.com/"
        },
        {
            name: "Rental Car",
            type: "Car Rental",
            description: "Rental vehicles available at Nashville International Airport and throughout the Nashville metropolitan area. Useful for exploring attractions outside downtown, including the Grand Ole Opry, Belle Meade, nearby state parks, and surrounding Tennessee towns. Rental rates vary by travel dates, vehicle type, driver age, rental company, and insurance coverage. Fuel, parking, tolls, and optional fees are not included. Parking in Downtown Nashville can be expensive.",
            estimatedCostMin: null,
            estimatedCostMax: null,
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


    // TODO: Add three researched hotels
    
    // ==========================================
    // NASHVILLE — THREE REAL HOTELS
    // Budget, Mid-Range, and High-End
    // ==========================================
    // TODO: Verify nightly room rates, taxes,
    // additional fees, and availability.

    hotels: [
        {
            name: "Hampton Inn Nashville/Vanderbilt",
            category: "Budget",
            description: "Value-oriented hotel in Nashville's Midtown and Vanderbilt area near Music Row, Centennial Park, and local restaurants. Offers complimentary hot breakfast, free Wi-Fi, an outdoor swimming pool, fitness center, and comfortable standard guest rooms. Convenient for visitors exploring Vanderbilt University and central Nashville. On-site self-parking costs $35 per day. Guest reviews indicate some rooms and facilities may be dated.",
            address: "1919 West End Avenue, Nashville, TN 37203, USA",
            estimatedNightlyCostMin: null,
            estimatedNightlyCostMax: null,
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
            // TODO: Verify nightly room prices and taxes.
            // Self-parking: $35 per day.
            // Pet fees: $75 for stays of 1-4 nights;
            // $125 for stays of 5 or more nights.
            // No airport shuttle is provided.
            // Confirm pool availability before booking.
        },
        {
            name: "Drury Plaza Hotel Nashville Downtown",
            category: "Mid-Range",
            description: "Modern downtown Nashville hotel in the SoBro district within walking distance of Broadway, Bridgestone Arena, Ryman Auditorium, Music City Center, and the Country Music Hall of Fame. Features complimentary hot breakfast, free Wi-Fi, Drury's evening 5:30 Kickback food service, an indoor/outdoor swimming pool, whirlpool, fitness center, and an on-site restaurant and bar. Covered on-site parking costs $45 plus tax per night.",
            address: "300 Korean Veterans Boulevard, Nashville, TN 37201, USA",
            estimatedNightlyCostMin: null,
            estimatedNightlyCostMax: null,
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
            // TODO: Verify nightly rates and taxes.
            // Covered parking: $45 plus tax per night.
            // Pet fee: $50 plus tax per room per day.
            // Early/late checkout may have separate fees.
            // Breakfast and 5:30 Kickback are included.
        },
        {
            name: "The Hermitage Hotel",
            category: "High-End",
            description: "Historic five-star luxury hotel in Downtown Nashville near the Tennessee State Capitol, Ryman Auditorium, and Broadway entertainment district. Originally opened in 1910, the hotel features elegant rooms and suites, marble bathrooms, upscale dining at Drusie & Darr, The Pink Hermit cafe, afternoon tea, concierge services, and a fitness center. Overnight valet parking costs $58 plus tax. Breakfast is not automatically included. The hotel does not have a swimming pool.",
            address: "231 6th Avenue North, Nashville, TN 37219, USA",
            estimatedNightlyCostMin: null,
            estimatedNightlyCostMax: null,
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
            // TODO: Verify nightly room rates and taxes.
            // Valet parking: $58 plus tax per night.
            // No on-site self-parking.
            // Breakfast costs extra unless included
            // in a selected room package.
            // No swimming pool.
            // Confirm availability of spa services.
        }
    ],


    
    // ==========================================
    // NASHVILLE — TWO REAL AIRBNB LISTINGS
    // ==========================================
    // TODO: Verify nightly prices, cleaning fees,
    // minimum stays, and availability for travel dates.

    vacationRentals: [
        {
            name: "Nashville Secret Speakeasy Hideaway",
            category: "Vacation Rental",
            propertyType: "Entire condo",
            description: "Unique speakeasy-themed condo in Downtown Nashville featuring secret doors, exposed brick, atmospheric lighting, a hidden Jungle Room with a king bed, a Peacock Room with a queen bed, and a glowing gold bathroom. Includes a fully equipped kitchen, coffee bar, Smart TVs, and two additional folding beds. Walking distance to Broadway, Printer's Alley, and the Ryman Auditorium.",
            address: "Downtown Nashville, TN, USA — exact street address provided after booking",
            estimatedNightlyCostMin: null,
            estimatedNightlyCostMax: null,
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
            // TODO: Parking is paid.
            // Verify nearby garage or metered parking costs.
        },
        {
            name: "Nashville Vintage Music City Bungalow",
            category: "Vacation Rental",
            propertyType: "Entire house",
            description: "Restored 1920s Craftsman home in East Nashville featuring exposed brick walls, colorful vintage-inspired interiors, four bedrooms, a private backyard hot tub, a shuffleboard game room, a vintage record player, and a spacious outdoor deck. Includes a fire pit, barbecue grill, fenced dog run, garden, and driveway parking. Located near East Nashville restaurants and coffee shops.",
            address: "East Nashville, Nashville, TN, USA — exact street address provided after booking",
            estimatedNightlyCostMin: null,
            estimatedNightlyCostMax: null,
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
            // TODO: Confirm pet policies and any extra pet fees.
        }
    ]

},

// New Orleans #10

{
    // ==========================================
    // DESTINATION 10: NEW ORLEANS, LOUISIANA
    // ==========================================

    id: 10,
    city: "New Orleans",
    state: "Louisiana",
    description: "New Orleans is a vibrant Louisiana city known for its jazz music, Creole and Cajun cuisine, historic French Quarter, colorful architecture, cultural festivals, and lively entertainment.",
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
                    name: "New Orleans Riverwalk Outlets",
                    category: "Shopping",
                    estimatedCost: 0
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
            // ==================================
            // WEATHER OPTION 2: MILD
            // ==================================

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
                    estimatedCost: 0
                },
                {
                    name: "French Market",
                    category: "Shopping",
                    estimatedCost: 0
                },
                {
                    name: "Frenchmen Street",
                    category: "Nightlife",
                    estimatedCost: 0
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
                    estimatedCostMin: null,
                    estimatedCostMax: null,
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

    // ==========================================
    // SHARED ACTIVITIES (HOT + MILD)
    // Available for both weather options
    // ==========================================
    activities: [
        // Originally Hot weather activities
                {
                    // Activity 1: History & Culture
                    name: "Mardi Gras World Studio Tour",
                    category: "History & Culture",
                    description: "Explore a working Mardi Gras float production facility and discover how the colorful floats, sculptures, and decorations are created for New Orleans parades.",
                    estimatedCostMin: null,
                    estimatedCostMax: null,
                    priceType: "perPerson",
                    estimatedDuration: 90,
                    location: "1380 Port of New Orleans Place, New Orleans, LA 70130",
                    openingHours: "Verify current tour schedule",
                    website: "https://mardigrasworld.com/"
                },
                {
                    // Activity 2: Museums & Art
                    name: "Ogden Museum of Southern Art Visit",
                    category: "Museums & Art",
                    description: "Explore paintings, photography, sculptures, and exhibitions celebrating the art and cultural traditions of the American South.",
                    estimatedCostMin: null,
                    estimatedCostMax: null,
                    priceType: "perPerson",
                    estimatedDuration: 120,
                    location: "925 Camp Street, New Orleans, LA 70130",
                    openingHours: "Verify current museum hours",
                    website: "https://ogdenmuseum.org/"
                },
                {
                    // Activity 3: Food & Dining
                    name: "Cafe Du Monde Beignet Experience",
                    category: "Food & Dining",
                    description: "Enjoy traditional New Orleans beignets covered in powdered sugar and experience one of the city's most famous coffee stands.",
                    estimatedCostMin: null,
                    estimatedCostMax: null,
                    priceType: "perPerson",
                    estimatedDuration: 60,
                    location: "800 Decatur Street, New Orleans, LA 70116",
                    openingHours: "Verify current cafe hours",
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
                    openingHours: "Verify current gallery hours",
                    website: "https://www.hnoc.org/"
                },
                {
                    // Activity 5: Family Friendly
                    name: "Louisiana Children's Museum Visit",
                    category: "Family Friendly",
                    description: "Enjoy interactive exhibits featuring science, creative play, nature, learning activities, and Louisiana culture inside a family-oriented museum.",
                    estimatedCostMin: null,
                    estimatedCostMax: null,
                    priceType: "perPerson",
                    estimatedDuration: 150,
                    location: "15 Henry Thomas Drive, New Orleans, LA 70124",
                    openingHours: "Verify current museum hours and reservations",
                    website: "https://lcm.org/"
                },
        // Originally Mild weather activities
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
                    openingHours: "Verify current sculpture garden hours",
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
                    openingHours: "Outdoor self-guided walk; daytime recommended",
                    website: "https://www.neworleans.com/"
                },
                {
                    // Activity 3: Food & Dining
                    name: "Gumbo Shop Creole Dining Experience",
                    category: "Food & Dining",
                    description: "Experience traditional New Orleans cuisine, including gumbo and other Louisiana dishes, at a restaurant in the historic French Quarter.",
                    estimatedCostMin: null,
                    estimatedCostMax: null,
                    priceType: "perPerson",
                    estimatedDuration: 90,
                    location: "630 Saint Peter Street, New Orleans, LA 70116",
                    openingHours: "Verify current restaurant hours",
                    website: "https://www.gumboshop.com/"
                },
                {
                    // Activity 4: Shopping
                    name: "Magazine Street Boutique Shopping",
                    category: "Shopping",
                    description: "Explore a popular New Orleans shopping corridor featuring independent boutiques, antique stores, art galleries, coffee shops, and restaurants.",
                    estimatedCostMin: 0,
                    estimatedCostMax: null,
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
                    estimatedCostMin: null,
                    estimatedCostMax: null,
                    priceType: "perPerson",
                    estimatedDuration: 60,
                    location: "726 Saint Peter Street, New Orleans, LA 70116",
                    openingHours: "Performance times vary; advance booking recommended",
                    website: "https://www.preservationhall.com/"
                }
    ],


    // NEW ORLEANS RESTAURANTS — RESEARCH CANDIDATES
    // TODO: Confirm restaurant is open and serves the assigned meal.
    // TODO: Replace null costs, TODO addresses, and unverified hours/URLs before seeding.
    // Per meal: 1 Budget, 2 Mid-Range, 1 High-End.

    breakfast: [
        {
            name: "Molly's Rise and Shine",
            category: "Food & Dining",
            description: "Creative American breakfast restaurant candidate for breakfast in the New Orleans area; TODO: confirm menu and operating hours.",
            mealTypes: ["Breakfast"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Budget",
            address: "TODO: Verify street address in New Orleans area",
            cuisine: "Creative American breakfast",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "Ruby Slipper Cafe",
            category: "Food & Dining",
            description: "Southern brunch restaurant candidate for breakfast in the New Orleans area; TODO: confirm menu and operating hours.",
            mealTypes: ["Breakfast"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Mid-Range",
            address: "TODO: Verify street address in New Orleans area",
            cuisine: "Southern brunch",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "Willa Jean",
            category: "Food & Dining",
            description: "Southern bakery and brunch restaurant candidate for breakfast in the New Orleans area; TODO: confirm menu and operating hours.",
            mealTypes: ["Breakfast"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Mid-Range",
            address: "TODO: Verify street address in New Orleans area",
            cuisine: "Southern bakery and brunch",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "Brennan's",
            category: "Food & Dining",
            description: "Upscale Creole breakfast restaurant candidate for breakfast in the New Orleans area; TODO: confirm menu and operating hours.",
            mealTypes: ["Breakfast"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "High-End",
            address: "TODO: Verify street address in New Orleans area",
            cuisine: "Upscale Creole breakfast",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
    ],

    lunch: [
        {
            name: "Parkway Bakery & Tavern",
            category: "Food & Dining",
            description: "New Orleans po-boys restaurant candidate for lunch in the New Orleans area; TODO: confirm menu and operating hours.",
            mealTypes: ["Lunch"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Budget",
            address: "TODO: Verify street address in New Orleans area",
            cuisine: "New Orleans po-boys",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "Gumbo Shop",
            category: "Food & Dining",
            description: "Creole restaurant candidate for lunch in the New Orleans area; TODO: confirm menu and operating hours.",
            mealTypes: ["Lunch"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Mid-Range",
            address: "TODO: Verify street address in New Orleans area",
            cuisine: "Creole",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "Dooky Chase's Restaurant",
            category: "Food & Dining",
            description: "Creole and soul food restaurant candidate for lunch in the New Orleans area; TODO: confirm menu and operating hours.",
            mealTypes: ["Lunch"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Mid-Range",
            address: "TODO: Verify street address in New Orleans area",
            cuisine: "Creole and soul food",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "Commander's Palace",
            category: "Food & Dining",
            description: "Fine-dining Creole (verify lunch schedule) restaurant candidate for lunch in the New Orleans area; TODO: confirm menu and operating hours.",
            mealTypes: ["Lunch"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "High-End",
            address: "TODO: Verify street address in New Orleans area",
            cuisine: "Fine-dining Creole (verify lunch schedule)",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
    ],

    dinner: [
        {
            name: "Cochon Butcher",
            category: "Food & Dining",
            description: "Cajun and sandwiches restaurant candidate for dinner in the New Orleans area; TODO: confirm menu and operating hours.",
            mealTypes: ["Dinner"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Budget",
            address: "TODO: Verify street address in New Orleans area",
            cuisine: "Cajun and sandwiches",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "Peche Seafood Grill",
            category: "Food & Dining",
            description: "Gulf seafood restaurant candidate for dinner in the New Orleans area; TODO: confirm menu and operating hours.",
            mealTypes: ["Dinner"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Mid-Range",
            address: "TODO: Verify street address in New Orleans area",
            cuisine: "Gulf seafood",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "Compère Lapin",
            category: "Food & Dining",
            description: "Caribbean-Creole restaurant candidate for dinner in the New Orleans area; TODO: confirm menu and operating hours.",
            mealTypes: ["Dinner"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Mid-Range",
            address: "TODO: Verify street address in New Orleans area",
            cuisine: "Caribbean-Creole",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "Restaurant August",
            category: "Food & Dining",
            description: "Fine-dining contemporary Creole restaurant candidate for dinner in the New Orleans area; TODO: confirm menu and operating hours.",
            mealTypes: ["Dinner"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "High-End",
            address: "TODO: Verify street address in New Orleans area",
            cuisine: "Fine-dining contemporary Creole",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
    ],



  
    // LOCAL TRANSPORTATION
    // ==========================================

    transportation: [
        "Streetcar",
        "Uber/Lyft",
        "Rental Car",
        "Walking",
        "RTA Buses"
    ],

   
    // ==========================================
    // NEW ORLEANS — DETAILED TRANSPORTATION OPTIONS
    // ==========================================

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
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perRide",
            website: "https://www.uber.com/"
        },
        {
            name: "Rental Car",
            type: "Car Rental",
            description: "Rental vehicles are available at Louis Armstrong New Orleans International Airport and throughout the metropolitan area. Useful for exploring plantations that offer public tours, nearby Louisiana towns, swamp tour departure points, and attractions outside the city. Rental prices vary by travel dates, vehicle type, driver age, rental company, and insurance. Fuel, parking, tolls, and optional fees are not included. Downtown and French Quarter parking can be expensive, so a rental car may be unnecessary for a central New Orleans itinerary.",
            estimatedCostMin: null,
            estimatedCostMax: null,
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

   
    // ==========================================
    // NEW ORLEANS — THREE REAL HOTELS
    // Budget, Mid-Range, and High-End
    // ==========================================
    // TODO: Verify nightly room rates, taxes,
    // fees, and availability for selected travel dates.

    hotels: [
        {
            name: "HI New Orleans Hostel",
            category: "Budget",
            description: "Budget-friendly modern hostel in a renovated historic building on Canal Street near the French Quarter and Central Business District. Offers shared dormitory beds and private rooms with bathrooms. Features complimentary Wi-Fi, a large shared guest kitchen, dining spaces, comfortable lounges, work areas, laundry facilities, and convenient access to the Canal Street streetcar. A good option for travelers trying to minimize accommodation costs. No dedicated on-site parking is available.",
            address: "1028 Canal Street, New Orleans, LA 70112, USA",
            estimatedNightlyCostMin: null,
            estimatedNightlyCostMax: null,
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
            // TODO: Verify private-room prices and dorm rates.
            // Dorm beds and private rooms have different costs.
            // No dedicated on-site parking.
            // Confirm parking garage prices separately.
            // Maximum stay: 14 days per calendar year.
            // No pets except permitted service animals.
        },
        {
            name: "Hampton Inn & Suites New Orleans-Convention Center",
            category: "Mid-Range",
            description: "Comfortable hotel in the Arts and Warehouse District directly across from the Ernest N. Morial Convention Center. Features modern guest rooms and suites, complimentary hot breakfast, free Wi-Fi, an outdoor courtyard swimming pool, fitness center, business facilities, and convenient access to the National WWII Museum and downtown attractions. The hotel is also near the Port of New Orleans cruise terminals. Valet parking is available for $44, and hotel self-parking is not offered.",
            address: "1201 Convention Center Boulevard, New Orleans, LA 70130, USA",
            estimatedNightlyCostMin: null,
            estimatedNightlyCostMax: null,
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
            // TODO: Verify nightly room rates and taxes.
            // Valet parking: $44 according to Hilton.
            // No hotel self-parking.
            // Pets: $75 for stays of 1-4 nights
            // or $125 for stays of 5+ nights.
            // Airport shuttle is not available.
            // Verify cruise shuttle package eligibility.
        },
        {
            name: "The Roosevelt New Orleans, A Waldorf Astoria Hotel",
            category: "High-End",
            description: "Historic luxury Waldorf Astoria hotel in Downtown New Orleans approximately one block from the French Quarter and Bourbon Street. Features elegant rooms and suites, a rooftop outdoor swimming pool, full-service spa, fitness center, concierge services, and upscale dining including the famous Sazerac Bar and Fountain Lounge. Convenient to Canal Street, theaters, restaurants, and major attractions. Valet parking is available for $57; hotel self-parking is not offered.",
            address: "130 Roosevelt Way, New Orleans, LA 70112, USA",
            estimatedNightlyCostMin: null,
            estimatedNightlyCostMax: null,
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
            // TODO: Verify nightly room rates and taxes.
            // Valet parking: $57 according to Hilton.
            // No hotel self-parking.
            // Verify applicable Wi-Fi charges and room fees.
            // Spa treatments, cabanas, and dining cost extra.
            // A luxury room does not include every hotel service.
        }
    ],


  
    // ==========================================
    // NEW ORLEANS — TWO REAL AIRBNB LISTINGS
    // ==========================================
    // TODO: Verify nightly prices, fees, minimum stays,
    // and availability for selected travel dates.

    vacationRentals: [
        {
            name: "French Quarter Courtyard Manor",
            category: "Vacation Rental",
            propertyType: "Entire historic house",
            description: "Historic three-story French Quarter vacation home near Louis Armstrong Park and Bourbon Street. Features five bedrooms, four and a half bathrooms, a private courtyard, balcony, spacious living area, and kitchen. Includes additional guesthouse bedrooms, connected by a spiral staircase, and historic architectural details. Ideal for a larger group visiting New Orleans.",
            address: "French Quarter, New Orleans, LA, USA — exact street address provided after booking",
            estimatedNightlyCostMin: null,
            estimatedNightlyCostMax: null,
            priceType: "perNight",
            maxGuests: 12,
            bedrooms: 5,
            bathrooms: 4.5,
            amenities: [
                "Wi-Fi",
                "Kitchen",
                "Private courtyard",
                "Private balcony",
                "Historic French Quarter architecture",
                "Spacious living room",
                "Clawfoot bathtub",
                "Walk-in shower",
                "Guesthouse space",
                "Spiral staircase",
                "Dedicated workspace",
                "Television",
                "Pet-friendly listing"
            ],
            cleaningFee: null,
            serviceFee: null,
            parkingCost: null,
            website: "https://www.airbnb.com/rooms/1185415726393776222"
            // TODO: Parking is not included.
            // A paid parking lot is located nearby.
            // Two guesthouse bedrooms are only semi-private.
        },
        {
            name: "Marigny Secret Passage Cottage",
            category: "Vacation Rental",
            propertyType: "Entire Creole cottage",
            description: "Historic 1850s Creole cottage in the Faubourg Marigny neighborhood, approximately two blocks from the French Quarter and three blocks from Frenchmen Street. Features original hardwood floors, 12-foot ceilings, French doors, a unique bookcase secret passage, two queen bedrooms, a fully equipped kitchen, separate dining room, and dedicated home office.",
            address: "Faubourg Marigny, New Orleans, LA, USA — exact street address provided after booking",
            estimatedNightlyCostMin: null,
            estimatedNightlyCostMax: null,
            priceType: "perNight",
            maxGuests: 4,
            bedrooms: 2,
            bathrooms: 2,
            amenities: [
                "Wi-Fi",
                "Full kitchen",
                "Bookcase secret passage",
                "Historic Creole architecture",
                "Hardwood floors",
                "12-foot ceilings",
                "French doors",
                "Two queen beds",
                "Dedicated workspace",
                "Separate dining room",
                "Living room",
                "Air conditioning",
                "Bedroom televisions",
                "Self check-in",
                "Free street parking"
            ],
            cleaningFee: null,
            serviceFee: null,
            parkingCost: 0,
            website: "https://www.airbnb.com/rooms/3268071"
            // TODO: Host notes that a dog sometimes
            // lives here when the home is not rented.
            // Confirm pet policies and cleaning procedures.
        }
    ]

},


// New York #11
    
{
    // ==========================================
    // DESTINATION 11: NEW YORK CITY, NEW YORK
    // ==========================================

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


            // Snowy seasonal events
            event: [
                
                    {
                    name: "Bank of America Winter Village at Bryant Park",
                    category: "Festivals and Events",
                    description: "Explore a winter village in Midtown Manhattan featuring an outdoor ice skating rink, seasonal food, holiday decorations, and artisan shopping. Holiday Shops operate through January 3, while the skating rink continues through February 28.",
                    estimatedCostMin: 0,
                    estimatedCostMax: null,
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


            // Sunny seasonal events
            event: [
                            {
                    name: "Tribeca Festival",
                    category: "Festivals and Events",
                    description: "Experience New York City's annual Tribeca Festival featuring film premieres, documentaries, creative storytelling, special screenings, filmmaker discussions, and entertainment events.",
                    estimatedCostMin: null,
                    estimatedCostMax: null,
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
                    estimatedCostMin: null,
                    estimatedCostMax: null,
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
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            estimatedDuration: 180,
            location: "200 Central Park West, New York, NY 10024",
            openingHours: "Verify current museum hours",
            website: "https://www.amnh.org/"
        },
        {
            // Activity 2: Food & Dining
            name: "Essex Market Food Hall",
            category: "Food & Dining",
            description: "Explore an indoor food market on Manhattan's Lower East Side featuring local vendors, international cuisine, bakeries, and specialty foods.",
            estimatedCostMin: 0,
            estimatedCostMax: null,
            priceType: "perPerson",
            estimatedDuration: 90,
            location: "88 Essex Street, New York, NY 10002",
            openingHours: "Verify current market and vendor hours",
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
            openingHours: "Terminal and business hours vary",
            website: "https://www.grandcentralterminal.com/"
        },
        {
            // Activity 4: Shopping
            name: "Macy's Herald Square Shopping",
            category: "Shopping",
            description: "Explore a famous department store featuring fashion, beauty, accessories, home goods, and seasonal displays.",
            estimatedCostMin: 0,
            estimatedCostMax: null,
            priceType: "perPerson",
            estimatedDuration: 120,
            location: "151 W 34th Street, New York, NY 10001",
            openingHours: "Verify current store hours",
            website: "https://www.macys.com/"
        },
        {
            // Activity 5: Museums & Art
            name: "The Morgan Library & Museum",
            category: "Museums & Art",
            description: "Explore a historic private library and museum featuring rare books, manuscripts, artwork, and beautifully decorated reading rooms.",
            estimatedCostMin: 0,
            estimatedCostMax: 25,
            priceType: "perPerson",
            estimatedDuration: 120,
            location: "225 Madison Avenue, New York, NY 10016",
            openingHours: "Tue-Thu 10:30 AM-5 PM; Fri 10:30 AM-8 PM; Sat-Sun 10:30 AM-5 PM; closed Monday",
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
            openingHours: "Seasonal park hours vary",
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
            openingHours: "Pedestrian access generally available daily",
            website: "https://www.nyc.gov/"
        },
        {
            // Activity 3: Food & Dining
            name: "Smorgasburg Outdoor Food Market",
            category: "Food & Dining",
            description: "Explore a seasonal outdoor food market featuring street food, international cuisines, local vendors, and creative dishes.",
            estimatedCostMin: 0,
            estimatedCostMax: null,
            priceType: "perPerson",
            estimatedDuration: 120,
            location: "Williamsburg, Brooklyn, New York, NY",
            openingHours: "Seasonal; verify market location and schedule",
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
            openingHours: "Ferry service operates daily; schedules vary",
            website: "https://siferry.com/"
        },
        {
            // Activity 5: Sports & Recreation
            name: "Governors Island Bike and Park Experience",
            category: "Sports & Recreation",
            description: "Explore a car-free island with scenic bike paths, parks, historic buildings, public art, and views of New York Harbor.",
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            estimatedDuration: 180,
            location: "Governors Island, New York, NY 10004",
            openingHours: "Island, ferry, and bicycle rental hours vary",
            website: "https://www.govisland.com/"
        }
    ],

   
    // NEW YORK CITY RESTAURANTS — RESEARCH CANDIDATES
    // TODO: Confirm restaurant is open and serves the assigned meal.
    // TODO: Replace null costs, TODO addresses, and unverified hours/URLs before seeding.
    // Per meal: 1 Budget, 2 Mid-Range, 1 High-End.

    breakfast: [
        {
            name: "Ess-a-Bagel",
            category: "Food & Dining",
            description: "Bagels restaurant candidate for breakfast in the New York City area; TODO: confirm menu and operating hours.",
            mealTypes: ["Breakfast"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Budget",
            address: "TODO: Verify street address in New York City area",
            cuisine: "Bagels",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "Clinton St. Baking Company",
            category: "Food & Dining",
            description: "American pancakes and breakfast restaurant candidate for breakfast in the New York City area; TODO: confirm menu and operating hours.",
            mealTypes: ["Breakfast"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Mid-Range",
            address: "TODO: Verify street address in New York City area",
            cuisine: "American pancakes and breakfast",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "Balthazar",
            category: "Food & Dining",
            description: "French brasserie restaurant candidate for breakfast in the New York City area; TODO: confirm menu and operating hours.",
            mealTypes: ["Breakfast"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Mid-Range",
            address: "TODO: Verify street address in New York City area",
            cuisine: "French brasserie",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "The Palm Court at The Plaza",
            category: "Food & Dining",
            description: "Luxury hotel breakfast restaurant candidate for breakfast in the New York City area; TODO: confirm menu and operating hours.",
            mealTypes: ["Breakfast"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "High-End",
            address: "TODO: Verify street address in New York City area",
            cuisine: "Luxury hotel breakfast",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
    ],

    lunch: [
        {
            name: "Los Tacos No. 1",
            category: "Food & Dining",
            description: "Mexican tacos restaurant candidate for lunch in the New York City area; TODO: confirm menu and operating hours.",
            mealTypes: ["Lunch"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Budget",
            address: "TODO: Verify street address in New York City area",
            cuisine: "Mexican tacos",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "Katz’s Delicatessen",
            category: "Food & Dining",
            description: "Jewish deli restaurant candidate for lunch in the New York City area; TODO: confirm menu and operating hours.",
            mealTypes: ["Lunch"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Mid-Range",
            address: "TODO: Verify street address in New York City area",
            cuisine: "Jewish deli",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "Xi’an Famous Foods",
            category: "Food & Dining",
            description: "Chinese noodles restaurant candidate for lunch in the New York City area; TODO: confirm menu and operating hours.",
            mealTypes: ["Lunch"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Mid-Range",
            address: "TODO: Verify street address in New York City area",
            cuisine: "Chinese noodles",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "The Modern",
            category: "Food & Dining",
            description: "Upscale contemporary American restaurant candidate for lunch in the New York City area; TODO: confirm menu and operating hours.",
            mealTypes: ["Lunch"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "High-End",
            address: "TODO: Verify street address in New York City area",
            cuisine: "Upscale contemporary American",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
    ],

    dinner: [
        {
            name: "Joe’s Pizza",
            category: "Food & Dining",
            description: "New York pizza restaurant candidate for dinner in the New York City area; TODO: confirm menu and operating hours.",
            mealTypes: ["Dinner"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Budget",
            address: "TODO: Verify street address in New York City area",
            cuisine: "New York pizza",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "L’Artusi",
            category: "Food & Dining",
            description: "Italian restaurant candidate for dinner in the New York City area; TODO: confirm menu and operating hours.",
            mealTypes: ["Dinner"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Mid-Range",
            address: "TODO: Verify street address in New York City area",
            cuisine: "Italian",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "Gramercy Tavern",
            category: "Food & Dining",
            description: "Contemporary American restaurant candidate for dinner in the New York City area; TODO: confirm menu and operating hours.",
            mealTypes: ["Dinner"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Mid-Range",
            address: "TODO: Verify street address in New York City area",
            cuisine: "Contemporary American",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "Le Bernardin",
            category: "Food & Dining",
            description: "French seafood fine dining restaurant candidate for dinner in the New York City area; TODO: confirm menu and operating hours.",
            mealTypes: ["Dinner"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "High-End",
            address: "TODO: Verify street address in New York City area",
            cuisine: "French seafood fine dining",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
    ],

   
    // ==========================================
    // LOCAL TRANSPORTATION
    // ==========================================

    transportation: [
        "Subway",
        "Uber/Lyft",
        "Rental Car",
        "Walking",
        "Taxi",
        "MTA Buses"
    ],

    // ==========================================
    // NEW YORK CITY — DETAILED TRANSPORTATION OPTIONS
    // ==========================================

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
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perRide",
            website: "https://www.uber.com/"
        },
        {
            name: "Rental Car",
            type: "Car Rental",
            description: "Rental vehicles available at John F. Kennedy International Airport, LaGuardia Airport, Newark Liberty International Airport, and locations throughout New York City. Useful primarily for trips outside the city, including surrounding towns and regional attractions. Renting a car is usually unnecessary for sightseeing in Manhattan because subway and bus coverage is extensive. Daily rental rates vary by travel dates, vehicle, company, and driver age. Fuel, tolls, congestion charges, insurance, and expensive city parking are not included.",
            estimatedCostMin: null,
            estimatedCostMax: null,
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
            estimatedCostMin: null,
            estimatedCostMax: null,
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



    // ==========================================
    // NEW YORK CITY — THREE REAL HOTELS
    // Budget, Mid-Range, and High-End
    // ==========================================
    // TODO: Verify nightly room rates, taxes,
    // availability, and additional fees for travel dates.

    hotels: [
        {
            name: "Pod 39 Hotel",
            category: "Budget",
            description: "Budget-friendly boutique hotel in Manhattan's Murray Hill neighborhood near Grand Central Terminal. Features compact private guest rooms with efficient layouts, rainfall showers, air conditioning, and flat-screen televisions. Guests can enjoy a rooftop lounge, social spaces, on-site dining, and walking tours. The hotel is conveniently located near subway connections for exploring Manhattan. A mandatory facility fee of $29.84 including tax is charged per room per night. Minimum check-in age is 18.",
            address: "145 East 39th Street, New York, NY 10016, USA",
            estimatedNightlyCostMin: null,
            estimatedNightlyCostMax: null,
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
            // TODO: Verify nightly room prices and taxes.
            // Mandatory facility fee: $29.84 including tax
            // per room, per night.
            // Check whether the booking total already
            // includes this facility fee.
            // Discounted off-site ICON Parking is available.
            // Validate the parking rate with the hotel.
            // Small dogs under 25 lbs: $25 per night.
            // Minimum check-in age: 18.
        },
        {
            name: "Hilton Garden Inn New York/Times Square Central",
            category: "Mid-Range",
            description: "Modern Midtown Manhattan hotel located on West 42nd Street near Times Square, Broadway theaters, Bryant Park, and public transportation. Features comfortable guest rooms, complimentary Wi-Fi, fitness center, an on-site restaurant, meeting facilities, and convenient access to major sightseeing destinations. Breakfast is available for an additional charge. The hotel has no on-site self-parking or valet service, but nearby public parking garages are available. A mandatory daily destination charge applies.",
            address: "136 West 42nd Street, New York, NY 10036, USA",
            estimatedNightlyCostMin: null,
            estimatedNightlyCostMax: null,
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
            // TODO: Verify nightly rates and taxes.
            // A mandatory daily destination charge applies.
            // Confirm its amount and whether it is included
            // in the displayed booking total.
            // No hotel self-parking or valet parking.
            // Nearby garages charge separately.
            // Pet fee: $75 nonrefundable.
            // Breakfast costs extra.
        },
        {
            name: "The Langham, New York, Fifth Avenue",
            category: "High-End",
            description: "Luxury five-star hotel on Fifth Avenue in Midtown Manhattan near the Empire State Building, Bryant Park, shopping, and major transportation hubs. Features elegant spacious guest rooms and suites, luxury furnishings, premium bathrooms, upscale dining, concierge services, fitness facilities, and personalized guest service. The hotel offers a complimentary local house-car service during specified hours, subject to availability. Valet parking costs $90 per day with no in-and-out privileges. Overnight self-parking is not available.",
            address: "400 Fifth Avenue, New York, NY 10018, USA",
            estimatedNightlyCostMin: null,
            estimatedNightlyCostMax: null,
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
            // TODO: Verify nightly room rates and taxes.
            // Valet parking: $90 per day.
            // No overnight self-parking.
            // Dog fee: $250 per stay when applicable.
            // Check applicable deposit requirements.
            // House-car service is subject to availability,
            // operating schedule, and geographic limits.
        }
    ],


    // ==========================================
    // NEW YORK CITY — TWO REAL AIRBNB LISTINGS
    // ==========================================
    // Both listings are PRIVATE ROOMS in host-occupied homes.
    // TODO: Verify guest capacity, prices, fees, availability,
    // and registration status before finalizing.

    vacationRentals: [
        {
            name: "Brooklyn Historic Brownstone Hideaway",
            category: "Vacation Rental",
            propertyType: "Private room in historic brownstone",
            description: "Cozy private guest room inside an 1892 Brooklyn brownstone in Clinton Hill near Fort Greene Park. Features a dedicated bathroom, custom oak closets, kitchenette area with refrigerator, and workspace. Guests have a separate access route to the room while sharing the residence with the on-site hosts. Nearby subway stations provide access to Manhattan and Brooklyn attractions. NYC registration: OSE-STRREG-0001058.",
            address: "Clinton Hill / Fort Greene, Brooklyn, New York, NY, USA — exact address provided after booking",
            estimatedNightlyCostMin: null,
            estimatedNightlyCostMax: null,
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
            // TODO: maxGuests is set conservatively to 1.
            // Confirm the actual maximum occupancy on Airbnb.
            // Free street parking is not a reserved space.
            // Host lives in the same residence.
        },
        {
            name: "Manhattan Empire Skyline Art Loft",
            category: "Vacation Rental",
            propertyType: "Private room in shared loft",
            description: "Creative loft-style home in Manhattan's Flatiron and Gramercy area featuring a sunlit private bedroom, exposed brick, queen bed, and access to a shared kitchen and rooftop with Empire State Building views. Located near Madison Square Park, restaurants, shops, and subway stations. Guests share the home with the host and a small Miniature Schnauzer. NYC registration: OSE-STRREG-0002284.",
            address: "Flatiron / Gramercy, Manhattan, New York, NY, USA — exact address provided after booking",
            estimatedNightlyCostMin: null,
            estimatedNightlyCostMax: null,
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
            // TODO: maxGuests is set conservatively to 1.
            // Confirm the actual maximum occupancy on Airbnb.
            // Bedroom assignment can vary by reservation.
            // Host and dog live on-site.
        }
    ]

    
},



// Orlanda #12

{
    // ==========================================
    // DESTINATION 12: ORLANDO, FLORIDA
    // ==========================================

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
                    estimatedCost: null
                },
                {
                    name: "Disney Springs",
                    category: "Shopping",
                    estimatedCost: 0
                },
                {
                    name: "SEA LIFE Orlando Aquarium",
                    category: "Family Friendly",
                    estimatedCost: null
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
                    estimatedCostMin: null,
                    estimatedCostMax: null,
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
                    estimatedCostMin: null,
                    estimatedCostMax: null,
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
                    estimatedCostMin: null,
                    estimatedCostMax: null,
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
                    estimatedCostMax: null,
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
                    estimatedCostMax: null,
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
                    estimatedCostMin: null,
                    estimatedCostMax: null,
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
                    estimatedCostMin: null,
                    estimatedCostMax: null,
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
                    estimatedCostMax: null,
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
                    estimatedCostMin: null,
                    estimatedCostMax: null,
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
                    estimatedCostMin: null,
                    estimatedCostMax: null,
                    priceType: "perPerson",
                    estimatedDuration: 60,
                    location: "312 E Morse Boulevard, Winter Park, FL 32789",
                    openingHours: "Tours depend on weather and operating schedule",
                    website: "https://www.scenicboattours.com/"
                }
    ],




    // ORLANDO RESTAURANTS — RESEARCH CANDIDATES
    // TODO: Confirm restaurant is open and serves the assigned meal.
    // TODO: Replace null costs, TODO addresses, and unverified hours/URLs before seeding.
    // Per meal: 1 Budget, 2 Mid-Range, 1 High-End.

    breakfast: [
        {
            name: "Keke’s Breakfast Cafe",
            category: "Food & Dining",
            description: "American breakfast restaurant candidate for breakfast in the Orlando area; TODO: confirm menu and operating hours.",
            mealTypes: ["Breakfast"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Budget",
            address: "TODO: Verify street address in Orlando area",
            cuisine: "American breakfast",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "Se7en Bites",
            category: "Food & Dining",
            description: "Southern bakery and brunch restaurant candidate for breakfast in the Orlando area; TODO: confirm menu and operating hours.",
            mealTypes: ["Breakfast"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Mid-Range",
            address: "TODO: Verify street address in Orlando area",
            cuisine: "Southern bakery and brunch",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "Hash House A Go Go",
            category: "Food & Dining",
            description: "American comfort breakfast restaurant candidate for breakfast in the Orlando area; TODO: confirm menu and operating hours.",
            mealTypes: ["Breakfast"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Mid-Range",
            address: "TODO: Verify street address in Orlando area",
            cuisine: "American comfort breakfast",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "The Boheme Sunday jazz brunch",
            category: "Food & Dining",
            description: "Upscale hotel brunch restaurant candidate for breakfast in the Orlando area; TODO: confirm menu and operating hours.",
            mealTypes: ["Breakfast"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "High-End",
            address: "TODO: Verify street address in Orlando area",
            cuisine: "Upscale hotel brunch",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
    ],

    lunch: [
        {
            name: "Black Rooster Taqueria",
            category: "Food & Dining",
            description: "Mexican tacos restaurant candidate for lunch in the Orlando area; TODO: confirm menu and operating hours.",
            mealTypes: ["Lunch"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Budget",
            address: "TODO: Verify street address in Orlando area",
            cuisine: "Mexican tacos",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "Hawkers Asian Street Food",
            category: "Food & Dining",
            description: "Asian street food restaurant candidate for lunch in the Orlando area; TODO: confirm menu and operating hours.",
            mealTypes: ["Lunch"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Mid-Range",
            address: "TODO: Verify street address in Orlando area",
            cuisine: "Asian street food",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "The Ravenous Pig",
            category: "Food & Dining",
            description: "American gastropub restaurant candidate for lunch in the Orlando area; TODO: confirm menu and operating hours.",
            mealTypes: ["Lunch"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Mid-Range",
            address: "TODO: Verify street address in Orlando area",
            cuisine: "American gastropub",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "The Venetian Chop House",
            category: "Food & Dining",
            description: "Fine dining (verify lunch service) restaurant candidate for lunch in the Orlando area; TODO: confirm menu and operating hours.",
            mealTypes: ["Lunch"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "High-End",
            address: "TODO: Verify street address in Orlando area",
            cuisine: "Fine dining (verify lunch service)",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
    ],

    dinner: [
        {
            name: "Chicken Fire",
            category: "Food & Dining",
            description: "Nashville-style hot chicken restaurant candidate for dinner in the Orlando area; TODO: confirm menu and operating hours.",
            mealTypes: ["Dinner"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Budget",
            address: "TODO: Verify street address in Orlando area",
            cuisine: "Nashville-style hot chicken",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "Domu",
            category: "Food & Dining",
            description: "Japanese ramen restaurant candidate for dinner in the Orlando area; TODO: confirm menu and operating hours.",
            mealTypes: ["Dinner"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Mid-Range",
            address: "TODO: Verify street address in Orlando area",
            cuisine: "Japanese ramen",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "Prato",
            category: "Food & Dining",
            description: "Italian restaurant candidate for dinner in the Orlando area; TODO: confirm menu and operating hours.",
            mealTypes: ["Dinner"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Mid-Range",
            address: "TODO: Verify street address in Orlando area",
            cuisine: "Italian",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "Victoria & Albert’s",
            category: "Food & Dining",
            description: "Luxury tasting menu restaurant candidate for dinner in the Orlando area; TODO: confirm menu and operating hours.",
            mealTypes: ["Dinner"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "High-End",
            address: "TODO: Verify street address in Orlando area",
            cuisine: "Luxury tasting menu",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
    ],






    transportation: [
        "Rental Car",
        "Uber/Lyft",
        "Hotel Shuttles",
        "Theme Park Transportation",
        "LYNX Buses"
    ],

    // ==========================================
    // ORLANDO — DETAILED TRANSPORTATION OPTIONS
    // ==========================================

    transportationOptions: [
        {
            name: "Rental Car",
            type: "Car Rental",
            description: "Rental vehicles are available at Orlando International Airport, Orlando Sanford International Airport, and locations throughout Central Florida. Useful for visiting Walt Disney World, Universal Orlando, SeaWorld, shopping centers, and attractions spread throughout the region. Rental rates depend on dates, vehicle type, driver age, and rental company. Gas, toll roads, theme park parking, hotel parking, and optional insurance are not included.",
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perDay",
            website: "https://www.enterprise.com/"
        },
        {
            name: "Uber/Lyft",
            type: "Rideshare",
            description: "App-based rideshare transportation available throughout Orlando, International Drive, Lake Buena Vista, and surrounding areas. Convenient for airport transfers, hotel transportation, restaurants, shopping, and theme parks. Fares depend on distance, traffic, demand, pickup location, and time of day. Airport charges, tolls, and surge pricing may apply. Major theme parks may use designated rideshare pickup and drop-off locations.",
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perRide",
            website: "https://www.uber.com/"
        },
        {
            name: "Hotel Shuttles",
            type: "Hotel Shuttle",
            description: "Scheduled shuttle transportation offered by select Orlando hotels to nearby theme parks and attractions. Some hotels provide complimentary services for registered guests, while others use paid transportation providers. Rosen Inn International offers complimentary scheduled Universal Orlando shuttles with reservations required and limited seating. Its Walt Disney World shuttle option is provided by a third party for a fee. Shuttle schedules, accessibility, destinations, and charges vary by hotel.",
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perRide",
            website: "https://www.roseninn7600.com/transportation"
            // Cost varies by hotel and destination.
            // Free for eligible guests on some routes.
            // Do not treat all Orlando hotel shuttles
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
            // Zero cost applies only to eligible
            // complimentary resort transportation.
            // Not an airport or citywide transit service.
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


    // TODO: Add three researched hotels

    // ==========================================
    // ORLANDO — THREE REAL HOTELS
    // Budget, Mid-Range, and High-End
    // ==========================================
    // TODO: Verify nightly room rates, taxes,
    // availability, and additional fees.

    hotels: [
        {
            name: "Rosen Inn International",
            category: "Budget",
            description: "Budget-friendly family hotel on Orlando's International Drive near Universal Orlando Resort, ICON Park, and popular restaurants and shopping. Features comfortable guest rooms, two seasonally heated outdoor swimming pools, a children's pool, restaurants, arcade, fitness center, and free Wi-Fi. Complimentary scheduled shuttle service is available to Universal Orlando and select other theme parks with advance reservations. Gated self-parking costs $10 per night, capped at $50 per car for stays of five or more nights. No resort fee is charged.",
            address: "7600 International Drive, Orlando, FL 32819, USA",
            estimatedNightlyCostMin: null,
            estimatedNightlyCostMax: null,
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
            // TODO: Verify nightly room rates and taxes.
            // Parking: $10 per night, tax included,
            // capped at $50 for five or more nights.
            // No mandatory resort fee.
            // Shuttle reservations are required.
            // Disney shuttle transportation costs extra.
            // Pet fees and other optional charges may apply.
        },
        {
            name: "Hampton Inn Orlando International Drive/Convention Center",
            category: "Mid-Range",
            description: "Comfortable hotel in Orlando's International Drive and convention center area, near ICON Park, SeaWorld, Universal Orlando, and local restaurants. Offers complimentary hot breakfast, free Wi-Fi, an outdoor swimming pool, fitness center, connecting-room options, and pet-friendly accommodations. Convenient for convention visitors and families exploring Orlando attractions. On-site self-parking costs $10 per night plus tax. Theme park shuttle options may be available for an additional fee; there is no airport shuttle.",
            address: "8900 Universal Boulevard, Orlando, FL 32819, USA",
            estimatedNightlyCostMin: null,
            estimatedNightlyCostMax: null,
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
            // TODO: Verify nightly room prices and taxes.
            // Self-parking: $10 per night plus tax.
            // No hotel valet parking.
            // Theme park shuttles may cost extra.
            // No airport shuttle.
            // Pet fees apply when traveling with pets.
        },
        {
            name: "Waldorf Astoria Orlando",
            category: "High-End",
            description: "Luxury resort in the Bonnet Creek area near Walt Disney World, offering elegant rooms and suites, upscale dining, outdoor swimming pools, full-service spa, fitness center, and an 18-hole golf course. Guests can enjoy complimentary scheduled transportation to Disney theme parks and Disney Springs, plus access to select amenities at neighboring Signia by Hilton Orlando Bonnet Creek. The resort has a mandatory $50 daily resort charge plus tax. Overnight valet parking costs $60 plus tax. Minimum age for booking and checking in is 21.",
            address: "14200 Bonnet Creek Resort Lane, Orlando, FL 32821, USA",
            estimatedNightlyCostMin: null,
            estimatedNightlyCostMax: null,
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
            // TODO: Verify room rates and taxes.
            // Mandatory resort charge: $50 plus tax
            // per room, per night.
            // Valet parking: $60 plus tax per night.
            // No hotel self-parking.
            // Minimum check-in and booking age: 21.
            // Spa, golf rounds, and dining cost extra.
            // Confirm whether the resort charge is already
            // included in the displayed booking total.
        }
    ],


   
    // ==========================================
    // ORLANDO — TWO REAL AIRBNB LISTINGS
    // ==========================================
    // TODO: Verify nightly prices, cleaning fees,
    // minimum stays, and availability for travel dates.

    vacationRentals: [
        {
            name: "Orlando Treasure Cove Pool Villa",
            category: "Vacation Rental",
            propertyType: "Entire resort townhouse",
            description: "Four-bedroom vacation townhouse at Villatel Orlando Resort near International Drive, Universal Orlando, and Epic Universe. Features three king bedrooms, a treasure-hunt-themed kids' bedroom with bunk beds and a slide, a private screened swimming pool, a covered patio, and a fully equipped kitchen. Resort amenities include a water park, fitness center, sports courts, playground, and scheduled theme park shuttles.",
            address: "Villatel Orlando Resort, International Drive, Orlando, FL, USA — exact unit address provided after booking",
            estimatedNightlyCostMin: null,
            estimatedNightlyCostMax: null,
            priceType: "perNight",
            maxGuests: 10,
            bedrooms: 4,
            bathrooms: 3,
            amenities: [
                "Wi-Fi",
                "Full kitchen",
                "Private screened swimming pool",
                "Covered patio",
                "Outdoor dining area",
                "Outdoor grill",
                "Pool loungers",
                "Three king bedrooms",
                "Themed treasure-hunt kids bedroom",
                "Bunk beds with slide",
                "Smart TV",
                "Washer and dryer",
                "Dedicated workspace",
                "Air conditioning",
                "Resort water park access",
                "Resort fitness center",
                "Basketball and pickleball courts",
                "Children's playground",
                "Scheduled theme park shuttle"
            ],
            cleaningFee: null,
            serviceFee: null,
            parkingCost: null,
            website: "https://www.airbnb.com/rooms/1289354050320398567"
            // TODO: Daily resort parking fees apply.
            // TODO: Optional pool heating costs extra.
            // TODO: Shuttle reservations are required.
        },
        {
            name: "Orlando Enchanted Treetop Hideaway",
            category: "Vacation Rental",
            propertyType: "Treehouse",
            description: "Unique handcrafted treehouse in Orlando's Thornton Park neighborhood near Lake Eola and downtown attractions. Features a cozy elevated sleeping loft, hanging swing chair, living area, small wood-burning stove, television, mini refrigerator, and sink. Includes exclusive use of a private lower-level open-air lounge and access to shared outdoor spaces with a koi pond, fire pit, outdoor dining, and garden seating.",
            address: "Thornton Park, Orlando, FL, USA — exact street address provided after booking",
            estimatedNightlyCostMin: null,
            estimatedNightlyCostMax: null,
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
            // TODO: Treehouse requires climbing ladders.
            // TODO: Not suitable for some mobility limitations.
            // TODO: Confirm bathroom and cooking facilities.
        }
    ]


},


// San Francisco #13 

{
    // ==========================================
    // DESTINATION 13: SAN FRANCISCO, CALIFORNIA
    // ==========================================
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
                    estimatedCost: null
                },
                {
                    // Replaces closed San Francisco Centre
                    name: "San Francisco Japantown",
                    category: "Shopping",
                    estimatedCost: 0
                },
                {
                    name: "Ferry Building Marketplace",
                    category: "Food & Dining",
                    estimatedCost: 0
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
            openingHours: "Verify park access hours",
            website: "https://presidio.gov/"
        },
        {
            // Activity 2: Food & Dining
            name: "Ferry Building Marketplace Dining",
            category: "Food & Dining",
            description: "Browse restaurants, cafes, artisan food stalls, specialty vendors, and local products inside a historic waterfront landmark.",
            estimatedCostMin: 0,
            estimatedCostMax: null,
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
            estimatedCostMax: null,
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
            estimatedCostMax: null,
            priceType: "perPerson",
            estimatedDuration: 120,
            location: "Golden Gate Park, San Francisco, CA 94122",
            openingHours: "Verify cycling access and rental hours",
            website: "https://sfrecpark.org/"
        },
        {
            // Activity 5: History & Culture
            name: "Alcatraz Island Historical Tour",
            category: "History & Culture",
            description: "Take a ferry to Alcatraz Island to explore its former federal prison, historic buildings, and views of San Francisco Bay.",
            estimatedCostMin: null,
            estimatedCostMax: null,
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
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            estimatedDuration: 180,
            location: "Pier 15, San Francisco, CA 94111",
            openingHours: "Verify current museum hours",
            website: "https://www.exploratorium.edu/"
        },
        {
            // Activity 2: Museums & Art
            name: "de Young Museum Visit",
            category: "Museums & Art",
            description: "Explore art collections, international exhibitions, textiles, paintings, sculpture, and other creative works.",
            estimatedCostMin: null,
            estimatedCostMax: null,
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
            openingHours: "Verify current museum hours",
            website: "https://www.cablecarmuseum.org/"
        },
        {
            // Activity 4: Family Friendly
            name: "Aquarium of the Bay Visit",
            category: "Family Friendly",
            description: "Explore marine exhibits featuring sharks, rays, fish, and other aquatic wildlife from San Francisco Bay.",
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            estimatedDuration: 120,
            location: "Pier 39, San Francisco, CA 94133",
            openingHours: "Verify aquarium hours and operations",
            website: "https://www.aquariumofthebay.org/"
        },
        {
            // Activity 5: Food & Dining
            name: "Japantown Japanese Food Experience",
            category: "Food & Dining",
            description: "Explore Japanese restaurants, bakeries, tea shops, and specialty food stores within San Francisco's historic Japantown.",
            estimatedCostMin: 0,
            estimatedCostMax: null,
            priceType: "perPerson",
            estimatedDuration: 120,
            location: "Post Street, San Francisco, CA 94115",
            openingHours: "Varies by business",
            website: "https://www.sftravel.com/"
        }
    ],


    // SAN FRANCISCO RESTAURANTS — RESEARCH CANDIDATES
    // TODO: Confirm restaurant is open and serves the assigned meal.
    // TODO: Replace null costs, TODO addresses, and unverified hours/URLs before seeding.
    // Per meal: 1 Budget, 2 Mid-Range, 1 High-End.
    breakfast: [
        {
            name: "Pinecrest Diner",
            category: "Food & Dining",
            description: "American diner restaurant candidate for breakfast in the San Francisco area; TODO: confirm menu and operating hours.",
            mealTypes: ["Breakfast"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Budget",
            address: "TODO: Verify street address in San Francisco area",
            cuisine: "American diner",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "Sweet Maple",
            category: "Food & Dining",
            description: "American brunch restaurant candidate for breakfast in the San Francisco area; TODO: confirm menu and operating hours.",
            mealTypes: ["Breakfast"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Mid-Range",
            address: "TODO: Verify street address in San Francisco area",
            cuisine: "American brunch",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "Tartine Inner Sunset",
            category: "Food & Dining",
            description: "Bakery and cafe restaurant candidate for breakfast in the San Francisco area; TODO: confirm menu and operating hours.",
            mealTypes: ["Breakfast"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Mid-Range",
            address: "TODO: Verify street address in San Francisco area",
            cuisine: "Bakery and cafe",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "Garden Court at Palace Hotel",
            category: "Food & Dining",
            description: "Luxury hotel breakfast restaurant candidate for breakfast in the San Francisco area; TODO: confirm menu and operating hours.",
            mealTypes: ["Breakfast"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "High-End",
            address: "TODO: Verify street address in San Francisco area",
            cuisine: "Luxury hotel breakfast",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
    ],

    lunch: [
        {
            name: "La Taqueria",
            category: "Food & Dining",
            description: "Mexican burritos and tacos restaurant candidate for lunch in the San Francisco area; TODO: confirm menu and operating hours.",
            mealTypes: ["Lunch"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Budget",
            address: "TODO: Verify street address in San Francisco area",
            cuisine: "Mexican burritos and tacos",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "Swan Oyster Depot",
            category: "Food & Dining",
            description: "Seafood counter restaurant candidate for lunch in the San Francisco area; TODO: confirm menu and operating hours.",
            mealTypes: ["Lunch"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Mid-Range",
            address: "TODO: Verify street address in San Francisco area",
            cuisine: "Seafood counter",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "Sotto Mare",
            category: "Food & Dining",
            description: "Italian seafood restaurant candidate for lunch in the San Francisco area; TODO: confirm menu and operating hours.",
            mealTypes: ["Lunch"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Mid-Range",
            address: "TODO: Verify street address in San Francisco area",
            cuisine: "Italian seafood",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "Kokkari Estiatorio",
            category: "Food & Dining",
            description: "Upscale Greek restaurant candidate for lunch in the San Francisco area; TODO: confirm menu and operating hours.",
            mealTypes: ["Lunch"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "High-End",
            address: "TODO: Verify street address in San Francisco area",
            cuisine: "Upscale Greek",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
    ],

    dinner: [
        {
            name: "Golden Boy Pizza",
            category: "Food & Dining",
            description: "Pizza restaurant candidate for dinner in the San Francisco area; TODO: confirm menu and operating hours.",
            mealTypes: ["Dinner"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Budget",
            address: "TODO: Verify street address in San Francisco area",
            cuisine: "Pizza",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "Foreign Cinema",
            category: "Food & Dining",
            description: "Californian and Mediterranean restaurant candidate for dinner in the San Francisco area; TODO: confirm menu and operating hours.",
            mealTypes: ["Dinner"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Mid-Range",
            address: "TODO: Verify street address in San Francisco area",
            cuisine: "Californian and Mediterranean",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "State Bird Provisions",
            category: "Food & Dining",
            description: "Innovative American small plates restaurant candidate for dinner in the San Francisco area; TODO: confirm menu and operating hours.",
            mealTypes: ["Dinner"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Mid-Range",
            address: "TODO: Verify street address in San Francisco area",
            cuisine: "Innovative American small plates",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "Atelier Crenn",
            category: "Food & Dining",
            description: "Luxury French fine dining restaurant candidate for dinner in the San Francisco area; TODO: confirm menu and operating hours.",
            mealTypes: ["Dinner"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "High-End",
            address: "TODO: Verify street address in San Francisco area",
            cuisine: "Luxury French fine dining",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },


    ],


    // ==========================================
    // LOCAL TRANSPORTATION
    // ==========================================
    transportation: [
        "Muni Buses",
        "BART",
        "Uber/Lyft",
        "Cable Car",
        "Walking"
    ],

   
    // ==========================================
    // SAN FRANCISCO — DETAILED TRANSPORTATION
    // ==========================================
    // Prices reflect published November 2026 fares.
    // Muni and cable car fares change January 4, 2027.

    transportationOptions: [
        {
            name: "Muni Buses",
            type: "Public Transportation",
            description: "San Francisco Municipal Transportation Agency buses operate throughout the city, connecting Downtown, Union Square, Golden Gate Park, the Mission District, Chinatown, Fisherman's Wharf, and many neighborhoods. Standard adult fare is $2.85 using Clipper or contactless payment, or $3 when paying cash. The fare includes 120 minutes of eligible travel and transfers on regular Muni services, including Muni Metro light rail. Cable cars require separate fares. On January 4, 2027, the electronic adult fare increases to $3.",
            estimatedCostMin: 2.85,
            estimatedCostMax: 3.00,
            priceType: "per2Hours",
            website: "https://www.sfmta.com/getting-around/muni/fares"
            // TODO: Select fare based on travel date.
            // January 4, 2027: adult fare becomes $3.
            // Cable cars are excluded from standard fares.
        },
        {
            name: "BART",
            type: "Public Transportation",
            description: "Bay Area Rapid Transit regional rail connects San Francisco with Oakland, Berkeley, San Francisco International Airport, Oakland International Airport via the airport connector, and other Bay Area communities. Convenient for airport transfers and regional trips beyond the Muni network. Fares vary by origin, destination, and travel date rather than using a fixed citywide price. Riders can pay using Clipper or supported contactless bank cards. BART and Muni are separate transit systems with different fare structures.",
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perRide",
            website: "https://www.bart.gov/tickets/calculator"
            // TODO: Calculate BART price by station pair.
            // Do not use a flat price for every BART trip.
            // Airport trips have different fare amounts.
        },
        {
            name: "Uber/Lyft",
            type: "Rideshare",
            description: "App-based rideshare transportation available throughout San Francisco and the surrounding Bay Area. Convenient for airport transfers, hotels, restaurants, nightlife, sightseeing, and attractions that are difficult to reach by public transportation. Prices vary depending on distance, traffic, demand, pickup location, vehicle type, and time of day. Airport pickup charges, tolls, and surge pricing may apply.",
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perRide",
            website: "https://www.uber.com/"
        },
        {
            name: "Cable Car",
            type: "Cable Car",
            description: "San Francisco's historic cable car system serves popular sightseeing routes between Powell Street, Nob Hill, Chinatown, Fisherman's Wharf, and other central attractions. The current single-ride adult fare is $9 and does not include transfers between cable car lines. On January 4, 2027, the single-ride fare increases to $12. A new $18 Cable Car Plus day pass will provide unlimited cable car and eligible Muni travel. Cable cars are separate from regular Muni single-ride tickets.",
            estimatedCostMin: 9,
            estimatedCostMax: 9,
            priceType: "perRide",
            website: "https://www.sfmta.com/fares/cable-car-single-ride"
            // TODO: January 4, 2027 fare becomes $12.
            // Single-ride tickets do not include transfers.
            // Cable Car Plus day pass begins January 2027.
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



    // ==========================================
    // SAN FRANCISCO — THREE REAL HOTELS
    // Budget, Mid-Range, and High-End
    // ==========================================
    // TODO: Verify nightly rates, taxes, availability,
    // parking prices, and additional fees.

    hotels: [
        {
            name: "HI San Francisco Downtown Hostel",
            category: "Budget",
            description: "Budget-friendly hostel in Downtown San Francisco near Union Square, Powell Street, and public transportation. Offers renovated shared dormitory rooms and private rooms, complimentary Wi-Fi, a shared guest kitchen, lounge areas, laundry facilities, and organized activities. Convenient for visitors who want to explore San Francisco without renting a car. Discounted parking passes for a nearby garage are available through the hostel, but rates vary. Shared dorm beds and private rooms have different prices.",
            address: "312 Mason Street, San Francisco, CA 94102, USA",
            estimatedNightlyCostMin: null,
            estimatedNightlyCostMax: null,
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
            // TODO: Verify private-room and dorm-bed rates.
            // Compare private rooms with hotel room prices.
            // No dedicated on-site parking.
            // Discounted off-site garage passes are offered.
            // Confirm garage prices before budgeting.
            // Laundry machines may cost extra.
            // Confirm membership or booking-related fees.
        },
        {
            name: "Hampton Inn San Francisco Downtown/Convention Center",
            category: "Mid-Range",
            description: "Comfortable mid-range hotel in San Francisco's South of Market neighborhood near Moscone Center, Downtown San Francisco, and public transportation. Features complimentary hot breakfast, free Wi-Fi, fitness facilities, modern guest rooms, business-friendly amenities, and convenient access to shopping and sightseeing. Secured valet parking costs $65 per day with in-and-out privileges. The hotel does not offer self-parking or an airport shuttle.",
            address: "942 Mission Street, San Francisco, CA 94103, USA",
            estimatedNightlyCostMin: null,
            estimatedNightlyCostMax: null,
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
            // TODO: Verify nightly room rates and taxes.
            // Valet parking: $65 per day.
            // No hotel self-parking.
            // No airport shuttle.
            // Pet fee: $75 for stays of 1-4 nights
            // or $125 for stays of 5 or more nights.
            // Confirm any other mandatory property charges.
        },
        {
            name: "The Ritz-Carlton, San Francisco",
            category: "High-End",
            description: "Luxury five-star hotel in a historic 1909 Neoclassical landmark building in Nob Hill, near Chinatown and Union Square. Offers elegant guest rooms and suites, upscale dining, concierge services, fitness facilities, room service, and luxury guest amenities. Club Level accommodations provide access to a private lounge with food and beverage presentations when included in the booked room category. Valet parking is available for an additional daily charge. Cable car service is nearby for sightseeing.",
            address: "600 Stockton Street, San Francisco, CA 94108, USA",
            estimatedNightlyCostMin: null,
            estimatedNightlyCostMax: null,
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
            // TODO: Verify nightly room rates and taxes.
            // Published valet parking: $107 daily.
            // Confirm current rate before booking.
            // Club Lounge access is not included
            // with every room category.
            // Dog fee: $200 per stay when applicable.
            // Dining and optional services cost extra.
        }
    ],


   



    // ==========================================
    // SAN FRANCISCO — TWO REAL AIRBNB LISTINGS
    // ==========================================
    // TODO: Verify nightly prices, cleaning fees,
    // minimum stays, and availability for travel dates.
    // TODO: Confirm current SF short-term rental registration.

    vacationRentals: [
        {
            name: "San Francisco Redwood Treetop Retreat",
            category: "Vacation Rental",
            propertyType: "Entire house",
            description: "Unique two-level redwood-surrounded retreat in San Francisco's Glen Park neighborhood. Features two private suites, each with its own bedroom, bathroom, and full kitchen. Includes an indoor fireplace, original local artwork, outdoor decks, and a private six-person hot tub beneath towering redwood trees. Located near Glen Canyon Park, Glen Park Village, and the BART station. Airbnb registration shown: STR-0007704.",
            address: "Glen Park, San Francisco, CA, USA — exact street address provided after booking",
            estimatedNightlyCostMin: null,
            estimatedNightlyCostMax: null,
            priceType: "perNight",
            maxGuests: 4,
            bedrooms: 2,
            bathrooms: 2,
            amenities: [
                "Wi-Fi",
                "Two full kitchens",
                "Private hot tub",
                "Redwood forest surroundings",
                "Private outdoor decks",
                "Outdoor seating",
                "Indoor fireplace",
                "Original local artwork",
                "King bed",
                "Queen bed",
                "Dedicated workspace",
                "Self check-in",
                "Dog friendly",
                "Free street parking nearby"
            ],
            cleaningFee: null,
            serviceFee: null,
            parkingCost: null,
            website: "https://www.airbnb.com/rooms/1488077032787546478"
            // TODO: Verify pet fees and parking restrictions.
            // Property has stairs and may not be
            // suitable for guests with mobility limitations.
        },
        {
            name: "San Francisco Dolores Park Victorian Haven",
            category: "Vacation Rental",
            propertyType: "Entire Victorian apartment",
            description: "Renovated two-bedroom Victorian apartment next to Dolores Park in San Francisco. Features a bright living room, spacious kitchen with gas stove and stainless steel oven, dining area, piano, dedicated office, steam shower, and in-unit laundry. Guests can also use a shared backyard barbecue grill. Convenient to the Mission District, Castro, restaurants, and public transportation. Airbnb registration shown: STR-0003829.",
            address: "Mission Dolores, San Francisco, CA, USA — exact street address provided after booking",
            estimatedNightlyCostMin: null,
            estimatedNightlyCostMax: null,
            priceType: "perNight",
            maxGuests: 4,
            bedrooms: 2,
            bathrooms: 2,
            amenities: [
                "Fast Wi-Fi",
                "Full kitchen",
                "Gas stove",
                "Stainless steel oven",
                "Dining area",
                "Two queen beds",
                "Steam shower",
                "Piano",
                "Dedicated workspace",
                "Washer and dryer",
                "Exercise bike",
                "Rowing machine",
                "Shared backyard",
                "Shared barbecue grill",
                "Nearby public transportation"
            ],
            cleaningFee: null,
            serviceFee: null,
            parkingCost: null,
            website: "https://www.airbnb.com/rooms/35429693"
            // TODO: Parking is street-only.
            // Weekday residential parking restrictions apply.
            // Some upstairs rooms are restricted by the host.
        }
    ]

},

        

// Seatle #14 

{
    // ==========================================
    // DESTINATION 14: SEATTLE, WASHINGTON
    // ==========================================

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
                    estimatedCost: 0
                },
                {
                    name: "Space Needle",
                    category: "Sightseeing & Landmarks",
                    estimatedCost: null
                },
                {
                    name: "Discovery Park",
                    category: "Outdoor & Nature",
                    estimatedCost: null
                }
            ],


            event: [
                {
     
                    name: "Seattle International Film Festival",
                    category: "Festivals and Events",
                    description: "Experience Seattle's annual international film festival featuring independent movies, documentaries, short films, international cinema, film premieres, and discussions with filmmakers.",
                    estimatedCostMin: null,
                    estimatedCostMax: null,
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
                    estimatedCostMin: null,
                    estimatedCostMax: null,
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
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            estimatedDuration: 180,
            location: "9404 E Marginal Way S, Seattle, WA 98108",
            openingHours: "Verify museum hours",
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
            estimatedCostMin: null,
            estimatedCostMax: null,
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
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            estimatedDuration: 150,
            location: "200 2nd Avenue N, Seattle, WA 98109",
            openingHours: "Verify hours and available exhibitions",
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
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            estimatedDuration: 60,
            location: "1301 Alaskan Way, Seattle, WA 98101",
            openingHours: "Verify ride hours and weather closures",
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

   
    // SEATTLE RESTAURANTS — RESEARCH CANDIDATES
    // TODO: Confirm restaurant is open and serves the assigned meal.
    // TODO: Replace null costs, TODO addresses, and unverified hours/URLs before seeding.
    // Per meal: 1 Budget, 2 Mid-Range, 1 High-End.

    breakfast: [
        {
            name: "Biscuit Bitch",
            category: "Food & Dining",
            description: "Breakfast biscuits restaurant candidate for breakfast in the Seattle area; TODO: confirm menu and operating hours.",
            mealTypes: ["Breakfast"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Budget",
            address: "TODO: Verify street address in Seattle area",
            cuisine: "Breakfast biscuits",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "Portage Bay Cafe",
            category: "Food & Dining",
            description: "Pacific Northwest brunch restaurant candidate for breakfast in the Seattle area; TODO: confirm menu and operating hours.",
            mealTypes: ["Breakfast"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Mid-Range",
            address: "TODO: Verify street address in Seattle area",
            cuisine: "Pacific Northwest brunch",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "Tilikum Place Cafe",
            category: "Food & Dining",
            description: "European-inspired brunch restaurant candidate for breakfast in the Seattle area; TODO: confirm menu and operating hours.",
            mealTypes: ["Breakfast"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Mid-Range",
            address: "TODO: Verify street address in Seattle area",
            cuisine: "European-inspired brunch",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "The George at Fairmont Olympic",
            category: "Food & Dining",
            description: "Upscale hotel breakfast restaurant candidate for breakfast in the Seattle area; TODO: confirm menu and operating hours.",
            mealTypes: ["Breakfast"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "High-End",
            address: "TODO: Verify street address in Seattle area",
            cuisine: "Upscale hotel breakfast",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
    ],

    lunch: [
        {
            name: "Pike Place Chowder",
            category: "Food & Dining",
            description: "Seafood chowder restaurant candidate for lunch in the Seattle area; TODO: confirm menu and operating hours.",
            mealTypes: ["Lunch"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Budget",
            address: "TODO: Verify street address in Seattle area",
            cuisine: "Seafood chowder",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "Piroshky Piroshky",
            category: "Food & Dining",
            description: "Eastern European pastries restaurant candidate for lunch in the Seattle area; TODO: confirm menu and operating hours.",
            mealTypes: ["Lunch"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Mid-Range",
            address: "TODO: Verify street address in Seattle area",
            cuisine: "Eastern European pastries",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "Matt’s in the Market",
            category: "Food & Dining",
            description: "Pacific Northwest restaurant candidate for lunch in the Seattle area; TODO: confirm menu and operating hours.",
            mealTypes: ["Lunch"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Mid-Range",
            address: "TODO: Verify street address in Seattle area",
            cuisine: "Pacific Northwest",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "The Pink Door",
            category: "Food & Dining",
            description: "Upscale Italian restaurant candidate for lunch in the Seattle area; TODO: confirm menu and operating hours.",
            mealTypes: ["Lunch"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "High-End",
            address: "TODO: Verify street address in Seattle area",
            cuisine: "Upscale Italian",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
    ],

    dinner: [
        {
            name: "Dick’s Drive-In",
            category: "Food & Dining",
            description: "American burgers restaurant candidate for dinner in the Seattle area; TODO: confirm menu and operating hours.",
            mealTypes: ["Dinner"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Budget",
            address: "TODO: Verify street address in Seattle area",
            cuisine: "American burgers",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "Toulouse Petit",
            category: "Food & Dining",
            description: "Cajun and Creole restaurant candidate for dinner in the Seattle area; TODO: confirm menu and operating hours.",
            mealTypes: ["Dinner"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Mid-Range",
            address: "TODO: Verify street address in Seattle area",
            cuisine: "Cajun and Creole",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "The Walrus and the Carpenter",
            category: "Food & Dining",
            description: "Seafood and oysters restaurant candidate for dinner in the Seattle area; TODO: confirm menu and operating hours.",
            mealTypes: ["Dinner"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Mid-Range",
            address: "TODO: Verify street address in Seattle area",
            cuisine: "Seafood and oysters",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "Canlis",
            category: "Food & Dining",
            description: "Fine dining Pacific Northwest restaurant candidate for dinner in the Seattle area; TODO: confirm menu and operating hours.",
            mealTypes: ["Dinner"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "High-End",
            address: "TODO: Verify street address in Seattle area",
            cuisine: "Fine dining Pacific Northwest",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
    ],

    

   


    transportation: [
        "Link Light Rail",
        "King County Metro Buses",
        "Uber/Lyft",
        "Rental Car"
    ],

   
    // ==========================================
    // SEATTLE — DETAILED TRANSPORTATION OPTIONS
    // ==========================================

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
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perRide",
            website: "https://www.uber.com/"
        },
        {
            name: "Rental Car",
            type: "Car Rental",
            description: "Rental vehicles are available at Seattle-Tacoma International Airport and throughout the Seattle metropolitan area. Useful for exploring destinations outside central Seattle, including Mount Rainier National Park, Snoqualmie Falls, nearby hiking areas, and surrounding Washington communities. Rental rates vary by travel dates, vehicle type, driver age, and rental company. Fuel, tolls, parking, insurance, and optional fees are not included. Downtown Seattle parking can be expensive, and public transportation may be more practical for central attractions.",
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perDay",
            website: "https://www.enterprise.com/"
        }
    ],


    
    // ==========================================
    // SEATTLE — THREE REAL HOTELS
    // Budget, Mid-Range, and High-End
    // ==========================================
    // TODO: Verify nightly room rates, taxes,
    // additional fees, and availability.

    hotels: [
        {
            name: "Green Tortoise Hostel Seattle",
            category: "Budget",
            description: "Budget-friendly hostel in Downtown Seattle directly across from Pike Place Market and near the Seattle waterfront. Offers shared dormitory beds and limited private rooms, complimentary breakfast, free Wi-Fi, communal kitchen, laundry facilities, private single-occupancy shared bathrooms, and nightly social activities. The property is conveniently located near restaurants, shopping, transit connections, and Seattle attractions. No dedicated on-site parking is available, but discounted nearby garage parking is listed at $21 per 24 hours.",
            address: "105B Pike Street, Seattle, WA 98101, USA",
            estimatedNightlyCostMin: null,
            estimatedNightlyCostMax: null,
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
            // TODO: Verify dorm-bed and private-room rates.
            // Private rooms may have seasonal availability.
            // Discounted nearby garage: $21 per 24 hours
            // as currently advertised by the hostel.
            // No dedicated on-site parking.
            // Towel rental and padlocks may cost extra.
            // Compare private-room rates with hotel rooms.
        },
        {
            name: "Hampton Inn & Suites Seattle-Downtown",
            category: "Mid-Range",
            description: "Comfortable hotel near Seattle Center, the Space Needle, and Museum of Pop Culture. Features modern guest rooms and suites, complimentary hot breakfast, free Wi-Fi, fitness center, business center, and convenient access to Downtown Seattle attractions. The hotel is a short walk from Seattle Center Monorail connections and nearby restaurants. Secured on-site self-parking costs $40 per day with in-and-out privileges. No hotel valet parking or airport shuttle is offered.",
            address: "700 Fifth Avenue North, Seattle, WA 98109, USA",
            estimatedNightlyCostMin: null,
            estimatedNightlyCostMax: null,
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
            // TODO: Verify nightly room rates and taxes.
            // Self-parking: $40 per day.
            // No valet parking.
            // No airport shuttle.
            // Pet fees: $75 for stays of 1-4 nights
            // or $125 for stays of 5 or more nights.
            // Confirm any mandatory local assessments.
        },
        {
            name: "Four Seasons Hotel Seattle",
            category: "High-End",
            description: "Luxury five-star hotel in Downtown Seattle near Pike Place Market, Seattle Art Museum, and the waterfront. Features elegant guest rooms and suites, waterfront and Elliott Bay views in select accommodations, a heated outdoor infinity-edge swimming pool, hot tub, full-service spa, fitness center, upscale dining at Goldfinch Tavern, and personalized concierge services. The property also offers a complimentary local house car on a first-come, first-served basis within its service area. Overnight valet parking costs $75 per night.",
            address: "99 Union Street, Seattle, WA 98101, USA",
            estimatedNightlyCostMin: null,
            estimatedNightlyCostMax: null,
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
            // TODO: Verify nightly room prices and taxes.
            // Overnight valet parking: $75 per night.
            // Garage clearance restrictions apply.
            // Spa treatments and dining cost extra.
            // Seasonal poolside service varies by date.
            // House car is subject to availability.
            // Confirm other mandatory charges before booking.
        }
    ],


   
    // ==========================================
    // SEATTLE — TWO REAL AIRBNB LISTINGS
    // ==========================================
    // TODO: Verify nightly prices, cleaning fees,
    // minimum stays, parking, and availability.

    vacationRentals: [
        {
            name: "Seattle Capitol Hill Skyline Loft",
            category: "Vacation Rental",
            propertyType: "Entire loft",
            description: "Stylish loft in Seattle's Capitol Hill neighborhood featuring three sleeping areas, a spacious living room, a large dining table, and a private 600-square-foot outdoor deck with a fire pit, hammock, and seating. Includes a Sonos sound system, full kitchen, high-speed Wi-Fi, and one parking space. Located near Cal Anderson Park, restaurants, nightlife, and light rail. One sleeping area is an open loft rather than an enclosed bedroom.",
            address: "Capitol Hill, Seattle, WA, USA — exact street address provided after booking",
            estimatedNightlyCostMin: null,
            estimatedNightlyCostMax: null,
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
            // TODO: Confirm parking restrictions and
            // whether the deck is available year-round.
        },
        {
            name: "Seattle Lake Union Floating Hideaway",
            category: "Vacation Rental",
            propertyType: "Entire floating home",
            description: "Unique modern floating home directly on Seattle's Lake Union in the Wallingford and Fremont area. This waterfront studio features a convertible sofa bed, compact kitchen with induction burner and dishwasher, Wi-Fi, Smart TV, and a patio overlooking the water. Enjoy views of the lake, nearby kayaking opportunities, and walking access to Gas Works Park, Fremont shops, and neighborhood restaurants.",
            address: "Lake Union, Wallingford / Fremont, Seattle, WA, USA — exact location provided after booking",
            estimatedNightlyCostMin: null,
            estimatedNightlyCostMax: null,
            priceType: "perNight",
            maxGuests: 2,
            bedrooms: 0,
            bathrooms: 1,
            amenities: [
                "Wi-Fi",
                "Waterfront location",
                "Lake Union views",
                "Outdoor patio",
                "Convertible sofa bed",
                "Kitchen",
                "Induction cooktop",
                "Dishwasher",
                "Refrigerator",
                "Blender",
                "Smart TV with Netflix",
                "Shared laundry facilities",
                "Lake access",
                "Nearby kayaking opportunities"
            ],
            cleaningFee: null,
            serviceFee: null,
            parkingCost: null,
            website: "https://www.airbnb.com/rooms/15985493"
            // TODO: Confirm parking pass availability.
            // TODO: Confirm minimum stay and house rules.
            // This is a floating home, not a moving boat.
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
                    estimatedCostMax: null,
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
                    description: "Explore dinosaur fossils, gemstones, wildlife exhibits, ancient cultures, and natural history collections.",
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
                    estimatedCostMax: null,
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
                    description: "Explore interactive exhibits about espionage, intelligence history, spy equipment, and undercover operations.",
                    estimatedCostMin: null,
                    estimatedCostMax: null,
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
                    estimatedCostMax: null,
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
    // TODO: Confirm restaurant is open and serves the assigned meal.
    // TODO: Replace null costs, TODO addresses, and unverified hours/URLs before seeding.
    // Per meal: 1 Budget, 2 Mid-Range, 1 High-End.

    breakfast: [
        {
            name: "Lincoln Waffle Shop",
            category: "Food & Dining",
            description: "American diner restaurant candidate for breakfast in the Washington, D.C. area; TODO: confirm menu and operating hours.",
            mealTypes: ["Breakfast"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Budget",
            address: "TODO: Verify street address in Washington, D.C. area",
            cuisine: "American diner",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "Call Your Mother Deli",
            category: "Food & Dining",
            description: "Bagels and breakfast sandwiches restaurant candidate for breakfast in the Washington, D.C. area; TODO: confirm menu and operating hours.",
            mealTypes: ["Breakfast"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Mid-Range",
            address: "TODO: Verify street address in Washington, D.C. area",
            cuisine: "Bagels and breakfast sandwiches",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "Founding Farmers",
            category: "Food & Dining",
            description: "American brunch restaurant candidate for breakfast in the Washington, D.C. area; TODO: confirm menu and operating hours.",
            mealTypes: ["Breakfast"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Mid-Range",
            address: "TODO: Verify street address in Washington, D.C. area",
            cuisine: "American brunch",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "Blue Duck Tavern",
            category: "Food & Dining",
            description: "Upscale American breakfast restaurant candidate for breakfast in the Washington, D.C. area; TODO: confirm menu and operating hours.",
            mealTypes: ["Breakfast"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "High-End",
            address: "TODO: Verify street address in Washington, D.C. area",
            cuisine: "Upscale American breakfast",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
    ],

    lunch: [
        {
            name: "Ben’s Chili Bowl",
            category: "Food & Dining",
            description: "Chili dogs and American comfort restaurant candidate for lunch in the Washington, D.C. area; TODO: confirm menu and operating hours.",
            mealTypes: ["Lunch"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Budget",
            address: "TODO: Verify street address in Washington, D.C. area",
            cuisine: "Chili dogs and American comfort",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "CHIKO",
            category: "Food & Dining",
            description: "Chinese-Korean fusion restaurant candidate for lunch in the Washington, D.C. area; TODO: confirm menu and operating hours.",
            mealTypes: ["Lunch"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Mid-Range",
            address: "TODO: Verify street address in Washington, D.C. area",
            cuisine: "Chinese-Korean fusion",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "Zaytinya",
            category: "Food & Dining",
            description: "Mediterranean restaurant candidate for lunch in the Washington, D.C. area; TODO: confirm menu and operating hours.",
            mealTypes: ["Lunch"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Mid-Range",
            address: "TODO: Verify street address in Washington, D.C. area",
            cuisine: "Mediterranean",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "Fiola Mare",
            category: "Food & Dining",
            description: "Upscale Italian seafood restaurant candidate for lunch in the Washington, D.C. area; TODO: confirm menu and operating hours.",
            mealTypes: ["Lunch"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "High-End",
            address: "TODO: Verify street address in Washington, D.C. area",
            cuisine: "Upscale Italian seafood",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
    ],

    dinner: [
        {
            name: "Falafel Inc",
            category: "Food & Dining",
            description: "Middle Eastern falafel restaurant candidate for dinner in the Washington, D.C. area; TODO: confirm menu and operating hours.",
            mealTypes: ["Dinner"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Budget",
            address: "TODO: Verify street address in Washington, D.C. area",
            cuisine: "Middle Eastern falafel",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "Daikaya",
            category: "Food & Dining",
            description: "Japanese ramen restaurant candidate for dinner in the Washington, D.C. area; TODO: confirm menu and operating hours.",
            mealTypes: ["Dinner"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Mid-Range",
            address: "TODO: Verify street address in Washington, D.C. area",
            cuisine: "Japanese ramen",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "Le Diplomate",
            category: "Food & Dining",
            description: "French bistro restaurant candidate for dinner in the Washington, D.C. area; TODO: confirm menu and operating hours.",
            mealTypes: ["Dinner"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "Mid-Range",
            address: "TODO: Verify street address in Washington, D.C. area",
            cuisine: "French bistro",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
        {
            name: "The Inn at Little Washington",
            category: "Food & Dining",
            description: "Luxury tasting menu outside city restaurant candidate for dinner in the Washington, D.C. area; TODO: confirm menu and operating hours.",
            mealTypes: ["Dinner"],
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perPerson",
            priceTier: "High-End",
            address: "TODO: Verify street address in Washington, D.C. area",
            cuisine: "Luxury tasting menu outside city",
            // TODO: Add openingHours, website, and reservationRecommended after verification.
        },
    ],


    transportation: [
        "Metro",
        "Metro Buses",
        "Walking",
        "Uber/Lyft",
        "Capital Bikeshare"
    ],

   
    // ==========================================
    // WASHINGTON, D.C. — DETAILED TRANSPORTATION
    // ==========================================

    transportationOptions: [
        {
            name: "Metro",
            type: "Public Transportation",
            description: "Washington Metropolitan Area Transit Authority Metrorail connects Washington, D.C., Northern Virginia, and Maryland through six color-coded rail lines. Useful for reaching the National Mall, Smithsonian museums, Capitol Hill, downtown neighborhoods, Reagan National Airport, and Dulles International Airport. Standard weekday daytime fares range from $2.25 to $6.75 depending on distance. Late-evening and weekend fares range from $2.25 to $2.50. Eligible bus-to-rail and rail-to-bus transfers receive discounts within two hours when using supported payment methods.",
            estimatedCostMin: 2.25,
            estimatedCostMax: 6.75,
            priceType: "perRide",
            website: "https://www.wmata.com/pay.html"
            // TODO: Calculate fares using trip stations,
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
            // TODO: $2.25 represents standard local buses.
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
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perRide",
            website: "https://www.uber.com/"
        },
        {
            name: "Capital Bikeshare",
            type: "Bike Share",
            description: "Public bicycle-sharing network serving Washington, D.C., Arlington, Alexandria, and surrounding communities. Visitors can rent classic bicycles or electric bicycles from docking stations using the Capital Bikeshare or Lyft app. A single classic-bike ride costs $1 to unlock plus $0.15 per minute. Electric bicycles cost $1 to unlock plus $0.35 per minute. A $10 day pass includes unlimited classic-bike rides of up to 45 minutes each; additional charges apply for longer rides and electric bicycles. Taxes and certain parking-related charges may apply.",
            estimatedCostMin: null,
            estimatedCostMax: null,
            priceType: "perMinute",
            website: "https://capitalbikeshare.com/pricing"
            // TODO: Single classic bike pricing:
            // $1 unlock + $0.15 per minute.
            // Ebike: $1 unlock + $0.35 per minute.
            // Day pass: $10 for eligible classic-bike rides.
            // A fixed estimated fare requires ride duration.
        }
    ],


  
    // ==========================================
    // WASHINGTON, D.C. — THREE REAL HOTELS
    // Budget, Mid-Range, and High-End
    // ==========================================
    // TODO: Verify nightly room rates, taxes,
    // additional fees, and availability for travel dates.

    hotels: [
        {
            name: "HighRoad Hotel",
            category: "Budget",
            description: "Budget-friendly boutique hotel and hostel in Washington, D.C.'s Adams Morgan neighborhood near restaurants, nightlife, and neighborhood attractions. Offers compact private hotel rooms with ensuite bathrooms and shared pod-style hostel accommodations. Features complimentary Wi-Fi, a communal kitchen, guest lounges, coffee and tea, laundry facilities, and helpful front desk staff. Private room configurations include queen rooms, bunk rooms, and loft-style accommodations. Many rooms require stair access because the historic building does not have an elevator.",
            address: "1804 Belmont Road NW, Washington, DC 20009, USA",
            estimatedNightlyCostMin: null,
            estimatedNightlyCostMax: null,
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
            // TODO: Verify private-room and dorm-bed rates.
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
            estimatedNightlyCostMin: null,
            estimatedNightlyCostMax: null,
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
            // TODO: Verify nightly room rates and taxes.
            // Valet parking: $59 per day.
            // Oversized vehicle parking: $63 per day.
            // No hotel self-parking.
            // Pet fee: $75 for stays of 1-4 nights,
            // or $125 for stays of 5 or more nights.
            // No hotel airport shuttle.
            // Confirm any other mandatory property fees.
        },
        {
            name: "The Hay-Adams",
            category: "High-End",
            description: "Historic five-star luxury hotel directly across Lafayette Square from the White House in Downtown Washington, D.C. Features elegant guest rooms and suites, classic architecture, luxury furnishings, fine dining at The Lafayette, the Off The Record cocktail lounge, fitness center, concierge services, and personalized guest experiences. Select accommodations offer views of the White House or other Washington landmarks. Overnight valet parking costs $90 including tax, with in-and-out privileges. The property is within walking distance of many museums, monuments, restaurants, and downtown attractions.",
            address: "800 16th Street NW, Washington, DC 20006, USA",
            estimatedNightlyCostMin: null,
            estimatedNightlyCostMax: null,
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
            // TODO: Verify nightly room rates and taxes.
            // Overnight valet parking: $90 including tax.
            // In-and-out privileges are included.
            // Dogs up to 25 pounds are permitted,
            // subject to hotel policy and confirmation.
            // Not every room has a White House view.
            // Dining, bicycle rentals, and optional
            // wellness services may cost extra.
            // Confirm any other mandatory property charges.
        }
    ],


   
    // ==========================================
    // WASHINGTON, D.C. — TWO REAL AIRBNB LISTINGS
    // ==========================================
    // TODO: Verify nightly prices, cleaning fees,
    // minimum stays, registration, and availability.

    vacationRentals: [
        {
            name: "Capitol Hill Historic Carriage Retreat",
            category: "Vacation Rental",
            propertyType: "Entire guesthouse",
            description: "Beautifully renovated historic two-story carriage house near Capitol Hill and the H Street NE Atlas District. Features exposed brick, 11-foot ceilings, a private upstairs apartment, chef's kitchen with professional appliances, and a comfortable living room with a queen sleeper sofa. Includes private covered parking, a dedicated workspace, fast internet, in-unit laundry, and shared access to an exercise room and outdoor patio with a fire pit and barbecue grill. Airbnb hosted license shown: 5007242201004051.",
            address: "Capitol Hill / H Street NE, Washington, DC, USA — exact unit address provided after booking",
            estimatedNightlyCostMin: null,
            estimatedNightlyCostMax: null,
            priceType: "perNight",
            maxGuests: 3,
            bedrooms: 1,
            bathrooms: 1,
            amenities: [
                "Fast Wi-Fi",
                "Full chef's kitchen",
                "Exposed brick interior",
                "11-foot ceilings",
                "Queen bed",
                "Queen sleeper sofa",
                "70-inch Smart TV",
                "Surround sound",
                "Dedicated workspace",
                "Washer and dryer",
                "Private covered garage parking",
                "Shared fitness room",
                "Shared outdoor patio",
                "Shared fire pit",
                "Shared barbecue grill",
                "Nespresso coffee machine",
                "Air conditioning",
                "Private entrance"
            ],
            cleaningFee: null,
            serviceFee: null,
            parkingCost: 0,
            website: "https://www.airbnb.com/rooms/16738134"
            // TODO: Confirm current license validity.
            // Guest apartment requires climbing stairs.
            // Gym and backyard are shared with owners.
        },
        {
            name: "Georgetown Federal Rowhouse Hideaway",
            category: "Vacation Rental",
            propertyType: "Entire basement apartment",
            description: "Renovated 650-square-foot basement apartment in a historic Federal-style Georgetown rowhouse. Features two bedrooms, a private entrance through a traditional Georgetown alley, a queen bed, sofa bed, kitchenette, heated bathroom floor, towel warmer, and separate air conditioning controls. Located near Wisconsin Avenue, Volta Park, M Street boutiques, Georgetown University, restaurants, and public transportation. Airbnb hosted license shown: 5007242201000183.",
            address: "Georgetown, Washington, DC, USA — exact street address provided after booking",
            estimatedNightlyCostMin: null,
            estimatedNightlyCostMax: null,
            priceType: "perNight",
            maxGuests: 4,
            bedrooms: 2,
            bathrooms: 1,
            amenities: [
                "Wi-Fi",
                "Kitchenette",
                "Private entrance",
                "Queen bed",
                "Sofa bed",
                "Heated bathroom floor",
                "Heated towel warmer",
                "Dining area",
                "Air conditioning",
                "Adjustable heating",
                "Cable TV",
                "Netflix and streaming services",
                "Refrigerator",
                "Luggage dropoff available",
                "Nearby restaurants and shopping",
                "Nearby public transportation"
            ],
            cleaningFee: null,
            serviceFee: null,
            parkingCost: null,
            website: "https://www.airbnb.com/rooms/26786454"
            // TODO: Confirm current license validity.
            // Access requires walking through a narrow alley.
            // Laundry is not inside the apartment;
            // arrangements may be possible with the host.
        }
    ]

},


]
