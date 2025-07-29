import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ApiState {
  apiToken: string | null;
  environment: string;
  setApiToken: (token: string) => void;
  setEnvironment: (url: string) => void;
  clearConfig: () => void;
}

export const useApiStore = create<ApiState>()(
  persist(
    (set) => ({
      apiToken: null,
      environment: 'https://api.example.com', // Replace with actual API base URL
      setApiToken: (token: string) => set({ apiToken: token }),
      setEnvironment: (url: string) => set({ environment: url }),
      clearConfig: () => set({ apiToken: null }),
    }),
    {
      name: 'poc-sdk-config',
    }
  )
);