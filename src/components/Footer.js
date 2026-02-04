function Footer() {
  return (
    <footer className="bg-black text-white px-8 py-12 mt-16">
      <div className="flex flex-col md:flex-row justify-between gap-6">
        <p>© 2025 Positivus. All rights reserved.</p>

        <div className="flex gap-2">
          <input
            type="email"
            placeholder="Email address"
            className="px-4 py-2 rounded text-black"
          />
          <button className="bg-lime-300 px-4 py-2 rounded font-semibold">
            Subscribe
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
