
// col-md-4 Choose a name ending 
 // Function to load external HTML
 function loadNameEndingSelector() {
    fetch('name-ending-selector.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('name-ending-container');
        })
        .catch(error => console.error('Error loading external HTML:', error));
}

// Call the function to load the HTML when the page is ready
window.onload = loadNameEndingSelector;



// Load external HTML content into the div
fetch('name-ending-selector.html')
.then(response => response.text())
.then(html => {
  const container = document.getElementById('name-ending-container');
  const loadingSpinner = document.getElementById('loading-spinner2');
  

})
// name-ending-container
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




// myClipboard


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


$('.select2').select2();



// Name Keypad
// Simulate typing when a virtual key is pressed
function typeKey(key) {
    const output = document.getElementById('output');
    output.textContent += key;
    // Highlight the corresponding virtual key
    highlightKey(key);
     // Check for backspace
     if (event.key === "Backspace") {
        backspace();
    } else if (event.key.length === 1) {
        // Define allowed characters (lowercase letters, numbers, hyphen)
        const allowedChars = /^[a-z0-9-]$/;  // Only allow lowercase letters, numbers, and hyphen
        
        // Check if the key is an allowed character
        if (allowedChars.test(event.key)) {
            typeKey(event.key);
        } else {
            // Show alert if a non-allowed character is typed
            alert("Invalid character! Please use lowercase letters, numbers, or hyphen.");
        }
    }
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

// Simulate backspace (delete the last character)
function backspace() {
    const output = document.getElementById('output');
    output.textContent = output.textContent.slice(0, -1);
}


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
    const elements = ['pickOne', 'Clipboard', 'result-text', 'output',  'pickTwo', 'addItemClipboard', 'domainExtension'];
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

    // tour

    const tourSteps = [
        {
            content: 'Please follow this step-by-step guide on the homepage for a general walkthrough of the onitgo.com name creation tool. <a href="https://www.onitgo.com" >Go to homepage</a>',
            target: null,
        },
        {
            content: "<b>Browse :</b> Browse name cards by category.",
        },
        {
            content: "<b>Name cards :</b> The name cards area, where all the categorized name cards are available. Simply click on a name card to view its preview.",
        },
        {
            content: "<b>Remove card :</b> Remove the current name card to choose another.",
        },
        
        {
            content: "<b>Preview :</b> Preview the created name.",
        },
        {
            content: "<b>Start :</b> Based on the category, select the start name; otherwise, leave it as 'none.",
        },
        {
            content: "<b>Center :</b> Based on the category, manually enter the middle text or numbers, for spacing use namekeypad; otherwise, leave it as 'none.'",
        },
        {
            content: "<b>End :</b> Based on the category, select the end name; otherwise, leave it as 'none.'",
        },
        {
            content: "<b>Domain :</b> If you are creating a domain name, select the domain extension. For more details about domain names, <a href='https://www.onitgo.com'>read more</a> otherwise, leave it as 'none.'",
        },
        
        {
            content: "<b>Name Keypad :</b> A name keypad is a set of keys used for manually inputting letters and numbers to create names.",
        },
        {
            content: "<b>Listen and Copy :</b> Click 'Listen' to hear how your created name sounds. Click 'Copy' if you want to save the name.",
        },
        {
            content: "<b>Add Names :</b> To add names, click 'Copy' to select a name, then click 'Add Names' to save it to your favorites list for future reference. The list can be downloaded in text format.",
        },
    ];

    let currentStep = 0;

    function showStep(step) {
        $('#tourModalLabel').text(`Step ${step + 0}`);
        $('#tourContent').html(tourSteps[step].content);

        $('#prevButton').toggle(step > 0);
        $('#nextButton').text(step < tourSteps.length - 1 ? "Next" : "Finish");

        // Remove any existing indicators
        $('.indicator').remove();

        if (tourSteps[step].target) {
            const target = $(tourSteps[step].target);
            const offset = target.offset();
            const width = target.outerWidth();
            const height = target.outerHeight();

        

            // Add the indicator based on position

            // const indicator = $('<div class="indicator bottom"></div>');
            // $('.modal-content').append(indicator);
        } 
    }

    function startTour() {
        currentStep = 0;
        showStep(currentStep);
        $('#tourModal').modal('show');
    }

    $(document).ready(function() {
        if (!localStorage.getItem('tourCompleted')) {
            startTour();
            localStorage.setItem('tourCompleted', 'true');
        }

        $('#nextButton').click(function() {
            if (currentStep < tourSteps.length - 1) {
                currentStep++;
                showStep(currentStep);
            } else {
                $('#tourModal').modal('hide');
            }
        });

        $('#prevButton').click(function() {
            if (currentStep > 0) {
                currentStep--;
                showStep(currentStep);
            }
        });

        $('#playTour').click(function() {
            startTour();
        });
    });
    // spinner
// Get references to the checkbox and all spinner elements (using class)
const checkbox = document.getElementById('flexSwitchCheckChecked');
const spinners = document.querySelectorAll('.spinner');  // Select all elements with the class 'spinner'

// Set all spinners to be visible by default
spinners.forEach(spinner => {
  spinner.style.display = 'inline-block';
});



  
  // spinner



    