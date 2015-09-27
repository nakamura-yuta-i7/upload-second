var InputStringParserError = function(message) {
    this.name = "inputstringparser";
    this.message = message || "入力された文字列の書式が異なります。";
};

InputStringParserError.prototype = new Error();
InputStringParserError.prototype.constructor = InputStringParserError;
