export default function Footer() {
  return (
    <footer className="mt-8 border-t text-sm text-muted-foreground">
      <div className="container mx-auto h-16 flex items-center justify-between gap-4">
        <span> © 2023 - {new Date().getFullYear()} Web3 Infrastructure Foundation</span>
      </div>
    </footer>
  );
}