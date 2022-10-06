let opened = false



function borderChange() {

    if (opened === false) {
        document.getElementById("wild-section").style.borderBottomLeftRadius = "0rem";
        document.getElementById("wild-section").style.borderBottomRightRadius = "0rem";
        opened = true
    } else {
        setTimeout(() => {
            document.getElementById("wild-section").style.borderBottomLeftRadius = "2rem";
            document.getElementById("wild-section").style.borderBottomRightRadius = "2rem";
        }, 335)
        opened = false;
    }
}