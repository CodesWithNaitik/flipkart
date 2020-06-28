showNotes()
function showNotes() {
    let notes = localStorage.getItem("id");
    if (notes == null) {
      notesObj = [];
    } else {
      notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function(element, index) {
      html +=` 
      <div >
      <div  class="grip">
        <div class="bordr"><img class=" img-fluid" src="../${element.img}"></div>
        <div class="grip2 ">
          <div style=" text-align: center; font-size: 2rem;">${element.head}</div>
          <p class="text-center texrt" >
          Quidem quasi quia dolorem, suscipit consequuntur eius temporibus rerum aliquid eligendi beatae officiis earum
          accusamus voluptates totam omnis asperiores enim, necessitatibus voluptatum! Ducimus, harum magni exercitationem
          esse deleniti veritatis obcaecati officia sequi quia.</p>
          <div class="text-center">
            <h6>Price :-<del>1000</del> 500 Rs. </h6>
          </div>
          <div class="text-center"><a type="button" class="btn btn-success dele">View Details</a>
            <span id="${index}" class="btn btn-success text-capitalize" onclick="deleteNote(this.id)">Delete</span></div>
      
          </div>
        </div>
        <div>
      `;
    });
    let notesElm = document.getElementById("cart");
    if (notesObj.length != 0) {
      notesElm.innerHTML = html;
    } else {
      notesElm.innerHTML = `<p style="text-align:center;">Nothing to show! Use "Add To Cart"<p>`;
    }
  }
  
  // Function to delete a note
  function deleteNote(index) {
    let notes = localStorage.getItem("id");
    if (notes == null) {
      notesObj = [];
    } else {
      notesObj = JSON.parse(notes);
    }
  
    notesObj.splice(index, 1);
    localStorage.setItem("id", JSON.stringify(notesObj));
    showNotes();
  }