import React from "react";

const ExperianceTimeLine = () => {
  //Todo : Implement work ex in a time line
  // return (
  //   <div className="p-4 bg-white shadow-md mt-4">
  //     <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
  //       <div className="w-full md:w-1/2 mb-4 md:mb-0">
  //         <h3 className="text-xl font-semibold mb-2">
  //           Senior Software Engineer
  //         </h3>
  //         <p className="text-gray-600">Euclid Innovations</p>
  //         <p className="text-gray-600">10/2022 - 08/2023</p>
  //       </div>
  //       <div className="w-full md:w-1/2">
  //         <p className="text-gray-700">lorem ipsum</p>
  //       </div>
  //     </div>
  //     <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
  //       <div className="w-full md:w-1/2 mb-4 md:mb-0">
  //         <h3 className="text-xl font-semibold mb-2">Software Engineer</h3>
  //         <p className="text-gray-600">Zuddl</p>
  //         <p className="text-gray-600">04/2021 - 07/2022</p>
  //       </div>
  //       <div className="w-full md:w-1/2">
  //         <p className="text-gray-700">(Insert description of work here)</p>
  //       </div>
  //     </div>
  //     {/* Add more experiences as needed */}
  //   </div>
  // );
  return (
    <div className="flex items-center justify-center mt-2">
      <ol>
        <li class="border-l-2 border-purple-600">
          <div class="md:flex flex-start">
            <div className="bg-purple-600 w-6 h-6 flex items-center justify-center rounded-full -ml-3.5">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                class="text-white w-3 h-3"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"
                ></path>
              </svg>
            </div>
            <div class="block p-6 rounded-lg shadow-lg bg-white max-w-md ml-6 mb-10">
              <div class="flex justify-between mb-4">
                <a
                  href="#!"
                  class="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm"
                >
                  New Web Design
                </a>
                <a
                  href="#!"
                  class="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm"
                >
                  04 / 02 / 2022
                </a>
              </div>
              <p class="text-gray-700 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                scelerisque diam non nisi semper, et elementum lorem ornare.
                Maecenas placerat facilisis mollis. Duis sagittis ligula in
                sodales vehicula.
              </p>
            </div>
          </div>
        </li>
        <li class="border-l-2 border-green-600">
          <div class="md:flex flex-start">
            <div class="bg-green-600 w-6 h-6 flex items-center justify-center rounded-full -ml-3.5">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                class="text-white w-3 h-3"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"
                ></path>
              </svg>
            </div>
            <div class="block p-6 rounded-lg shadow-lg bg-white max-w-md ml-6 mb-10">
              <div class="flex justify-between mb-4">
                <a
                  href="#!"
                  class="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm"
                >
                  21 000 Job Seekers
                </a>
                <a
                  href="#!"
                  class="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm"
                >
                  12 / 01 / 2022
                </a>
              </div>
              <p class="text-gray-700 mb-6">
                Libero expedita explicabo eius fugiat quia aspernatur autem
                laudantium error architecto recusandae natus sapiente sit nam
                eaque, consectetur porro molestiae ipsam an deleniti.
              </p>
            </div>
          </div>
        </li>
        <li class="border-l-2 border-green-600">
          <div class="md:flex flex-start">
            <div class="bg-green-600 w-6 h-6 flex items-center justify-center rounded-full -ml-3.5">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                class="text-white w-3 h-3"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"
                ></path>
              </svg>
            </div>
            <div class="block p-6 rounded-lg shadow-lg bg-white max-w-md ml-6 mb-10">
              <div class="flex justify-between mb-4">
                <a
                  href="#!"
                  class="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm"
                >
                  Awesome Employers
                </a>
                <a
                  href="#!"
                  class="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm"
                >
                  21 / 12 / 2021
                </a>
              </div>
              <p class="text-gray-700 mb-6">
                Voluptatibus temporibus esse illum eum aspernatur, fugiat
                suscipit natus! Eum corporis illum nihil officiis tempore.
                Excepturi illo natus libero sit doloremque, laborum molestias
                rerum pariatur quam ipsam necessitatibus incidunt, explicabo.
              </p>
            </div>
          </div>
        </li>
      </ol>
    </div>
  );
};

export default ExperianceTimeLine;
