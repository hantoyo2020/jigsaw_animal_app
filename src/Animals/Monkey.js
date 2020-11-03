import React from "react";
import Svg, { Path } from "svgs";

const Monkey = (props) => (
  <Svg
  className="icon"
  viewBox="0 0 1024 1024"
  width={64}
  height={64}
  {...props}
>
  <Path
    d="M959.4 234.6v80.6c0 39.3-32 71.2-71.2 71.2-12.4 0-24-3.2-34.2-8.8l-2 461.7c0 53.4-43.6 97-97.2 97H634.6c-18.3 0-35.6-7.1-48.6-20.1-9.3-9.3-15.6-20.8-18.4-33.3-12.5-2.8-24-9.1-33.3-18.4-13-13-20.1-30.2-20.1-48.6 0-18.3 7.2-35 19-47.4-12.4-4.3-24.8-9.2-37.1-14.6v107.7c0 41.2-33.5 74.7-74.7 74.7-33.2 0-61.5-21.9-71.1-51.9-11.2-3.6-21.6-9.9-30-18.3-14.1-14.1-21.9-32.9-21.9-52.8V600.7c-28.4-37.9-47.4-77.6-55.3-115.6-37.9-25.5-61.6-68.1-63.3-113.8-.1-.1-.1-.2-.1-.2-5 .8-10.2 1.2-15.5 1.2-54.6 0-99.1-44.4-99.1-99.1 0-54.6 44.5-99.1 99.1-99.1 2.5 0 4.9.1 7.3.3 32.1-52.8 89.1-85.1 151.6-85.1s119.4 32.3 151.6 85.1c2.4-.2 4.8-.3 7.4-.3 54.6 0 99.1 44.5 99.1 99.1 0 15.5-3.6 30.5-10.4 44.1 29 10.8 57.5 24.7 85.1 41.2 19.6 11.8 38.3 24.6 55.8 38.5V234.6c0-68.3 55.6-123.9 123.9-123.9 68.3 0 123.8 55.6 123.8 123.9z"
    fill="#633"
  />
  <Path
    d="M922.4 234.6v80.6c0 18.8-15.3 34.2-34.2 34.2s-34.1-15.3-34.1-34.2v-80.6c0-10.2-8.3-18.5-18.5-18.5s-18.5 8.3-18.5 18.5v279.9c-17.3-29.3-40.3-58.1-68.3-85.2V234.6c0-47.9 39-86.8 86.8-86.8s86.8 39 86.8 86.8zM816.9 630.4l-2 208.7c0 33.1-27 60.1-60.1 60.1H634.6c-8.5 0-16.4-3.3-22.4-9.3-6-5.9-9.2-13.9-9.2-22.3v-1c.5-17.1 14.4-30.6 31.6-30.6h97.8c10.2 0 18.5-8.3 18.5-18.5s-8.3-18.5-18.5-18.5c-49 0-88.9-39.9-88.9-88.9 0-10.2-8.3-18.5-18.5-18.5s-18.5 8.3-18.5 18.5c0 13 2 25.4 5.6 37.2h-18.2c-32.4-7-65.4-18.5-97.8-34v-73c0-10.2-8.3-18.5-18.5-18.5s-18.5 8.3-18.5 18.5v221.4c0 20.7-16.9 37.6-37.6 37.6-20.7 0-37.6-16.9-37.6-37.6V606.1c0-10.2-8.3-18.5-18.5-18.5-8.9 0-16.2 6.2-18.1 14.5-5.5-6.2-10.7-12.5-15.6-18.9-20-25.8-35-52.4-44.4-78.3 11.7 3 23.7 4.6 35.9 4.6 77.3 0 140.6-61.6 143.3-138.2.1-.1.1-.1.1-.2 5 .8 10.2 1.2 15.5 1.2 23.9 0 46.9-8.7 64.8-24.2 30.6 10.6 60.8 24.7 90 42.2 29.6 17.7 56.7 38.1 80.7 60.5 60.3 56.4 97 123 99.3 179.6z"
    fill="#CA5F38"
  />
  <Path
    d="M746.5 567.2c4.8 9 1.4 20.3-7.6 25.1-2.8 1.5-5.8 2.2-8.7 2.2-6.6 0-13-3.6-16.4-9.8-12.7-23.7-32-48-55.7-70.3-19.5-18.3-41.8-34.9-66.1-49.5-8.8-5.3-11.6-16.6-6.4-25.4 5.3-8.8 16.6-11.6 25.4-6.4 26.5 15.9 50.9 34.2 72.3 54.2 27.2 25.4 48.4 52.3 63.2 79.9z"
    fill="#633"
  />
  <Path
    d="M643.2 798.9h-8.7c-30 0-55.4 18.9-64.8 45.7-3.4-1.5-6.6-3.7-9.3-6.4-6-6-9.2-13.9-9.2-22.4 0-17.4 14.2-31.6 31.6-31.6h7.2c14.8 3.1 45.1 6.7 45.6 6.7h.3c2.3 2.7 4.8 5.4 7.3 8zM544 273.1c0 15.3-5.6 30-15.8 41.4-10.7 11.9-25.6 19.2-41.4 20.4 2.5-5.9 4.7-12 6.5-18.1 4.8-16.2 7.2-33.1 7.2-50.1 0-18.6-3-37.1-8.7-54.8 29.6 4.7 52.2 30.4 52.2 61.2z"
    fill="#CA5F38"
  />
  <Path
    d="M463.5 266.7c0 13.5-1.9 26.8-5.7 39.6-5 17.1-13.3 33-24.5 47.1-2.6 3.3-4 7.3-4 11.5 0 .6 0 1.1.1 1.6-.3 58.5-47.9 105.9-106.4 105.9-19 0-37.6-5.1-53.9-14.6-32.2-19-52.3-53.9-52.5-91.3 0-.5.1-1 .1-1.5 0-4.2-1.4-8.2-4-11.5-3.3-4.2-6.4-8.6-9.2-13.2-13.7-22.1-20.9-47.5-20.9-73.6 0-10.5 1.1-20.7 3.4-30.7 33.7 39.8 83.6 63.5 137.1 63.5s103.3-23.7 137-63.5c2.2 9.9 3.4 20.2 3.4 30.7z"
    fill="#F9DCB2"
  />
  <Path
    d="M393.7 313.2c8.7 0 15.7 7 15.7 15.8 0 8.7-7 15.7-15.7 15.7s-15.8-7-15.8-15.7c.1-8.8 7.1-15.8 15.8-15.8z"
    fill="#633"
  />
  <Path
    d="M323 126.2c50.1 0 95.7 26.3 121 69.1-26 41.6-71.5 67.1-120.9 67.1-49.5 0-95-25.5-121-67 25.2-42.9 70.8-69.2 120.9-69.2z"
    fill="#CA5F38"
  />
  <Path
    d="M361.3 386.1c6.5 6.5 6.5 17.1 0 23.6l-5.8 5.8c-3.3 3.3-7.5 4.9-11.8 4.9-4.3 0-8.5-1.6-11.8-4.9-6.5-6.5-6.5-17.1 0-23.6l5.8-5.8c6.5-6.5 17.1-6.5 23.6 0z"
    fill="#633"
  />
  <Path
    d="M346.7 654.9V840l-.3-.3c-7.1-7.1-11-16.5-11-26.6V643.8c3.7 3.7 7.5 7.5 11.3 11.1z"
    fill="#CA5F38"
  />
  <Path
    d="M314.2 391.9c6.5 6.5 6.5 17.1 0 23.6-3.2 3.3-7.5 4.9-11.8 4.9s-8.5-1.6-11.8-4.9l-5.8-5.8c-6.5-6.5-6.5-17.1 0-23.6s17.1-6.5 23.6 0l5.8 5.8zm-61.8-78.7c8.7 0 15.7 7 15.7 15.8 0 8.7-7 15.7-15.7 15.7s-15.8-7-15.8-15.7c0-8.8 7.1-15.8 15.8-15.8z"
    fill="#633"
  />
  <Path
    d="M145.5 266.7c0 23.6 4.7 46.8 13.7 68.3-31.9-2.5-57.2-29.3-57.2-61.8 0-30.8 22.6-56.5 52.1-61.2-5.6 17.5-8.6 36.1-8.6 54.7z"
    fill="#CA5F38"
  />
</Svg>
);

export default Monkey;
