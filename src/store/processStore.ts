import { create } from 'zustand'

interface ProcessState {
  isProcessComplete: boolean
  setProcessComplete: (status: boolean) => void
}

export const useProcessStore = create<ProcessState>((set) => ({
  isProcessComplete: false,
  setProcessComplete: (status) => set({ isProcessComplete: status }),
}))