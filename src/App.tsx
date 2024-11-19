import { Outlet} from "react-router-dom";
import { Bubbles } from "./component/Bubbles";
import { SnackbarProvider } from "notistack";
import Sidebar from "./component/Sidebar";


function App() {
  return (
    <SnackbarProvider maxSnack={3}>
      <div className="flex flex-col md:flex-row-reverse justify-start items-center min-h-screen scroll-smooth  w-full z-20 p-4 md:p-10 ">
      <Bubbles />
      <Sidebar />
    


      <div className="w-full md:w-3/4 lg:w-3/4 flex justify-center items-start">
        <Outlet />
      </div>
    </div>
    </SnackbarProvider>
  );
}

export default App;
