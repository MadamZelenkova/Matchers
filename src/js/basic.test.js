import sorting from "./app.js";

const data = [
  { name: "мечник", health: 10 },
  { name: "маг", health: 100 },
  { name: "лучник", health: 80 },
];

const expectedSorting = [
{ name: "маг", health: 100 },
{ name: "лучник", health: 80 },
{ name: "мечник", health: 10 },
]

test("check of sorting from the higest level to the lowest", () => {
    const result = sorting(data);
    expect(result).toEqual(expectedSorting);
})

