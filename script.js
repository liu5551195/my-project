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

// 页面加载进度条
function initProgressBar() {
  const progressBar = document.querySelector('.progress-bar');
  
  // 模拟页面加载进度
  let progress = 0;
  const interval = setInterval(() => {
    progress += 10;
    progressBar.style.width = progress + '%';
    
    if (progress >= 100) {
      clearInterval(interval);
      setTimeout(() => {
        progressBar.style.opacity = '0';
      }, 300);
    }
  }, 100);
}

// 页面切换动画
function initPageTransition() {
  const mainContent = document.querySelector('main');
  mainContent.classList.add('page-transition');
  
  setTimeout(() => {
    mainContent.classList.add('enter');
  }, 50);
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
  initPageTransition();
  initProgressBar();
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
