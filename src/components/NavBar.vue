<template>
    <nav class="navbar">
        <div class="navbar-logo">
            <span class="navbar-title">JobFinder</span>
        </div>
        <ul class="navbar-links">
            <li><a href="/">Home</a></li>
            <li><a href="/">Jobs</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Contact</a></li>
        </ul>
    </nav>
</template>

<style scoped>
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--background-color);
    padding: 10px 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.navbar-logo {
    display: flex;
    align-items: center;
    gap: 10px;
}

.navbar-logo img {
    width: 40px;
    height: 40px;
}

.navbar-title {
    font-size: 1.2rem;
    font-weight: bold;
    color: #333;
}

.navbar-links {
    list-style: none;
    display: flex;
    gap: 20px;
    margin: 0;
    padding: 0;
}

.navbar-links li a {
    text-decoration: none;
    color: #333;
    font-weight: 500;
    transition: color 0.2s;
}

.navbar-links li a:hover {
    color: #007BFF;
}
</style>
