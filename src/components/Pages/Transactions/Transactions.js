import React, {useState} from 'react';
import '../../Main.css';
import './Transactions.css';
import BudgetCard from "./BudgetCard";
import {Button, Stack} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import AddBudgetModal from "./AddBudgetModal";
import AddExpenseModal from "./AddExpenseModal";
import ViewExpensesModal from "./ViewExpensesModal";
import {UNCATEGORIZED_BUDGET_ID, useBudgets} from "../context/BudgetContex";
import UncategorizedBudgetCard from "./UncategorizedBudgetCard";
import TotalBudgetCard from "./TotalBudgetCard";


const Transactions = ({show}) => {
    const [showAddBudgetModal, setShowAddBudgetModal] = useState(false);
    const [showAddExpenseModal, setShowAddExpenseModal] = useState(false);
    const [viewExpensesModalBudgetId, setViewExpensesModalBudgetId] = useState();
    const [addExpenseModalBudgetId, setAddExpenseModalBudgetId] = useState();
    const {budgets, getBudgetExpenses} = useBudgets();

    function openAddExpenseModal(budgetId) {
        setShowAddExpenseModal(true)
        setAddExpenseModalBudgetId(budgetId)
    }

    return (
        <div className={show ? 'transform' : 'full'}>
            <Container className="my-4">
               <Stack direction="horizontal" gap="2" className="mb-4">
                   <h1 className="me-auto">Budget</h1>
                   <Button variant="primary" onClick={() => setShowAddBudgetModal(true)}>Add Budget</Button>
                   <Button variant="outline-primary" onClick={openAddExpenseModal}>Add Expense</Button>
               </Stack>
                <div>
                    {budgets.map(budget => {
                        const amount = getBudgetExpenses(budget.id).reduce((total, expense) => total + expense.amount, 0 )
                        return (<BudgetCard
                            key={budget.id}
                            name={budget.name}
                            amount={amount}
                            max={budget.max}
                            onAddExpenseClick={() => openAddExpenseModal(budget.id)}
                            onViewExpensesClick={() => setViewExpensesModalBudgetId(budget.id)}
                        >
                        </BudgetCard>)
                    })}
                    <UncategorizedBudgetCard onAddExpenseClick={openAddExpenseModal} onViewExpensesClick={() => setViewExpensesModalBudgetId(UNCATEGORIZED_BUDGET_ID)}/>
                    <TotalBudgetCard/>
                </div>
            </Container>
            <AddBudgetModal show={showAddBudgetModal} handleClose={() => setShowAddBudgetModal(false)}/>
            <AddExpenseModal
                show={showAddExpenseModal}
                defaultBudgetId={addExpenseModalBudgetId}
                handleClose={() => setShowAddExpenseModal(false)}/>
            <ViewExpensesModal
                budgetId={viewExpensesModalBudgetId}
                handleClose={() => setViewExpensesModalBudgetId()}
            />
        </div>
    );
};

export default Transactions;