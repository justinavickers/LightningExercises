    //  I want you to put an event listener on the container div and when the font
    //  button is clicked I want the font to change
    //  and when the color button is clicked I want the text color to change.
    //  Make the necessary changes to the HTML to get it
    //  to work. You will need to make a css file with 2 classes on it!


    function addColor(){
      let color = document.getElementById("container")
      color.classList.toggle("color")
    }

    function addFont(){
      let font = document.getElementById("container")
      font.classList.toggle("font")
    }
    let btnColor = document.getElementById("colorBTN")
    btnColor.addEventListener("click", function (){
      addColor()
    })

    let btnFont = document.getElementById("fontBTN")
    btnFont.addEventListener("click", function (){
      addFont()
    })