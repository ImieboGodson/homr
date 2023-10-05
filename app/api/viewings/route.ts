import { NextResponse } from "next/server";

import prisma from '@/app/libs/prismadb'
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST ( request:Request ) {
    const currentUser = await getCurrentUser();

    if(!currentUser) {
        return NextResponse.error();
    }

    const body = await request.json();

    const { username, date, time, listingId } = body;

    if(!username || !date || !time || !listingId) {
        return NextResponse.error();
    }

    const viewing = await prisma.viewing.create({
        data: {
            username,
            date,
            listingId,
            userId: currentUser.id
        }
    })

    return NextResponse.json(viewing);
}