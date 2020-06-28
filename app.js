console.log("Welcome to notes app. This is app.js");
showNotes();
bag1()
bag3()
bag4()
bag5()
bag2()
mobile1()
mobile2()
mobile3()
mobile4()
mobile5()
earings5()
earings4()
earings3()
earings2()
earings1()
mouse1()
mouse3()
mouse4()
mouse2()
kitchen1()
kitchen2()
kitchen3()
kitchen4()
kitchen5()
earphone1()
earphone3()
earphone4()
earphone2()
pendrive1()
pendrive2()
pendrive3()
pendrive4()
pendrive5()
// If user ad
function mobile1(){
  let mobile2 = document.getElementById("mobile1");
  console.log(mobile2)
  mobile2.addEventListener("click", function(e) {
  let notes = localStorage.getItem("id");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let myObj = {
    title: "mobile2",
    head: "Oppo A9",
    img: "mobile1" + String(".png")
  }
  notesObj.push(myObj);
  localStorage.setItem("id", JSON.stringify(notesObj));
  console.log(notesObj);
  showNotes();
  });
}
function mobile3(){
  let mobile2 = document.getElementById("mobile3");
  console.log(mobile2)
  mobile2.addEventListener("click", function(e) {
  let notes = localStorage.getItem("id");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let myObj = {
    title: "mobile2",
    head: "Huawe",
    img: "mobile3" + String(".png")
  }
  notesObj.push(myObj);
  localStorage.setItem("id", JSON.stringify(notesObj));
  console.log(notesObj);
  showNotes();
  });
}
function mobile4(){
  let mobile2 = document.getElementById("mobile4");
  console.log(mobile2)
  mobile2.addEventListener("click", function(e) {
  let notes = localStorage.getItem("id");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let myObj = {
    title:"",
    head: "Water Proof",
    img: "Infinix" + String(".png")
  }
  notesObj.push(myObj);
  localStorage.setItem("id", JSON.stringify(notesObj));
  console.log(notesObj);
  showNotes();
  });
}
function mobile5(){
  let mobile5 = document.getElementById("mobile5");
  console.log(mobile5)
  mobile5.addEventListener("click", function(e) {
  let notes = localStorage.getItem("id");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let myObj = {
    title: "mobile5",
    head: "Nokia",
    img: "mobile5" + String(".png")
  }
  notesObj.push(myObj);
  localStorage.setItem("id", JSON.stringify(notesObj));
  console.log(notesObj);
  showNotes();
  });
}
function kitchen2(){
  let mobile2 = document.getElementById("kitchen2");
  console.log(mobile2)
  mobile2.addEventListener("click", function(e) {
  let notes = localStorage.getItem("id");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let myObj = {
    title: "mobile2",
    head: "Kitchen Appliances",
    img: "kitchen2" + String(".png")
  }
  notesObj.push(myObj);
  localStorage.setItem("id", JSON.stringify(notesObj));
  console.log(notesObj);
  showNotes();
  });
}
function kitchen3(){
  let mobile2 = document.getElementById("kitchen3");
  console.log(mobile2)
  mobile2.addEventListener("click", function(e) {
  let notes = localStorage.getItem("id");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let myObj = {
    title: "mobile2",
    head: "Kitchen Appliances",
    img: "kitchen3" + String(".png")
  }
  notesObj.push(myObj);
  localStorage.setItem("id", JSON.stringify(notesObj));
  console.log(notesObj);
  showNotes();
  });
}
function kitchen4(){
  let mobile2 = document.getElementById("kitchen4");
  console.log(mobile2)
  mobile2.addEventListener("click", function(e) {
  let notes = localStorage.getItem("id");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let myObj = {
    title: "mobile2",
    head: "Kitchen Appliances",
    img: "kitchen4" + String(".png")
  }
  notesObj.push(myObj);
  localStorage.setItem("id", JSON.stringify(notesObj));
  console.log(notesObj);
  showNotes();
  });
}
function kitchen5(){
  let mobile2 = document.getElementById("kitchen5");
  console.log(mobile2)
  mobile2.addEventListener("click", function(e) {
  let notes = localStorage.getItem("id");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let myObj = {
    title: "mobile2",
    head: "Kitchen Appliances",
    img: "kitchen5" + String(".png")
  }
  notesObj.push(myObj);
  localStorage.setItem("id", JSON.stringify(notesObj));
  console.log(notesObj);
  showNotes();
  });
}
function kitchen1(){
  let mobile2 = document.getElementById("kitchen1");
  console.log(mobile2)
  mobile2.addEventListener("click", function(e) {
  let notes = localStorage.getItem("id");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let myObj = {
    title: "mobile2",
    head: "Kitchen Appliances",
    img: "kitchen1" + String(".png")
  }
  notesObj.push(myObj);
  localStorage.setItem("id", JSON.stringify(notesObj));
  console.log(notesObj);
  showNotes();
  });
}
function pendrive1(){
  let mobile2 = document.getElementById("pendrive1");
  console.log(mobile2)
  mobile2.addEventListener("click", function(e) {
  let notes = localStorage.getItem("id");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let myObj = {
    title: "mobile2",
    head: "32 GB Pendrive",
    img: "pendrive1" + String(".png")
  }
  notesObj.push(myObj);
  localStorage.setItem("id", JSON.stringify(notesObj));
  console.log(notesObj);
  showNotes();
  });
}
function pendrive3(){
  let mobile2 = document.getElementById("pendrive3");
  console.log(mobile2)
  mobile2.addEventListener("click", function(e) {
  let notes = localStorage.getItem("id");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let myObj = {
    title: "mobile2",
    head: "16 GB Pendrive",
    img: "pendrive3" + String(".png")
  }
  notesObj.push(myObj);
  localStorage.setItem("id", JSON.stringify(notesObj));
  console.log(notesObj);
  showNotes();
  });
}
function pendrive4(){
  let mobile2 = document.getElementById("pendrive4");
  console.log(mobile2)
  mobile2.addEventListener("click", function(e) {
  let notes = localStorage.getItem("id");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let myObj = {
    title: "mobile",
    head: "Latest Pendrive",
    img: "pendrive4" + String(".png")
  }
  notesObj.push(myObj);
  localStorage.setItem("id", JSON.stringify(notesObj));
  console.log(notesObj);
  showNotes();
  });
}
function pendrive5(){
  let mobile2 = document.getElementById("pendrive5");
  console.log(mobile2)
  mobile2.addEventListener("click", function(e) {
  let notes = localStorage.getItem("id");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let myObj = {
    title: "mobile2",
    head: "32 GB Pendrive",
    img: "pendrive5" + String(".png")
  }
  notesObj.push(myObj);
  localStorage.setItem("id", JSON.stringify(notesObj));
  console.log(notesObj);
  showNotes();
  });
}
function pendrive2(){
  let mobile2 = document.getElementById("pendrive2");
  console.log(mobile2)
  mobile2.addEventListener("click", function(e) {
  let notes = localStorage.getItem("id");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let myObj = {
    title: "mobile2",
    head: "64 GB Pendrive",
    img: "pendrive2" + String(".png")
  }
  notesObj.push(myObj);
  localStorage.setItem("id", JSON.stringify(notesObj));
  console.log(notesObj);
  showNotes();
  });
}
function mobile2(){
  let mobile2 = document.getElementById("mobile2");
  console.log(mobile2)
  mobile2.addEventListener("click", function(e) {
  let notes = localStorage.getItem("id");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let myObj = {
    title: "mobile2",
    head: "Infinix",
    img: "mobile2" + String(".png")
  }
  notesObj.push(myObj);
  localStorage.setItem("id", JSON.stringify(notesObj));
  console.log(notesObj);
  showNotes();
  });
}
function earphone2(){
  let earphone2 = document.getElementById("earphone2");
  console.log(earphone2)
  earphone2.addEventListener("click", function(e) {
  let notes = localStorage.getItem("id");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let myObj = {
    title: "earphone2",
    head: "Vivio Earphones",
    img: "earphone2" + String(".png")
  }
  notesObj.push(myObj);
  localStorage.setItem("id", JSON.stringify(notesObj));
  console.log(notesObj);
  showNotes();
  });
}
function earphone3(){
  let earphone3 = document.getElementById("earphone3");
  console.log(earphone3)
  earphone3.addEventListener("click", function(e) {
  let notes = localStorage.getItem("id");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let myObj = {
    title: "earphone3",
    head: "Leanvo Earphones",
    img: "earphone3" + String(".png")
  }
  notesObj.push(myObj);
  localStorage.setItem("id", JSON.stringify(notesObj));
  console.log(notesObj);
  showNotes();
  });
}
function earphone4(){
  let earphone4 = document.getElementById("earphone4");
  console.log(earphone4)
  earphone4.addEventListener("click", function(e) {
  let notes = localStorage.getItem("id");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let myObj = {
    title: "earphone4",
    head: "Redmi Earphones",
    img: "earphone4" + String(".png")
  }
  notesObj.push(myObj);
  localStorage.setItem("id", JSON.stringify(notesObj));
  console.log(notesObj);
  showNotes();
  });
}
function earings2(){
  let earings2 = document.getElementById("earing2");
  console.log(earings1)
  earings2.addEventListener("click", function(e) {
  let notes = localStorage.getItem("id");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let myObj = {
    title: "earings2",
    head: "WArtificial Earings",
    img: "eaeing2" + String(".jpg")
  }
  notesObj.push(myObj);
  localStorage.setItem("id", JSON.stringify(notesObj));
  console.log(notesObj);
  showNotes();
  });
}
function earings3(){
  let earings3 = document.getElementById("earings3");
  console.log(earings3)
  earings3.addEventListener("click", function(e) {
  let notes = localStorage.getItem("id");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let myObj = {
    title: "earings3",
    head: "Stylish Jwellery",
    img: "eaeings3" + String(".jpg")
  }
  notesObj.push(myObj);
  localStorage.setItem("id", JSON.stringify(notesObj));
  console.log(notesObj);
  showNotes();
  });
}
function earings4(){
  let earings4 = document.getElementById("earing4");
  console.log(earings4)
  earings4.addEventListener("click", function(e) {
  let notes = localStorage.getItem("id");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let myObj = {
    title: "earings4",
    head: "Latest Brand",
    img: "earing4" + String(".jpg")
  }
  notesObj.push(myObj);
  localStorage.setItem("id", JSON.stringify(notesObj));
  console.log(notesObj);
  showNotes();
  });
}
function earings5(){
  let earings5 = document.getElementById("earings");
  console.log(earings5)
  earings5.addEventListener("click", function(e) {
  let notes = localStorage.getItem("id");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let myObj = {
    title: "earings5",
    head: "Artificial Jwellery",
    img: "eaeings" + String(".jpg")
  }
  notesObj.push(myObj);
  localStorage.setItem("id", JSON.stringify(notesObj));
  console.log(notesObj);
  showNotes();
  });
}
function earings1(){
  let earings1 = document.getElementById("earings1");
  console.log(earings1)
  earings1.addEventListener("click", function(e) {
  let notes = localStorage.getItem("id");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let myObj = {
    title: "earings1",
    head: "Brand New Jwellery",
    img: "eaeings1" + String(".jpg")
  }
  notesObj.push(myObj);
  localStorage.setItem("id", JSON.stringify(notesObj));
  console.log(notesObj);
  showNotes();
  });
}
function earphone1(){
  let earphone1 = document.getElementById("earphone1");
  console.log(earphone1)
  earphone1.addEventListener("click", function(e) {
  let notes = localStorage.getItem("id");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let myObj = {
    title: "earphone1",
    head: "Oppo Phone Orginal Earphones",
    img: "earphone1" + String(".png")
  }
  notesObj.push(myObj);
  localStorage.setItem("id", JSON.stringify(notesObj));
  console.log(notesObj);
  showNotes();
  });
}
function mouse2(){
  let mouse2 = document.getElementById("mouse2");
  console.log(mouse2)
  mouse2.addEventListener("click", function(e) {
  let notes = localStorage.getItem("id");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let myObj = {
    title: "mouse2",
    head: "Latest",
    img: "mouse2" + String(".png")
  }
  notesObj.push(myObj);
  localStorage.setItem("id", JSON.stringify(notesObj));
  console.log(notesObj);
  showNotes();
  });
}
function mouse3(){
  let mouse3 = document.getElementById("mouse3");
  console.log(mouse3)
  mouse3.addEventListener("click", function(e) {
  let notes = localStorage.getItem("id");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let myObj = {
    title: "mouse3",
    head: "Brand New",
    img: "mouse3" + String(".png")
  }
  notesObj.push(myObj);
  localStorage.setItem("id", JSON.stringify(notesObj));
  console.log(notesObj);
  showNotes();
  });
}
function mouse4(){
  let mouse4 = document.getElementById("mouse4");
  console.log(mouse4)
  mouse4.addEventListener("click", function(e) {
  let notes = localStorage.getItem("id");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let myObj = {
    title: "mouse4",
    head: "Leanvo",
    img: "mouse4" + String(".png")
  }
  notesObj.push(myObj);
  localStorage.setItem("id", JSON.stringify(notesObj));
  console.log(notesObj);
  showNotes();
  });
}
function mouse1(){
  let mouse1 = document.getElementById("mouse1");
  console.log(mouse1)
  mouse1.addEventListener("click", function(e) {
  let notes = localStorage.getItem("id");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let myObj = {
    title: "mouse1",
    head: "dell Mouse",
    img: "mouse1" + String(".png")
  }
  notesObj.push(myObj);
  localStorage.setItem("id", JSON.stringify(notesObj));
  console.log(notesObj);
  showNotes();
  });
}
function bag2(){
  let bag2 = document.getElementById("bag2");
  console.log(bag2)
  bag2.addEventListener("click", function(e) {
  let notes = localStorage.getItem("id");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let myObj = {
    title: "bag2",
    head: "Brand New",
    img: "bag2" + String(".png")
  }
  notesObj.push(myObj);
  localStorage.setItem("id", JSON.stringify(notesObj));
  console.log(notesObj);
  showNotes();
  });
}
function bag3(){
  let bag3 = document.getElementById("bag3");
  console.log(bag3)
  bag3.addEventListener("click", function(e) {
  let notes = localStorage.getItem("id");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let myObj = {
    title: "bag3",
    head: "Latest Design",
    img: "bag3" + String(".png")
  }
  notesObj.push(myObj);
  localStorage.setItem("id", JSON.stringify(notesObj));
  console.log(notesObj);
  showNotes();
  });
}
function bag4(){
  let bag4 = document.getElementById("bag4");
  console.log(bag4)
  bag4.addEventListener("click", function(e) {
  let notes = localStorage.getItem("id");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let myObj = {
    title: "bag4",
    head: "Water Proof Bag",
    img: "bag4" + String(".png")
  }
  notesObj.push(myObj);
  localStorage.setItem("id", JSON.stringify(notesObj));
  console.log(notesObj);
  showNotes();
  });
}
function bag5(){
  let bag5 = document.getElementById("bag5");
  console.log(bag5)
  bag5.addEventListener("click", function(e) {
  let notes = localStorage.getItem("id");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let myObj = {
    title: "bag5",
    head: "Water Proof",
    img: "bag5" + String(".png")
  }
  notesObj.push(myObj);
  localStorage.setItem("id", JSON.stringify(notesObj));
  console.log(notesObj);
  showNotes();
  });
}
function bag1(){
  let bag1 = document.getElementById("bag1");
  console.log(bag1)
  bag1.addEventListener("click", function(e) {
  let notes = localStorage.getItem("id");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let myObj = {
    title: "bag1",
    head: "Bag",
    img: "bag1" + String(".png")
  }
  notesObj.push(myObj);
  localStorage.setItem("id", JSON.stringify(notesObj));
  console.log(notesObj);
  showNotes();
  });
}
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
    <div i class="grip">
      <div class="bordr"><img class=" img-fluid" src="../${element.img}"></div>
      <div class="grip2" style="background-color: red;">
        <div style=" text-align: center; font-size: 2rem;">${element.head}</div>
        <p class="text-center texrt" >
        Quidem quasi quia dolorem, suscipit consequuntur eius temporibus rerum aliquid eligendi beatae officiis earum
        accusamus voluptates totam omnis asperiores enim, necessitatibus voluptatum! Ducimus, harum magni exercitationem
        esse deleniti veritatis obcaecati officia sequi quia.</p>
        <div class="text-center">
          <h6>Price :-<del>1000</del> 500 Rs. </h6>
        </div>
        <div class="text-center"><a type="button" class="btn btn-success ">View Details</a>
          <span id="${index}" class="btn btn-success text-capitalize" onclick="deleteNote(this.id)">Delete</span></div>
    
        </div>
      </div>
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


// // let search = document.getElementById('searchTxt');
// // search.addEventListener("input", function(){

// //     let inputVal = search.value.toLowerCase();
// //     // console.log('Input event fired!', inputVal);
// //     let noteCards = document.getElementsByClassName('noteCard');
// //     Array.from(noteCards).forEach(function(element){
// //         let cardTxt = element.getElementsByTagName("p")[0].innerText;
// //         if(cardTxt.includes(inputVal)){
// //             element.style.display = "block";
// //         }
// //         else{
// //             element.style.display = "none";
// //         }
//         // console.log(cardTxt);
//     })
// })

/*
Further Features:
1. Add Title
2. Mark a note as Important
3. Separate notes by user
4. Sync and host to web server 
*/
