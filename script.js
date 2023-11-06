document.addEventListener("DOMContentLoaded", (event) => {
    const chararea = document.getElementById("chararea");
    const charspan = document.getElementById("charspan");
    const wordspan = document.getElementById("wordspan");
    const spaceoutspan = document.getElementById("spaceoutspan");
    const paragraphspan = document.getElementById("paragraphspan")

    chararea.addEventListener("input", (e) => {
        const content = e.target.value;
        console.log(content);
        charspan.innerHTML = content.length;
        wordspan.innerHTML = countWords(content);
        spaceoutspan.innerHTML = countSpaceOutChar(content);
        paragraphspan.innerHTML = content.replace(/\n$/gm, '').split(/\n/).length
    });
});

function countWords(str) {
    return str.replace(/\s+/g, ' ').trim().split(' ').length
}

function countSpaceOutChar(str) {
    return str.replace(/\s+/g, ' ').trim().replace(" ", "").length;
}