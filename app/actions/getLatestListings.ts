import prisma from '@/app/libs/prismadb';


export default async function getLatestListings() {
    try {

        const listings = await prisma.listing.findMany({
            orderBy: {
                createdAt: 'desc'
            },
            take: 4
        });


        const safeListings = listings.map((listing) => ({
            ...listing,
            createdAt: listing.createdAt.toISOString()
        }));

        return safeListings;

    } catch(error: any) {
        throw new Error(error);
    }
}