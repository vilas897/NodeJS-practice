var fs = require('fs');

fs.readFile('readme.txt', 'utf8', function(err, data){
  fs.writeFile('writeme.txt', 'welcome '+ data);
  console.log(data);
});

console.log('ssup');
