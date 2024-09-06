import { create } from 'zustand'

const useStore = create(() => ({
  colors: {
    mainOrange: '#FF7B1B',
    whiteOrange: '#FFE6D4',
    white: '#FFFFFF'
  }
}))

export default useStore