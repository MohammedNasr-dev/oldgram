const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const postContainer = document.querySelector("#post-container")
const renderPosts = () => {
    postContainer.innerHTML = posts.map((post, index) => `
        <div class="post">
            <div class="post-header">
                <img class="avatar" src="${post.avatar}" alt="avatar">
                <div class="name">
                    <p>
                    ${post.name}<br>
                    <span>${post.location}</span>
                    </p>
                </div>
            </div>
            <img
             class="post-img"
             src="${post.post}"
             alt="post image"
             ondblclick="addLike(${index})"
             >
            <div class="icons-container">
                <div class="icons">
                    <img
                     src="images/icon-heart.png"
                     alt="heart-icon"
                     ondblclick="addLike(${index})"
                     >
                    <img src="images/icon-comment.png" alt="comment-icon">
                    <img src="images/icon-dm.png" alt="dm-icon">
                </div>
                <p>${post.likes} likes</p>
            </div>
            <footer>
                <p>${post.username}<span> ${post.comment}</span></p><hr>
            </footer>
        </div>
    `).join("")
}

const addLike = (index) => {
    posts[index].likes++
    renderPosts()
}

renderPosts()
