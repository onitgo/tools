
// This function loads the footer.html content into the footer-container
document.addEventListener("DOMContentLoaded", function() {
  fetch('footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer-container').innerHTML = data;
    })
    .catch(error => {
      console.error('Error loading footer:', error);
    });
});
// Show hide
fetch('switchRadioButtons.html')
.then(response => response.text())
.then(html => {
  const container = document.getElementById('radioButtonsContainer');
  const loadingSpinner = document.getElementById('loading-spinner5');
  
  // Replace content and hide the loading spinner
  container.innerHTML = html;
  container.style.display = 'block'; // Show the container
  loadingSpinner.style.display = 'none'; // Hide the loading spinner
})
.catch(error => {
  console.error('Error loading the DNS output HTML:', error);
  document.getElementById('loading-spinner5').innerHTML = 'Failed to load content';
});


  // Hide or show the helper section based on the radio button selection
  function toggleRadios() {
    const nameCreation = document.getElementById("switchToNameCreation");
    const domainCreation = document.getElementById("switchToDomainCreation");
    const domainSelection = document.getElementById("domainSelection");

    // Show name section only when "Switch to Name Creation" is selected
    if (nameCreation.checked) {
        nameSelection.style.display = "block";
    } else {
        nameSelection.style.display = "none";
    }

    // Show domain section only when "Switch to Domain Creation" is selected
    if (domainCreation.checked) {
        domainSelection.style.display = "block";
    } else {
        domainSelection.style.display = "none";
    }
    
  }
// show hide
// Function to load nameSelection external HTML content into the div with id="nameSelection"

    fetch('nameSelection.html')
      .then(response => response.text())
      .then(html => {
        document.getElementById('nameSelection').innerHTML = html;
      })
      .catch(error => console.error('Error loading the name selection:', error));
// Function to load nameSelection external HTML content into the div with id="nameSelection"



// Function to load domain-extension-container external HTML content -- starts
function loadDomainExtensionSelector() {
    fetch('domain-extension-selector.html')  // Path to your external HTML file
        .then(response => response.text())
        .then(html => {
            document.getElementById('domain-extension-container').innerHTML = html;
            // Initialize any JavaScript plugins if necessary
            $('#myDomainExtension').select2();  // Initialize Select2 dropdown
        })
        .catch(error => {
            console.error('Error loading external HTML:', error);
        });
}
// Function to load domain-extension-container external HTML content -- ends
// Load the content when the page is ready
document.addEventListener('DOMContentLoaded', loadDomainExtensionSelector);
// keyboard
// Fetch and include the keyboard HTML content
fetch('keyboard.html')
.then(response => response.text())
.then(html => {
  const container = document.getElementById('keyboard-container');
  const loadingSpinner = document.getElementById('loading-spinner3');
  
  // Replace content and hide the loading spinner
  container.innerHTML = html;
  container.style.display = 'block'; // Show the container
  loadingSpinner.style.display = 'none'; // Hide the loading spinner
})
.catch(error => {
  console.error('Error loading the DNS output HTML:', error);
  document.getElementById('loading-spinner3').innerHTML = 'Failed to load content';
});

// keyboard-container

// Load external HTML content into the div


// name-ending-container
// Load external HTML content into the div
    fetch('name-ending-selector.html')
    .then(response => response.text())
    .then(html => {
      const container = document.getElementById('name-ending-container');
      const loadingSpinner = document.getElementById('loading-spinner2');
      
      // Replace content and hide the loading spinner
      container.innerHTML = html;
      container.style.display = 'block'; // Show the container
      loadingSpinner.style.display = 'none'; // Hide the loading spinner
    })
    .catch(error => {
      console.error('Error loading the DNS output HTML:', error);
      document.getElementById('loading-spinner2').innerHTML = 'Failed to load content';
    });

    // Domainname-extension-container
