// Price Calculator Data
const pricing = {
  compact: {
    express: 65, executive: 145, showroom: 295,
    enhancement: 395, perfection: 695, concours: 1295,
    crystal: 495, diamond: 895, platinum: 1495,
    'partial-ppf': 895, 'track-ppf': 1795, 'full-ppf': 3995
  },
  medium: {
    express: 78, executive: 174, showroom: 354,
    enhancement: 474, perfection: 834, concours: 1554,
    crystal: 594, diamond: 1074, platinum: 1794,
    'partial-ppf': 1074, 'track-ppf': 2154, 'full-ppf': 4794
  },
  large: {
    express: 91, executive: 203, showroom: 413,
    enhancement: 553, perfection: 973, concours: 1813,
    crystal: 693, diamond: 1253, platinum: 2093,
    'partial-ppf': 1253, 'track-ppf': 2513, 'full-ppf': 5593
  },
  suv: {
    express: 104, executive: 232, showroom: 472,
    enhancement: 632, perfection: 1112, concours: 2072,
    crystal: 792, diamond: 1432, platinum: 2392,
    'partial-ppf': 1432, 'track-ppf': 2872, 'full-ppf': 6392
  },
  supercar: {
    express: 130, executive: 290, showroom: 590,
    enhancement: 790, perfection: 1390, concours: 2590,
    crystal: 990, diamond: 1790, platinum: 2990,
    'partial-ppf': 1790, 'track-ppf': 3590, 'full-ppf': 7990
  }
};

// Price Calculator Functions
function calculatePrice() {
  const vehicleSize = document.getElementById('vehicle-size').value;
  const serviceType = document.getElementById('service-type').value;
  const resultDiv = document.getElementById('price-result');
  const displayDiv = document.getElementById('price-display');

  if (!vehicleSize || !serviceType) {
    alert('Please select both vehicle size and service type');
    return;
  }

  const price = pricing[vehicleSize][serviceType];
  const supercarSuffix = vehicleSize === 'supercar' ? '+' : '';
  
  displayDiv.innerHTML = `
    <div style="font-size: 2rem; margin-bottom: 0.5rem;">£${price.toLocaleString()}${supercarSuffix}</div>
    <div style="font-size: 1rem; opacity: 0.8;">
      ${getServiceName(serviceType)} for ${getVehicleName(vehicleSize)}
    </div>
  `;
  
  resultDiv.style.display = 'block';
  resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function getServiceName(serviceType) {
  const serviceNames = {
    express: 'Express Valet',
    executive: 'Executive Detail',
    showroom: 'Showroom Perfect',
    enhancement: 'Enhancement Detail',
    perfection: 'Perfection Detail',
    concours: 'Concours Correction',
    crystal: 'Crystal Guard Ceramic Coating',
    diamond: 'Diamond Shield Ceramic Coating',
    platinum: 'Platinum Armour Ceramic Coating',
    'partial-ppf': 'Partial Paint Protection Film',
    'track-ppf': 'Track Pack Paint Protection Film',
    'full-ppf': 'Full Armour Paint Protection Film'
  };
  return serviceNames[serviceType];
}

function getVehicleName(vehicleSize) {
  const vehicleNames = {
    compact: 'Compact Vehicle',
    medium: 'Medium Vehicle',
    large: 'Large Vehicle',
    suv: 'SUV/4x4',
    supercar: 'Supercar'
  };
  return vehicleNames[vehicleSize];
}

// Testimonial Carousel
let currentSlide = 0;
const slides = document.querySelectorAll('.testimonial-slide');
const navButtons = document.querySelectorAll('.carousel-btn');

function showSlide(index) {
  slides[currentSlide].classList.remove('active');
  navButtons[currentSlide].classList.remove('active');
  
  currentSlide = index;
  
  slides[currentSlide].classList.add('active');
  navButtons[currentSlide].classList.add('active');
}

// Auto-advance carousel
setInterval(() => {
  if (slides.length > 0) {
    showSlide((currentSlide + 1) % slides.length);
  }
}, 8000);

// Header scroll effect
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  if (header) {
    if (window.scrollY > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
});

// Reveal animations on scroll
const revealElements = document.querySelectorAll('.reveal');
const revealOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
    }
  });
}, revealOptions);

