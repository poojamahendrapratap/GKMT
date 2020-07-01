function smoothScroll(Target, duration) {
    var target = document.querySelector(Target);
    console.log(target)
    var targetPosition = target.getBoundingClientRect().bottom;
    var startPosition = window.pageYOffset;
    if (startPosition < targetPosition) {
        var distance = targetPosition - startPosition;
    } else {
        var distance = targetPosition;
    }


    console.log("startPosition " + startPosition);
    console.log("tpos " + targetPosition)
    console.log("dis " + distance)

    var startTime = null;

    function animation(currentTime) {
        if (startTime == null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);

    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}