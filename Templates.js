// This file was automatically generated from Templates.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace templates.functional.
 */

if (typeof templates == 'undefined') { var templates = {}; }
if (typeof templates.functional == 'undefined') { templates.functional = {}; }


templates.functional.NavBar = function(opt_data, opt_ignored) {
  return '<nav class="navbar navbar-inverse navbar-fixed-top"><div class="container"><div class="navbar-header"><button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><span class="sr-only">Toggle navigation</span></button></div><ul class="nav navbar-nav"><li \tclass="active"><a href="index.html">\tHome\t</a>\t</li><li><a \thref="Projects.html">\t\t\t\t\tProjects\t</a>\t</li><li \tclass="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Blog Posts <span class="caret"></span></a><ul class="dropdown-menu"><li><a href="BLOGCampingInRonse.html">\tCamping In Ronse\t</a></li><!--<li><a href="#">\t\t\t\t\t\tAnother action\t\t</a></li><li><a href="#">\t\t\t\t\t\tSomething else here\t</a></li><li role="separator" class="divider"></li><li class="dropdown-header">Nav header</li><li><a href="#">Separated link</a></li><li><a href="#">One more separated link</a></li>--></ul></li></ul><div id="navbar" class="navbar-collapse collapse" aria-expanded="false" style="height: 1px;"><form class="navbar-form navbar-right"><div class="form-group"><input type="text" placeholder="Email" class="form-control"></div><div class="form-group"><input type="password" placeholder="Password" class="form-control"></div><button type="submit" class="btn btn-success">Sign in</button></form></div></div></nav>';
};
if (goog.DEBUG) {
  templates.functional.NavBar.soyTemplateName = 'templates.functional.NavBar';
}
