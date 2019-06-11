# JSON Multiline Value Escaper and UnEscaper README

Provides a possibility to replace /n with //n and vice-versa. This allows to have multiline value JSONs but still be able to use code prettifiers, schemas etc.

## Features

Takes
~~~~
{
    "key": " multiline
    string
    in 
    json
    value
    "
}
~~~~

and makes it to:
~~~~
{
    "key": " multiline\n    string\n    in \n    json\n    value\n    "
}
~~~~

and back.

## Requirements

JSON keys and values delimiter character must be quote "

There can't be quote characters inside values, even /"

No other extensions required.

## Extension Settings

## Known Issues

## Release Notes

### 0.1.2

* Internal algorithm change.

### 0.1.1

* Fixed an error that lost the last character in affected string values in certain situations and made the functionality mroe robust.

* Count of affected lines now works correctly.

### 0.1.0

* Initial release
