const template = data => `
    <div>
        <h3>${data.title}</h3>
        <div>${data.date}</div>
        <ul>
            ${data.list.map((item) => `
                <li>${item}</li>
            `).join('')}
        </ul>
    </div>
`;

document.body.innerHTML = template({
    title : 'title',
    date  : '2000-01-01',
    list  : ['item1', 'item2']
});
