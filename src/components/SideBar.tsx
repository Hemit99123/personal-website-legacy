import React from "react";

interface Props {
  activeSection: string;
}

const SideBar: React.FC<Props> = ({ activeSection }) => {
  return (
    <div className="hidden fixed lg:flex flex-col justify-center h-screen ml-3">
      {/* Hero Section */}
      <div
        className={`cursor-pointer w-16 h-16 rounded-full border-2 flex justify-center items-center ${activeSection === 'hero' ? 'bg-blue-500' : 'bg-gray-100'}`}
      >
        <svg
          width={20}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke={activeSection === 'hero' ? '#ffffff' : '#949494'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 9.77746V16.2C5 17.8802 5 18.7203 5.32698 19.362C5.6146 19.9265 6.07354 20.3854 6.63803 20.673C7.27976 21 8.11984 21 9.8 21H14.2C15.8802 21 16.7202 21 17.362 20.673C17.9265 20.3854 18.3854 19.9265 18.673 19.362C19 18.7203 19 17.8802 19 16.2V5.00002M21 12L15.5668 5.96399C14.3311 4.59122 13.7133 3.90484 12.9856 3.65144C12.3466 3.42888 11.651 3.42893 11.0119 3.65159C10.2843 3.90509 9.66661 4.59157 8.43114 5.96452L3 12"
          />
        </svg>
      </div>

      {/* About Section */}
      <div
        className={`group cursor-pointer w-16 h-16 rounded-full border-2 flex justify-center items-center duration-300 mt-4 ${activeSection === 'about' ? 'bg-blue-500' : 'bg-gray-100'}`}
      >
        <svg
          className={`block group-hover:hidden ${activeSection === 'about' ? 'block' : 'hidden'}`}
          width={20}
          viewBox="0 0 512 512"
          fill="none"
          stroke="#ffffff"
          strokeWidth="32"
        >
          <path d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s88 41 88 96z" />
          <path d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464H432c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z" />
        </svg>
        
        <svg
          className={`group-hover:block ${activeSection === 'about' ? 'hidden' : 'block'}`}
          width={20}
          viewBox="0 0 512 512"
          fill="none"
          stroke="#949494"
          strokeWidth="32"
        >
          <path d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s88 41 88 96z" />
          <path d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464H432c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z" />
        </svg>
      </div>

      {/* Projects Section */}
      <div
  className={`group cursor-pointer w-16 h-16 rounded-full border-2 flex justify-center items-center duration-300 mt-4 ${activeSection === 'project' ? 'bg-blue-500' : 'bg-gray-100'}`}
>
  <svg
    className={`block group-hover:hidden ${activeSection === 'project' ? 'block' : 'hidden'}`}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="none"
    stroke="#ffffff"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M12 12v10" />
  </svg>

  <svg
    className={`group-hover:block ${activeSection === 'project' ? 'hidden' : 'block'}`}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="none"
    stroke="#949494"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M12 12v10" />
  </svg>
</div>

    </div>
  );
};

export default SideBar;
