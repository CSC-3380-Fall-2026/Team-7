
import "./planner.css";

const expenses = [
  { name: "Hotel stay", category: "Accommodation", amount: 450 },
  { name: "Flight tickets", category: "Transportation", amount: 320 },
  { name: "Restaurants", category: "Food", amount: 120 },
  { name: "City tour", category: "Activities", amount: 75 },
];

const categories = [
  { name: "Accommodation", spent: 450, budget: 600 },
  { name: "Transportation", spent: 320, budget: 400 },
  { name: "Food", spent: 120, budget: 250 },
  { name: "Activities", spent: 75, budget: 200 },
];

function BudgetPlanner() {
  const totalBudget = 1500;
  const totalSpent = expenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );
  const remaining = totalBudget - totalSpent;

  return (
    <main className="planner-page">
      <header className="planner-header">
        <div>
          <p className="eyebrow">YOUR TRIP</p>
          <h1>Budget Planner</h1>
          <p className="muted">Miami, Florida · June 12–17</p>
        </div>
        <button className="primary-button" type="button">
          + Add Expense
        </button>
      </header>

      <section className="budget-summary" aria-label="Budget summary">
        <article className="summary-card">
          <p className="muted">Total Budget</p>
          <h2>${totalBudget.toLocaleString()}</h2>
          <p className="small-text">Your planned spending limit</p>
        </article>

        <article className="summary-card">
          <p className="muted">Estimated Expenses</p>
          <h2>${totalSpent.toLocaleString()}</h2>
          <p className="small-text">Across all categories</p>
        </article>

        <article className="summary-card remaining-card">
          <p className="muted">Remaining Balance</p>
          <h2>${remaining.toLocaleString()}</h2>
          <p className="small-text">Available for your trip</p>
        </article>
      </section>

      <section className="planner-panel">
        <div className="section-heading">
          <div>
            <h2>Spending Breakdown</h2>
            <p className="muted">Track your planned costs by category.</p>
          </div>
        </div>

        <div className="category-grid">
          {categories.map((category) => {
            const percentage = Math.min(
              (category.spent / category.budget) * 100,
              100
            );

            return (
              <article className="category-card" key={category.name}>
                <div className="category-heading">
                  <h3>{category.name}</h3>
                  <span>{Math.round(percentage)}%</span>
                </div>

                <p className="category-amount">
                  ${category.spent}{" "}
                  <span>of ${category.budget}</span>
                </p>

                <div
                  className="progress-track"
                  role="progressbar"
                  aria-label={`${category.name} budget used`}
                  aria-valuenow={Math.round(percentage)}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className="progress-fill"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="planner-panel">
        <div className="section-heading">
          <div>
            <h2>Recent Expenses</h2>
            <p className="muted">A quick look at your planned expenses.</p>
          </div>
        </div>

        <div className="expense-list">
          {expenses.map((expense) => (
            <div className="expense-row" key={expense.name}>
              <div>
                <h3>{expense.name}</h3>
                <p className="muted">{expense.category}</p>
              </div>
              <strong>${expense.amount.toLocaleString()}</strong>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default BudgetPlanner;
