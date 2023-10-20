
import prisma from '@/app/libs/prismadb'

export interface ListingsParams {
    location?: string;
    guestCount?: number;
    roomCount?: number;
    bathroomCount?: number;
    category?: string;
    features?: string[];
    type?: string;
    minPrice?: number;
    maxPrice?: number;
}

export default async function getAllListings(params : ListingsParams) {

    try {

        const { 
            location, 
            type, 
            category,
            features,
            roomCount, 
            bathroomCount, 
            minPrice,
            maxPrice 
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

        // if(guestCount) {
        //     query.guestCount = {
        //         gte: +guestCount
        //     }
        // }

        if(features) {
            query.features = {
                contains: features,
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

        if(maxPrice) {
            query.price = {
                lte: -maxPrice
            }
        }

        if(minPrice) {
            query.price = {
                gte: +minPrice
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