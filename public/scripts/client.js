document.addEventListener("DOMContentLoaded", function() {

  var $search_box = document.getElementById("search_box");
  var $submit = document.getElementById("submit");
  var $results = document.getElementById("results");



  $submit.addEventListener("click", () => {

    // Clear
    var input = $search_box.value;
    if(input !== "") $search_box.value = "";

    fetch('/api', {
        method: "GET",
        headers: { 'Content-Type': 'application/json' }
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        $results.innerHTML = JSON.stringify(data);
      })
      .catch(err => console.log('Fetch Error :-S', err)
    );

    if(input !== "") $search_box.value = "";


  })
})
