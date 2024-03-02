export default function SideBar({ names, onProductClick }) {
  return (
    <>
      <div className="relative flex flex-col bg-clip-border text-gray-700 h-[100vh] shadow w-full max-w-[20rem] p-4  bg-gradient-to-r from-cyan-950 to-blue-950">
        <div className="mb-2 p-4">
          <h5
            onClick={() => onProductClick(null)}
            className="block cursor-pointer antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-sky-100 flex justify-center items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
                clipRule="evenodd"
              ></path>
            </svg>
            Products
          </h5>
          <div className="pt-6">
            {names.map((name, index) => (
              <div className="mt-8" key={index}>
                <button
                  className="relative inline cursor-pointer text-sky-50 text-xl font-medium focus:outline-none before:bg-violet-600  before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100"
                  onClick={() => onProductClick(name)}
                >
                  {name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
