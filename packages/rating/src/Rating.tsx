import { cn } from "@ajk-ui/core";
import { FC } from "react";

interface RatingProps {
  average: number;
  className?: string;
}

export const Rating: FC<RatingProps> = ({ average, className }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <div className={cn("w-5 h-5", className)}>
          <svg
            width="85"
            height="81"
            viewBox="0 0 85 81"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cn(
              "w-full h-full",
              `${i < Math.floor(average) ? "fill-yellow-400" : "fill-gray-300"}`
            )}
          >
            <path d="M63.9269 80.7032C62.9269 80.7032 61.8253 80.4024 60.8253 79.9024L42.0283 70.004L23.2273 79.9024C21.0281 81.1016 18.3289 80.9024 16.3289 79.4024C14.3289 77.9024 13.3289 75.504 13.7273 73.004L17.3289 52.004L2.02785 37.102C0.227052 35.4028 -0.472148 32.8012 0.328652 30.4028C1.12945 28.0044 3.12945 26.3012 5.62945 25.9028L26.7315 22.8012L36.1299 3.6992C37.2315 1.3984 39.5283 0 42.0283 0C44.5283 0 46.8291 1.3984 47.9267 3.6992L57.3251 22.8012L78.4271 25.9028C80.9271 26.3012 82.9271 28.0044 83.7279 30.4028C84.5287 32.8012 83.8294 35.4028 82.0287 37.102L66.8297 52.004L70.4313 73.004C70.8297 75.504 69.8297 77.9024 67.8297 79.4024C66.6305 80.2032 65.3292 80.7032 63.9269 80.7032Z" />
          </svg>
        </div>
      ))}
    </div>
  );
};
