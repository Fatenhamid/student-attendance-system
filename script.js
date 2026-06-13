let jobs = [];

function addJob() {
    let company = document.getElementById("company").value;
    let position = document.getElementById("position").value;
    let date = document.getElementById("date").value;
    let status = document.getElementById("status").value;

    if(company === "" || position === "") {
        alert("Please fill all fields");
        return;
    }

    let job = {
        company,
        position,
        date,
        status
    };

    jobs.push(job);
    displayJobs();
    updateStats();

    // clear inputs
    document.getElementById("company").value = "";
    document.getElementById("position").value = "";
    document.getElementById("date").value = "";
}

function displayJobs() {
    let list = document.getElementById("jobList");
    list.innerHTML = "";

    jobs.forEach((job, index) => {
        list.innerHTML += `
            <div class="job">
                <h3>${job.company}</h3>
                <p>${job.position}</p>
                <p>${job.date}</p>
                <p class="status">Status: ${job.status}</p>
                <button onclick="deleteJob(${index})">Delete</button>
            </div>
        `;
    });
}

function deleteJob(index) {
    jobs.splice(index, 1);
    displayJobs();
    updateStats();
}

function updateStats() {
    document.getElementById("total").innerText = jobs.length;
}