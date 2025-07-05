var sliders = [
  {
    src: "images/donut-with-topping-sprinkle-pink-background.jpg",
    head: "Lorem ipsum",
    title:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, labore!",
  },
  {
    src: "images/dom2.jpg",
    head: "Lorem ipsum",
    title:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, labore!",
  },
  {
    src: "images/dom3.jpg",
    head: "Lorem ipsum",
    title:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, labore!",
  },
  {
    src: "images/dom4.jpg",
    head: "Lorem ipsum",
    title:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, labore!",
  },
  {
    src: "images/flying-donuts-concept-donuts-with-white-chocolate-glaze-chocolate.jpg",
    head: "Lorem ipsum",
    title:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, labore!",
  },
  {
    src: "images/glazed-donuts-motion.jpg",
    head: "Lorem ipsum",
    title:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, labore!",
  },
];
function displaySliders() {
  var box = "";
  for (i = 0; i < sliders.length; i++) {
    box += `
 <div class="col-md-4">
      <div class="items position-relative"">
        <div class="image">
          <img src="${sliders[i].src}" class="w-100">
        </div>
        <div class="caption bg-white position-absolute ">
          <h3>${sliders[i].head}</h3>
          <p>${sliders[i].title}</p>
        </div>
      </div>
      
     </div>


`;
  }
  document.getElementById("rowData").innerHTML = box;
}
displaySliders();

var imgList = Array.from(document.querySelectorAll(".items .image  img"));
let lightContainer = document.querySelector(".light-container");
let btnClose = document.getElementById("close");
let currentSrc;
let prevBtn = document.getElementById("prev");
let nextBtn = document.getElementById("next");
let currenIndex;
let box = document.querySelector(".box");

//// events

for (let i = 0; i < imgList.length; i++) {
  imgList[i].addEventListener("click", function (e) {
    currenIndex = imgList.indexOf(e.target);
    currentSrc = e.target.getAttribute("src");
    showLightConatainer();
  });
}

btnClose.addEventListener("click", function () {
  hideLightConatainer();
});

nextBtn.addEventListener("click", function () {
  Slider(1);
});

prevBtn.addEventListener("click", function () {
  Slider(-1);
});

document.addEventListener("keydown", function (e) {
  if (!lightContainer.classList.contains("d-none")) {
    if (e.key == "ArrowLeft") {
      Slider(-1);
    } else if (e.key == "ArrowRight") {
      Slider(1);
    } else if (e.key == "Escape") {
      hideLightConatainer();
    }
  }
});

///functions

function showLightConatainer() {
  lightContainer.classList.remove("d-none");
  box.style.backgroundImage = `url(${currentSrc})`;
}
function hideLightConatainer() {
  lightContainer.classList.add("d-none");
}

function Slider(step) {
  currenIndex = currenIndex + step;
  if (currenIndex === imgList.length) {
    currenIndex = 0;
  } else if (currenIndex < 0) {
    currenIndex = imgList.length - 1;
  } else {
    currentSrc = imgList[currenIndex].getAttribute("src");
  }

  box.style.backgroundImage = `url(${currentSrc})`;
}
