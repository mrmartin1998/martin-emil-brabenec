export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-base-100">
      {/* Navbar will go here */}
      <main className="flex-grow container-custom">{children}</main>
      {/* Footer will go here */}
    </div>
  );
} 