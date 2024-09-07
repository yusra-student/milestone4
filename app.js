document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('resume-form');
    var resumeContent = document.getElementById('resume-content');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        // Capture user input
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var education = document.getElementById('education').value;
        var skills = document.getElementById('skills').value;
        var experience = document.getElementById('experience').value;
        // Generate the resume using the captured data
        resumeContent.innerHTML = "\n    <h3>Personal Information</h3>\n    <p><strong>Name:</strong> ".concat(name, "</p>\n    <p><strong>Email:</strong> ").concat(email, "</p>\n    <p><strong>Phone:</strong> ").concat(phone, "</p>\n\n    <h3>Education</h3>\n    <p>").concat(education, "</p>\n\n    <h3>Skills</h3>\n    <p>").concat(skills, "</p>\n\n    <h3>Work Experience</h3>\n    <p>").concat(experience, "</p>\n  ");
        // Generate the resume content and make it editable
        resumeContent.innerHTML = "\n        <div class=\"editable\" id=\"name-display\" data-type=\"input\">".concat(name, "</div>\n        <div class=\"editable\" id=\"email-display\" data-type=\"input\">").concat(email, "</div>\n        <div class=\"editable\" id=\"phone-display\" data-type=\"input\">").concat(phone, "</div>\n        <div class=\"editable\" id=\"education-display\" data-type=\"textarea\">").concat(education, "</div>\n        <div class=\"editable\" id=\"skills-display\" data-type=\"input\">").concat(skills, "</div>\n        <div class=\"editable\" id=\"experience-display\" data-type=\"textarea\">").concat(experience, "</div>\n      ");
        // Make the sections editable
        makeSectionsEditable();
    });
    function makeSectionsEditable() {
        var editableElements = document.querySelectorAll('.editable');
        editableElements.forEach(function (element) {
            element.addEventListener('click', function (event) {
                var target = event.target;
                var currentValue = target.textContent || '';
                var inputType = target.getAttribute('data-type') || 'input';
                if (inputType === 'input') {
                    // Create an input field for single-line content
                    var input_1 = document.createElement('input');
                    input_1.value = currentValue;
                    input_1.addEventListener('blur', function () { return updateText(target, input_1.value); });
                    input_1.addEventListener('keypress', function (e) {
                        if (e.key === 'Enter') {
                            updateText(target, input_1.value);
                        }
                    });
                    // Replace the current text with the input field
                    target.textContent = '';
                    target.appendChild(input_1);
                    input_1.focus();
                }
                else if (inputType === 'textarea') {
                    // Create a textarea for multi-line content
                    var textarea_1 = document.createElement('textarea');
                    textarea_1.value = currentValue;
                    textarea_1.addEventListener('blur', function () { return updateText(target, textarea_1.value); });
                    textarea_1.addEventListener('keypress', function (e) {
                        if (e.key === 'Enter') {
                            e.preventDefault();
                            updateText(target, textarea_1.value);
                        }
                    });
                    // Replace the current text with the textarea
                    target.textContent = '';
                    target.appendChild(textarea_1);
                    textarea_1.focus();
                }
            });
        });
    }
    // Update the text content when editing is done
    function updateText(target, newValue) {
        target.textContent = newValue;
    }
    // Generate the resume using the captured data
});
