import { create } from "zustand";

interface DisclaimerModalState {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}


const useDisclaimerModal = create<DisclaimerModalState>()((set) => ({
    isOpen: false,
    onOpen: () => set(() => ({ isOpen: true})),
    onClose: () => set(() => ({ isOpen: false}))
}))

export default useDisclaimerModal;