revealElements.forEach(element => {
  revealObserver.observe(element);
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Mobile Menu Toggle (if implemented later)
const mobileMenuBtn = document.querySelector('.mobile-menu');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenuBtn && navMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active');
  });
}

// Add hover effects for service cards
document.addEventListener('DOMContentLoaded', () => {
  const serviceCards = document.querySelectorAll('.service-card');
  
  serviceCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0) scale(1)';
    });
  });
});

// Enhanced scroll animations with stagger effect
function animateOnScroll() {
  const elements = document.querySelectorAll('.reveal');
  
  elements.forEach((element, index) => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;
    
    if (elementTop < window.innerHeight - elementVisible) {
      setTimeout(() => {
        element.classList.add('revealed');
      }, index * 100); // Stagger animation
    }
  });
}

window.addEventListener('scroll', animateOnScroll);

// Contact form validation (if form is added later)
function validateContactForm() {
  const form = document.querySelector('.contact-form');
  if (!form) return;
  
  const inputs = form.querySelectorAll('input, textarea');
  let isValid = true;
  
  inputs.forEach(input => {
    if (input.hasAttribute('required') && !input.value.trim()) {
      input.classList.add('error');
      isValid = false;
    } else {
      input.classList.remove('error');
    }
  });
  
  return isValid;
}

// Parallax effect for hero section
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector('.hero');
  
  if (hero) {
    hero.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
});

// Loading animation
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
  
  // Animate hero content on load
  const heroContent = document.querySelector('.hero-content');
  if (heroContent) {
    heroContent.style.opacity = '0';
    heroContent.style.transform = 'translateY(50px)';
    
    setTimeout(() => {
      heroContent.style.transition = 'all 1s ease-out';
      heroContent.style.opacity = '1';
      heroContent.style.transform = 'translateY(0)';
    }, 500);
  }
});

// Add dynamic pricing updates
function updatePricingDisplay() {
  const vehicleSelect = document.getElementById('vehicle-size');
  const serviceSelect = document.getElementById('service-type');
  
  if (vehicleSelect && serviceSelect) {
    vehicleSelect.addEventListener('change', () => {
      if (serviceSelect.value) {
        calculatePrice();
      }
    });
    
    serviceSelect.addEventListener('change', () => {
      if (vehicleSelect.value) {
        calculatePrice();
      }
    });
  }
}

// Initialize dynamic pricing
document.addEventListener('DOMContentLoaded', updatePricingDisplay);

// Add premium hover effects
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .cta-button');
  
  buttons.forEach(button => {
    button.addEventListener('mouseenter', (e) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      button.style.setProperty('--x', x + 'px');
      button.style.setProperty('--y', y + 'px');
    });
  });
});

// Add typing animation for hero subtitle
function typeWriter(element, text, speed = 50) {
  let i = 0;
  element.innerHTML = '';
  
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  
  type();
}

// Initialize typing animation
document.addEventListener('DOMContentLoaded', () => {
  const subtitle = document.querySelector('.hero .subtitle');
  if (subtitle) {
    const originalText = subtitle.textContent;
    setTimeout(() => {
      typeWriter(subtitle, originalText, 30);
    }, 1000);
  }
});

