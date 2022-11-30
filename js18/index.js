// let n = prompt()

// let arr = [0,1]

// for(let i = 0; i <= n; i++){
//   arr.push(arr[i] + arr[i + 1]);
// }
 
// console.log(arr);

let arr = [
  {
    id: 1,
    name: 'AZIZs_KABLUK',
    budget: 500000,
    tax: 12,
    expensesPerYear: [
      {
        for: 'design',
        total: 60000
      },
      {
        for: 'material',
        total: 70000
      },
      {
        for: 'place',
        total: 120000
      },
    ]
  },
  {
    id: 2,
    name: 'KAMERON_CINEMA', 
    budget: 600000,
    tax: 12,
    expensesPerYear: [
      {
        for: 'camera',
        total: 90000
      },
      {
        for: 'actors',
        total: 140000
      },
      {
        for: 'electricity',
        total: 50000
      },
    ]
  },
  {
    id: 3,
    name: 'ISKANDARs_ZOO',
    budget: 450000,
    tax: 12,
    expensesPerYear: [
      {
        for: 'animals',
        total: 100000
      },
      {
        for: 'cloune',
        total: 15000
      },
      {
        for: 'food',
        total: 70000
      },
    ]
  },
  {
    id: 4,
    name: 'AMINs_SOOOO',
    budget: 800000,
    tax: 23,
    expensesPerYear: [
      {
        for: 'house',
        total: 200000
      },
      {
        for: 'cars',
        total: 150000
      },
      {
        for: 'family',
        total: 300000
      },
    ]
  },
]

let success = []
let unsuccess = []

for (let item of arr) { // цикл чтобы достать каждый айтем  
  item.expensesPerMonth = 0 // создаем новый ключ
  let budgetForMonth = item.budget / 12 // находим месячный юьбджет и сохраняем в переменную 

  for (let itemTwo of item.expensesPerYear) { // раскрываем расходы каждой компании (за год) 
    item.expensesPerMonth += itemTwo.total / 12 // прибавляем каждый расход к общей сумме деленную на 12 
  }
  
  item.expensesPerMonth += item.tax * budgetForMonth / 100
  // найти сумму алог за месяц 
  // прибавить его к расходам
  // ...............................
  
  item.percent = Math.round(item.expensesPerMonth * 100 / budgetForMonth)// создаем новй ключ процент 
  // присваиваем к нему соотношение трат к месячному бьджету и округляем


  //1
  item.percent > 70 ? success.push(item) : unsuccess.push(item)


}


console.log(success, unsuccess)




console.table(arr);