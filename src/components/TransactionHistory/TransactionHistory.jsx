import s from "./TransactionHistory.module.css";

function TransactionHistory({ items }) {
  return (
    <>
      <table className={s.table}>
        <thead>
          <tr>
            <th className={s.head}>Type</th>
            <th className={s.head}>Amount</th>
            <th className={s.head}>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item) => {
            return (
              <tr key={item.id}>
                <td className={s.row}>{item.type}</td>
                <td className={s.row}>{item.amount}</td>
                <td className={s.row}>{item.currency}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default TransactionHistory;
