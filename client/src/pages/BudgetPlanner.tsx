
import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import "./planner.css";

type Expense = {
  id: number;
  name: string;
  category: string;
  amount: number;
};

const categories = [
  "Accommodation",
  "Transportation",
  "Food",
  "Activities",
  "Shopping",
  "Other",
];

const STORAGE_KEY = "globetrotter-budget";

function BudgetPlanner() {
  const [totalBudget, setTotalBudget] = useState(() => {
    return localStorage.getItem(`${STORAGE_KEY}-total`) || "";
  });

  const [expenses, setExpenses] = useState<Expense[]>(() => {
    try {
      return JSON.parse(
        localStorage.getItem(`${STORAGE_KEY}-expenses`) || "[]"
      );
    } catch {
      return [];
    }
  });

  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Accommodation");
  const [amount, setAmount] = useState("");

  useEffect(() => {
    localStorage.setItem(`${STORAGE_KEY}-total`, totalBudget);
    localStorage.setItem(`${STORAGE_KEY}-expenses`, JSON.stringify(expenses));
  }, [totalBudget, expenses]);

  const totalSpent = expenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  const remaining = (Number(totalBudget) || 0) - totalSpent;

  const money = (value: number) =>
    value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 2,
    });

  const addExpense = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const expenseAmount = Number(amount);

    if (!name.trim() || !Number.isFinite(expenseAmount) || expenseAmount <= 0) {
      return;
    }

    setExpenses((previous) => [
      ...previous,
      {
        id: Date.now(),
        name: name.trim(),
        category,
        amount: expenseAmount,
      },
    ]);

    setName("");
    setAmount("");
    setCategory("Accommodation");
    setShowForm(false);
  };

  const usedCategories = categories.filter((item) =>
    expenses.some((expense) => expense.category === item)
  );

  return (
    <main className="planner-page">
      <header className="planner-header">
        <div>
          <p className="planner-eyebrow">YOUR TRIP</p>
          <h1>Budget Planner</h1>
          <p className="muted">Manage your personal travel budget.</p>
        </div>

        <button
          className="planner-button"
          type="button"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? "Cancel" : "+ Add Expense"}
        </button>
      </header>

      {showForm && (
        <section className="planner-panel">
          <h2>Add an Expense</h2>

          <form className="expense-form" onSubmit={addExpense}>
            <label>
              Expense Name
              <input
                type="text"
                placeholder="Hotel reservation"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
            </label>

            <label>
              Category
              <select
                value={category}
                onChange={(event) => setCategory(event.target.value)}
              >
                {categories.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>

            <label>
              Amount ($)
              <input
                type="number"
                min="0.01"
                step="0.01"
                placeholder="0.00"
                value={amount}
                onChange={(event) => setAmount(event.target.value)}
                required
              />
            </label>

            <button className="planner-button" type="submit">
              Save Expense
            </button>
          </form>
        </section>
      )}

      <section className="planner-panel">
        <h2>Set Your Trip Budget</h2>
        <p className="muted">How much do you want to spend on your trip?</p>

        <label className="budget-input-label">
          Total Budget ($)
          <input
            type="number"
            min="0"
            step="0.01"
            placeholder="Enter your budget"
            value={totalBudget}
            onChange={(event) => setTotalBudget(event.target.value)}
          />
        </label>
      </section>

      <section className="budget-summary">
        <article className="summary-card">
          <p className="muted">Total Budget</p>
          <h2>{totalBudget ? money(Number(totalBudget)) : "Not set"}</h2>
          <p className="small-text">Your spending limit</p>
        </article>

        <article className="summary-card">
          <p className="muted">Total Expenses</p>
          <h2>{money(totalSpent)}</h2>
          <p className="small-text">Your recorded expenses</p>
        </article>

        <article className="summary-card remaining-card">
          <p className="muted">Remaining Balance</p>
          <h2>{totalBudget ? money(remaining) : "Not set"}</h2>
          <p className="small-text">
            {remaining < 0 && totalBudget
              ? "You are over budget"
              : "Available for your trip"}
          </p>
        </article>
      </section>

      <section className="planner-panel">
        <h2>Spending Breakdown</h2>
        <p className="muted">See where your travel money is going.</p>

        {usedCategories.length === 0 ? (
          <p className="muted">
            Add expenses to see your spending breakdown.
          </p>
        ) : (
          <div className="category-grid">
            {usedCategories.map((item) => {
              const spent = expenses
                .filter((expense) => expense.category === item)
                .reduce((sum, expense) => sum + expense.amount, 0);

              return (
                <article className="category-card" key={item}>
                  <h3>{item}</h3>
                  <p className="category-amount">{money(spent)}</p>
                  <p className="muted">Total spent in this category</p>
                </article>
              );
            })}
          </div>
        )}
      </section>

      <section className="planner-panel">
        <h2>Recent Expenses</h2>

        {expenses.length === 0 ? (
          <p className="muted">
            No expenses yet. Click Add Expense to get started.
          </p>
        ) : (
          <div className="expense-list">
            {expenses.map((expense) => (
              <div className="expense-row" key={expense.id}>
                <div>
                  <h3>{expense.name}</h3>
                  <p className="muted">{expense.category}</p>
                </div>

                <div className="expense-actions">
                  <strong>{money(expense.amount)}</strong>
                  <button
                    type="button"
                    className="delete-expense"
                    onClick={() =>
                      setExpenses((previous) =>
                        previous.filter((item) => item.id !== expense.id)
                      )
                    }
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

export default BudgetPlanner;
