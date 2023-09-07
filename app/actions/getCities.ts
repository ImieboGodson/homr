import prisma from '@/app/libs/prismadb';

interface ICitiesParams {
    count?: number
}

export default async function getCities() {
    try {
        const cities = await prisma.city.findMany({
            orderBy:{
                createdAt: 'desc'
            }
        })

        if(!cities || cities.length === 0) {
            return null;
        }

        const safeCities = cities.map((city) => ({
            ...city,
            createdAt: city.createdAt.toISOString(),
            updatedAt: city.updatedAt.toISOString()
        }))

        return safeCities;
    } catch(error: any) {
        throw new Error(error);
    }
}