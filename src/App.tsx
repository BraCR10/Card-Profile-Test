import "./App.css";
import { ProfileCard } from "./components/ProfileCard/ProfileCard.tsx";
import myData from "./utils/myData.ts";

function App() {
  return (
    <section className="App">
      <ProfileCard {...myData} />
    </section>
  );
}

export default App;
