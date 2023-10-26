function NumbersTable({ limit }) {
  const numbers = [];

  for (let i = 1; i <= limit; i++) {
    numbers.push(i);
  }

  return (
    <div className="number-table">
      <table>
        <tbody>
          {numbers.map((number) => (
            <td
              key={number}
              style={{
                backgroundColor: number % 2 === 0 ? "red" : "white",
              }}
            >
              {number}
            </td>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default NumbersTable;
