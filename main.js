  
// Script to change the color theme of the webpage 
    document.addEventListener('DOMContentLoaded', function () {
        // code to handle the theme toggle
        var defaultModeRadio = document.getElementById('defaultModeRadio');
        var pinkModeRadio = document.getElementById('pinkModeRadio');
        var sidebar = document.querySelector('.sidebar');

        // Set default mode as checked on page load
        defaultModeRadio.checked = true;

        // Add event listeners to radio buttons
        defaultModeRadio.addEventListener('change', handleThemeChange);
        pinkModeRadio.addEventListener('change', handleThemeChange);

        // Initial theme setup
        handleThemeChange();

        function handleThemeChange() {
            if (defaultModeRadio.checked) {
                // Default Mode
                document.body.classList.remove('pink-mode');
                sidebar.style.backgroundColor = ''; // Reset sidebar background color
            } else if (pinkModeRadio.checked) {
                // Pink Mode
                document.body.classList.add('pink-mode');
                sidebar.style.backgroundColor = 'skyblue'; // Set sidebar background color
            }
        }

// Script to change the content of the banner image when a category button is clicked
        var allProductsButton = document.getElementById('all');
        var makeupButton = document.getElementById('makeupButton');
        var skincareButton = document.getElementById('skincareButton');

        allProductsButton.addEventListener('click', function () {
            showBannerContainer('bannerContainer1');
            setActiveButton(allProductsButton);
        });

        makeupButton.addEventListener('click', function () {
            showBannerContainer('bannerContainer2');
            setActiveButton(makeupButton);
        });

        skincareButton.addEventListener('click', function () {
            showBannerContainer('bannerContainer3');
            setActiveButton(skincareButton);
        });

        // Initial setup: Show bannerContainer1 and set "All Products" as active
        showBannerContainer('bannerContainer1');
        setActiveButton(allProductsButton);

        function showBannerContainer(containerId) {
            // Hide all banner containers
            var bannerContainers = document.querySelectorAll('.banner-container1, .banner-container2, .banner-container3');
            bannerContainers.forEach(function (container) {
                container.style.display = 'none';
            });

            // Show the selected banner container
            var selectedContainer = document.getElementById(containerId);
            if (selectedContainer) {
                selectedContainer.style.display = 'block';
            }
        }

        function setActiveButton(activeButton) {
            // Remove active class from all buttons
            var buttons = document.querySelectorAll('.category');
            buttons.forEach(function (button) {
                button.classList.remove('active');
            });

            // Add active class to the clicked button
            activeButton.classList.add('active');
        }

// Script to show pop up when hovering over the header
        var header = document.querySelector('header');
        var popup = document.getElementById('popup');

        header.addEventListener('mouseover', function () {
            showPopup();
        });

        header.addEventListener('mouseout', function (event) {
            if (!event.relatedTarget || !header.contains(event.relatedTarget)) {
                hidePopup();
            }
        });

        function showPopup() {
            popup.style.display = 'block';
        }

        function hidePopup() {
            popup.style.display = 'none';
        }


// Script to add items in or remove items from the Survey section
        var surveyList = document.getElementById('surveyList');
        var addBtn = document.getElementById('addBtn');
        var itemInput = document.getElementById('itemInput');

        // Function to add a new item to the survey list
        function addItem() {
            var newItemText = itemInput.value.trim();

            if (newItemText !== "") {
                var newItem = document.createElement('li');
                newItem.className = 'survey-item';
                newItem.innerHTML = `
                    <span>${newItemText}</span>
                    <button class="removeBtn">X</button>
                `;
                surveyList.appendChild(newItem);

                // Clear the input field after adding the item
                itemInput.value = "";

                // Add event listener to the new "Remove" button
                var removeBtn = newItem.querySelector('.removeBtn');
                removeBtn.addEventListener('click', function () {
                    surveyList.removeChild(newItem);
                });
            }
        }
        // Event listener for the add button
        addBtn.addEventListener('click', addItem);
    });