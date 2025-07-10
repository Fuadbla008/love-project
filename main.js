const text = "I love you forever 💖";
    const typingElement = document.getElementById('typing');

    function typeLoop() {
      let index = 0;
      typingElement.innerHTML = '';

      function typeLetter() {
        if (index < text.length) {
          typingElement.innerHTML += text.charAt(index);
          index++;
          setTimeout(typeLetter, 100); // typing speed
        } else {
          // After complete, wait 3 seconds then restart
          setTimeout(typeLoop, 3000);
        }
      }

      typeLetter();
    }

    typeLoop(); // Start typing