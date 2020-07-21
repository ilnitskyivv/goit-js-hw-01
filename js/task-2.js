const total = 100;
const ordered = 50;
// const ordered = 20;
// const ordered = 80;
// const ordered = 130;

const message =
  total > ordered
    ? "Замовлення оформлено, з вами зв'яжеться менеджер"
    : 'На складі недостатньо товарів!';
console.log(message);
