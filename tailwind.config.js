/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        accentblue : 'var(--accentblue)',
        accentorange : 'var(--accentorange)',
        secblue : 'var(--secblue)',

        bg0 : 'var(--bg0)',
        bg1 : 'var(--bg1)',
        bg2 : 'var(--bg2)',
        bg3 : 'var(--bg3)',
        bg4 : 'var(--bg4)',
        graimg : 'var(--graimg)',
        cardbg : 'var(--cardbg)',

        blurbg : 'var(--blurbg)',
        blurbg2 : 'var(--blurbg2)',

        bordercolor : 'var(--bordercolor)',
        bordercolor2 : 'var(--bordercolor2)',

        tpri : 'var(--tpri)',
        tsec : 'var(--tsec)',
        tmute : 'var(--tmute)',
        iconcolor : 'var(--iconcolor)',
      },
      fontFamily : {
        fsora:'var(--f-sora)',
        fbebas:'var(--f-bebas)',
        finter:'var(--f-inter)',
        fpop:'var(--f-pop)',
      }
    },
  },
  plugins: [],
}