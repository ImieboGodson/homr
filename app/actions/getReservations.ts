import prisma from '@/app/libs/prismadb';

interface IParams {
    listingId?: string;
    userId?: string;
    authorId?: string;
}

export default async function getReservations ( params : IParams ) {

    try {

        const { listingId, userId, authorId } = params;

        let query: any = {}

        if(listingId) {
            query.listingId = listingId;
        }

        if(userId) {
            query.userId = userId;
        }

        if(authorId) {
            query.listing = {
                userId: authorId
            }
        }


        const reservations = await prisma.reservation.findMany({
            where: query,
            include:{
                Listing: true
            },
            orderBy: {
                createdAt: 'desc'
            }
        })

        if(!reservations) {
            return [];
        }

        const safeReservations = reservations.map((item) => ({
            ...item,
            startDate: item.startDate.toISOString(),
            endDate: item.endDate.toISOString(),
            listing: {
                ...item.Listing,
                createdAt: item.Listing.createdAt.toISOString(),
            }
        }))

        return safeReservations;

    } catch(error: any) {
        throw new Error(error);
    }
    
}