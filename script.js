document.addEventListener('DOMContentLoaded', function() {
    const tableContainer = document.getElementById('table-container');
    const table = document.createElement('table');
    let tableHtml = '<tr><th></th>';

    // ヘッダー行を作成
    for (let i = 1; i <= 12; i++) {
        tableHtml += `<th>${i}</th>`;
    }
    tableHtml += '</tr>';

    // 掛け算表の各行を生成
    for (let i = 1; i <= 12; i++) {
        tableHtml += `<tr><th>${i}</th>`;
        for (let j = 1; j <= 12; j++) {
            tableHtml += `<td>${i * j}</td>`;
        }
        tableHtml += '</tr>';
    }

    table.innerHTML = tableHtml;
    tableContainer.appendChild(table);
});
