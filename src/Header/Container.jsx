export default function Container({ children }) {
  return (
    <div className="fixed w-full top-0 z-50 bg-gradient-to-b from-black/60 to-black/0 pb-10">
      <nav className="container flex items-center justify-between py-6">{children}</nav>
    </div>
  )
}
