import { User, Listing, Reservation, Viewing, City } from '@prisma/client'

export type SafeUser = Omit<User, "emailVerified" | "createdAt" | "updatedAt"> & {
    emailVerified: string | null;
    createdAt: string;
    updatedAt: string;
    
}

export type SafeCity = Omit<City, "createdAt" | "updatedAt"> & {
    createdAt: string;
    updatedAt: string;
    
}

export type SafeListing = Omit<Listing, "createdAt"> & {
    createdAt: string
}

export type SafeReservation = Omit<Reservation, "createdAt" | "startDate" | "endDate" | "listing"> & {
    createdAt: string;
    startDate: string;
    endDate: string;
    listing: SafeListing;
}

export type SafeViewing = Omit<Viewing, "date" | "createdAt" | "updatedAt" | "listing"> & {
    date: string;
    createdAt: string;
    updatedAt: string;
    listing: SafeListing;
}