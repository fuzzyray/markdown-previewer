It's very easy to make some words **bold** and other words *italic* with Markdown. You can even [link to Google!](http://google.com)

This text is ***really important***.
This is ~~strikethrough text~~
# Structured documents

Sometimes it's useful to have different levels of headings to structure your documents. Start lines with a `#` to create headings. Multiple `##` in a row denote smaller heading sizes.

### This is a third-tier heading

You can use one `#` all the way up to `######` six for different heading sizes.

If you'd like to quote someone, use the > character before the line:

> Coffee. The finest organic suspension ever devised... I beat the Borg with it.
> - Captain Janeway

## Code with syntax highlighting
 
### JavaScript
```javascript
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
```
### Python
```python
with open(jsonFilePath, 'w', encoding='utf-8') as jsonFile:
    jsonFile.write(json.dumps(rawdata, indent=4))
```
### CSS
```css
.content-container {
    grid-area: content;
    border: 1px solid black;
    overflow: scroll;
    padding: 0.5rem;
}
```

Sometimes you want numbered lists:

1. One
2. Two
3. Three

Sometimes you want bullet points:

* Start a line with a star
* Profit!

Alternatively,

- Dashes work just as well
- And if you have sub points, put two spaces before the dash or star:
  - Like this
  - And this

If you want to embed images, this is how you do it:

![Image of cat](https://images.unsplash.com/photo-1541781774459-bb2af2f05b55)