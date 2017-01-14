---
layout: page
title: Corey DeMarse - Home
tagline: <b>need a ninja?<br /><br />get in touch</b><br /><a id="hire_link"><div class="btn btn-primary btn-lg"><b>coreydemarse@protonmail.ch</b></div></a>
header: assets/themes/bootstrap/images/header1
---
{% include JB/setup %}

<script>
$(document).ready(function() {
	$('#hire_link').attr('href','mailto: business@matadoer.io');
});
</script>

<div class="row animate fadeInUp">
	<div class="col-md-8 col-xs-12">
		<div class="page-header"><h2>My Repositories</h2></div>
		<p>
		</p>
	</div>
	<div class="col-md-4 col-xs-12">
		<div class="page-header"><h2>Recent Updates</h2></div>
		<div class="posts">
		  {% for post in site.posts %}
			<h5><a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></h5>
			{{ post.date | date_to_string }}
		  {% endfor %}
		</div>
	</div>
</div>
