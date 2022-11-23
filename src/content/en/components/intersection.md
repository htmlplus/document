# Intersection

This component provides a way to asynchronously observe changes in the intersection of a target element with an ancestor element or with a top-level document's [viewport](https://developer.mozilla.org/en-US/docs/Glossary/Viewport). Its basic behavior is totally similar to [standard intersection observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API). Its callback is executed whenever intersects with the viewport, or when the amount by which the two intersect changes by a requested amount.

<Playground />

<Usage />

<Api />

<GlobalConfig />

<Examples />

### Default

The intersection component observes the viewport and updates the status when the card component
enters or exits the viewport. (Its a component for detecting when elements are visible within the user's viewport).
<Example value="default" />

### Lazy Image

This is also used for lazy loading.
<Example value="lazy-image" />

<Checklist 
    accessibility={false}
    bidirectionality={false}
    cssParts={false}
    cssVariables={false}
    documentation={false}
    examples={false}
    events={false}
    keyboard={false}
    methods={false}
    playground={false}
    properties={false}
    skeleton={false}
    slots={false}
/>

<LastModified />
