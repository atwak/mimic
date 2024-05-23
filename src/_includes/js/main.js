{
    window.addEventListener("DOMContentLoaded", init);

    function init () {

        close_toc_event();
    }

    function close_toc_event () {
        const toc = document.querySelector(".toc");
        if (!toc) return;

        const label = document.querySelector(".toc-open_label");
        label.classList.add("toc-is-present");

        const links = toc.querySelectorAll("a");
        links.forEach(link => link.addEventListener('click', close_toc));

        return;
    }
    function close_toc () {
        document.querySelector("#toc-open").checked = false;
    }

    function up () {
        const up = document.querySelector(".up");
        up.addEventListener('click', get_up);

        //addEventListener("scroll", (event) => {});
    }
    function get_up () {
        window.scroll(0, 0);
        return;
    }
}