// Load external HTML content into the div
fetch('domain-extension-selector.html')
.then(response => response.text())
.then(html => {
  const container = document.getElementById('domain-extension-container');
  const loadingSpinner = document.getElementById('loading-spinner4');
  
  // Replace content and hide the loading spinner
  container.innerHTML = html;
  container.style.display = 'block'; // Show the container
  loadingSpinner.style.display = 'none'; // Hide the loading spinner
})
.catch(error => {
  console.error('Error loading the DNS output HTML:', error);
  document.getElementById('loading-spinner4').innerHTML = 'Failed to load content';
});
    
// dns-output-container
// Load external HTML content into the div
    fetch('dns-output.html')
      .then(response => response.text())
      .then(html => {
        const container = document.getElementById('dns-output-container');
        const loadingSpinner = document.getElementById('loading-spinner');
        
        // Replace content and hide the loading spinner
        container.innerHTML = html;
        container.style.display = 'block'; // Show the container
        loadingSpinner.style.display = 'none'; // Hide the loading spinner
      })
      .catch(error => {
        console.error('Error loading the DNS output HTML:', error);
        document.getElementById('loading-spinner').innerHTML = 'Failed to load content';
      });
// dns-output-container

function copyToClipboard() {
    // Get the text from the div
    var textElement = document.getElementById('text-to-copy');
    var text = textElement.innerText || textElement.textContent;

    // Create a temporary textarea element to use for copying
    var textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    // Show the toast notification
    var toastEl = document.getElementById('copy-toast');
    var toast = new bootstrap.Toast(toastEl);
    toast.show();
}

function toggle(ID) {
    var element = document.getElementById(ID);
    if (element.style.display === "none") {
        element.style.display = "inline-block";
    } else {
        element.style.display = "none";
    }
}

function openNav() {
    document.getElementById("mySidebar").style.width = "26.3%";
    document.getElementById("main").style.marginLeft = "26.3%";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}


// validateInput

function validateInput(event) {
    // Get the character code of the key pressed
    var key = event.key;

    // Get the current input value and check its length
    var inputField = event.target; // Get the input field
    var currentValue = inputField.value;

    // Check if the input length exceeds 55 characters
    if (currentValue.length >= 55 && key !== 'Backspace') {
        // Prevent the default behavior if the limit is exceeded
        event.preventDefault();
        alert("You can only enter up to 55 characters.");
        return;
    }

    // Check if the key is not a lowercase letter, number, hyphen, or backspace
    if (!/^[a-z0-9\-]$/.test(key) && key !== 'Backspace') {
        // Prevent the default behavior (i.e., input)
        event.preventDefault();
        alert("Only lowercase letters, numbers, hyphens (-), and backspace are allowed.");
    }
}

// myClipboard
function myFunction() {
    let input = document.getElementById("myClipboard");

    // Update the output to display the exact text entered
    document.getElementById("Clipboard").innerHTML = input.value;

   
}

// Function to clear the input field when the close icon is clicked
function clearInput() {
    let input = document.getElementById("myClipboard");
    input.value = '';  // Clear the input value
    myFunction();      // Update the display (hide the close icon)
}

function mynamepickOnefu() {
    var x = document.getElementById("mynamePickOne").value;
    document.getElementById("namepickOne").innerHTML = x;
    
}
function mythemepickOnefu() {
    var x = document.getElementById("mythemePickOne").value;
    document.getElementById("themepickOne").innerHTML = x;
}
function mydrpickOnefu() {
    var x = document.getElementById("mydrPickOne").value;
    document.getElementById("drpickOne").innerHTML = x;
}

function mypickOnefu() {
    var x = document.getElementById("myPickOne").value;
    document.getElementById("pickOne").innerHTML = x;
}

function mypickTwofu() {
    var x = document.getElementById("myPickTwo").value;
    document.getElementById("pickTwo").innerHTML = x;
}

function myDomainExtensionfu() {
    var x = document.getElementById("myDomainExtension").value;
    document.getElementById("domainExtension").innerHTML = x;
}

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

