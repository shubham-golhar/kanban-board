import Body from "./Body";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";
export default function App() {
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
}
