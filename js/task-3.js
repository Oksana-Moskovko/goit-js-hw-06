function getElementWidth(content, padding, border) {
    return Number.parseFloat(content) +  (Number.parseFloat(padding) +  Number.parseFloat(border)) *2;
};

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
