export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
        <h1>Hello, World</h1>
        <hr />
        {children}
    </div>
  );
}