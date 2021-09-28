const users = [
    {
        id: 167464,
        firstName: "Jimmy",
        lastName: "Arnold",
        email: "jimmya@gmail.com",
    },
    {
        id: 578447,
        firstName: "Martha",
        lastName: "Goldman",
        email: "gold@hotmail.com",
    },
    {
        id: 864578,
        firstName: "Tim",
        lastName: "Burton",
        email: "timmy.hotmail.com",
    },
];

const ol = document.querySelector('#ol')

users.forEach(element => {
    const li = document.createElement('li')
    li.innerHTML = element.firstName +' ' + element.lastName
    li.dataset.id = element.id
    ol.appendChild(li)
});