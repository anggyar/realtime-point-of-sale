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
    value: "makanan_utama",
    label: "Makanan Utama",
  },
  {
    value: "cemilan",
    label: "Cemilan",
  },
  {
    value: "minuman_kopi",
    label: "Minuman Kopi",
  },
  {
    value: "minuman_non_kopi",
    label: "Minuman Non-Kopi",
  },
  {
    value: "dessert",
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
