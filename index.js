/**
 * Created by stephenw on 2017/2/10.
 */
'use strict';
if (hexo.config.multiauthor && hexo.config.multiauthor.authors) {
  hexo.extend.generator.register('author', require('./lib/generator'))
}