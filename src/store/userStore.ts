import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserState {
  credits: number;
  addCredits: (amount: number) => void;
  decreaseCredits: () => boolean;  // Returns false if not enough credits
}

export const useUserStore = create<UserState>()(
  persist(
    (set, get) => ({
      credits: 0,
      addCredits: (amount) => set((state) => ({ 
        credits: state.credits + amount 
      })),
      decreaseCredits: () => {
        const currentCredits = get().credits;
        if (currentCredits > 0) {
          set({ credits: currentCredits - 1 });
          return true;
        }
        return false;
      }
    }),
    {
      name: 'user-storage',
    }
  )
);