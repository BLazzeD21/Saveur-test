interface BookingDetailProps extends React.ComponentPropsWithoutRef<'div'> {
  label: string;
}

export const BookingDetail = ({ label, children }: BookingDetailProps) => {
  return (
    <div className="flex gap-2">
      <span className="ext-muted-foreground font-medium">{label}: </span>
      <span className="">{children}</span>
    </div>
  );
};
