export const HEADER_TABLE_ORDER = [
  "No",
  "Order ID",
  "Customer Name",
  "Table",
  "Status",
  "Action",
];

export const INITIAL_CREATE_ORDER_FORM = {
  customer_name: "",
  table_id: "",
  status: "",
};

export const INITIAL_STATE_CREATE_ORDER = {
  status: "idle",
  errors: {
    customer_name: [],
    table_id: [],
    status: "",
    _form: [],
  },
};

export const STATUS_CREATE_ORDER = [
  {
    value: "reserved",
    label: "Reserved",
  },
  {
    value: "process",
    label: "Process",
  },
];

export const HEADER_TABLE_DETAIL_ORDER = [
  "No",
  "Menu",
  "Total",
  "Status",
  "Action",
];

export const FILTER_MENU = [
  {
    value: "",
    label: "All",
  },
  {
    value: "Makanan Utama",
    label: "Makanan Utama",
  },
  {
    value: "Dessert",
    label: "Dessert",
  },
  {
    value: "Minuman Kopi",
    label: "Minuman Kopi",
  },
  {
    value: "Cemilan",
    label: "Cemilan",
  },
  {
    value: "Minuman Non-Kopi",
    label: "Minuman Non-Kopi",
  },
];
