document.getElementById('readmeForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const projectName = document.getElementById('projectName').value || 'My Project';
    const description = document.getElementById('description').value || 'This project is designed to solve [problem] by providing [solution]. It is built using [technology/framework].';
    const installation = document.getElementById('installation').value || '1. Clone the repository\n2. Navigate to the project directory\n3. Run `npm install` to install dependencies\n4. Run `npm start` to start the application';
    const usage = document.getElementById('usage').value || 'To use this project, follow the installation instructions and then [additional steps for usage].';
    const features = document.getElementById('features').value || '- Feature 1: [Describe feature 1]\n- Feature 2: [Describe feature 2]\n- Feature 3: [Describe feature 3]';
    const contributing = document.getElementById('contributing').value || 'We welcome contributions! Please fork the repository and submit a pull request with your changes.';
    const license = document.getElementById('license').value || 'This project is licensed under the MIT License - see the LICENSE file for details.';
    const contact = document.getElementById('contact').value || 'For any questions or concerns, please contact [Your Name] at [Your Email].';

    const readmeContent = `
# ${projectName}

## Description
${description}

## Installation
${installation}

## Usage
${usage}

## Features
${features}

## Contributing
${contributing}

## License
${license}

## Contact
${contact}
`;

    document.getElementById('readmeOutput').textContent = readmeContent;
    document.getElementById('downloadBtn').style.display = 'block';

    document.getElementById('downloadBtn').addEventListener('click', function() {
        downloadReadme(readmeContent, projectName);
    });
});

function downloadReadme(content, projectName) {
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${projectName}_README.md`;
    a.click();
    URL.revokeObjectURL(url);
}
