const button = document.getElementById("fetchBtn");
const output = document.getElementById("output");

button.addEventListener("click", () => {
    output.innerHTML = "Loading...";

    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {
            output.innerHTML = "";

            data.forEach(user => {
                const div = document.createElement("div");
                div.classList.add("user");

                div.innerHTML = `
                    <strong>${user.name}</strong><br>
                    Email: ${user.email}<br>
                    City: ${user.address.city}
                `;

                output.appendChild(div);
            });
        })
        .catch(error => {
            output.innerHTML = "Error fetching data.";
            console.error(error);
        });
});