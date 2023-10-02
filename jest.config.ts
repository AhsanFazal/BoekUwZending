/**
 * @see https://jestjs.io/docs/configuration
 */

import type { Config } from "jest"

const config: Config = {
  clearMocks: true,
  preset: "ts-jest"
  // setupFiles: ["./tests/utils/setup.ts"]
}

export default config
