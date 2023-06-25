// Created a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license === 'MIT license') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (license === 'Apache License 2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'GNU v3.0') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  } else if (license === 'BSD 2-Clause Simplified License') {
    return '[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)';
  } else if (license === 'Boost Software License 1.0') {
    return '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
  } else {
    return '';
  }
}

// Created a function that returns the license link
function renderLicenseLink(license) {
  if (license === 'N/A') {
    return 'This project does not have a specific license.';
  } else {
    return `This project is licensed under the ${license}.`;
  }
}

// Created a function that returns the license section of README
function renderLicenseSection(license) {
  if (license === 'N/A') {
    return '';
  } else {
    return `
## License
${renderLicenseLink(license)}`;
  }
}

// Created a function to generate markdown for README
function generateMarkdown(data) {
  const { title, description, installation, usage, contribution, test, license, username, email } = data;
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseSection = renderLicenseSection(data.license);
  const githubProfileLink = `https://github.com/${data.username}`;

  return `# ${title}
    
  ${licenseBadge}

  ## Table Of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [Test](#test)
  * [License](#license)


  ## Description
  ${description}

  ## Installation
  ${installation}

  ## Usage
  ${usage}

  ## Contribution
  ${contribution}

  ## Tests
  ${test}

  ${licenseSection}

  ## Questions
  If you have any questions, feel free to reach out via GitHub or email:
  * GitHub: [${username}](${githubProfileLink})
  * Email: ${email}`;


}

module.exports = generateMarkdown;
