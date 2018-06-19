export const schema = {
  "type": "object",
  "properties": {
    "books": {
      "type": "array",
      "minItems": 10,
      "maxItems": 30,
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "number",
            "unique": true,
            "minimum": 1,
            "maximum": 99
          },
          "author": {
            "type": "string",
            "faker": "name.findName"
          },
          "book": {
            "type": "string",
            "faker": "lorem.words"
          },
          "genre": {
            "type": "string",
            "faker": "lorem.word"
          }
        },
        "required": ["id", "author", "book", "genre"]
      }
    }
  },
  "required": ["books"]
};
