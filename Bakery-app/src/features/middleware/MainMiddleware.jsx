import ReduxProvider from "./ReduxProvider";
import BorwesRouter from "./BorwesRouter";
import SuspendLoader from "./SuspendLoader";
import Toaster from "./ToasterMessage";
function MainMiddleware({ children }) {
  return (
    <>
      <Toaster />
      <SuspendLoader>
        <BorwesRouter>
          <ReduxProvider>{children}</ReduxProvider>
        </BorwesRouter>
      </SuspendLoader>
    </>
  );
}

export default MainMiddleware;
