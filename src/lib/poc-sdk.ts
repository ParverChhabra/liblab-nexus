// MoodyOS SDK Integration - Real Implementation
// Based on the actual POC SDK from output/typescript

import { 
  PocSdk as RealPocSdk, 
  SdkConfig,
  Environment 
} from '../../output/typescript/src/index';

// Re-export types and interfaces from the real SDK
export type { SdkConfig };
export { Environment };
export type PocSdkConfig = SdkConfig;

// Create our wrapper class that extends the real SDK
export class PocSdk extends RealPocSdk {
  constructor(config: PocSdkConfig) {
    // Use the real SDK constructor with proper environment setup
    super({
      ...config,
      baseUrl: config.baseUrl || config.environment || Environment.DEFAULT,
      timeoutMs: config.timeoutMs || 30000,
    });
  }
}

export default PocSdk;