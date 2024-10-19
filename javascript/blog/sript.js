function getPost() {
	const blogs = document.getElementById("wrapper");
	fetch("https://jsonplaceholder.typicode.com/posts")
		.then((response) => response.json())
		.then((bloglist) => {
			console.log(bloglist);

			bloglist.forEach((post) => {
				const card = document.createElement("div");
				card.innerHTML = `
                <h3>${post.title}</h3>
            <p> ${post.body}</p>`;

				blogs.appendChild(card);
			});
		})
		.catch((err) => console.error(err))
		.finally(console.log("done"));
}
