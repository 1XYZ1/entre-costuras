declare module "react-scroll" {
  import * as React from "react";

  interface ScrollLinkProps {
    to: string;
    spy?: boolean;
    smooth?: boolean;
    offset?: number;
    duration?: number;
    delay?: number;
    isDynamic?: boolean;
    onSetActive?: (to: string) => void;
    onSetInactive?: (to: string) => void;
    ignoreCancelEvents?: boolean;
    hashSpy?: boolean;
    saveHashHistory?: boolean;
    containerId?: string;
    className?: string;
    style?: React.CSSProperties;
    activeClass?: string;
    activeStyle?: React.CSSProperties;
    [key: string]: any;
  }

  interface ScrollElementProps {
    name: string;
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    [key: string]: any;
  }

  interface ScrollEventProps {
    delay?: number;
    duration?: number;
    smooth?: boolean;
    offset?: number;
    containerId?: string;
    [key: string]: any;
  }

  export const Link: React.ComponentType<ScrollLinkProps>;
  export const Element: React.ComponentType<ScrollElementProps>;
  export const Events: {
    scrollEvent: {
      register: (eventName: string, callback: (event: any) => void) => void;
      remove: (eventName: string) => void;
    };
  };
  export const scrollSpy: {
    update: () => void;
  };
  export const scroller: {
    scrollTo: (target: string, options?: ScrollEventProps) => void;
  };
  export const animateScroll: {
    scrollToTop: (options?: ScrollEventProps) => void;
    scrollToBottom: (options?: ScrollEventProps) => void;
    scrollTo: (y: number, options?: ScrollEventProps) => void;
    scrollMore: (y: number, options?: ScrollEventProps) => void;
  };
}
