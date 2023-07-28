import { create } from "zustand";

interface DropMenuState {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}


const useDropMenu = create<DropMenuState>()((set) => ({
    isOpen: false,
    onOpen: () => set(() => ({ isOpen: true})),
    onClose: () => set(() => ({ isOpen: false}))
}))

export default useDropMenu;