/* function ab(){
    function cd(){
        console.log("I am cd");
    }
    return cd;
}
let ef = ab();
// ef();
// This is a example of clouser in javascript
function fetchData(callback) {
    // Simulating an asynchronous operation (e.g., fetching data from a server)
    setTimeout(function() {
      const data = { name: 'John', age: 30 };
      callback(data);
    }, 2000);
  }
  
  function processData(data) {
    console.log('Processing data:', data);
  }
  
  fetchData(processData);
   */
let it = [1, 2, 3, 4, 5, 5, 5, 7, 5];

let test = [];
for (let i = 0; i < it.length; i++) {
  const element = it[i];
  if(!test.includes(element)) { 
    test.push(element)
  }

}

console.log(test)