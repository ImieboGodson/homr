import { NextResponse } from "next/server";

import prisma from '@/app/libs/prismadb'
import getCurrentUser from "@/app/actions/getCurrentUser";

interface IParams {
    viewingId: string;
}

export async function DELETE ( request:Request, { params }: { params :IParams } ) {

    const currentUser = await getCurrentUser();

    if(!currentUser) {
        return NextResponse.error();
    }

    const { viewingId } = params;

    if(!viewingId || typeof viewingId !== "string") {
        throw new Error('Invalid ID')
    }

    const viewing = await prisma.viewing.deleteMany({
        where: {
            id: viewingId,
            OR: [
                {
                    userId: currentUser.id
                },
                {
                    listing: {
                        userId: currentUser.id
                    }
                }
            ]
        },
    })

    return NextResponse.json(viewing);
}