
  // Collapse navbar when any nav-link is clicked (for mobile view)
  document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        const isNavbarExpanded = window.getComputedStyle(navbarCollapse).display === 'block';
        if (isNavbarExpanded) {
          const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
            toggle: true
          });
        }
      });
    });
  });


      // Set fixed countdown target (no localStorage logic)
      const targetDate = new Date("2025-09-02T06:00:00+05:30").getTime();

      const countdownInterval = setInterval(function () {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance <= 0) {
          clearInterval(countdownInterval);
          document.getElementById("countdown-timer").innerHTML = `
    <div class="col-12 text-center">
      <h2 class="text-success fw-bold display-6">Samanvay 2025 Has Begun!</h2>
    </div>
  `;
          return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = days.toString().padStart(2, "0");
        document.getElementById("hours").innerText = hours.toString().padStart(2, "0");
        document.getElementById("minutes").innerText = minutes.toString().padStart(2, "0");
        document.getElementById("seconds").innerText = seconds.toString().padStart(2, "0");
      }, 1000);
   

  function openAndDownload() {
    // 1. Open image in new tab
    window.open('images/MTM- IITK Samanvay_2025_Final_WD-01-01.webp', '_blank');

    // 2. Trigger PDF download
    const link = document.createElement('a');
    link.href = 'images/agenda.pdf';
    link.download = 'agenda.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  function openAndDownload() {
    const pdfUrl = 'files/agenda.pdf'; // Replace with your actual PDF path
  
    // Open in new tab
    window.open(pdfUrl, '_blank');
  
    // Trigger download
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'agenda.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  