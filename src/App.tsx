import { useState } from "react";
import MainPage from "./Pages/MainPage";
import { ShowMailContextProvider } from "Context/showMailContext";

import * as MaterialIcons from "@mui/icons-material";

import "styles.css";

function App() {
  const [showMail, setShowMail] = useState(false);
  const [isMailBlocked, setIsMailBlocked] = useState(false);

  return (
    <ShowMailContextProvider
      contextData={{
        value: showMail,
        blocked: isMailBlocked,
        dispatch: setShowMail,
        dispatchBlocked: setIsMailBlocked,
      }}
    >
      <MainPage />
    </ShowMailContextProvider>
  );
}

export default App;
