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

// Use the real SDK directly
export class PocSdk extends RealPocSdk {
  constructor(config: PocSdkConfig) {
    super({
      ...config,
      baseUrl: config.baseUrl || 'https://api.moodyos.com',
      timeoutMs: config.timeoutMs || 30000,
    });
  }
}

export default PocSdk;