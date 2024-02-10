import { FC } from "react";
import { YearsItem, YearsList } from "./Years.styled";

interface IYear {
  setYear: (id: number) => void;
}

const Years: FC<IYear> = ({ setYear }) => {
  const years: number[] = [];
  for (let i = 2000; i <= 2023; i++) {
    years.push(i);
  }

  return (
    <YearsList>
      {years.map((year) => (
        <YearsItem key={year}>
          <button type="button" onClick={() => setYear(year)}>
            {year}
          </button>
        </YearsItem>
      ))}
    </YearsList>
  );
};

export default Years;
