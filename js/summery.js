const blogs = document.getElementsByTagName('p');
// console.log(blogs);
for (const blog of blogs) {
    // console.log(blog);
    blog.style.backgroundColor = 'red';
    blog.style.color = 'white';
}
const error = document.getElementById('special-blog');
// error.innerText = 'new error';
error.innerHTML =  `
<h4>Special inner html</h4>
<div>
    <ul>
        <li> ami pari </li>
    <ul/>
<div/>
`

const friends = document.getElementById('friends');
// console.log(friends.children);
const fifth = friends.children[4];
console.log(fifth);
friends.removeChild(fifth);

// create element...

const friend = document.createElement('li');
friend.innerText = 'Friend-11';
friends.appendChild(friend);