"use client";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { AnimatePresence, motion } from "framer-motion";

interface Logo {
  name: string;
  id: number;
  src: any; // Changed to any to support imported static images
}

interface LogoColumnProps {
  logos: Logo[];
  index: number;
  currentTime: number;
}

const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// --- NEW LOGIC TO PREVENT DUPLICATES ---
const distributeLogos = (allLogos: Logo[], columnCount: number): Logo[][] => {
  if (allLogos.length < columnCount) {
    console.error("LogoCarousel requires at least as many unique logos as columnCount to ensure uniqueness.");
    // Fallback for safety, though it may have duplicates
    const columns: Logo[][] = Array.from({ length: columnCount }, () => []);
    allLogos.forEach((logo, index) => {
        columns[index % columnCount].push(logo);
    });
    return columns;
  }

  const logoPool = shuffleArray([...allLogos]);
  const columns: Logo[][] = Array.from({ length: columnCount }, () => []);
  const numRows = allLogos.length;

  for (let i = 0; i < numRows; i++) {
    const rowLogos = new Set<number>();
    const row: Logo[] = [];

    for (let j = 0; j < columnCount; j++) {
      let nextLogo;
      let attempts = 0;
      do {
        if (logoPool.length === 0) {
          logoPool.push(...shuffleArray([...allLogos]));
        }
        // Prevent infinite loops in unlikely scenarios
        if (attempts > allLogos.length) {
            logoPool.push(...shuffleArray([...allLogos]));
        }
        nextLogo = logoPool.shift()!;
        attempts++;
      } while (rowLogos.has(nextLogo.id));

      row.push(nextLogo);
      rowLogos.add(nextLogo.id);
    }

    for (let k = 0; k < columnCount; k++) {
      columns[k].push(row[k]);
    }
  }

  return columns;
};
// --- END OF NEW LOGIC ---


const LogoColumn: React.FC<LogoColumnProps> = React.memo(
  ({ logos, index, currentTime }) => {
    const cycleInterval = 2000;
    const columnDelay = index * 200;
    const adjustedTime =
      (currentTime + columnDelay) % (cycleInterval * logos.length);
    const currentIndex = Math.floor(adjustedTime / cycleInterval);
    const currentLogo = useMemo(
      () => logos[currentIndex],
      [logos, currentIndex]
    );

    return (
      <motion.div
        className="relative h-20 w-28 overflow-hidden md:h-24 md:w-48"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: index * 0.1,
          duration: 0.5,
          ease: "easeOut",
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={`${currentLogo.id}-${currentIndex}`}
            className="absolute inset-0 flex items-center justify-center"
            initial={{ y: "10%", opacity: 0, filter: "blur(8px)" }}
            animate={{
              y: "0%",
              opacity: 1,
              filter: "blur(0px)",
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
                mass: 1,
                bounce: 0.2,
                duration: 0.5,
              },
            }}
            exit={{
              y: "-20%",
              opacity: 0,
              filter: "blur(6px)",
              transition: {
                type: "tween",
                ease: "easeIn",
                duration: 0.3,
              },
            }}
          >
            <img
              src={currentLogo.src}
              alt={currentLogo.name}
              className="h-20 w-auto max-h-[75%] max-w-[75%] object-contain grayscale transition-all duration-300 hover:grayscale-0 md:h-24"
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>
    );
  }
);

interface LogoCarouselProps {
  columnCount?: number;
  logos: Logo[];
}

export function LogoCarousel({
  columnCount = 4,
  logos,
}: LogoCarouselProps) {
  const [logoSets, setLogoSets] = useState<Logo[][]>([]);
  const [currentTime, setCurrentTime] = useState(0);

  const updateTime = useCallback(() => {
    setCurrentTime((prevTime) => prevTime + 100);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(updateTime, 100);
    return () => clearInterval(intervalId);
  }, [updateTime]);

  useEffect(() => {
    if (logos.length > 0) {
      const distributedLogos = distributeLogos(logos, columnCount);
      setLogoSets(distributedLogos);
    }
  }, [logos, columnCount]);

  return (
    <div className="flex justify-center space-x-4">
      {logoSets.map((columnLogos, index) => (
        <LogoColumn
          key={index}
          logos={columnLogos}
          index={index}
          currentTime={currentTime}
        />
      ))}
    </div>
  );
}
