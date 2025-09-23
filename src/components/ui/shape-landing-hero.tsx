"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const HeroGeometric = ({
  className,
  badge,
  title1,
  title2,
}: {
  className?: string;
  badge?: string;
  title1?: string;
  title2?: string;
}) => {
  return (
    <div
      className={cn(
        "relative w-full min-h-[550px] md:min-h-[700px] flex items-center justify-center overflow-hidden bg-background p-4",
        className
      )}
    >
      <div className="relative z-10 text-center">
        {badge && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="inline-block px-4 py-2 mb-6 text-sm font-semibold tracking-wider uppercase bg-primary/10 text-primary rounded-full"
          >
            {badge}
          </motion.div>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
          // THIS IS THE FIX: text-foreground will adapt to your theme
          className="text-5xl font-extrabold tracking-tight text-foreground md:text-7xl"
        >
          {title1}{" "}
          {/* THIS IS THE FIX: text-primary will use your theme's accent color */}
          <span className="text-primary">{title2}</span>
        </motion.h1>
      </div>
      <div className="absolute inset-0 z-0">
        <div
          className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"
        />
      </div>
    </div>
  );
};
