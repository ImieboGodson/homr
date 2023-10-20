import { create } from "zustand";

interface ViewingModalState {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}


const useViewingModal = create<ViewingModalState>()((set) => ({
    isOpen: false,
    onOpen: () => set(() => ({ isOpen: true})),
    onClose: () => set(() => ({ isOpen: false}))
}))

export default useViewingModal;