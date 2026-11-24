export * from '@uswds/uswds';

/** Lifecycle shared by the net-new NDS behaviors (mirrors the USWDS behavior interface). */
export interface NDSBehavior {
  on(root?: ParentNode): void;
  off(): void;
}

export const inputOtp: NDSBehavior;
export const animatedMedia: NDSBehavior;
export const officialBanner: NDSBehavior;
export const pageFooter: NDSBehavior;
export const progress: NDSBehavior;
export const nativeModal: NDSBehavior;
export const toast: { on(root?: HTMLElement): void; off(root?: HTMLElement): void };
export const popoverMenu: NDSBehavior;
export const ndsFileInput: NDSBehavior;
export const inputSsn: NDSBehavior;
export const phoneInput: NDSBehavior;
export const clipboardButton: NDSBehavior;
export const connectedServices: NDSBehavior;
export const totpSetup: NDSBehavior;
