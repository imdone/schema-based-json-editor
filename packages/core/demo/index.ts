import * as common from '../dist/'

/**
 * @public
 */
export let schema: common.Schema = {
  type: 'object',
  title: 'GUI:',
  description: 'a description example',
  properties: {
    stringExample: {
      type: 'string',
      title: 'A string example',
      description: 'a string description example',
      default: 'a default string example',
      minLength: 20,
      maxLength: 25
    },
    booleanExample: {
      type: 'boolean',
      title: 'A boolean example',
      description: 'a boolean description example',
      default: true
    },
    numberExample: {
      type: 'number',
      title: 'A number example',
      description: 'a number description example',
      default: 123.4,
      minimum: 10,
      exclusiveMinimum: true,
      maximum: 1000,
      exclusiveMaximum: true
    },
    integerExample: {
      type: 'integer',
      title: 'A integer example',
      description: 'a integer description example',
      default: 124,
      multipleOf: 2
    },
    nullExample: {
      type: 'null',
      title: 'A null example',
      description: 'a null description example',
      default: null
    },
    objectExample: {
      type: 'object',
      title: 'A object example',
      description: 'a object description example',
      properties: {
        propertyExample1: {
          type: 'string'
        },
        propertyExample2: {
          type: 'number'
        }
      },
      default: {},
      required: ['propertyExample1', 'propertyExample2']
    },
    arrayExample: {
      type: 'array',
      title: 'A array example',
      description: 'a array description example',
      items: {
        type: 'string',
        maxLength: 15
      },
      default: ['default item 1', 'default item 2'],
      minItems: 1,
      uniqueItems: true
    },
    readOnlyExample: {
      type: 'string',
      readonly: true,
      default: 'abc'
    },
    readOnlyAndOptionalExample: {
      type: 'string',
      readonly: true,
      default: 'abc'
    },
    enumExample: {
      type: 'string',
      enum: [
        'enum 1',
        'enum 2'
      ]
    },
    optionalExample: {
      type: 'string'
    },
    optionalAndDefaultExample: {
      type: 'string',
      default: 'abc'
    },
    booleanOptionalExample: {
      type: 'boolean'
    },
    colorExample: {
      type: 'string',
      format: 'color',
      default: '#000000'
    },
    textareaExample: {
      type: 'string',
      format: 'textarea'
    },
    patternExample: {
      type: 'string',
      pattern: '^[A-z]{3}$',
      default: 'abc'
    },
    imagePreviewExample: {
      type: 'string',
      default: 'http://image2.sina.com.cn/bj/art/2004-08-02/U91P52T4D51657F160DT20040802125523.jpg'
    },
    markdownExample: {
      type: 'string',
      format: 'markdown',
      default: '###### markdown title and code example\n\n```js\nfunction foo(bar) {\n    console.log(bar);\n}\n```'
    },
    codeExample: {
      type: 'string',
      format: 'code',
      default: 'function foo(bar) {\n    console.log(bar);\n}\n'
    },
    itemTitleExample: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          propertyExample1: {
            type: 'string'
          },
          propertyExample2: {
            type: 'number'
          }
        },
        required: ['propertyExample1', 'propertyExample2'],
        collapsed: true
      },
      default: [
        {
          propertyExample1: 'foo',
          propertyExample2: 1
        },
        {
          propertyExample1: 'bar',
          propertyExample2: 2
        },
        {
          propertyExample1: 'baz',
          propertyExample2: 3
        },
        {
          propertyExample1: 'abc',
          propertyExample2: 4
        },
        {
          propertyExample1: 'def',
          propertyExample2: 5
        },
        {
          propertyExample1: 'ghi',
          propertyExample2: 6
        }
      ]
    },
    optionalObjectExample: {
      type: 'object',
      properties: {
        propertyExample1: {
          type: 'string'
        },
        propertyExample2: {
          type: 'number'
        }
      },
      maxProperties: 1,
      minProperties: 0
    },
    propertyOrderExample: {
      type: 'object',
      properties: {
        propertyExample1: {
          type: 'string',
          propertyOrder: 3
        },
        propertyExample2: {
          type: 'number',
          propertyOrder: 1
        },
        propertyExample3: {
          type: 'number',
          propertyOrder: 2
        }
      }
    },
    collapsedObjectExample: {
      type: 'object',
      properties: {
        propertyExample1: {
          type: 'string'
        }
      },
      collapsed: true
    },
    emptyEnumExample: {
      type: 'string',
      enum: [
      ]
    },
    uploadFileExample: {
      type: 'string',
      format: 'base64'
    },
    requiredWhenExample: {
      type: 'object',
      properties: {
        kind: {
          type: 'string',
          enum: [
            'enum 1',
            'enum 2',
            'enum 3'
          ]
        },
        propertyExample1: {
          type: 'number',
          requiredWhen: ['kind', '===', 'enum 1']
        },
        propertyExample2: {
          type: 'string',
          requiredWhen: ['kind', '===', 'enum 2']
        },
        propertyExample3: {
          type: 'number',
          requiredWhen: ['kind', 'in', ['enum 1', 'enum 2']]
        },
        propertyExample4: {
          type: 'string'
        },
        propertyExample5: {
          type: 'string'
        },
        propertyExample6: {
          type: 'string',
          optionalWhen: ['kind', '===', 'enum 2']
        }
      },
      required: ['kind', 'propertyExample4']
    },
    checkboxBooleanExample: {
      type: 'boolean',
      default: true,
      format: 'checkbox'
    },
    enumTitlesExample: {
      type: 'string',
      enum: [
        'enum 1',
        'enum 2'
      ],
      enumTitles: [
        'enum title 1',
        'enum title 2'
      ]
    },
    itemTitleEnumTitleExample: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          propertyExample1: {
            type: 'string',
            enum: [
              'foo',
              'bar'
            ],
            enumTitles: [
              'foo title',
              'bar title'
            ]
          }
        },
        required: ['propertyExample1']
      },
      default: [
        {
          propertyExample1: 'bar'
        }
      ]
    }
  },
  required: [
    'stringExample',
    'booleanExample',
    'numberExample',
    'integerExample',
    'nullExample',
    'objectExample',
    'arrayExample',
    'readOnlyExample',
    'enumExample',
    'colorExample',
    'textareaExample',
    'patternExample',
    'imagePreviewExample',
    'markdownExample',
    'codeExample',
    'performanceExample',
    'itemTitleExample',
    'optionalObjectExample',
    'propertyOrderExample',
    'collapsedObjectExample',
    'emptyEnumExample',
    'uploadFileExample',
    'requiredWhenExample',
    'checkboxBooleanExample',
    'enumTitlesExample',
    'itemTitleEnumTitleExample'
  ]
}

