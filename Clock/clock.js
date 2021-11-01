const wrapper = document.createElement('div');

wrapper.setAttribute('class', 'wrapper');
document.body.appendChild(wrapper);

const theDate = document.createElement('h1');
theDate.setAttribute('class', 'date');
wrapper.appendChild(theDate);

const clock = document.createElement('h1');
clock.setAttribute('class', 'clock');
wrapper.appendChild(clock);

let date = new Date();

let longMonth = new Intl.DateTimeFormat('ge-GE', { month: 'long' }).format(
  date
);

theDate.innerHTML = `${date.getDate()} ${longMonth} ${date.getFullYear()}`;
clock.innerHTML = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;

setTimeout(() => {
  setInterval(() => {
    date = new Date();
    clock.innerHTML = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;
  }, 1000);
}, 1000 - date.getMilliseconds());
