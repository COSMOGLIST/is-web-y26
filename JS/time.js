(function() {
    window.addEventListener('load', function() {
        const loadTime = (window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart)/1000;
        const timeInfo = document.createElement('p');
        timeInfo.textContent = `Page load time is ${loadTime} seconds`;
        timeInfo.id = "TimeInfo";
        document.querySelector('footer').appendChild(timeInfo);
    });
})();