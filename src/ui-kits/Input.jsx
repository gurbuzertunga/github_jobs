export default function Input({ icon, isButton }) {
  return (
    <div className="flex flex-1 justify-center items-center relative">
      <div className='absolute left-28 z-10 text-gray-500'>{icon}</div>
          <input className='py-4 mx-24 pl-10 w-full main-search rounded' type="text" placeholder="Title,companies,expertise or benefits" />
      {isButton && <button className="text-white bg-blue-700 py-2 px-12 absolute right-0 mr-28 rounded">Search</button>}
    </div>
  );
}
