const table_data = [ { first_name : 'Rose',
                     last_name  : 'Tyler',
                     home       : 'Earth' },
                   { first_name : 'Zoe',
                     last_name  : 'Heriot',
                     home       : 'Space Station W3'},
                   { first_name : 'Jo',
                     last_name  : 'Grant',
                     home       : 'Earth'},
                   { first_name : 'Leela',
                     last_name  : null,
                     home       : 'Unspecified'},
                   { first_name : 'Romana',
                     last_name  : null,
                     home       : 'Gallifrey'},
                   { first_name : 'Clara',
                     last_name  : 'Oswald',
                     home       : 'Earth'},
                   { first_name : 'Adric',
                     last_name  : null,
                     home       : 'Alzarius'},
                   { first_name : 'Susan',
                     last_name  : 'Foreman',
                     home       : 'Gallifrey'} ];

const createTable = (addToElement) => {
    $(`<table>
          <thead>
          <tr>
             <th>First Name</th>
             <th>Last Name</th>
             <th>Home</th>
          </tr>
          </thead>
          <tbody id="table_body">
          
          </tbody>
        </table>`
    ).appendTo(addToElement)
    addRowsToTable(table_data);
  }

const addRowsToTable = (data) => {
  data.forEach( function(item){
    if(!item.last_name) {
      item.last_name = "Unspecified"
    }
    $(`<tr>
        <td>${item.first_name}</td>
        <td>${item.last_name}</td>
        <td>${item.home}</td>
      </tr>`
    ).appendTo("#table_body")
  })
}

$( document ).ready(function() {
  createTable(document.body);
});
