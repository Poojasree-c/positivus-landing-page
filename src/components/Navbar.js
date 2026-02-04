function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4">
      <h1 className="text-xl font-bold">Positivus</h1>

      <ul className="hidden md:flex gap-8 text-sm">
        <li className="cursor-pointer hover:underline">About</li>
        <li className="cursor-pointer hover:underline">Services</li>
        <li className="cursor-pointer hover:underline">Use Cases</li>
        <li className="cursor-pointer hover:underline">Pricing</li>
        <li className="cursor-pointer hover:underline">Blog</li>
      </ul>

      <button className="border border-black px-5 py-2 rounded-md hover:bg-black hover:text-white transition">
        Request a quote
      </button>
    </nav>
  );
}

export default Navbar;
