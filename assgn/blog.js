function toggleLike(buttonId) {
    const likeButton = document.getElementById(buttonId);
    const likeStatus = document.getElementById(buttonId.replace('likeButton', 'likeStatus'));

    if (likeButton.textContent === "Like") {
        likeButton.textContent = "Unlike";
        likeStatus.textContent = "1 Like";
    } else {
        likeButton.textContent = "Like";
        likeStatus.textContent = "0 Likes";
    }
}
