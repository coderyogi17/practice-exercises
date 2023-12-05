let renders = 0;

//create a function which creates an ul with sub li lists
window.onload = () =>{
    let name = document.createElement("h1");
    name.innerText = "My Name is Darren";
  name.classList.add("name");
  document.body.appendChild(name);

  let details = [
    "I like pizza",
    "Some artists I listen to are Radiohead, Andrew Bird, and Squid",
    "I like learning about web development",
    "I used to wrestle in high school",
  ];

  addList("Details about me" , details);
  addClock();
  addImage(`https://sammysworld.org/wp-content/uploads/2020/10/inrainbows-1024x770.jpg`)
  birthdayCountdown();
  
};

function addList(title, details){
    let list = document.createElement("ul");
    let listTitle = document.createElement("h2");
    listTitle.innerText = title;
    list.appendChild(listTitle);

    for(let detail of details){
        let detailItem = document.createElement("li");
        detailItem.innerText= detail;
        detailItem.classList.add("detail");
        list.appendChild(detailItem);
    }
    list.classList.add("mydetails");
    document.body.appendChild(list);
}

function addClock() {
    let clockBody = document.createElement("p");
    setInterval(() => {
      let date = new Date();
      let hours = date.getHours();
      let minutes = date.getMinutes();
      let seconds = date.getSeconds();
      clockBody.innerText = `I'm in California, and currently it's ${
        hours === 0 ? 12 : hours % 12
      } : ${minutes < 10 ? `0${minutes}` : minutes} : ${
        seconds < 10 ? `0${seconds}` : seconds
      } ${hours >= 12 ? "PM" : "AM"}`;
    }, 1000);
  
    document.body.appendChild(clockBody);
  }
  
  function addImage(imageUrl) {
    let image = document.createElement("img");
    image.setAttribute("src", imageUrl);
    document.body.appendChild(image);
  }

  function birthdayCountdown() {
    let clockBody = document.createElement("p");
    setInterval(() => {
      let currentDate = new Date();
      let currentMonth = currentDate.getMonth();
      let currentDay = currentDate.getDate();
      let nextBirthday;
  
      //if today is after the date of my birthday for this year, set the next birthday date to the one next year
      //if its before, set it to the one this year
      if (currentMonth === 11 && currentDay > 23) {
        nextBirthday = new Date(currentDate.getFullYear() + 1, 11, 23);
      } else if ((currentMonth === 11 && currentDay < 23) || currentMonth < 11) {
        nextBirthday = new Date(currentDate.getFullYear(), 11, 23);
      }
  
      //if nextBirthday was not set, then it is my birthday today, so just display the text it is my birthday, otherwise display the countdown
      if (nextBirthday) {
        let millDif = Date.parse(nextBirthday.toDateString()) - Date.now();
        let days = Math.floor(millDif / 86400000);
        let numMSDays = days * 86400000;
        let hours = Math.floor((millDif - numMSDays) / 3600000);
        let numMSHours = hours * 3600000;
        let minutes = Math.floor((millDif - numMSDays - numMSHours) / 60000);
        let numMSMinutes = minutes * 60000;
        let seconds = Math.floor(
          (millDif - numMSDays - numMSHours - numMSMinutes) / 1000
        );
  
        clockBody.innerText = `Birthday Countdown: ${days} days, ${
          hours < 10 ? `0${hours}` : hours
        } hours, ${minutes < 10 ? `0${minutes}` : minutes} minutes, ${
          seconds < 10 ? `0${seconds}` : seconds
        } seconds`;
      } else {
        clockBody.innerText = "It's my birthday today!";
      }
    }, 1000);
    document.body.appendChild(clockBody);
  }