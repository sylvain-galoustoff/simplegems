// vite.config.ts
import { defineConfig } from "file:///D:/npm/vitejs-lib-config/node_modules/vite/dist/node/index.js";
import react from "file:///D:/npm/vitejs-lib-config/node_modules/@vitejs/plugin-react/dist/index.mjs";
import dts from "file:///D:/npm/vitejs-lib-config/node_modules/vite-plugin-dts/dist/index.mjs";
import { libInjectCss } from "file:///D:/npm/vitejs-lib-config/node_modules/vite-plugin-lib-inject-css/dist/index.js";
import path from "path";
var __vite_injected_original_dirname = "D:\\npm\\vitejs-lib-config";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    libInjectCss(),
    dts({
      include: "src/lib",
      // Chemin vers les fichiers sources TypeScript
      outDir: "dist/lib",
      // Répertoire de sortie pour les fichiers .d.ts
      rollupTypes: true,
      copyDtsFiles: true
    })
  ],
  build: {
    lib: {
      entry: path.resolve(__vite_injected_original_dirname, "src/lib/index.ts"),
      // Point d'entrée de la bibliothèque
      name: "MyLib",
      // Nom global pour les utilisateurs UMD
      fileName: (format) => `my-lib.${format}.js`,
      // Nom du fichier de sortie
      formats: ["es", "umd"]
    },
    rollupOptions: {
      // Assurez-vous d'exclure les dépendances externes de la bibliothèque
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM"
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxucG1cXFxcdml0ZWpzLWxpYi1jb25maWdcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXG5wbVxcXFx2aXRlanMtbGliLWNvbmZpZ1xcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovbnBtL3ZpdGVqcy1saWItY29uZmlnL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3RcIjtcbmltcG9ydCBkdHMgZnJvbSBcInZpdGUtcGx1Z2luLWR0c1wiO1xuaW1wb3J0IHsgbGliSW5qZWN0Q3NzIH0gZnJvbSBcInZpdGUtcGx1Z2luLWxpYi1pbmplY3QtY3NzXCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIHJlYWN0KCksXG4gICAgbGliSW5qZWN0Q3NzKCksXG4gICAgZHRzKHtcbiAgICAgIGluY2x1ZGU6IFwic3JjL2xpYlwiLCAvLyBDaGVtaW4gdmVycyBsZXMgZmljaGllcnMgc291cmNlcyBUeXBlU2NyaXB0XG4gICAgICBvdXREaXI6IFwiZGlzdC9saWJcIiwgLy8gUlx1MDBFOXBlcnRvaXJlIGRlIHNvcnRpZSBwb3VyIGxlcyBmaWNoaWVycyAuZC50c1xuICAgICAgcm9sbHVwVHlwZXM6IHRydWUsXG4gICAgICBjb3B5RHRzRmlsZXM6IHRydWUsXG4gICAgfSksXG4gIF0sXG4gIGJ1aWxkOiB7XG4gICAgbGliOiB7XG4gICAgICBlbnRyeTogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCJzcmMvbGliL2luZGV4LnRzXCIpLCAvLyBQb2ludCBkJ2VudHJcdTAwRTllIGRlIGxhIGJpYmxpb3RoXHUwMEU4cXVlXG4gICAgICBuYW1lOiBcIk15TGliXCIsIC8vIE5vbSBnbG9iYWwgcG91ciBsZXMgdXRpbGlzYXRldXJzIFVNRFxuICAgICAgZmlsZU5hbWU6IChmb3JtYXQpID0+IGBteS1saWIuJHtmb3JtYXR9LmpzYCwgLy8gTm9tIGR1IGZpY2hpZXIgZGUgc29ydGllXG4gICAgICBmb3JtYXRzOiBbXCJlc1wiLCBcInVtZFwiXSxcbiAgICB9LFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIC8vIEFzc3VyZXotdm91cyBkJ2V4Y2x1cmUgbGVzIGRcdTAwRTlwZW5kYW5jZXMgZXh0ZXJuZXMgZGUgbGEgYmlibGlvdGhcdTAwRThxdWVcbiAgICAgIGV4dGVybmFsOiBbXCJyZWFjdFwiLCBcInJlYWN0LWRvbVwiXSxcbiAgICAgIG91dHB1dDoge1xuICAgICAgICBnbG9iYWxzOiB7XG4gICAgICAgICAgcmVhY3Q6IFwiUmVhY3RcIixcbiAgICAgICAgICBcInJlYWN0LWRvbVwiOiBcIlJlYWN0RE9NXCIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBZ1EsU0FBUyxvQkFBb0I7QUFDN1IsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sU0FBUztBQUNoQixTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFVBQVU7QUFKakIsSUFBTSxtQ0FBbUM7QUFPekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sYUFBYTtBQUFBLElBQ2IsSUFBSTtBQUFBLE1BQ0YsU0FBUztBQUFBO0FBQUEsTUFDVCxRQUFRO0FBQUE7QUFBQSxNQUNSLGFBQWE7QUFBQSxNQUNiLGNBQWM7QUFBQSxJQUNoQixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsS0FBSztBQUFBLE1BQ0gsT0FBTyxLQUFLLFFBQVEsa0NBQVcsa0JBQWtCO0FBQUE7QUFBQSxNQUNqRCxNQUFNO0FBQUE7QUFBQSxNQUNOLFVBQVUsQ0FBQyxXQUFXLFVBQVUsTUFBTTtBQUFBO0FBQUEsTUFDdEMsU0FBUyxDQUFDLE1BQU0sS0FBSztBQUFBLElBQ3ZCO0FBQUEsSUFDQSxlQUFlO0FBQUE7QUFBQSxNQUViLFVBQVUsQ0FBQyxTQUFTLFdBQVc7QUFBQSxNQUMvQixRQUFRO0FBQUEsUUFDTixTQUFTO0FBQUEsVUFDUCxPQUFPO0FBQUEsVUFDUCxhQUFhO0FBQUEsUUFDZjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
