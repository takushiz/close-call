window.addEventListener("load", function(){
function genre_color() {
  const boxlist = document.querySelectorAll(".message-box")
  
  boxlist.forEach(function(box) {
    const genre = box.getElementsByClassName("genre")
    const genre_name = genre[0].innerText
    if (genre_name == "製作中") {
      box.classList.add("bgColor01")
    } else if (genre_name == "チェック中") {
      box.classList.add("bgColor02")
    } else if (genre_name == "梱包中") {
      box.classList.add("bgColor03")
    } else if (genre_name == "準備中") {
      box.classList.add("bgColor04")
    } else if (genre_name == "施工中") {
      box.classList.add("bgColor05")
    } else {
      box.classList.add("bgColor06")
    }
  })
}

genre_color()
})