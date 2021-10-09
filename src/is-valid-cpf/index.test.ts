import isValidCpf from "./index";

it("should return true when CPF is 02820139035", () => {
  const cpf: string = "02820139035";
  const result: boolean = isValidCpf(cpf);

  expect(result).toBe(true);
});

it("should return false when CPF is bigger than length 11", () => {
  const cpf: string = "792976240811";
  const result: boolean = isValidCpf(cpf);

  expect(result).toBe(false);
});

it("should return false when CPF is invalid: 14859403949", () => {
  const cpf: string = "14859403949";
  const result: boolean = isValidCpf(cpf);

  expect(result).toBe(false);
});

it("should return false when CPF is invalid: 00000000000", () => {
  const cpf: string = "00000000000";
  const result: boolean = isValidCpf(cpf);

  expect(result).toBe(false);
});

it("should return false when CPF is invalid: 11111111111", () => {
  const cpf: string = "11111111111";
  const result: boolean = isValidCpf(cpf);

  expect(result).toBe(false);
});

it("should return false when CPF is invalid: 22222222222", () => {
  const cpf: string = "22222222222";
  const result: boolean = isValidCpf(cpf);

  expect(result).toBe(false);
});

it("should return false when CPF is valid: 55513042053", () => {
  const cpf: string = "55513042053";
  const result: boolean = isValidCpf(cpf);

  expect(result).toBe(true);
});

it("should return false when CPF is valid: 68116310070", () => {
  const cpf: string = "68116310070";
  const result: boolean = isValidCpf(cpf);

  expect(result).toBe(true);
});
