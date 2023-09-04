import { NextResponse } from "next/server";

import prisma from '@/app/libs/prismadb'
import getCurrentUser from "@/app/actions/getCurrentUser";
import getCities from "@/app/actions/getCities";

export async function POST( request: Request ) {

    const currentUser = await getCurrentUser();
    const cities = await getCities()

    if(!currentUser) {
        return NextResponse.error();
    }

    const body = await request.json();

    const {
        userType,
        title,
        description,
        images,
        category,
        location,
        roomCount,
        bathroomCount,
        guestCount,
        features,
        type,
        price
    } = body;

    Object.keys(body).forEach((value: any) => {
        if(!body[value]) {
            return NextResponse.error();
        }
    })

    try {

        const listing = await prisma.listing.create({
            data: {
                title,
                description,
                images,
                category,
                location: `${location.value}, ${location.country}`,
                roomCount,
                bathroomCount,
                guestCount,
                features,
                type,
                isAvailable: true,
                price: parseInt(price, 10),
                userId: currentUser.id,
                userType
            }
        })



        const listingCity = cities?.find((city) => city.name === location.value)

        if(!cities || cities.length === 0 || !listingCity || typeof(listingCity) === 'undefined') {
            const city = await prisma.city.create({
                data: {
                    name: location.value,
                    country: location.country,
                    image: images[0],
                    listings: [listing.id]
                }
            })

            return NextResponse.json([listing, city]);
        }


        const listings = [...(listingCity.listings || [])]

        listings.push(listing.id);


        const city = await prisma.city.update({
            where: {
                id: listingCity.id
            },
            data: {
                listings
            }
        })
    
        return NextResponse.json([listing, city]);

    } catch(err: any) {
        return NextResponse.error();
    }
}