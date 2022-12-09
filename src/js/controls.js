const sidebar = document.getElementsByClassName('sidebar')[0];
const profile = document.getElementsByClassName('profile')[0];

let isSidebarHidden = true;

const toggleSidebar = () => {
  sidebar.style.left = isSidebarHidden ? 0 : "-100vw";
  isSidebarHidden = !isSidebarHidden;
}


let isSidebarHidden_desktop = true;
const toggleSidebarDesktop = () => {
  sidebar.style.display = isSidebarHidden_desktop ? "block" : "none";
  isSidebarHidden_desktop = !isSidebarHidden_desktop;
}

let isProfileHidden = true;
const toggleProfile = () => {
  console.log(profile);
  profile.style.right = isProfileHidden ? 0 : "-100vw";
  isProfileHidden = !isProfileHidden;
}

const scrollIndicator = document.getElementsByClassName("scroll-indicator")[0];

document.body.onscroll = () => {
  let { innerHeight, pageYOffset } = window;
  let { scrollHeight } = document.body;
  
  scrollIndicator.style.width = `${(pageYOffset / (scrollHeight - innerHeight)) * 100}%`;
}