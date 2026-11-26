/* testimonial-form.js
   Sends the testimonial form to Web3Forms.
   Nothing is published automatically: submissions only reach my inbox. */
(function () {
    // EDIT: paste my Web3Forms access key between the quotes
    var WEB3FORMS_ACCESS_KEY = "";

    var form = document.getElementById("testimonial-form");
    if (!form) return;
    var okBox = document.getElementById("t-success-msg");
    var errBox = document.getElementById("t-error-msg");
    var btn = document.getElementById("t-submit-btn");

    var MSG = {
        en: {
            sending: "Sending...",
            notSetup: "Sending is not set up yet.",
            ok: "Thank you! Your testimonial was sent for review. It will appear after it is verified.",
            err: "Something went wrong. Please try again or email me directly."
        },
        ar: {
            sending: "جارٍ الإرسال...",
            notSetup: "الإرسال غير مفعّل بعد.",
            ok: "شكراً لك! تم إرسال رأيك للمراجعة، وسيظهر بعد التأكد منه.",
            err: "حدث خطأ ما. حاول مرة أخرى أو راسلني مباشرة على الإيميل."
        }
    };

    function L() {
        var l = (document.documentElement.lang || "en").toLowerCase();
        return MSG[l.indexOf("ar") === 0 ? "ar" : "en"];
    }

    function show(box, text) {
        okBox.hidden = true;
        errBox.hidden = true;
        if (!box) return;
        box.removeAttribute("data-i18n"); // keep my text, not the old translation
        box.textContent = text;
        box.hidden = false;
    }

    // Capture phase: runs before any older submit handler on the form
    document.addEventListener(
        "submit",
        function (e) {
            if (e.target !== form) return;
            e.preventDefault();
            e.stopPropagation();
            if (e.stopImmediatePropagation) e.stopImmediatePropagation();

            // Spam traps: if filled, stop silently
            var trap = document.getElementById("t-gotcha");
            var bot = form.querySelector('input[name="botcheck"]');
            if ((trap && trap.value) || (bot && bot.checked)) return;

            if (!form.checkValidity()) {
                form.reportValidity();
                return;
            }
            if (!WEB3FORMS_ACCESS_KEY) {
                show(errBox, L().notSetup);
                return;
            }

            var review = form.elements["review"].value.trim();
            var payload = {
                access_key: WEB3FORMS_ACCESS_KEY,
                subject: "New testimonial for approval",
                from_name: "Portfolio Testimonials",
                name: form.elements["name"].value.trim(),
                role: form.elements["role"].value.trim(),
                linkedin: form.elements["linkedin"].value.trim(),
                rating: form.elements["rating"].value,
                message: review,
                botcheck: ""
            };

            var oldLabel = btn.textContent;
            btn.disabled = true;
            btn.textContent = L().sending;
            show(null);

            fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json", Accept: "application/json" },
                body: JSON.stringify(payload)
            })
                .then(function (r) {
                    return r.json().then(function (d) { return { ok: r.ok, d: d }; });
                })
                .then(function (res) {
                    btn.disabled = false;
                    btn.textContent = oldLabel;
                    if (res.ok && res.d && res.d.success) {
                        show(okBox, L().ok);
                        form.reset(); // clear only after a successful send
                    } else {
                        show(errBox, L().err); // keep what the visitor typed
                    }
                })
                .catch(function () {
                    btn.disabled = false;
                    btn.textContent = oldLabel;
                    show(errBox, L().err);
                });
        },
        true
    );
})();