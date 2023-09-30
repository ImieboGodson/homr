import { NextResponse } from "next/server";

import prisma from '@/app/libs/prismadb'
import getCurrentUser from "@/app/actions/getCurrentUser";

interface IParams {
    reservationId: string;
}

export async function DELETE ( request: Request, params : IParams  ) {

    const currentUser = await getCurrentUser();

    if(!currentUser) {
        return NextResponse.error();
    }

    const { reservationId } = params;

    if(!reservationId || typeof(reservationId) !== "string") {
        return NextResponse.error();
    }

    const reservation = await prisma.reservation.findUnique({
        where: {
            id: reservationId,
            OR: [
                {
                    userId: currentUser.id
                }, {
                    Listing: {
                        userId: currentUser.id
                    }
                }
            ]
        }
    })

    return NextResponse.json('Reservation deleted');

}