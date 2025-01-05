module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'], // Ensure your component paths are here
  darkMode: 'class',
  theme: {
    extend: {
      screens:{
        "other":{ 'min': '340px','max':'1200px'},
      },
      
        colors:{
          darkbg:"#1E293B",
        }
      },
    },
  plugins: [],
}
