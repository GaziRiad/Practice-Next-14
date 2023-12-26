import Image from "next/image";
import Link from "next/link";
import drinkImg from "./drink.jpg";

async function fetchDrink(id) {
  const res = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  if (!res.ok) throw new Error("Failed fetching drink");
  const data = await res.json();
  return data;
}

async function SingleDrink({ params }) {
  // console.log(params.id);
  const data = await fetchDrink(params.id);
  console.log(data);
  const drink = data.drinks[0];
  return (
    <div>
      <p className="mb-6">
        Drink Name: <sapn>{drink.strDrink}</sapn>
      </p>
      <Image
        src={drinkImg.src}
        width={1200}
        height={1200}
        className="w-48 h-48 rounded mb-6"
        alt=""
      />
      {/* remote images */}
      <Image
        src={drink.strDrinkThumb}
        width={620}
        height={620}
        className="w-48 h-48 rounded shadow-lg"
        priority
        alt={drink.strDrink}
      />
      <Link href="/drinks" className="btn btn-primary mt-8 mb-12">
        Go back
      </Link>
    </div>
  );
}

export default SingleDrink;
