export const setStorage = (key: string, item: string): void => {
    if (typeof window !== 'undefined') {
        localStorage.setItem(key, item);
    }
}
export const getStorage = (key: string) => {
    if (typeof window !== 'undefined') {
        const data: any = localStorage.getItem(key);
        return data;
    }
}

export const removeStorage = (): void=> {
    if (typeof window !== 'undefined') {
        localStorage.clear();
    }
}