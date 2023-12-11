import { useEffect, useState } from "react";
import Layout from "../../view/layout";
import Header from "../../components/HeaderFinance";
import Resume from "../../components/Resume";
import Form from "../../components/Form";
import Global from "./style";

interface Transaction {
    id: number;
    desc: string;
    amount: string;
    expense: boolean;
  }
export default function Client() {
    const data = localStorage.getItem("transactions");
    const [transactionsList, setTransactionsList] = useState<Transaction[]>(
        data ? JSON.parse(data) : []
      );
    const [income, setIncome] = useState<string>("R$ 0");
    const [expense, setExpense] = useState<string>("R$ 0");
    const [total, setTotal] = useState<string>("R$ 0");

    useEffect(() => {
        const amountExpense = transactionsList
          .filter((item) => item.expense)
          .map((transaction) => Number(transaction.amount));
    
        const amountIncome = transactionsList
          .filter((item) => !item.expense)
          .map((transaction) => Number(transaction.amount));
    
        const expenseValue = amountExpense.reduce((acc, cur) => acc + cur, 0);
        const incomeValue = amountIncome.reduce((acc, cur) => acc + cur, 0);
    
        const totalValue = Math.abs(incomeValue - expenseValue).toFixed(2);
    
        setIncome(`R$ ${incomeValue.toFixed(2)}`);
        setExpense(`R$ ${expenseValue.toFixed(2)}`);
        setTotal(`${incomeValue < expenseValue ? "-" : ""}R$ ${totalValue}`);
      }, [transactionsList])

      const handleAdd = (transaction: Transaction) => {
        const newArrayTransactions = [...transactionsList, transaction];
        setTransactionsList(newArrayTransactions);
        localStorage.setItem("transactions", JSON.stringify(newArrayTransactions));
      };
    return (
        <>
        <Layout 
                mainContent={
                    <>
                    <Header />
                    <Resume income={income} expense={expense} total={total}/>
                    <Form
                    handleAdd={handleAdd}
                    transactionsList={transactionsList}
                    setTransactionsList={setTransactionsList} />
                    <Global />
                    </>
                } children={undefined} />
        </>
    )

}