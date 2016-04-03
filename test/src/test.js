const template = data => `
    <!-- section start -->
    <section>
        <h3>${data.title}</h3>
        <div>${data.date}</div>
        <dl>
            <dt>Coffee</dt>
            <dt>Black hot drink</dt>
            <dt>Milk</dt>
            <dd>
                <ul>
                    ${data.list.map((item) => `
                        <li>${item}</li>
                    `).join('')}
                </ul>
            </dd>
        </dl>
    </section>
    <!-- section end -->
`;

document.body.innerHTML = template({
    title : 'title',
    date  : '2000-01-01',
    list  : ['item1', 'item2', 'item3']
});
