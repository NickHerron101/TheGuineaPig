# TheGuineaPig

## The Gist of This

1. added event listeners to a whole section with the same class name.
2. constructed functions that would input HTML into a target element when section was clicked
3. Did the same thing with buttons.
4. Styled the buttons using element.classList.add("").

*it was pretty straight forward*

### Coding Examples

Javascript
```javascript
function handleClick (event){
    console.log(event);
    var elementText = event.target.innerHTML; // the target html to var
    sayWhat.innerHTML = "You clicked on the " + elementText + " section";
}
```

```javascript
for (var i = 0; i < artSections.length; i++) {
    artSections.item(i).addEventListener("click", handleClick);
     if (artSections.item(i).innerHTML === "Section 1") {
        artSections.item(i).classList.add("bold")
     } else if (artSections.item(i).innerHTML === "Section 3") {
        artSections.item(i).classList.add("italicized")
     }
}
```

