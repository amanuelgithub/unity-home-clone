import React from "react";

export function Footer() {
  return (
    <div>
      <footer className="bg-black text-white py-24">
        <div className="flex flex-col justify-center items-start md:flex-row md:flex-wrap mx-10 md:mx-16">
          <div className="md:w-2/6 flex justify-center items-center gap-1 -mt-10 md:mt-0">
            <svg
              className="w-20 h-20"
              role="img"
              width="133"
              height="48"
              viewBox="0 0 133 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Unity logo</title>
              <path
                fill="#fff"
                d="M53.7 26.1V12.5h5.7v13.8c0 2.3 1.2 3.8 4 3.8 2.6 0 3.9-1.6 3.9-3.9V12.5H73v13.6c0 5.3-3.2 8.5-9.6 8.5-6.5.1-9.7-3.1-9.7-8.5zM75.6 17.7h5.1V20h.1c1.2-1.8 2.8-2.7 5.1-2.7 3.6 0 5.7 2.6 5.7 6.3v10.7h-5.3v-9.7c0-1.7-.9-2.9-2.6-2.9-1.7 0-2.9 1.5-2.9 3.5v9.1h-5.3V17.7zM94.3 11.2h5.3v4.3h-5.3v-4.3zm0 6.5h5.3v16.5h-5.3V17.7zM103.7 29.9V22h-2.2v-4.3h2.2v-5.2h5.1v5.2h3V22h-3v6.8c0 1.3.7 1.6 1.8 1.6h1.2v3.8c-.5.1-1.5.3-2.9.3-3 0-5.2-1-5.2-4.6zM115.1 35.6h1.8c1.5 0 2.2-.6 2.2-1.7 0-.7-.3-1.7-1-3.4l-4.9-12.7h5.5l2.2 7c.5 1.6 1 3.8 1 3.8h.1s.5-2.2 1-3.8l2.2-7h5.3l-5.7 16.7c-1.3 3.9-2.9 5.2-6.2 5.2h-3.4l-.1-4.1z"
              ></path>
              <path
                fill="#ccc"
                d="M42.5 33.6V11.2L23.1 0v8.6l7.6 4.4c.3.2.3.6 0 .7l-9 5.2c-.3.2-.6.1-.8 0l-9-5.2c-.3-.1-.3-.6 0-.7l7.6-4.4V0L0 11.2v22.4-.1.1l7.4-4.3v-8.8c0-.3.4-.5.6-.4l9 5.2c.3.2.4.4.4.7v10.4c0 .3-.4.5-.6.4l-7.6-4.4-7.4 4.3L21.2 48l19.4-11.2-7.4-4.3-7.6 4.4c-.3.2-.6 0-.6-.4V26.1c0-.3.2-.6.4-.7l9-5.2c.3-.2.6 0 .6.4v8.8l7.5 4.2z"
              ></path>
              <path
                fill="#a6a6a6"
                d="m21.2 48 19.4-11.2-7.4-4.3-7.6 4.4c-.3.2-.6 0-.6-.4V26.1c0-.3.2-.6.4-.7l9-5.2c.3-.2.6 0 .6.4v8.8l7.4 4.3V11.2L21.2 23.5V48z"
              ></path>
              <path
                fill="#fff"
                d="M23.1 0v8.6l7.6 4.4c.3.2.3.6 0 .7l-9 5.2c-.3.2-.6.1-.8 0l-9-5.2c-.3-.1-.3-.6 0-.7l7.6-4.4V0L0 11.2l21.2 12.3 21.2-12.3L23.1 0z"
              ></path>
              <path
                fill="#ccc"
                d="m16.9 36.9-7.6-4.4-7.4 4.3L21.3 48V23.5L0 11.2v22.4-.1.1l7.4-4.3v-8.8c0-.3.4-.5.6-.4l9 5.2c.3.2.4.4.4.7v10.4c.1.4-.2.7-.5.5z"
              ></path>
            </svg>

            <span className="text-xl text-gray-400 font-semibold">
              Documentation
            </span>
          </div>
          <div className="md:w-4/6 flex flex-col justify-center md:justify-start text-sm my-8">
            <h3 className="font-semibold">
              Copyright © 2022 Unity Technologies
            </h3>
            <ul className="flex flex-wrap gap-3 text-gray-400 ">
              <li>
                <a href="#">Legal</a>
              </li>
              <li>
                <a href="#">Privacy Policy </a>
              </li>
              <li>
                <a href="#">Terms Of Use</a>
              </li>
              <li>
                <a href="#">Do Not Sell My Personal Information</a>
              </li>
              <li>
                <a href="#">Cookies Settings</a>
              </li>
            </ul>

            <p className="mt-5">
              {`"Unity"`}, Unity logos, and other Unity trademarks are
              trademarks or registered trademarks of Unity Technologies or its
              affiliates in the U.S. and elsewhere (more info here). Other names
              or brands are trademarks of their respective owners.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
