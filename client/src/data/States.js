const STATES = {

    "Andaman & Nicobar Island": {
        Area: "30610.51 Hectare",
        Production: "44868.98 Tonnes",
        Population: 399001,
        keyCrops: "Arecanut, Rice, Banana, Coconut, Tapioca",
    },

    "Andhra Pradesh": {
        Area: "7341696 Hectare",
        Production: "32206366 Tonnes",
        Population: 91702478,
        keyCrops: "Rice, Banana, Oilseeds, Cotton(lint), Coconut",
    },

    "Arunanchal Pradesh": {
        Area: "284440 Hectare",
        Production: "564531.6 Tonnes",
        Population: 1711947,
        keyCrops: "Rice, Ginger, Sugarcane, Maize"
    },
    Assam: {
        Area: "3355836 Hectare",
        Production: "9068685 Tonnes",
        Population: 35998752,
        keyCrops: "Coconut,Rice, Jute, Potato, Sugarcane, Cotton(lint)"
    },
    Bihar: {
        Area: "7095981 Hectare",
        Production: "38938689 Tonnes",
        Population: 128500364,
        keyCrops: "Wheat, Maize, Jute, Rice, Sugarcane",
    },

    Chhattisgarh: {
        Area: "5493929 Hectare",
        Production: "7920857 Tonnes",
        Population: 32199722,
        keyCrops: "Rice, Gram, Maize, Wheat, Soyabean"
    },

    Delhi: {
        Area: "29782 Hectare",
        Production: "106261 Tonnes",
        Population: 19301096,
        keyCrops: "Bajra, Barley, Gram, Jowar, Maize"
    },

    Goa: {
        Area: "132689 Hectare",
        Production: "201480 Tonnes",
        Population: 1521992,
        keyCrops: "Coconut,Cashewnut,Banana,Rabi pulses",
    },

    Gujarat:
    {
        Area: "9070796 Hectare",
        Production: "30004189 Tonnes",
        Population: 70400153,
        keyCrops: "Sugarcane,Potat,Cotton(lint),Bajra,Groundnut"
    },

    Haryana: {
        Area: "6317817 Hectare",
        Production: "30018736 Tonnes",
        Population: 28900667,
        keyCrops: "Sugarcane,Wheat,Cotton(lint),Rapeseed & Mustard,Rice"
    },

    "Himachal Pradesh": {
        Area: "761877 Hectare",
        Production: "1654519 Tonnes",
        Population: 7503010,
        keyCrops: "Wheat,Maize,Barley,Potato,Other Rabi Pulses"
    },

    "Jammu & Kashmir": {
        Area: "929629 Hectare",
        Production: "1992178.277 Tonnes",
        Population: 14999397,
        keyCrops: "Wheat,Rice,Maize,Rapeseed & Mustard,Bajra",
    },

    Jharkhand: {
        Area: "3045075 Hectare",
        Production: "4628482 Tonnes",
        Population: 40100376,
        KeyCrops: "Rice,Maize,Arhar/Tur,Urad,Wheat"
    },

    Karnataka: {
        Area: "12114257 Hectare",
        Production: "61336530.3 Tonnes",
        Population: 69599762,
        KeyCrops: "Coconut,Sugarcan,Arecanu,Maiz,Rice"
    },

    Kerala: {
        Area: "1341206.209 Hectare",
        Production: "3638425.801 Tonnes",
        Population: 34698876,
        keyCrops: "Coconut,Tapioca,Rice,Banana,Sugarcane"
    },

    "Madhya Pradesh": {
        Area: "26768542.29 Hectare",
        Production: "61190004.99 Tonnes",
        Population: 85002417,
        keyCrops: "Maize,Banana,Wheat,Potato,Soyabean"
    },
    Maharashtra: {
        Area: "20247622.65 Hectare",
        Production: "105281520.4 Tonnes",
        Population: 124904071,
        keyCrops: "Sugarcane,Soyabean,Cotton(lint),Maize,Rice"
    },

    Manipur: {
        Area: "366986 Hectare",
        Production: "1376584 Tonnes",
        Population: 3436948,
        keyCrops: "Rice,Potato,Banana,Turmeric,Maize"
    },

    Meghalaya: {
        Area: "256452 Hectare",
        Production: "841567 Tonnes",
        Population: 3772103,
        keyCrops: "Potato,Jute,Rice,Ginger,Turmeric,Banana"
    },

    Mizoram: {
        Area: "49845 Hectare",
        Production: "126672 Tonnes",
        Population: 1308967,
        keyCrops: "Sugarcane,Rice,Maize,Cowpea,Other Rabi pulses"
    },


    Nagaland: {
        Area: "502310 Hectare",
        Production: "1253650 Tonnes",
        Population: 2073074,
        keyCrops: "Rice,Maize,Tapioca,Oilseeds,Sugarcane"
    },

    Odisha: {
        Area: "4326018 Hectare",
        Production: "8496911.8 Tonnes",
        Population: 47099270,
        keyCrops: "Rice,Green gram,Groundnut,Ragi,Sugarcane"
    },

    Puducherry: {
        Area: "23857 Hectare",
        Production: "266989 Tonnes",
        Population: 1646050,
        keyCrops: "Coconut,Tapioca,Rice,Groundnut,Cotton(lint)"

    },
    Punjab: {
        Area: "7192900 Hectare",
        Production: "39384300 Tonnes",
        Population: 30501026,
        keyCrops: "Wheat,Maize,Cotton(lint),Rice,Sugarcane"
    },
    Rajasthan: {
        Area: "23755994 Hectare",
        Production: "33580027 Tonnes",
        Population: 79502477,
        keyCrops: "Wheat,Cotton(lint),Bajra,Rapeseed & Mustard,Groundnut"
    },

    Sikkim: {
        Area: "64161 Hectare",
        Production: "100531 Tonnes",
        Population: 658019,
        keyCrops: "Maize,Rice,Urad,Millets,Soyabean"
    },

    "Tamil Nadu": {
        Area: "5007290 Hectare",
        Production: "34984311.87 Tonnes",
        Population: 83697770,
        keyCrops: "Coconut,Sugarcane,Tapioca,Maize,Rice"
    },
    Telangana: {
        Area: "5412624 Hectare",
        Production: "14175102 Tonnes",
        Population: 38157311,
        keyCrops: "Sugarcane,Rice,Cotton(lint),Maize,Groundnut"
    },
    Tripura: {
        Area: "332524 Hectare",
        Production: "886267.44 Tonnes",
        Population: 4184959,
        keyCrops: "Rice,Maize,Mesta,Sugarcane,Arhar / Tur,Jute"
    },

    "Uttar Pradesh": {
        Area: "24220157 Hectare",
        Production: "262592538 Tonnes",
        Population: 231502578,
        keyCrops: "Sugarcane,Potato,Wheat,Bajra,Rice"
    },

    Uttarakhand: {
        Area: "953460 Hectare",
        Production: "8562287 Tonnes",
        Population: 11700099,
        keyCrops: "Ragi,Wheat,Sugarcane,Rice,Small millets"
    },

    "West Bengal":
    {
        Area: "8319769 Hectare",
        Production: "32804937 Tonnes",
        Population: 100896618,
        keyCrops: "Coconut,Jute,Potato,Rice,Maize"

    }
}

export default STATES;