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

No other extensions required.

## Extension Settings

## Known Issues

## Release Notes

### 0.1.0

Initial release
