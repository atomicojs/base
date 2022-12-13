if (import.meta?.hot?.on) {
  import.meta.hot.on("vite:afterUpdate", () => location.reload());
}
