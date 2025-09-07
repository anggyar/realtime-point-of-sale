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
