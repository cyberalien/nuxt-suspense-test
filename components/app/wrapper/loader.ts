export function loadSomeAsyncContent(): Promise<{
  key: string;
}> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        key: "loader-0",
      });
    }, 250);
  });
}