/**
 * @public
 */
export let initialValue = {}

/**
 * @public
 */
export let theme = 'bootstrap4'

/**
 * @public
 */
export let icon = 'fontawesome4'

const propertiesString = localStorage.getItem('json-editor:properties')
if (propertiesString) {
  try {
    const properties = JSON.parse(propertiesString)
    schema = JSON.parse(properties.schema)
    initialValue = JSON.parse(properties.initialValue)
    theme = properties.theme
    icon = properties.icon
  } catch (error) {
    console.log(error)
  }
}

/**
 * @public
 */
export const propertiesSchema: common.ObjectSchema = {
  type: 'object',
  title: 'properties of the component',
  description: 'refresh the page to make it work when you change it',
  properties: {
    schema: {
      type: 'string',
      format: 'textarea'
    },
    initialValue: {
      type: 'string',
      format: 'textarea'
    },
    theme: {
      type: 'string',
      enum: [
        'bootstrap4',
        'antd3',
        'element-ui2',
        'iview2',
        'blueprint2',
        '(undefined)'
      ]
    },
    icon: {
      type: 'string',
      enum: [
        'fontawesome4',
        'antd3',
        'element-ui2',
        'iview2',
        '(undefined)'
      ]
    }
  },
  required: [
    'schema',
    'initialValue',
    'theme',
    'icon'
  ]
}

/**
 * @public
 */
export const propertiesInitialValue = {
  schema: JSON.stringify(schema, null, '  '),
  initialValue: JSON.stringify(initialValue, null, '  '),
  theme,
  icon
}

function addCssLink (cssRootPath: string, file: string) {
  const link = document.createElement('link')
  link.href = cssRootPath + file
  link.type = 'text/css'
  link.rel = 'stylesheet'
  document.getElementsByTagName('head')[0].appendChild(link)
}

/**
 * @public
 */
export function addAllCssLinks (cssRootPath: string) {
  if (theme === 'bootstrap4') {
    addCssLink(cssRootPath, 'bootstrap.min.css')
  }

  if (icon === 'fontawesome4') {
    addCssLink(cssRootPath, 'font-awesome.min.css')
  }

  if (theme === 'antd3' || icon === 'antd3') {
    addCssLink(cssRootPath, 'antd.min.css')
  }

  if (theme === 'element-ui2' || icon === 'element-ui2') {
    addCssLink(cssRootPath, 'element-ui/index.css')
  }

  if (theme === 'iview2' || icon === 'iview2') {
    addCssLink(cssRootPath, 'iview.css')
  }

  if (theme === 'blueprint2') {
    addCssLink(cssRootPath, 'blueprint.css')
  }
}
