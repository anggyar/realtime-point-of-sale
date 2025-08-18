export type AuthFormState = {
  status?: string;
  errors?: {
    email?: string[];
    password?: string[];
    name?: string[];
    avatar_url?: string[];
    _form?: string[];
  };
};
