import { NextResponse } from "next/server";

import prisma from '@/app/libs/prismadb'
import getCurrentUser from "@/app/actions/getCurrentUser";


export async function POST( request: Request ) {

    const currentUser = await getCurrentUser();

    if(!currentUser) {
        return NextResponse.error();
    }

    const body = await request.json();

    const { totalPrice, listingId, startDate, endDate, guestCount } = body;

    if(!totalPrice || !listingId || !startDate || !endDate || !guestCount ) {
        return NextResponse.error();
    }

    const reservation = await prisma.reservation.create({
        data: {
            totalPrice,
            listingId,
            startDate,
            endDate,
            guestCount,
            userId: currentUser.id
        }
    })

    return NextResponse.json(reservation);
}