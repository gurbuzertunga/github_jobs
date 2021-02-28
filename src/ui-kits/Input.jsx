export default function Input({ icon, isButton,placeholder }) {
  return (
    <div className="flex flex-1 justify-center items-center relative">
      <div className="absolute left-4 z-10 text-gray-500">{icon}</div>
      <input
        className="py-4 pl-10 w-full main-search rounded"
        type="text"
        placeholder={placeholder}
      />
      {isButton && (
        <button className="text-white bg-blue-700 py-2 px-12 absolute right-0 mr-12 rounded">
          Search
        </button>
      )}
    </div>
  );
}
