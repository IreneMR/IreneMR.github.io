# Code excercise Seat Code

Technological test fot Seat Code made by [Irene Muñoz Real](https://linkedin.com/in/irenemr/).

## Technologic Stack

|                      | Nombre   | Versión |
| ---                  | ---      | ---     |
| **Layouts**          | Nunjucks | v3.2.4  |
| **Styles**           | Less     | v3.6.0  |
| **Used Libraries**   | Chartjs  | v4.4.2  |
| **Used Libraries**   | Swiper   | v11.0.5 |

### Project visualization

To see the project live you can access through this github link:

```bash
https://irenemr.github.io/
```

And the public repository to see the code is here:

```bash
https://github.com/IreneMR/IreneMR.github.io
```

## Code Format
This repository has been created following the given instructions.

- All the external libraries have been added to the project using **cdnjs**, **jsdelivr** in the case of Chart.js and Swiper, because cdnjs didn't work as expected, and in the case of Less because it's the link they provide in the official documentation.
- **less**, as said before, for the styles (using classes as selectors).
- Native **javascript** (using data-attributes as selectors) has been used for the dom interactions.
- **Nunjucks** has been chosen for the template system because it is easy to use and thus avoids repeating unnecessary code.
- The data is loaded using json files.

To display the data from the covid API, I used the **chartjs** library. This library was well suited to the design needs.

To optimize the performance of the page, **.webp** format and **lazy loading** have been used to display the images.

### Things I would have liked to do
- On the carrousel Cards I would have liked to display a dropdown list on mobile, to avoid having a card with so much height but due to time limit I couldn't implement it. By the way the collapsable functionality is made in faqs section.
- I would have liked also to implement a linter to standarize the code but when using cdnjs it did not let me to use eslint, stylelint and prettier that are the libraries that I am familiar with.
