import Header from "@/components/header";
import {Outlet} from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <main className="min-h-screen container">
        <Header />
        <Outlet />
      </main>
      <div className="p-5 text-center text-white bg-gray-900 mt-10">
        Made with 💗 by Hardik
      </div>
    </div>
  );
};

export default AppLayout;
