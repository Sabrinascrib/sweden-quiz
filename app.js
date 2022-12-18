const statement = document.getElementById("statement");
const optionButtons = document.querySelector("#options").children;
const explanation = document.getElementById("explanation");

const fact = {
  statement: "Sweden has a royal Family.",
  answer: true,
  explanation: "Yes they do.",
};

statement.textContent = fact.statement;
