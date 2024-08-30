// vite.config.ts
import { defineConfig } from "file:///D:/npm/simplegems/node_modules/vite/dist/node/index.js";
import react from "file:///D:/npm/simplegems/node_modules/@vitejs/plugin-react/dist/index.mjs";
import dts from "file:///D:/npm/simplegems/node_modules/vite-plugin-dts/dist/index.mjs";
import { libInjectCss } from "file:///D:/npm/simplegems/node_modules/vite-plugin-lib-inject-css/dist/index.js";
import path from "path";
var __vite_injected_original_dirname = "D:\\npm\\simplegems";
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
      copyDtsFiles: true,
      exclude: ["**/*.stories.tsx"]
    })
  ],
  build: {
    minify: false,
    lib: {
      entry: path.resolve(__vite_injected_original_dirname, "src/lib/index.ts"),
      // Point d'entrée de la bibliothèque
      name: "MyLib",
      // Nom global pour les utilisateurs UMD
      fileName: (format) => `simplegems.${format}.js`,
      // Nom du fichier de sortie
      formats: ["es", "umd"]
    },
    rollupOptions: {
      // Assurez-vous d'exclure les dépendances externes de la bibliothèque
      external: [
        "react",
        "react-dom",
        "@storybook/react",
        "@storybook/addons",
        "@storybook/theming"
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "@storybook/react": "StorybookReact",
          "@storybook/addons": "StorybookAddons",
          "@storybook/theming": "StorybookTheming"
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxucG1cXFxcc2ltcGxlZ2Vtc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcbnBtXFxcXHNpbXBsZWdlbXNcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L25wbS9zaW1wbGVnZW1zL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xyXG5pbXBvcnQgZHRzIGZyb20gXCJ2aXRlLXBsdWdpbi1kdHNcIjtcclxuaW1wb3J0IHsgbGliSW5qZWN0Q3NzIH0gZnJvbSBcInZpdGUtcGx1Z2luLWxpYi1pbmplY3QtY3NzXCI7XHJcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHBsdWdpbnM6IFtcclxuICAgIHJlYWN0KCksXHJcbiAgICBsaWJJbmplY3RDc3MoKSxcclxuICAgIGR0cyh7XHJcbiAgICAgIGluY2x1ZGU6IFwic3JjL2xpYlwiLCAvLyBDaGVtaW4gdmVycyBsZXMgZmljaGllcnMgc291cmNlcyBUeXBlU2NyaXB0XHJcbiAgICAgIG91dERpcjogXCJkaXN0L2xpYlwiLCAvLyBSXHUwMEU5cGVydG9pcmUgZGUgc29ydGllIHBvdXIgbGVzIGZpY2hpZXJzIC5kLnRzXHJcbiAgICAgIHJvbGx1cFR5cGVzOiB0cnVlLFxyXG4gICAgICBjb3B5RHRzRmlsZXM6IHRydWUsXHJcbiAgICAgIGV4Y2x1ZGU6IFtcIioqLyouc3Rvcmllcy50c3hcIl0sXHJcbiAgICB9KSxcclxuICBdLFxyXG4gIGJ1aWxkOiB7XHJcbiAgICBtaW5pZnk6IGZhbHNlLFxyXG4gICAgbGliOiB7XHJcbiAgICAgIGVudHJ5OiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcInNyYy9saWIvaW5kZXgudHNcIiksIC8vIFBvaW50IGQnZW50clx1MDBFOWUgZGUgbGEgYmlibGlvdGhcdTAwRThxdWVcclxuICAgICAgbmFtZTogXCJNeUxpYlwiLCAvLyBOb20gZ2xvYmFsIHBvdXIgbGVzIHV0aWxpc2F0ZXVycyBVTURcclxuICAgICAgZmlsZU5hbWU6IChmb3JtYXQpID0+IGBzaW1wbGVnZW1zLiR7Zm9ybWF0fS5qc2AsIC8vIE5vbSBkdSBmaWNoaWVyIGRlIHNvcnRpZVxyXG4gICAgICBmb3JtYXRzOiBbXCJlc1wiLCBcInVtZFwiXSxcclxuICAgIH0sXHJcbiAgICByb2xsdXBPcHRpb25zOiB7XHJcbiAgICAgIC8vIEFzc3VyZXotdm91cyBkJ2V4Y2x1cmUgbGVzIGRcdTAwRTlwZW5kYW5jZXMgZXh0ZXJuZXMgZGUgbGEgYmlibGlvdGhcdTAwRThxdWVcclxuICAgICAgZXh0ZXJuYWw6IFtcclxuICAgICAgICBcInJlYWN0XCIsXHJcbiAgICAgICAgXCJyZWFjdC1kb21cIixcclxuICAgICAgICBcIkBzdG9yeWJvb2svcmVhY3RcIixcclxuICAgICAgICBcIkBzdG9yeWJvb2svYWRkb25zXCIsXHJcbiAgICAgICAgXCJAc3Rvcnlib29rL3RoZW1pbmdcIixcclxuICAgICAgXSxcclxuICAgICAgb3V0cHV0OiB7XHJcbiAgICAgICAgZ2xvYmFsczoge1xyXG4gICAgICAgICAgcmVhY3Q6IFwiUmVhY3RcIixcclxuICAgICAgICAgIFwicmVhY3QtZG9tXCI6IFwiUmVhY3RET01cIixcclxuICAgICAgICAgIFwiQHN0b3J5Ym9vay9yZWFjdFwiOiBcIlN0b3J5Ym9va1JlYWN0XCIsXHJcbiAgICAgICAgICBcIkBzdG9yeWJvb2svYWRkb25zXCI6IFwiU3Rvcnlib29rQWRkb25zXCIsXHJcbiAgICAgICAgICBcIkBzdG9yeWJvb2svdGhlbWluZ1wiOiBcIlN0b3J5Ym9va1RoZW1pbmdcIixcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUEyTyxTQUFTLG9CQUFvQjtBQUN4USxPQUFPLFdBQVc7QUFDbEIsT0FBTyxTQUFTO0FBQ2hCLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sVUFBVTtBQUpqQixJQUFNLG1DQUFtQztBQU96QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixhQUFhO0FBQUEsSUFDYixJQUFJO0FBQUEsTUFDRixTQUFTO0FBQUE7QUFBQSxNQUNULFFBQVE7QUFBQTtBQUFBLE1BQ1IsYUFBYTtBQUFBLE1BQ2IsY0FBYztBQUFBLE1BQ2QsU0FBUyxDQUFDLGtCQUFrQjtBQUFBLElBQzlCLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUEsSUFDUixLQUFLO0FBQUEsTUFDSCxPQUFPLEtBQUssUUFBUSxrQ0FBVyxrQkFBa0I7QUFBQTtBQUFBLE1BQ2pELE1BQU07QUFBQTtBQUFBLE1BQ04sVUFBVSxDQUFDLFdBQVcsY0FBYyxNQUFNO0FBQUE7QUFBQSxNQUMxQyxTQUFTLENBQUMsTUFBTSxLQUFLO0FBQUEsSUFDdkI7QUFBQSxJQUNBLGVBQWU7QUFBQTtBQUFBLE1BRWIsVUFBVTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsUUFBUTtBQUFBLFFBQ04sU0FBUztBQUFBLFVBQ1AsT0FBTztBQUFBLFVBQ1AsYUFBYTtBQUFBLFVBQ2Isb0JBQW9CO0FBQUEsVUFDcEIscUJBQXFCO0FBQUEsVUFDckIsc0JBQXNCO0FBQUEsUUFDeEI7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
