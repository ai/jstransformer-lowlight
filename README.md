# jstransformer-lowlight

[Lowlight] support for [JSTransformers].

```js
import jstransformer from 'jstransformer'
import lowlight from 'jstransformer-lowlight'

const highlight = jstransformer(lowlight)

highlight.render('var i = 5 + 10;', { lang: 'javascript' }).body
//=> '<span class=\"hljs-variable\"><span class=\"hljs-keyword\">var</span> i</span> = <span class=\"hljs-number\">5</span> + <span class=\"hljs-number\">10</span>;'
```

[JSTransformers]: https://github.com/jstransformers
[Lowlight]: https://github.com/wooorm/lowlight

<a href="https://evilmartians.com/?utm_source=jstransformer-lowlight">
  <img src="https://evilmartians.com/badges/sponsored-by-evil-martians.svg"
       alt="Sponsored by Evil Martians" width="236" height="54">
</a>

## Options

* `lang` (`false`): the language of the code if you know it.
* `prefix` (`hljs-`): the class prefix.
