import { ArrowIcon, ButtonLink } from "@/components/ui/Button";
import { site } from "@/lib/site";

type BookingButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  withArrow?: boolean;
};

/**
 * Único punto donde vive el enlace de agendamiento. Todos los botones de
 * agendar abren el calendario en una pestaña nueva.
 */
export function BookingButton({
  children,
  variant = "primary",
  className = "",
  withArrow = true,
}: BookingButtonProps) {
  return (
    <ButtonLink
      href={site.bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
      variant={variant}
      className={className}
    >
      {children}
      {withArrow && <ArrowIcon />}
    </ButtonLink>
  );
}
