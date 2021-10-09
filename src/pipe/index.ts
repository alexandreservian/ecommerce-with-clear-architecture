const pipe =
  (...fns: Array<Function>) =>
  (x: any) =>
    fns.reduce((v, f) => f(v), x);

export default pipe;
