export const firstNameValidator = (firstName = "") => {
  //return true if it is invalid
  if (firstName.length < 4) return true;
  else return false;
};
