// src/mockData.js
export const mockData = Array.from({ length: 50 }, (_, i) => ({
    id: `item-${i + 1}`,
    name: `Item ${i + 1}`,
    description: `Description for Item ${i + 1}`,
  }));
  