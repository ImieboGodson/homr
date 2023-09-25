import {
    FaPersonWalking,
    FaPeopleRoof,
    FaPersonShelter,
} from "react-icons/fa6";
import { PiHouseLine, PiSwimmingPool, PiFireExtinguisher, PiFirstAidKit, PiCertificate, PiTelevision, PiCookingPot, PiCar, PiSnowflake, PiDesktopTower } from "react-icons/pi";
import { GiHouseKeys, GiWifiRouter, GiRoundTable, GiWeightLiftingUp, GiClothesline, GiSpeedometer, GiPowerGenerator, GiWashingMachine } from "react-icons/gi";
import { BsDoorClosed } from "react-icons/bs";
import { MdOutlineNightShelter, MdOutlineSportsFootball, MdOutlineTableBar } from "react-icons/md";
import { RiPassportLine, RiAlarmWarningLine } from 'react-icons/ri'
import { LiaTableTennisSolid } from 'react-icons/lia'

export const listingTypes = [
    {
        icon: PiHouseLine,
        label: "An entire place",
        subtitle: "Guests have the whole to themselves.",
        context: "You will have the whole place to yourself."
    },
    {
        icon: BsDoorClosed,
        label: "A room",
        subtitle:
        "Guests have their own room in a home, plus access to shared spaces.",
        context: "Your own room in a home, plus access to shared spaces."
    },
    {
        icon: FaPeopleRoof,
        label: "A shared room",
        subtitle:
        "Guests sleep in a room or common area that may be shared with you or others.",
        context: "Your will stay in a shared room or common area that may be shared with you or others."
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
            label: 'Laundry room',
            icon: GiWashingMachine
        },
        {
            label: 'Free parking on premises',
            icon: PiCar
        },
        {
            label: 'Standby generator',
            icon: GiPowerGenerator
        },
        {
            label: 'Air conditioning',
            icon: PiSnowflake
        },
        {
            label: 'Dedicated workspace',
            icon: PiDesktopTower
        },
    ],
    [
        {
            label: 'Pool',
            icon: PiSwimmingPool
        },
        {
            label: 'Sports area',
            icon: MdOutlineSportsFootball
        },
        {
            label: 'Outdoor sitting area',
            icon: GiRoundTable
        },
        {
            label: 'Gym',
            icon: GiWeightLiftingUp
        },
        {
            label: 'Cafeteria',
            icon: MdOutlineTableBar
        }
    ],
    [
        {
            label: 'Smoke alarm',
            icon: RiPassportLine
        },
        {
            label: 'Carbon monoxide alarm',
            icon: RiAlarmWarningLine
        },
        {
            label: 'Fire extinguisher',
            icon: PiFireExtinguisher
        },
        {
            label: 'First aid kit',
            icon: PiFirstAidKit
        },
    ]
]