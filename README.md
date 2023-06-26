# template-formatter README

This extension is for formatting the JSON handlebars templates

The extension has a few limitation though
1. Comments `{{{!-- ---}}}` are not supported
2. Single clause helpers are only parsed/understood when they are surrounded with 3 curly braces. For instance `{{{item.value.pml}}}` works, while `{{item.value.pml}}` won't.
3. Wrapping a single object bracket `{` | `}` or single array `[`| `]` brackets within helpers will break the formatter. Something like this won't work
```
{
    "children": {
        "pair": "value"
    {{#if something}}        
    }
    {{/if}}
}
```
