import { keyframes } from "@emotion/react";
import { transform } from "typescript";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 'mine-shaft': {
        //   50:  '#e5e5e5',
        //   100: '#cfcfcf',
        //   200: '#a8a8a8',
        //   300: '#7f7f7f',
        //   400: '#4f4f4f',
        //   500: '#2e2e2e',
        //   600: '#1d1d1d',
        //   700: '#151515',
        //   800: '#111112', // your base dark
        //   900: '#0d0d0d',
        //   950: '#080808',
         'mine-shaft': {
          '50': '#f6f6f6',
          '100': '#e7e7e7',
          '200': '#d1d1d1',
          '300': '#b0b0b0',
          '400': '#888888',
          '500': '#6d6d6d',
          '600': '#5d5d5d',
          '700': '#4f4f4f',
          '800': '#454545',
          '900': '#3d3d3d',
          '950': '#2d2d2d'
        },
        // 'bright-sun': {
        //    50:  '#edeafc',
        //   100: '#cfcaf5',
        //   200: '#b1a8f0',
        //   300: '#9387ea',
        //   400: '#7c6be3',
        //   500: '#6650db',
        //   600: '#5744c5',
        //   700: '#4d3dad',
        //   800: '#47428a', // your base accent
        //   900: '#3c366b',
        //   950: '#29244b',
           'bright-sun': {
          '50': '#fffbeb',
          '100': '#fff3c6',
          '200': '#ffe588',
          '300': '#ffd149',
          '400': '#ffbd20',
          '500': '#f99b07',
          '600': '#dd7302',
          '700': '#b75006',
          '800': '#943c0c',
          '900': '#7a330d',
          '950': '#461902',
        },
      },
      boxShadow: {
        'bright-sun': '0 0 5px 1px #ffbd20',
      },
      keyframes:{
        'option-animation':{
          from :{opacity:'0', transform : 'translateX(-20px)'},
          to:  {opacity:'1', transform:'translateX(0)'},
        },
      },
      animation:{
        'option-animation' : 'option-animation 200ms ease-forwards',
      },
    },
    screens: {
      'xsm': '350px',
      'xs': '476px',
      'sm': '640px',
      'md': '768px',
      'bs': '900px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',

      '2xl-mx': { 'max': '1535px' },
      'xl-mx': { 'max': '1279px' },
      'lg-mx': { 'max': '1023px' },
      'bs-mx': { 'max': '899px' },
      'md-mx': { 'max': '767px' },
      'sm-mx': { 'max': '639px' },
      'xs-mx': { 'max': '475px' },
      'xsm-mx': { 'max': '349px' }


    }
  },
  plugins: [],
}
