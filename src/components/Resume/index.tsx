import React from "react";
import ResumeItem from "../ResumeItem";
import * as C from "./style";
import { IconCoin , IconCircleArrowUpFilled, IconCircleArrowDownFilled } from '@tabler/icons-react';

interface ResumeProps {
  income: string | number;
  expense: string | number;
  total: string | number;
}

const Resume: React.FC<ResumeProps> = ({ income, expense, total }) => {
  return (
    <C.Container>
      <ResumeItem
        title="Entradas"
        Icon={IconCircleArrowUpFilled}
        value={income}
      />
      <ResumeItem
        title="Saídas"
        Icon={IconCircleArrowDownFilled}
        value={expense}
      />
      <ResumeItem title="Total" Icon={IconCoin} value={total} />
    </C.Container>
  );
};

export default Resume;
