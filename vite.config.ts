import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    libInjectCss(),
    dts({
      include: "src/lib", // Chemin vers les fichiers sources TypeScript
      outDir: "dist/lib", // Répertoire de sortie pour les fichiers .d.ts
      rollupTypes: true,
      copyDtsFiles: true,
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/lib/index.ts"), // Point d'entrée de la bibliothèque
      name: "MyLib", // Nom global pour les utilisateurs UMD
      fileName: (format) => `simplegems.${format}.js`, // Nom du fichier de sortie
      formats: ["es", "umd"],
    },
    rollupOptions: {
      // Assurez-vous d'exclure les dépendances externes de la bibliothèque
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
