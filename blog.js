let posts = JSON.parse(localStorage.getItem("posts")) || [];

function savePosts() {
  localStorage.setItem("posts", JSON.stringify(posts));
}

function addPost() {
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;

  if (title && content) {
    posts.unshift({ title, content, date: new Date().toLocaleString() });
    savePosts();
    renderPosts();
    document.getElementById("title").value = '';
    document.getElementById("content").value = '';
  }
}

function renderPosts() {
  const container = document.getElementById("blogPosts");
  container.innerHTML = '';
  posts.forEach((post, index) => {
    container.innerHTML += `
      <div class="post">
        <h2 contenteditable="true" onblur="editPost(${index}, 'title', this.innerText)">${post.title}</h2>
        <p contenteditable="true" onblur="editPost(${index}, 'content', this.innerText)">${post.content}</p>
        <small>${post.date}</small>
      </div>
    `;
  });
}

function editPost(index, field, value) {
  posts[index][field] = value;
  savePosts();
}

renderPosts();