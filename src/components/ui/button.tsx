import * as React from "react";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    const color = "hsl(var(--primary))"; // Use theme's primary color

    return (
      <Comp
        className={cn(
          "relative inline-flex items-center justify-center py-[1px] overflow-hidden rounded-lg group",
          className
        )}
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
          "inline-flex items-center justify-center gap-2 whitespace-nowrap", // <-- This line is the fix
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

export { Button };
