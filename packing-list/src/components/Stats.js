export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <p>Start adding some items to your packing list 🚀</p>
      </footer>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentge = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentge === 100
          ? "You got every thing! ready to go ✈"
          : `👜 You have ${numItems} items on your list, and you already packed
          ${numPacked} (${percentge}%)`}
      </em>
    </footer>
  );
}
