declare module 'locomotive-scroll' {
  export interface LocomotiveScrollOptions {
    el?: HTMLElement | null;
    name?: string;
    offset?: [number, number];
    repeat?: boolean;
    smooth?: boolean;
    smoothMobile?: boolean;
    direction?: string;
    inertia?: number;
    class?: string;
    scrollbarClass?: string;
    scrollingClass?: string;
    draggingClass?: string;
    smoothClass?: string;
    initClass?: string;
    getSpeed?: boolean;
    getDirection?: boolean;
    multiplier?: number;
    firefoxMultiplier?: number;
    touchMultiplier?: number;
    resetNativeScroll?: boolean;
    tablet?: {
      smooth?: boolean;
      direction?: string;
      breakpoint?: number;
    };
    smartphone?: {
      smooth?: boolean;
      direction?: string;
      breakpoint?: number;
    };
  }

  export default class LocomotiveScroll {
    constructor(options?: LocomotiveScrollOptions);
    
    destroy(): void;
    update(): void;
    stop(): void;
    start(): void;
    scrollTo(target: string | HTMLElement, options?: object): void;
    
    on(event: string, func: Function): void;
    off(event: string, func: Function): void;
  }
}