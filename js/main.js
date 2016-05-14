 $(document).ready(function() {
    GenerateContent();
    // var showData = $('#show-data');
/*
     $.getJSON('data/Project.json', function(data) {
         console.log(data);

         var items = data.items.map(function(item) {
             console.log(item.key);
             console.log(item.value);
             return item.key + ': ' + item.value;
         });

         showData.empty();
         if (items.length) {
             var content = '<li>' + items.join('</li><li>') + '</li>';
             var list = $('<ul />').html(content);
             showData.append(list);
         }
     });
    */

 });//End of ready 


function GenerateContent(){
  $.getJSON('data/Project.json', function(data) {
         //console.log(data);

         var items = data.items.map(function(item) {
             console.log(item.Time+'||'+item.Name+'||'+item.url);
             return '<tr><td>'+'<a href='+item.url+'>'+item.Name+'</a>'+'</td></tr>';
         });
         var tableheader='<table id="example" class="table table-striped table-bordered" cellspacing="0" width="100%"><thead> <tr> <th>Name</th>  </thead><tbody>'
         //showData.empty();
         if (items.length) {
          //show data  Contentdata
             var content = tableheader+ items.join('')+'</tbody></table>';
             $('#Contentdata').html(content);
             //var list = $('<ul />').html(content);
            // showData.append(list);
         }
     });
 
 
}
