jQuery(window).on("elementor/frontend/init", (() => {
    elementorFrontend.hooks.addAction("frontend/element_ready/form.default", (function(e, t) {
        e.find(".elementskit-reset-button.elementor-button").on("click", (function(e) {
            setTimeout((() => {
                t(this).closest("form.elementor-form").find("input, select, textarea").trigger("change")
            }), 0)
        }))
    }))
}))