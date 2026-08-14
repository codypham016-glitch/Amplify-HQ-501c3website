import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  size?: "narrow" | "page" | "wide";
  className?: string;
};

const sizeClass: Record<NonNullable<ContainerProps["size"]>, string> = {
  narrow: "max-w-[56rem]",
  page: "max-w-[80rem]",
  wide: "max-w-[90rem]",
};

export function Container({ children, size = "page", className = "" }: ContainerProps) {
  return (
    <div className={`mx-auto w-full px-6 sm:px-8 lg:px-12 ${sizeClass[size]} ${className}`}>
      {children}
    </div>
  );
}
