export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 bg-white shadow-md">
      <h1 className="text-2xl font-bold text-blue-600">
        EduVerse
      </h1>

      <ul className="hidden md:flex gap-6 font-medium">
        <li>Home</li>
        <li>About</li>
        <li>Programs</li>
        <li>Contact</li>
      </ul>

      <button className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition">
        Apply Now
      </button>
    </nav>
  );
}