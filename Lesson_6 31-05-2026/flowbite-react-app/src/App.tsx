import { DarkThemeToggle } from "flowbite-react";

export default function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-4 py-24">
      <div className="">
        <DarkThemeToggle />
      </div>
      <div className="bg-red-200 p-4 text-3xl text-blue-800 dark:bg-blue-800 dark:text-red-200">
        Text changes when click on DarkThemeTOggle Componenet
      </div>
    </main>
  );
}
