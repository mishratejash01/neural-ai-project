import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 transition-smooth overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-neon hover:shadow-neon-lg",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-border bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        neon: "gradient-neon text-primary-foreground font-semibold shadow-neon hover:shadow-neon-lg hover:scale-105 transition-glow border border-primary/20",
        "neon-outline": "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground shadow-glow hover:shadow-neon transition-glow",
        tech: "bg-surface-dark border border-border text-foreground hover:border-primary/50 shadow-card hover:shadow-neon transition-glow backdrop-blur-sm",
        glow: "bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 hover:border-primary/50 shadow-glow hover:shadow-neon transition-glow",
        hero: "gradient-neon text-primary-foreground font-semibold shadow-neon hover:shadow-neon-lg hover:scale-105 transition-glow",
        neural: "bg-card border border-border text-foreground hover:border-primary/50 shadow-card hover:shadow-neon transition-glow backdrop-blur-sm",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-lg px-8 text-lg font-semibold",
        xl: "h-14 rounded-lg px-12 text-xl font-bold",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    const color = "hsl(var(--primary))";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        <div
          className={cn(
            "absolute w-[300%] h-[50%] bottom-[-11px] right-[-250%] rounded-full animate-star-movement-bottom z-0 opacity-30"
          )}
          style={{
            background: `radial-gradient(circle, ${color}, transparent 10%)`,
            animationDuration: "6s",
          }}
        />
        <div
          className={cn(
            "absolute w-[300%] h-[50%] top-[-10px] left-[-250%] rounded-full animate-star-movement-top z-0 opacity-30"
          )}
          style={{
            background: `radial-gradient(circle, ${color}, transparent 10%)`,
            animationDuration: "6s",
          }}
        />
        <span className="relative z-10 inline-flex items-center gap-2">
          {children}
        </span>
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
