import { create } from "zustand";

interface GalleryModalState {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}


const useGalleryModal = create<GalleryModalState>()((set) => ({
    isOpen: false,
    onOpen: () => set(() => ({ isOpen: true})),
    onClose: () => set(() => ({ isOpen: false}))
}))

export default useGalleryModal;