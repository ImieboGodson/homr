import prisma from '@/app/libs/prismadb';


export default async function getTopCities () {
    try {
        const topCities = await prisma.city.findMany({
            orderBy: {
                listings: 'desc'
            },
            take: 4
        })

        const safeCities = topCities.map((city) => ({
            ...city,
            createdAt: city.createdAt.toISOString(),
            updatedAt: city.updatedAt.toISOString()
        }))

        return safeCities;
    } catch (error: any) {
        throw new Error(error);
    }
}