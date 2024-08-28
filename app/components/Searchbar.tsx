export default function Searchbar() {
  return (
    <div className="hidden lg:block w-96 p-4">
      <div className="relative">
        <input
          type="text"
          placeholder="Search Critter"
          className="w-full rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-dark-text-dark-accent-green"
        />
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5 absolute left-3 top-2.5 text-gray-500"
          fill="currentColor"
        >
          <g>
            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
          </g>
        </svg>
      </div>

      <div className="rounded-lg mt-4 p-4 bg-dark-bg-primary">
        <h2 className="font-bold text-xl mb-4">Who to follow</h2>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <img
              src="https://via.placeholder.com/40"
              alt="Profile"
              className="w-10 h-10 rounded-full mr-3"
            />
            <div>
              <p className="font-bold">User Name</p>
              <p className="text-gray-500">@username</p>
            </div>
          </div>
          <button className="bg-white text-black font-bold py-1 px-4 rounded-full transition-all hover:bg-gray-200">
            Follow
          </button>
        </div>
        <a
          href="#"
          className="text-dark-accent-green transition-all hover:underline"
        >
          Show more
        </a>
      </div>
    </div>
  );
}
