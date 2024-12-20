import React from "react";
import { cn, type BaseProps } from "@ajk-ui/core";
import { useTheme } from "@ajk-ui/theme-utils";

interface VariantStyles {
  card: string;
  title: string;
  badge?: string;
  features?: string;
  content?: string;
  description?: string;
}

export interface CardProps extends BaseProps {
  variant?: "default" | "product" | "service" | "testimonial" | "pricing";
  image?: string;
  title?: string;
  link?: string;
  titleLines?: number;
  subtitle?: string;
  description?: string;
  descriptionLines?: number;
  footer?: React.ReactNode;
  badge?: string;
  price?: string;
  features?: string[];
  author?: {
    name: string;
    title?: string;
    avatar?: string;
  };
  aspectRatio?: "1:1" | "4:3" | "16:9";
  hover?: "none" | "lift" | "border" | "shadow";
  layout?: "vertical" | "horizontal";
}

export function Card({
  variant = "default",
  image,
  title,
  titleLines = 2,
  subtitle,
  description,
  descriptionLines = 2,
  footer,
  badge,
  price,
  features,
  author,
  aspectRatio = "4:3",
  hover = "none",
  layout = "vertical",
  className,
  children,
  ...props
}: CardProps) {
  const { theme } = useTheme();

  const baseStyles = {
    card: "overflow-hidden rounded-lg bg-white relative",
    image: "w-full object-cover",
    content: "p-6",
    title: cn(
      "font-semibold",
      "line-clamp-1", // Default para compatibilidad
      titleLines > 0 && [
        "display-webkit-box",
        "-webkit-box-orient-vertical",
        "overflow-hidden",
        `line-clamp-${titleLines}`,
        `-webkit-line-clamp-${titleLines}`,
      ]
    ),
    description: cn(
      "mt-2 text-gray-600",
      "line-clamp-2", // Default para compatibilidad
      descriptionLines > 0 && [
        "display-webkit-box",
        "-webkit-box-orient-vertical",
        "overflow-hidden",
        `line-clamp-${descriptionLines}`,
        `-webkit-line-clamp-${descriptionLines}`,
      ]
    ),
    subtitle: "text-sm text-gray-500",
    footer: "mt-4",
    badge: "absolute top-4 right-4 rounded-full px-3 py-1 text-sm font-medium",
    price: "text-2xl font-bold",
    features: "mt-4 space-y-2",
    author: "mt-6 flex items-center",
    avatar: "h-10 w-10 rounded-full object-cover",
    authorInfo: "ml-3",
  };

  const aspectRatioStyles = {
    "1:1": "aspect-square",
    "4:3": "aspect-[4/3]",
    "16:9": "aspect-[16/9]",
  };

  const hoverStyles = {
    none: "",
    lift: "transition-transform duration-300 hover:-translate-y-1",
    border: "transition-colors duration-300 hover:border-primary-500",
    shadow: "transition-shadow duration-300 hover:shadow-lg",
  };

  const layoutStyles = {
    vertical: "flex flex-col",
    horizontal: "flex flex-col md:flex-row md:items-center",
  };

  const variantStyles: Record<string, VariantStyles> = {
    default: {
      card: "border",
      title: "text-xl",
    },
    product: {
      card: "border",
      title: "text-lg md:text-sm",
      badge: "bg-green-100 text-xs text-green-800 top-2 right-2",
      content: "p-3",
      description: "text-sm",
    },
    service: {
      card: "border-0 shadow-sm",
      title: "text-xl",
    },
    testimonial: {
      card: "border bg-gray-50",
      title: "text-lg italic",
    },
    pricing: {
      card: "border text-center",
      title: "text-2xl",
      features: "divide-y",
    },
  };

  const currentVariantStyles = variantStyles[variant] || variantStyles.default;

  return (
    <div
      className={cn(
        baseStyles.card,
        currentVariantStyles.card,
        hoverStyles[hover],
        layoutStyles[layout],
        className
      )}
      style={
        {
          "--card-bg": theme.colors.background,
          "--card-border": theme.colors.primary,
        } as React.CSSProperties
      }
    >
      {/* Image */}
      {image && (
        <div
          className={cn(
            layout === "horizontal" ? "md:w-1/3" : "w-full",
            aspectRatioStyles[aspectRatio]
          )}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          {...props}
        />
      )}

      {/* Content */}
      <div
        className={cn(
          baseStyles.content,
          variantStyles.product.content,
          layout === "horizontal" && "md:w-2/3"
        )}
      >
        <div {...props}>
          {badge && (
            <span className={cn(baseStyles.badge, currentVariantStyles.badge)}>
              {badge}
            </span>
          )}

          {title && (
            <h3 className={cn(baseStyles.title, currentVariantStyles.title)}>
              {title}
            </h3>
          )}

          {subtitle && <p className={baseStyles.subtitle}>{subtitle}</p>}

          {price && variant === "pricing" && (
            <div className={baseStyles.price}>{price}</div>
          )}

          {description && (
            <p
              className={cn(
                baseStyles.description,
                variantStyles.product.description
              )}
            >
              {description}
            </p>
          )}

          {features && variant === "pricing" && (
            <ul
              className={cn(baseStyles.features, currentVariantStyles.features)}
            >
              {features.map((feature, index) => (
                <li key={index} className="py-2">
                  {feature}
                </li>
              ))}
            </ul>
          )}

          {author && variant === "testimonial" && (
            <div className={baseStyles.author}>
              {author.avatar && (
                <img
                  src={author.avatar}
                  alt={author.name}
                  className={baseStyles.avatar}
                />
              )}
              <div className={baseStyles.authorInfo}>
                <div className="font-medium">{author.name}</div>
                {author.title && (
                  <div className="text-sm text-gray-500">{author.title}</div>
                )}
              </div>
            </div>
          )}
        </div>

        {children}

        {footer && <div className={baseStyles.footer}>{footer}</div>}
      </div>
    </div>
  );
}
