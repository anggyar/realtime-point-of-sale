export const HEADER_TABLE_TABLES = ["No", "Name", "Capacity", "Status", "Action"];

export const INITIAL_CREATE_TABLE_FORM = {
  name: "",
  description: "",
  capacity: "",
  status: "",
};

export const INITIAL_STATE_CREATE_TABLE = {
  status: "idle",
  errors: {
    name: [],
    description: [],
    capacity: [],
    status: [],
    _form: [],
  },
};

export const STATUS_TABLE_LIST = [
  {
    value: "available",
    label: "Available",
  },
  {
    value: "unavailable",
    label: "Unavailable",
  },
  {
    value: "reserved",
    label: "Reserved",
  },
];

export const INITIAL_STATE_UPDATE_TABLE = {
  status: "idle",
  errors: {
    name: [],
    description: [],
    capacity: [],
    status: [],
    _form: [],
  },
};
