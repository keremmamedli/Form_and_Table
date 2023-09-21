const form = document.querySelector("#userForm");
const userList = document.querySelector("#userList");
const userArray = [];

form.addEventListener("submit", addUser);

function addUser(e) {
    e.preventDefault();
    const nickName = e.target.elements.nickName.value;
    const age = e.target.elements.Age.value;
    const description = e.target.elements.Description.value;

    const userObj = {
        nickName: nickName,
        age: age,
        description: description
    };

    userArray.push(userObj);

    clearForm();

    renderUserList();
}

function clearForm() {
    form.reset();
}

function renderUserList() {
    userList.innerHTML = '';

    userArray.forEach((user, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${user.nickName}</td>
            <td>${user.age}</td>
            <td>${user.description}</td>
        `;
        userList.appendChild(row);
    });
}
