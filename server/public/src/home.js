document.addEventListener("DOMContentLoaded", () => {

    var searchText = "";

    $(document).on("click", "#loginButton", function() {
        changeURL("/login-signup");
    });

    $(document).on("click", "#foundationsTab", function() {
        changeURL("/foundations");
    });

    $(document).on("click", "#eventsTab", function() {
        changeURL("/events");
    });

    $(document).on("click", "#contactTab", function() {
        changeURL("/contact");
    });

    $(document).on("click", "#careerTab", function() {
        changeURL("/career");
    });

    $(document).on("click", "#announcementsTab", function() {
        changeURL("/announcements");
    });

    $(document).on("click", "#aboutUsTab", function() {
        changeURL("/aboutUs");
    });

    $(document).on("click", "#searchButton", function() {
        searchText = document.getElementById("searchBox").value;

        alert(searchText + "a");
    });

    /////////////

    document.querySelectorAll('.navbar .nav-item').forEach(function(everyitem) {

		everyitem.addEventListener('mouseover', function(e) {

			let el_link = this.querySelector('a[data-bs-toggle]');

			if(el_link != null){
				let nextEl = el_link.nextElementSibling;
				el_link.classList.add('show');
				nextEl.classList.add('show');
			}
		});

		everyitem.addEventListener('mouseleave', function(e){
			let el_link = this.querySelector('a[data-bs-toggle]');

			if(el_link != null) {
				let nextEl = el_link.nextElementSibling;
				el_link.classList.remove('show');
				nextEl.classList.remove('show');
			}
		})
    });
});