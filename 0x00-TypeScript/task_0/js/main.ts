interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Jhon",
  lastName: "Doe",
  age: 20,
  location: "San Francisco, CA"
};

const student2: Student = {
  firstName: "Alejandro",
  lastName: "Arbelaez",
  age: 22,
  location: "Medellín, CO"
};

const studentsList: Student[] = [student1, student2];

const body: HTMLElement = document.body;

const table: HTMLTableElement = document.createElement('table');
table.innerHTML = `
  <thead>
    <tr>
      <th colspan="2">Students</th>
    </tr>
  </thead>`;

body.appendChild(table);

const tbody: HTMLTableSectionElement = document.createElement('tbody');
table.appendChild(tbody);

studentsList.forEach(({ firstName, location }: Student) => {
  const tr: HTMLTableRowElement = document.createElement('tr');
  const nameCell: HTMLTableDataCellElement = document.createElement('td');
  const locationCell: HTMLTableCellElement = document.createElement('td');

  nameCell.textContent = firstName;
  locationCell.textContent = location;

  tr.appendChild(nameCell);
  tr.appendChild(locationCell);

  tbody.appendChild(tr);
});
