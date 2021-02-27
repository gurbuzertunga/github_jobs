export default function Input({ icon, isButton }) {
  return (
    <div className="flex justify-center items-center relative">
      <div className='-mx-5 z-10'>{icon}</div>
      <input className='py-4 px-10 pr-24 w-' type="text" placeholder="Title,companies,expertice or benefits" />
      {isButton && <button className="text-white bg-blue-700 py-2 px-12 absolute right-0">Search</button>}
    </div>
  );
}
