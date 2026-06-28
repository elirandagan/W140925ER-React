import { Footer } from "flowbite-react";
import { PropsWithChildren } from "react";

const Layout = (props: PropsWithChildren) => {
  const { children } = props;

  return (
    <div className="flex h-screen flex-col">
      <header className="sticky top-0 z-10 bg-white p-2">Header</header>
      <main className="grow bg-gray-200 px-3 py-4"> {children}</main>
      <footer>
        <Footer
          container
          title="Footer"
          className="rounded-none bg-gray-600 text-white"
        >
          Footer
        </Footer>
      </footer>
    </div>
  );
};

export default Layout;
