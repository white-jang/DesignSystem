import run from "@designsystem/esbuild-config";
import pkg from "./package.json" assert { type: "json" };

run({ pkg });
