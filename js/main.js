 $(document).ready(function() {
    GenerateContent();
 });//End of ready 


function GenerateContent(){
  $.getJSON('data/Project.json', function(data) {
         //console.log(data);

         var items = data.items.map(function(item) {//console.log(item.Time+'||'+item.Name+'||'+item.url);
         console.log(item.Time);
             return '<tr><td>'+'<a href='+item.url+'>'+item.Name+'</a>'+'</td></tr>';
         });
         var tableheader='<table id="wechattable" class="table table-striped table-bordered" cellspacing="0" width="100%"><thead> <tr> <th>LikeHK 精彩文章</th>  </thead><tbody>'
         //showData.empty();
         if (items.length) {
          //show data  Contentdata
             var content = tableheader+ items.join('')+'</tbody></table>';
             $('#Contentdata').html(content);
             $('#wechattable').DataTable({
                 "searching": false,
                   "bInfo": false,
                   "info": false
             });
         }
     });
     //draw Table 
     
     
}
