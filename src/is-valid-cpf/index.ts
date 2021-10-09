import pipe from "../pipe";
const LENGTH_CPF = 11;

const hasElevenDigits = (cpf: string): [boolean, string] => {
  const check: boolean = cpf.length === LENGTH_CPF;
  return [check, cpf];
};

const isOnlyNumber = ([isValid, cpf]: [boolean, string]): [boolean, string] => {
  const isNumber: boolean = isValid ? /^\d{11}$/.test(cpf) : false;

  return [isNumber, cpf];
};

const isDontRepeatCpf = ([isValid, cpf]: [boolean, string]): [
  boolean,
  string
] => {
  const isDontRepeat: boolean = isValid
    ? !cpf.split("").every((digit) => digit === cpf[0])
    : false;

  return [isDontRepeat, cpf];
};

const calculateCheckDigit = (firstDigits: string): number => {
  const sumOfAllDigits: number = firstDigits
    .split("")
    .reverse()
    .map((digit, index) => {
      return parseInt(digit) * (index + 2);
    })
    .reduce((acc, digit) => acc + digit, 0);
  const rest: number = sumOfAllDigits % LENGTH_CPF;
  return rest >= 2 ? LENGTH_CPF - rest : 0;
};

const validateCpf = (cpf: string): boolean => {
  const [firstNineDigits, checkDigits] = cpf
    .replace(/(\d{9})(\d{2})/gm, "$1-$2")
    .split("-");
  const firstDigit: number = calculateCheckDigit(firstNineDigits);
  const secondDigit: number = calculateCheckDigit(
    `${firstNineDigits}${firstDigit}`
  );

  return checkDigits === `${firstDigit}${secondDigit}`;
};

const isValidToValidate = ([isValid, cpf]: [boolean, string]): boolean => {
  return isValid ? validateCpf(cpf) : false;
};

const isValidCpf = (cpf: string): boolean => {
  return pipe(
    hasElevenDigits,
    isOnlyNumber,
    isDontRepeatCpf,
    isValidToValidate
  )(cpf);
};

export default isValidCpf;
