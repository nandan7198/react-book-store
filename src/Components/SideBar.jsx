export default function SideBar() {
  return (
    <>
      <div class="relative flex flex-col bg-clip-border bg-slate-100 text-gray-700 h-[calc(100vh-2rem)] shadow w-full max-w-[20rem] p-4">
        <div class="mb-2 p-4">
          <h5 class="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-gray-900 flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              class="h-5 w-5"
            >
              <path
                fill-rule="evenodd"
                d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
                clip-rule="evenodd"
              ></path>
            </svg>
            Products
          </h5>
        </div>
      </div>
    </>
  );
}
