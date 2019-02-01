const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  const body = document.querySelector('body');
  let index = 0;
  body.addEventListener('keydown', function(event) {
    console.log(`event.detail = ${event.detail}`);
    console.log(`event.which = ${event.which}`);
    console.log(`event.location = ${event.location}`);
    const key = parseInt(event.detail || event.which);

    if (key === code[index]) {
      index++;
      if (index === code.length) {
        alert("Hurray!");
        index = 0;
      }
    } else {
      index = 0;
    }
  });
};
init();
