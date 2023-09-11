const links = document.querySelectorAll('#sidebar a');
const sections = document.querySelectorAll('#content section');
const sidebar = document.getElementById('sidebar');
const toggleSidebar = document.getElementById('toggle-sidebar');

function setInitialState() {
    sidebar.style.left = '0';
    sections.forEach(section => {
        if (section.id === 'glavna') {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
    links.forEach(link => link.classList.remove('active'));
    const autoruLekcijamaTab = document.querySelector('#sidebar a[href="#glavna"]');
    if (autoruLekcijamaTab) {
        autoruLekcijamaTab.classList.add('active');
    }
}

function toggleSidebarVisibility() {
    if (sidebar.style.left === '0px' && window.innerWidth <= 768) {
        sidebar.style.left = '-200px';
        const contentWithMargin = document.querySelector('.content-with-margin');
        contentWithMargin.style.marginLeft = '0';
        contentWithMargin.style.transition = 'margin-left 0.3s ease';
    } else {
        sidebar.style.left = sidebar.style.left === '0px' ? '-200px' : '0px';
        const contentWithMargin = document.querySelector('.content-with-margin');
        contentWithMargin.style.marginLeft = sidebar.style.left === '0px' ? '200px' : '0';
        contentWithMargin.style.transition = 'margin-left 0.3s ease';
    }
}

links.forEach(link => {
    link.addEventListener('click', (event) => {
        const targetId = link.getAttribute('href').substring(1);
        sections.forEach(section => {
            section.style.display = 'none';
        });
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.style.display = 'block';
        }
        links.forEach(link => link.classList.remove('active'));
        link.classList.add('active');
    });
});

window.addEventListener('load', setInitialState);

toggleSidebar.addEventListener('click', toggleSidebarVisibility);

window.addEventListener('scroll', () => {
    const arrow = document.getElementById('toggle-sidebar');
    if (window.scrollY > 0) {
        arrow.style.top = `${window.innerHeight / 2}px`;
    } else {
        arrow.style.top = '50%';
    }
});

function setInitialStateTwo() {
    sidebar.style.left = '0';
    sections.forEach(section => {
        section.style.display = 'none';
    });
    const autoruLekcijamaTab = document.querySelector('#sidebar a[href="#glavna"]');
    if (autoruLekcijamaTab) {
        autoruLekcijamaTab.classList.add('active');
    }
    const glavnaSection = document.querySelector('#glavna');
    if (glavnaSection) {
        glavnaSection.style.display = 'block';
    }
}

window.addEventListener('load', setInitialStateTwo);
