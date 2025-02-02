import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";

const ReactCompilerConfig = {
  target: "18",
};

installGlobals();

export default defineConfig({
  ssr: {
    noExternal:
      process.env.NODE_ENV === "production"
        ? [/^@mui\//]
        : [
            /^@mui\//,
            /^remix-utils.*/,
            "@mui/system",
            "@mui/icons-material",
            "@mui/lab",
            "@mui/material",
            "@mui/styles",
            "@mui/x-date-pickers",
          ],
  },
  plugins: [
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
    }),
    react(),
    // react({
    //   babel: {
    //     plugins: [["babel-plugin-react-compiler", ReactCompilerConfig]],
    //   },
    // }),
    tsconfigPaths(),
  ],
});
