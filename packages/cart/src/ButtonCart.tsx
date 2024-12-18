import { cn } from "@ajk-ui/core";
import { useTheme } from "@ajk-ui/theme-utils";

export const ButtonCart = ({
  total,
  className,
  handleClick,
}: {
  total: number;
  className?: string;
  handleClick?: () => void;
}) => {
  const { theme } = useTheme();
  return (
    <button
      type="button"
      onClick={(e) => {
        handleClick?.();
        e.preventDefault();
      }}
      className={cn("flex items-center gap-1")}
    >
      <div className="relative">
        <div className="w-8 ">
          <svg
            className={cn("w-full h-full fill-gray-800", className)}
            width="92"
            height="80"
            viewBox="0 0 92 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3 0C1.3431 0 0 1.34315 0 3C0 4.65685 1.3431 6 3 6H14.9688C19.934 18.2975 24.8247 30.6175 29.75 42.9375L25.2188 53.8437C24.8392 54.753 24.946 55.8494 25.4939 56.6683C26.0419 57.4872 27.0147 58.0041 28 58H78C79.5849 58.022 81.0427 56.5851 81.0427 55C81.0427 53.4149 79.5849 51.9776 78 52H32.5L35.0938 45.8125L83.25 41.9688C84.5105 41.8698 85.6515 40.8878 85.9375 39.6563L91.9375 13.6562C92.3299 11.905 90.7946 9.99415 89 10H23.0312L19.7812 1.875C19.3362 0.77518 18.1864 3e-05 17 0H3ZM25.4375 16H85.2188L80.5625 36.1875L34.9688 39.8125L25.4375 16ZM38 60C32.5127 60 28 64.5126 28 70C28 75.4873 32.5127 80 38 80C43.4873 80 48 75.4873 48 70C48 64.5127 43.4873 60 38 60ZM68 60C62.5127 60 58 64.5127 58 70C58 75.4873 62.5127 80 68 80C73.4873 80 78 75.4873 78 70C78 64.5126 73.4873 60 68 60ZM38 66C40.2447 66 42 67.7553 42 70C42 72.2447 40.2447 74 38 74C35.7555 74 34 72.2446 34 70C34 67.7554 35.7555 66 38 66ZM68 66C70.2445 66 72 67.7554 72 70C72 72.2446 70.2445 74 68 74C65.7553 74 64 72.2447 64 70C64 67.7553 65.7553 66 68 66Z" />
          </svg>
        </div>
        {total > 0 && (
          <div
            className={cn(
              "absolute text-xs right-[-10px] top-[-10px] rounded-full w-5 h-5 flex justify-center items-center z-10 bg-red-500 border border-transparent text-white"
            )}
            style={{
              backgroundColor: theme.colors.primary,
            }}
          >
            {total}
          </div>
        )}
      </div>
      <p className="hidden md:block">Cart</p>
    </button>
  );
};

export default ButtonCart;
