export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto max-w-7xl px-4 py-8 text-center text-sm text-muted-foreground sm:px-6 lg:px-8">
        <p>&copy; {new Date().getFullYear()} AssistoWeb. All rights reserved.</p>
        <p className="mt-1">AI-Powered Solutions for Modern Businesses.</p>
      </div>
    </footer>
  );
}
