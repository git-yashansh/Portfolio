// Navigation functionality
document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar")
  const navLinks = document.querySelectorAll(".nav-link")
  const sections = document.querySelectorAll("section")

  // Handle scroll events
  window.addEventListener("scroll", () => {
    // Add scrolled class to navbar
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled")
    } else {
      navbar.classList.remove("scrolled")
    }

    // Update active navigation link
    let current = ""
    sections.forEach((section) => {
      const sectionTop = section.offsetTop
      const sectionHeight = section.clientHeight
      if (window.scrollY >= sectionTop - 200) {
        current = section.getAttribute("id")
      }
    })

    navLinks.forEach((link) => {
      link.classList.remove("active")
      if (link.getAttribute("data-section") === current) {
        link.classList.add("active")
      }
    })
  })

  // Smooth scrolling for navigation links
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("data-section")
      const targetSection = document.getElementById(targetId)

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })

  // Animate skill bars when they come into view
  const skillBars = document.querySelectorAll(".skill-progress")
  const observerOptions = {
    threshold: 0.5,
    rootMargin: "0px 0px -100px 0px",
  }

  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const progressBar = entry.target
        const width = progressBar.getAttribute("data-width")
        progressBar.style.width = width + "%"
      }
    })
  }, observerOptions)

  skillBars.forEach((bar) => {
    skillObserver.observe(bar)
  })

  // Add click event for download resume button
  const downloadBtn = document.getElementById("downloadResumeBtn")
  if (downloadBtn) {
    downloadBtn.addEventListener("click", () => {
      // You can replace this with actual resume download functionality
      alert("UPDATED RESUME LOADING...CHECK BACK AFTER SOME TIME!!---KUMAR YASHANSH")
    })
  }

  // Add hover effects to project cards
  const projectCards = document.querySelectorAll(".project-card")
  projectCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-10px)"
    })

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)"
    })
  })

  // Add click events to project buttons
  const projectButtons = document.querySelectorAll(".project-card .btn-outline")
  projectButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // You can replace this with actual project link functionality
      alert("Project link would open here!")
    })
  })

  // Mobile menu toggle (for future implementation)
  const mobileToggle = document.querySelector(".mobile-menu-toggle")
  if (mobileToggle) {
    mobileToggle.addEventListener("click", () => {
      // Mobile menu functionality can be added here
      console.log("Mobile menu toggle clicked")
    })
  }

  // Add parallax effect to hero section
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset
    const heroBackground = document.querySelector(".hero-background")
    if (heroBackground) {
      heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`
    }
  })

  // Add typing effect to hero title (optional)
  const heroTitle = document.querySelector(".hero-title")
  if (heroTitle) {
    const text = heroTitle.textContent
    heroTitle.textContent = ""
    let i = 0

    function typeWriter() {
      if (i < text.length) {
        heroTitle.textContent += text.charAt(i)
        i++
        setTimeout(typeWriter, 100)
      }
    }

    // Start typing effect after a delay
    setTimeout(typeWriter, 1000)
  }
})

// Utility function for smooth scrolling
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId)
  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }
}

// Add loading animation
window.addEventListener("load", () => {
  document.body.classList.add("loaded")
})

// Add scroll reveal animations
function revealOnScroll() {
  const reveals = document.querySelectorAll(".skill-card, .project-card, .activity-card, .timeline-item")

  reveals.forEach((element) => {
    const windowHeight = window.innerHeight
    const elementTop = element.getBoundingClientRect().top
    const elementVisible = 150

    if (elementTop < windowHeight - elementVisible) {
      element.classList.add("active")
    }
  })
}

window.addEventListener("scroll", revealOnScroll)

// Initialize reveal on load
document.addEventListener("DOMContentLoaded", revealOnScroll)
