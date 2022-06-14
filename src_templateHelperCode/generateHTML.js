const a = require('../index');

function generateHTML(data) {
    return `
<!DOCTYPE html>
<html lang="en">
 <head>
     <meta charset="UTF-8">
     <meta http-equiv="X-UA-Compatible" content="IE=edge">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <link rel=stylesheet href='../dist_HTML_Css/style.css'>
     <title>Team Profiles</title>
 </head>
 <body>
   <header id="title">Team Profiles</header>
   <div class="card">
     <div class="container">
       <h4><b> ${JSON.stringify(data[0].name)} ${JSON.stringify(data[0].role)}</b></h4>
       <ul><li>ID:${JSON.stringify(data[0].id)}</li> <li>Email:<a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new"</a>${JSON.stringify(data[0].email)}</a></li><li> Office Number:${JSON.stringify(data[0].officeNumber)}</li></ul>
      </div>
    </div>
    <div class="card">
     <div class="container">
       <h4><b> ${JSON.stringify(data[1].name)} ${JSON.stringify(data[1].role)}</b></h4>
       <ul><li> ID:${JSON.stringify(data[1].id)}</li> <li> Email:<a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new"</a>${JSON.stringify(data[1].email)} </li><li> GitHub:<a href="https://github.com/"</a>${JSON.stringify(data[1].github)}</li></ul>
      </div>
    </div>
    <div class="card">
     <div class="container">
       <h4><b> ${JSON.stringify(data[2].name)} ${JSON.stringify(data[2].role)}</b></h4>
       <ul><li> ID:  ${JSON.stringify(data[2].id)}</li><li> Email:<a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new"</a>${JSON.stringify(data[2].email)}</a></li><li> School:${JSON.stringify(data[2].school)}</li></ul>
      </div>
    </div>
 </body>
</html>
    `
}



module.exports = generateHTML;

// ${JSON.stringify(data)} backup if can't make html look nice