function showResult(value) {
    document.getElementById('result-text').textContent = value;
}
function clearResult() {
    document.getElementById('result-text').textContent = '';
}

$(document).ready(function () {
    $("#oig-myInput").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#oig-myList li").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});



// Name Keypad
// Simulate typing when a virtual key is pressed
function typeKey(key) {
    const output = document.getElementById('output');
    output.textContent += key;
    // Highlight the corresponding virtual key
    highlightKey(key);
}



// Simulate backspace (delete the last character)
function backspace() {
    const output = document.getElementById('output');
    output.textContent = output.textContent.slice(0, -1);
}

// Name Keypad
// Simulate typing when a virtual key is pressed
function typeKey(key) {
    const output = document.getElementById('output');
    output.textContent += key;
    // Highlight the corresponding virtual key
    highlightKey(key);
}

// Function to highlight a virtual key based on the physical key pressed
function highlightKey(key) {
    // Remove any previous highlights
    const allKeys = document.querySelectorAll('.key');
    allKeys.forEach(k => k.classList.remove('highlight'));

    // Highlight the corresponding virtual key
    const virtualKey = document.getElementById('key-' + key);
    if (virtualKey) {
        virtualKey.classList.add('highlight');
        
        // Play the corresponding sound (assuming sound files are named key-[key].mp3)
        const audio = new Audio('sounds/key-' + key + '.mp3');
        audio.play();
    }
    
    
}
 // Boolean to track CapsLock state
let capsLockActive = false;

// Function to highlight a virtual key based on the physical key pressed
function highlightKey(key) {
    // Remove any previous highlights
    const allKeys = document.querySelectorAll('.key');
    allKeys.forEach(k => k.classList.remove('highlight'));

    // Check if CapsLock is active and adjust the case of the key
    const keyToHighlight = capsLockActive ? key.toUpperCase() : key.toLowerCase();

    // Highlight the corresponding virtual key
    const virtualKey = document.getElementById('key-' + keyToHighlight);
    if (virtualKey) {
        virtualKey.classList.add('highlight');
        
        // Play the corresponding sound (assuming sound files are named key-[key].mp3)
        const audio = new Audio('sounds/key-' + keyToHighlight + '.mp3');
        audio.play();
    }
}

// CapsLock

// Function to toggle the CapsLock display and play sound if CapsLock is ON

// function toggleCapsLock() {
//     capsLockActive = !capsLockActive; // Toggle the state
//     updateCapsLockDisplay();

//     // Play sound when CapsLock is ON
//     if (capsLockActive) {
//         playCapsLockSound();
//     }
// }

// // Play the CapsLock sound
// function playCapsLockSound() {
//     const audio = new Audio('sounds/capslock-on.mp3');
//     audio.play().catch(error => {
//         console.error('Error playing sound:', error);
//     });
// }

// // Update the display based on CapsLock status
// function updateCapsLockDisplay() {
//     const capsLockKey = document.getElementById('key-capslock');
//     if (capsLockActive) {
//         capsLockKey.style.backgroundColor = '#FFD700'; // Highlight when active
//         capsLockKey.innerHTML = 'CapsLock';
//     } else {
//         capsLockKey.style.backgroundColor = ''; // Reset background
//         capsLockKey.innerHTML = 'CapsLock';
//     }
// }

// // Listen for keydown and keyup events to detect physical CapsLock press
// document.addEventListener('keydown', (event) => {
//     // Detect the physical Caps Lock key
//     if (event.key === 'CapsLock') {
//         capsLockActive = event.getModifierState('CapsLock'); // Update the CapsLock state
//         updateCapsLockDisplay(); // Update display based on the state

//         // Play sound when CapsLock is ON
//         if (capsLockActive) {
//             playCapsLockSound();
//         }
//     }
// });

// // Event listener for the keyup event to ensure CapsLock toggle updates when key is released
// document.addEventListener('keyup', (event) => {
//     // You might want to handle the keyup event in case you want to listen for releases
//     if (event.key === 'CapsLock') {
//         capsLockActive = event.getModifierState('CapsLock');
//         updateCapsLockDisplay();
//     }
// });

// CapsLock

// Simulate backspace (delete the last character)
function backspace() {
    const output = document.getElementById('output');
    output.textContent = output.textContent.slice(0, -1);
}
// Listen for physical keyboard key presses
document.addEventListener('keydown', function(event) {
    // Check if the active element is an input field or textarea
    if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') {
        return; // Do nothing if the focus is on an input or textarea
    }

    // Delay function (using setTimeout)
    setTimeout(function() {
        // Check for backspace
        if (event.key === "Backspace") {
            backspace();
        } else if (event.key.length === 1) {
            // Handle any printable character (letters, numbers, symbols, etc.)
            typeKey(event.key);
            highlightVirtualKey(event.key);
        }
    }, 200); // Delay for 200 milliseconds
});

// Function to highlight the virtual key corresponding to the physical key
function highlightVirtualKey(key) {
    // Mapping of physical keys to their corresponding virtual keys by ID
    const keyMappings = {
        '1': 'key-1',
        '2': 'key-2',
        '3': 'key-3',
        '4': 'key-4',
        '5': 'key-5',
        '6': 'key-6',
        '7': 'key-7',
        '8': 'key-8',
        '9': 'key-9',
        '0': 'key-0',
        'q': 'key-q',
        'w': 'key-w',
        'e': 'key-e',
        'r': 'key-r',
        't': 'key-t',
        'y': 'key-y',
        'u': 'key-u',
        'i': 'key-i',
        'o': 'key-o',
        'p': 'key-p',
        'a': 'key-a',
        's': 'key-s',
        'd': 'key-d',
        'f': 'key-f',
        'g': 'key-g',
        'h': 'key-h',
        'j': 'key-j',
        'k': 'key-k',
        'l': 'key-l',
        'z': 'key-z',
        'x': 'key-x',
        'c': 'key-c',
        'v': 'key-v',
        'b': 'key-b',
        'n': 'key-n',
        'm': 'key-m',
        '.': 'key-period',
        ',': 'key-comma',
        "'": 'key-apostrophe',
        ':': 'key-colon',
        ';': 'key-semicolon',
        '"': 'key-quote',
        '/': 'key-slash',
        '|': 'key-pipe',
        '&': 'key-ampersand',
        '#': 'key-hash',
        '!': 'key-exclamation',
        '@': 'key-at',
        '(': 'key-openparen',
        ')': 'key-closeparen',
        '-': 'key-hyphen',
        ' ': 'key-space',
        'CapsLock': 'key-capslock' // Add CapsLock to the keyMappings
    };

    // Get the corresponding virtual key by its ID
    const virtualKeyId = keyMappings[key.toLowerCase()];

    if (virtualKeyId) {
        // Highlight the virtual key
        const virtualKey = document.getElementById(virtualKeyId);
        if (virtualKey) {
            virtualKey.classList.add('highlight'); // Add highlight class
            // Remove the highlight after 200ms to reset the key to normal state
            setTimeout(() => {
                virtualKey.classList.remove('highlight'); // Remove highlight class after timeout
            }, 500); // Adjust the timeout to the desired highlight duration
        }
    }
}

// Optional: Add a style for highlighting the virtual key
const style = document.createElement('style');
style.innerHTML = `
    .highlight {
        background-color: #ff0; /* Highlight color */
        box-shadow: 0 0 10px rgba(255, 255, 0, 0.5);
    }
`;
document.head.appendChild(style);



// Prevent page scroll when the spacebar is pressed (except in input fields)
document.addEventListener('keydown', function(event) {
    // Check if the active element is an input field, textarea, or contenteditable
    if (document.activeElement.tagName === 'INPUT' || 
        document.activeElement.tagName === 'TEXTAREA' || 
        document.activeElement.isContentEditable) {
        return; // Do nothing if the focus is on an input, textarea, or contenteditable element
    }

    // Check if the key pressed is the spacebar (keyCode 32)
    if (event.key === " " || event.code === "Space") {
        // Prevent default action (which would normally scroll the page)
        event.preventDefault();
    }
});

  // Function to reset the keyboard
function resetKeyboard() {
    const output = document.getElementById("output");
    output.textContent = ""; // Clear the output area
  }
 

//Name Keypad 

// Listen for physical keyboard key presses
// document.addEventListener('keydown', function(event) {
//     // Check if Caps Lock is on
//     if (event.getModifierState && event.getModifierState('CapsLock')) {
//         alert("Caps Lock is ON! Please use lowercase letters.");
//     }

//     // Check for backspace
//     if (event.key === "Backspace") {
//         backspace();
//     } else if (event.key.length === 1) {
//         // Define allowed characters (lowercase letters, numbers, hyphen)
//         const allowedChars = /^[a-z0-9-]$/;  // Only allow lowercase letters, numbers, and hyphen
        
//         // Check if the key is an allowed character
//         if (allowedChars.test(event.key)) {
//             typeKey(event.key);
//         } else {
//             // Show alert if a non-allowed character is typed
//             alert("Invalid character! Please use lowercase letters, numbers, or hyphen.");
//         }
//     }
// });

//Name Keypad 

// JavaScript to handle the button click refresh
// document.getElementById('refreshButton').addEventListener('click', function () {
//     location.reload(); // This reloads the current page
// });

function handleSelectionChange(selectElement) {
    const value = selectElement.value;
    if (value) {
        showResult(value);
    }
}

document.getElementById('listenButton').addEventListener('click', function () {
    // Concatenate all the text from the spans
    let textToSpeak = '';
    const elements = ['Clipboard','namepickOne','themepickOne','drpickOne', 'pickOne',  'result-text',   'pickTwo', 'output',   'addItemClipboard',  'domainExtension'];
    elements.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            textToSpeak += element.textContent + ' ';
        }
    });

    // Check if the browser supports speech synthesis
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(textToSpeak.trim());
        window.speechSynthesis.speak(utterance);
    } else {
        alert('Your browser does not support speech synthesis.');
    }
});

