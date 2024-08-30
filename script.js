document.getElementById('readmeForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const projectName = document.getElementById('projectName').value || 'My Project';
    const projectType = document.getElementById('projectType').value;
    const license = document.getElementById('license').value;

    const generalDescription = `${projectName} is a ${projectType.toLowerCase()} that simplifies [describe what it simplifies]. It is built with [technologies used] and aims to provide [main goal of the project].`;
    
    const generalInstallation = `## Installation
To install ${projectName}, follow these steps:
1. Clone the repository:
   \`\`\`
   git clone https://github.com/yourusername/${projectName.toLowerCase().replace(/\s+/g, '-')}.git
   \`\`\`
2. Navigate to the project directory:
   \`\`\`
   cd ${projectName.toLowerCase().replace(/\s+/g, '-')}
   \`\`\`
3. Install the dependencies:
   \`\`\`
   npm install
   \`\`\`
4. Start the project:
   \`\`\`
   npm start
   \`\`\`
`;

    const generalUsage = `## Usage
Once installed, ${projectName} can be used to [describe main functionality]. For example, you can [give example usage].`;

    const generalFeatures = `## Features
${projectName} includes the following features:

- **Ease of Use**: Intuitive interface and simple setup.
- **Flexibility**: Easily customizable to fit your needs.
- **Performance**: Optimized for fast and efficient operation.
- **Cross-Platform**: Works seamlessly across different environments.`;

    const contributing = `## Contributing
We welcome contributions to ${projectName}! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes.
4. Push to your branch.
5. Open a pull request.`;

    const contact = `## Contact
For more information, questions, or feedback, please contact [Your Name] at [Your Email].`;

    const readmeContent = `
# ${projectName}

## Description
${generalDescription}

${generalInstallation}

${generalUsage}

${generalFeatures}

${contributing}

## License
This project is licensed under the ${license} - see the LICENSE file for details.

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

// License explanation update
document.getElementById('license').addEventListener('change', function() {
    const licenseExplanation = document.getElementById('licenseExplanation');
    const selectedOption = this.options[this.selectedIndex];
    licenseExplanation.textContent = selectedOption.text.split(' - ')[1];
});
