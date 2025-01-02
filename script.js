// 模拟博客文章数据
const posts = [
  {
    title: "我的第一篇博客",
    date: "2023-10-01",
    content: "这是我的第一篇博客文章，主要介绍如何开始写博客。",
    image: "https://picsum.photos/400/300"
  },
  {
    title: "前端开发技巧",
    date: "2023-10-05",
    content: "分享一些实用的前端开发技巧和工具。",
    image: "https://picsum.photos/400/300"
  }
];

// 动态加载博客文章
function loadPosts() {
  const postsContainer = document.querySelector('.posts');
  
  posts.forEach(post => {
    const postElement = document.createElement('article');
    postElement.classList.add('post');
    postElement.innerHTML = `
      <img src="${post.image}" alt="${post.title}">
      <h2>${post.title}</h2>
      <p class="date">${post.date}</p>
      <p>${post.content}</p>
    `;
    postsContainer.appendChild(postElement);
  });
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
  loadPosts();
  
  // 添加导航栏交互
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      navLinks.forEach(l => l.classList.remove('active'));
      e.target.classList.add('active');
    });
  });
  
  // 添加简单的页面加载动画
  document.body.style.opacity = '0';
  setTimeout(() => {
    document.body.style.transition = 'opacity 0.5s ease';
    document.body.style.opacity = '1';
  }, 100);
});
