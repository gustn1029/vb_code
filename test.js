const mainTag = document.querySelector("#main")
        mainTag.innerHTML = "<p class='count'>click</p>"
        const countTag = document.querySelector(".count")
        let sum = 0
        countTag.addEventListener('click', function(){
            sum += 1
            countTag.textContent = 'your count : ' + sum
        })