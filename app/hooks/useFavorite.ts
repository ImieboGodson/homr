
import { useCallback, useMemo } from "react";
import { SafeUser } from "../types";
import useLoginModal from "./useLoginModal";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

interface useFavoriteParams {
    currentUser?: SafeUser | null
    listingId: string;
}

const useFavorite = ({ currentUser, listingId }: useFavoriteParams) => {

    const route = useRouter();
    const loginModal = useLoginModal();

    const isFavorited = useMemo(() => {
        const list = currentUser?.favoriteIds || []

        return list.includes(listingId);
    }, [currentUser, listingId])


    const toggleFavorite = useCallback(async (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();

        if(!currentUser) {
            return loginModal.onOpen();
        }

        try {

            let request;

            if(isFavorited) {
                request = () => axios.delete(`/api/favorites/${listingId}`)
            } else {
                request = () => axios.post(`/api/favorites/${listingId}`)
            }

            await request();
            route.refresh();
            toast.success('success');

        } catch(error: any) {
            toast.error('Something went wrong.');
        }

        

    }, [route, currentUser, listingId, loginModal, isFavorited])


    return {
        isFavorited,
        toggleFavorite
    }
}

export default useFavorite;