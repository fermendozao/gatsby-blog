webpackJsonp([0xcca08df713f4],{333:function(e,n){e.exports={pathContext:{posts:[{html:'<ol>\n<li><strong>Rename your local branch</strong></li>\n</ol>\n<p>If you are on the branch you want to rename</p>\n<pre><code class="language-bash">git branch -m new-name\n</code></pre>\n<p>If you are on a different branch</p>\n<pre><code class="language-bash">git branch -m old-name new-name\n</code></pre>\n<ol start="2">\n<li><strong>Delete the old-name remote branch and push the new-name local branch</strong></li>\n</ol>\n<pre><code class="language-bash">git push origin :old-name new-name\n</code></pre>\n<ol start="3">\n<li><strong>Reset the upstream branch for the new-name local branch</strong></li>\n</ol>\n<pre><code class="language-bash">git push origin -u new-name\n</code></pre>',id:"/Users/fernandomendoza/Proyectos/my-blog/src/pages/2017-12-12-rename-local-and-remote-branch-git/index.md absPath of file >>> MarkdownRemark",frontmatter:{date:"2017-12-12T01:19:07+00:00",path:"/rename-local-and-remote-branch-git",title:"Rename a local and remote branch in git",excerpt:"",tags:["git","branch","branch names"]}}],tagName:"git"}}}});
//# sourceMappingURL=path---tags-git-db879c6cafc70a804ce5.js.map