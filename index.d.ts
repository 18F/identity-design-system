export * from '@uswds/uswds/js';

/** Lifecycle shared by the net-new NDS behaviors (mirrors the USWDS behavior interface). */
export interface NDSBehavior {
  on(root?: ParentNode): void;
  off(): void;
}

export const inputOtp: NDSBehavior;
export const inputSsn: NDSBehavior;
export const phoneInput: NDSBehavior;
