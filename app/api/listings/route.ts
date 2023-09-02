import { NextResponse } from "next/server";

import prisma from '@/app/libs/prismadb'
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST( request: Request ) {

    const currentUser = await getCurrentUser();

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

    return NextResponse.json(listing);
}