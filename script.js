// Hero typing animation
(function () {
  var output = document.getElementById('typed-output');

  var lines = [
    { text: 'whoami', cls: 'prompt glow', typed: true, pause: 400 },
    { text: 'FanaCode', cls: '', typed: false, pause: 400 },
    { text: '', cls: '', typed: false, pause: 300 },
    { text: 'cat intro.txt', cls: 'prompt glow', typed: true, pause: 400 },
    { text: 'Computer Science student | M2 @ University of Poitiers', cls: '', typed: false, pause: 400 },
    { text: 'Passionate about clean code and building things that matter.', cls: '', typed: false, pause: 0 },
  ];

  var lineIndex = 0;

  function typeLine(text, element, charIndex, callback) {
    if (charIndex < text.length) {
      element.textContent += text[charIndex];
      setTimeout(function () {
        typeLine(text, element, charIndex + 1, callback);
      }, 60);
    } else {
      callback();
    }
  }

  function processLine() {
    if (lineIndex >= lines.length) return;

    var line = lines[lineIndex];
    var p = document.createElement('p');
    if (line.cls) p.className = line.cls;
    output.appendChild(p);

    if (line.typed) {
      typeLine(line.text, p, 0, function () {
        lineIndex++;
        setTimeout(processLine, line.pause || 200);
      });
    } else {
      p.textContent = line.text;
      lineIndex++;
      setTimeout(processLine, line.pause || 200);
    }
  }

  setTimeout(processLine, 500);
})();

// Scroll fade-in
(function () {
  var faders = document.querySelectorAll('.fade-in');
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  faders.forEach(function (el) { observer.observe(el); });
})();

// Nav active highlight
(function () {
  var navLinks = document.querySelectorAll('.nav__link');

  function updateActiveNav() {
    var scrollPos = window.scrollY + 100;
    var current = '';

    document.querySelectorAll('.section').forEach(function (section) {
      if (section.offsetTop <= scrollPos) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(function (link) {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav);
  updateActiveNav();
})();
