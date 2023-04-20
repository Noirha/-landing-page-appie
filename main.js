
let sp = document.querySelectorAll("#ckeck");

sp.forEach(item => {
    item.addEventListener("click", (eo) => {
        let b = eo.target.parentElement.parentElement.parentElement.parentElement.getElementsByTagName("div")[0];
        b.classList.toggle("avi")

        if (b.classList.contains("avi")) {
            b.style.display = "flex"
            b.style.transition = "var(--transtion--);";
        } else {
            b.style.display = "none"
        }

    })
})
sp.forEach(item => {
    item.addEventListener("click", (eo) => {

        let y = eo.target.parentElement;

        y.classList.toggle("active")

        if (y.classList.contains("active")) {
            y.innerHTML = `
    <i class="fa-solid fa-close"></i>
    `
            let k = document.getElementsByClassName("fa-close");
            k.style.color = "red"
        }
        else {
            y.innerHTML = `
<i class="fa-solid fa-list"></i>
`
            let g = document.getElementsByClassName("fa-list");
            g.style.color = "red"
        }
    })
})

