const SideSuggestions = () => (
  <div className="w-1/5 space-y-6 p-4 bg-white shadow-sm">
    <div>
      <h4 className="font-bold mb-2">Recently Viewed</h4>
      <img
        src="https://tse1.mm.bing.net/th?id=OIP.cdRseUzhsYRi6SjQjyYO9gHaE8&pid=Api&P=0&h=180"
        className="rounded w-
        full object-contain"
        alt="recently viewed"
      />
      <p className="text-xs mt-1 text-gray-500">See your browsing history</p>
    </div>
    <div>
      <h4 className="font-bold mb-2">Suggestions for You</h4>
      <img
        src="https://tse1.mm.bing.net/th?id=OIP.vXlDlttGtujHK5tNBmxXvAHaHa&pid=Api&P=0&h=180"
        className="rounded w-full object-contain"
        alt="suggestion"
      />
      <p className="text-xs mt-1 text-gray-500">Watch more</p>
    </div>
  </div>
);
export default SideSuggestions;
