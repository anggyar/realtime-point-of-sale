export const HEADER_TABLE_MENU = [
  "No",
  "Name",
  "Category",
  "Price",
  "Available",
  "Action",
];

export const CATEGORY_LIST = [
  {
    value: "Makanan Utama",
    label: "Makanan Utama",
  },
  {
    value: "Cemilan",
    label: "Cemilan",
  },
  {
    value: "Minuman Kopi",
    label: "Minuman Kopi",
  },
  {
    value: "Minuman Non Kopi",
    label: "Minuman Non-Kopi",
  },
  {
    value: "Dessert",
    label: "Dessert",
  },
];

export const AVAILABILITY_LIST = [
  {
    value: "true",
    label: "Available",
  },
  {
    value: "false",
    label: "Not Available",
  },
];

export const INITIAL_CREATE_MENU_FORM = {
  name: "",
  description: "",
  price: "",
  discount: "",
  category: "",
  image_url: "",
  is_available: "",
};

export const INITIAL_STATE_CREATE_MENU = {
  status: "idle",
  errors: {
    name: [],
    description: [],
    price: [],
    discount: [],
    category: [],
    image_url: [],
    is_available: [],
    _form: [],
  },
};

export const INITIAL_STATE_UPDATE_MENU = {
  status: "idle",
  errors: {
    name: [],
    description: [],
    price: [],
    discount: [],
    category: [],
    image_url: [],
    is_available: [],
    _form: [],
  },
};
