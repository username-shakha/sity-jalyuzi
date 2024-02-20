interface NAV_PAGES {
  label: string;
  path: string;
}

// Delivery
export const nav1: NAV_PAGES[] = [
  { label: "Доставка", path: "/delivery" },
  { label: "Способы оплаты", path: "/payment-methods" },
  { label: "Возврат товара", path: "/return-goods" },
  { label: "Гарантии", path: "/guarantees" },
  { label: "Услуги", path: "/services" },
  { label: "Вопросы и ответы", path: "/questions-answers" },
];
// Contact
export const nav2: NAV_PAGES[] = [
  { label: "O Компании", path: "/about" },
  { label: "Контакты", path: "/contact" },
  { label: "Реквизиты", path: "/requisites" },
  { label: "Документы", path: "/documents" },
  { label: "Вакансия", path: "/vacancy" },
];
