export const toggleClick = (
  toggle: string,
  setInput: {
    (value: React.SetStateAction<string>): void;
    (arg0: string): any;
  },
  setIcon: {
    (value: React.SetStateAction<boolean>): void;
    (arg0: boolean): void;
  }
) => {
  if (toggle === "password") {
    setIcon(true);
    return setInput("text");
  }
  if (toggle === "text") {
    setIcon(false);
    return setInput("password");
  }
};
