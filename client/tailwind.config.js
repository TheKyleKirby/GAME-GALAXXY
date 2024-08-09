/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        //all colors have a ligher and darker shade attached. all colors were taken from first image i (beth) posted for hero image suggestions. So default is the color I pulled with color picker and AI helped me get lighter and darker shades for each :) 
        deepBlue: {
          DEFAULT: '#10183C', // love this for the background
          light: '#2c3e75',
          dark: '#0b1230'
        },
        darkPurple: {
          DEFAULT: '#2B1F4A', // if we want the bg to be diff on diff pages
          light: '#473464',
          dark: '#201537'
        },
        royalBlurp: {
          DEFAULT: '#4A32CC', // good for accent color / mid range blue/purple
          light: '#6750e6',
          dark: '#3719a9'
        },
        brightPeach: {
          DEFAULT: '#FAD9B0', // text / highlight - wouldn't use for all text, maybe key headings or the navigation, play with it :)
          light: '#ffe1c3',
          dark: '#d8b48a'
        },
        pinkyPink: {
          DEFAULT: '#E780AC', // same as Peach
          light: '#f19bbf',
          dark: '#b4607a'
        },
        notWhite: {
          DEFAULT: '#FBFFFC', // not quite white, but close
          light: '#ffffff',
          dark: '#d7dcd9'
        },
        lightLavender: {
          DEFAULT: '#B8A8FF', // pretty brighter purple
          light: '#d0bfff',
          dark: '#9277ff'
        },
        tealBlue: {
          DEFAULT: '#05B0C4', // brighter blue, maybe link colors? underlines? hovers?
          light: '#33c9e0',
          dark: '#048d9c'
        },
        mutedPastelBlue: {
          DEFAULT: '#AED2F9', // card background color with some opacity added?? maybe??? remember you can translate hex to rgba codes (a being alpha meaning the opacity level 0.0, 0.1, ... 0.9, 1)
          light: '#cbe1fc',
          dark: '#8bb5e5'
        },
        goldenOrange: {
          DEFAULT: '#FBD896', // no idea, but it was pretty lol
          light: '#ffe4b3',
          dark: '#d8ab72'
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
