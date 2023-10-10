export const checkValidLoginData = (email, password) => {
  const isEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
    password
  );

  if (!email || !password) return "Enter all fields";

  if (!isEmail) return "Email ID is not valid";
  if (!isPassword) return "Password is not valid";

  return null;
};
