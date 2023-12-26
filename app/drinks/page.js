import DrinksList from "@/components/DrinksList";

async function fetchDrinks() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const res = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a`
  );
  if (!res.ok) throw new Error("Failed fetching drinks");
  const data = await res.json();
  return data;
}

async function Drinks() {
  const data = await fetchDrinks();

  return (
    <div>
      <DrinksList drinks={data.drinks} />
    </div>
  );
}

export default Drinks;
