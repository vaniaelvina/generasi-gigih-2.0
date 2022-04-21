import "./styles.css";

document.getElementById("app").innerHTML = `
<table id="myTable" border="1">
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
</table>
<br>
<button id="myButton">Count Average</button>
<p id="theAnswer"></p>
`;

const students = [
  { name: "Alice", age: 20 },
  { name: "Bob", age: 21 },
  { name: "Jane", age: 20 },
  { name: "Vania", age: 20 }
];

const table = document.querySelector("#myTable");
students.forEach((student) => {
  const tr = document.createElement("tr");
  const nameData = document.createElement("td");
  const ageData = document.createElement("td");

  nameData.innerHTML = student.name;
  ageData.innerHTML = student.age;
  tr.appendChild(nameData);
  tr.appendChild(ageData);
  table.appendChild(tr);
});

document.querySelector("#myButton").addEventListener("click", () => {
  const totalAges = students.reduce((acc, { age }) => acc + age, 0);
  document.querySelector("#theAnswer").innerHTML = totalAges / students.length;
});