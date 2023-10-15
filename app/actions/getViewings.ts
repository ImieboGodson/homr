import prisma from '@/app/libs/prismadb'
import getCurrentUser from './getCurrentUser';

interface IParams {
    viewingId?: string;
    userId?: string;
    ownerId?: string;
}

export default async function getViewings ( params: IParams) {
    try {

        const currentUser = await getCurrentUser();

        if(!currentUser) {
            throw new Error('Invalid request');
        }

        const { viewingId, userId, ownerId } = params;

        let query: any = {};

        if(viewingId) {
            query.viewingId = viewingId
        }

        if(userId) {
            query.userId = userId
        }

        if(ownerId) {
            query.listing = {
                userId: ownerId
            }
        }

        const viewings = await prisma.viewing.findMany({
            where: query,
            include: {
                listing: true
            },
            orderBy: {
                createdAt: 'desc'
            }
        })

        if(!viewings) {
            return [];
        }


        const safeViewings = viewings.map((viewing) => ({
            ...viewing,
            createdAt: viewing.createdAt.toISOString(),
            updatedAt: viewing.updatedAt.toISOString(),
            date: viewing.date.toISOString(),
            listing: {
                ...viewing.listing,
                createdAt: viewing.listing.createdAt.toISOString()
            }
        }))

        return safeViewings;

    } catch(error: any) {
        throw new Error('Something went wrong')
    }
}