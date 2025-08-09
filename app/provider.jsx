import { Header } from "./_components/Header";

export const Provider = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="container mx-auto  py-8 px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  );
};
