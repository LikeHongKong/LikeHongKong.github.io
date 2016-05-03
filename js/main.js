 $(document).ready(function() {

     var showData = $('#show-data');

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


 });//End of ready 
