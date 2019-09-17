
let positions = [
    { name: "Junior",   salary: 500,    description: "la-la-la" },
    { name: "Middle",   salary: 1500,   description: "la-la-la" },
    { name: "Senior",   salary: 2500,   description: "la-la-la" }
];

let getPosition = (name) => {
    return positions.find((p) => {
        return p.name == name;
    });
};
let loadPosition = (name) => {
    let p = getPosition(name);
    let html = `
    <div>        
        <h2>`+ p.name + `  UI/UX designer</h2>
        <div>
            <label>Salary: `+ p.salary + `</label>
        </div>
        <div>
            <label>Description: `+ p.description + `</label>
        </div>
    </div>
    `;
    let container = document.getElementById('position');
    if (container) {
        if (container.innerHTML == html)
            container.innerHTML = '';
        else
            container.innerHTML = html;
    }
};