// Add scroll progress indicator
function addScrollProgress() {
  const progressBar = document.createElement('div');
  progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    height: 3px;
    background: linear-gradient(90deg, #D4AF37, #B8941F);
    z-index: 9999;
    transition: width 0.3s ease;
    width: 0%;
  `;
  document.body.appendChild(progressBar);
  
  window.addEventListener('scroll', () => {
    const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    progressBar.style.width = scrollPercent + '%';
  });
}

// Initialize scroll progress
document.addEventListener('DOMContentLoaded', addScrollProgress);

// Add premium loading screen
function createLoadingScreen() {
  const loader = document.createElement('div');
  loader.innerHTML = `
    <div style="
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #0D1117;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 10000;
      flex-direction: column;
    " id="premium-loader">
      <div style="
        width: 60px;
        height: 60px;
        border: 3px solid rgba(212, 175, 55, 0.3);
        border-top: 3px solid #D4AF37;
        border-radius: 50%;
        animation: spin 1s linear infinite;
        margin-bottom: 2rem;
      "></div>
      <div style="
        font-family: 'Playfair Display', serif;
        font-size: 2rem;
        color: #D4AF37;
        font-weight: 700;
      ">Prestige Auto Spa</div>
      <div style="
        color: #C0C0C0;
        margin-top: 0.5rem;
      ">Loading Premium Experience...</div>
    </div>
    <style>
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    </style>
  `;
  
  document.body.appendChild(loader);
  
  window.addEventListener('load', () => {
    setTimeout(() => {
      const loaderElement = document.getElementById('premium-loader');
      if (loaderElement) {
        loaderElement.style.opacity = '0';
        loaderElement.style.transition = 'opacity 0.5s ease';
        setTimeout(() => {
          loaderElement.remove();
        }, 500);
      }
    }, 1500);
  });
}

// Initialize loading screen
createLoadingScreen();

// VAPI Widget Functionality
document.addEventListener('DOMContentLoaded', function() {
  // Widget state
  let previousChatId = null;
  let isOpen = false;
  let currentMode = 'text';
  let vapiInstance = null;
  let isVoiceActive = false;
  let voiceInitialized = false;
  let lastUserMessage = '';
  let lastAssistantMessage = '';

  // Elements
  const elements = {
    button: document.getElementById('vapi-chat-button'),
    panel: document.getElementById('vapi-chat-panel'),
    closeButton: document.getElementById('vapi-close-button'),
    textMessages: document.getElementById('vapi-text-messages'),
    voiceMessages: document.getElementById('vapi-voice-messages'),
    input: document.getElementById('vapi-message-input'),
    sendButton: document.getElementById('vapi-send-button'),
    modeButtons: document.querySelectorAll('.vapi-mode-button'),
    voiceButton: document.getElementById('vapi-voice-button'),
    voiceStatus: document.getElementById('vapi-voice-status')
  };

  // Initialize VAPI voice after a short delay
  setTimeout(() => {
    initializeVoice();
  }, 1000);

  function initializeVoice() {
    try {
      if (window.vapiSDK) {
        console.log('Initializing VAPI voice...');
        vapiInstance = window.vapiSDK.run({
          apiKey: 'b3f38fb7-8541-4e3e-8708-5d49c3f54f00',
          assistant: 'c440762c-6ba1-4a59-8150-0ce323f368fa'
        });

        // Set up voice event listeners
        vapiInstance.on('call-start', () => {
          console.log('Voice call started');
          isVoiceActive = true;
          elements.voiceButton.className = 'active';
          elements.voiceButton.textContent = 'End Call';
          elements.voiceStatus.textContent = 'Connected - speak now!';
          addVoiceMessage('system', '🎤 Voice call connected - speak now!');

          // Reset message tracking
          lastUserMessage = '';
          lastAssistantMessage = '';
        });

        vapiInstance.on('call-end', () => {
          console.log('Voice call ended');
          endVoiceCall();
        });

        vapiInstance.on('message', (message) => {
          console.log('Voice message received:', message);
          handleVoiceMessage(message);
        });

        vapiInstance.on('error', (error) => {
          console.error('Voice error:', error);
          addVoiceMessage('system', `Voice error: ${error.message || 'Connection failed'}`);
          endVoiceCall();
        });

        voiceInitialized = true;
        elements.voiceStatus.textContent = 'Click to start voice chat';
        console.log('VAPI voice initialized successfully');

      } else {
        console.error('VAPI SDK not found');
        elements.voiceStatus.textContent = 'Voice SDK not available';
      }
    } catch (error) {
      console.error('Failed to initialize voice:', error);
      elements.voiceStatus.textContent = 'Voice initialization failed';
    }
  }

  function handleVoiceMessage(message) {
    // Only process final transcripts to avoid duplicates
    if (message.type === 'transcript' && message.transcriptType === 'final') {
      if (message.role === 'user') {
        if (message.transcript !== lastUserMessage && message.transcript.trim()) {
          lastUserMessage = message.transcript;
          addVoiceMessage('user', `🎤 ${message.transcript}`);
        }
      } else if (message.role === 'assistant') {
        if (message.transcript !== lastAssistantMessage && message.transcript.trim()) {
          lastAssistantMessage = message.transcript;
          addVoiceMessage('assistant', message.transcript);
        }
      }
    }

    // Handle status updates for user feedback and button animations
    if (message.type === 'speech-update') {
      if (message.role === 'user' && message.status === 'started') {
        elements.voiceStatus.textContent = 'Listening to you...';
        elements.voiceButton.classList.add('listening');
      } else if (message.role === 'assistant' && message.status === 'started') {
        elements.voiceStatus.textContent = 'Assistant is speaking...';
        elements.voiceButton.classList.remove('listening');
      } else if (message.status === 'stopped') {
        elements.voiceStatus.textContent = 'Ready - speak now or click to end';
        elements.voiceButton.classList.remove('listening');
      }
    }
  }

  // Event listeners
  if (elements.button) elements.button.addEventListener('click', toggleChat);
  if (elements.closeButton) elements.closeButton.addEventListener('click', closeChat);
  if (elements.sendButton) elements.sendButton.addEventListener('click', sendTextMessage);
  if (elements.input) {
    elements.input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        sendTextMessage();
      }
    });
  }

  elements.modeButtons.forEach(button => {
    button.addEventListener('click', () => switchMode(button.dataset.mode));
  });

  if (elements.voiceButton) elements.voiceButton.addEventListener('click', toggleVoiceCall);

  // Functions
  function toggleChat() {
    if (isOpen) {
      closeChat();
    } else {
      openChat();
    }
  }

  function openChat() {
    if (elements.panel) {
      elements.panel.classList.add('open');
      elements.panel.style.display = 'flex';
      isOpen = true;
      setTimeout(() => {
        if (elements.input) elements.input.focus();
      }, 300);
    }
  }

  function closeChat() {
    if (elements.panel) {
      elements.panel.classList.remove('open');
      elements.panel.style.display = 'none';
      isOpen = false;
    }

    if (isVoiceActive) {
      endVoiceCall();
    }
  }

  function switchMode(mode) {
    currentMode = mode;

    elements.modeButtons.forEach(button => {
      button.classList.toggle('active', button.dataset.mode === mode);
    });

    if (elements.panel) {
      elements.panel.className = elements.panel.className.replace(/vapi-(text|voice)-mode/, '');
      elements.panel.classList.add(`vapi-${mode}-mode`);
    }

    if (mode === 'text') {
      setTimeout(() => {
        if (elements.input) elements.input.focus();
      }, 100);
      if (isVoiceActive) {
        endVoiceCall();
      }
    }
  }

  async function toggleVoiceCall() {
    if (!voiceInitialized || !vapiInstance) {
      addVoiceMessage('system', 'Voice system is not ready yet. Please try again in a moment.');
      return;
    }

    if (isVoiceActive) {
      endVoiceCall();
    } else {
      startVoiceCall();
    }
  }

  function startVoiceCall() {
    try {
      console.log('Starting voice call...');
      elements.voiceButton.className = 'connecting';
      elements.voiceButton.textContent = 'Connecting...';
      elements.voiceStatus.textContent = 'Starting voice call...';
      vapiInstance.start('c440762c-6ba1-4a59-8150-0ce323f368fa');
    } catch (error) {
      console.error('Failed to start voice call:', error);
      addVoiceMessage('system', 'Failed to start voice call: ' + error.message);
      elements.voiceButton.className = '';
      elements.voiceButton.textContent = 'Start Call';
    }
  }

  function endVoiceCall() {
    try {
      isVoiceActive = false;
      elements.voiceButton.className = '';
      elements.voiceButton.textContent = 'Start Call';
      elements.voiceStatus.textContent = 'Click to start voice chat';

      if (vapiInstance) {
        vapiInstance.stop();
      }

      lastUserMessage = '';
      lastAssistantMessage = '';

      console.log('Voice call ended');
    } catch (error) {
      console.error('Error ending voice call:', error);
    }
  }

  async function sendTextMessage() {
    const message = elements.input.value.trim();
    if (!message) return;

    elements.sendButton.disabled = true;
    elements.sendButton.textContent = 'Sending...';

    addTextMessage('user', message);
    elements.input.value = '';

    const typingIndicator = addTypingIndicator();

    try {
      const response = await fetch('https://api.vapi.ai/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer bb0b198b-1a8f-4675-bdf8-8a865fc5d68a'
        },
        body: JSON.stringify({
          assistantId: 'c440762c-6ba1-4a59-8150-0ce323f368fa',
          input: message,
          previousChatId: previousChatId
        })
      });

      typingIndicator.remove();

      if (!response.ok) {
        addTextMessage('system', `Sorry, I encountered an error (${response.status}). Please try again.`);
        return;
      }

      const data = await response.json();

      if (data.id) {
        previousChatId = data.id;
      }

      const assistantMessage = extractAssistantMessage(data);
      addTextMessage('assistant', assistantMessage);

    } catch (error) {
      console.error('Text chat error:', error);
      typingIndicator.remove();
      addTextMessage('system', 'Connection error. Please try again.');
    } finally {
      elements.sendButton.disabled = false;
      elements.sendButton.textContent = 'Send';
      if (elements.input) elements.input.focus();
    }
  }

  function extractAssistantMessage(data) {
    if (data.output && Array.isArray(data.output) && data.output.length > 0) {
      const lastOutput = data.output[data.output.length - 1];
      if (lastOutput.content) return lastOutput.content;
      if (lastOutput.text) return lastOutput.text;
      if (lastOutput.message) return lastOutput.message;
    }

    if (data.messages && Array.isArray(data.messages) && data.messages.length > 0) {
      const lastMessage = data.messages[data.messages.length - 1];
      if (lastMessage.content) return lastMessage.content;
      if (lastMessage.text) return lastMessage.text;
      if (lastMessage.message) return lastMessage.message;
    }

    if (data.response) return data.response;
    if (data.reply) return data.reply;
    if (data.text) return data.text;
    if (data.content) return data.content;

    return 'I received your message but had trouble with the response format. Please try again.';
  }

  function addTextMessage(role, text) {
    if (!elements.textMessages) return;
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `vapi-message vapi-message-${role}`;
    messageDiv.textContent = text;
    elements.textMessages.appendChild(messageDiv);
    scrollToBottom(elements.textMessages);
    return messageDiv;
  }

  function addVoiceMessage(role, text) {
    if (!elements.voiceMessages) return;
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `vapi-voice-message vapi-voice-message-${role}`;
    messageDiv.textContent = text;
    elements.voiceMessages.appendChild(messageDiv);
    scrollToBottom(elements.voiceMessages);
    return messageDiv;
  }

  function addTypingIndicator() {
    if (!elements.textMessages) return { remove: () => {} };
    
    const typingDiv = document.createElement('div');
    typingDiv.className = 'vapi-message vapi-message-system';
    typingDiv.innerHTML = `
      <div style="display: flex; align-items: center; justify-content: center; gap: 4px;">
        <span style="animation: fade 1.4s ease-in-out infinite; animation-delay: 0s;">•</span>
        <span style="animation: fade 1.4s ease-in-out infinite; animation-delay: 0.2s;">•</span>
        <span style="animation: fade 1.4s ease-in-out infinite; animation-delay: 0.4s;">•</span>
        <span style="margin-left: 8px;">Assistant is typing...</span>
      </div>
      <style>
        @keyframes fade {
          0%, 80%, 100% { opacity: 0.3; }
          40% { opacity: 1; }
        }
      </style>
    `;
    elements.textMessages.appendChild(typingDiv);
    scrollToBottom(elements.textMessages);
    return typingDiv;
  }

  function scrollToBottom(container) {
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }
});