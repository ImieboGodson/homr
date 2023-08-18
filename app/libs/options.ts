import {
    FaPersonWalking,
    FaPeopleRoof,
    FaPersonShelter,
} from "react-icons/fa6";
import { PiHouseLine, PiCertificate, PiTelevision, PiCookingPot, PiCar, PiSnowflake, PiDesktopTower } from "react-icons/pi";
import { GiHouseKeys, GiWifiRouter, GiClothesline, GiSpeedometer } from "react-icons/gi";
import { BsDoorClosed } from "react-icons/bs";
import { MdOutlineNightShelter } from "react-icons/md";

export const listingTypes = [
    {
        icon: PiHouseLine,
        label: "An entire place",
        subtitle: "Guests have the whole to themselves.",
    },
    {
        icon: BsDoorClosed,
        label: "A room",
        subtitle:
        "Guests have their own room in a home, plus access to shared spaces.",
    },
    {
        icon: FaPeopleRoof,
        label: "A shared room",
        subtitle:
        "Guests sleep in a room or common area that may be shared with you or other.",
    },
];
  
export const listingCategories = [
    {
        icon: GiHouseKeys,
        label: "Rent",
    },
    {
        icon: MdOutlineNightShelter,
        label: "Shortlet",
    },
    {
        icon: PiCertificate,
        label: "Sale",
    },
];

export const listingFeatures = [
    [
        {
            label: 'Wifi',
            icon: GiWifiRouter
        },
        {
            label: 'TV',
            icon: PiTelevision
        },
        {
            label: 'Kitchen',
            icon: PiCookingPot
        },
        {
            label: 'Washer',
            icon: GiClothesline
        },
        {
            label: 'Free parking on premises',
            icon: PiCar
        },
        {
            label: 'Paid parking on premises',
            icon: GiSpeedometer
        },
        {
            label: 'Air conditioning',
            icon: PiSnowflake
        },
        {
            label: 'Dedicated workspace',
            icon: PiDesktopTower
        },
    ]
]