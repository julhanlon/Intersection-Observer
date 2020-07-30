# Intersection Observer

- boundingClientRect: Shows all size and margin information on the div you are observing,
- intersectionRatio: apart of options
- isIntersecting: tells you whether or not it is visible in the viewport
- the target is the div you are observing.

## options

root: is the viewport
threshold: (0-1 value)
rootMargin: "-150px",

threshold: if set to 1 the entire div must cover the page. 0 is saying if any tiny bit of the div is on the page the callback will be triggered.25 is like 25% of the div must be shown.

rootMargin tells the InterSection observer when to fire. must be a ox or percent value in a string