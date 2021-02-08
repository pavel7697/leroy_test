const goods = {
  displayedName: {
    displayedName: {
      value: ["Профиль маячковый ПВХ 10 мм L3м"],
      description: "Полное наименование товара для клиента",
    },
  },
  stock: {
    stocks: {
      34: {
        2: "35",
        3: "42",
        4: "58",
        5: "57",
        6: "112",
        20: "51",
        22: "78",
        26: "34",
        32: "22",
        35: "358",
        40: "28",
        43: "68",
        45: "58",
        49: "31",
        51: "29",
        56: "42",
        62: "26",
        64: "0",
        65: "57",
        86: "15",
        114: "41",
        117: "46",
        143: "46",
        162: "4",
        171: "0",
        176: "12",
      },
    },
  },
};

const getName = (goods) => {
  return goods.displayedName.displayedName.value;
};

const getStocks = (goods) => {
  stocks = [];
  obj = goods.stock.stocks["34"];
  for (elem in obj) {
    if (obj[elem] > 0) {
      stocks.push(elem);
    }
  }
  return stocks;
};

const maxStock = (goods) => {
  arr = [];
  for (elem in goods.stock.stocks["34"]) {
    arr.push({ key: elem, value: parseInt(goods.stock.stocks["34"][elem]) });
  }
  let maxQuant = arr.reduce(
    (prev, cur) => (prev.value > cur.value ? prev : cur),
    1
  );
  return JSON.parse('{"' + maxQuant.key + '":"' + maxQuant.value + '"}');
};

console.log(getName(goods));
console.log(getStocks(goods));
console.log(maxStock(goods));
