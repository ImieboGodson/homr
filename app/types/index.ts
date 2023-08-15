import { User, Listing, Booking, Viewing } from '@prisma/client'

export type SafeUser = Omit<User, "emailVerified" | "createdAt" | "updatedAt"> & {
    emailVerified: string | null;
    createdAt: string;
    updatedAt: string;
    
}

export type SafeListing = Omit<Listing, "createdAt"> & {
    createdAt: string
}

export type SafeBooking = Omit<Booking, "startDate" | "endDate" | "listing"> & {
    startDate: string;
    endDate: string;
    listing: SafeListing;
}

export type SafeViewing = Omit<Viewing, "date" | "createdAt" | "updatedAt" | "listing"> & {
    date: string;
    createdAt: string;
    updatedAt: string;
    listing: string;
}