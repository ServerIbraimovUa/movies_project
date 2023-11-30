import { FC } from "react";

interface IYear {
  setYear: (id: number) => void;
}

const Years: FC<IYear> = ({ setYear }) => {
  const years: number[] = [];
  for (let i = 2000; i <= 2023; i++) {
    years.push(i);
  }

  return (
    <ul>
      {years.map((year) => (
        <li key={year}>
          <button type="button" onClick={() => setYear(year)}>
            {year}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Years;
