function writeToHTML(data) {
    var cards = data.length;
    // if (i = 0, i < cards, i++) {
    return `
        ${renderManager(data)}

        </div>
        </body>
        
        </html>
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
        `;
    }
















}
module.exports = writeToHTML;