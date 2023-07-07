interface StorageItem {
  value: any;
  expiry: number;
}

const expiringStorage = {
  set(key: string, value: any, time: number): void {
    const now = new Date();
    const item: StorageItem = {
      value: value,
      expiry: now.getTime() + time * 60 * 1000, // time is in minutes
    };
    localStorage.setItem(key, JSON.stringify(item));
  },
  get(key: string): any {
    const itemStr = localStorage.getItem(key);

    // if the item doesn't exist, return null
    if (!itemStr) {
      return null;
    }

    const item: StorageItem = JSON.parse(itemStr);
    const now = new Date();

    // compare the expiry time of the item with the current time
    if (now.getTime() > item.expiry) {
      // If the item is expired, delete the item from storage and return null
      localStorage.removeItem(key);
      return null;
    }
    return item.value;
  },
};

export default expiringStorage;
