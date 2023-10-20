import prisma from '@/app/libs/prismadb';
import getCurrentUser from './getCurrentUser';



export default async function getFavorites () {

    try {

        const currentUser = await getCurrentUser();

        if(!currentUser) {
            throw new Error('Unauthorized request');
        }

       
        const favorites = await prisma.listing.findMany({
            where: {
                id: {
                    in: currentUser.favoriteIds
                }
            }
        })

        if(!favorites) {
            return [];
        }


        const safeFavorites = favorites.map((favorite) => ({
            ...favorite,
            createdAt: favorite.createdAt.toISOString(),
        }))

        return safeFavorites;


    } catch(e: any) {
        throw new Error(e);
    }

}