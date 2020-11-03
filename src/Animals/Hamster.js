import React from "react";
import Svg, { Path } from "svgs";

const Hamster = (props) => (
  <Svg
  className="icon"
  viewBox="0 0 1024 1024"
  width={64}
  height={64}
  {...props}
>
  <Path
    d="M745.6 860.4c-18.1-4.1-32.6-14.5-25.7-34.7 6.2-18.1 24.7-25.3 38.3-40.3 39-42.9 27.8-119.8 13.5-173.6-5.7-21.2-18.2-51.5-37.9-64.7 1 .6 2 .8 2.9.8 25.3 0 38-188.8 31.1-245.3C761 224.4 697.7 183 697.7 183s5.9-74.4-14.9-89.6c-2.8-2.1-6.6-3-10.9-3-26.8 0-77.7 35.7-89.4 69.3-22.6-27.1-58.2-36-92.5-36-43.2 0-84.6 14-96 23.5 0 0-55.6-31.3-84.6-31.3-4.1 0-7.7.6-10.5 2.1-8.1 9.5-23.1 79.9 6.5 96.1-5.1 5.1-40.8 62.9-35.7 93.5 0 0 3.1 233.7 30.3 235.4h-.2c-10 0-21.8 45.6-24.3 53-19.2 56.8-46.4 153.5 5.5 202 14.9 14 33.7 23.1 47.7 38.1 16.2 17.3-4.4 28.2-20.3 34.3-59.2 22.8-49.3 57.8-32.3 62.5 1.1.3 2.8.5 5 .5 30.3 0 156.5-28.8 236-28.8 81.7 0 168.7 15.1 235 27 5.5 1 10.6 1.4 15.2 1.4 51.7.2 51.5-56.1-21.7-72.6z"
    fill="#FFF"
  />
  <Path d="M800.4 872.2c-12.2-11.5-30-20.2-51.7-25.1-8.1-1.8-14.1-5-16.1-8.5-.4-.7-1.7-3 .2-8.5 2.7-7.8 9.5-13.1 18.1-19.9 5.5-4.4 11.8-9.4 17.5-15.6 19.7-21.7 29.9-52.6 30.3-91.8.3-27.7-4.4-59.5-13.8-94.5-3.4-12.6-12.1-39.8-28.9-59.3 4-6.4 8.8-18.2 13.6-42.3 3.8-19.1 7.1-43.8 9.5-71.3 4.6-52.2 5.5-107.3 2.3-134.2-3.1-34.7-17.1-68-40.7-96.4-11.3-13.6-22.3-23.1-29-28.3.3-7.6.7-20-.1-33.3-1.8-32.4-8.4-51.7-20.8-60.7-5.1-3.7-11.5-5.6-18.9-5.6-15.9 0-37.8 9.3-58.5 24.8-14.4 10.8-26.4 23.2-34.5 35.6-22-17.7-52.3-27-88.9-27-37.4 0-76.6 10.2-96.6 21.3-17-9-57.9-29.1-84-29.1-6.5 0-12.1 1.2-16.7 3.6-1.6.8-3 1.9-4.1 3.2-9.9 11.5-17.8 52.5-12.7 80.4 2.2 12.3 6.6 20.8 11.4 26.8-4.9 7.8-10.8 18.4-15.9 29.2-12.4 26.3-17.5 47.5-15.3 63.3.1 7.9 1.1 62.6 5 116.9 2.5 34.6 5.6 62.3 9.3 82.4 2.4 12.7 4.9 22.4 7.9 29.6.8 1.9 1.6 3.6 2.4 5.2-2.1 3.6-4.3 8-6.5 13.5-4.3 10.7-7.9 23-10.1 30.3-.6 2.2-1.2 4.2-1.5 5-9.2 27.2-21.7 67.9-24.6 107.5-3.5 48.1 7.8 84.7 33.7 108.9 7.4 6.9 15.4 12.6 23.2 18.1 8.8 6.3 17.2 12.2 24 19.4 1.2 1.2 1.7 2.1 2 2.6-1 1.3-4.7 4.9-17.3 9.7-18.2 7-32.1 15.8-41.4 26.1-6.2 6.9-13.4 18-12.7 32 .7 14.5 9.9 26.7 23 30.3 2.4.7 5.1 1 8.6 1 12.7 0 38.4-4.2 71-9.6 49.4-8.1 117-19.2 165-19.2 77 0 157.1 13.2 232.6 26.8 6.1 1.1 12 1.7 17.6 1.7 13.2 0 24.8-3.2 33.5-9.2 9.2-6.4 14.9-15.7 16.1-26.3 1.7-14-4.2-27.8-16.5-39.5zm-48.2 59.5c-66.3-11.9-153.4-27-235-27-79.4 0-205.7 28.8-236 28.8-2.2 0-3.8-.1-5-.5-17-4.7-26.9-39.7 32.3-62.5 15.9-6.1 36.5-17.1 20.3-34.3-14-15-32.8-24.1-47.7-38.1-51.9-48.5-24.7-145.3-5.5-202 2.5-7.4 14.2-53 24.3-53h.2c-27.2-1.7-30.3-235.4-30.3-235.4-5.1-30.6 30.6-88.4 35.7-93.5-29.6-16.2-14.6-86.6-6.5-96.1 2.8-1.4 6.4-2.1 10.5-2.1 29 0 84.6 31.3 84.6 31.3 11.4-9.5 52.7-23.5 96-23.5 34.4 0 69.9 8.9 92.5 36 11.7-33.6 62.6-69.3 89.4-69.3 4.4 0 8.1.9 10.9 3 20.8 15.1 14.9 89.6 14.9 89.6s63.3 41.3 70.1 119.5c7 56.5-5.8 245.3-31.1 245.3-1 0-1.9-.3-2.9-.8 19.7 13.2 32.3 43.6 37.9 64.7 14.4 53.8 25.5 130.7-13.5 173.6-13.6 15-32.1 22.2-38.3 40.3-6.9 20.2 7.6 30.6 25.7 34.7 73.2 16.5 73.4 72.8 21.8 72.8-4.7 0-9.8-.5-15.3-1.5z" />
  <Path
    d="M253.3 743.9c-8.6-48.7 8.8-108.1 22.2-147.8 2.5-7.4 14.4-53.6 24.5-53-9-.6-15.4-26.7-19.9-61.4 51.5 14.9 84.7 32.9 65.1 51.4-40.4 37.9-71.1 52 6.5 123.1 17.8 16.2-57.9 63.9-98.4 87.7zm506.6 39.7c-10.5-8.4-20.7-17.1-29.3-26.1-43.8-45.3 10.4-111.2-60.2-151.9-83.2-47.9 25.4-108.7 93.9-158.5-5.9 58-16.4 107.8-30.5 99.9 19.8 13.2 32.3 43.6 37.9 64.7 14.2 53.1 25.3 128.7-11.8 171.9zM314.3 818c-.7 1.3-1.4 2.6-2.2 3.8-10.5-7.8-21.6-14.8-31.1-23.7-7.7-7.2-13.7-15.5-18.2-24.6 41.8-8.4 80.9-9.2 51.5 44.5zM768 399.2c-221.6 5.1-275.5-138.9-321.2-271.1 44-8.6 103.2-7.2 135.7 31.7 13.6-39.1 80.1-81 100.3-66.3 20.8 15.1 14.9 89.5 14.9 89.5s63.3 41.4 70.1 119.5c2.5 20.3 2.5 57.3.2 96.7zM379.3 919.4c-51.1 8.2-94.2 16.2-103.1 13.7-17-4.7-26.9-39.7 32.3-62.5 13.2-5.1 29.6-13.5 25.6-26.1 33 5.7 52.4 26.6 45.2 74.9zm372.9 12.3c-16-2.9-33.3-5.9-51.4-8.9-25-21.8-26.8-45.9 22-74.5 5 6.1 13.4 10 22.9 12.1 79.7 18 72.8 83.2 6.5 71.3z"
    fill="#FF9640"
  />
  <Path d="M262.8 907.6h-.6c-1.7 0-3-1.4-3-3s1.3-3 3-3h.6c40.4 0 66.1-23.9 66.4-24.2 1.2-1.1 3.1-1.1 4.2.1 1.1 1.2 1.1 3.1-.1 4.2-1.1 1.2-27.7 25.9-70.5 25.9zm546.6 10c-1.4 0-2.6-.8-3.2-2.2-8-20.6-36.5-36.8-62.7-27.7-1.8.6-3.7-.3-4.3-2.1-.6-1.8.3-3.7 2.1-4.3 24.5-8.5 60.2 3.2 71.3 31.7.7 1.8-.2 3.7-1.9 4.4-.5.1-.9.2-1.3.2zM798 929.3h-.1c-29.5-.9-56.4-20.8-57.5-21.6-1.5-1.1-1.8-3.3-.7-4.8s3.3-1.8 4.8-.7c.3.2 26.3 19.4 53.6 20.3 1.9.1 3.4 1.6 3.3 3.5-.1 1.8-1.6 3.3-3.4 3.3z" />
  <Path
    d="M456.9 478.2c-15.1 11.1-48.7 80.1 31.1 129.4 4.1 2.9 6.7 5.6 8.3 7.6 1.6 2 4.6 2.3 6.5.5 11.2-10.2 42.9-42.7 50.7-90.9 9.6-58.9-3.2-41.4-3.2-41.4s-24.1 16.2-51.5-10.2c-27.5 16.2-41.9 5-41.9 5z"
    fill="#FFC239"
  />
  <Path d="M499.7 620.3h-.6c-2.2-.2-4.2-1.2-5.5-2.9-1.9-2.3-4.4-4.6-7.5-6.9-23.1-14.3-51-39.4-52.6-77.6-1.1-27.6 12.1-50.5 21.4-57.4 1.2-.9 2.9-.9 4.1 0 .6.4 13.3 9.4 38-5.2 1.3-.8 3-.6 4.1.5 23.3 22.5 43.5 12.1 46.8 10.1 1.9-2.3 4.8-4.1 7.8-2.9 4 1.7 7.6 6.8 1.1 47.4-7.9 48.5-38.8 81.1-51.8 92.9-1.5 1.3-3.3 2-5.3 2zm-42.5-138c-7 6.8-17.9 26.5-17 50.2.8 19.5 10 47.8 49.4 72.2.1 0 .1.1.2.1 3.7 2.6 6.7 5.4 9 8.2.3.3.6.4.8.4.2 0 .5 0 .8-.3 9.7-8.8 41.9-41.2 49.6-88.9 4.3-26.7 3.7-35.9 3-38.9l-.1.1c-.2.3-.5.6-.9.8-.3.2-25.6 16.6-53.9-8.9-21.5 12.1-35.5 7.7-40.9 5zM264.9 926.4c-1.2 0-2.4-.7-2.8-1.9-.6-1.5.2-3.3 1.7-3.9 1.9-.7 45.8-17 68.2-9.9 1.6.5 2.5 2.2 2 3.8-.5 1.6-2.2 2.4-3.8 2-20.5-6.5-63.9 9.6-64.3 9.8-.3.1-.6.1-1 .1z" />
  <Path
    d="M363.2 273.2a26.5 36.8 0 1053 0 26.5 36.8 0 10-53 0z"
    fill="#FFF"
  />
  <Path d="M373.3 273.2a19 26.4 0 1038 0 19 26.4 0 10-38 0z" />
  <Path
    d="M392.9 279.1a4.2 5.8 0 108.4 0 4.2 5.8 0 10-8.4 0zM604.9 273.2a26.5 36.8 0 1053 0 26.5 36.8 0 10-53 0z"
    fill="#FFF"
  />
  <Path d="M615 273.2a19 26.4 0 1038 0 19 26.4 0 10-38 0z" />
  <Path
    d="M634.6 279.1a4.2 5.8 0 108.4 0 4.2 5.8 0 10-8.4 0zM417.8 594.9c40.9 57.9 68.5-5.2 68.5-19.9 0-6.5-1.4-10.3-5.4-10.3-5.6 0-9.3 4.5-9.3 4.5s3.3-4.9 3.2-9.5c-.1-1.6-.4-4.5-5.9-4.2-7 .4-9.9 4.4-9.9 4.4s7.6-7.7-1.4-14.4c-11.4-8.7-67.6 10-39.8 49.4z"
    fill="#FFF"
  />
  <Path d="M451.1 624c-10 0-23-5.7-37.5-26.1-11.8-16.7-11.3-33.4 1.4-45.7 12.8-12.4 36.2-17.9 45.6-10.8 4.1 3.1 5.7 6.5 6.2 9.2.6-.1 1.2-.1 1.8-.2 3.6-.2 6.4.6 8.4 2.5 2.7 2.4 2.8 5.6 2.8 6.6v.1h1c2.7 0 5.1.9 6.8 2.7 3.3 3.3 3.7 8.5 3.7 12.7 0 11.5-12.2 41.4-32.3 47.8-2.2.7-4.9 1.2-7.9 1.2zM422 591.9c12.2 17.3 23.7 24.4 34.1 21.1 15.3-4.9 25.2-30.3 25.2-38 0-3.1-.4-4.6-.6-5.1-2.9.2-5.1 2.6-5.1 2.7-1.7 2.1-4.8 2.4-7 .8-2.2-1.6-2.7-4.7-1.1-6.9.8-1.2 2.1-3.8 2.3-5.8h-.5c-3.6.2-5.4 1.7-6 2.2l-.6.6c-1.9 1.9-4.9 2-6.9.3s-2.4-4.8-.8-6.9c.1-.1.3-.4.7-.8.5-.7 1.4-2 1.3-3.3-.1-1-.9-2.1-2.3-3.2-3.4-2.6-21.4-.6-32.4 10-9.3 8.7-9.3 19.6-.3 32.3z" />
  <Path
    d="M564.5 609.8c54.4-45.4-10.7-67.9-25.4-66.7-6.5.5-10.1 2.2-9.8 6.2.5 5.5 5.2 8.9 5.2 8.9s-5.2-2.9-9.7-2.4c-1.6.2-4.5.8-3.7 6.2.9 6.9 5.2 9.5 5.2 9.5s-8.2-6.9-14.3 2.5c-7.7 12.2 15.5 66.7 52.5 35.8z"
    fill="#FFF"
  />
  <Path d="M542.6 624.2c-7.2 0-14.2-2.7-20.4-8.2-13.4-11.7-20.8-34.7-14.5-44.6 2.8-4.3 6-6.2 8.7-6.9-.1-.6-.2-1.1-.3-1.8-.5-3.6.1-6.5 1.8-8.6 2.2-2.9 5.3-3.2 6.4-3.4h.1c0-.3-.1-.6-.1-1-.2-2.7.5-5.1 2.1-7 3-3.6 8.2-4.4 12.3-4.7 11.4-.9 42.2 8.8 50.2 28.3 4.1 10.1 3.8 26.5-21.1 47.3-8.4 7.1-17 10.6-25.2 10.6zm-22.8-49.9h-.4c-1 .2-2 1-3 2.6-2.3 3.6 1.2 21.4 12.6 31.4 9.5 8.3 20.4 7.5 32.4-2.5 16.2-13.6 22.4-25.6 18.2-35.7-6.1-14.9-32.3-22.7-40-22-3.1.3-4.5.7-5.1 1 .5 2.9 3 4.9 3.1 4.9 2.2 1.6 2.8 4.6 1.4 6.9-1.5 2.3-4.5 3-6.8 1.7-1.3-.7-3.9-1.8-5.9-1.8 0 .1 0 .3.1.5.5 3.5 2.1 5.3 2.7 5.8.4.3.6.4.7.5 2 1.7 2.4 4.7.8 6.9-1.6 2.2-4.5 2.7-6.8 1.3-.1-.1-.4-.3-.9-.6-.8-.3-2-.9-3.1-.9z" />
  <Path
    d="M430.4 368.3c-11.2-33-37.9-62.1-73-79.9-38.2-19.3-82.6-23.3-125-11.2-22.1 6.3-41.9 21.9-57.4 45.1-14.8 22.1-24.3 49.6-26.9 77.2-2.3 24.9 1.1 48.5 9.9 68.4 9.7 21.9 25.4 38.4 46.6 49 61.2 30.6 133.7 31 168.5.9 2-1.7 4.6-2.1 6.9-1.2l54.6-144.2c-2-.6-3.6-2.1-4.2-4.1z"
    fill="#FFF"
  />
  <Path d="M443.2 364c-12.4-36.3-41.5-68.2-79.8-87.6-41.3-20.9-89.2-25.2-134.9-12.2-25.2 7.2-47.7 24.7-65 50.7-16 24-26.4 53.6-29.1 83.5-5.5 59.2 18.4 108.1 63.9 130.8 31.8 15.9 67.7 24.7 101 24.7h.2c33.9 0 63.1-9.1 82.3-25.7 2.8-2.5 3.2-6.8.7-9.6-.8-.9-1.7-1.5-2.7-1.9-2.3-.9-4.9-.5-6.9 1.2-34.8 30.1-107.2 29.7-168.5-.9-21.2-10.6-36.9-27.1-46.6-49-8.8-19.9-12.2-43.5-9.9-68.4 2.6-27.7 12.1-55.1 26.9-77.2 15.5-23.2 35.4-38.9 57.4-45.1 42.4-12.1 86.9-8.1 125 11.2 35.2 17.8 61.8 46.9 73 79.9.7 2 2.2 3.5 4 4.2 1.4.5 3 .6 4.6.1 3.7-1.3 5.6-5.2 4.4-8.7z" />
  <Path
    d="M658.7 517.4c49 31.9 100.6 29.6 162.5-7.3 35.8-21.4 57.1-67.3 55.4-119.8-1.6-51.4-25.1-94.9-61.3-113.4-37.2-19.1-72.8-23.4-105.8-12.7-39.5 12.7-74.1 46.4-100.2 97.3-.9 1.7-2.3 2.9-4 3.4L653 516.6c1.9-.6 4-.4 5.7.8z"
    fill="#FFF"
  />
  <Path d="M890.3 389.8c-1.8-56.3-28.1-104.3-68.7-125.1-40.5-20.8-79.6-25.4-116.2-13.6-43 13.9-80.4 49.9-108.1 104.1-1.7 3.3-.4 7.4 3 9.1 1.7.8 3.5.9 5.1.4 1.7-.5 3.2-1.7 4-3.4 26-50.9 60.6-84.6 100.2-97.3 33-10.6 68.6-6.4 105.8 12.7 36.2 18.6 59.7 62 61.3 113.4 1.7 52.5-19.6 98.5-55.4 119.8-61.9 36.9-113.5 39.3-162.5 7.3-1.8-1.2-3.9-1.4-5.7-.8-1.5.5-2.8 1.4-3.7 2.8-2 3.1-1.2 7.4 2 9.4 24.9 16.2 50.8 24.3 78.1 24.3 31 0 63.8-10.4 98.8-31.4 40-23.7 63.8-74.3 62-131.7z" />
  <Path d="M616.8 388.6c-.4 0-.8-.1-1.2-.2-1.8-.6-2.7-2.6-2-4.4.2-.5 4.9-13.2 17-26.1 11.2-11.9 31.1-26.4 62.5-27.4 1.8-.1 3.4 1.4 3.5 3.3s-1.4 3.4-3.3 3.5c-55.5 1.7-73.1 48.5-73.3 49-.5 1.4-1.8 2.3-3.2 2.3z" />
  <Path d="M640.2 374.2c-.6 0-1.2-.2-1.8-.5-1.6-1-2.1-3-1.2-4.7.6-1 14.8-24 48.5-26.8 1.9-.2 3.5 1.2 3.7 3.1.2 1.9-1.2 3.5-3.1 3.7-30.1 2.5-42.7 22.7-43.2 23.5-.6 1.1-1.8 1.7-2.9 1.7zM506.6 421.3c-13 0-20.4-5.1-28.1-10.4-2.8-1.9-5.6-3.9-8.9-5.7-1.6-.9-2.2-3-1.3-4.6.9-1.6 3-2.2 4.6-1.3 3.5 2 6.5 4 9.4 6 10.5 7.2 18.7 12.9 42.8 6.2 1.8-.5 3.7.6 4.2 2.4.5 1.8-.6 3.7-2.4 4.2-8 2.3-14.7 3.2-20.3 3.2z" />
  <Path d="M526.9 490.7c-14.7 0-21.2-6.2-27.2-11.9-.6-.5-1.1-1-1.6-1.5-25.3 12.3-36 7.7-47.4 2.7-2.9-1.2-5.9-2.5-9.2-3.6-1.6-.5-2.6-2.1-2.3-3.7 1.5-11.2-20.6-56.6-54.3-80.3-1.5-1.1-1.9-3.2-.8-4.7 1.1-1.5 3.2-1.9 4.7-.8 20.5 14.4 35.1 35.3 41.9 46.5 9.1 14.9 14.8 29 15.3 37.4 2.7 1 5.1 2 7.4 3 11.1 4.8 19.8 8.5 43.8-3.6 1.2-.6 2.7-.4 3.8.5 1.2 1.1 2.4 2.2 3.5 3.3 8.2 7.8 16 15.2 48.2 5.3 2.9-22 9-67 35.6-72.4 1.8-.4 3.6.8 4 2.7.4 1.8-.8 3.6-2.7 4-22.1 4.5-27.6 46.7-30.3 67l-.2 1.8c-.2 1.3-1.1 2.4-2.3 2.8-12.8 3.9-22.4 5.5-29.9 5.5zM641.2 169.4c-.5 0-1.1-.1-1.6-.4-1.7-.9-2.3-2.9-1.4-4.6 7.9-15.1 7.9-15.1 22.2-36 1.1-1.5 3.2-1.9 4.7-.9 1.5 1.1 1.9 3.2.9 4.7-14.1 20.5-14.1 20.5-21.7 35.3-.7 1.2-1.9 1.9-3.1 1.9zM346.9 184.8c-1.6 0-3.1-1.2-3.4-2.9-3.9-23.8-8.6-24.9-31.4-29.9l-2.4-.5c-1.8-.4-3-2.2-2.6-4.1s2.2-3 4.1-2.6l2.4.5c23.4 5.2 32.1 7.1 36.7 35.5.3 1.9-1 3.6-2.8 3.9-.3.1-.4.1-.6.1z" />
  <Path d="M487.9 533.2c-1.6 0-3.1-1.2-3.4-2.9-3.3-20.5-6.7-41.8 11.9-58.6 1.4-1.3 3.5-1.2 4.8.2 1.3 1.4 1.2 3.5-.2 4.8-15.8 14.3-13 32-9.7 52.5.3 1.9-1 3.6-2.8 3.9-.2.1-.4.1-.6.1z" />
</Svg>
);

export default Hamster;
