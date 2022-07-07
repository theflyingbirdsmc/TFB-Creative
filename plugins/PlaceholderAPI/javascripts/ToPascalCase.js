var string = args[0];
function ToPascalCase() {
    string = string.replace(/_/g, ' '); // First remove all underscores
    return string.replace(/\w+/g,
        function(w){return w[0].toUpperCase() + w.slice(1).toLowerCase();}); // Then we do PascalCase on the words 
}
ToPascalCase();