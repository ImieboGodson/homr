import { NextResponse } from "next/server";

import prisma from '@/app/libs/prismadb'
import getCurrentUser from "@/app/actions/getCurrentUser";

export default async function POST( request: Request) {

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
        type,
        status,
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
            location,
            roomCount,
            bathroomCount,
            guestCount,
            type,
            status,
            price: parseInt(price, 10),
            userId: currentUser.id,
            userType
        }
    })

    return NextResponse.json(listing);
}