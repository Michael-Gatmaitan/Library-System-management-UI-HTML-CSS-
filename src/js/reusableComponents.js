let userData = {
  userProfile: {
    name: "Michael Gatmaitan",
    student_id: "PDM-2022-002451",
    lrn: "104906070124",
    course_section: "BSIT-11B",
    image: "./img/user/profile.png"
  }
}

const { userProfile } = userData;

class ProfileComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="profile">
      <div class="profile-nav">
        <div class="close-profile" onclick="toggleProfile()">
          <img src="./svg/arrow_left_black.svg" alt="close-profile">
        </div>

        <div class="title">Profile</div>
      </div>

      <div class="profile-card">
        <div class="profile-info-container">
          <div class="profile-image">
            <img src="${userProfile.image}" alt="profile">
          </div>
          <div class="profile-name">${userProfile.name}</div>
        </div>

        <div class="profile-keys">
          <div class="section">${userProfile.course_section}</div>
          <div class="lrn">#${userProfile.lrn}</div>
        </div>
      </div>

      <div class="borrowed-book-container">
        <div class="header">
          <div class="title">Borrowed Book</div>
          <div class="see-more">
            <img src="./svg/arrow_right_black.svg" alt="more">
          </div>
        </div>

        <div class="borrowed-book-info">
          <div class="book-info">
            <div class="book-image">
              <img src="./img/books/book1.jpg" alt="book1">
            </div>

            <div class="book-name">Data Structures & Algorithms in Java 2nd Edition</div>
          </div>

          <div class="book-due">
            <div class="info">
              <div class="label">Borrowed</div>
              <div class="date">Nov. 3, 2022</div>
            </div>

            <div class="info">
              <div class="label">Return</div>
              <div class="date">Nov. 13, 2022</div>
            </div>

          </div>
          
          <div class="book-status overdue">2 days overdue</div>

          <div class="thread"></div>
        </div>

        <div class="borrowed-book-info">
          <div class="book-info">
            <div class="book-image">
              <img src="./img/books/book2.jpg" alt="book2">
            </div>

            <div class="book-name">Object Oriented Programming in Java</div>
          </div>

          <div class="book-due">
            <div class="info">
              <div class="label">Borrowed</div>
              <div class="date">Nov. 2, 2022</div>
            </div>

            <div class="info">
              <div class="label">Return</div>
              <div class="date">Nov. 15, 2022</div>
            </div>

          </div>
          
          <div class="book-status underdue">2 days left before due</div>

          <div class="thread"></div>
        </div>

      </div>

      <div class="borrow-history-container">

        <div class="title">Borrow History</div>

        <div class="borrow-history-card">
          <div class="book-info">
            <div class="book-name">Fundamentals of Programming</div>
            <div class="date">Oct. 4, 2022</div>
          </div>

          <div class="returned">Returned</div>

          <div class="thread"></div>
        </div>

        <div class="borrow-history-card">
          <div class="book-info">
            <div class="book-name">Understanding the Self</div>
            <div class="date">Oct. 10, 2022</div>
          </div>

          <div class="returned">Returned</div>

          <div class="thread"></div>
        </div>
      </div>

      <div class="overdue-container">
        <div class="title">Overdue</div>

        <div class="overdue-card">
          <div class="info">
            <div class="book-name">Data Structures & Algorithms</div>
            <div class="due-date">Nov. 15, 2022</div>
          </div>

          <div class="due-mount">₱20 - 2days</div>

          <div class="thread"></div>
        </div>

        <div class="overdue-card">
          <div class="info">
            <div class="book-name">Basics of C++</div>
            <div class="due-date">Nov. 19, 2022</div>
          </div>

          <div class="due-mount">₱40 - 4days</div>

          <div class="thread"></div>
        </div>
      </div>
      
    </div>
    `;
  }
}

class FooterComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="footer">
      <div class="group-6">
        <div class="header">Group 6</div>
  
        <div class="members">
          <div class="member">Michael Jay Ivan Z. Gatmaitan</div>
          <div class="member">Kimberly Tupaz</div>
          <div class="member">Angela Ebio</div>
          <div class="member">Tristan Gamilo</div>
          <div class="member">Ivan Rey Derammas</div>
          <div class="member">Lance De Guzman</div>
        </div>
      </div>
  
      <form class="email">
        <div class="header">Email Us</div>
  
        <input type="text" class="input-box" id="subject" placeholder="Subject (Optional)">
        <textarea type="text" class="input-box" id="compose" placeholder="Compose"></textarea>
  
        <input type="button" class="btn btn-solid" value="Send">
      </form>
  
    </div>
    `;
  }
}

class NavigationBarComponent extends HTMLElement {
  
  connectedCallback() {
    const el = document.getElementById("navigation-bar-component");
    const navTitle = el.getAttribute("title");
    console.log(navTitle);
    this.innerHTML = `
    <div class="navigation-bar">

      <!-- Mobile NAVIGATION -->
      <div class="nav-content-mobile">
        <div class="burger-menu" onclick="toggleSidebar()">
          <img src="./svg/burger_menu.svg" alt="burger-menu">
        </div>

        <div class="web-title">${navTitle}</div>

        <div class="profile-btn" onclick="toggleProfile()">
          <img src="./svg/profile.svg" alt="profile">
        </div>
      </div>

      <!-- Desktop NAVIGATION -->
      <div class="nav-content-desktop">
        <div class="title">${navTitle}</div>

        <div class="search-bar-book sidebar-search-bar">
          <img src="./svg/search.svg" alt="" srcset="">
          <input type="text" name="search_book" class="search-bar" placeholder="Search book...">
        </div>

        <div class="settings">
          <img src="./svg/settings_black.svg" alt="setting">
        </div>
      </div>
    </div>
    `;
  }
}

// Components
customElements.define('profile-component', ProfileComponent);
customElements.define('footer-component', FooterComponent);
customElements.define('navigation-bar-component', NavigationBarComponent);