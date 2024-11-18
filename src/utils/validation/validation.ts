const Validation = (string: string) => {
  let validate;
  let stringValidation = /^[a-zA-Z0-9]+$/;
  let i: number;
  for (i = 0; i < string.length; i++) {
    if (stringValidation.test(string.charAt(i))) {
      validate = true;
      break;
    } else {
      validate = false;
    }
  }
  return validate;
};

const checkEmail = (value: string) => {
  const condition = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
  return condition.test(value);
};

const checkPassword = (value: string) => {
  const condition = new RegExp(
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/
  );
  return condition.test(value);
};

const checkPswd = (value: string) => {
  const condition = new RegExp(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).*$/);
  return condition.test(value);
};

const checkName = (value: string) => {
  const condition = new RegExp(/^[A-Za-z0-9 ]+$/);
  return condition.test(value);
};

const checkMobileNumber = (value: string) => {
  const condition = new RegExp(/^[0-9-]{10}$/);
  return condition.test(value);
};

const checkNumeric = (value: string) => {
  const condition = new RegExp(/^[0-9]+$/);
  return condition.test(value);
};

const checkDecimal = (value: string) => {
  const condition = new RegExp(/^[0-9]+(\.[0-9]{1,2})?$/);
  return condition.test(value);
};

const checkZero = (value: string) => {
  const condition = new RegExp(/^[1-9][0-9]*$/);
  return condition.test(value);
};

const checkString = (value: string) => {
  const condition = new RegExp(/^[a-zA-Z ]+$/);
  return condition.test(value);
};

const checkBlankString = (value: string) => {
  const condition = new RegExp(/^\S.*\S$/);
  return condition.test(value);
};

export {
  Validation,
  checkEmail,
  checkPassword,
  checkPswd,
  checkName,
  checkMobileNumber,
  checkNumeric,
  checkString,
  checkBlankString,
  checkZero,
  checkDecimal,
};
