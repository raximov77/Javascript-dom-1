
/* Header */
const container = document.createElement('div');
container.className = 'container';

const navbar = document.createElement('div');
navbar.className = 'navbar';

const logo = document.createElement('div');
logo.className = 'logo';
logo.textContent = 'formcarry.';

const navLinks = document.createElement('div');
navLinks.className = 'nav-links';
const links = ['FAQ', 'Docs', 'Integrations', 'Pricing'];
links.forEach(linkText => {
    const link = document.createElement('a');
    link.href = '#';
    link.textContent = linkText;
    navLinks.appendChild(link);
});

const authButtons = document.createElement('div');
authButtons.className = 'auth-buttons';
const loginButton = document.createElement('button');
loginButton.className = 'login';
loginButton.textContent = 'Login';
const signUpButton = document.createElement('button');
signUpButton.textContent = 'Sign up';
authButtons.appendChild(loginButton);
authButtons.appendChild(signUpButton);

navbar.appendChild(logo);
navbar.appendChild(navLinks);
navbar.appendChild(authButtons);
container.appendChild(navbar);


/* Hero */
const mainContent = document.createElement('div');
mainContent.className = 'main-content';

const subtitle = document.createElement('p');
subtitle.style.color = '#007BFF';
subtitle.style.fontWeight = 'bold';
subtitle.textContent = 'COLLECT FORM SUBMISSIONS';

const heading = document.createElement('h1');
heading.textContent = 'Get emails and messages from your HTML form';

const paragraph = document.createElement('b');
paragraph.textContent = 'Code your own HTML form and style it, then point your form to formcarry to get email notifications, upload files, block spam and integrate with other apps.';

const startButton = document.createElement('button');
startButton.textContent = 'Get Started';

mainContent.appendChild(subtitle);
mainContent.appendChild(heading);
mainContent.appendChild(paragraph);
mainContent.appendChild(startButton);
container.appendChild(mainContent);


/* Footer */
const footer = document.createElement('div');
footer.className = 'footer';
const footerText = document.createElement('p');
footerText.textContent = 'formcarry. all rights reserved';
footer.appendChild(footerText);

const termsLink = document.createElement('a');
termsLink.href = '/terms-of-service';
termsLink.textContent = 'Terms of Service';
termsLink.className = 'footer-link';

    
const privacyLink = document.createElement('a');
privacyLink.href = '/privacy-policy';
privacyLink.textContent = 'Privacy Policy';
privacyLink.className = 'footer-link';

const socialContainer = document.createElement('div');
socialContainer.className = 'footer-social-icons';

    
const twitterLink = document.createElement('a');
twitterLink.href = 'https://twitter.com';
twitterLink.target = '_blank';
const twitterImg = document.createElement('img');
twitterImg.src = 'images/twitter.svg';
twitterImg.alt = 'Twitter';
twitterImg.className = 'footer-social-icon';
twitterLink.appendChild(twitterImg);

const facebookLink = document.createElement('a');
facebookLink.href = 'https://facebook.com';
facebookLink.target = '_blank';
const facebookImg = document.createElement('img');
facebookImg.src = 'images/facebook.svg';
facebookImg.alt = 'Facebook';
facebookImg.className = 'footer-social-icon';
facebookLink.appendChild(facebookImg);

const githubLink = document.createElement('a');
githubLink.href = 'https://github.com';
githubLink.target = '_blank';
const githubImg = document.createElement('img');
githubImg.src = 'images/github.svg';
githubImg.alt = 'GitHub';
githubImg.className = 'footer-social-icon';
githubLink.appendChild(githubImg);

socialContainer.appendChild(twitterLink);
socialContainer.appendChild(facebookLink);
socialContainer.appendChild(githubLink);
container.appendChild(footer);
footer.appendChild(termsLink);
footer.appendChild(privacyLink);
footer.appendChild(socialContainer);

document.getElementById('container').appendChild(container);