function writeToHTML(data) {
    var cards = data.length;
    // if (i = 0, i < cards, i++) {

    return `
        ${renderManager(data)}
        `
    // }

    function renderManager(data) {
        return `
        <div class="card">
            <div class="card-header">
                <h5 class="card-title">${data[0].name}</h5>
                <div class="card-subtitle mb-2 text-muted">${data[0].role}</div>
            </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${data[0].id}</li>
            <li class="list-group-item">Email: ${data[0].email}</li>
            <li class="list-group-item">Office number: ${data[0].officeNumber}</li>
        </ul>
        </div>
    </div>
    </body>
</html>
        `;
    }
    function renderCards(data) {
        
        for (i = 0; i < cards; i ++) {
            if (data[i].role === 'manager') {
                return `
                <div class="card">
                <div class="card-header">
                    <h5 class="card-title">${data[i].name}</h5>
                    <div class="card-subtitle mb-2 text-muted">${data[i].role}</div>
                </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${data[i].id}</li>
                <li class="list-group-item">Email: ${data[i].email}</li>
                <li class="list-group-item">Office number: ${data[i].officeNumber}</li>
            </ul>
            </div>
                `
            }
            if (data[i].role === 'engineer') {
                return `
                <div class="card">
                <div class="card-header">
                    <h5 class="card-title">${data[i].name}</h5>
                    <div class="card-subtitle mb-2 text-muted">${data[i].role}</div>
                </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${data[i].id}</li>
                <li class="list-group-item">Email: ${data[i].email}</li>
                <li class="list-group-item">GitHub: ${data[i].github}</li>
            </ul>
            </div>
                `
            }
            if (data[i].role === 'intern') {
                return `
                <div class="card">
                <div class="card-header">
                    <h5 class="card-title">${data[i].name}</h5>
                    <div class="card-subtitle mb-2 text-muted">${data[i].role}</div>
                </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${data[i].id}</li>
                <li class="list-group-item">Email: ${data[i].email}</li>
                <li class="list-group-item">School: ${data[i].school}</li>
            </ul>
            </div>
                `
            }
        }
    }

}
function appendEngineer(data) {
    
}
module.exports = writeToHTML;
module.exports = appendEngineer;