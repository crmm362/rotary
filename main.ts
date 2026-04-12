import "$std/dotenv/load.ts";
import { type Manifest } from "$fresh/server.ts";
import { start } from "$fresh/server.ts";
import manifest from "./fresh.gen.ts";
import config from "./fresh.config.ts";

await start(manifest as Manifest, config);
