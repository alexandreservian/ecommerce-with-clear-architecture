import isValidCpf from "./index";

it("should return true when CPF is 79297624081", () => {
  const cpf: number = 79297624081;
  const result = isValidCpf(cpf);

  expect(result).toBeTruthy();
});
