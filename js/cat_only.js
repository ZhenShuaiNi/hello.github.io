/*
Cache: wc-single-product
*/
/* wc-single-product: (http://5c99816b4d469.t73.qifeiye.com/qfy-content/plugins/bitcommerce/assets/js/frontend/single-product.min.js) */
jQuery(function(a) {
	return "undefined" == typeof wc_single_product_params ? !1 : (a(".bitcommerce-tabs .panel").hide(), a(
		".bitcommerce-tabs ul.tabs li a").click(function() {
		var b = a(this),
			c = b.closest(".bitcommerce-tabs");
		return a("ul.tabs li", c).removeClass("active"), a("div.panel", c).hide(), a("div" + b.attr("href"), c).show(),
			b.parent().addClass("active"), !1
	}), a(".bitcommerce-tabs").each(function() {
		var b = window.location.hash,
			c = window.location.href,
			d = a(this);
		b.toLowerCase().indexOf("comment-") >= 0 ? a("ul.tabs li.reviews_tab a", d).click() : c.indexOf("comment-page-") >
			0 || c.indexOf("cpage=") > 0 ? a("ul.tabs li.reviews_tab a", a(this)).click() : a("ul.tabs li:first a", d).click()
	}), a("a.bitcommerce-review-link").click(function() {
		return a(".reviews_tab a").click(), !0
	}), a("[name='rating']").each(function() {
		if (jQuery("p.stars").length == 0) {
			a(this).hide().before(
				'<p class="stars"><span><a class="star-1" href="#">1</a><a class="star-2" href="#">2</a><a class="star-3" href="#">3</a><a class="star-4" href="#">4</a><a class="star-5" href="#">5</a></span></p>'
			)
		}
	}), a("body").on("click", "#respond p.stars a", function() {
		var b = a(this),
			c = a(this).closest("#respond").find("#rating");
		return c.val(b.text()), b.siblings("a").removeClass("active"), b.addClass("active"), !1
	}).on("click", "#respond #submit", function() {
		var b = a(this).closest("#respond").find("#rating"),
			c = b.val();
		return b.size() > 0 && !c && "yes" === wc_single_product_params.review_rating_required ? (alert(
			wc_single_product_params.i18n_required_rating_text), !1) : void 0
	}), void a("form.cart").submit(function() { /*a(this).find(":submit").attr("disabled","disabled")*/ }))
});;
