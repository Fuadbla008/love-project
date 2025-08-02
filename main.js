// const text = "Do you love me 💖";
//     const typingElement = document.getElementById('typing');

//     function typeLoop() {
//       let index = 0;
//       typingElement.innerHTML = '';

//       function typeLetter() {
//         if (index < text.length) {
//           typingElement.innerHTML += text.charAt(index);
//           index++;
//           setTimeout(typeLetter, 100); // typing speed
//         } else {
//           // After complete, wait 3 seconds then restart
//           setTimeout(typeLoop, 3000);
//         }
//       }

//       typeLetter();
//     }

//     typeLoop(); // Start typing




    // button style

    const noBtn = document.getElementById('noBtn');
    const container = document.getElementById('container2');

    noBtn.addEventListener('mouseover', () => {
      const containerRect = container.getBoundingClientRect();
      const btnRect = noBtn.getBoundingClientRect();

      const maxX = container.clientWidth - noBtn.offsetWidth;
      const maxY = container.clientHeight - noBtn.offsetHeight;

      const newX = Math.floor(Math.random() * maxX);
      const newY = Math.floor(Math.random() * maxY);

      noBtn.style.left = newX + "px";
      noBtn.style.top = newY + "px";
    });