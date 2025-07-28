import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ApiState {
  apiToken: string | null;
  baseUrl: string;
  setApiToken: (token: string) => void;
  setBaseUrl: (url: string) => void;
  clearConfig: () => void;
}

export const useApiStore = create<ApiState>()(
  persist(
    (set) => ({
      apiToken: null,
      baseUrl: 'https://api.example.com', // Replace with actual API base URL
      setApiToken: (token: string) => set({ apiToken: token }),
      setBaseUrl: (url: string) => set({ baseUrl: url }),
      clearConfig: () => set({ apiToken: null }),
    }),
    {
      name: 'poc-sdk-config',
    }
  )
);