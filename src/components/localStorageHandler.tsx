export const setStorage = (key: string, item: string): void => {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, JSON.stringify(item));
  }
};
export const getStorage = (key: string) => {
  if (typeof window !== "undefined") {
    const data: any = localStorage.getItem(key);
    return JSON.parse(data);
  }
};

export const removeStorage = (): void => {
  if (typeof window !== "undefined") {
    localStorage.clear();
  }
};
