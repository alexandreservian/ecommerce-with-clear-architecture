import pipe from "../pipe";
const LENGTH_CPF = 11;
const FACTOR_FIRST_VERIFIER_DIGIT = 9;
const FACTOR_SECOND_VERIFIER_DIGIT = 10;

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

const extractVerifierDigits = (cpf: string) => {
  return cpf.slice(9);
};

const calculateCheckDigit = (firstDigits: string, factor: number): number => {
  const sumOfAllDigits: number = firstDigits
    .slice(0, factor)
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
  const checkDigits: string = extractVerifierDigits(cpf);
  const firstDigit: number = calculateCheckDigit(
    cpf,
    FACTOR_FIRST_VERIFIER_DIGIT
  );
  const secondDigit: number = calculateCheckDigit(
    cpf,
    FACTOR_SECOND_VERIFIER_DIGIT
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
