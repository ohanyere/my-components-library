import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";

export default [
  // 1️⃣
  {
    input: "src/index.ts",
    output: [
      {
        file: "dist/index.cjs.js",
        format: "cjs",
        sourcemap: true,
      },
      {
        file: "dist/index.esm.js",
        format: "esm",
        sourcemap: true,
      },
    ],
    external: ["react", "react-dom"],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({
        declaration: true,
        declarationDir: "dist/cjs", 
        outDir: "dist/cjs",
      }),
      postcss(),
      terser(),
    ],
  },

  
  {
    input: "dist/cjs/src/index.d.ts", 
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
  },
];
