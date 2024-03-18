import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */

// const sizeConst = () => {
//     const arr = {};

//     for (let i = 0; i < 3000; i++) {
//         arr[`${i}`] = `${i}px`;
//     }
//     return arr;
// };

export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            // padding: sizeConst(),
            // margin: sizeConst(),
            // height: sizeConst(),
            // width: sizeConst(),
            // gap: sizeConst(),
            // fontSize: sizeConst(),
            // lineHeight: sizeConst(),
            // borderRadius: sizeConst(),
            // borderWidth: sizeConst(),
            // soacing: sizeConst(),
            // inset: sizeConst(),
            // letterSpacing: sizeConst(),
            // minHeight: sizeConst(),
            // minWidth: sizeConst(),
            // maxHeight: sizeConst(),
            // maxWidth: sizeConst(),
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
                jktSans: "Plus Jakarta Sans",
                roboto: "Roboto",
                jetBrains: "JetBrains Mono",
            },
            colors: {
                primary: "#181820",
                secondary: "#21212B",
                hirarky: "#A76BD8",
                accent: "#AC6DDE",
            },
        },
    },

    plugins: [forms, require("daisyui")],
};