// oig-mycardInput
    $(document).ready(function () {
      $("#oig-mycardInput").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#oig-mycardList li").filter(function () {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      });
    });
 
    // Toast
    const toastTrigger = document.getElementById('liveToastBtn')
    const toastLiveExample = document.getElementById('liveToast')
    
    if (toastTrigger) {
      const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
      toastTrigger.addEventListener('click', () => {
        toastBootstrap.show()
      })
    }
   
    // go to top
    // Add smooth scrolling behavior when the button is clicked
document.getElementById('goToTopButton').addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'  // Smooth scroll effect
    });
  });
  
    // My names
     // Load the modal from an external file
     $(document).ready(function() {
        // Load the modal content dynamically
        $("#modalContainer").load("modal-mynames.html", function() {
            // Update modal title and clear input field when opening modal
            $(document).on('click', '[data-bs-toggle="modal"]', function() {
                const title = $(this).data('title');
                $('#noteModalLabel').text(title);
                $('#noteInput').val(''); // Clear input field
            });
        });
    
        // Save note functionality
        $(document).on('click', '#saveNote', function() {
            const noteContent = $('#noteInput').val().trim();
            if (!noteContent) {
                alert('Please enter a text before downloading.'); // Alert if textarea is empty
                return;
            }
            const blob = new Blob([noteContent], { type: 'text/plain' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'myNames.txt';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        });
    
        // Clear note functionality
        $(document).on('click', '#clearNote', function() {
            $('#noteInput').val(''); // Clear input field
        });
    });
    // My names


  



    