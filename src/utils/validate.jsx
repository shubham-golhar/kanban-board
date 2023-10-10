export const checkValidData = (
  email,
  password,
  username,
  name,
  confirmPassword
) => {
  const isEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
    password
  );
  const isUsername = /^[a-zA-Z][a-zA-Z0-9]{2,29}$/; //Allows only letters (both uppercase and lowercase) and numbers.
  //   Must start with a letter.

  const isName = /^[a-zA-Z][a-zA-Z0-9]{2,29}$/;

  if (!email || !password || !username || !name || !confirmPassword)
    return "Enter all Fields";
  if (password !== confirmPassword) return "Password Not Match";
  if (!isEmail) return "Email ID is not valid";
  if (!isPassword) return "Password is not valid";
  if (!isUsername) return "Username is not valid";
  if (!isName) return "Name is not valid";
  return null;
};
