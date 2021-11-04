import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import Stories from "./Stories";

const navItems = ["arts", "books", "fashion", "food", "movies", "travel"];
const nytapi = "b0EDOD1ajEoIcL1Iv8vOHV7oS07SQZmh";
const section = "arts";

function App() {
  const [stories, setStories] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${nytapi}`
    )
      .then((response) => response.json())
      .then((data) => setStories(data.results))
      .then(setLoading(false));
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <Header siteTitle="All the news that Fits We Print" />
      <Nav navItems={navItems} />
      <Stories stories={stories} />
    </>
  );
}

export default App;
