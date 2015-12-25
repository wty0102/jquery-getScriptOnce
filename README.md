# jquery-getScriptOnce
範例：
<pre>
<code>
<script type="text/javascript">
jQuery.getScriptOnce("<c:url value='/resource/js/tinymce/tinymce.min.js' />", function() {
	tinymce.baseURL = "<c:url value='/resource/js/tinymce' />";
	tinymce.suffix = ".min",
	tinymce.init({
		id: "${id}",
		selector: "#${id}",
		language : "zh_TW",
		auto_focus : "${id}",
		object_resizing : true,
		plugins : "advlist anchor autolink charmap code hr image link lists nonbreaking pagebreak preview print searchreplace table textcolor paste",
		toolbar : "undo redo | bold italic fontsizeselect forecolor backcolor subscript superscript blockquote | alignleft aligncenter alignright indent outdent | bullist numlist | link image | removeformat code",
		//	image_list:[
		//		{title: 'My image 1', value: 'http://www.tinymce.com/my1.gif'},
		//		{title: 'My image 2', value: 'http://www.moxiecode.com/my2.gif'}
		//	],
		pagebreak_separator : "<!-- html-editor page break -->",
		image_advtab : true,
		nonbreaking_force_tab : true,
		paste_data_images: true
	});
	jQuery("#${id}").show();
});
</script>
</code>
</pre>