
import prisma from '@/app/libs/prismadb'

export interface ListingsParams {
    location?: string;
    guestCount?: number;
    roomCount?: number;
    bathroomCount?: number;
    category?: string;
    type?: string;
    price?: number;
}

export default async function getAllListings(params : ListingsParams) {

    try {

        const { 
            location, 
            type, 
            category, 
            guestCount, 
            roomCount, 
            bathroomCount, 
            price 
        } = params;

        const query: any = {}

        if(location) {
            query.location = location;
        }

        if(type) {
            query.type = type;
        }

        if(category) {
            query.category = category;
        }

        if(guestCount) {
            query.guestCount = {
                gte: +guestCount
            }
        }

        if(roomCount) {
            query.roomCount = {
                gte: +roomCount
            }
        }

        if(bathroomCount) {
            query.bathroomCount = {
                gte: +bathroomCount
            }
        }

        if(price) {
            query.price = {
                lte: -price
            }
        }

        const listings = await prisma.listing.findMany({
            where: query,
            orderBy: {
                createdAt: 'desc'
            }
        })

        const safeListings = listings.map((listing) => ({
            ...listing,
            createdAt: listing.createdAt.toISOString()
        }))

        return safeListings;
    } catch(error: any) {
        throw new Error(error);
    }
}