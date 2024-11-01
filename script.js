setInterval(() => {
    // get time indicator elements
    let hours = document.getElementById("hrs");
    let minutes = document.getElementById("mins");
    let seconds = document.getElementById("secs");
    let ampm = document.getElementById("ampm");
    
    // digits time indicator
    let hh = document.getElementById("hh");
    let mm = document.getElementById("mm");
    let ss = document.getElementById("ss");
    
    // dot time indicator
    let dotH = document.querySelector(".h_dot");
    let dotM = document.querySelector(".m_dot");
    let dotS = document.querySelector(".s_dot");
    
    // get current time
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ap = h >= 12 ? "PM" : "AM";
    
    // convert to 12 hour format
    if (h > 12) {
        h = h - 12;
    }
    // handle midnight (0 hours)
    if (h === 0) {
        h = 12;
    }
    
    // add 0 before single digit
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    
    // set time and label
    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    ampm.innerHTML = ap;
    
    // set time circular indicator (adjusted from 440 to 283 for smaller circle)
    hh.style.strokeDashoffset = 283 - (283 * h) / 12;
    mm.style.strokeDashoffset = 283 - (283 * m) / 60;
    ss.style.strokeDashoffset = 283 - (283 * s) / 60;
    
    // set dot time position indicator
    dotH.style.transform = `rotate(${h * 30}deg)`;
    dotM.style.transform = `rotate(${m * 6}deg)`;
    dotS.style.transform = `rotate(${s * 6}deg)`;
}, 1000);
