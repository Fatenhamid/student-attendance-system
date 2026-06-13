let students = JSON.parse(localStorage.getItem("students")) || [];

function saveData() {
    localStorage.setItem("students", JSON.stringify(students));
}

function renderStudents() {
    const table = document.getElementById("studentTable");

    table.innerHTML = "";

    students.forEach((student, index) => {
        table.innerHTML += `
        <tr>
            <td>${student.name}</td>
            <td class="${student.status === 'Present' ? 'present' : 'absent'}">
                ${student.status}
            </td>
            <td>
                <button onclick="markPresent(${index})">Present</button>
                <button onclick="markAbsent(${index})">Absent</button>
                <button onclick="deleteStudent(${index})">Delete</button>
            </td>
        </tr>
        `;
    });
}

function addStudent() {
    const input = document.getElementById("studentName");

    if(input.value.trim() === "") return;

    students.push({
        name: input.value,
        status: "Absent"
    });

    input.value = "";

    saveData();
    renderStudents();
}

function markPresent(index) {
    students[index].status = "Present";
    saveData();
    renderStudents();
}

function markAbsent(index) {
    students[index].status = "Absent";
    saveData();
    renderStudents();
}

function deleteStudent(index) {
    students.splice(index, 1);
    saveData();
    renderStudents();
}

renderStudents();