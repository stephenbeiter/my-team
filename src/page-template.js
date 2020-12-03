const genPage = data => {
  return `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
    integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
  <title>My Team</title>
</head>

<body>
  <div class="jumbotron jumbotron-fluid bg-secondary text-center">
    <h1 class="text-white">My Team</h1>
  </div>
  <div class="container">
    <div class="row">
      ${data}
    </div>
  </div>

</body>

</html>
`;
};

const genCard = data => {
  return `<div class="col">
            <div class="card shadow border-dark mb-4 mx-auto" style="width: 20rem;">
              <div class="card-header text-white bg-info">
                <h3 class="card-title">${data.name}</h3>
                <h5>${data.icon} ${data.getRole()}</h5>
              </div>
              <div class="card-body">
                <div class="card">
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${data.id}</li>
                    <li class="list-group-item">Email:<a href="mailto:${data.email}"> ${data.email}</a></li>
                    <li class="list-group-item">${data.roleInfo}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
  `;
};

module.exports = { genPage, genCard };