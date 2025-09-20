import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "relative inline-flex items-center justify-center py-[1px] overflow-hidden rounded-lg group transition-colors duration-300 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "",
        hero: "",
        neural: "",
        outline: "",
        ghost: "",
        secondary: "",
        neon: "",
        "neon-outline": "",
        glow: "",
      },
      size: {
        default: "",
        sm: "",
        lg: "",
        icon: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
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
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      >
        <div
          className={cn(
            "absolute w-[300%] h-[50%] bottom-[-11px] right-[-250%] rounded-full animate-star-movement-bottom z-0",
            "opacity-50"
          )}
          style={{
            background: `radial-gradient(circle, ${color}, transparent 10%)`,
            animationDuration: "6s",
          }}
        />
        <div
          className={cn(
            "absolute w-[300%] h-[50%] top-[-10px] left-[-250%] rounded-full animate-star-movement-top z-0",
            "opacity-50"
          )}
          style={{
            background: `radial-gradient(circle, ${color}, transparent 10%)`,
            animationDuration: "6s",
          }}
        />
        <div className={cn(
          "relative z-10 border text-foreground text-sm font-medium py-2 px-4 rounded-lg",
          "inline-flex items-center justify-center gap-2 whitespace-nowrap",
          "bg-gradient-to-b from-background/90 to-muted/90 border-border/40",
          "group-hover:border-primary/60 transition-colors duration-300"
        )}>
          {children}
        </div>
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
