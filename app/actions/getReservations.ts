import prisma from '@/app/libs/prismadb';

interface IParams {
    listingId: string;
}

export default async function getReservations ( params : IParams ) {

    const { listingId } = params;

    if(!listingId || typeof(listingId) !== "string") {
        throw new Error('Invalid ID');
    }

    const reservations = await prisma.reservation.findMany({
        where: {
            listingId
        }
    })

    if(!reservations) {
        return [];
    }

    const safeReservations = reservations.map((item) => ({
        ...item,
        startDate: item.startDate.toISOString(),
        endDate: item.endDate.toISOString()
    }))

    return safeReservations;
    
}