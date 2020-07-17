# Modern JavaScript Development Project
The main board and resource repository focused around modernizing development environments and project maintanance in the JavaScript/EcmaScript ecosystem


## Current Focus *(WIP)*

### improved integration and simplified usage of package(-lifetime)-scripts and shell-like scripting

Package scripts are an incredible tool for both development and in deployment but setting them up is complex and time consuming and creating a good default implementation is even harder. so I've been experimenting around and I think using small and standardized modules that can be scripted and used programmatically as needed is the smartest way to go.

One thing I think this could enable are small scripts and services able to work together and independently, sharing data in a loose swarm where both shell-like scripting and programmatic usages can work together to be both flexible and not configuration intensive. *this would be the holy grail,* but this will be incredibly hard to make functional.

### simplifying dependency maintenance and dep-tree integrity to avoid Dependency-Hell

Many parts of the JS ecosystem are stuck in a dependency-hell, because they were started when invariance of packages was the common way to ensure stability in programming. The language and its foundations have been advancing at high speed for many years now, yet this principle of invariance is still common and techniques that have been considered *bad practice* for years or have much much simpler modern alternatives are still regularly recommended all over the place.

It would be great for new projects to be as easy as possible to modernise as they age. I think the smart way to do that is focusing on easy adaptability instead of base-level compatibility and on creating flexible interfaces that can be switched out easily if needed and basing convention at this top-layer instead.
Pressuring users to update/-grade constantly by issuing deprecation early, and making it easy to do so is the smart move now.
for this it's important to look at the upcoming changes in the language and your frameworks and prepare ahead of time to adapt as soon as possible so the user has the ability to do the same. 

## general maintenance automation based on and around a modern infrastructure

The physical infrastructure has advanced to a point where resources for programming is abundant. Bandwidth is large enough to support updating something for even the most minor changes, and processing power is plenty enough to do so passively with negligible performance impact instead of on-use.

For this I plan on working on a way to include micro-services seamlessly in a project with similar functionalities as GitHub-actions but for client- and dev-side use instead of in a repository

## easier creation and configuration of projects implementing and aiding in creation of the aforementioned points

This is probably the biggest roadblock for me right now. Having a boiler-plate be as current as possible will require adaptive automation, dynamic recommendations and an easier way to configure and initialize complex projects than anything I've found.
