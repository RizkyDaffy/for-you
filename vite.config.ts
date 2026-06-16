import { defineConfig as baseDefineConfig } from "@lovable.dev/vite-tanstack-config";

const baseConfig = baseDefineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  nitro: true,
});

export default async (env: any) => {
  const config = await baseConfig(env);
  if (config.plugins) {
    config.plugins = config.plugins.flat().filter((p: any) => {
      if (!p) return true;
      const name = typeof p === "object" && "name" in p ? p.name : "";
      return (
        !name.includes("lovable") &&
        !name.includes("dev-ssr-error-logger") &&
        !name.includes("dev-server-fn-error-logger")
      );
    });
  }
  return config;
};

