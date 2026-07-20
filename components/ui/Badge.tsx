export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full bg-bg-2 px-5 py-2 text-body-16 font-semibold text-primary">
      {children}
    </span>
  );
}
