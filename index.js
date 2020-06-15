var currentTheme = 'light';

function toggleTheme() {
    if (currentTheme == 'light') {
        document.body.style.background = '#181818';
        document.getElementById('heading').style.color = '#b23000';
        document.getElementById('dohas').style.color = '#7f7f7f';
        document.getElementById('button-icon').style.color = '#000000';
        document.getElementById('button-icon').style.backgroundColor = '#b23000';
        document.getElementById('button-icon').style.boxShadow = '2px 2px 3px #0c0c0c';
        currentTheme = 'dark';
    } else {
        document.body.style.background = '#fdfdfd';
        document.getElementById('heading').style.color = '#ff4500';
        document.getElementById('dohas').style.color = '#000000';
        document.getElementById('button-icon').style.color = '#ffffff';
        document.getElementById('button-icon').style.backgroundColor = '#ff4500';
        document.getElementById('button-icon').style.boxShadow = '2px 2px 3px #999999';
        currentTheme = 'light';
    }
}

const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
darkModeMediaQuery.addListener((e) => {
    const darkModeOn = e.matches;
    newTheme = darkModeOn ? 'dark' : 'light';
    if (newTheme != currentTheme) {
        toggleTheme();
    }
});

window.onload = function () {
    if (document.querySelector('#pwa-install').getInstalledStatus() == false) {
        document.querySelector('#pwa-install').openPrompt();
    }
    if (window.matchMedia('(prefers-color-scheme: dark)').media === 'not all') {
        currentTheme = 'light';
    } else if (darkModeMediaQuery.matches) {
        toggleTheme();
    }
};
