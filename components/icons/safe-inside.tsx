import { styleVars } from "../../utils/styles/index.css";
import type { IconProps } from "./icon";

export const IconSafeInside = ({ fill = "navy" }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1000 1000"
    fill={styleVars.color[fill]}
  >
    <path d="M19.23 333.46c17.34-6.26 34.43-12.19 51.89-17.83a37.69 37.69 0 011.88 3.62q8.17 21.24 16.29 42.52a19.3 19.3 0 011.47 7c-.06 20.93 0 41.86 0 62.79 0 1.1-.1 2.2-.18 3.64C80.41 440.61 70.15 445.71 60 451a6 6 0 01-1.92.17c-.09-1.74-.24-3.34-.24-4.94 0-8.89-.16-17.78 0-26.67.11-5-1.73-9.31-3.91-13.78a11.86 11.86 0 00-2.29.52c-4.19 2-8.35 4-12.54 5.95a5.28 5.28 0 00-3.1 3.58c-1.86 6.59-3.75 13.09-3.45 20.12.35 8.14.08 16.3.08 24.45 0 6.87.34 8.06 4.13 14.87 1.5.21 2.64-.85 3.86-1.53 8.71-4.89 17.38-9.83 26.12-14.74 1.42-.8 2.92-1.46 4.62-2.3.78 1.64 1.47 2.93 2 4.27l16 38.44a16.46 16.46 0 011.3 6.46Q90.65 554 90.65 602a25 25 0 01-.84 6c-5.72 22-11.54 44-17.25 66.07a12.93 12.93 0 01-3.94 6.45c-13.76 12.94-27.39 26-41.07 39-2.67 2.54-5.38 5-8.32 7.8a37.82 37.82 0 01-2-3.55q-8-18.93-15.93-37.88a16.33 16.33 0 01-1.3-6.41q.08-36.68.05-73.36c0-.55.08-1.1.13-1.84 2.88-3.26 6.66-5.65 10.07-8.46 3.57-3 7.23-5.79 10.85-8.67 3.44-2.72 6.79-5.57 11-8.57.24 2.26.52 3.67.52 5.09v25.56c0 6.07.41 7.4 4.2 13.86a13.81 13.81 0 002.2-1.21c4.19-3.35 8.32-6.79 12.54-10.11a8.82 8.82 0 003.23-5c1.87-7 3.44-13.95 3.1-21.31-.34-7.2-.25-14.45 0-21.66.16-4.88-1.61-9-4-13.32-4.31 2.2-7.78 5.25-11.53 7.87-3.95 2.76-7.76 5.71-11.64 8.55-3.71 2.71-7.23 5.68-11.48 8.32-.92-2.06-1.74-3.68-2.4-5.36-5.12-13.1-10.19-26.23-15.34-39.32a23 23 0 01-1.5-8.62q.08-56.13.06-112.26a26.32 26.32 0 01.72-6.57q8.64-33.31 17.46-66.58c.24-.89.57-1.75.99-3.05zm980.6 7.24v106.92c-.61 0-1.25.27-1.64.06-8.16-4.36-16.28-8.78-24.69-13.34v-15.7c-6.47-3.37-12.75-6.46-19.14-9.32-.44-.19-1.06 0-1.57.07-.69 4.15-.84 53.1-.19 59.53a21 21 0 002.2 1.45 6.38 6.38 0 001.77.26c.94-4.07 0-8.18.66-12.56a7.81 7.81 0 012.47.46c7.69 4.44 15.34 9 23 13.47a6.83 6.83 0 011 1.15c.59 6.27.16 12.92.24 19.55s0 13.34 0 20v39.46c0 6.66.08 13.33 0 20s.45 13.23-.39 20.36c-5.33-2.87-9.19-6.85-13.58-10.08s-8.52-6.51-13-9.92c0-4.11-.14-8.15-.06-12.2 0-2.79-1-4.56-4-5.17-.22.46-.61.89-.61 1.32v58.22L972 631c1.62-.5 1.43-1.53 1.44-2.4.05-3.47.06-6.94.08-10.23a4.1 4.1 0 01.91-.37.92.92 0 01.51.15 21 21 0 011.8 1.29c7.72 6.61 15.44 13.24 23.27 20v105.09a5.63 5.63 0 01-.35 1.4 2.63 2.63 0 01-.67.16.83.83 0 01-.51-.2c-27.73-28.31-56.23-55.8-85.76-81.74-.69-7.74-.49-74.41.21-78.67 2.19 0 3.3 2.27 5.34 2.54 1.19-.27 1.13-1.29 1.16-2.17.07-1.66.05-3.33.05-5V400.18c0-2.2-.08-4.4-.12-6.74-2.29-1.2-4.39-2.3-6.39-3.33-.15-.29-.25-.44-.32-.6a1.32 1.32 0 01-.17-.53q-.08-36.39-.12-72.79c0-1.29 0-2.59.09-3.88a6.31 6.31 0 01.36-1.24c2-.27 3.88.68 5.74 1.31q24.21 8.13 48.38 16.36c8.23 2.81 16.41 5.78 24.59 8.72 2.74 1 5.48 2.13 8.31 3.24zM883.35 640.48c-7.86-5.54-15-10.8-22.4-15.75-15.84-10.63-31.78-21.1-47.67-31.63-.62-.41-1.24-.82-1.88-1.19a3.75 3.75 0 01-2-3.69V528.2c0-1.8-.23-3.66.64-5.75l5.66 1.94c1.22-.57.93-1.6 1-2.45.08-1.47 0-3 0-4.44v-155c0-2.2-.07-4.4-.11-6.83L810 353a8 8 0 01-.49-1.77q-.06-31.95 0-63.91a11.81 11.81 0 01.36-2.1c1.72-1.1 3.37-.4 4.93 0q19.17 4.52 38.32 9.18c9.16 2.26 18.29 4.66 27.43 7 .88.23 1.74.55 2.82.89.62 1.72 1.3 3.42 1.84 5.16 5.32 17.15 10.59 34.32 16 51.45a28.73 28.73 0 011.32 8.72v227.85a19.39 19.39 0 01-1.84 8.56c-4.93 10.36-9.67 20.81-14.51 31.22-.84 1.57-1.74 3.15-2.83 5.23zM865.62 553c2.91-5.11 4.37-9.6 4.36-14.87q-.24-72.79 0-145.58c0-6.47-1.47-12.42-3.36-18.42a4.32 4.32 0 00-2.88-3.08c-4-1.35-8-2.84-12-4.22a6.44 6.44 0 00-2 .1c-.06 2.06-.18 4.05-.19 6.05V536.9c0 2.19-.41 4.45.74 7zm-652.33-42.4l5.92-2.16a8.46 8.46 0 01.52 1.81v64c-3.5 2.93-7.65 4.6-11.45 6.84s-7.44 4.13-11.14 6.24c-3.86 2.21-7.66 4.51-11.51 6.73-3.64 2.11-7.17 4.43-10.86 6.31-.47-.61-.87-.9-.87-1.18v-68.12c1.09-.89 2.33-1.93 3.86-3.2-.5-3.85-1-7.85-1.57-12.1a7.16 7.16 0 00-2.31.24q-13.94 7.51-27.8 15.13a15.65 15.65 0 00-1.68 1.28c-.55 4.45-1.14 9.19-1.76 14.14l3.19.91c.6 5 .82 57.09.28 71.58-4.4 3.71-9.49 7.05-14.35 10.7-5 3.78-10.1 7.52-15.14 11.3-4.88 3.66-9.73 7.35-14.46 10.93-1.49-.4-1.35-1.42-1.35-2.29v-74.33a15.7 15.7 0 012.9-2.24c3.56-1.56 4.44-4.56 4.87-8q2.34-19.3 4.86-38.57c2.41-18.36 4.9-36.7 7.33-55 2-15.24 4-30.48 6-45.7 2-14.68 4.09-29.34 6.11-44 .4-2.9.67-5.83 1-9h-4.74V299a33.68 33.68 0 014.08-1.56q28.1-6.68 56.2-13.24a15.69 15.69 0 012.29-.19 12.26 12.26 0 01.45 2.25v65.76l-5.38 2.64a7 7 0 00-.19 1.77q12.82 76.39 25.7 152.78c.07.35.43.62 1 1.39zm-46-52.22c-.23-6.15-5.64-38-7.2-42.32a10.42 10.42 0 00-.9 2.2q-3.18 21.93-6.26 43.87a10.36 10.36 0 00.27 2.39 89.49 89.49 0 0014.09-6.14zm467.1 3.92l6.74 2a24.37 24.37 0 01.53 3.64q.06 25.56 0 51.12a34.33 34.33 0 01-.53 4.09l-38.65-7.59c-.47-1.3-1.06-2.62-1.44-4q-10.5-38.56-21-77.14-3.93-14.46-7.89-28.92a9.72 9.72 0 00-2.08-4.51c-.18 1.75-.36 2.77-.38 3.8-.5 23.72-.27 43.37.61 48.59l5.91 1.13a15.82 15.82 0 01.48 2.74v52.23a13.89 13.89 0 01-.31 1.91 8.1 8.1 0 01-2 .31q-21-1.71-42-3.51a16.08 16.08 0 01-1.86-.43 12.43 12.43 0 01-.51-2.54V454.1a23.66 23.66 0 01.29-2.51l6.19-.6c.22-1.21.49-2.25.57-3.29.1-1.29 0-2.59 0-3.89v-125c0-2.18.41-4.43-.72-6.86l-5.58-1a5.7 5.7 0 01-.44-.53 1.25 1.25 0 01-.18-.51q-.09-26.39-.16-52.77a15.75 15.75 0 01.24-2.06c1.54-1.35 3.27-1 4.9-.94q13.59.36 27.18.81c2 .06 4 .21 6.26.34 3.95 12.8 7.14 25.52 10.63 38.15 3.54 12.84 7 25.71 10.56 38.55 3.48 12.61 6.74 25.28 10.47 37.84 1.6-.38 1.27-1.48 1.28-2.26.06-5.18 0-10.37 0-15.55V320.9c0-1.81.28-3.68-.76-5.69l-5.73-1a7.37 7.37 0 01-.54-1.8v-53.89a5.67 5.67 0 01.39-1.48c4.69-.62 38.45 1.49 46.12 2.87a15.18 15.18 0 01.61 3.07q.06 26.39 0 52.78a18 18 0 01-.48 2.85h-6.21a10.85 10.85 0 00-.49 2.21c-.02 47.07-.02 94.1-.02 141.48zm107.53-88.87L710.28 366c-.17-1.54-.41-2.79-.42-4 0-6.29-.21-12.6 0-18.88.2-4.91-2.09-8.93-3.85-13.16a2.61 2.61 0 00-1.62-1.38c-5.22-1.06-10.45-2.11-15.82-2.81-2.87 4.36-4.62 8.6-4.3 13.7a119 119 0 010 15c-.37 5.64 1.31 10.54 4.33 15.55 1.9.47 4 1.05 6.17 1.53 7.77 1.73 15.54 3.4 23.3 5.14 5.19 1.17 5.2 1.2 7 5.83 3.1 8.13 6.16 16.27 9.24 24.4 2.17 5.71 4.3 11.43 6.52 17.12a21.63 21.63 0 011.58 8.09q-.09 37.5 0 75a16.58 16.58 0 01-1.88 8c-5.37 10.35-10.62 20.76-15.92 31.14-.34.65-.77 1.24-1.27 2.06a17.11 17.11 0 01-3.2-.51c-16-5.89-32.11-11.27-48.34-16.41a8 8 0 01-1.25-.78c-2.1-5.19-4.33-10.66-6.53-16.15-3.65-9.1-7.26-18.22-10.94-27.31a16.71 16.71 0 01-1.5-6.42v-44.44a26.84 26.84 0 01.43-3.34 13.14 13.14 0 012.9 0c9.67 2.33 19.51 3.92 29.21 6.68.08 1.93.2 3.58.21 5.22 0 5 .26 10-.06 15s1.48 9 3.26 13.31a4.17 4.17 0 002.79 2.49c4.94 1.48 9.88 2.92 14.95 4.41 2.83-3.89 4.81-7.63 4.58-12.39s-.22-9.63 0-14.44a27 27 0 00-2.27-12.41c-.6-1.35-1.11-2.73-1.62-4-1.58-1.41-3.43-1.69-5.21-2.12-8.27-2-16.49-4.25-24.82-6-3.66-.75-5.72-2.32-7.11-5.86-3.84-9.82-7.77-19.63-12.28-29.15a54.61 54.61 0 01-5.11-25.18c.4-19.44.22-38.89.06-58.33a29.37 29.37 0 013.05-13.86c5-9.92 9.58-20 14.34-30.06.54-1.14 1.13-2.27 1.72-3.44a41.21 41.21 0 014.6 0c14.69 1.78 29.37 3.69 44.07 5.37 3 .35 4.48 1.73 5.54 4.47 5.34 13.81 10.83 27.56 16.31 41.3a17 17 0 011.23 6.49v48.89a39.54 39.54 0 01-.43 4.07zM323.78 263.39c8.23-1.75 80.13-7.39 86.88-6.84a18 18 0 01.48 2.53c.62 12.28.18 60.7-.63 65.22-8.25 1.34-16.7 1.57-25.05 2.45-1.78-3.21-.08-6.55-1.51-9.84-6.53-.6-13 1.19-19.66 1.42a11.42 11.42 0 00-.83 2.81q-.06 18.89 0 37.78a4.62 4.62 0 00.37 1.2c1.27 1 2.57.73 4.11-.39.15-2.75.3-5.67.47-8.85 4.24-1.79 8.75-1.38 13.06-2a86.37 86.37 0 0113.3-1.09 14.7 14.7 0 01.4 2.34v75.59a14 14 0 01-2.82 1c-7.85.94-15.61 2.63-23.89 3.17-.19-3.2-.37-6.1-.56-9.34h-3.88a16.63 16.63 0 00-.62 2.78c-.53 11.44-.19 34.7.57 39 3.5.9 6.82-.75 10.24-1.11s6.51-1.2 9.73-1.83c1.18-3.29.2-6.51.86-9.64.43-.32.83-.84 1.3-.92 8-1.39 16.05-2.52 24.39-3.34a13.53 13.53 0 01.61 2.78v62.23a29.61 29.61 0 01-.34 3c-9.68 1.89-19.29 3.68-28.85 5.66q-14.67 3-29.28 6.39c-9.52 2.19-19 4.58-28.81 7-.16-1.63-.38-2.86-.4-4.1-.49-28.24-.25-51.34.61-56.23l6-2c1.17-2.06.71-4.14.72-6.13V329.64c0-2 .26-4.05-.48-6.25H324a12.61 12.61 0 01-.47-2.48v-55a24 24 0 01.25-2.52zm-96.32 306.92c-.17-1.22-.37-2.09-.41-3-.55-14.48-.19-57.6.54-62.4l5.94-3a6 6 0 00.5-.71 1.37 1.37 0 00.16-.52c.06-1.1.16-2.21.16-3.32q0-76.94-.1-153.88a6.62 6.62 0 00-.44-1.46l-5.62.44c-1.6-1.06-1.13-2.68-1.13-4.07-.05-9.82 0-19.63 0-29.45v-26.11c0-1.82.12-3.64.19-5.53a17.32 17.32 0 012.82-1c27.92-4.45 55.85-8.84 83.9-12.24.39.8.82 1.28.83 1.75v69.56c-4.15 2.11-8.65 2.19-12.95 3s-8.57 2-13.36 2.08c-.22-3.53-.41-6.6-.6-9.62-3.92-.51-7.46.05-20 3.14a12.49 12.49 0 00-.72 2.95q-.07 19.72 0 39.45a13.74 13.74 0 00.51 2.6c3.73-.32 4.08-.54 4.19-3.13s.11-5.15.15-7.57c4.46-2 19.68-5.47 26.12-6a5.34 5.34 0 01.47 1.52v81.34c-4.28 2.06-8.86 2.72-13.22 4.07s-8.48 2.49-13.18 3.86c-.12-2.08-.22-3.69-.32-5.31s-.2-3.24-.33-5.26l-3.85 1c-.81 4.7-.84 39.49-.06 44.78 2.28.59 4.16-.9 6.2-1.47s4.15-1.63 6.15-1.8a4.35 4.35 0 01.65.56 1.2 1.2 0 01.18.52c.06 1.47.14 3 .14 4.43v55.79c-.36.45-.46.59-.58.73a3.59 3.59 0 01-.38.4 2.1 2.1 0 01-.46.32L229.28 570a13.16 13.16 0 01-1.82.31zm571.41-288.09a6.52 6.52 0 01.55 1.73q.06 31.67.05 63.31a14.28 14.28 0 01-.46 2.39l-6.06-.6a12.64 12.64 0 00-.5 2.37v161.75L799 517c.53 4 .9 57.94.45 65.17a15.35 15.35 0 01-.59 2.43l-46.2-23.55v-63.37c2.34-1.52 4.15 1.47 6.74.43a16.76 16.76 0 00.41-2.31c.08-1.47 0-3 0-4.44V340.55l-7-2.78c-.55-5.79-.46-59 .14-63.78a14 14 0 013-.09q20.75 3.81 41.46 7.72a9.63 9.63 0 011.46.6zm-285.96 168l6.29.69a16.77 16.77 0 01.46 2.75v51.13a19.87 19.87 0 01-.21 2.06c-1.26 1.45-2.84 1-4.26 1h-41.83a17.23 17.23 0 01-.66-3.27q-.06-25.29 0-50.57a14.73 14.73 0 01.3-2.01c1.84-2 4.45-.47 6.48-1.78a4.73 4.73 0 00.45-1.42V313.21a6 6 0 00-.57-1.69l-6.16-.49c-.17-1.4-.43-2.66-.46-3.92-.57-20.43-.26-47.46.55-52.11a3.68 3.68 0 01.4-.39 1.2 1.2 0 01.49-.22c1.1-.1 2.21-.26 3.31-.26Q497.7 254 518 254c.33 0 .66.27 1.35.57.82 6 .25 12.29.36 18.52s0 12.23 0 18.34v19.12l-6.42 1.08a32.21 32.21 0 00-.49 3.68c-.06 3.71 0 7.41 0 11.12v116.7c-.03 2.18.05 4.38.11 7.09zm-12.99 240.39H296.55a56.18 56.18 0 01-13.24-1.18 44.85 44.85 0 01-34.63-41.8c-.29-7.59-.27-15.2 0-22.78.78-22.3 18.31-39.7 38-42.31a75.33 75.33 0 019.94-.76h407.3c11.5 0 22 2.86 31 10.23a44 44 0 0116.69 33.22c.39 8.67.65 17.4-.38 26.08A44.94 44.94 0 01710 690.45c-2.4.16-4.81.16-7.22.16zm24.5-54.3c-.42-20.37-16.09-32.75-33.45-32.63-16 .1-33.14 10.73-33.15 32.85 0 17.84 12.68 32.29 33.05 32.4 19.68.07 33.01-13.93 33.55-32.62zm72.23-30.76a29.62 29.62 0 00-.5 3.8v54.37a24.36 24.36 0 00.46 3.32c1.2.12 2.09.28 3 .28 5.74 0 11.47.15 17.2-.08a80.41 80.41 0 0014.32-1.35c26.31-5.88 30.38-34.46 17.38-49.38-5.61-6.44-12.86-9.7-21.26-10.73-9.4-1.16-18.83-.67-28.25-.7a12.69 12.69 0 00-2.35.47zm-23.55 36.83c1.27-.59 2.09-1 2.93-1.36 4.26-1.79 6.69-5.09 7.85-9.45a22.13 22.13 0 00-1.77-16.16 16.23 16.23 0 00-7.92-7.46 31.52 31.52 0 00-12.91-2.86c-8.88-.19-17.76-.08-26.64 0a14.46 14.46 0 00-3.11.74c-.12 1.18-.3 2.09-.3 3v55a15.92 15.92 0 00.57 3.06c6.56.94 17.43.72 21.27-.44.08-1.36.22-2.81.23-4.26v-11.1c0-.69-.09-1.5 1.22-1.67 3.48 5.71 6.13 12 9.91 18h20.07c.91 0 1.83-.13 2.74-.22a.79.79 0 00.48-.24c.12-.13.13-.34.34-.92-4.41-7.81-10-15.16-14.96-23.66zm-280.79-37.07a29.78 29.78 0 00-.43 3.16v55.51a14.56 14.56 0 00.62 3c7.49.74 16.75.56 20.83-.43 1-5.64-.37-11.57 1-18.06 4.32 6.29 6.65 12.79 10.41 18.38 5.87.83 19.8.66 23.89-.33-.28-1.68-1.37-3-2.25-4.31-3.73-5.73-7.51-11.44-11.22-17.19a25.28 25.28 0 01-1.44-3c7.69-2 10.66-7.41 11.42-14.38a21.93 21.93 0 00-1.66-10.32 16.5 16.5 0 00-8.93-9.38 34.46 34.46 0 00-14-2.85c-8-.08-15.91 0-23.87 0-1.28-.11-2.55.08-4.37.2zm414.4 3.77c-9.43-4.83-19-7-29.15-4.24-9.38 2.56-15.36 8.46-17 18.34-1.39 8.44 2.39 15.41 10.38 18.63 2.21.89 4.61 1.3 6.89 2a31.43 31.43 0 015.14 1.94 3.26 3.26 0 011.3 2.23 2.22 2.22 0 01-1.91 2.38 14.54 14.54 0 01-4.34.44 24.15 24.15 0 01-9.83-3.56c-1.23-.72-2.54-1.28-3.79-1.9-2.75 4.39-6 12.41-6.74 16.48a4.11 4.11 0 00.72.82 15.27 15.27 0 001.93 1.1 51.1 51.1 0 0018.6 5.09c7 .49 13.63-.79 19.52-4.78 7.21-4.91 10.29-11.88 9.6-20.5a14.65 14.65 0 00-8.54-12.72c-2.46-1.2-5.22-1.78-7.83-2.68-2.43-.84-4.89-1.63-7.23-2.69a2.7 2.7 0 01-1.15-2.25 2.84 2.84 0 011.68-1.91 9.39 9.39 0 014.31-.47 43.77 43.77 0 016.86 2.1 38.46 38.46 0 013.86 1.91c2.51-3.51 5.37-10.17 6.72-15.76zM376 650.24c-.32-2.52-.71-4.33.46-6.37 2.77 0 5.53 0 8.28-.07s5.5.42 8.07-.46c1-5.43.87-11.16-.27-15.11-5.36-.8-10.94.38-16.39-.71-.59-2-.85-3.74.45-5.75 3.11 0 6.25.12 9.37 0s6.23.72 9.1-.69c.82-7.41.66-11.92-.56-15.66a12.93 12.93 0 00-2.05-.32H356.9a11.14 11.14 0 00-2.45.55 5.9 5.9 0 00-.5 1.29c-.09 1.29-.15 2.59-.15 3.88q.1 27.51.22 55a1.08 1.08 0 00.15.53c.08.16.24.27.75.79 2.86.5 6.18.16 9.47.21 3.52.06 7 0 10.56 0h10c3.34 0 7 .27 10.62-.34.48-5.62.74-10.85-.22-16.46zm73.71-6.61c-2 1-3.44 1.79-4.9 2.53a17.63 17.63 0 01-10.21 1.92c-3.74-.43-6.74-2.13-8.27-5.68-2.12-4.92-2-9.86 1.35-14.17s8.07-5 13.06-3.73c2.28.59 4.37 1.93 6.55 2.9.76.34 1.54.61 2.84 1.12 0-4 .11-7.55 0-11s.68-7.35-.62-10.75c-13.77-6.55-31.88-2.67-41.14 9.93-8.69 11.84-8 29.46.49 39.92a33.56 33.56 0 0040.6 9.11c.82-5.23 1.05-17.73.28-22.1z" />
    <path d="M501.56 636.46c-.32 1.88-.42 3.18-.77 4.41a9.61 9.61 0 01-8.87 7.09c-4.72.32-8.48-1.85-10.21-6a14.37 14.37 0 01-.28-10.78c1.33-3.64 4.45-6.61 9.82-6.55a9.55 9.55 0 019.48 7 36.31 36.31 0 01.83 4.83zm117.29-11.39c4.59-1.21 9.3.19 11.85 3.52s2.84 10.95.37 14.8c-2.24 3.49-6.85 5.07-12.24 4.18-.83-4.57-.83-18.05.02-22.5zM554 621a35.21 35.21 0 014.47.42 5.85 5.85 0 014.31 8.43 5.27 5.27 0 01-2.17 2.36 8.14 8.14 0 01-7.11.46c-.07-3.91-.72-7.67.5-11.67zm-240 11.35V621.8c2.55-1.57 4.83-.58 7 .21 1.48.53 2.16 1.91 2.6 3.38 1.09 3.66-.61 6.67-4.35 7.54a6.31 6.31 0 01-5.25-.58z" />
  </svg>
);
