export interface StyleProperties {
    [key: string]: string | number;
  }
  
  export interface AnimationConfig {
    duration: number;
    delay?: number;
    ease?: string;
  }
  
  export interface MotionProps {
    initial: Record<string, unknown>;
    animate: Record<string, unknown>;
    transition: AnimationConfig;
  }